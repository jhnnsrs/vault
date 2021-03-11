---
id: provide
title: Ressource Management
sidebar_label: Ressource Management
slug: /provide
---

## Introduction 

Resources in a lap environment are always limited and access needs to be controlled if we want to use workflows.


```python
from bergen import Bergen, Node
from elements import Representation
import matplotlib.pyplot as plt


with Bergen():
	maxisp = Node.objects.get(package="basic", interface="maxisp")
	
	with maxisp.provide(n=10, app="imagej") as pod:
		results = []
		for rep in Representation.objects.filter(experiment="testing"):
			results.append(pod.assign({"rep": rep})
			
		plt.imshow(results[0].data)
```

This Code will look for the MaxISP nodes and try to provide 10 instances of the ImageJ version of this Node (If more then one template exists it will use the first one). Then it will will get all Representations filtered by the experiment name (testing) and for each of the rep its going to create a maxisp projection. (None of these tasks however will be run on the machine calling this). Please note that all of these tasks are running sequentially.

No we will takeone step into the asynchronous world:

```python
from bergen import Bergen, Node
from elements import Representation
import matplotlib.pyplot as plt


async with Bergen():
	maxisp = await Node.asyncs.get(package="basic", interface="maxisp")
	
	async with maxisp.provide(n=10, app="imagej") as pod:
		results = []
		for rep in await Representation.asyncs.filter(experiment="testing"):
			results.append(await pod.assign({"rep": rep})
			
		plt.imshow(results[0].data)
```

Ignoring the insertion of the keywords async and await, and the change from *objects* to *asyncs* there are no changes to our original code. However this is running now in an event_loop and all of the functions are called in the back and we are just awaiting the result. As we are however always pairing our calls with awaits, we are really just doing what syncronous code would do us.

|        | Emulated Synchronous     | Asynchronous      |
|--------|----------------|------------------|
| Call   | Parameters      | Parameters        |
| Return | awaited Result | unawaited Result |

Howere consider this example:

```python
from bergen import Bergen, Node
from elements import Representation
import matplotlib.pyplot as plt
import asyncio

async with Bergen():
	maxisp = await Node.asyncs.get(package="basic", interface="maxisp")
	
	async with maxisp.provide(n=10, app="imagej") as pod:
		unawaited_results = []
		for rep in await Representation.asyncs.filter(experiment="testing"):
			unawaited_results.append(pod.assign({"rep": rep}) # Omiting await
			
		results = await asyncio.gather(*unawaited_results)
			
		plt.imshow(results[0].data)
```

We have ommited the await call in our loop, so what now happens it that during our loop arkitekt gets called with the input rep as fast as the loop progresses . Only when we await all of the unawaited_results with the asyncio.gather function (just a function that gathers and awaits all of the unawaited_results that we pass) through awaiting it. We are waiting for all tasks to be finished in *parallel*.

> Paralellizing computational workloads through asynchronous programmig is one interesting application of the Arkitekt framework, but frameworks as DASK are way better optimized  for distributing these workloads than Arkitekt ever will be. If you are searching just for a way to parallize your python workloads DASK is the solution you are searching for.

>   Arkitekt shines when using asynchronous programming to orchestrate multiple devices in analysis workflows.

## Generator  and Functions

As discussed previously makes a destinction between two type of Nodes: [[Nodes#Generator | Generators]] and [[Nodes#Function | Functions]].  Generators will yield data in a constant stream (until they are completed or cancelled) and Functions will return one result for each call. This destinction is reflected in Arkitekts programming interface for this functions both on the [[Pods#What is a Pod | pod ]] and the client:

### Function
Function just return 'normally' with a return. Once the functions returns or raises an Error it stops excecuting and sends the result as done.

Pod:
```python
pod = Pod(...)

@pod.host(package="basic", interface="maxisp", gpu=True)
def maxisp(helper, rep: Representation, dim: str = "z") -> Representation:
	maxed = rep.data.max(dim=dim)
	
	output = Representation.objects.from_xarray(maxed)
	return output
	
pod.run()

```
Client:
```python
async with Client(...)
	maxisp = await Node.asyncs.get(package="basic", interface="interface")
	rep = Representation.objects.get(name="best_sample")
	result = await maxisp(rep=rep)

plt.imshow(result.data)
```


### Generator

Generators are called ONCE and are yielding data until they are finished ("intermediate results"). This yielded result is then automatically put  into a stream for arkitekt and can be consumed by the client iterating over the result.

Pod:
```python
pod = Pod(...)

@pod.host(package="micro", interface="timeseries", room="sted")
def timeseries(helper, t: int, x: int = 1000, y: int: 1000, z: int = 1) -> Representation:
	for i in range(t):
		# Acquire Image logic
		stack = acquire(x,y,z)
		rep = Representation.objects.from_xarray(stack)
		yield rep
	
pod.run()
```
Client:
```python
async with Client(...)
	maxisp = await Node.asyncs.get(package="micro", interface="timeseries")
	async with maxisp.provide(room="sted") as pod:
		async with pod.stream({"x": 100, "y": 100, "z": 30, "t"=10 }) as stream:
			async for result in stream:
				print(result)
	
	
```

## Advanced: Streams

Asynchronous programming helps simplifiyng a lot of modern analysis worklflows and makes complex workflows more humanly readable. However the async and await syntax can be intimidating for even seasoned developers as in more complex setups it becomes increasingly dificults to manage async and awaits.

A more accessible abstraction for many has become Reactive Programming, a style of programming popularized by the Rx Family of Language extensions (Especially RxJavascript has seen a lot of attention). This is why we choose it as a paradigm for our visual flow programming interface. ( with some minor adjustments). And also allow programmatic access through the Python interface.

In Reactive Programming we are concerened with Data Streams. This Streams originiated from Observables that are pushing data down the Streams, where this data is passed through a pipe of operations that alter the data in the stream and are finally consumed by a Subscriber. 

> Stream processing with the Reactive Extensions has not seen a massive adoption in the Python ecosystem and the packages are poorly maintainted. If you want to use streams. Make sure you check out our Javascript client.

> As the aioreactive extensions have a hard reliance on Python 3.9 this is an opt in feature of the python client, currently as it is still a pre release arkitekt client ships with aiostreams

## Usage Example


Multiple Microscopes:

Your experimental design requires you to  acquire images with to microscope modalitites at the same time and then combine their images in a processing pipeline.

```python
from bergen import Bergen, Node
from elements import Representation
from aiostream import stream, pipe

async with Bergen():
	timeseries = await Node.asyncs.get(package="micro", interface="stack")
	combine_reps = await Node.asyncs.get(package="custom", interface="combine_reps")
	
	# Provide or Select Pods running on Multiple Devices
	sted_timeseries = await timeseries.provide(device="sted")
	palm_timeseries = await timeseries.provide(device="palm")
	
	params = {
	"x": 1000,
	"y": 1000,
	"z": 10,
	}
	
	merged = stream.zip(
		sted_timeseries.stream(params),
		palm_timeseries.stream(params)
	)
	
	processed = merged | pipe.map(lambda two_reps: channel_merge({"reps": two_reps}))
	
	
	async with processed.stream() as stream:
		async for result in stream:
			# Do stuff here
			plt.imshow(result.data)


```

 
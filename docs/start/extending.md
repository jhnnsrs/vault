---
id: extending
title: Extend with your own Code
sidebar_label: Extending
slug: /extending
---


### Design

We firmely believe you shouldn't learn to many things about distributed computing to profit from some of its
advantages. This is why we use the design of nodes and streams to represent analysis flows naturally.
But at some point all visual programming designs fall short and you need to go barebone. We want this experience
to be easy and enjoyable.


### Your Script

No matter if you are a seasoned python developer or just starting out, on of the tediest tasks in programming is handling
the various file formats, creating user interfaces, and trying to parallelize and orchestrate different parts of your software

We do think that their are valuable lessons to learn but sometimes you just wish you could get your analysis function
running with all input files and from anywhere.

#### Example

Imaging you are trying to get your newly found super smart way of calculating cell distances out there. Your team wants this to
work but is having a hard time understanding your python code and how to call them. Here is your code

```python

def calculate_mean_distance_between_cells(segmented_image):
	""" Return the Mean Distance between all of the cells in the segmented Image

	Args:
		segmented_image (np.array): The Segmented Image

	Returns:
		int
	"""

	# Immensly difficult calculation involing all of your attention
	return 5

```

#### The old way

Well, nobody can call this. Better write a whole user interface for that, okay lets install libraries. PyQt? QTinker? I dont't
realdy care about all of this. Better only use it myself


#### The New Way


```python
from mikro import Representation
from arkitekt import Agent

agent = Agent()

@agent.register()
def calculate_mean_distance_between_cells(segmented_image: Representation) -> int:
	""" Return the Mean Distance between all of the cells in the segmented Image

	Args:
		segmented_image (np.array): The Segmented Image

	Returns:
		int
	"""

	# Immensly difficult calculation involing all of your attention
	return 6


agent.provide()

```

Thats it. Add this few lines and you have a fully working node part of your system.
Use it in analysis software. Call it through the webinterface. Done. Oh and of course you 
can call this from anywhere in the world.


### The Easy Way

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





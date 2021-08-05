---
id: complex
title: Complex Workflow
sidebar_label: For your appetite
slug: /complex
---

import { FlowPlayground } from "../../src/components/playgrounds/flow/FlowPlayground"
import { DownloadButton }  from '../components/download_button';


### The Cost of Optimization 

Now that we optimized this

Hallo soinsoisn

you might wonder why all that hassle? Why automatize such a trivial task? You might be perfectly
content with copying your files from A to B. Is this really worth the effort of installing
a beta software on your setup?

And I completely agree. Not every problem needs to be optimized:


<div style={{textAlign: 'center', marginBottom: 20}}>
 <img src="https://imgs.xkcd.com/comics/is_it_worth_the_time.png"/>
</div>

xkcd gives you a little help for deciding if you really should invest in making Arkitekt a Platform.
Installation time for setting things up are rougly 2 hours. 


## Beyond A and B

But here are some things that automation of your intermediate
tasks will help you acchieve and are hard to manage without
a data and message broker like arkitekt

### Real Time Monitoring


<FlowPlayground graphurl="/static/graphs/complex.json" height={600}/>

This workflow encompasses the acquistionen pipelined analysis of a distributed scaling down of the image
some deep learning enable segmentation and then displays the data in real time on your napari instance.
You cannot run faster than real-time with your portable storage device.

### Batch Processing of specific Queries


Our Data Storage solution provides an easy to learn industry-standard query language (GraphQL)


### Lets Bridge!


Isn't it that what you wanted? Wasn't this your mental model in the first place? Why is it so hard to simply transfer
and create multiple files for just this step? Well with Arkitekt it is just that! Lets get you started!


### Install The Platform 

Follow the instructions on the installation page to install your local / network installation.

:::note

For this installation to work you must choose your installation-type to be NETWORK, this will make sure that
network devices can connect and find your local instance. (Otherwise autoconnect features wont work). Also
you need to enable "Allow Trusted BioImage Apps".

:::

#### Optional: Install Client App

Wasser wraps the whole web interface of the platform in a cross-platform desktop app. It provides features
like autoconnect and is faster than the web interface but thats about it:

<DownloadButton>Download Wasser</DownloadButton>

You can still access this Interface through the website by going to "http://{YOUR_INSTANCE_ADRESS}"



### Install Napari and Fiji Wrapper 

Lets make Napari and Fiji communicate. As Napari and Fiji are themselves great and extensible programs, Arkitekt tries to
interfere as little as possible with these applications. However we have to wrap these applications in a little helper
program that enables us to identify them easily. 

| Napari   | Fiji      |
| -------- | --------- |
| <DownloadButton>Download Napari</DownloadButton>      | <DownloadButton>Download Fiji</DownloadButton> 

Just follow the  installation instructions for both applications.

:::note

Especially Fiji has grown to be a very versatile and customizable
software package, so if you don't want to install a fresh application you can point it easily to your local Fiji/ImageJ folder.

:::

<br/>



Lets face it: Data handling is hard. How many portable storage drives are laying on your desk right now?
How many of your image files are scattered in cryptical folder structures? Of course you have a network 
storage, but that is a cryptical.

We firmly believe that this shouldn't be the case and 


### Our First Automation Task

You have two image analysis apps installed on your computer and you briefly want to open
an image that you have opened 









```python

def calculate_mean_distance_between_cells(segmented_image):
	""" Return the Mean Distance between all of the cells in the segmented Image

	Args:
		segmented_image (np.array): The Segmented Image

	Returns:
		int
	"""

	













```







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






### Arkitekt doesn't care about Data!

Arkitekt makes no prior assumptions on how you organize your data. 

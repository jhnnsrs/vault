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

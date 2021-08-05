---
id: firstworkflow
title: First Workflow
sidebar_label: First steps
slug: /firstworkflow
---

import { DownloadButton }  from '../components/download_button';


### From A to B

Friday afternoon. You have a short discussion with your collegue and
you have to show that one image stack you took yesterday on your STED
microscope to them. You already copied the image to your local machine
and opened in ImageJ, but he is at the other side of the institute, so you
briefly copy the file to your portable hard drive, label the folder asdf, copy the file and run there as fast as you can.
You arrive, your collegue awaits you with a program you never saw, he introduces you to it as "napari" and tell you
its perfectly made for visualizing your image in 3D. You are excited and you open the file: Error. Cannot read the image
format. Ah right you put the RAW Microscope image on that. ImageJ can read it, napari not, you run back and try to convert
the image. Again in asdf and back we go. Ah and a Maximum Instensity Projection would be nice to show that off as well...
Your folder size increases, you are disgusted by your own labeling strategy.


### Lets Bridge!



Isn't it that what you wanted? Wasn't this your mental model in the first place? Why is it so hard to simply transfer
and create multiple files for just this step? Well with Arkitekt it is just that! Lets get you started!


### Install The Platform 

Follow the instructions on the installation page to install your local / network installation.

:::info

For this installation to work you must choose your installation-type to be NETWORK, this will make sure that
network devices can connect and find your local instance. (Otherwise autoconnect features wont work). Also
you need to enable "Allow Trusted BioImage Apps".

:::


#### Optional: Install Client App

Wasser wraps the whole web interface of the platform in a cross-platform desktop app. It provides features
like autoconnect and is faster than the web interface but thats about it:

<DownloadButton>Download Wasser</DownloadButton>

You can still access this Interface through the website by going to "http://{YOUR_INSTANCE_ADRESS}"



### Install Applications 

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

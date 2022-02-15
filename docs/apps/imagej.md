---
id: imagej    
title: ImageJ Support
sidebar_label: ImageJ
slug: /apps/imagej
---

import { DownloadButton }  from '../components/download_button';

## MikroJ







### MikroJ is just ImageJ

MikroJ is Mikros flavour of ImageJ. It is a fully funcitonal fiji installation that is wrapped by little
python code to make it operational with the platform. By default it allows you to easily show and upload
images. MikroJ is however also able to take automation either further by using ImageJ macros and run them
as nodes on the platform. 



### Plugins / Macros

Some standard macros are built in but you can easily convert any macro code in imagej by just giving
the platform information of what input and outputs it needs.


### Macros vs Tasks

As ImageJ Macros have no internal definition of what inputs and outputs it takes and as we have to (currently)
brige between python and java implementing a imageJ macro requires three steps

1. definition
2. wrapping
3. implementation

To provide a redistributable wrapped Macro you can do this in one plugin file.
We use markdown syntax to describe your plugin, document and insert the relevant code


You can use python script tags to create a definition:
```python
 def multiview_reconstruction(list: List[Stack]) -> Stack:
     """ Mulitiview Reconstruciton
     
     
     
     """"
```

and then grooy or java for your implementation.


```groovy
var x = 3



```


## Science and Immutability

Science

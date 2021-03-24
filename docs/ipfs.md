---
id: ipfs    
title: Interplanetary File System
sidebar_label: Interplanetary File System
slug: /ipfs
---



## Arkitekt and ipfs




## Representation Abstraction

As Arkitekt doesn't make any assumpations about the shape of the Data and Its providers and only about the API,
you can easily use IPFS as your storage backend for.

Representation is the interface abstraction we use for imaging data




# Elements vs IPFS

Elements as the datacompanion for arkitekt saves files on a S3 Storage cluster (in the docker version we spin up a local
minio instance for storing your data). Every file you pass to a function will then save the output again on the local instance
however as you can plug and play different data providers into your *arkitecture* you can easily save the data on a worldwide distributed
filesystem like IPFS and make your data discoverable from anywhere.

## Arrays

As most of your Data 
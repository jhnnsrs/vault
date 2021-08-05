---
id: data    
title: Elements
sidebar_label: Data
slug: /data
---

import { TutorialButton}  from "./components/tutorial_button";

## How we see scientific Data!

Handling scientific (image)data is inherently a mess: Requirements for the shape and size of your dataset
constantly change with new technologies. Different modalitites of acquistion
are popping up every other month and need to be accomodated for. There is a 
desire to explore relations in your data that are not perfectly evident at the start of your project.

No wonder that the basic folder/file structure has survived until today. Most attempts to
structure data are just not flexible enough. 

Services like Omero have made tremendous efforts to standardize image data and have introduced tools as
the bioformats reader and the omero data server. Arkitekt heavily relies on this amazing open source projects
and is compatible with them (check out the file-reader nodes and the omero-server plugin).

Building on this standardization. we introduce a storage solution that was catered to querying the data in
a meaningfull and simple way, emphazing the relational and dynamic nature of scientific data: Elements



## Features

#### For Life-Scientists

- Central unified Storage for all of your Image Data
- Easy UI for User Data Management
- Accessible from anywhere
- Organizes Data into Images, Samples, Experiments
- Label and Browser through dynamic Metadata
- Fine grain organization of your Data through Tags
- Real-Time Updates for creation or updates to your data

<details>
    <summary> For Developers</summary>
    <div>
        <div>
            <div>
                <br/>
            <ul>
                <li>Build on the mature Django 3.1 framework</li>
                <li>Easy to use GraphQL API with real-time subscribptions</li>
                <li>Easily extensible through modules and new data models</li>
                <li>Freely deploybale (no dependencies on the rest of the platform)</li>
                <li>Powered by high-performant, low latency storage with support for Petabyte sized Datasets(zarr, minio)</li>
                <li>Seperate Admin Interface for low level access (django-admin)</li>
                <li>Swappable Storage Backends (local or cloud)</li>
                <li>pluggable Fine Grained User and App Access Controls (oauth2)</li>
            </ul>
            <br/>
            <h4>Tech Buzzword Nutshell</h4>
            Elements is a schema first storage solution, that exposes an easy to use realtime GraphQL API on top of async Django application, 
            backed by a S3 Object Store and powered by a relational database PostgreSQL. To store image data we use an XArray Interface on top of zarr 
            with efforts to support the ome-zarr ngff standard once it matures to enable massively parallized access.
            </div>
        </div>
    </div>
</details>




### Interaction with your Data

As a non-programmer life scientist you will not have to deal with our advanced (awesome) data query system. You can simple
use the visual Databrowser for browisng and monitoring your private data.








<TutorialButton> Jump to the Data Tutorial </TutorialButton>

We highly encourage you to go the extra mile and checkout Elements easy to use API to get structured Data out of our server
that can be easily exported to your favourite analysis software and works together with our python interface.

<TutorialButton> Jump to the GraphQL Tutorial </TutorialButton>




```python
def x(4):
    return 



```



### Query your Data: GraphQL

Taking a dive into the vast of underground 


Scientific data is inherently relational and explorational: Images belong
to Samples and Experiments, they all 


## Schemas









### Arkitekt doesn't care about Data!







Arkitekt makes no prior assumptions on how you organize your data. 

### Datapoints

Every datapoint can register models that Arkitekt will make accessible to your tasks.




### Delegation of interesets 

#### Arkitekt

Arkitekt cares about your Work and how to distribute it, it knows where work
can done, who can is allowed to do what and can also provide new workers if
necessary.

#### Herre 

Herre just helps everyone know who who is (Authentication) and which roles 
that user has with the app he signed in (Authorization).

#### Elements

Elements is your Data broker for Image Analysis. In fact it is really the 
only part that makes this platform an Image Analysis Platform.

#### Flow

Flow is the workflow manager. It takes your graphical representation and
runs it according to your definition. It only talks to Arkitekt.





### How data gets accessed

```python
from arkitekt import Client
from grunnlag.schema import Stack

with Client():
    stack = Stack.objects.get(name="imagestack-a")
    
    print(stack.data)

```

What will Arkitekt do:

```python
with Client():
```

We connect to the Arkitekt platform through authenticating via Oauth2/JWT and we negotiate our communication and data access protocols.
As every Dataprovider has already been registered with the platform, we acquire all necessary credentials for accessing the database
or webservice.

:::info

You can through a negotating hook specify which Dataservice you want to associate with the model imported by the schema. This allows
you to restrict certain users to using a certain service over another (e.g. use a seperated Database then your Labs Database)

:::


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
---
id: started
title: Get Started
sidebar_label: Get Started
slug: /
---


### How to develop an App for Arkitekt

Arkitekt provides its own little command line utilitly to download
necessary configuration to find the servers and guides you through
the app generation. Just open a folder where you want your App
to be developed in and call.

```bash
arkitekt init
```

The cli will guide you through a normal setup process for an application
for the platform.

During the installation process you have the choice to create a folder
structure that reflects your new apps capabilities:

You can choose for your app to be templated as agent or client.

None of these decisions are final, you can easily transition between the apps.

# Client

A client app is a script or GUI that can access the data (of the login user)
and manipulate it on the fly. A Client app is not controllable by arkitekt so
cannot provide an API with Tasks and Nodes. You can however controll other apps
through the use interface.

```python
from mikro import gql
from arkitekt import use

query = gql("""
query {
    mystacks(order: "-created_at", limit: 5){
        id 
        name
    }
}
""").run()
# gets the latestes 5 stacks for the login user 


print([rep.name for rep in query.mystacks])
# shows the name


display_stacks = use("napari/display_stacks")
# gets the implementation of naparis display stacks

display_reps(query.mystacks) # displays the stacks

```

This is an example of a fully functional client app. Client apps
are create for prototyping a specific analysis and or generating
specific analysis that no one in your lab might need.


# Agent

Agents are apps that do stuff and can be called by other apps 
and orchestrated in workflows. They provide a remote procedure
call interface for their register functions and automatically
make themselvers discoverable on the platform.


```python
from arkitekt import register
from mikro import Stack


@register()
def treshold_stack(stack: Stack, threshold=3) -> Stack:

    nestack = stack.data[stack.data > threshold]
    return Stack.objects.from_xarray(newstack, derived=stack)


```






Agents:
    - UserApp

        - GUI App
        - Script App
        - Docker App

    - BackendApp

Clients:
    -  User






In the and you should be left with a folder structure like this:

```
folder:
    - fakts.yaml
    - run.py

```


```

```bash
arkitekt run
```



```python
from arkitekt import use

use()





```
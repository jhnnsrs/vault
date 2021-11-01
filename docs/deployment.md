---
id: deployment    
title: Deployment
sidebar_label: Deployment
slug: /deployment
---




### Open Arkitekture

The Client/App side:

Postman -> A python/javascript/dart client that establishes a long running connection to the Arkitekt Service 
(Websockets and GRPC where supported) and signals this Client to be online.

Bergen -> A python client that enables native bindings of python functions as workers in the layout

GraphQL Datapoint -> A python bridge that connects a GraphQL Service as a Datapoint in the Platform and establishes
its access rights.


What is an App:

An App is an Application that has specific rights while interacting with the platform
We destiniguish between to major application type:
BackendApps and UserApps

UserApps are tight to specific users and can only act on their behalve in a specific scope.
This ensures that if you install a new App in your analysis pipleline, it can only access
and mutate selected data. E.g you could include a webapp on a public server and give it only
the right to look at specific datasets. Every access to other data of yours would be blocked for
this app.

BackendApps are apps that can make request on behalve of other users, and therefore can access
data that does not belong to everyone. Access can still be scoped but in general these apps are
a point of potential exploit. In general it is best to use them sparingly.



What is a Node:

A Node is an agnostic representation of what an image analysis task is. It provides a blueprint
and documentation of what inputs and outputs a supposed Implementation will receive and how to present it 
to the user.


What is a Flow:

A Flow is an orchestrastional pattern of Nodes and reactive Elements, that are able
to stich multiple Nodes together to facilate an analysis pipeline or loop.

What is a Template:

A Template is an implementation of a {Node} by an {App}, its the App telling that it
can provide implementations for this specific Node, when desired.


Node:
Task: Maximum Intensity Projection
Input: ImageStack(xyczt)
Output: Image(xyct)

Template:
MikroJ run by Johannes on Labcomputer 1: Fiji Implementation of Maxium Intensity in Java
MikroJ run by Karl on Labcomputer 2: Fiji Implementation of Maxium Intensity in Java
PythonApp run by Johannes on Labcomputer 1: Maximum Intensity Implemtnation in Numpy









:::note 

The difference between Node and Template might seem a bit technical, but a Node provides a strong
conceptual Contract between different agents in a workflow. Iz allows for stream lined
testiting, and easy parallelization as we can be sure that every app that subscribes to this will follow
the dogma.


:::




What is a Provision:

A Provision is a contract between arkitekt and a providing app and tells the app
how many instances of a certain template are necessary, as well as the creating user
and what should happen in case of failure.



What is a Reservation:

A reservation is a (shortlife) contract between an App that wants to call another app.
When Arkitekt receives a request for a reservation of a specific Node,
it checks for running provisions, takes care of spawning new ones if necessary (based on passed
params {Provisoin} params, and {Template} params), establishes a channel for assignment
and cancellation.










The platform consists of four major componenets:

Herre -> The authentication server that handles authentication and authorization (link Auth vs Auth) 
for every connected App in the system

Arktitekt -> A deployment of real-time django and rabbitmq that safely exposes an asynchronous call API (async RPC) 
through fully documented nodes of all connected Apps.

Fluss -> An backend App that uses reactive workflows of nodes built through drag and drop and exposes them again as
Nodes through Arkitekt (A workflow is a Node)

Port -> A backend app that creates sandboex environments from git repositories and docker containers and deploys
them on cloud hardware.

All of this modules are completely agnostic of the data
that is passed through them. What makes mikro for microscopic image analysis is mikro:

Mikro -> A simple central data storage solution that organises your images and accociated data in relations
of experiments, samples, metrics...

MikroJ -> ImageJ bindings for the Mikro Arkitekt that enables easy creating of nodes through macros

MikroNapari -> Napari Bindings for the Platform







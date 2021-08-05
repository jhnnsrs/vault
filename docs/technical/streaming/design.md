---
id: stream-design
title: Design
sidebar_label: Design
slug: /technical/stream-design
---

### Why we chose the Protocols we chose

Arkitekt decides to hide the underlining Protocol for the RPC interface from the User an instead focuses on bringing native bindings for (asynchronous) function calling. 
We chose this aproach to enable swapping out core components of the platform to enable the widest variety of Implementation Providers.

Out of the Box we support two communication protocols to interact with the Arkitekt service
that you can choose to implemement in your app.

- Websockets
- gRPC

In a perfect world we would have opted only for the gRPC protocol as it already enables event streaming over long lasting connections and would perfectly suit our purposes. However 
there is until now a limited support for the gRPC protocol as it heaviliy utilizes protocol-buffers that for example are not (yet) supported on the Web. Also legacy applications might not
be able to interface with the platform through the gRPC protobuf protocol.

This is why we also support the performance sub-optimal Websockets protocol to call the backend server. This enables the javascript client to call the RPC functions without any gateway.

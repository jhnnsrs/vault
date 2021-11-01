---
id: kafka    
title: Kafka
sidebar_label: Kafka
slug: /kafka
---

### On the State of Kafka

Due to the nature of Arkitekts "Streaming" approach, an event streaming platform like Kafka seems
like a perfect fit.

#### Why not Kafka then?

Kafka is overkill.

Kafka is a perfect fit for a Top 100 Fortune Company that has a centralized architecture and needs to
process hundreds of thousand events every second. Normal labs do not deal with massive amounts of data like that. 
This is why we ship with RabbitMQ as streaming and PostgresSQL as persitent layers as default.

However most code in Arkitekt is written to accomodate an easy transisiton to a Event Streaming platform like Kafka.

### Why consider Kafka?

Every action (Assignation, Reservation, Provision) and they're related processing and status updates in Arkitekt is an event. Platforms like Kafka have been 

The logs and datascience, every Node (Task) is able to send logs. Normally we restrict the amount of logs send to the platform at any given instance to let the resources be free for high priority message processing
(they have higher priority anyways ). KSQL is a perfect fit for querying these logs 
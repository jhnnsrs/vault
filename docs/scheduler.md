---
id: scheduler
title: Scheduler
sidebar_label: Scheduler
slug: /scheduler
---

## Scheduler

Scheduler try to create a provision mapping from a reservation.

Image you specify a reservation like this

Provide Maximum Intensity Node and paralleize it using preferably
five instances, preferably again on on agent


ImageJ implements this Task and allows for one task per connected agent.
Napari implements this Task and allows for one task per connected agent.
Cluster implements this Task and allows for two task per connected agent.

### What happens

We send this reservation to the scheduler.

``` python

desired_amount =
all_templates = Templates.filter(node="@elements/maxisp")

# find assignable ACTIVE provisions
active_provisions = provisions.filter(templates__in=all_templates).filter(active=true).assignable_for(user=reservation.user, app=reservaion.app)

for aprov in active_provisions:
    messages += add_reservation_to_provision(aprov)

if len(active_provisions) < desired_amount:
    assert can_provide(user, app), "User cannot create new Provisiosn"


    qs =  Templates.filter(node="@elements/maxisp")
    if res.params.prefer_active == True:
        qs = qs.sort(app_agents_active == True) # prefer templates who have an app with at least on active agent

    qs = qs[:desired_amount]

    if reserve.agent:
        send_to_private_agent_queue(reserve.agent)
    else:
        send_to_app_queue() # a queue where all agents listen to


    create_provision()



templates.sort()

```

Agent

https://stackoverflow.com/questions/19304157/getting-the-reason-why-websockets-closed-with-close-code-1006

```python

AlreadyConnectedError = 3990


on_connect:
    check if Agent already connected:
        self.close(AlreadyConnectedError)

    token and qs.websocket_identifier = "main"
    
    
    get_provisions_filter_active
    subcribe prive_agent_queue
    subscribt all_agent_queue

on_provision:
    on provide:
        send provisionbindmessage
        if provision.status == CANCELLED = "Ommit this Provision" # This is a race condition catcher because it could still be in the queue
        provide.agent = this.agent

    on_unprovide:
        if unprovision successfull:
            check if we need to change the reservation:
                

````

Scheduler

```

unreserve:



    for prov in reservation:

        if needs to kill other:
            if provision.agent is None: 
                log("It was nether bound to an actor")
                provision.status = CANCELLED
                pass
            send_to_private_agent_queue(reserve.agent)        







Unprovide

```python

if prpvision





```

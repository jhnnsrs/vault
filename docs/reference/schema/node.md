---
sidebar_label: node
title: schema.node
---

## Node Objects

```python
class Node(GraphQLModel)
```

Abstract distributed Function or Generator

Node is arkitekts abstraction of a distributed function.
They are drawn by applications and constitute a typed
function specification. Nodes themselver are not
implementations (i.e they have are just documentation)

An implementation of a Node provided by an App is a
Template. A running instance of this is provided for by
an active Provision.

Assigning arguments through a Node always involve an
intermediary step of a reservation, where you are creating
a unique link to specified provisions. Through this
arkitekt achieves paralleization.

Nodes belong to repositories. A repository is just a
collection of nodes.

Apps that enable original functions, with their own
documentation will put these nodes in their repository.

Apps can also pass a node as a template paramter, indicating
that this Node will be an implemntation and not create a
new node.

**Attributes**:

  type (NodeType):
- `args` - A list of ArgPorts that specify types and desired widgets
- `kwargs` - A list of ArgPorts that specify types and desired widgets
- `returns` - A list of ArgPorts that specify types and desired widgets

#### reserve

```python
def reserve(reference: str = None, provision: str = None, monitor: Monitor = None, ignore_node_exceptions=False, transition_hook=None, with_log=False, enter_on=[ReserveState.ACTIVE], exit_on=[ReserveState.ERROR, ReserveState.CANCELLED, ReserveState.CRITICAL], context: Context = None, loop=None, **params) -> Reservation
```

Reserve

reserve takes a Node and returns a reservation instance, this
a Reservation is a Context Manager that establishes a long
lasting link for the duration of the assignments with provisions

If called without the persist attributes, reservations are ephemeral
and will be put as inactive once you exit the context manager or the
transport to arkitekt disconnects.

If you want to reuse a reservation you can ask for arkitekt to persist
the reservation so it will not be deactivated on leaving the context
manager. Make sure to save the reservation reference for this task.
This should be used sparely as their is no guarentee that arkitekt (
or an admin) will not clean between to runs.

**Arguments**:

- `reference` _str, optional_ - [description]. Defaults to None.
- `provision` _str, optional_ - [description]. Defaults to None.
- `monitor` _Monitor, optional_ - [description]. Defaults to None.
- `ignore_node_exceptions` _bool, optional_ - [description]. Defaults to False.
- `transition_hook` _[type], optional_ - [description]. Defaults to None.
- `with_log` _bool, optional_ - [description]. Defaults to False.
- `enter_on` _list, optional_ - [States when of the reservation where we will enter the context manager. Defaults to [ReserveState.ACTIVE].
- `exit_on` _list, optional_ - [description]. Defaults to [ReserveState.ERROR, ReserveState.CANCELLED, ReserveState.CRITICAL].
- `context` _Context, optional_ - [description]. Defaults to None.
- `loop` _[type], optional_ - [description]. Defaults to None.
  

**Returns**:

- `Reservation` - [description]

#### \_\_call\_\_

```python
def __call__(*args: Any, *, fill_graphical=True, **kwargs) -> Any
```

Call

Call is a convenience on max function, its reserves the Node and wraps it either as
an geneator (both async and non async depending on context) or call it as a function
this should only be done if you know what you are doing.

**Arguments**:

- `reserve_params` _dict, optional_ - [description]. Defaults to {}.
  

**Returns**:

- `Any` - Generator or Function


---
sidebar_label: node
title: schema.node
---

## Node Objects

```python
class Node(GraphQLModel)
```

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


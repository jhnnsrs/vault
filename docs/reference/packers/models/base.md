---
sidebar_label: base
title: packers.models.base
---

## StructureModel Objects

```python
class StructureModel(Structure)
```

Model

Model is the abstract baseclass of all Serverside Models and provides a Django ORM
like interface for retrieving data from the Server.

Implements:
id (str): Every Model has an id (UUID) that identifies the Server Instance

**Arguments**:

- `BaseModel` _[type]_ - [description]
- `Structure` _[type]_ - [description]
- `metaclass` _[type], optional_ - [description]. Defaults to ModelMeta.
  

**Raises**:

- `NotImplementedError` - [description]
- `NotImplementedError` - [description]
  

**Returns**:

- `[type]` - [description]


---
sidebar_label: registry
title: packers.registry
---

#### register\_structure

```python
def register_structure(identifier: str = None, overwrite: bool = False, registry: PackerRegistry = None)
```

Registers a Structure

Registers a Structure with the a Package Registry. Once registered Arkitekt will use this Structure to expand and shrink Node requests.

**Arguments**:

- `identifier` _str, optional_ - A unique identifier to be known be. Defaults to None.
- `overwrite` _bool, optional_ - If overwrite is set this Structure will replace exisiting Structures, otherwise we return an error on Reigstration
- `registry` _PackerRegistry, optional_ - Which registry to use in order to register this Strucute. Will use the default Registry if not set


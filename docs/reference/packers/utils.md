---
sidebar_label: utils
title: packers.utils
---

## SerializationError Objects

```python
class SerializationError(Exception)
```

Serialization Error

Serialization Errors are raised when a Shrinking or Expanding Error
occurs during a shrinking/expanding event

## ShrinkingError Objects

```python
class ShrinkingError(SerializationError)
```

Shrinking Error

Is being rased from a Port Shrink Exception

## ExpandingError Objects

```python
class ExpandingError(SerializationError)
```

Expanding Error

Is being rased from a Port Expand Exception

#### shrink\_inputs

```python
async def shrink_inputs(node, *args, **kwargs) -> Tuple[List[Any], Dict[str, Any]]
```

Shrinks args and kwargs

Shrinks the inputs according to the Node Definition

**Arguments**:

- `node` _Node_ - The Node
  

**Raises**:

- `ShrinkingError` - If args are not Shrinkable
- `ShrinkingError` - If kwargs are not Shrinkable
  

**Returns**:

  Tuple[List[Any], Dict[str, Any]]: Parsed Args as a List, Parsed Kwargs as a dict

#### expand\_inputs

```python
async def expand_inputs(node, args: List[Any], kwargs: Dict[str, Any]) -> Tuple[List[Any], Dict[str, Any]]
```

Expands Args and Kwargs

Expands the Args and Kwargs according to the Node definition

**Arguments**:

- `node` _Node_ - Nodes
- `args` _List[Any]_ - Srhinked Args
- `kwargs` _Dict[str, Any]_ - Shrinkag Kwargs
  

**Raises**:

- `ExpandingError` - If args are not expandable
- `ExpandingError` - If kwargs are not expandable
  

**Returns**:

  Tuple[List[Any], Dict[str, Any]]: Expanded Args, Expanded Kwargs

#### shrink\_outputs

```python
async def shrink_outputs(node, returns) -> List[Any]
```

Shrinks returns

Shrinks the returns according to the Node Definition

**Arguments**:

- `node` _Node_ - The Node
- `returns` _List[any]_ - The Returns
  

**Raises**:

- `ShrinkingError` - If returns are not Shrinkable
  

**Returns**:

- `List[Any]` - Parsed Returns

#### expand\_outputs

```python
async def expand_outputs(node, returns) -> List[Any]
```

Expands Returns

Expands the Returns according to the Node definition


**Arguments**:

- `node` _Node_ - Node definition
- `returns` _List[any]_ - The returns
  

**Raises**:

- `ExpandingError` - if they are not expandable
  

**Returns**:

- `List[Any]` - The Expanded Returns


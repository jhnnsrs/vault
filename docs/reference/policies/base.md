---
sidebar_label: base
title: policies.base
---

## ReservePolicy Objects

```python
class ReservePolicy(GraphQLObject)
```

Determinns how the once running
provision can be reserved

**Arguments**:

- `GraphQLModel` _[type]_ - [description]

## ProvisionPolicy Objects

```python
class ProvisionPolicy(GraphQLObject)
```

Determins who and when a user can
provision a pod also, if it should die or not
after

**Arguments**:

- `GraphQLModel` _[type]_ - [description]

## BalanceStrategy Objects

```python
class BalanceStrategy(GraphQLObject)
```

Distinguihhes how reservations to this worker are being handles
should we try to provision a new worker for every reservation, etc

## OneToOneStrategy Objects

```python
class OneToOneStrategy(BalanceStrategy)
```

Map every Reservation to its own Provision

**Arguments**:

- `BalanceStrategy` _[type]_ - [description]

## ManyToOneStrategy Objects

```python
class ManyToOneStrategy(BalanceStrategy)
```

Share a provision amongs a lot of reservations

Use Cases:
- A lot of users can access one resource (e.g. Microscope) without saving
intermediate state (e.g a communal slice is mounted)

**Arguments**:

- `BalanceStrategy` _[type]_ - [description]

## OneToManyStrategy Objects

```python
class OneToManyStrategy(BalanceStrategy)
```

Map every Reservation to its own Provision

**Arguments**:

- `BalanceStrategy` _[type]_ - [description]


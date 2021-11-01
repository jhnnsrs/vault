---
sidebar_label: reservation
title: contracts.reservation
---

## Reservation Objects

```python
class Reservation()
```

#### log

```python
def log(message: str, level: LogLevel = LogLevel.DEBUG)
```

Logs a Message

The Logged Message will be display on the Monitor if running inside a Monitor
and send to the logging output.

**Arguments**:

- `message` _str_ - The Message
- `level` _LogLevel, optional_ - The LogLevel. Defaults to LogLevel.DEBUG.


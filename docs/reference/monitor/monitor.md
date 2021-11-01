---
sidebar_label: monitor
title: monitor.monitor
---

## Monitor Objects

```python
class Monitor()
```

#### \_\_init\_\_

```python
def __init__(title="Monitor", log=False) -> None
```

Monitor allows you to monitor the progress of what is happenening inside your application


**Arguments**:

- `title` _str, optional_ - The Title of this Monitor (Is the Panels Title). Defaults to &quot;Monitor&quot;.
- `progress` _bool, optional_ - Do you want to monitor the progress of assignments and reservations? Defaults to False.

#### \_\_aenter\_\_

```python
def __aenter__()
```

Convenience Method


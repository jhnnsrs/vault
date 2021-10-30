---
sidebar_label: actify
title: actors.actify
---

#### define

```python
def define(function, widgets={}, allow_empty_doc=False) -> Node
```

Define

Define a functions in the context of arnheim and
return it as a Node. Attention this node is not yet
hosted on Arkitekt (doesn&#x27;t have an id). So make sure
to save this node before calling it anywhere

**Arguments**:

  function (): The function you want to define


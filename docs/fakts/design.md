---
id: design
title: Design
sidebar_label: Design
slug: /fakts/design
---




### Fakts is like Oauth for Configs

Fakts provide a single source of truth for all things configuration.


#### Idea
Arkitekts different deployment strategies and the challenges of finding a strategy
for easy configuration of particapory apps were core demans for the devleopment of fakts.

Fakts tries to define different strageies for the acquisition and processing of configuration
Consider the following example.

You are writing an App A that needs to connect to a Server B.

You as the designer of App A have no idea where the server B will be located at any point.
Fakts tries to design simple stragedies of discovery and loading the configuration for this application.


### The Fakts interface

With fakts you define a Stragegy of Acquiring the configuration through Grants (just like in Oauth),
on load these grants are consecuitvely updating the configuration until all grants have either failed
or succeeded. 

```python

fakts = Fakts(
    grants=[
        YamlGrant(file="bergen.yaml")
        YamlGrant(file="mikro.yaml")
        YamlGrant(file="nana.yaml")
    ]
)

fakts.load() # Runs the an acquires all the files

```

We now have a configuration that is the merged output of all previous files.

### Parallization 

```python
from fakts import Fakts
from fakts.grants.file import YamlGrant

fakts = Fakts(
    grants=[
        YamlGrant(url="http://localhost:3000/bergen.yaml")
        YamlGrant(url="http://very.buys.website/nana.yaml")
        YamlGrant(file="http://very.buys.website/nana.yaml")
    ]
)

fakts.load() # Runs the an acquires all the files syncronisuly
```

You can also specifiy a Parallizing Grant to force the parallel running
of the other grants

```python
from fakts import Fakts
from fakts.grants.meta import ParallelGrant
from fakts.grants.file import YamlGrant

fakts = Fakts(
    grants=[
        ParallelGrant([
            YamlGrant(url="http://localhost:3000/bergen.yaml")
            YamlGrant(url="http://very.buys.website/nana.yaml")
            YamlGrant(file="http://very.buys.website/nana.yaml")
        ])
    ]
)

fakts.load() # Runs the an acquires all the files asynconouusily and merges there results
```

## Plays well in asyncoenousy and syncronous worlds

Fakts relies on Koil too manage exceqution in both syncronous and asynconronus contexts
(asyncio, qt, jupyter) to ensure parallization. Please check the Koil Documentation
to learn more about it.
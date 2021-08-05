---
id: dashboard    
title: Dashboard
sidebar_label: Dashboard
slug: /dashboard
---

import {GraphQLPlayground} from "../../src/components/playgrounds/graphql/GraphQLPlayground";

### Create Dashboards Easily

With Arkitekt and a little knowledge about React and HTML it is super easy to generate beautiful and functional Dashboards to
showcase your Data live.

```tsx live

function Dashboard(props) {
    const {data, loading} = useQuery(gql`
    query Metrics {
            metrics(keys: ["instance_count"], limit: 20){
                rep {
                meta
                }
                key
                value
            }
    }
    `, {pollInterval: 400})


  return (
    <div>
        {loading && <>Loading</>}
        <div className="grid grid-cols-6">
        {data && data.metrics.map(metric => <div>
            <span> {metric.key} {metric.value} </span>

            </div>
        )}
        </div>
    </div>
  );
}
```

Just Try it out here. Interestet in different metrics? Use a different Query!

<GraphQLPlayground/>
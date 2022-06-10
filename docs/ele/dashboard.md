---
id: dashboard
title: Dashboard
sidebar_label: Dashboard
slug: /dashboard
---



### Design

Flow Layer -> Datastore -> ETL

### What are Dashboards

Almost all real-time analysis pipelines need a way to intuitively monitor changes that happen during the
acquistion/processing of data. We therefore provide a way to intuitively construct dashboards that are
nothing but a website that can be used to monitor the results.

To understand how this is achieved we first need to understand where we position Dashboards.

Flow Layer -> Datastore -> Dashboards

Dashboards are aggration points of your data. As such they are not participating in your workflow but take
the centralized data and its updates as an Input for monitoring. This means that through tagging and saving
metadata in your flow layer you provide a virtual template on how to monitor the data. This is why sometimes
thinking about what you want in your Dashboard first can help you think about how to tag your data in the first place.

#### Our Example: HCS

High content screening is a prime example for a use of a Dashboard:
You and your team are interested in the real time monitoring of organoid samples, and want a simple way of displaying
data and calculated metrics of a 6\*6 Well acquistion process. You decide that you are interested in the time course of
cell count development within these organoids and which image analysis tasks are necessary.

Your workflow looks something like this

You decide Dashboard should visualize:

- An image of all the Wells **X** with their corresponing latest **z-color coded image**
- Lines for each Well **X** represening timepoint **T**, and its respective **cell count**

### The difference between Tags and Metadata

It is a very fluid transition between the two: In general Metadata is data decribing in a key
value manor aspects of the object. For example the position of an item in a multiwell setup

The challenge for Tags and Metadata is

### Code your Own

With Arkitekt and a little knowledge about React and HTML it is super easy to generate beautiful and functional Dashboards to
showcase your Data live.

```tsx live
function Dashboard(props) {
  const { data, loading } = useMikroQuery(
    gql`
      query rois {
        rois(representation: 100) {
          id
          type
          creator {
            id
          }
        }
      }
    `,
    { pollInterval: 400 }
  );

  return (
    <div>
      {loading && <>Loading</>}
      <div className="grid grid-cols-6">
        {data &&
          data.rois.map((roi) => (
            <div>
              <span>
                {" "}
                {roi.id} {roi.type}{" "}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
```

Just Try it out here. Interestet in different metrics? Use a different Query!


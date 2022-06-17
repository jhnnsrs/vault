"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9973],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"async",title:"Real-Time Monitoring",sidebar_label:"Real-Time Monitoring",slug:"/"},l=void 0,p={unversionedId:"async",id:"async",title:"Real-Time Monitoring",description:"Introduction",source:"@site/docs/async.md",sourceDirName:".",slug:"/",permalink:"/vault/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/async.md",tags:[],version:"current",frontMatter:{id:"async",title:"Real-Time Monitoring",sidebar_label:"Real-Time Monitoring",slug:"/"},sidebar:"someSidebar",previous:{title:"Time-Lapse Color Coder",permalink:"/vault/docs/macros/time_lapse_color_coder"},next:{title:"ImageJ",permalink:"/vault/docs/apps/imagej"}},m={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Synchronous to Asynchronous",id:"synchronous-to-asynchronous",level:2},{value:"Generator  and Functions",id:"generator--and-functions",level:2},{value:"Function",id:"function",level:3},{value:"Generator",id:"generator",level:3},{value:"Advanced: Streams",id:"advanced-streams",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Coming back to our original example."),(0,i.kt)("p",null,"You have three computers in your lab, each equipped with one essential equipment for your analysis flow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Machine A  is the Microscope with some organoid samples."),(0,i.kt)("li",{parentName:"ol"},"Machine B is your Deep-Learning workstation, without any display."),(0,i.kt)("li",{parentName:"ol"},"Machine C is your personal Computer with ImageJ installed.")),(0,i.kt)("p",null,"You want to sequentially acquire an image from your microscope, segment it in your deep learning workstation and then display the result on Napari in your office."),(0,i.kt)("p",null,"Of course you can call of this steps sequentially."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\n\nwith Bergen(qt=True):\n    micro = Node.objects.get(package="micro", interface="micro").provide(room="sted")\n    segment = Node.objects.get(package="deepl", interface="segment_cells")\n    display = Node.objects.get(package="display", interface="display")\n    \n    for i in range(0,100):\n        image = micro({"x": 100, "y": 100, "z": 3})\n        segmented_image = segment({"image": image}))\n        display = display({"display": segmented_image})\n    \n')),(0,i.kt)("p",null,"But lets consider the following:"),(0,i.kt)("p",null,"Your experiment requires time sensistive acquisition. You want these images to be acuireied ",(0,i.kt)("em",{parentName:"p"},"immetidately")," after another. However the deep learning takes a lot of time. Now you could of course put the acquistion in a ",(0,i.kt)("em",{parentName:"p"},"for loop")," and acquired all images and then segment all images individually like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\n\nwith Bergen(qt=True):\n    micro = Node.objects.get(package="micro", interface="micro").provide(room="sted")\n    segment = Node.objects.get(package="deepl", interface="segment_cells")\n    display = Node.objects.get(package="display", interface="display").provide(pc="karl")\n    \n    images = []\n    for i in range(0,100)\n        images.append(micro({"x": 100, "y": 100, "z": 3}))\n    \n    segmented_images = []\n    for image in images:\n        segmented_image.append(segment({"image": image})))\n    \n    for segmented_image in segmented_images:\n        display = display({"display": segmented_image})\n\n')),(0,i.kt)("p",null,"This would seperate all steps and you could acquire the images without any time delay introduced by the segmentation. However you loose completely the ability to monitor your images in ",(0,i.kt)("em",{parentName:"p"},"real time"),"."),(0,i.kt)("p",null,"This real-time screening abilities have been part of Arkitekts design imperatives, so Arkitekt whole-heartedly embraces the world of asynchronous programming.\n(In fact Arkitekt and Flow (our graphical interface for designing your workflows) use event-stream internally to handle your requests)"),(0,i.kt)("p",null,"Even more so we completly loose Arkitekts abilitiy to automatically parallize your work. As in our programming we always wait for the result of the segmentation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'segmented_images = []\nfor image in images:\n    segmented_images.append(segment({"image": image}))\n    # Each iteration waits for segment to finish and then appends the result\n\n')),(0,i.kt)("p",null," In theory Arkitekt could run these tasks in parallel on the different machines, as we could have multiple implementations of the segmentation algorythm running in our achritecutre. Lets see how we can use this in our programming:"),(0,i.kt)("p",null,"Here we discribe some steps that should convert your programming skills in this world."),(0,i.kt)("h2",{id:"synchronous-to-asynchronous"},"Synchronous to Asynchronous"),(0,i.kt)("p",null,"Lets start with an easy example first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\n\n\nwith Bergen():\n    maxisp = Node.objects.get(package="basic", interface="maxisp")\n    \n    with maxisp.provide(n=10, app="imagej") as pod:\n        results = []\n        for rep in Representation.objects.filter(experiment="testing"):\n            results.append(pod.assign({"rep": rep})\n            \n        plt.imshow(results[0].data)\n')),(0,i.kt)("p",null,"This Code will look for the MaxISP nodes and try to provide 10 instances of the ImageJ version of this Node (If more then one template exists it will use the first one). Then it will will get all Representations filtered by the experiment name (testing) and for each of the rep its going to create a maxisp projection. (None of these tasks however will be run on the machine calling this). Please note that all of these tasks are running sequentially."),(0,i.kt)("p",null,"No we will takeone step into the asynchronous world:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\n\n\nasync with Bergen():\n    maxisp = await Node.asyncs.get(package="basic", interface="maxisp")\n    \n    async with maxisp.provide(n=10, app="imagej") as pod:\n        results = []\n        for rep in await Representation.asyncs.filter(experiment="testing"):\n            results.append(await pod.assign({"rep": rep})\n            \n        plt.imshow(results[0].data)\n')),(0,i.kt)("p",null,"Ignoring the insertion of the keywords async and await, and the change from ",(0,i.kt)("em",{parentName:"p"},"objects")," to ",(0,i.kt)("em",{parentName:"p"},"asyncs")," there are no changes to our original code. However this is running now in an event_loop and all of the functions are called in the back and we are just awaiting the result. As we are however always pairing our calls with awaits, we are really just doing what syncronous code would do us."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Emulated Synchronous"),(0,i.kt)("th",{parentName:"tr",align:null},"Asynchronous"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Call"),(0,i.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("td",{parentName:"tr",align:null},"Parameters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Return"),(0,i.kt)("td",{parentName:"tr",align:null},"awaited Result"),(0,i.kt)("td",{parentName:"tr",align:null},"unawaited Result")))),(0,i.kt)("p",null,"Howere consider this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\nimport asyncio\n\nasync with Bergen():\n    maxisp = await Node.asyncs.get(package="basic", interface="maxisp")\n    \n    async with maxisp.provide(n=10, app="imagej") as pod:\n        unawaited_results = []\n        for rep in await Representation.asyncs.filter(experiment="testing"):\n            unawaited_results.append(pod.assign({"rep": rep}) # Omiting await\n            \n        results = await asyncio.gather(*unawaited_results)\n            \n        plt.imshow(results[0].data)\n')),(0,i.kt)("p",null,"We have ommited the await call in our loop, so what now happens it that during our loop arkitekt gets called with the input rep as fast as the loop progresses . Only when we await all of the unawaited_results with the asyncio.gather function (just a function that gathers and awaits all of the unawaited_results that we pass) through awaiting it. We are waiting for all tasks to be finished in ",(0,i.kt)("em",{parentName:"p"},"parallel"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Paralellizing computational workloads through asynchronous programmig is one interesting application of the Arkitekt framework, but frameworks as DASK are way better optimized  for distributing these workloads than Arkitekt ever will be. If you are searching just for a way to parallize your python workloads DASK is the solution you are searching for.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"  Arkitekt shines when using asynchronous programming to orchestrate multiple devices in analysis workflows.")),(0,i.kt)("h2",{id:"generator--and-functions"},"Generator  and Functions"),(0,i.kt)("p",null,"As discussed previously makes a destinction between two type of Nodes: [","[Nodes#Generator | Generators]","] and [","[Nodes#Function | Functions]","].  Generators will yield data in a constant stream (until they are completed or cancelled) and Functions will return one result for each call. This destinction is reflected in Arkitekts programming interface for this functions both on the [","[Pods#What is a Pod | pod ]","] and the client:"),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"Function just return 'normally' with a return. Once the functions returns or raises an Error it stops excecuting and sends the result as done."),(0,i.kt)("p",null,"Pod:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pod = Pod(...)\n\n@pod.host(package="basic", interface="maxisp", gpu=True)\ndef maxisp(helper, rep: Representation, dim: str = "z") -> Representation:\n    maxed = rep.data.max(dim=dim)\n    \n    output = Representation.objects.from_xarray(maxed)\n    return output\n    \npod.run()\n\n')),(0,i.kt)("p",null,"Client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'async with Client(...)\n    maxisp = await Node.asyncs.get(package="basic", interface="interface")\n    rep = Representation.objects.get(name="best_sample")\n    result = await maxisp(rep=rep)\n\nplt.imshow(result.data)\n')),(0,i.kt)("h3",{id:"generator"},"Generator"),(0,i.kt)("p",null,'Generators are called ONCE and are yielding data until they are finished ("intermediate results"). This yielded result is then automatically put  into a stream for arkitekt and can be consumed by the client iterating over the result.'),(0,i.kt)("p",null,"Pod:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pod = Pod(...)\n\n@pod.host(package="micro", interface="timeseries", room="sted")\ndef timeseries(helper, t: int, x: int = 1000, y: int: 1000, z: int = 1) -> Representation:\n    for i in range(t):\n        # Acquire Image logic\n        stack = acquire(x,y,z)\n        rep = Representation.objects.from_xarray(stack)\n        yield rep\n    \npod.run()\n')),(0,i.kt)("p",null,"Client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'async with Client(...)\n    maxisp = await Node.asyncs.get(package="micro", interface="timeseries")\n    async with maxisp.provide(room="sted") as pod:\n        async with pod.stream({"x": 100, "y": 100, "z": 30, "t"=10 }) as stream:\n            async for result in stream:\n                print(result)\n    \n    \n')),(0,i.kt)("h2",{id:"advanced-streams"},"Advanced: Streams"),(0,i.kt)("p",null,"Asynchronous programming helps simplifiyng a lot of modern analysis worklflows and makes complex workflows more humanly readable. However the async and await syntax can be intimidating for even seasoned developers as in more complex setups it becomes increasingly dificults to manage async and awaits."),(0,i.kt)("p",null,"A more accessible abstraction for many has become Reactive Programming, a style of programming popularized by the Rx Family of Language extensions (Especially RxJavascript has seen a lot of attention). This is why we choose it as a paradigm for our visual flow programming interface. ( with some minor adjustments). And also allow programmatic access through the Python interface."),(0,i.kt)("p",null,"In Reactive Programming we are concerened with Data Streams. This Streams originiated from Observables that are pushing data down the Streams, where this data is passed through a pipe of operations that alter the data in the stream and are finally consumed by a Subscriber. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Stream processing with the Reactive Extensions has not seen a massive adoption in the Python ecosystem and the packages are poorly maintainted. If you want to use streams. Make sure you check out our Javascript client.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As the aioreactive extensions have a hard reliance on Python 3.9 this is an opt in feature of the python client, currently as it is still a pre release arkitekt client ships with aiostreams")),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"Multiple Microscopes:"),(0,i.kt)("p",null,"Your experimental design requires you to  acquire images with to microscope modalitites at the same time and then combine their images in a processing pipeline."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nfrom aiostream import stream, pipe\n\nasync with Bergen():\n    timeseries = await Node.asyncs.get(package="micro", interface="stack")\n    combine_reps = await Node.asyncs.get(package="custom", interface="combine_reps")\n    \n    # Provide or Select Pods running on Multiple Devices\n    sted_timeseries = await timeseries.provide(device="sted")\n    palm_timeseries = await timeseries.provide(device="palm")\n    \n    params = {\n    "x": 1000,\n    "y": 1000,\n    "z": 10,\n    }\n    \n    merged = stream.zip(\n        sted_timeseries.stream(params),\n        palm_timeseries.stream(params)\n    )\n    \n    processed = merged | pipe.map(lambda two_reps: channel_merge({"reps": two_reps}))\n    \n    \n    async with processed.stream() as stream:\n        async for result in stream:\n            # Do stuff here\n            plt.imshow(result.data)\n\n\n')))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"extending",title:"Extend with your own Code",sidebar_label:"Extending",slug:"/extending"},s=void 0,u={unversionedId:"start/extending",id:"start/extending",title:"Extend with your own Code",description:"Design",source:"@site/docs/start/extending.md",sourceDirName:"start",slug:"/extending",permalink:"/vault/docs/extending",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start/extending.md",tags:[],version:"current",frontMatter:{id:"extending",title:"Extend with your own Code",sidebar_label:"Extending",slug:"/extending"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/vault/docs/installation"},next:{title:"First steps",permalink:"/vault/docs/firstworkflow"}},c={},d=[{value:"Design",id:"design",level:3},{value:"Your Script",id:"your-script",level:3},{value:"Example",id:"example",level:4},{value:"The old way",id:"the-old-way",level:4},{value:"The New Way",id:"the-new-way",level:4},{value:"The Easy Way",id:"the-easy-way",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"design"},"Design"),(0,i.kt)("p",null,"We firmely believe you shouldn't learn to many things about distributed computing to profit from some of its\nadvantages. This is why we use the design of nodes and streams to represent analysis flows naturally.\nBut at some point all visual programming designs fall short and you need to go barebone. We want this experience\nto be easy and enjoyable."),(0,i.kt)("h3",{id:"your-script"},"Your Script"),(0,i.kt)("p",null,"No matter if you are a seasoned python developer or just starting out, on of the tediest tasks in programming is handling\nthe various file formats, creating user interfaces, and trying to parallelize and orchestrate different parts of your software"),(0,i.kt)("p",null,"We do think that their are valuable lessons to learn but sometimes you just wish you could get your analysis function\nrunning with all input files and from anywhere."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Imaging you are trying to get your newly found super smart way of calculating cell distances out there. Your team wants this to\nwork but is having a hard time understanding your python code and how to call them. Here is your code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\ndef calculate_mean_distance_between_cells(segmented_image):\n    """ Return the Mean Distance between all of the cells in the segmented Image\n\n    Args:\n        segmented_image (np.array): The Segmented Image\n\n    Returns:\n        int\n    """\n\n    # Immensly difficult calculation involing all of your attention\n    return 5\n\n')),(0,i.kt)("h4",{id:"the-old-way"},"The old way"),(0,i.kt)("p",null,"Well, nobody can call this. Better write a whole user interface for that, okay lets install libraries. PyQt? QTinker? I dont't\nrealdy care about all of this. Better only use it myself"),(0,i.kt)("h4",{id:"the-new-way"},"The New Way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from mikro import Representation\nfrom arkitekt import Agent\n\nagent = Agent()\n\n@agent.register()\ndef calculate_mean_distance_between_cells(segmented_image: Representation) -> int:\n    """ Return the Mean Distance between all of the cells in the segmented Image\n\n    Args:\n        segmented_image (np.array): The Segmented Image\n\n    Returns:\n        int\n    """\n\n    # Immensly difficult calculation involing all of your attention\n    return 6\n\n\nagent.provide()\n\n')),(0,i.kt)("p",null,"Thats it. Add this few lines and you have a fully working node part of your system.\nUse it in analysis software. Call it through the webinterface. Done. Oh and of course you\ncan call this from anywhere in the world."),(0,i.kt)("h3",{id:"the-easy-way"},"The Easy Way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\nimport asyncio\n\nasync with Bergen():\n    maxisp = await Node.asyncs.get(package="basic", interface="maxisp")\n    \n    async with maxisp.provide(n=10, app="imagej") as pod:\n        unawaited_results = []\n        for rep in await Representation.asyncs.filter(experiment="testing"):\n            unawaited_results.append(pod.assign({"rep": rep}) # Omiting await\n            \n        results = await asyncio.gather(*unawaited_results)\n            \n        plt.imshow(results[0].data)\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5487],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82853:function(t,e,a){a.d(e,{o:function(){return o}});var n=a(67294),o=function(t){return n.createElement("a",{href:"https://github.com/jhnnsrs/jio/releases",target:"_blank",className:"button button--outline button--success",style:{marginBottom:"10px"},rel:"noopener noreferrer"},t.children)}},33931:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=a(82853),l=["components"],s={id:"firstworkflow",title:"First Workflow",sidebar_label:"First steps",slug:"/firstworkflow"},u=void 0,p={unversionedId:"start/firstworkflow",id:"start/firstworkflow",title:"First Workflow",description:"From A to B",source:"@site/docs/start/firstworkflow.md",sourceDirName:"start",slug:"/firstworkflow",permalink:"/vault/docs/firstworkflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start/firstworkflow.md",tags:[],version:"current",frontMatter:{id:"firstworkflow",title:"First Workflow",sidebar_label:"First steps",slug:"/firstworkflow"},sidebar:"someSidebar",previous:{title:"Extending",permalink:"/vault/docs/extending"},next:{title:"For your appetite",permalink:"/vault/docs/complex"}},c={},d=[{value:"From A to B",id:"from-a-to-b",level:3},{value:"Lets Bridge!",id:"lets-bridge",level:3},{value:"Install The Platform",id:"install-the-platform",level:3},{value:"Optional: Install Client App",id:"optional-install-client-app",level:4},{value:"Install Applications",id:"install-applications",level:3},{value:"Our First Automation Task",id:"our-first-automation-task",level:3},{value:"The Easy Way",id:"the-easy-way",level:3},{value:"Arkitekt doesn&#39;t care about Data!",id:"arkitekt-doesnt-care-about-data",level:3}],m={toc:d};function h(t){var e=t.components,a=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"from-a-to-b"},"From A to B"),(0,r.kt)("p",null,'Friday afternoon. You have a short discussion with your collegue and\nyou have to show that one image stack you took yesterday on your STED\nmicroscope to them. You already copied the image to your local machine\nand opened in ImageJ, but he is at the other side of the institute, so you\nbriefly copy the file to your portable hard drive, label the folder asdf, copy the file and run there as fast as you can.\nYou arrive, your collegue awaits you with a program you never saw, he introduces you to it as "napari" and tell you\nits perfectly made for visualizing your image in 3D. You are excited and you open the file: Error. Cannot read the image\nformat. Ah right you put the RAW Microscope image on that. ImageJ can read it, napari not, you run back and try to convert\nthe image. Again in asdf and back we go. Ah and a Maximum Instensity Projection would be nice to show that off as well...\nYour folder size increases, you are disgusted by your own labeling strategy.'),(0,r.kt)("h3",{id:"lets-bridge"},"Lets Bridge!"),(0,r.kt)("p",null,"Isn't it that what you wanted? Wasn't this your mental model in the first place? Why is it so hard to simply transfer\nand create multiple files for just this step? Well with Arkitekt it is just that! Lets get you started!"),(0,r.kt)("h3",{id:"install-the-platform"},"Install The Platform"),(0,r.kt)("p",null,"Follow the instructions on the installation page to install your local / network installation."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'For this installation to work you must choose your installation-type to be NETWORK, this will make sure that\nnetwork devices can connect and find your local instance. (Otherwise autoconnect features wont work). Also\nyou need to enable "Allow Trusted BioImage Apps".'))),(0,r.kt)("h4",{id:"optional-install-client-app"},"Optional: Install Client App"),(0,r.kt)("p",null,"Wasser wraps the whole web interface of the platform in a cross-platform desktop app. It provides features\nlike autoconnect and is faster than the web interface but thats about it:"),(0,r.kt)(i.o,{mdxType:"DownloadButton"},"Download Wasser"),(0,r.kt)("p",null,'You can still access this Interface through the website by going to "http://{YOUR_INSTANCE_ADRESS}"'),(0,r.kt)("h3",{id:"install-applications"},"Install Applications"),(0,r.kt)("p",null,"Lets make Napari and Fiji communicate. As Napari and Fiji are themselves great and extensible programs, Arkitekt tries to\ninterfere as little as possible with these applications. However we have to wrap these applications in a little helper\nprogram that enables us to identify them easily. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Napari"),(0,r.kt)("th",{parentName:"tr",align:null},"Fiji"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.o,{mdxType:"DownloadButton"},"Download Napari")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.o,{mdxType:"DownloadButton"},"Download Fiji"))))),(0,r.kt)("p",null,"Just follow the  installation instructions for both applications."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Especially Fiji has grown to be a very versatile and customizable\nsoftware package, so if you don't want to install a fresh application you can point it easily to your local Fiji/ImageJ folder."))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Lets face it: Data handling is hard. How many portable storage drives are laying on your desk right now?\nHow many of your image files are scattered in cryptical folder structures? Of course you have a network\nstorage, but that is a cryptical."),(0,r.kt)("p",null,"We firmly believe that this shouldn't be the case and "),(0,r.kt)("h3",{id:"our-first-automation-task"},"Our First Automation Task"),(0,r.kt)("p",null,"You have two image analysis apps installed on your computer and you briefly want to open\nan image that you have opened "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\ndef calculate_mean_distance_between_cells(segmented_image):\n    """ Return the Mean Distance between all of the cells in the segmented Image\n\n    Args:\n        segmented_image (np.array): The Segmented Image\n\n    Returns:\n        int\n    """\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n')),(0,r.kt)("h3",{id:"the-easy-way"},"The Easy Way"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from bergen import Bergen, Node\nfrom elements import Representation\nimport matplotlib.pyplot as plt\nimport asyncio\n\nasync with Bergen():\n    maxisp = await Node.asyncs.get(package="basic", interface="maxisp")\n    \n    async with maxisp.provide(n=10, app="imagej") as pod:\n        unawaited_results = []\n        for rep in await Representation.asyncs.filter(experiment="testing"):\n            unawaited_results.append(pod.assign({"rep": rep}) # Omiting await\n            \n        results = await asyncio.gather(*unawaited_results)\n            \n        plt.imshow(results[0].data)\n')),(0,r.kt)("h3",{id:"arkitekt-doesnt-care-about-data"},"Arkitekt doesn't care about Data!"),(0,r.kt)("p",null,"Arkitekt makes no prior assumptions on how you organize your data."))}h.isMDXComponent=!0}}]);
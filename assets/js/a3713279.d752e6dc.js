"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6720],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78997:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"deployment",title:"Deployment",sidebar_label:"Deployment",slug:"/deployment"},l=void 0,p={unversionedId:"deployment",id:"deployment",title:"Deployment",description:"Open Arkitekture",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/vault/docs/deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/deployment.md",tags:[],version:"current",frontMatter:{id:"deployment",title:"Deployment",sidebar_label:"Deployment",slug:"/deployment"}},c={},u=[{value:"Open Arkitekture",id:"open-arkitekture",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"open-arkitekture"},"Open Arkitekture"),(0,r.kt)("p",null,"The Client/App side:"),(0,r.kt)("p",null,"Postman -> A python/javascript/dart client that establishes a long running connection to the Arkitekt Service\n(Websockets and GRPC where supported) and signals this Client to be online."),(0,r.kt)("p",null,"Bergen -> A python client that enables native bindings of python functions as workers in the layout"),(0,r.kt)("p",null,"GraphQL Datapoint -> A python bridge that connects a GraphQL Service as a Datapoint in the Platform and establishes\nits access rights."),(0,r.kt)("p",null,"What is an App:"),(0,r.kt)("p",null,"An App is an Application that has specific rights while interacting with the platform\nWe destiniguish between to major application type:\nBackendApps and UserApps"),(0,r.kt)("p",null,"UserApps are tight to specific users and can only act on their behalve in a specific scope.\nThis ensures that if you install a new App in your analysis pipleline, it can only access\nand mutate selected data. E.g you could include a webapp on a public server and give it only\nthe right to look at specific datasets. Every access to other data of yours would be blocked for\nthis app."),(0,r.kt)("p",null,"BackendApps are apps that can make request on behalve of other users, and therefore can access\ndata that does not belong to everyone. Access can still be scoped but in general these apps are\na point of potential exploit. In general it is best to use them sparingly."),(0,r.kt)("p",null,"What is a Node:"),(0,r.kt)("p",null,"A Node is an agnostic representation of what an image analysis task is. It provides a blueprint\nand documentation of what inputs and outputs a supposed Implementation will receive and how to present it\nto the user."),(0,r.kt)("p",null,"What is a Flow:"),(0,r.kt)("p",null,"A Flow is an orchestrastional pattern of Nodes and reactive Elements, that are able\nto stich multiple Nodes together to facilate an analysis pipeline or loop."),(0,r.kt)("p",null,"What is a Template:"),(0,r.kt)("p",null,"A Template is an implementation of a {Node} by an {App}, its the App telling that it\ncan provide implementations for this specific Node, when desired."),(0,r.kt)("p",null,"Node:\nTask: Maximum Intensity Projection\nInput: ImageStack(xyczt)\nOutput: Image(xyct)"),(0,r.kt)("p",null,"Template:\nMikroJ run by Johannes on Labcomputer 1: Fiji Implementation of Maxium Intensity in Java\nMikroJ run by Karl on Labcomputer 2: Fiji Implementation of Maxium Intensity in Java\nPythonApp run by Johannes on Labcomputer 1: Maximum Intensity Implemtnation in Numpy"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The difference between Node and Template might seem a bit technical, but a Node provides a strong\nconceptual Contract between different agents in a workflow. Iz allows for stream lined\ntestiting, and easy parallelization as we can be sure that every app that subscribes to this will follow\nthe dogma."))),(0,r.kt)("p",null,"What is a Provision:"),(0,r.kt)("p",null,"A Provision is a contract between arkitekt and a providing app and tells the app\nhow many instances of a certain template are necessary, as well as the creating user\nand what should happen in case of failure."),(0,r.kt)("p",null,"What is a Reservation:"),(0,r.kt)("p",null,"A reservation is a (shortlife) contract between an App that wants to call another app.\nWhen Arkitekt receives a request for a reservation of a specific Node,\nit checks for running provisions, takes care of spawning new ones if necessary (based on passed\nparams {Provisoin} params, and {Template} params), establishes a channel for assignment\nand cancellation."),(0,r.kt)("p",null,"The platform consists of four major componenets:"),(0,r.kt)("p",null,"Herre -> The authentication server that handles authentication and authorization (link Auth vs Auth)\nfor every connected App in the system"),(0,r.kt)("p",null,"Arktitekt -> A deployment of real-time django and rabbitmq that safely exposes an asynchronous call API (async RPC)\nthrough fully documented nodes of all connected Apps."),(0,r.kt)("p",null,"Fluss -> An backend App that uses reactive workflows of nodes built through drag and drop and exposes them again as\nNodes through Arkitekt (A workflow is a Node)"),(0,r.kt)("p",null,"Port -> A backend app that creates sandboex environments from git repositories and docker containers and deploys\nthem on cloud hardware."),(0,r.kt)("p",null,"All of this modules are completely agnostic of the data\nthat is passed through them. What makes mikro for microscopic image analysis is mikro:"),(0,r.kt)("p",null,"Mikro -> A simple central data storage solution that organises your images and accociated data in relations\nof experiments, samples, metrics..."),(0,r.kt)("p",null,"MikroJ -> ImageJ bindings for the Mikro Arkitekt that enables easy creating of nodes through macros"),(0,r.kt)("p",null,"MikroNapari -> Napari Bindings for the Platform"))}m.isMDXComponent=!0}}]);
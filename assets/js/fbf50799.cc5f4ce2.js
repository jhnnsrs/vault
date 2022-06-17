"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8075],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"design",title:"Design",sidebar_label:"Design",slug:"/fakts/design"},l=void 0,u={unversionedId:"fakts/design",id:"fakts/design",title:"Design",description:"Fakts is like Oauth for Configs",source:"@site/docs/fakts/design.md",sourceDirName:"fakts",slug:"/fakts/design",permalink:"/vault/docs/fakts/design",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fakts/design.md",tags:[],version:"current",frontMatter:{id:"design",title:"Design",sidebar_label:"Design",slug:"/fakts/design"},sidebar:"someSidebar",previous:{title:"Interplanetary File System",permalink:"/vault/docs/ipfs"},next:{title:"Design",permalink:"/vault/docs/koil/design"}},c={},f=[{value:"Fakts is like Oauth for Configs",id:"fakts-is-like-oauth-for-configs",level:3},{value:"Idea",id:"idea",level:4},{value:"The Fakts interface",id:"the-fakts-interface",level:3},{value:"Parallization",id:"parallization",level:3},{value:"Plays well in asyncoenousy and syncronous worlds",id:"plays-well-in-asyncoenousy-and-syncronous-worlds",level:2}],p={toc:f};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"fakts-is-like-oauth-for-configs"},"Fakts is like Oauth for Configs"),(0,o.kt)("p",null,"Fakts provide a single source of truth for all things configuration."),(0,o.kt)("h4",{id:"idea"},"Idea"),(0,o.kt)("p",null,"Arkitekts different deployment strategies and the challenges of finding a strategy\nfor easy configuration of particapory apps were core demans for the devleopment of fakts."),(0,o.kt)("p",null,"Fakts tries to define different strageies for the acquisition and processing of configuration\nConsider the following example."),(0,o.kt)("p",null,"You are writing an App A that needs to connect to a Server B."),(0,o.kt)("p",null,"You as the designer of App A have no idea where the server B will be located at any point.\nFakts tries to design simple stragedies of discovery and loading the configuration for this application."),(0,o.kt)("h3",{id:"the-fakts-interface"},"The Fakts interface"),(0,o.kt)("p",null,"With fakts you define a Stragegy of Acquiring the configuration through Grants (just like in Oauth),\non load these grants are consecuitvely updating the configuration until all grants have either failed\nor succeeded. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfakts = Fakts(\n    grants=[\n        YamlGrant(file="bergen.yaml")\n        YamlGrant(file="mikro.yaml")\n        YamlGrant(file="nana.yaml")\n    ]\n)\n\nfakts.load() # Runs the an acquires all the files\n\n')),(0,o.kt)("p",null,"We now have a configuration that is the merged output of all previous files."),(0,o.kt)("h3",{id:"parallization"},"Parallization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fakts import Fakts\nfrom fakts.grants.file import YamlGrant\n\nfakts = Fakts(\n    grants=[\n        YamlGrant(url="http://localhost:3000/bergen.yaml")\n        YamlGrant(url="http://very.buys.website/nana.yaml")\n        YamlGrant(file="http://very.buys.website/nana.yaml")\n    ]\n)\n\nfakts.load() # Runs the an acquires all the files syncronisuly\n')),(0,o.kt)("p",null,"You can also specifiy a Parallizing Grant to force the parallel running\nof the other grants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fakts import Fakts\nfrom fakts.grants.meta import ParallelGrant\nfrom fakts.grants.file import YamlGrant\n\nfakts = Fakts(\n    grants=[\n        ParallelGrant([\n            YamlGrant(url="http://localhost:3000/bergen.yaml")\n            YamlGrant(url="http://very.buys.website/nana.yaml")\n            YamlGrant(file="http://very.buys.website/nana.yaml")\n        ])\n    ]\n)\n\nfakts.load() # Runs the an acquires all the files asynconouusily and merges there results\n')),(0,o.kt)("h2",{id:"plays-well-in-asyncoenousy-and-syncronous-worlds"},"Plays well in asyncoenousy and syncronous worlds"),(0,o.kt)("p",null,"Fakts relies on Koil too manage exceqution in both syncronous and asynconronus contexts\n(asyncio, qt, jupyter) to ensure parallization. Please check the Koil Documentation\nto learn more about it."))}d.isMDXComponent=!0}}]);
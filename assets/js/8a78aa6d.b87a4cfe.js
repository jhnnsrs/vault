"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9869],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=s(n),f=o,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={id:"rpc-design",title:"Design",sidebar_label:"Design",slug:"/technical/rpc-design"},l=void 0,s={unversionedId:"technical/rpc/rpc-design",id:"technical/rpc/rpc-design",title:"Design",description:"Why we chose the Protocols we chose",source:"@site/docs/technical/rpc/design.md",sourceDirName:"technical/rpc",slug:"/technical/rpc-design",permalink:"/vault/docs/technical/rpc-design",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/technical/rpc/design.md",tags:[],version:"current",frontMatter:{id:"rpc-design",title:"Design",sidebar_label:"Design",slug:"/technical/rpc-design"},sidebar:"someSidebar",previous:{title:"Design",permalink:"/vault/docs/koil/design"},next:{title:"gRPC",permalink:"/vault/docs/technical/grpc"}},p={},u=[{value:"Why we chose the Protocols we chose",id:"why-we-chose-the-protocols-we-chose",level:3}],h={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"why-we-chose-the-protocols-we-chose"},"Why we chose the Protocols we chose"),(0,i.kt)("p",null,"Arkitekt decides to hide the underlining Protocol for the RPC interface from the User an instead focuses on bringing native bindings for (asynchronous) function calling.\nWe chose this aproach to enable swapping out core components of the platform to enable the widest variety of Implementation Providers."),(0,i.kt)("p",null,"Out of the Box we support two communication protocols to interact with the Arkitekt service\nthat you can choose to implemement in your app."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Websockets"),(0,i.kt)("li",{parentName:"ul"},"gRPC")),(0,i.kt)("p",null,"In a perfect world we would have opted only for the gRPC protocol as it already enables event streaming over long lasting connections and would perfectly suit our purposes. However\nthere is until now a limited support for the gRPC protocol as it heaviliy utilizes protocol-buffers that for example are not (yet) supported on the Web. Also legacy applications might not\nbe able to interface with the platform through the gRPC protobuf protocol."),(0,i.kt)("p",null,"This is why we also support the performance sub-optimal Websockets protocol to call the backend server. This enables the javascript client to call the RPC functions without any gateway."))}f.isMDXComponent=!0}}]);
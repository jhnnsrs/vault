"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5756],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return y}});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=c(t),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return t?o.createElement(f,r(r({ref:e},p),{},{components:t})):o.createElement(f,r({ref:e},p))}));function y(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7635:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],s={id:"design",title:"Design",sidebar_label:"Design",slug:"/koil/design"},l=void 0,c={unversionedId:"koil/design",id:"koil/design",title:"Design",description:"Koil is asyncio for humans",source:"@site/docs/koil/design.md",sourceDirName:"koil",slug:"/koil/design",permalink:"/vault/docs/koil/design",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/koil/design.md",tags:[],version:"current",frontMatter:{id:"design",title:"Design",sidebar_label:"Design",slug:"/koil/design"},sidebar:"someSidebar",previous:{title:"Design",permalink:"/vault/docs/fakts/design"},next:{title:"Design",permalink:"/vault/docs/technical/rpc-design"}},p={},u=[{value:"Koil is asyncio for humans",id:"koil-is-asyncio-for-humans",level:3},{value:"Why an abstraction layer on top of asyncio",id:"why-an-abstraction-layer-on-top-of-asyncio",level:3},{value:"Example",id:"example",level:3},{value:"Jupyter notebook",id:"jupyter-notebook",level:3},{value:"Considerations",id:"considerations",level:3}],d={toc:u};function y(n){var e=n.components,t=(0,a.Z)(n,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"koil-is-asyncio-for-humans"},"Koil is asyncio for humans"),(0,i.kt)("p",null,'Koil is an abstraction layer on top of asyncio to enable "sensible defaults" for\nprogrammers working with frameworks that are hardly compatible with asyncio.'),(0,i.kt)("h3",{id:"why-an-abstraction-layer-on-top-of-asyncio"},"Why an abstraction layer on top of asyncio"),(0,i.kt)("p",null,"asyncio is a magificent addition to the python framework and is facilitating asyncronous\nand concurrent programming in a simple way."),(0,i.kt)("p",null,"However especially in scientific and datascience contexts the benefits of diving\ninto the concepts of asyncio might not outweigh the costs of learning these paradigms."),(0,i.kt)("p",null,"Additionally there are huge players in the python ecoystem that do not work seemlessly\nwith asyncio yet and involve workarounds (Django, PyQt). Koil tries to encapsulate\nthese workarounds in a simple utility library that wraps your api in a safe context\nthat can be used form this frameworks."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Asyncio Way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n\nasync def call_api(sleep):\n    await asyncio.sleep(4)\n    return 5\n\n\nprint(asyncio.run(call_api(3)))\n\n")),(0,i.kt)("p",null,"Koil Way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nfrom koil import koil\n\n@koil\nasync def call_api(sleep):\n    await asyncio.sleep(4)\n    return 5\n\nprint(call_api(sleep)) # note the ommision of the asyncio.run call\n\n")),(0,i.kt)("p",null,"On paper not a lot has changed between asyncio and koil, however under the hood the following\nhappened"),(0,i.kt)("p",null,"When calling call_api for the first time, koil detected that we are not running in an asyncronous\nevent loop and therefore wrapped the call in asyncio.run."),(0,i.kt)("p",null,"This doesn't justify a new library and a perfomance decrease though. So lets see this scenario"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nfrom koil import koil\nfrom PyQt5.QtCore import QSize, Qt\nfrom PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton\n\n@koil\nasync def call_api(interval):\n    await asyncio.sleep(interval)\n    return 5\n\n\nclass MainWindow(QMainWindow):\n    def __init__(self):\n        super().__init__()\n\n        self.setWindowTitle("My App")\n        button = QPushButton("Press Me!")\n        button.clicked.connect(self.button_clicked)\n        self.setCentralWidget(button)\n        self.sleep_task = None\n\n    def button_clicked(self):\n        if self.sleep_task: self.sleep_task.cancel()\n        self.sleep_task = call_api(interval, as_task=True)\n        self.sleep_task.resolve.connect(lambda x: self.button.setText(f"Slept {x} seconds"))\n\n\n\napp = QApplication(sys.argv)\n\nwindow = MainWindow()\nwindow.show()\n\napp.exec()\n\n')),(0,i.kt)("p",null,"Now this is more koils problem set. Koil detected on first run (when creating the Koil object) that\nwe are running in an QtApplication instance and loaded our asyncornous task off to another thread\nto not interfer with our qt event loop. By passing as_task we also specified that we are do not\nwant to block the qt thread to wait for result in the other thread. Koil knowingly that we are in a Qt app\nallows us to now connect to signals of that specific task in the ui_thread. "),(0,i.kt)("p",null,"Here koil differnts itself of libraries like qasync that try to mimik the qt event loop in an asyncio event loop.\nWith qasync you adopt to the asyncio style and not the style you may want."),(0,i.kt)("h3",{id:"jupyter-notebook"},"Jupyter notebook"),(0,i.kt)("p",null,"Jupyter is in a unique position as it itself runs in an event loop but is mainly used by scientists\nthat are used to an syncronus interface."),(0,i.kt)("p",null,"Your library"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\n@koil\nasync def call_api(interval):\n    await asyncio.sleep(interval)\n    return 5\n\n\n")),(0,i.kt)("p",null,"By default koil makes the assumption that if not specified differently it will use a synconrous\ninterface in juypter so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\ncall_api()\n\n")),(0,i.kt)("p",null,"Would run your Api Task in another Thread and return the result synconrously back to you.\nHowever you can opt in to use a asyncronous api."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from koil import Koil\n\nKoil(force_async=True) #at the top of your programm\n\n\nawait call_api()\n")),(0,i.kt)("p",null,"Making the call run in the same event loop of jupyter."),(0,i.kt)("h3",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"Koil is a library that doesnt want to exist. In general it provides convenience method\nto build asyncornous apis for a still synconrous world. "),(0,i.kt)("p",null,"Therefore when adding koil to your api make sure to not ditch your asyncrs api but extend\nthem through convenience methods. One such trick would be to leave your asyncornous functions\nuntouched and extend them with koiled versions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import koil\n\nclass MyComplexApi:\n\n    def __init__(self):\n        ...\n\n    async def acall_endpoint(self, endpoint): #a as convention for asyncornous functions\n        ...\n\n\n    def call_endpoint(self, *args, *kwargs):\n        return koil(self.acall_endpoint)(*args, **kwargs)\n\n")),(0,i.kt)("p",null,"Like this you are not experiencing any perfomance hints when running in a complete\nasyncornous context, but you enable unfamiliar users to use your application in a\nsyncronous world if they so desire."),(0,i.kt)("p",null,"Also it is wise to always call your pure async functions from other async functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import koil\nimport asyncio\n\nclass MyComplexApi:\n\n    def __init__(self):\n        self.connected = False\n        ...\n\n    async def aconnect(self):\n        await asyncio.sleep(3)\n        self.connected = True\n\n\n    async def acall_endpoint(self, endpoint): \n        if not self.connected:\n            await self.aconnect() # call asyncronous no koiled version for better performance\n\n        ...\n\n\n    def call_endpoint(self, *args, *kwargs):\n        return koil(self.acall_endpoint)(*args, **kwargs)\n\n")))}y.isMDXComponent=!0}}]);
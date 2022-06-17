"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2483],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=l(n),f=a,d=y["".concat(s,".").concat(f)]||y[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"qt",title:"PyQt Support",sidebar_label:"PyQt",slug:"/apps/qt"},s=void 0,l={unversionedId:"apps/qt",id:"apps/qt",title:"PyQt Support",description:"Convert Any PyQt app",source:"@site/docs/apps/qt.md",sourceDirName:"apps",slug:"/apps/qt",permalink:"/vault/docs/apps/qt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/apps/qt.md",tags:[],version:"current",frontMatter:{id:"qt",title:"PyQt Support",sidebar_label:"PyQt",slug:"/apps/qt"},sidebar:"someSidebar",previous:{title:"Napari",permalink:"/vault/docs/apps/napari"},next:{title:"Interplanetary File System",permalink:"/vault/docs/ipfs"}},c={},u=[{value:"Convert Any PyQt app",id:"convert-any-pyqt-app",level:3}],y={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"convert-any-pyqt-app"},"Convert Any PyQt app"),(0,o.kt)("p",null,"Using your own app as part of the framework is remarkably easy. You can simply\nadd our MagicBar Widget to your PyQt app and specify which functions you want to\nto provide for and voila: We handle dicovery of the server, authentication for\nusers that use your app, and registering of this functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nimport sys\nfrom PyQt5.QtCore import QSize, Qt\nfrom PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton\nfrom arkitekt.qt.widgets import MagicBar\n\n# Subclass QMainWindow to customize your application\'s main window\nclass MainWindow(QMainWindow):\n    def __init__(self):\n        super().__init__()\n\n        self.setWindowTitle("My App")\n\n        self.magic_bar = MagicBar()\n        self.magic_bar.agent.register(self.open_dialog)\n\n        self.setFixedSize(QSize(400, 300))\n\n        # Set the central widget of the Window.\n        self.setCentralWidget(self.magic_bar)\n\n\n    def open_dialog(alert_message: str):\n        """Open Dialog\n\n        Opens a Dialog for the user to connect to\n        \n        Args:\n            alert_message(str): The altert message\n        """\n        q = QtWidgets.QDialog(alert_message)\n        q.show()\n\n\napp = QApplication(sys.argv)\n\nwindow = MainWindow()\nwindow.show()\n\napp.exec()\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport xarray as xr\n# What exists on your end already\ndef count_cells(image: np.array) -> np.array:\n    # Do all of the tasks you want to do\n    # to analaysis\n    return image\n\n\n# What the Wrapper looks like\n\ndef count_cells_xarray(image: xr.DataArray) -> xr.DataArray:\n    np_image = np.array(image.data)\n    out_np_image = count_cells(np_image)\n    return xr.DataArray(np_image, dims=["x","y","z","t","c"])\n\n')))}f.isMDXComponent=!0}}]);
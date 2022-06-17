"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5309],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45271:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"time_lapse_color_coder",title:"Time-Lapse Color Coder",code_parser:"groovy",definition_parser:"yaml, meta",actor:"stacktostack",version:1,template:"no"},l=void 0,c={unversionedId:"macros/time_lapse_color_coder",id:"macros/time_lapse_color_coder",title:"Time-Lapse Color Coder",description:"Introduction",source:"@site/docs/macros/time_lapse.md",sourceDirName:"macros",slug:"/macros/time_lapse_color_coder",permalink:"/vault/docs/macros/time_lapse_color_coder",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/macros/time_lapse.md",tags:[],version:"current",frontMatter:{id:"time_lapse_color_coder",title:"Time-Lapse Color Coder",code_parser:"groovy",definition_parser:"yaml, meta",actor:"stacktostack",version:1,template:"no"},sidebar:"someSidebar",previous:{title:"Show Image",permalink:"/vault/docs/macros/show_image"},next:{title:"Real-Time Monitoring",permalink:"/vault/docs/"}},u={},m=[{value:"Introduction",id:"introduction",level:2}],p={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Coming back to our original example."),(0,a.kt)("p",null,"You have three computers in your lab, each equipped with one essential equipment for your analysis flow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Machine A  is the Microscope with some organoid samples."),(0,a.kt)("li",{parentName:"ol"},"Machine B is your Deep-Learning workstation, without any display."),(0,a.kt)("li",{parentName:"ol"},"Machine C is your personal Computer with ImageJ installed.")),(0,a.kt)("p",null,"You want to sequentially acquire an image from your microscope, segment it in your deep learning workstation and then display the result on Napari in your office."),(0,a.kt)("p",null,"Of course you can call of this steps sequentially."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n    - description: The color coded Image\n      identifier: representation\n      key: rep\n      label: null\n      transpile: null\n      typename: StructureArgPort\n      widget: null\ndescription: Color Code an Iamge\ninterface: color_code_image\nkwargs: []\nname: Color Code Image\npackage: test\nreturns:\n    - description: The color coded Image\n      identifier: representation\n      key: rep\n      label: null\n      transpile: null\n      typename: StructureReturnPort\ntype: FUNCTION\ntypename: Node\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'\n        var Glut = "Fire";  //default LUT\n        var Gstartf = 1;\n        var Gendf = 10;\n        var GFrameColorScaleCheck = 1;\n        var GbatchMode = 0;\n\n        macro "Time-Lapse Color Coder" {\n            Stack.getDimensions(ww, hh, channels, slices, frames);\n            if (channels > 1)\n                exit("Cannot color-code multi-channel images!");\n            //swap slices and frames in case:\n            if ((slices > 1) && (frames == 1)) {\n                frames = slices;\n                slices = 1;\n                Stack.setDimensions(1, slices, frames);\n                print("slices and frames swapped");\n            }\n            Gendf = frames;\n            if (Gstartf <1) Gstartf = 1;\n            if (Gendf > frames) Gendf = frames;\n            totalframes = Gendf - Gstartf + 1;\n            calcslices = slices * totalframes;\n            imgID = getImageID();\n\n            setBatchMode(true);\n\n            newImage("colored", "RGB White", ww, hh, calcslices);\n            run("Stack to Hyperstack...", "order=xyczt(default) channels=1 slices="\n                + slices + " frames=" + totalframes + " display=Color");\n            newimgID = getImageID();\n\n            selectImage(imgID);\n            run("Duplicate...", "duplicate");\n            run("8-bit");\n            imgID = getImageID();\n\n            newImage("stamp", "8-bit White", 10, 10, 1);\n            run(Glut);\n            getLut(rA, gA, bA);\n            close();\n            nrA = newArray(256);\n            ngA = newArray(256);\n            nbA = newArray(256);\n\n            newImage("temp", "8-bit White", ww, hh, 1);\n            tempID = getImageID();\n\n            for (i = 0; i < totalframes; i++) {\n                colorscale = floor((256 / totalframes) * i);\n                for (j = 0; j < 256; j++) {\n                    intensityfactor = j / 255;\n                    nrA[j] = round(rA[colorscale] * intensityfactor);\n                    ngA[j] = round(gA[colorscale] * intensityfactor);\n                    nbA[j] = round(bA[colorscale] * intensityfactor);\n                }\n\n                for (j = 0; j < slices; j++) {\n                    selectImage(imgID);\n                    Stack.setPosition(1, j + 1, i + Gstartf);\n                    run("Select All");\n                    run("Copy");\n\n                    selectImage(tempID);\n                    run("Paste");\n                    setLut(nrA, ngA, nbA);\n                    run("RGB Color");\n                    run("Select All");\n                    run("Copy");\n                    run("8-bit");\n\n                    selectImage(newimgID);\n                    Stack.setPosition(1, j + 1, i + 1);\n                    run("Select All");\n                    run("Paste");\n                }\n            }\n\n            selectImage(tempID);\n            close();\n\n            selectImage(imgID);\n            close();\n\n            selectImage(newimgID);\n\n            run("Stack to Hyperstack...", "order=xyctz channels=1 slices="\n                + totalframes + " frames=" + slices + " display=Color");\n            op = "start=1 stop=" + Gendf + " projection=[Max Intensity] all";\n            run("Z Project...", op);\n            if (slices > 1)\n                run("Stack to Hyperstack...", "order=xyczt(default) channels=1 slices=" + slices\n                    + " frames=1 display=Color");\n            resultImageID = getImageID();\n\n            selectImage(newimgID);\n            close();\n\n            selectImage(resultImageID);\n            \n            if (GbatchMode == 0)\n                setBatchMode("exit and display");\n            }\n\n\n')))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{8043:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var a=n(7294),r=n(6010),l=n(1944),i=n(7524),c=n(5281),o=n(7462),s=n(5999),d=n(2244);function m(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d.Z,(0,o.Z)({},t,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d.Z,(0,o.Z)({},n,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=n(2263),v=n(9960),f=n(143),b=n(373),h=n(4477);var E={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){var t=E[e.versionMetadata.banner];return a.createElement(t,e)}function g(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(v.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){var t,n=e.className,l=e.versionMetadata,i=(0,u.Z)().siteConfig.title,o=(0,f.gA)({failfast:!0}).pluginId,s=(0,b.J)(o).savePreferredVersionName,d=(0,f.Jo)(o),m=d.latestDocSuggestion,v=d.latestVersionSuggestion,h=null!=m?m:(t=v).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:i,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(g,{versionLabel:v.label,to:h.path,onClick:function(){return s(v.name)}})))}function N(e){var t=e.className,n=(0,h.E)();return n.banner?a.createElement(L,{className:t,versionMetadata:n}):null}function k(e){var t=e.className,n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function Z(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function C(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:c.k.common.lastUpdated},a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(Z,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(C,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var y=n(6114),H=n(1526),T="lastUpdated_vbeJ";function x(e){return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(H.Z,e)))}function A(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(y.Z,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",T)},(n||l)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function U(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,d=s.length>0,m=!!(n||l||o);return d||m?a.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(x,{tags:s}),m&&a.createElement(A,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var w=n(9407),I=n(6043),M=n(3743),B=n(3366),O="tocCollapsibleButton_TO0P",P="tocCollapsibleButtonExpanded_MG3E",F=["collapsed"];function S(e){var t=e.collapsed,n=(0,B.Z)(e,F);return a.createElement("button",(0,o.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",O,!t&&P,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var V="tocCollapsible_ETCw",R="tocCollapsibleContent_vkbj",D="tocCollapsibleExpanded_sAul";function j(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,I.u)({initialState:!0}),o=c.collapsed,s=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(V,!o&&D,n)},a.createElement(S,{collapsed:o,onClick:s}),a.createElement(I.z,{lazy:!0,className:R,collapsed:o},a.createElement(M.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var q=n(2503),z=n(2802),J=n(8596),G=n(4996);function Q(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var $={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function K(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(v.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function W(e){var t=e.children,n=e.active,l=e.index,i=e.addMicrodata;return a.createElement("li",(0,o.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function X(){var e=(0,G.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(v.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",$.breadcrumbsItemLink),href:e},a.createElement(Q,{className:$.breadcrumbHomeIcon})))}function Y(){var e=(0,z.s1)(),t=(0,J.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,$.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(X,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(W,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(K,{href:t.href,isLast:r},t.label))})))):null}var ee=n(2680),te="docItemContainer_Adtb",ne="docItemCol_GujU",ae="tocMobile_aoJ5";function re(e){var t,n=e.content,r=n.metadata,i=n.frontMatter,c=n.assets,o=i.keywords,s=r.description,d=r.title,m=null!=(t=c.image)?t:i.image;return a.createElement(l.d,{title:d,description:s,keywords:o,image:m})}function le(e){var t=e.content,n=t.metadata,l=t.frontMatter,o=l.hide_title,s=l.hide_table_of_contents,d=l.toc_min_heading_level,u=l.toc_max_heading_level,v=n.title,f=!o&&void 0===t.contentTitle,b=(0,i.i)(),h=!s&&t.toc&&t.toc.length>0,E=h&&("desktop"===b||"ssr"===b);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!s&&ne)},a.createElement(N,null),a.createElement("div",{className:te},a.createElement("article",null,a.createElement(Y,null),a.createElement(k,null),h&&a.createElement(j,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,r.Z)(c.k.docs.docTocMobile,ae)}),a.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},f&&a.createElement("header",null,a.createElement(q.Z,{as:"h1"},v)),a.createElement(ee.Z,null,a.createElement(t,null))),a.createElement(U,e)),a.createElement(m,{previous:n.previous,next:n.next}))),E&&a.createElement("div",{className:"col col--3"},a.createElement(w.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:c.k.docs.docTocDesktop})))}function ie(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(re,e),a.createElement(le,e))}},9407:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),l=n(7294),i=n(6010),c=n(3743),o="tableOfContents_bqdL",s=["className"];function d(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(7462),r=n(3366),l=n(7294),i=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,i);n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,l.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=u();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:n.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var b=l.memo(f),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function E(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,E=e.minHeadingLevel,p=e.maxHeadingLevel,g=(0,r.Z)(e,h),L=(0,s.L)(),N=null!=E?E:L.tableOfContents.minHeadingLevel,k=null!=p?p:L.tableOfContents.maxHeadingLevel,Z=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return o({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:k});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:k}}),[m,f,N,k])),l.createElement(b,(0,a.Z)({toc:Z,className:i,linkClassName:m},g))}},4477:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return i}});var a=n(7294),r=n(9688),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},8375:function(e,t,n){n.d(t,{ZP:function(){return N}});var a=n(7462),r=n(3366),l=n(7294),i=n(407),c=n(6010),o=n(5999),s=n(2263),d="playgroundContainer_TGbA",m="playgroundHeader_qwyd",u="playgroundEditor_PvJ1",v="playgroundPreview_bb8I",f=n(6508),b=function(e){e.key;var t=e.children,n=e.fallback;return(0,f.r)().client?l.createElement(l.Fragment,null,t):l.createElement(l.Fragment,null,n||"Not yet with Arkitekt")},h=["children","transformCode"];function E(e){var t=e.children;return l.createElement("div",{className:(0,c.Z)(m)},t)}var p=function(){return l.createElement("div",null,"Please connect with Fakts first to see results here")};function g(){return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),l.createElement(b,{fallback:l.createElement(p,null)},l.createElement("div",{className:v},l.createElement(i.i5,null),l.createElement(i.IF,null))))}function L(){return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Mikro Live Editor")),l.createElement(i.uz,{className:u}))}function N(e){var t=e.children,n=e.transformCode,c=(0,r.Z)(e,h),o=(0,s.Z)(),m=o.isClient,u=o.siteConfig.themeConfig.liveCodeBlock.playgroundPosition;return l.createElement("div",{className:d},l.createElement("div",{id:"tailwind"},l.createElement(i.nu,(0,a.Z)({key:m,code:m?t.replace(/\n$/,""):"",transformCode:n||function(e){return e+";"}},c),"top"===u?l.createElement(l.Fragment,null,l.createElement(g,null),l.createElement(L,null)):l.createElement(l.Fragment,null,l.createElement(L,null),l.createElement(g,null)))))}},6922:function(e,t,n){var a=n(7294),r=n(5850),l=n(2865),i=n(6508),c=Object.assign({React:a},a,{useMikroQuery:function(e){var t=(0,i.r)().client;return t?(0,r.a)(Object.assign({},e,{client:t})):{loading:!0,data:null}},gql:l.Ps});t.Z=c}}]);
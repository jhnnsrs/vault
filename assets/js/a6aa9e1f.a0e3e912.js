"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3089],{39058:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(63366),n=a(67294),l=a(86010),i=a(55257),o=a(87524),c=a(39960),m=a(95999),s="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",E="sidebarItemLinkActive_I1ZP";function f(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:E},e.title))})))))}var v=a(13102);function h(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(v.Zo,{component:h,props:e})}function N(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(f,{sidebar:t}):null}var k=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,r.Z)(e,k),m=t&&t.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(N,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},80046:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(67294),n=a(86010),l=a(52263),i=a(1944),o=a(35281),c=a(39058),m=a(51860),s=a(99703),u=a(90197);function d(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,n=t.blogDescription,o=t.blogTitle,c="/"===t.permalink?a:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:c,description:n}),r.createElement(u.Z,{tag:"blog_posts_list"}))}function g(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(c.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s.Z,{metadata:t}))}function p(e){return r.createElement(i.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(d,e),r.createElement(g,e))}},99703:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(95999),l=a(32244);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},51860:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(86010),l=a(95999),i=a(39960),o=a(44996),c=a(88824),m=a(18780),s=a(14231),u=a(66114),d=a(71526);function g(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,o=t.email,c=l||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(g,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var E="authorCol_sTYa",f="imageOnlyAuthorRow_vA2J",v="imageOnlyAuthorCol_kG3X";function h(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?f:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?v:E),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var b="blogPostTitle_Ikge",N="blogPostData_SAv4",k="blogPostDetailsFull_u0Nl";function Z(e){var t,a,g=(a=(0,c.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,o.C)().withBaseUrl,E=e.children,f=e.frontMatter,v=e.assets,Z=e.metadata,_=e.truncated,w=e.isBlogPostPage,P=void 0!==w&&w,y=Z.date,F=Z.formattedDate,x=Z.permalink,C=Z.tags,T=Z.readingTime,I=Z.title,A=Z.editUrl,L=Z.authors,M=null!=(t=v.image)?t:f.image,R=!P&&_,O=C.length>0,B=P?"h1":"h2";return r.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:b,itemProp:"headline"},P?I:r.createElement(i.Z,{itemProp:"url",to:x},I)),r.createElement("div",{className:(0,n.Z)(N,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},F),void 0!==T&&r.createElement(r.Fragment,null," \xb7 ",g(T))),r.createElement(h,{authors:L,assets:v})),M&&r.createElement("meta",{itemProp:"image",content:p(M,{absolute:!0})}),r.createElement("div",{id:P?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(s.Z,null,E)),(O||_)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",P&&k)},O&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":R})},r.createElement(d.Z,{tags:C})),P&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:A})),R&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":O})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},88824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(67294),n=a(52263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=c();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}},74701:function(e,t,a){a.d(t,{S:function(){return l}});var r=a(67294),n=a(16508),l=function(e){e.key;var t=e.children,a=e.fallback;return(0,n.r)().client?r.createElement(r.Fragment,null,t):r.createElement(r.Fragment,null,a||"Not yet with Arkitekt")}},22365:function(e,t,a){a.d(t,{Z:function(){return I}});var r=a(87462),n=a(63366),l=a(67294),i=a(86010),o=a(72389),c=a(10407),m=a(95999),s=a(52263),u=a(91262),d=a(66412),g="playgroundContainer_TGbA",p="playgroundHeader_qwyd",E="playgroundEditor_PvJ1",f="playgroundPreview_bb8I",v=a(74701),h=a(2870),b=a(55574),N=a(76439),k=a(91518),Z=a(83779),_=a(82580),w=["children","transformCode"];function P(e){var t=e.children;return l.createElement("div",{className:(0,i.Z)(p)},t)}function y(){return l.createElement("div",null,"Loading...")}function F(){return l.createElement(l.Fragment,null,"Please Connect First")}function x(){return l.createElement(l.Fragment,null,l.createElement(P,null,l.createElement(m.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),l.createElement("div",{className:f},l.createElement(u.Z,{fallback:l.createElement(y,null)},(function(){return l.createElement("div",{id:"tailwind"},l.createElement(v.S,{fallback:l.createElement(F,null)},l.createElement(c.i5,null),l.createElement(c.IF,null)))}))))}function C(){var e=(0,o.Z)();return l.createElement(c.uz,{key:String(e),className:E})}function T(){var e=(0,h.s)(),t=e.fakts,a=e.changeFakts,r=e.load,n=(0,Z.gX)(),i=n.user,o=n.logout,c=n.login,s=(0,l.useState)(!1),u=s[0],d=s[1];return l.createElement(l.Fragment,null,l.createElement(P,null,l.createElement("div",{className:"flex flex-row"},l.createElement(m.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Mikro Live Editors"),l.createElement("div",{className:"flex-grow"}),!t&&l.createElement(l.Fragment,null,u&&l.createElement(l.Fragment,null,l.createElement(_.J9,{initialValues:{host:"localhost:8000"},onSubmit:function(e,t){var a=e.host;r({base_url:"http://"+a+"/f/",name:a})}},l.createElement(_.l0,null,l.createElement(_.gN,{type:"input",name:"host",placeholder:"localhost:8000"}),l.createElement("button",{className:"ml-2 text-white border bg-gray-700 p-1 border-gray-900",type:"submit"}," Connect")))),l.createElement("div",{className:"cursor-pointer ml-1",onClick:function(){return d(!u)}},l.createElement(b.Z,null))),t&&!i&&l.createElement("div",{className:"text-white flex-row flex"},l.createElement("div",{className:"text-white cursor-pointer",onClick:function(){return a(void 0)}},l.createElement(b.Z,null)),l.createElement("div",{className:"text-white ml-2 cursor-pointer",onClick:function(){return c()}},l.createElement(N.Z,null))," "),t&&i&&l.createElement("div",{className:"text-white  flex-row flex",onClick:function(){return o()}},i.preferred_username," ",l.createElement("div",{className:"ml-3 cursor-pointer"},l.createElement(k.Z,null))))),l.createElement(C,null))}function I(e){var t=e.children,a=e.transformCode,i=(0,n.Z)(e,w),o=(0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,m=(0,d.p)();return l.createElement("div",{className:g},l.createElement("div",{id:"tailwind"},l.createElement(c.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:null!=a?a:function(e){return e+";"},theme:m},i),"top"===o?l.createElement(l.Fragment,null,l.createElement(x,null),l.createElement(T,null)):l.createElement(l.Fragment,null,l.createElement(T,null),l.createElement(x,null)))))}},56922:function(e,t,a){var r=a(67294),n=a(55850),l=a(31230),i=a(16508),o=Object.assign({React:r},r,{useMikroQuery:function(e){var t=(0,i.r)().client;return(0,n.a)(Object.assign({},e,{client:t}))},gql:l.Ps});t.Z=o}}]);
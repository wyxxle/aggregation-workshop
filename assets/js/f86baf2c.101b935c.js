"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[930],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(4137));const o={},i="Empty aggregation pipeline",l={unversionedId:"simple-queries/empty-aggregation",id:"simple-queries/empty-aggregation",title:"Empty aggregation pipeline",description:"An empty aggregation",source:"@site/docs/30-simple-queries/1-empty-aggregation.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/empty-aggregation",permalink:"/aggregation-workshop/docs/simple-queries/empty-aggregation",draft:!1,editUrl:"https://github.com/mongodb-developer/aggregation-workshop/blob/main/docs/30-simple-queries/1-empty-aggregation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using the library database",permalink:"/aggregation-workshop/docs/simple-queries/using-library-database"},next:{title:"$match",permalink:"/aggregation-workshop/docs/simple-queries/match"}},p={},s=[{value:"An empty aggregation",id:"an-empty-aggregation",level:2},{value:"\ud83e\uddb8\u200d\u2642\ufe0f Cursor methods",id:"\ufe0f-cursor-methods",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"empty-aggregation-pipeline"},"Empty aggregation pipeline"),(0,a.kt)("h2",{id:"an-empty-aggregation"},"An empty aggregation"),(0,a.kt)("p",null,"This code returns a ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/method/js-cursor/"},"cursor")," with all documents in the ",(0,a.kt)("inlineCode",{parentName:"p"},"authors")," collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.authors.aggregate([])\n")),(0,a.kt)("p",null,"We can iterate over this cursor and get more documents typing ",(0,a.kt)("inlineCode",{parentName:"p"},"it"),". "),(0,a.kt)("p",null,"\ud83d\udcbb Return all the documents in the ",(0,a.kt)("inlineCode",{parentName:"p"},"books")," collection and iterate to get the next page of books."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([])\nit\n")))),(0,a.kt)("h2",{id:"\ufe0f-cursor-methods"},"\ud83e\uddb8\u200d\u2642\ufe0f Cursor methods"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab")),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/method/js-cursor/"},"cursor")," has several useful methods, for instance we can check the size of the returned cursor with ",(0,a.kt)("inlineCode",{parentName:"p"},"itcount")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"cursor.itcount()\n")),(0,a.kt)("p",null,"\ud83d\udcbb In our previous example with the empty aggregation, to check the size of the returned cursor, what should we type in?"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.books.aggregate([]).itcount()\nit\n")))))}g.isMDXComponent=!0}}]);
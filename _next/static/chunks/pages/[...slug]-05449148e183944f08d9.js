(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{9618:function(e,t,r){var n={"./ListLayout":2601,"./ListLayout.tsx":2601,"./PostLayout":1523,"./PostLayout.tsx":1523};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},5597:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},6053:function(e,t,r){"use strict";r.d(t,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(7320),a=r(9008),i=r(1163),o=r(4067),c=r.n(o),l=function(e){var t=e.title,r=e.description,o=e.ogType,l=e.ogImage,s=(e.twImage,(0,i.useRouter)());return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:t}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(s.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:o}),(0,n.tZ)("meta",{property:"og:site_name",content:c().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:t}),Array.isArray(l)?l.map((function(e){var t=e.url;return(0,n.tZ)("meta",{property:"og:image",content:t},t)})):(0,n.tZ)("meta",{property:"og:image",content:l},l)]})},s=function(e){var t=e.title,r=e.description,a=c().siteUrl+c().socialBanner,i=c().siteUrl+c().socialBanner;return(0,n.tZ)(l,{title:t,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(e){var t=e.title,r=e.description,o=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,d=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:t,description:r,ogType:"website",ogImage:o,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,o=e.summary,s=e.date,d=e.lastmod,u=e.url,p=e.images,h=void 0===p?[]:p,m=(0,i.useRouter)(),g=new Date(s).toISOString(),y=new Date(d||s).toISOString(),f=(0===h.length?[c().socialBanner]:"string"===typeof h?[h]:h).map((function(e){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(e)}})),x={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:f,datePublished:g,dateModified:y,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},v=f[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:r,description:o,ogType:"article",ogImage:f,twImage:v}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:g}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:y}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(c().siteUrl).concat(m.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x,null,2)}})]})]})}},4790:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7320),a=r(1664),i=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")},o=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat(i(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},2601:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7320),a=r(6359),i=r(4790),o=r(9748);function c(e){var t=e.totalPages,r=e.currentPage,i=r-1>0,o=r+1<=t;return(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.BX)("nav",{className:"flex justify-between",children:[!i&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.tZ)(a.Z,{href:r-1===1?"/archive/":"/archive/".concat(r-1),children:(0,n.tZ)("button",{children:"Previous"})}),(0,n.BX)("span",{children:[r," of ",t]}),!o&&(0,n.tZ)("button",{className:"cursor-auto disabled:opacity-50",disabled:!o,children:"Next"}),o&&(0,n.tZ)(a.Z,{href:"/archive/".concat(r+1),children:(0,n.tZ)("button",{children:"Next"})})]})})}var l=r(4065);function s(e){var t=e.posts,r=e.title,s=e.initialDisplayPosts,d=void 0===s?[]:s,u=e.pagination,p=(0,o.useState)(""),h=p[0],m=p[1],g=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(h.toLowerCase())})),y=d.length>0&&!h?d:g;return(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{className:"divide-y",children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,n.BX)("div",{className:"relative max-w-lg",children:[(0,n.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return m(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"}),(0,n.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,n.BX)("ul",{children:[!g.length&&"No posts found.",y.map((function(e){var t=e.slug,r=e.date,o=e.title,c=e.summary,s=e.tags;return(0,n.tZ)("li",{className:"py-4",children:(0,n.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.BX)("dl",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:r,children:(0,l.Z)(r)})})]}),(0,n.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/".concat(t),className:"text-gray-900 dark:text-gray-100",children:o})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:s.map((function(e){return(0,n.tZ)(i.Z,{text:e},e)}))})]}),(0,n.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:c})]})]})},t)}))]})]}),u&&u.totalPages>1&&!h&&(0,n.tZ)(c,{currentPage:u.currentPage,totalPages:u.totalPages})]})}},1523:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7320),a=r(2809),i=r(6359),o=r(5597),c=r(4405),l=r(6053),s=r(4790),d=r(4067),u=r.n(d);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={weekday:"long",year:"numeric",month:"long",day:"numeric"};function g(e){var t=e.frontMatter,r=e.authorDetails,a=e.next,d=e.prev,p=e.children,g=t.slug,y=(t.fileName,t.date),f=t.title,x=t.tags;return(0,n.BX)(c.Z,{children:[(0,n.tZ)(l.Uy,h({url:"".concat(u().siteUrl,"/blog/").concat(g),authorDetails:r},t)),(0,n.tZ)("article",{children:(0,n.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,n.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,n.tZ)("div",{className:"space-y-1 text-center",children:(0,n.tZ)("div",{children:(0,n.tZ)(o.Z,{children:f})})})}),(0,n.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.tZ)("div",{className:"text-xl pt-10 pb-8 prose dark:prose-dark max-w-none",children:p})}),(0,n.BX)("div",{className:"text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",children:[(0,n.tZ)("dl",{className:"space-y-10",children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:y,children:new Date(y).toLocaleDateString(u().locale,m)})})]})}),x&&(0,n.BX)("div",{className:"py-4 xl:py-8",children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.tZ)("div",{className:"flex flex-wrap",children:x.map((function(e){return(0,n.tZ)(s.Z,{text:e},e)}))})]}),(a||d)&&(0,n.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[d&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(i.Z,{href:"/blog/".concat(d.slug),children:d.title})})]}),a&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.tZ)(i.Z,{href:"/blog/".concat(a.slug),children:a.title})})]})]}),(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.tZ)(i.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the blog"})})]})]})]})})]})}},4065:function(e,t,r){"use strict";var n=r(4067),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},7283:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w},default:function(){return O}});var n=r(7320),a=r(5597),i=r(2809),o=r(2894),c=r(9748),l=r(3194),s=r(159),d=r(5675);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=function(e){var t=e.src;e.width,e.quality;return t},h=function(e){var t=(0,s.Z)({},e);return(0,n.tZ)(d.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({unoptimized:!0,loader:p},t))},m=r(6359),g=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,i=e.fromHeading,o=void 0===i?1:i,c=e.toHeading,l=void 0===c?6:c,s=e.asDisclosure,d=void 0!==s&&s,u=e.exclude,p=void 0===u?"":u,h=Array.isArray(p)?new RegExp("^("+p.join("|")+")$","i"):new RegExp("^("+p+")$","i"),m=t.filter((function(e){return e.depth>=o&&e.depth<=l&&!h.test(e.value)})),g=(0,n.tZ)("ul",{children:m.map((function(e){return(0,n.tZ)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,n.tZ)(n.HY,{children:d?(0,n.BX)("details",{open:!0,children:[(0,n.tZ)("summary",{className:"pt-2 pb-2 ml-6 text-xl font-bold",children:"Table of Contents"}),(0,n.tZ)("div",{className:"ml-6",children:g})]}):g})},y=function(e){var t=e.children,r=(0,c.useRef)(null),a=(0,c.useState)(!1),i=a[0],o=a[1],l=(0,c.useState)(!1),s=l[0],d=l[1];return(0,n.BX)("div",{ref:r,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1),d(!1)},className:"relative",children:[i&&(0,n.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ".concat(s?"focus:outline-none focus:border-green-400 border-green-400":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(r.current.innerText),setTimeout((function(){d(!1)}),2e3)},children:(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:s?"text-green-400":"text-gray-300",children:s?(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.tZ)("pre",{children:t})]})},f=r(5350);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={Image:h,TOCInline:g,a:m.Z,pre:y,wrapper:function(e){var t=e.layout,a=(0,o.Z)(e,["layout"]),i=r(9618)("./".concat(t)).default;return(0,n.tZ)(i,v({},a))},ThemeSwitch:f.Z},b=function(e){var t=e.layout,r=e.mdxSource,a=(0,o.Z)(e,["layout","mdxSource"]),i=(0,c.useMemo)((function(){return(0,l.getMDXComponent)(r)}),[r]);return(0,n.tZ)(i,v({layout:t,components:Z},a))},w=!0;function O(e){var t=e.post,r=e.authorDetails,i=e.prev,o=e.next,c=t.mdxSource,l=t.toc,s=t.frontMatter;return(0,n.tZ)(n.HY,{children:"draft"in s&&!0!==s.draft?(0,n.tZ)(b,{layout:s.layout||"PostLayout",toc:l,mdxSource:c,frontMatter:s,authorDetails:r,prev:i,next:o}):(0,n.tZ)("div",{className:"mt-24 text-center",children:(0,n.BX)(a.Z,{children:["Under Construction"," ",(0,n.tZ)("span",{role:"img","aria-label":"roadwork sign",children:"\ud83d\udea7"})]})})})}},3405:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...slug]",function(){return r(7283)}])}},function(e){e.O(0,[393,888,179],(function(){return t=3405,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
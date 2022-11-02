"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2443],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2900:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=(r(7294),r(3905));const o={authors:"guoxudong",title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e94\uff09",tags:["chaosblade"],hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/2020/08/06/chaosblade-start-5",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/blog/blog/2020-08-06-chaosblade-start-5.md",source:"@site/blog/2020-08-06-chaosblade-start-5.md",title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e94\uff09",description:"\u524d\u8a00",date:"2020-08-06T00:00:00.000Z",formattedDate:"2020\u5e748\u67086\u65e5",tags:[{label:"chaosblade",permalink:"/blog/tags/chaosblade"}],readingTime:17.2,hasTruncateMarker:!0,authors:[{name:"\u90ed\u65ed\u4e1c\uff08@sunny0826\uff09",title:"Maintainer of ChaosBlade",url:"https://github.com/sunny0826",imageURL:"https://avatars.githubusercontent.com/u/24563928?v=4",key:"guoxudong"}],frontMatter:{authors:"guoxudong",title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e94\uff09",tags:["chaosblade"],hide_table_of_contents:!1},prevItem:{title:"\u6df7\u6c8c\u5de5\u7a0b\u4ecb\u7ecd\u4e0e\u5b9e\u8df5",permalink:"/blog/2021/05/21/chaos-engineering"},nextItem:{title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u56db\uff09",permalink:"/blog/2020/07/22/chaosblade-start-4"}},i={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u4e0a\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"ChaosBlade Operator")," \u5bf9 node \u8d44\u6e90\u8fdb\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3002\u4ece\u672c\u7ae0\u5c06\u7ee7\u7eed\u5bf9 Kubernetes Container \u8d44\u6e90\u7684\u6df7\u6c8c\u5b9e\u9a8c\u8fdb\u884c\u8bb2\u89e3\uff0c\u540c\u65f6\u4e5f\u914d\u5957\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://katacoda.com/"},"katacode")," \u4ea4\u4e92\u5f0f\u6559\u7a0b\uff0c\u8bfb\u8005\u53ef\u7528\u901a\u8fc7 katacode\uff0c\u5728\u6d4f\u89c8\u5668\u4e0a\u64cd\u4f5c\u771f\u5b9e\u7684 Kubernetes \u548c ChaosBlade\uff0c\u540c\u65f6\u672c\u7bc7\u4e5f\u662f\u7cfb\u5217\u6587\u7ae0\u7684\u5012\u6570\u7b2c\u4e8c\u7bc7\uff0c\u5b9e\u8df5\u5185\u5bb9\u7684\u6700\u540e\u4e00\u7bc7\u3002"))}p.isMDXComponent=!0}}]);
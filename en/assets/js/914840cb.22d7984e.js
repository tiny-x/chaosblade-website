"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[383],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,b=p["".concat(s,".").concat(k)]||p[k]||u[k]||i;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var r=n(7462),a=(n(7294),n(3905));const i={id:"blade create k8s node-disk"},l="\u6a21\u62df\u8282\u70b9\u78c1\u76d8\u573a\u666f",o={unversionedId:"experiment-types/k8s/blade create k8s node-disk",id:"version-1.7.0/experiment-types/k8s/blade create k8s node-disk",title:"\u6a21\u62df\u8282\u70b9\u78c1\u76d8\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.7.0/experiment-types/k8s/blade_create_k8s_node-disk.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s node-disk",permalink:"/en/docs/experiment-types/k8s/blade create k8s node-disk",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/experiment-types/k8s/blade_create_k8s_node-disk.md",tags:[],version:"1.7.0",frontMatter:{id:"blade create k8s node-disk"},sidebar:"version-1.7.0/docs",previous:{title:"\u6a21\u62df\u8282\u70b9\u8fdb\u7a0b\u76f8\u5173\u573a\u666f",permalink:"/en/docs/experiment-types/k8s/blade create k8s node-process"},next:{title:"\u6a21\u62df\u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f",permalink:"/en/docs/experiment-types/k8s/blade create k8s container-network"}},s={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u6307\u5b9a\u8282\u70b9\u78c1\u76d8\u5360\u7528 80%",id:"\u6307\u5b9a\u8282\u70b9\u78c1\u76d8\u5360\u7528-80",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u62df\u8282\u70b9\u78c1\u76d8\u573a\u666f"},"\u6a21\u62df\u8282\u70b9\u78c1\u76d8\u573a\u666f"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"kubernetes \u8282\u70b9\u78c1\u76d8\u573a\u666f\uff0c\u5305\u542b\u78c1\u76d8\u586b\u5145\u548c\u78c1\u76d8IO\u8bfb\u5199\u9ad8"),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("p",null,"\u652f\u6301 CPU \u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create k8s node-disk fill"),"\uff0c\u8282\u70b9\u78c1\u76d8\u586b\u5145\uff0c\u540c ","[blade create disk fill]","(blade create disk fill.md)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blade create k8s node-disk burn"),"\uff0c\u8282\u70b9\u78c1\u76d8IO\u8bfb\u5199\u8d1f\u8f7d\uff0c\u540c ","[blade create disk burn]","(blade create disk burn.md)")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          \u8282\u70b9\u8d44\u6e90\u6807\u7b7e\n--names string           \u8282\u70b9\u8d44\u6e90\u540d\uff0c\u591a\u4e2a\u8d44\u6e90\u540d\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("h3",{id:"\u6307\u5b9a\u8282\u70b9\u78c1\u76d8\u5360\u7528-80"},"\u6307\u5b9a\u8282\u70b9\u78c1\u76d8\u5360\u7528 80%"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'blade c k8s node-disk fill --names cn-hangzhou.192.168.0.35 --percent 80 --kubeconfig ~/.kube/config\n{"code":200,"success":true,"result":"ec322fbb977a455c"}\n\ndf -h\nFilesystem                Size      Used Available Use% Mounted on\n/dev/vda1                 118.0G     89.0G     24.0G  79% / \n\n# \u6062\u590d\u5b9e\u9a8c\nblade d ec322fbb977a455c\n\n{"code":200,"success":true,"result":{"Target":"node-disk","Scope":"","ActionName":"fill","ActionFlags":{"kubeconfig":"~/.kube/config","names":"cn-hangzhou.192.168.0.35","percent":"80"}}}\n\ndf -h\nFilesystem                Size      Used Available Use% Mounted on\n/dev/vda1                 118.0G     74.8G     38.1G  66% /\n')),(0,a.kt)("p",null,"\u4f7f\u7528 blade \u547d\u4ee4\u6267\u884c\uff0c\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff0c\u4f7f\u7528\u67e5\u8be2\u547d\u4ee4\u53ef\u4ee5\u67e5\u8be2\u8be6\u7ec6\u7684\u5b9e\u9a8c\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade query k8s create <UID>\n")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ","[blade create k8s]","(blade create k8s.md) \u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[7841],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(i,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=(n(7294),n(3905));const l={id:"blade create k8s node-network"},o="\u6a21\u62df\u8282\u70b9\u7f51\u7edc\u76f8\u5173\u573a\u666f",s={unversionedId:"experiment-types/k8s/blade create k8s node-network",id:"version-1.7.0/experiment-types/k8s/blade create k8s node-network",title:"\u6a21\u62df\u8282\u70b9\u7f51\u7edc\u76f8\u5173\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/experiment-types/k8s/blade_create_k8s_node-network.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s node-network",permalink:"/docs/experiment-types/k8s/blade create k8s node-network",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/versioned_docs/version-1.7.0/experiment-types/k8s/blade_create_k8s_node-network.md",tags:[],version:"1.7.0",frontMatter:{id:"blade create k8s node-network"},sidebar:"version-1.7.0/docs",previous:{title:"\u6a21\u62dfPod\u4e0d\u53ef\u7528",permalink:"/docs/experiment-types/k8s/blade create k8s pod-fail"},next:{title:"\u6a21\u62df\u8282\u70b9CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",permalink:"/docs/experiment-types/k8s/blade create k8s node-cpu"}},i={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u62df\u8282\u70b9\u7f51\u7edc\u76f8\u5173\u573a\u666f"},"\u6a21\u62df\u8282\u70b9\u7f51\u7edc\u76f8\u5173\u573a\u666f"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes \u8282\u70b9\u7f51\u7edc\u76f8\u5173\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7684\u7f51\u7edc\u573a\u666f"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u7f51\u7edc\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s node-network delay")," \u8282\u70b9\u7f51\u7edc\u5ef6\u8fdf\u573a\u666f\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20delay"},"blade create network delay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s node-network loss")," \u8282\u70b9\u7f51\u7edc\u4e22\u5305\u573a\u666f\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20loss"},"blade create network loss")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s node-network dns")," \u8282\u70b9\u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20dns"},"blade create network dns"))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-count")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-percent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u95f4\u662f\u6216\u7684\u5173\u7cfb"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"names")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b: "/root/.kube/config"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"waiting-time")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u5bf9 cn-hangzhou.192.168.0.205 \u8282\u70b9\u672c\u5730\u7aef\u53e3 40690 \u8bbf\u95ee\u4e22\u5305\u7387 60%"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: loss-node-network-by-names\nspec:\n  experiments:\n  - scope: node\n    target: network\n    action: loss\n    desc: "node network loss"\n    matchers:\n    - name: names\n      value: ["cn-hangzhou.192.168.0.205"]\n    - name: percent\n      value: ["60"]\n    - name: interface\n      value: ["eth0"]\n    - name: local-port\n      value: ["40690"]\n')),(0,r.kt)("p",null,"\u4fdd\u5b58\u4e3a yaml \u6587\u4ef6\uff0c\u6bd4\u5982 loss-node-network-by-names.yaml\uff0c\u4f7f\u7528 kubectl \u547d\u4ee4\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f loss-node-network-by-names.yaml\n")),(0,r.kt)("p",null,"\u5b9e\u9a8c\u72b6\u6001\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get blade loss-node-network-by-names -o json\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b(\u7701\u7565\u4e86\u4e00\u90e8\u5206)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'~ \xbb kubectl get blade loss-node-network-by-names -o json                                                            \n{\n    "apiVersion": "chaosblade.io/v1alpha1",\n    "kind": "ChaosBlade",\n    "metadata": {\n        "creationTimestamp": "2019-11-04T09:56:36Z",\n        "finalizers": [\n            "finalizer.chaosblade.io"\n        ],\n        "generation": 1,\n        "name": "loss-node-network-by-names",\n        "resourceVersion": "9262302",\n        "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/loss-node-network-by-names",\n        "uid": "63a926dd-fee9-11e9-b3be-00163e136d88"\n    },\n        "status": {\n        "expStatuses": [\n            {\n                "action": "loss",\n                "resStatuses": [\n                    {\n                        "id": "057acaa47ae69363",\n                        "kind": "node",\n                        "name": "cn-hangzhou.192.168.0.205",\n                        "nodeName": "cn-hangzhou.192.168.0.205",\n                        "state": "Success",\n                        "success": true,\n                        "uid": "e179b30d-df77-11e9-b3be-00163e136d88"\n                    }\n                ],\n                "scope": "node",\n                "state": "Success",\n                "success": true,\n                "target": "network"\n            }\n        ],\n        "phase": "Running"\n    }\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f loss-node-network-by-names.yaml\n")),(0,r.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete blade loss-node-network-by-names\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"blade \u6267\u884c\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade create k8s node-network loss --percent 60 --interface eth0 --local-port 40690 --kubeconfig config --names cn-hangzhou.192.168.0.205\n")),(0,r.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"e647064f5f20953c"}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'blade query k8s create e647064f5f20953c --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"e647064f5f20953c","success":true,"error":"","statuses":[{"id":"fa471a6285ec45f5","uid":"e179b30d-df77-11e9-b3be-00163e136d88","name":"cn-hangzhou.192.168.0.205","state":"Success","kind":"node","success":true,"nodeName":"cn-hangzhou.192.168.0.205"}]}}\n')),(0,r.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy e647064f5f20953c\n")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/experiment-types/k8s/blade%20create%20k8s"},"blade create k8s")," \u5e38\u89c1\u95ee\u9898"))}c.isMDXComponent=!0}}]);
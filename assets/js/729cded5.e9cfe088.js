"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3652],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=i(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return i}});var a=n(7462),r=(n(7294),n(3905));const l={id:"blade create k8s pod-network"},o="\u6a21\u62dfPod\u7f51\u7edc\u76f8\u5173\u573a\u666f",d={unversionedId:"experiment-types/k8s/blade create k8s pod-network",id:"experiment-types/k8s/blade create k8s pod-network",title:"\u6a21\u62dfPod\u7f51\u7edc\u76f8\u5173\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/k8s/blade_create_k8s_pod-network.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s pod-network",permalink:"/docs/next/experiment-types/k8s/blade create k8s pod-network",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/experiment-types/k8s/blade_create_k8s_pod-network.md",tags:[],version:"current",frontMatter:{id:"blade create k8s pod-network"},sidebar:"docs",previous:{title:"Kubernetes\u5b9e\u9a8c\u573a\u666f",permalink:"/docs/next/experiment-types/k8s/blade create k8s"},next:{title:"\u6a21\u62dfPod\u8d44\u6e90\u81ea\u8eab\u573a\u666f",permalink:"/docs/next/experiment-types/k8s/blade create k8s pod-pod"}},p={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u62dfpod\u7f51\u7edc\u76f8\u5173\u573a\u666f"},"\u6a21\u62dfPod\u7f51\u7edc\u76f8\u5173\u573a\u666f"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes Pod\u7f51\u7edc\u76f8\u5173\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7684\u7f51\u7edc\u573a\u666f"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u7f51\u7edc\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-network delay")," Pod \u7f51\u7edc\u5ef6\u8fdf\u573a\u666f\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20delay"},"blade create network delay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-network loss")," Pod \u7f51\u7edc\u4e22\u5305\u573a\u666f\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20loss"},"blade create network loss")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-network dns")," Pod \u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f\uff0c\u540c ",(0,r.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20dns"},"blade create network dns"))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-count")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-percent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b:",(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u95f4\u662f\u6216\u7684\u5173\u7cfb"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"names")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b: "/root/.kube/config"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"waiting-time")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u5bf9 default \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u6307\u5b9a\u540d\u4e3a redis-slave-674d68586-jnf7f Pod\u672c\u5730\u7aef\u53e3 6379 \u8bbf\u95ee\u5ef6\u8fdf 3000 \u6beb\u79d2\uff0c\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u4e0b\u6d6e\u52a8 1000 \u6beb\u79d2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: delay-pod-network-by-names\nspec:\n  experiments:\n  - scope: pod\n    target: network\n    action: delay\n    desc: "delay pod network by names"\n    matchers:\n    - name: names\n      value:\n      - "redis-slave-674d68586-jnf7f"\n    - name: namespace\n      value:\n      - "default"\n    - name: local-port\n      value: ["6379"]\n    - name: interface\n      value: ["eth0"]\n    - name: time\n      value: ["3000"]\n    - name: offset\n      value: ["1000"]\n')),(0,r.kt)("p",null,"\u4fdd\u5b58\u4e3a yaml \u6587\u4ef6\uff0c\u6bd4\u5982 delay_pod_network_by_names.yaml\uff0c\u4f7f\u7528 kubectl \u547d\u4ee4\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f delay_pod_network_by_names.yaml\n")),(0,r.kt)("p",null,"\u5b9e\u9a8c\u72b6\u6001\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get blade delay-pod-network-by-names -o json\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b(\u7701\u7565\u4e86\u4e00\u90e8\u5206)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apiVersion": "v1",\n    "items": [\n        {\n            "apiVersion": "chaosblade.io/v1alpha1",\n            "kind": "ChaosBlade",\n            "metadata": {\n                "finalizers": [\n                    "finalizer.chaosblade.io"\n                ],\n                "generation": 1,\n                "name": "delay-pod-network-by-names",\n                "resourceVersion": "9425766",\n                "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/delay-pod-network-by-names",\n                "uid": "cf32327c-ff73-11e9-b3be-00163e136d88"\n            },\n            "status": {\n                "expStatuses": [\n                    {\n                        "action": "delay",\n                        "resStatuses": [\n                            {\n                                "id": "e28f6e3ae2732a86",\n                                "kind": "pod",\n                                "name": "chaosblade-tool-vv49t", // \u6b64pod\u4e3asidecar\n                                "nodeName": "cn-hangzhou.192.168.0.204",\n                                "state": "Success",\n                                "success": true,\n                                "uid": "4f1a28a1-fee6-11e9-8883-00163e0ad0b3"\n                            }\n                        ],\n                        "scope": "pod",\n                        "state": "Success",\n                        "success": true,\n                        "target": "network"\n                    }\n                ],\n                "phase": "Running"\n            }\n        }\n    ],\n}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u8bbf\u95ee\u670d\u52a1\uff0c\u6216\u8005 telnet \u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f delay_pod_network_by_names.yaml\n")),(0,r.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete blade delay-pod-network-by-names\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"blade \u6267\u884c\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade create k8s pod-network delay --time 3000 --offset 1000 --interface eth0 --local-port 6379 --names redis-slave-674d68586-jnf7f --namespace default --kubeconfig config\n")),(0,r.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"127f1ee0afcd4798"}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'blade query k8s create 127f1ee0afcd4798 --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"127f1ee0afcd4798","success":true,"error":"","statuses":[{"id":"b5a216dddeb3389f","uid":"4f1a28a1-fee6-11e9-8883-00163e0ad0b3","name":"chaosblade-tool-vv49t","state":"Success","kind":"pod","success":true,"nodeName":"cn-hangzhou.192.168.0.204"}]}}\n')),(0,r.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy 127f1ee0afcd4798\n")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/experiment-types/k8s/blade%20create%20k8s"},"blade create k8s")," \u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0}}]);
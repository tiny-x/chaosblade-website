"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4627],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},i=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),i=c(n),b=r,f=i["".concat(s,".").concat(b)]||i[b]||u[b]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=i;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},1730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=(n(7294),n(3905));const o={id:"blade create k8s pod-pod"},l="\u6a21\u62dfPod\u8d44\u6e90\u81ea\u8eab\u573a\u666f",d={unversionedId:"experiment-types/k8s/blade create k8s pod-pod",id:"experiment-types/k8s/blade create k8s pod-pod",title:"\u6a21\u62dfPod\u8d44\u6e90\u81ea\u8eab\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/k8s/blade_create_k8s_pod-pod.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s pod-pod",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s pod-pod",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/experiment-types/k8s/blade_create_k8s_pod-pod.md",tags:[],version:"current",frontMatter:{id:"blade create k8s pod-pod"},sidebar:"docs",previous:{title:"\u6a21\u62dfPod\u7f51\u7edc\u76f8\u5173\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s pod-network"},next:{title:"\u6a21\u62dfPod\u6587\u4ef6\u7cfb\u7edfI/O\u5f02\u5e38",permalink:"/en/docs/next/experiment-types/k8s/blade create k8s pod-IO"}},s={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u62dfpod\u8d44\u6e90\u81ea\u8eab\u573a\u666f"},"\u6a21\u62dfPod\u8d44\u6e90\u81ea\u8eab\u573a\u666f"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f\uff0c\u6bd4\u5982\u5220\u9664 Pod"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-pod delete")," \u5220\u9664 POD")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--namespace string       Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879\n--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u524d\u662f\u6216\u7684\u5173\u7cfb\n--names string           Pod \u8d44\u6e90\u540d\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n")),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u5220\u9664\u6307\u5b9a default \u547d\u540d\u7a7a\u95f4\u4e0b\u6807\u7b7e\u662f app=guestbook \u7684 pod\uff0c\u5220\u9664"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yaml\u914d\u7f6e\u65b9\u5f0f\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: delete-two-pod-by-labels\nspec:\n  experiments:\n  - scope: pod\n    target: pod\n    action: delete\n    desc: "delete pod by labels"\n    matchers:\n    - name: labels\n      value:\n      - "app=guestbook"\n    - name: namespace\n      value:\n      - "default"\n    - name: evict-count\n      value:\n      - "2"\n')),(0,r.kt)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u4e3a delete_pod_by_labels.yaml\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f delete_pod_by_labels.yaml")," \u547d\u4ee4\u6267\u884c\uff0c\u53ef\u4ee5\u770b\u5230\u6267\u884c\u524d\u540e\uff0c\u6307\u5b9a\u6570\u91cf\u7684 Pod \u88ab\u6740\u6389\u540e\uff0c\u53c8\u88ab\u91cd\u65b0\u62c9\u8d77\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177298-d68fd700-ffc2-11e9-9318-f3769829fac2.png",alt:"before"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177283-caa41500-ffc2-11e9-80d7-a82f0f04f118.png",alt:"after"})),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get blade delete-two-pod-by-labels -o json")," \u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u7684\u6267\u884c\u7ed3\u679c(\u4e0b\u53d1\u53ea\u622a\u53d6\u90e8\u5206\u5185\u5bb9)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apiVersion": "chaosblade.io/v1alpha1",\n    "kind": "ChaosBlade",\n    "metadata": {\n        "finalizers": [\n            "finalizer.chaosblade.io"\n        ],\n        "generation": 1,\n        "name": "delete-two-pod-by-labels",\n        "resourceVersion": "9423460",\n        "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/delete-two-pod-by-labels",\n        "uid": "f31da567-ff71-11e9-a8e2-00163e08a39b"\n    },\n    "status": {\n        "expStatuses": [\n            {\n                "action": "delete",\n                "resStatuses": [\n                    {\n                        "kind": "pod",\n                        "name": "frontend-d89756ff7-94fj6",\n                        "nodeName": "cn-hangzhou.192.168.0.203",\n                        "state": "Success",\n                        "success": true,\n                        "uid": "79cd691c-fe3a-11e9-8883-00163e0ad0b3"\n                    },\n                    {\n                        "kind": "pod",\n                        "name": "frontend-d89756ff7-dkgmd",\n                        "nodeName": "cn-hangzhou.192.168.0.205",\n                        "state": "Success",\n                        "success": true,\n                        "uid": "79d1f47e-fe3a-11e9-8883-00163e0ad0b3"\n                    }\n                ],\n                "scope": "pod",\n                "state": "Success",\n                "success": true,\n                "target": "pod"\n            }\n        ],\n        "phase": "Running"\n    }\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f delete_pod_by_labels.yaml \n")),(0,r.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete blade delete-two-pod-by-labels\n")),(0,r.kt)("p",null,"\u5220\u9664 Pod \u7684\u505c\u6b62\u5b9e\u9a8c\u64cd\u4f5c\uff0cchaosblade \u672c\u8eab\u4e0d\u4f1a\u91cd\u65b0\u62c9\u8d77\u88ab\u5220\u9664\u7684 Pod\uff0c\u53ea\u662f\u53bb\u66f4\u6539\u5b9e\u9a8c\u72b6\u6001\uff01\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"blade \u6267\u884c\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade create k8s pod-pod delete --labels app=guestbook --namespace default --evict-count 2 --kubeconfig config\n")),(0,r.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"4d3caa0a99c3b2dd"}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'blade query k8s create 4d3caa0a99c3b2dd --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"4d3caa0a99c3b2dd","success":true,"error":"","statuses":[{"uid":"f325d43c-ff71-11e9-8883-00163e0ad0b3","name":"frontend-d89756ff7-5wgg5","state":"Success","kind":"pod","success":true,"nodeName":"cn-hangzhou.192.168.0.203"},{"uid":"28af19dd-f987-11e9-bd30-00163e08a39b","name":"frontend-d89756ff7-dpv7h","state":"Success","kind":"pod","success":true,"nodeName":"cn-hangzhou.192.168.0.205"}]}}\n')),(0,r.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy 4d3caa0a99c3b2dd\n")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ","[blade create k8s]","(blade create k8s.md) \u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0}}]);
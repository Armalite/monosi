"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[3547],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(b,a(a({ref:t},u),{},{components:n})):o.createElement(b,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},7468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=(n(8215),n(6396),["components"]),s={id:"webhooks",title:"Webhooks Integration",sidebar_label:"Webhooks"},l=void 0,c={unversionedId:"integrations/webhooks",id:"integrations/webhooks",title:"Webhooks Integration",description:"Monosi supports sending alerts to custom endpoints through webhooks.",source:"@site/docs/integrations/webhooks.md",sourceDirName:"integrations",slug:"/integrations/webhooks",permalink:"/docs/integrations/webhooks",editUrl:"https://github.com/monosidev/monosi/tree/master/documentation/docs/integrations/webhooks.md",tags:[],version:"current",frontMatter:{id:"webhooks",title:"Webhooks Integration",sidebar_label:"Webhooks"},sidebar:"sidebarUserGuide",previous:{title:"Slack",permalink:"/docs/integrations/slack"},next:{title:"Email",permalink:"/docs/integrations/email"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Monosi supports sending alerts to custom endpoints through webhooks."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Integrations subpage in Settings"),(0,i.kt)("li",{parentName:"ol"},"Click on the Create Integration button and select the Webhook integration in the drawer"),(0,i.kt)("li",{parentName:"ol"},"Provide a name for this integration as well as the incoming webhook URL and hit submit.")),(0,i.kt)("img",{src:"/img/integrations/webhook_alert.png",alt:"Webhook Alert"}),(0,i.kt)("p",null,"Once saved, anomalies will be sent to this Webhook integration moving forward until deleted."),(0,i.kt)("p",null,"The payload format of the Webhook is detailed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    alerts: [\n        {\n            message: \'Monosi - Anomaly Detected\', \n            type: \'table_health\',\n            info: {\n                table_name: ""\n                schema: ""\n                database: ""\n                column_name: ""\n                metric: ""\n                value: ""\n                time_window_start: ""\n                time_window_end: ""\n                interval_length_sec: ""\n                id: ""\n                created_at: ""\n            }\n        }\n        ...\n    ]\n}\n')))}m.isMDXComponent=!0}}]);
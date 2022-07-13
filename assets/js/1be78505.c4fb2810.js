"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[9514,4608],{4608:function(e,t,n){n.r(t);var a=n(7294),l=n(5303),r=n(5999);t.default=function(){return a.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6555:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),l=n(3905),r=n(6291),o=n(5303),i=n(6010),c=n(3616),s=n(3783),d=n(5537),m=n(7462);var u=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),b=n(3366),h=n(9960),f=n(3919),v=n(541),E="menuLinkText_1J2g",g="hasHref_2fq0",k=n(2389),Z=["items"],_=["item"],C=["item","onItemClick","activePath","level"],S=["item","onItemClick","activePath","level"],N=(0,a.memo)((function(e){var t=e.items,n=(0,b.Z)(e,Z);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(y,(0,m.Z)({key:t,item:e},n))})))}));function y(e){var t=e.item,n=(0,b.Z)(e,_);return"category"===t.type?0===t.items.length?null:a.createElement(I,(0,m.Z)({item:t},n)):a.createElement(T,(0,m.Z)({item:t},n))}function I(e){var t,n=e.item,l=e.onItemClick,r=e.activePath,o=e.level,s=(0,b.Z)(e,C),d=n.items,u=n.label,f=n.collapsible,v=n.className,Z=n.href,_=function(e){var t=(0,k.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),S=(0,c._F)(n,r),y=(0,c.uR)({initialState:function(){return!!f&&(!S&&n.collapsed)}}),I=y.collapsed,T=y.setCollapsed,x=y.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,l=e.setCollapsed,r=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:S,collapsed:I,setCollapsed:T}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(h.Z,(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":f&&!Z,"menu__link--active":S},t[E]=!f,t[g]=!!_,t)),onClick:f?function(e){null==l||l(n),Z?T(!1):(e.preventDefault(),x())}:function(){null==l||l(n)},href:f?null!=_?_:"#":_},s),u),Z&&f&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:u}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),x()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(N,{items:d,tabIndex:I?-1:0,onItemClick:l,activePath:r,level:o+1})))}function T(e){var t=e.item,n=e.onItemClick,l=e.activePath,r=e.level,o=(0,b.Z)(e,S),s=t.href,d=t.label,u=t.className,p=(0,c._F)(t,l);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:d},a.createElement(h.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},o),(0,f.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var x="sidebar_15mo",M="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",A="sidebarLogo_3h0W",L="menu_Bmed",B="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",R="collapseSidebarButtonIcon_3E-R";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(u,{className:R}))}function D(e){var t,n,l=e.path,r=e.sidebar,o=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],l=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&l(0===n)}),[e]),e&&n}(),u=(0,c.LU)(),p=u.navbar.hideOnScroll,b=u.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(x,(t={},t[M]=p,t[w]=s,t))},p&&a.createElement(d.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",L,(n={},n[B]=m,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:r,activePath:l,level:1}))),b&&a.createElement(P,{onClick:o}))}var W=function(e){var t=e.toggleSidebar,n=e.sidebar,l=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return a.createElement(c.Cv,{component:W,props:e})}var z=a.memo(D),q=a.memo(H);function U(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(z,e),l&&a.createElement(q,e))}var V=n(7243),Y=n(4608),J="backToTopButton_35hR",O="backToTopButtonShow_18ls";function X(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var j=function(){var e,t=(0,a.useState)(!1),n=t[0],l=t[1],r=(0,a.useRef)(!1),o=X(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(r.current)r.current=!1;else{var o=n<a;if(o||d(),n<300)l(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&l(!0)}else l(!1)}})),(0,c.SL)((function(e){e.location.hash&&(r.current=!0,l(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,J,(e={},e[O]=n,e)),type:"button",onClick:function(){return s()}})},G=n(6775),K={docPage:"docPage_3AUJ",docMainContainer:"docMainContainer_2AUC",docSidebarContainer:"docSidebarContainer_2LAn",docMainContainerEnhanced:"docMainContainerEnhanced_27Ec",docSidebarContainerHidden:"docSidebarContainerHidden_2lve",collapsedDocSidebar:"collapsedDocSidebar_23gX",expandSidebarButtonIcon:"expandSidebarButtonIcon_11nM",docItemWrapperEnhanced:"docItemWrapperEnhanced_2WAn"},Q=n(2859);function $(e){var t,n,r,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,b=(0,c.Vq)(),h=d.pluginId,f=d.version,v=s.sidebar,E=(0,a.useState)(!1),g=E[0],k=E[1],Z=(0,a.useState)(!1),_=Z[0],C=Z[1],S=(0,a.useCallback)((function(){_&&C(!1),k(!g)}),[_]);return a.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,c.os)(h,f)}},a.createElement("div",{className:K.docPage},a.createElement(j,null),b&&a.createElement("aside",{className:(0,i.Z)(K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&g&&C(!0)}},a.createElement(U,{key:v,sidebar:b,path:s.path,onCollapse:S,isHidden:_}),_&&a.createElement("div",{className:K.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(u,{className:K.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(K.docMainContainer,(n={},n[K.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,i.Z)("padding-top--md padding-bottom--lg w-full",K.docItemWrapper,(r={},r[K.docItemWrapperEnhanced]=g,r))},a.createElement(l.Zo,{components:V.Z},m)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,G.LX)(l.pathname,e)}));if(!o)return a.createElement(Y.default,e);var i=o.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:i},(0,r.Z)(t,{versionMetadata:n})))))}},7243:function(e,t,n){var a=n(7462),l=n(7294),r=n(9960),o=n(9055),i=n(9649),c=n(7488),s={code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(o.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(r.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:l.createElement("div",{className:"md:text-md w-80 text-sm sm:w-full sm:max-w-lg md:max-w-5xl"},l.createElement(o.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e)))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(c.Z,(0,a.Z)({},e,{summary:n}),r)},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6"),preview:function(e){var t=e.page,n=t.frontMatter,a=t.metadata,r=e.children,o=l.useState(!1),i=o[0],c=o[1];return l.createElement("span",{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},style:{position:"relative",display:"inline-block"}},l.createElement("a",{href:a.permalink},r,l.createElement(d,null)),i&&l.createElement("div",{style:{position:"absolute",zIndex:1,width:"max-content",maxWidth:"350px",display:"flex",flexDirection:"column",borderRadius:"8px",backgroundColor:"#f2f2f2",color:"#020202",padding:"8px"}},l.createElement("div",{style:{fontSize:"1rem",fontWeight:"bold",textAlign:"center"}},n.title),l.createElement("div",{style:{backgroundColor:"#f2f2f2",padding:10,fontSize:"0.8rem"}},l.createElement("span",{style:{}},a.description),l.createElement("span",{style:{marginTop:"1rem",display:"block",fontSize:"0.75rem"}},l.createElement("a",{style:{color:"blue"},href:a.permalink},"see full article >>")))))}};function d(){return l.createElement("span",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center"}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"0.75rem",width:"0.75rem",viewBox:"0 0 20 20",fill:"currentColor"},l.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})))}t.Z=s}}]);
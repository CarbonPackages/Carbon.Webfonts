import{b as l,c as g,d as N,e as d,f as j,g as u}from"./chunk-WFPJJPWZ.js";N();var y=g("manifest");var i=l(d(),1);var o=l(d());var n=l(d());function b({style:t,className:e,size:r=30}){return n.default.createElement("svg",{width:r,height:r,stroke:"currentColor",viewBox:"0 0 24 24",style:t,className:e},n.default.createElement("g",null,n.default.createElement("circle",{cx:"12",cy:"12",r:"9.5",fill:"none","stroke-width":"2","stroke-linecap":"round"},[{attribute:"dasharray",values:"0 150;42 150;42 150;42 150"},{attribute:"dashoffset",values:"0;-16;-59;-59"}].map(({attribute:s,values:a})=>n.default.createElement("animate",{key:s,attributeName:`stroke-${s}`,values:a,dur:"1.5s",calcMode:"spline",keyTimes:"0;0.475;0.95;1",keySplines:"0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",repeatCount:"indefinite"}))),n.default.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",values:"0 12 12;360 12 12",repeatCount:"indefinite"})))}function w({style:t,className:e,size:r=30}){return n.default.createElement("svg",{width:r*2,height:r,viewBox:"0 0 24 12",class:e,style:t},[1,2,3].map(s=>{let a=s*6,f=Math.round(100/3*(s-1))/100;return n.default.createElement("circle",{cx:a,cy:"6",r:"0",fill:"currentColor"},n.default.createElement("animate",{attributeName:"r",begin:f,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"}))}))}var x=l(j());var p={container:t=>[{display:"webfonts-rvj5dj",gridTemplate:"webfonts-d3rg8h",gridTemplateAreas:null,gridTemplateColumns:null,gridTemplateRows:null,alignItems:"webfonts-6s0dn4",justifyItems:"webfonts-1o2pa38",width:"webfonts-h8yej3",minHeight:`calc(var(--spacing-GoldenUnit) * ${t})`==null?null:"webfonts-bhpgbg",$$css:!0},{"--minHeight":(e=>typeof e=="number"?e+"px":e??void 0)(`calc(var(--spacing-GoldenUnit) * ${t})`)}],item:t=>[{gridArea:"webfonts-1fdo2jl",gridRow:null,gridRowStart:null,gridRowEnd:null,gridColumn:null,gridColumnStart:null,gridColumnEnd:null,transition:"webfonts-c8avi6",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,opacity:(t?1:0)==null?null:"webfonts-a0d40w",transform:`scale(${t?1:0})`==null?null:"webfonts-1uosm7l",$$css:!0},{"--opacity":(t?1:0)??void 0,"--transform":`scale(${t?1:0})`!=null?`scale(${t?1:0})`:void 0}]};function k({id:t,title:e="Neos.Neos:Main:loading",isLoading:r=!1,delayTime:s=500,timeoutTime:a=5e3,i18nRegistry:f,heightMultiplier:E=1}){let[m,c]=(0,o.useState)(0),O=e?f.translate(e):null;return(0,o.useEffect)(()=>{if(!r){c(0);return}let _=setTimeout(()=>{c(1)},s),W=setTimeout(()=>{c(2)},s+a);return()=>{clearTimeout(_),clearTimeout(W)}},[r]),r?o.default.createElement("div",{id:t,title:O,...u(p.container(E))},o.default.createElement(b,{...u(p.item(m==1))}),o.default.createElement(w,{...u(p.item(m==2))})):null}var T=(0,x.neos)(t=>({i18nRegistry:t.get("i18n")})),S=T(k);var C={FontFamily:()=>import("./FontFamily.js"),FontWeight:()=>import("./FontWeight.js")};function I(t){let e=(0,i.lazy)(C[t]);return r=>i.default.createElement(i.Suspense,{fallback:i.default.createElement(S,{isLoading:!0})},i.default.createElement(e,{...r}))}var A=Object.keys(C),K=A.map(t=>I(t));y("Carbon.Webfonts:Editors",{},t=>{let e=t.get("inspector").get("editors");A.forEach((r,s)=>{e.set(`Carbon.Webfonts/${r}`,{component:K[s]})})});

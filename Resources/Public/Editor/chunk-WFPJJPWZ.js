var z=Object.create;var M=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var B=(e,r)=>()=>(e&&(r=e(e=0)),r);var W=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var E=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of K(r))!Y.call(e,o)&&o!==t&&M(e,o,{get:()=>r[o],enumerable:!(n=C(r,o))||n.enumerable});return e};var ue=(e,r,t)=>(t=e!=null?z(U(e)):{},E(r||!e||!e.__esModule?M(t,"default",{value:e,enumerable:!0}):t,e));function y(e){return(...r)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...r);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var F=B(()=>{});var G=W((he,N)=>{F();N.exports=y("vendor")().React});var ie=W((de,L)=>{F();L.exports=y("NeosProjectPackages")().NeosUiDecorators});var p={},V;function J(){if(V)return p;V=1,Object.defineProperty(p,"__esModule",{value:!0}),p.styleq=void 0;var e=new WeakMap,r="$$css";function t(o){var h,_,b;return o!=null&&(h=o.disableCache===!0,_=o.disableMix===!0,b=o.transform),function(){for(var m=[],x="",a=null,i=h?null:e,q=new Array(arguments.length),P=0;P<arguments.length;P++)q[P]=arguments[P];for(;q.length>0;){var c=q.pop();if(!(c==null||c===!1)){if(Array.isArray(c)){for(var j=0;j<c.length;j++)q.push(c[j]);continue}var l=b!=null?b(c):c;if(l.$$css){var f="";if(i!=null&&i.has(l)){var A=i.get(l);A!=null&&(f=A[0],m.push.apply(m,A[1]),i=A[2])}else{var O=[];for(var v in l){var d=l[v];v!==r&&(typeof d=="string"||d===null?m.includes(v)||(m.push(v),i!=null&&O.push(v),typeof d=="string"&&(f+=f?" "+d:d)):console.error("styleq: ".concat(v," typeof ").concat(String(d),' is not "string" or "null".')))}if(i!=null){var I=new WeakMap;i.set(l,[f,O,I]),i=I}}f&&(x=x?f+" "+x:f)}else if(_)a==null&&(a={}),a=Object.assign({},l,a);else{var w=null;for(var $ in l){var T=l[$];T!==void 0&&(m.includes($)||(T!=null&&(a==null&&(a={}),w==null&&(w={}),w[$]=T),m.push($),i=null))}w!=null&&(a=Object.assign(w,a))}}}var R=[x,a];return R}}var n=t();return p.styleq=n,n.factory=t,p}var H=J(),g=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),s=e=>g(`types.${e}`);function D(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];let[n,o]=H.styleq(r),h={};return n!=null&&n!==""&&(h.className=n),o!=null&&Object.keys(o).length>0&&(h.style=o),h}function Q(){let{className:e,style:r}=D(...arguments),t={};return e!=null&&e!==""&&(t.class=e),r!=null&&Object.keys(r).length>0&&(t.style=Object.keys(r).map(n=>`${n}:${r[n]};`).join("")),t}function X(e){throw g("create")}function Z(e){throw g("defineVars")}var k=(e,r)=>{throw g("createTheme")},S=e=>{throw g("include")},ee=X,re=Z,te=k,ne=S,oe={angle:e=>{throw s("angle")},color:e=>{throw s("color")},url:e=>{throw s("url")},image:e=>{throw s("image")},integer:e=>{throw s("integer")},lengthPercentage:e=>{throw s("lengthPercentage")},length:e=>{throw s("length")},percentage:e=>{throw s("percentage")},number:e=>{throw s("number")},resolution:e=>{throw s("resolution")},time:e=>{throw s("time")},transformFunction:e=>{throw s("transformFunction")},transformList:e=>{throw s("transformList")}},se=e=>{throw g("keyframes")},ae=function(){throw g("firstThatWorks")};function u(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];let[n]=H.styleq(r);return n}u.props=D;u.attrs=Q;u.create=ee;u.defineVars=re;u.createTheme=te;u.include=ne;u.keyframes=se;u.firstThatWorks=ae;u.types=oe;export{W as a,ue as b,y as c,F as d,G as e,ie as f,D as g};

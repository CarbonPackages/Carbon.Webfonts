import{a as H,b as A}from"./chunk-GETRZPF6.js";import{a as S,f as T,h as E}from"./chunk-XJI3RR2I.js";import{a as U,b as h,e as X,g as f}from"./chunk-WFPJJPWZ.js";var L=U((ne,W)=>{"use strict";function Z(s,t){var n=t.length,u=s.length;if(u>n)return!1;if(u===n)return s===t;e:for(var c=0,i=0;c<u;c++){for(var C=s.charCodeAt(c);i<n;)if(t.charCodeAt(i++)===C)continue e;return!1}return!0}W.exports=Z});var e=h(X(),1),b=h(H(),1);var m=h(H(),1),_=h(L(),1);var R={disabled:!1,readonly:!1,allowEmpty:!0,cssFile:!1,sortFonts:!0,useCarbonWebfonts:!0,placeholder:"",placeholderFont:!1,enableFallback:!0,showIcon:!0},o={font:(s,t,n)=>[{fontFamily:s==null?null:"webfonts-t1x0nq",fontWeight:t==null?null:"webfonts-1oq5gaa",fontStyle:n==null?null:"webfonts-1sgc6b7",fontSize:"webfonts-osj86m",$$css:!0},{"--fontFamily":s??void 0,"--fontWeight":t??void 0,"--fontStyle":n??void 0}],header:{display:"webfonts-78zum5",justifyContent:"webfonts-1qughib",$$css:!0},disabled:{cursor:"webfonts-1h6gzvc",opacity:"webfonts-190dgpg",":where(*)>*_pointerEvents":"webfonts-vszx66",$$css:!0},highlight:{borderRadius:"webfonts-1cum3z5",outline:"webfonts-us49la",outlineOffset:"webfonts-1hl8ikr",$$css:!0},button:{display:"webfonts-78zum5",width:"webfonts-h8yej3",alignItems:"webfonts-6s0dn4",justifyContent:"webfonts-1qughib",padding:"webfonts-u0uvaq",border:"webfonts-1wty727",color:"webfonts-189eng2",gap:"webfonts-1iv4zvh",textAlign:"webfonts-dpxx8g",minHeight:"webfonts-rugqim",background:"webfonts-178jugr",cursor:"webfonts-1ypdohk",":not(:first-child)_borderTop":"webfonts-1rhqzh7",":hover_background":"webfonts-1y4g52z",":focus_outline":"webfonts-ip2jzm",$$css:!0},buttonCurrent:{background:"webfonts-978ut8",$$css:!0},block:{display:"webfonts-11xutdi",$$css:!0},maxHeight:{maxHeight:"webfonts-12ec2z3",overflowY:"webfonts-1odjw0f",$$css:!0},searchInput:{marginLeft:"webfonts-1jstro9",width:"webfonts-10nwz3g",$$css:!0}};function ee({id:s,value:t,commit:n,options:u,highlight:c,i18nRegistry:i,onEnterKey:C,config:$,carbonWebfonts:M,scrollable:v=!0}){let{disabled:P,readonly:K,allowEmpty:z,enableFallback:k,showIcon:B,placeholderFont:g,cssFile:V,sortFonts:Y,useCarbonWebfonts:G,placeholder:j}={...R,...$,...u},p=T({...G?M:{},...$.fonts,...u.fonts},k,!j&&g?g:null,Y),[w,I]=(0,e.useState)(!1),[d,J]=(0,e.useState)(""),Q=r=>r===t,N=null,q=null;return E(V),e.default.createElement(m.DropDown.Stateless,{className:f(c&&o.highlight,K||P&&o.disabled).className,isOpen:w,onToggle:()=>I(!w),onClose:()=>I(!1)},e.default.createElement(m.DropDown.Header,{className:f(!!t&&z&&o.header).className},w?e.default.createElement(b.TextInput,{id:s,value:d,onChange:J,placeholder:i.translate("Neos.Neos:Main:search"),allowEmpty:!0,setFocus:!0,onKeyDown:({key:r})=>{if(!d){if(r=="ArrowRight"){let l=Object.values(p.flat).find(a=>a.index===N);l&&n(l.value)}if(r=="ArrowLeft"){let l=Object.values(p.flat).find(a=>a.index===q);l&&n(l.value)}}},containerClassName:f(o.searchInput,w&&o.searchInputVisible).className}):e.default.createElement(S,{id:s,addTitle:!0,fontFamily:t,fonts:p.flat,enableFallback:k,placeholderFont:g,placeholder:j}),z&&!!t&&e.default.createElement(b.IconButton,{icon:"times",title:i.translate("Carbon.Webfonts:Main:noFont"),onClick:r=>{n(""),r.stopPropagation()}})),e.default.createElement(m.DropDown.Contents,{scrollable:v,className:f(w&&o.block,!v&&o.maxHeight).className},Object.entries(p.nested).map(([r,l])=>e.default.createElement("li",{key:r},e.default.createElement("ul",null,e.default.createElement("li",{className:"webfonts-u0uvaq webfonts-zyrq3l webfonts-2kegb5 webfonts-tvhhri webfonts-1xlr1w8 webfonts-klk4pu webfonts-ca8h9q"},i.translate(`Carbon.Webfonts:Main:fontType.${r}`,r)),Object.values(l).map(({label:a,cssFile:y,value:F,display:D,index:x})=>{let O=Q(F);return O&&(N=x+1,q=x==0?null:x-1),!d||(0,_.default)(d.toLowerCase(),a.toLowerCase())?e.default.createElement("li",null,e.default.createElement("button",{key:a,onClick:()=>{n(F)},...f(o.button,O&&o.buttonCurrent)},e.default.createElement("span",{...f(o.font(F,D?.fontWeight,D?.fontStyle),o.bigFont)},a),!!y&&B&&e.default.createElement(b.Icon,{icon:"link",title:y!==!0?y:null}))):null}))))))}var fe=A(ee,"FontFamily");export{fe as default};

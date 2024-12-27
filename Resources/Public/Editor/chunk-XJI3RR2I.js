import{b as C,e as v,f as q,g as c}from"./chunk-WFPJJPWZ.js";var f=C(v(),1),R=C(q(),1);var B={output:{display:"webfonts-1lliihq",marginLeft:"webfonts-1jstro9",padding:"webfonts-1gjcfxf",overflow:"webfonts-b3r6kr",background:"webfonts-1md70p1",border:"webfonts-1wty727",lineHeight:"webfonts-o5v014",height:"webfonts-1vqgdyp",color:"webfonts-189eng2",outline:"webfonts-zd0ubt",width:"webfonts-h8yej3",textOverflow:"webfonts-lyipyv",cursor:"webfonts-1ypdohk",$$css:!0},font:(t,n,s)=>[{fontFamily:t==null?null:"webfonts-t1x0nq",fontWeight:n==null?null:"webfonts-1oq5gaa",fontStyle:s==null?null:"webfonts-1sgc6b7",fontSize:"webfonts-b4twgi",$$css:!0},{"--fontFamily":t??void 0,"--fontWeight":n??void 0,"--fontStyle":s??void 0}]};function T({id:t,addTitle:n,fonts:s,fontFamily:r,enableFallback:o,placeholderFont:e,placeholder:l,i18nRegistry:i}){let[u,a]=(0,f.useState)(""),[d,w]=(0,f.useState)(null);(0,f.useEffect)(()=>{if(!r){w(null),a("");return}let b=x(r,s),S=b?b.label:e?.label||e?.name;o&&b?.fallback&&(S+=`, ${b.fallback}`),o&&!b&&e?.fallback&&(S+=`, ${e.fallback}`),w(b),a(p(S))},[r]),l&&(l=i.translate(l));let P=p(e?.label||e?.name),g=null,m=null,k=null;return r?(g=r,m=d?.display?.fontWeight,k=d?.display?.fontStyle):e?.value?(g=e.value,m=e?.display?.fontWeight,k=e?.display?.fontStyle):e?.name&&(g=`${e.name}${o&&e.fallback?`, ${e.fallback}`:""}`),f.default.createElement("input",{type:"text",id:t,readOnly:!0,title:n&&u?u:null,...c(B.output,g&&B.font(g,m,k)),value:!!r&&d?.label||"",placeholder:P||l})}var j=(0,R.neos)(t=>({i18nRegistry:t.get("i18n")})),L=j(T);var h=C(v(),1);var y={highlight:{outline:"webfonts-1v2uk0",outlineOffset:"webfonts-1hl8ikr",zIndex:"webfonts-htitgo",borderRadius:"webfonts-1cum3z5",$$css:!0},disabled:{cursor:"webfonts-1h6gzvc",opacity:"webfonts-190dgpg",":where(*)>*_pointerEvents":"webfonts-vszx66",$$css:!0},label:{display:"webfonts-78zum5",alignItems:"webfonts-6s0dn4",cursor:"webfonts-1ypdohk",minWidth:"webfonts-1oslful",minHeight:"webfonts-e0957l",padding:"webfonts-1732f5w",gap:"webfonts-1iv4zvh",marginBottom:"webfonts-adln40",":last-child_marginBottom":"webfonts-zboxd6",$$css:!0},radio:t=>[{display:"webfonts-78zum5",width:"webfonts-w4jnvo",height:"webfonts-1qx5ct2",backgroundColor:(t?"var(--colors-PrimaryBlue)":"var(--colors-ContrastDark)")==null?null:"webfonts-r5ldyu",borderColor:(t?"var(--colors-PrimaryBlue)":"var(--colors-ContrastBrighter)")==null?null:"webfonts-1u3gezn",borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,borderWidth:"webfonts-mkeg23",borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:"webfonts-1y0btm7",borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderRadius:"webfonts-10hpsqq",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,alignItems:"webfonts-6s0dn4",justifyContent:"webfonts-l56j7k",$$css:!0},{"--backgroundColor":(t?"var(--colors-PrimaryBlue)":"var(--colors-ContrastDark)")??void 0,"--borderColor":(t?"var(--colors-PrimaryBlue)":"var(--colors-ContrastBrighter)")??void 0}],dot:t=>[{display:"webfonts-1lliihq",background:(t?"var(--colors-ContrastBrightest)":"var(--colors-UncheckedCheckboxTick)")==null?null:"webfonts-7m5jml",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:null,borderRadius:"webfonts-10hpsqq",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,width:"webfonts-lpq68b",height:"webfonts-1iflsja",$$css:!0},{"--background":(t?"var(--colors-ContrastBrightest)":"var(--colors-UncheckedCheckboxTick)")??void 0}]};function W({value:t,label:n,highlight:s,onChange:r=()=>{},currentValue:o,disabled:e}){let l=o==t;return h.default.createElement("label",{...c(y.label,s&&l&&y.highlight,e&&y.disabled)},h.default.createElement("input",{className:"webfonts-10l6tqk webfonts-3rpodo",type:"radio",value:t,checked:l,onChange:()=>r(t)}),h.default.createElement("span",{...c(y.radio(l))},h.default.createElement("span",{...c(y.dot(l))})),n||t)}function V(t,n,s,r=400){let o=x(t,s);if(!o)return null;let e=o?.fontWeight;if(!e)return null;if(typeof e=="string"){let l=e.split(" ").sort(),i=parseInt(l[0]),u=parseInt(l[l.length-1]);return e={min:i,max:u},{type:"variable",value:$(e,n,r),font:o,fontWeight:e}}return Array.isArray(e)||(e=[e]),{type:"fixed",value:$(e,n,r),font:o,fontWeight:e}}function $(t,n,s=400){if(typeof n!="number"&&(n=s),!Array.isArray(t)){let{min:r,max:o}=t;return n<r?r:n>o?o:n}return t.reduce((r,o)=>Math.abs(o-n)<Math.abs(r-n)?o:r)}function x(t,n){if(!t||typeof t!="string")return null;let[s]=t.split(",");return n[s.trim()]||null}function F(t,n=!0,s=null,r=!0){let o={nested:{},flat:{}};s&&s.name&&E(s.name,s,n);let e=0;for(let l in t){let i=t[l];if(!i)continue;let{type:u,...a}=E(l,i,n);o.nested[u]||(o.nested[u]={}),r||(o.flat[l]={...a,index:e},e++),o.nested[u][l]=a}if(r){for(let l in o.nested)o.nested[l]=Object.fromEntries(Object.entries(o.nested[l]).sort(([,i],[,u])=>i.label.localeCompare(u.label))),o.flat={...o.flat,...o.nested[l]};for(let l in o.flat)o.flat[l].index=e,e++}return o}function p(t){return!t||typeof t!="string"?"":t.replaceAll("'","").replaceAll('"',"").replaceAll(",",", ").replaceAll("  "," ").trim()}function A(t){let n=I(t);if(!n||document.querySelector(`link[href="${n}"]`))return null;let s=document.head,r=document.createElement("link");r.rel="stylesheet",r.href=n,s.appendChild(r)}function I(t){return!t||typeof t!="string"?null:t.startsWith("resource://")?t.replace("resource://","/_Resources/Static/Packages/"):t}function E(t,n,s){let r=p(n.label||t),o=n.fallback||"",e=p(o),l=O(e,n.group),i=n.cssFile===!0?!0:I(n.cssFile),u=`${t}${s&&o?`,${o}`:""}`,a=n?.fontStyle||"normal",d=n?.fontWeight||400,w={fontStyle:n?.display?.fontStyle||a,fontWeight:n?.display?.fontWeight||d};return typeof i=="string"&&A(i),{key:t,label:r,fallback:e,fontStyle:a,fontWeight:d,display:w,cssFile:i,value:u,type:l}}function O(t,n){return n?n==="Sans Serif"?"sans-serif":n.toLowerCase():t.includes("sans-serif")?"sans-serif":t.includes("serif")?"serif":t.includes("monospace")?"monospace":t.includes("cursive")?"cursive":t.includes("fantasy")?"fantasy":"sans-serif"}export{L as a,W as b,V as c,$ as d,x as e,F as f,p as g,A as h,I as i};
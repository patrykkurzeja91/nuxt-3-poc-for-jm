import{i as k,r as g,j as O,k as P,l as b,m as z,n as E,u as F,g as R}from"./entry.d3c87bed.mjs";const j=s=>k(s)?s:g(s),B=()=>null;function M(...s){var d,p,h,m,v,w,D;const f=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(f);let[a,i,t={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=(d=t.server)!=null?d:!0,t.default=(p=t.default)!=null?p:B,t.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),t.lazy=(m=(h=t.lazy)!=null?h:t.defer)!=null?m:!1,t.initialCache=(v=t.initialCache)!=null?v:!0;const e=O(),c=E();if(c&&!c._nuxtOnBeforeMountCbs){const r=c._nuxtOnBeforeMountCbs=[];c&&(P(()=>{r.forEach(o=>{o()}),r.splice(0,r.length)}),b(()=>r.splice(0,r.length)))}const u=()=>t.initialCache&&e.payload.data[a]!==void 0,n={data:j((w=e.payload.data[a])!=null?w:t.default()),pending:g(!u()),error:g((D=e.payload._errors[a])!=null?D:null)};n.refresh=(r={})=>e._asyncDataPromises[a]?e._asyncDataPromises[a]:r._initial&&u()?e.payload.data[a]:(n.pending.value=!0,e._asyncDataPromises[a]=new Promise((o,x)=>{try{o(i(e))}catch(C){x(C)}}).then(o=>{t.transform&&(o=t.transform(o)),t.pick&&(o=A(o,t.pick)),n.data.value=o,n.error.value=null}).catch(o=>{n.error.value=o,n.data.value=F(t.default())}).finally(()=>{n.pending.value=!1,e.payload.data[a]=n.data.value,n.error.value&&(e.payload._errors[a]=!0),delete e._asyncDataPromises[a]}),e._asyncDataPromises[a]);const l=()=>n.refresh({_initial:!0}),_=t.server!==!1&&e.payload.serverRendered;{_&&e.isHydrating&&a in e.payload.data?n.pending.value=!1:c&&e.payload.serverRendered&&(e.isHydrating||t.lazy)?c._nuxtOnBeforeMountCbs.push(l):l(),t.watch&&z(t.watch,()=>n.refresh());const r=e.hook("app:data:refresh",o=>{if(!o||o.includes(a))return n.refresh()});c&&b(r)}const y=Promise.resolve(e._asyncDataPromises[a]).then(()=>n);return Object.assign(y,n),y}function A(s,f){const a={};for(const i of f)a[i]=s[i];return a}function T(s,f,a){const[i,t]=typeof f=="string"?[{},f]:[f,a],e=i.key||t;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const c="$f"+e,u=R(()=>{let r=s;return typeof r=="function"&&(r=r()),k(r)?r.value:r}),{server:n,lazy:l,default:_,transform:y,pick:d,watch:p,initialCache:h,...m}=i,v={...m,cache:typeof i.cache=="boolean"?void 0:i.cache},w={server:n,lazy:l,default:_,transform:y,pick:d,initialCache:h,watch:[u,...p||[]]};return M(c,()=>$fetch(u.value,v),w,"$2Qpjr020wX")}export{T as u};
import{d as w,r as y,w as C,g as i,o as r,c,a as e,F as _,h as m,t as f,u as k,e as B}from"./entry.392649dd.mjs";import{u as F}from"./fetch.32ba23f0.mjs";import{_ as j}from"./_plugin-vue_export-helper.7287ed4b.mjs";const z={class:"relative overflow-x-hidden"},A={class:"container mx-auto px-5 py-24"},E=e("div",{class:"mb-20 flex w-full flex-col text-center"},[e("h1",{class:"heading mb-16"},"See our categories"),e("p",{class:"mx-auto lg:w-2/3"}," Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them. ")],-1),L={class:"mb-8 flex h-36 w-full rounded-md bg-royal-blue p-4 text-white"},M={class:"z-10 flex w-3/4 flex-wrap"},S={class:"card relative flex h-full flex-col items-start justify-start border-l-2 border-dark-golden bg-white/80 p-2"},N={class:"z-10 text-xl text-gray-500"},O=w({__name:"CategoryList",async setup(h){let n,l;const p=y([]),{data:d}=([n,l]=C(()=>F(()=>"/categories/all","$EvQHUoiE75")),n=await n,l(),n);p.value=d.value.categories;const g=i(()=>d.value.categories),u=["Award","Top","Best","Award of the year"],b=i(()=>g.value.map(a=>{const t=u[Math.floor(Math.random()*u.length)];return{...a,subcat:t}})),x=(a,t)=>a.reduce((s,o)=>({...s,[o[t]]:[...s[o[t]]||[],o]}),{}),v=i(()=>{const a=x(b.value,"subcat");return Object.entries(a).map(t=>({subcat:t[0],data:t[1]}))});return(a,t)=>(r(),c("section",z,[e("div",A,[E,(r(!0),c(_,null,m(k(v),s=>(r(),c("div",{key:s.subcat,class:"mx-auto mb-16 max-w-4xl"},[e("div",L,[e("h5",null,f(s.subcat),1)]),e("div",M,[(r(!0),c(_,null,m(s.data,o=>(r(),c("div",{key:o.id,class:"mb-4 w-full md:w-1/2"},[e("div",S,[e("p",N,f(o.name),1)])]))),128))])]))),128))])]))}}),V={};function W(h,n){const l=O;return r(),c("div",null,[B(l)])}const Q=j(V,[["render",W]]);export{Q as default};

import{d as f,w as x,l as s,o as h,c as p,a as e,z as a,t as l,u as i,f as y,A as v,C as g}from"./entry.b3fc45cd.js";import{u as w}from"./states.c5db29a0.js";import{u as b}from"./composables.826c1d35.js";import{u as k}from"./asyncData.0529b365.js";const D={class:"thank-you-page relative flex items-center justify-center overflow-x-hidden"},A={class:"container mx-auto px-5 py-48"},B={class:"mb-20 flex w-full flex-col text-center"},C=e("h1",{class:"mb-16 text-4xl"}," Thank you for registering your business at the Beauty Kingdom Awards. ",-1),N={class:"mx-auto max-w-3xl text-2xl"},S={class:"text-dark-golden"},T={class:"text-dark-golden"},E={class:"flex justify-center"},Y=f({__name:"thank-you",async setup(P){let t,n;const o=w();b({title:"Thank You for Payment"});const{data:c}=([t,n]=x(()=>k("event",()=>$fetch("https://api.beautykingdomawards.co.uk/event"))),t=await t,n(),t);c.value!==null&&(o.value=c.value);const u={year:"numeric",month:"long",day:"numeric"},r=s(()=>new Date(o.value.event_date)),d=s(()=>r.value.toLocaleDateString("en-US",u)),_=s(()=>o.value.city+", "+o.value.street);return(V,j)=>{const m=g;return h(),p("section",D,[e("div",A,[e("div",B,[C,e("p",N,[a(" Your business will be assessed by our committee, and if you become a FINALIST, we will invite you to the Gala Dinner on "),e("span",S,l(i(d)),1),a(" in "),e("span",T,l(i(_)),1),a(". Please feel free to contact us if you have any questions. We wish you good luck. Beauty Kingdom Awards team ")])]),e("div",E,[y(m,{class:"mx-auto rounded border-0 bg-royal-blue py-2 px-8 text-lg text-white hover:bg-yale-blue focus:outline-none",to:"/"},{default:v(()=>[a(" Go back to homepage ")]),_:1})])])])}}});export{Y as default};

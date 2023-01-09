import{d as p,o as n,c as s,n as c,t as i,D as m,a as e,F as b,i as f,z as h,f as r,A as w,C as x,w as _,u as y}from"./entry.44dbcf6a.js";import{_ as v}from"./_plugin-vue_export-helper.a1a6add7.js";import{u as k}from"./states.7ac75108.js";import{u as C}from"./asyncData.4fc5e9e8.js";import{u as S}from"./composables.ff55570e.js";const $={class:"title-font mb-4 text-sm font-medium tracking-widest"},L={class:"mb-4 flex items-center border-b border-light-grayish-blue-100 pb-8 text-5xl leading-none text-gray-900"},P={class:"mb-4"},B=e("span",{class:"mr-3 mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-light-grayish-blue-500 text-white"},[e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",class:"h-3 w-3",viewBox:"0 0 24 24"},[e("path",{d:"M20 6L9 17l-5-5"})])],-1),I=e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"ml-auto h-4 w-4",viewBox:"0 0 24 24"},[e("path",{d:"M5 12h14M12 5l7 7-7 7"})],-1),T=p({__name:"PricingCard",props:{bundle:null,price:null,popular:null,benefitList:null},setup(t){return(a,o)=>{const l=x;return n(),s("div",{class:c([{"border-dark-golden":t.popular==="bestSeller","border-royal-blue":t.popular==="popular","border-light-grayish-blue-100":t.popular===""},"relative flex h-full flex-col overflow-hidden rounded-lg border-2 bg-white/70 px-6 pt-10 pb-6 drop-shadow-2xl backdrop-blur-md"])},[t.popular?(n(),s("span",{key:0,class:c([{"bg-dark-golden":t.popular==="bestSeller","bg-royal-blue":t.popular==="popular"},"absolute right-0 top-0 rounded-bl px-3 py-1 text-xs tracking-widest text-white"])},i(t.popular==="popular"?"POPULAR":"BEST SELLER"),3)):m("",!0),e("h2",$,i(t.bundle),1),e("h1",L,[e("span",null,i(t.price),1)]),e("div",P,[(n(!0),s(b,null,f(t.benefitList,(d,u)=>(n(),s("p",{key:u,class:"mb-3 flex items-start text-gray-600"},[B,h(i(d),1)]))),128))]),r(l,{class:c([{"bg-dark-golden hover:bg-dark-orange":t.popular==="bestSeller","bg-royal-blue hover:bg-yale-blue":t.popular==="popular","bg-light-grayish-blue-500 hover:bg-light-grayish-blue-800":t.popular===""},"mt-auto flex w-full items-center rounded border-0 py-2 px-4 text-white focus:outline-none"]),to:"/contact"},{default:w(()=>[h(" Contact us "),I]),_:1},8,["class"])],2)}}}),E={},R={class:"-m-4 flex flex-wrap"},A={class:"w-full p-4 lg:w-1/2 xl:w-1/4"},M={class:"w-full p-4 lg:w-1/2 xl:w-1/4"},D={class:"w-full p-4 lg:w-1/2 xl:w-1/4"},F={class:"w-full p-4 lg:w-1/2 xl:w-1/4"};function N(t,a){const o=T;return n(),s("div",R,[e("div",A,[r(o,{popular:"bestSeller",bundle:"CATEGORY SPONSOR",price:"\xA31000","benefit-list":["Sponsoring a category of your choice","2 tickets to the Final Gala","Awarding the statuette to the winners on the stage","Photo with the winner","Possibility to award a prize: a voucher, your product, a material prize","Logo and information about the sponsor in social media during the gala, during the presentation of the selected category","Information about the sponsor in the event brochure","Information about the sponsor in the newsletter","Rotating logo displayed during the gala","Thanks to the sponsor from the stage"]})]),e("div",M,[r(o,{popular:"popular",bundle:"DIAMOND",price:"\xA3600","benefit-list":["2 tickets to the Final Gala","5 minutes for the presentation of the company on stage","Possibility to add to goodie bags for gala participants: voucher, product sample","Free nomination of the company in the selected category","Logo and information about the sponsor in social media and during the gala","Company logo in a movie  from the gala","Information about the sponsor in the event brochure","Information about the sponsor in the newsletter","Rotating logo displayed during the gala","Thanks to the sponsor from the stage"]})]),e("div",D,[r(o,{popular:"",bundle:"GOLD",price:"\xA3400","benefit-list":["1 ticket to the Final Gala","15 second advert shown at main event","Possibility to add to goodie bags for gala participants: voucher, product sample","Logo and information about the sponsor in social media and during the gala","Company logo in a movie  from the gala","Information about the sponsor in the event brochure","Information about the sponsor in the newsletter","Rotating logo displayed during the gala","Thanks to the sponsor from the stage"]})]),e("div",F,[r(o,{popular:"",bundle:"SILVER",price:"\xA3250","benefit-list":["Possibility to add to goodie bags for gala participants: voucher, product sample","Logo and information about the sponsor in social media and during the gala","Information about the sponsor in the event brochure","Information about the sponsor in the newsletter","Rotating logo displayed during the gala","Thanks to the sponsor from the stage"]})])])}const O=v(E,[["render",N]]),G={class:"overflow-hidden"},V={class:"container mx-auto px-5 py-24"},z={class:"mb-20 flex w-full flex-col text-center"},j=e("h1",{class:"heading mb-16 text-dark-golden"},"Become a Sponsor",-1),H=e("p",{class:"mx-auto mb-4 leading-relaxed lg:w-2/3"}," Show your company and product to the best in the industry! ",-1),K=e("p",{class:"mx-auto mb-10 leading-relaxed lg:w-2/3"}," Beauty Kingdom Awards wants to support outstanding achievements and talents in the beauty sector. Event sponsorship ensures prestige, increases brand visibility, and allows you to reach new customers and business partners. ",-1),U={class:"mx-auto mb-10 text-lg font-bold leading-relaxed lg:w-2/3"},Y=e("p",{class:"mx-auto mb-4 leading-relaxed lg:w-2/3"}," Take advantage of the packages prepared by the experienced marketing agency E&T Marketing Solutions, which will ensure the highest standards of advertising and presenting your product for the beauty industry. ",-1),ee=p({__name:"sponsors",async setup(t){let a,o;const l=k(),{data:d}=([a,o]=_(()=>C("event",()=>$fetch("https://api.beautykingdomawards.co.uk/event"))),a=await a,o(),a);return d.value!==null&&(l.value=d.value),S({title:"Become a sponsor"}),(u,q)=>{const g=O;return n(),s("section",G,[e("div",V,[e("div",z,[j,H,K,e("p",U," Be a part of "+i(y(l).name),1),Y]),r(g)])])}}});export{ee as default};

exports.id=261,exports.ids=[261],exports.modules={40795:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,25251,23)),Promise.resolve().then(t.t.bind(t,41297,23)),Promise.resolve().then(t.t.bind(t,42796,23)),Promise.resolve().then(t.bind(t,39496)),Promise.resolve().then(t.bind(t,34036)),Promise.resolve().then(t.bind(t,94011)),Promise.resolve().then(t.bind(t,70966)),Promise.resolve().then(t.bind(t,69949)),Promise.resolve().then(t.bind(t,89601)),Promise.resolve().then(t.bind(t,30077))},69949:(e,s,t)=>{"use strict";t.r(s),t.d(s,{ProjectHero:()=>f});var l=t(60080),r=t(9885),i=t(11440),a=t.n(i),c=t(87499);let n=`
mimeType
filename
width
height
alt
caption
`,o=`image {
  ${n}
}`,m=`
  query InvolvementGroups {
    InvolvementGroups(limit: 300) {
      docs {
        slug
        title
        categories {
          title
        }
        ${o}
      }
    }
  }
`,d=`
  query InvolvementEvents {
    InvolvementEvents(where: { eventDate: { gte: "now" } }, limit: 300) {
      docs {
        slug
        title
        categories {
          title
        }
        ${o}
      }
    }
  }
`,h=`
  query Listings {
    Listings(limit: 300) {
      docs {
        slug
      }
    }
  }
`,x=`
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`,u=`
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
      }
    }
  }
`,p=`
  query Projects {
    Projects(limit: 300) {
      docs {
        slug
        title
        latitude
        longitude
      }
    }
  }
`,g=`
  query Services {
    Services(limit: 300) {
      docs {
        slug
      }
    }
  }
`,j=`
  query Teammates {
    Teammates(limit: 300) {
      docs {
        slug
      }
    }
  }
`,v=process.env.NEXT_BUILD?`http://127.0.0.1:${process.env.PORT||3e3}`:"http://localhost:3000",y={pages:{query:x,key:"Pages"},posts:{query:u,key:"Posts"},projects:{query:p,key:"Projects"},listings:{query:h,key:"Listings"},teammates:{query:j,key:"Teammates"},involvementGroups:{query:m,key:"InvolvementGroups"},involvementEvents:{query:d,key:"InvolvementEvents"},services:{query:g,key:"Services"},communityResources:{query:"",key:"CommunityResources"}},N=async(e,s,l)=>{let r;if(!y[e])throw Error(`Collection ${e} not found`);if(s){let{cookies:e}=await t.e(620).then(t.t.bind(t,92620,23));r=e().get("payload-token")}let i=await fetch(`${v}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...r?.value&&s?{Authorization:`JWT ${r.value}`}:{}},cache:"no-store",next:{tags:[e]},body:JSON.stringify({query:y[e].query,variables:l})})?.then(e=>e.json())?.then(s=>{if(s.errors)throw Error(s?.errors?.[0]?.message??"Error fetching docs");return s?.data?.[y[e].key]?.docs});return i};var b=t(30077);async function w(){try{let e=await N("projects");return e?.map(({slug:e,title:s,latitude:t,longitude:l})=>({name:s,slug:e,coords:{lat:t,lng:l}}))}catch(e){return[]}}let f=({richText:e,media:s,links:t,headerText:i})=>{let[n,o]=(0,r.useState)();return(0,r.useEffect)(()=>{let e=async()=>{let e=await w();o(e)};e().catch(console.error)},[]),(0,l.jsxs)("div",{className:"grid lg:grid-cols-2 grid-cols-1 global-margin-x lg:gap-0 gap-16 lg:mt-16",children:[(0,l.jsxs)("div",{className:"mt-24",children:[(0,l.jsx)("h1",{className:"mb-10",children:"Our Projects"}),(0,l.jsx)("p",{className:"mb-8",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor eros vel augue pulvinar ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),(0,l.jsxs)("div",{className:"flex gap-8 items-center",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm text-wwRed mb-4 italic",children:"Need help with your big idea?"}),(0,l.jsx)(a(),{href:"/contact",className:"btn-primary",children:"SEND US A MESSAGE"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-2 border-l-2 border-wwRed pl-8",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6 text-wwRed",children:(0,l.jsx)("path",{"fill-rule":"evenodd",d:"M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z","clip-rule":"evenodd"})}),(0,l.jsxs)("span",{children:["Or call us at",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{children:c.z6.phoneNumber})]})]})]})]}),(0,l.jsx)(b.GoogleMap,{pins:n,pinType:"project"})]})}},63470:e=>{e.exports={hero:"HighImpact_hero__qkKp_",media:"HighImpact_media__uxa5y",links:"HighImpact_links__yDa_5",caption:"HighImpact_caption__Vmt4w",content:"HighImpact_content__ifEIW"},e.exports.__checksum="cd58124ffd25"},30967:e=>{e.exports={},e.exports.__checksum="73ff4aef96d0"},27791:e=>{e.exports={hero:"MediumImpact_hero__x2eOT",richText:"MediumImpact_richText__NN8m_",links:"MediumImpact_links__jKvJ9",link:"MediumImpact_link__T2op7",media:"MediumImpact_media___5aQS"},e.exports.__checksum="2003c8dbb903"},43283:(e,s,t)=>{"use strict";t.d(s,{V:()=>P});var l=t(48144),r=t(53830),i=t(44602),a=t.n(i),c=t(56355),n=t(40702),o=t(23757),m=t(75042),d=t.n(m),h=t(8007),x=t(60584),u=t(53205),p=t(63470),g=t.n(p),j=t(55509),v=t(27791),y=t.n(v),N=t(17536);let b=(0,N.createProxy)(String.raw`C:\Users\liamk\Desktop\LKY\WW-Group\TeamWebsite\ww-group-real\src\app\_heros\ProjectHero\index.tsx`),{__esModule:w,$$typeof:f}=b;b.default;let _=b.ProjectHero,k={highImpact:({richText:e,media:s,links:t})=>(0,l.jsxs)(u.T,{className:g().hero,children:[(0,l.jsxs)("div",{className:g().content,children:[(0,l.jsx)(n.Z,{content:e}),Array.isArray(t)&&t.length>0&&(0,l.jsx)("ul",{className:g().links,children:t.map(({link:e},s)=>(0,l.jsx)("li",{children:(0,l.jsx)(x.g,{...e})},s))})]}),(0,l.jsx)("div",{className:g().media,children:"object"==typeof s&&(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(c.p,{resource:s,imgClassName:g().image,priority:!0}),s?.caption&&(0,l.jsx)(n.Z,{content:s.caption,className:g().caption})]})})]}),mediumImpact:e=>{let{richText:s,media:t,links:r}=e;return(0,l.jsxs)(u.T,{className:y().hero,children:[(0,l.jsxs)("div",{className:y().background,children:[(0,l.jsx)(n.Z,{className:y().richText,content:s}),Array.isArray(r)&&(0,l.jsx)("ul",{className:y().links,children:r.map(({link:e},s)=>(0,l.jsx)("li",{children:(0,l.jsx)(x.g,{className:y().link,...e})},s))})]}),(0,l.jsx)("div",{className:y().media,children:"object"==typeof t&&(0,l.jsx)(c.p,{className:y().media,resource:t})})]})},lowImpact:j.R,fullscreen:({richText:e,media:s,links:t,headerText:r,backupImage:i})=>(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"absolute z-20 lg:w-3/5 flex flex-col h-full justify-center md:space-y-16 space-y-4 global-margin-x",children:[(0,l.jsxs)("div",{className:"space-y-4 text-center lg:text-left",children:[(0,l.jsx)("h1",{className:"md:font-normal text-white text-2xl sm:text-3xl font-semibold md:text-5xl lg:text-6xl",children:r}),(0,l.jsx)(n.Z,{content:e,className:"md:text-lg font-medium lg:w-3/4 text-sm",textColor:"text-white"})]}),(0,l.jsx)("div",{className:"space-x-4 mt-4 sm:mt-0 mx-auto lg:mx-0 text-center sm:text-left",children:t&&t.map(e=>{let s=e.link?.appearance;if(s)return"secondary"===s?(0,l.jsx)(x.g,{className:"btn-secondary",...e.link}):(0,l.jsx)(x.g,{className:"btn-primary",...e.link})})})]}),(0,l.jsx)("div",{className:"bg-wwBlack absolute inset-0 z-10 opacity-70 pointer-events-none"}),(0,l.jsx)(c.p,{resource:s,alt:"hero-video-img",imgClassName:"sm:w-full sm:h-screen lg:h-auto object-cover hidden sm:block",videoClassName:"sm:w-full sm:h-screen lg:h-auto object-cover hidden sm:block"}),i?(0,l.jsx)(c.p,{resource:i,alt:"hero-img",imgClassName:"w-full h-[32rem] object-cover sm:hidden block"}):(0,l.jsx)(d(),{src:h.Z,alt:"hero-img",className:"w-full h-96 object-cover sm:hidden block"})]}),default:({richText:e,media:s,links:t,headerText:r})=>(0,l.jsxs)("div",{className:"grid xl:grid-cols-2 place-items-center py-16",children:[(0,l.jsxs)("div",{className:"global-margin-x mt-24",children:[(0,l.jsxs)("div",{className:"text-center xl:text-left",children:[r&&(0,l.jsx)("h1",{className:"mb-10",children:r}),(0,l.jsx)(n.Z,{content:e,className:"mb-8"})]}),(0,l.jsxs)("div",{className:"flex gap-8 items-center justify-center xl:justify-start",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm text-wwRed mb-4 italic",children:"Need help with your big idea?"}),(0,l.jsx)(a(),{href:"/contact",className:"btn-primary block text-center",children:"SEND US A MESSAGE"})]}),(0,l.jsxs)("div",{className:"flex items-center gap-2 border-l-2 border-wwRed pl-8",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6 text-wwRed",children:(0,l.jsx)("path",{"fill-rule":"evenodd",d:"M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z","clip-rule":"evenodd"})}),(0,l.jsxs)("span",{children:["Or call us at",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{className:"whitespace-nowrap",children:o.z6.phoneNumber})]})]})]})]}),(0,l.jsx)("div",{children:s?(0,l.jsx)(c.p,{resource:s,alt:"service-img",imgClassName:"my-12 lg:my-0 lg:pr-36 pr-0"}):(0,l.jsx)("div",{className:"w-full h-full bg-wwRed text-wwRed",children:"."})})]}),projectHero:_},P=e=>{let{type:s}=e||{};if(!s||"none"===s)return null;let t=k[s];return t?(0,l.jsx)(t,{...e}):null}},55509:(e,s,t)=>{"use strict";t.d(s,{R:()=>o});var l=t(48144);t(53830);var r=t(53205),i=t(40702),a=t(60864),c=t(30967),n=t.n(c);let o=({richText:e})=>(0,l.jsx)(r.T,{className:"",children:(0,l.jsx)("div",{className:"global-margin-x my-12",children:(0,l.jsx)(a.G,{children:(0,l.jsx)(i.Z,{className:n().richText,content:e})})})})}};
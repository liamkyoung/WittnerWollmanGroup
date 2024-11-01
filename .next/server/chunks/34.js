exports.id=34,exports.ids=[34],exports.modules={94011:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Image:()=>p});var l=s(60080),r=s(9885),i=s.n(r),a=s(52451),o=s.n(a),n=s(67705),c=s.n(n),d=s(80694),u=s.n(d);let{breakpoints:m}=c(),p=e=>{let t,s;let{imgClassName:r,onClick:a,onLoad:n,resource:c,priority:d,fill:p,src:g,alt:h}=e,[y,x]=i().useState(!0),v=h,f=g||"";if(!f&&c&&"string"!=typeof c){let{width:e,height:l,filename:r,alt:i}=c;t=e,s=l,v=i,f=`http://localhost:3000/media/${r}`}let $=Object.entries(m).map(([,e])=>`(max-width: ${e}px) ${e}px`).join(", ");return(0,l.jsx)(o(),{className:[y&&u().placeholder,u().image,r].filter(Boolean).join(" "),src:f,alt:v||"",onClick:a,onLoad:()=>{x(!1),"function"==typeof n&&n()},fill:p,width:p?void 0:t,height:p?void 0:s,sizes:$,priority:d})}},70966:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Video:()=>o});var l=s(60080),r=s(9885),i=s(6032),a=s.n(i);let o=e=>{let{videoClassName:t,resource:s,onClick:i}=e,o=(0,r.useRef)(null);if((0,r.useEffect)(()=>{let{current:e}=o;e&&e.addEventListener("suspend",()=>{})},[]),s&&"string"!=typeof s){let{filename:e}=s;return(0,l.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,controls:!1,className:[a().video,t].filter(Boolean).join(" "),onClick:i,ref:o,children:(0,l.jsx)("source",{src:`http://localhost:3000/media/${e}`})})}return null}},88995:(e,t,s)=>{"use strict";s.d(t,{p:()=>o});var l=s(60080),r=s(9885),i=s(94011),a=s(70966);let o=e=>{let{className:t,resource:s,htmlElement:o="div"}=e,n="string"!=typeof s&&s?.mimeType?.includes("video"),c=o||r.Fragment;return(0,l.jsx)(c,{...null!==o?{className:t}:{},children:n?(0,l.jsx)(a.Video,{...e}):(0,l.jsx)(i.Image,{...e})})}},11770:(e,t,s)=>{"use strict";function l(e){let t="string"==typeof e?parseFloat(e):e;return isNaN(t)?"":"$"+(t=Math.round(t)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}s.d(t,{Y:()=>l})},67705:e=>{"use strict";e.exports={breakpoints:{s:768,m:1024,l:1440},colors:{base0:"rgb(255, 255, 255)",base100:"rgb(235, 235, 235)",base500:"rgb(128, 128, 128)",base850:"rgb(34, 34, 34)",base1000:"rgb(0, 0, 0)",error500:"rgb(255, 111, 118)"}}},76075:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var l=s(60080);s(9885);let r=function({address:e,additionalInfo:t,description:s}){return(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[e&&(0,l.jsxs)("div",{className:"inline-flex gap-2",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-wwRed",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"})}),(0,l.jsx)("p",{className:"text-sm font-bold",children:e})]}),t&&(0,l.jsxs)("div",{className:"inline-flex gap-2",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-wwRed",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"})}),(0,l.jsx)("p",{className:"text-sm font-bold",children:t.map((e,s)=>e+(s!==t.length-1?", ":""))})]}),s&&(0,l.jsx)("p",{children:s})]})}},29356:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CommunityResourceGallery:()=>n});var l=s(60080),r=s(9885),i=s(88995),a=s(76075);let o=e=>{let{doc:t,className:s}=e,{title:r,categories:o,image:n,description:c,address:d}=t||{};o&&Array.isArray(o)&&o.length;let u=c?.replace(/\s/g," ");return(0,l.jsxs)("div",{className:`${s} w-96 lg:w-72 space-y-4`,children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("h4",{children:r}),(0,l.jsx)(a.Z,{address:d})]}),(0,l.jsx)(i.p,{imgClassName:"w-full h-full",resource:n}),(0,l.jsx)("p",{className:"border-l-4 border-wwRed pl-2",children:u})]})},n=({communityResources:e})=>{let[t,s]=(0,r.useState)([{label:"All",shorthand:"a",selected:!0},{label:"Exercise",shorthand:"ex",selected:!1},{label:"Enrichment",shorthand:"en",selected:!1},{label:"Government",shorthand:"gov",selected:!1},{label:"Entertainment",shorthand:"ent",selected:!1},{label:"Parks and Rec",shorthand:"pr",selected:!1},{label:"Volunteering",shorthand:"v",selected:!1}]),i=t.find(e=>e.selected);(0,r.useEffect)(()=>{},[t]);let a=e=>{let l=t.map(t=>({...t,selected:t.shorthand===e.shorthand}));s(l)};return(0,l.jsx)(l.Fragment,{children:e&&e.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"global-margin-x",children:[(0,l.jsxs)("div",{className:"sm:hidden",children:[(0,l.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),(0,l.jsx)("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",children:t&&t.length>0?t.map(e=>(0,l.jsx)("option",{selected:e.selected,onSelect:()=>a(e)})):(0,l.jsx)("div",{className:"flex glex-grow",children:"There are no resources in this category"})})]}),(0,l.jsx)("div",{className:"hidden sm:block",children:(0,l.jsx)("div",{className:"border-b border-gray-200",children:(0,l.jsx)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t.map(e=>(0,l.jsx)("div",{className:e.selected?"whitespace-nowrap border-b-2 border-wwRed px-1 py-4 text-sm font-medium text-wwRed":"whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer",onClick:()=>a(e),children:e.label}))})})})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 my-24 place-items-center mx-20",children:e&&e.length>0&&e?.map(e=>{let t=e.categories;if("All"===i.label||t?.title?.includes(i.label))return l.jsx(o,{doc:e},e.id)})}),(!e||e?.length==0)&&(0,l.jsx)("p",{className:"text-center font-bold flex items-center justify-center my-24",children:"There are no resources for this category"})]})})}},41004:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var l=s(60080);s(9885);var r=s(11440),i=s.n(r),a=s(88995),o=s(50966),n=s(76075);let c=function({size:e,accentText:t,title:s,image:r,description:c,address:d,additionalInfo:u,textOnRight:m=!1,link:p}){let g="64";return e===o.I.MEDIUM?g="72":e===o.I.LARGE?g="80":e===o.I.EXTRALARGE&&(g="96"),(0,l.jsx)("div",{children:(0,l.jsx)(i(),{href:p||"/",className:"hover:opacity-90",children:m?(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(a.p,{resource:r,imgClassName:`rounded-lg size-${g}`}),t&&(0,l.jsx)("div",{className:"bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md",children:(0,l.jsx)("p",{className:"text-wwRed font-bold",children:t})})]}),(0,l.jsxs)("div",{className:"max-w-64",children:[(0,l.jsx)("h4",{className:"my-4",children:s}),(0,l.jsx)(n.Z,{address:d,description:c,additionalInfo:u})]})]}):(0,l.jsxs)("div",{className:`max-w-${g}`,children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(a.p,{resource:r,imgClassName:`rounded-lg size-${g}`}),t&&(0,l.jsx)("div",{className:"bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md",children:(0,l.jsx)("p",{className:"text-wwRed font-bold",children:t})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"my-4",children:s}),(0,l.jsx)(n.Z,{address:d,description:c,additionalInfo:u})]})]})})})}},30077:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GoogleMap:()=>d});var l=s(60080),r=s(9885),i=s(44830),a=s(41004),o=s(11770);let n=({position:e,title:t,href:s,image:n,address:c,price:d,pinType:u})=>{let[m,p]=(0,i.Rt)(),[g,h]=(0,r.useState)(!1),y=(0,r.useCallback)(()=>h(e=>!e),[]),x=(0,r.useCallback)(()=>h(!1),[]),v="listing"===u?`/listings/${s}`:`/projects/${s}`;return(0,l.jsx)(l.Fragment,{children:e.lat&&e.lng&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i._Q,{ref:m,position:new google.maps.LatLng(e.lat,e.lng),onClick:y}),g&&(0,l.jsx)(i.nx,{anchor:p,onClose:x,children:(0,l.jsx)(a.Z,{link:v,accentText:(0,o.Y)(d),address:c,title:t,image:n})})]})})};var c=s(87499);let d=({pins:e,fullscreen:t=!1,zoom:s="default",pinType:r="listing"})=>{let a=11;return"close"===s&&(a=14),"far"===s&&(a=10),(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)(i.un,{apiKey:"AIzaSyAswgTLqGUjxHaQl3TpWkYktBdK0JLs65o",children:(0,l.jsx)(i.D5,{style:{width:t?"100vw":"100%",height:t?"500px":"44rem"},defaultCenter:c.Op.mapCenter,defaultZoom:a,gestureHandling:"greedy",disableDefaultUI:!0,mapId:"1",children:e&&e.map((e,t)=>(0,l.jsx)(n,{position:{lat:e.coords.lat,lng:e.coords.lng},title:e.name,href:e.slug,image:e.coverImg,address:e.address,price:e.price,pinType:r},t))})})})}},50966:(e,t,s)=>{"use strict";var l,r;s.d(t,{I:()=>l,e:()=>r}),function(e){e[e.SMALL=0]="SMALL",e[e.MEDIUM=1]="MEDIUM",e[e.LARGE=2]="LARGE",e[e.EXTRALARGE=3]="EXTRALARGE",e[e.HALF_SCREEN=4]="HALF_SCREEN",e[e.FULL_SCREEN=5]="FULL_SCREEN"}(l||(l={})),function(e){e[e.DEFAULT=0]="DEFAULT",e[e.WHITE=1]="WHITE",e[e.RED=2]="RED",e[e.YELLOW=3]="YELLOW"}(r||(r={}))},87499:(e,t,s)=>{"use strict";s.d(t,{Op:()=>r,z6:()=>l});let l={phoneNumber:"(813) 456-7890",email:"liamkingstonyoung@gmail.com",address:"360 Central Ave, St. Petersburg, FL 33701",linkedin:{platformName:"linkedin",username:"liamkyoung",profileLink:"https://www.linkedin.com/in/liamkyoung"},twitter:{platformName:"twitter",username:"liamkyoung",profileLink:"https://www.x.com/liamkyoung"},instagram:{platformName:"instagram",username:"liamkyoung",profileLink:"https://www.instagram.com/liamkyoung"},facebook:{platformName:"facebook",username:"liamkyoung",profileLink:"https://www.facebook.com"}},r={mapCenter:{lat:27.77,lng:-82.64}}},80694:e=>{e.exports={"placeholder-color-light":"Image_placeholder-color-light__lcTS4",placeholder:"Image_placeholder__kc6oy"},e.exports.__checksum="461ab99589dc"},6032:e=>{e.exports={video:"Video_video__skdZH",cover:"Video_cover__hLu9Z"},e.exports.__checksum="25491b85a2d0"},59882:(e,t,s)=>{"use strict";s.d(t,{D:()=>m});var l=s(3685),r=s(90488),i=s(55648),a=s(23674),o=s(3678),n=s(1838),c=s(20109),d=s(16362);let u={pages:{query:r.E,key:"Pages"},posts:{query:i.a4,key:"Posts"},projects:{query:a.y,key:"Projects"},listings:{query:l.Le,key:"Listings"},teammates:{query:n.m_,key:"Teammates"},services:{query:o.F,key:"Services"}},m=async e=>{let t;let{collection:l,slug:r,draft:i}=e||{};if(!u[l])throw Error(`Collection ${l} not found`);if(i){let{cookies:e}=await Promise.resolve().then(s.t.bind(s,59859,23));t=e().get(d.Q)}let a=await fetch(`${c.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...t?.value&&i?{Authorization:`JWT ${t.value}`}:{}},cache:"no-store",next:{tags:[`${l}_${r}`]},body:JSON.stringify({query:u[l].query,variables:{slug:r,draft:i}})})?.then(e=>e.json())?.then(e=>{if(e.errors)throw Error(e?.errors?.[0]?.message??"Error fetching doc");return e?.data?.[u[l].key]?.docs?.[0]});return a}},30385:(e,t,s)=>{"use strict";s.d(t,{N:()=>y});var l=s(31774),r=s(95599);let i=`
  query InvolvementGroups {
    InvolvementGroups(limit: 300) {
      docs {
        slug
        title
        categories {
          title
        }
        ${r.k4}
      }
    }
  }
`,a=`
  query InvolvementEvents {
    InvolvementEvents(where: { eventDate: { gte: "now" } }, limit: 300) {
      docs {
        slug
        title
        categories {
          title
        }
        ${r.k4}
      }
    }
  }
`;var o=s(3685),n=s(90488),c=s(55648),d=s(23674),u=s(3678),m=s(1838),p=s(20109),g=s(16362);let h={pages:{query:n.q,key:"Pages"},posts:{query:c.vA,key:"Posts"},projects:{query:d.F,key:"Projects"},listings:{query:o.RH,key:"Listings"},teammates:{query:m.s_,key:"Teammates"},involvementGroups:{query:i,key:"InvolvementGroups"},involvementEvents:{query:a,key:"InvolvementEvents"},services:{query:u.A,key:"Services"},communityResources:{query:l.$,key:"CommunityResources"}},y=async(e,t,l)=>{let r;if(!h[e])throw Error(`Collection ${e} not found`);if(t){let{cookies:e}=await Promise.resolve().then(s.t.bind(s,59859,23));r=e().get(g.Q)}let i=await fetch(`${p.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...r?.value&&t?{Authorization:`JWT ${r.value}`}:{}},cache:"no-store",next:{tags:[e]},body:JSON.stringify({query:h[e].query,variables:l})})?.then(e=>e.json())?.then(t=>{if(t.errors)throw Error(t?.errors?.[0]?.message??"Error fetching docs");return t?.data?.[h[e].key]?.docs});return i}},20109:(e,t,s)=>{"use strict";s.d(t,{k:()=>l});let l=process.env.NEXT_BUILD?`http://127.0.0.1:${process.env.PORT||3e3}`:"http://localhost:3000"},16362:(e,t,s)=>{"use strict";s.d(t,{Q:()=>l});let l="payload-token"},34613:(e,t,s)=>{"use strict";s.d(t,{h:()=>a});var l=s(48144);s(53830);var r=s(44602),i=s.n(r);let a=({type:e})=>(0,l.jsx)("div",{className:"bg-wwRed py-16",children:(0,l.jsxs)("div",{className:"global-margin-x relative",children:[(0,l.jsxs)("div",{className:"mx-auto lg:mx-0 md:max-w-none w-full md:w-1/2 xl:w-3/4 space-y-8 text-center lg:text-left",children:[(0,l.jsxs)("h2",{className:"text-white",children:[(0,l.jsx)("span",{className:"text-wwYellow",children:"Message An Agent"}),(0,l.jsx)("br",{})," To Get Help with Your BIG Idea"]}),(0,l.jsx)("div",{children:(0,l.jsx)(i(),{className:"btn-secondary",href:"/contact",children:"MESSAGE AN AGENT"})})]}),(0,l.jsx)("div",{className:"hidden lg:block",children:(0,l.jsx)("div",{className:"absolute -bottom-16 -right-16 z-50 size-64 bg-wwRed"})})]})})},56355:(e,t,s)=>{"use strict";s.d(t,{p:()=>g});var l=s(48144),r=s(53830),i=s(17536);let a=(0,i.createProxy)(String.raw`C:\Users\liamk\Desktop\LKY\WW-Group\TeamWebsite\ww-group-real\src\app\_components\Media\Image\index.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let c=a.Image,d=(0,i.createProxy)(String.raw`C:\Users\liamk\Desktop\LKY\WW-Group\TeamWebsite\ww-group-real\src\app\_components\Media\Video\index.tsx`),{__esModule:u,$$typeof:m}=d;d.default;let p=d.Video,g=e=>{let{className:t,resource:s,htmlElement:i="div"}=e,a="string"!=typeof s&&s?.mimeType?.includes("video"),o=i||r.Fragment;return(0,l.jsx)(o,{...null!==i?{className:t}:{},children:a?(0,l.jsx)(p,{...e}):(0,l.jsx)(c,{...e})})}},1981:(e,t,s)=>{"use strict";s.d(t,{CS:()=>m,HZ:()=>p,Iy:()=>g,P8:()=>o,Xz:()=>c,e_:()=>d,hS:()=>a,kE:()=>n,mQ:()=>u});var l=s(45603),r=s(95599),i=s(7950);let a=`
...on Cta {
  blockType
  type
}
`,o=`
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${(0,l.A)()}
  }
}
`,n=`
...on MediaBlock {
  blockType
  invertBackground
  mediaPosition: position
  ${r.iD}
}
`,c=`
...on ProjectBlock {
  blockType
  invertBackground
  position
  location
  title
  description
  bgColor
  facts {
    factStat
    factDescription
  }
  externalLink
  ${r.iD}
}
`,d=`
...on StatsAndVideoBlock {
  blockType
  title
  description
  ${r.EJ}
  facts {
    factStat
    factDescription
  }
  youtubeLink
}
`,u=`
...on ContentAndStatsBlock {
  blockType
  title
  richText
  facts {
    factStat
    factDescription
  }
}
`,m=`
...on StatBlock {
  blockType
  title
  description
  facts {
    factStat
    factDescription
  }
}
`,p=`
...on GoogleMapsBlock {
  blockType
  locations {
    title
  }
}
`,g=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${i.MW}
      }
      ...on Project {
        id
        slug
        title
        ${i.MW}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${i.MW}
      }
      ...on Project {
        id
        slug
        title
        ${i.MW}
      }
    }
  }
  populatedDocsTotal
}
`},31774:(e,t,s)=>{"use strict";s.d(t,{$:()=>r,k:()=>i});var l=s(95599);let r="",i=`
favoritePlaces {
    title
    address
    description
    ${l.k4}
}`},45603:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});let l=({disableAppearance:e,disableLabel:t}={})=>`{
  ${t?"":"label"}
  ${e?"":"appearance"}
  type
  newTab
  url
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`},3685:(e,t,s)=>{"use strict";s.d(t,{Le:()=>o,RH:()=>a});var l=s(1981),r=s(95599),i=s(1838);let a=`
  query Listings {
    Listings(limit: 300) {
      docs {
        slug
      }
    }
  }
`,o=`
query Listings($slug: String) {
    Listings(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        slug
        title
        streetAddress
        zipCode
        city
        latitude
        longitude
        propertyType
        sqFt
        neighborhood
        sqFtLand
        bathroomCount
        bedCount
        price
        yearBuilt
        overview
        areaOverview
        tenancyType
        occupancy
        zoningType
        ${i.Se}
        ${r.$e}
        imageGallery {
          id
          ${r.k4}
        }
        layout {
          ${l.P8}
          ${l.kE}
          ${l.Xz}
          ${l.CS}
          ${l.e_}
          ${l.Iy}
        }
      }
    }
  }
`},95599:(e,t,s)=>{"use strict";s.d(t,{$e:()=>c,EJ:()=>o,db:()=>a,iD:()=>r,k4:()=>i,p3:()=>n});let l=`
mimeType
filename
width
height
alt
caption
`,r=`media {
  ${l}
}`,i=`image {
  ${l}
}`,a=`backupImage {
  ${l}
}`,o=`bgImage {
  ${l}
}`,n=`profilePic {
  ${l}
}`,c=`coverImage {
  ${l}
}
`},7950:(e,t,s)=>{"use strict";s.d(t,{MW:()=>r});let l=`
mimeType
filename
width
height
alt
caption
`,r=`meta {
  title
  image {
    ${l}
  }
  description
}`},90488:(e,t,s)=>{"use strict";s.d(t,{E:()=>n,q:()=>o});var l=s(1981),r=s(45603),i=s(95599),a=s(7950);let o=`
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`,n=`
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          richText
          headerText
          ${i.db}
          links {
            link ${(0,r.A)()}
          }
          ${i.iD}
        }
        layout {
          ${l.P8}
          ${l.hS}
          ${l.P8}
          ${l.kE}
          ${l.Xz}
          ${l.Iy}
          ${l.e_}
          ${l.mQ}
          ${l.CS}
          ${l.HZ}
        }
        ${a.MW}
      }
    }
  }
`},55648:(e,t,s)=>{"use strict";s.d(t,{a4:()=>n,vA:()=>o});var l=s(1981),r=s(45603),i=s(95599),a=s(7950);let o=`
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
      }
    }
  }
`,n=`
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        createdAt
        publishedAt
        populatedAuthors {
          id
          name
        }
        hero {
          type
          richText
          links {
            link ${(0,r.A)()}
          }
          ${i.iD}
        }
        layout {
          ${l.P8}
          ${l.hS}
          ${l.P8}
          ${l.kE}
          ${l.Iy}
        }
        enablePremiumContent
        relatedPosts {
          id
          slug
          title
          ${a.MW}
        }
        ${a.MW}
      }
    }
  }
`},23674:(e,t,s)=>{"use strict";s.d(t,{F:()=>a,y:()=>o});var l=s(1981),r=s(95599),i=s(7950);let a=`
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
`,o=`
  query Project($slug: String, $draft: Boolean) {
    Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        createdAt
        price
        address
        neighborhood
        latitude
        longitude
        website
        instagram
        slider {
          id
          title
          caption
          ${r.k4}
        }
        layout {
          ${l.P8}
          ${l.hS}
          ${l.P8}
          ${l.kE}
          ${l.Xz}
          ${l.e_}
          ${l.Iy}
        }
        ${i.MW}
      }
    }
  }
`},3678:(e,t,s)=>{"use strict";s.d(t,{A:()=>o,F:()=>n});var l=s(1981),r=s(45603),i=s(95599),a=s(7950);let o=`
  query Services {
    Services(limit: 300) {
      docs {
        slug
      }
    }
  }
`,n=`
query Services($slug: String) {
    Services(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        slug
        title
        shortDescription
        hero {
          type
          richText
          headerText
          links {
            link ${(0,r.A)()}
          }
          ${i.iD}
        }
        layout {
          ${l.P8}
          ${l.hS}
          ${l.P8}
          ${l.kE}
          ${l.Xz}
          ${l.Iy}
          ${l.e_}
          ${l.mQ}
          ${l.CS}
        }
        ${a.MW}
      }
    }
  }
`},1838:(e,t,s)=>{"use strict";s.d(t,{Se:()=>o,m_:()=>a,s_:()=>i});var l=s(31774),r=s(95599);let i=`
  query Teammates {
    Teammates(limit: 300) {
      docs {
        slug
      }
    }
  }
`,a=`
query Teammates($slug: String) {
    Teammates(where: { slug: { equals: $slug }}, limit: 1) {
      docs {
        id
        title
        bio
        profileIntroduction
        ${l.k}
        phoneNumber
        instagram
        Facebook
        Linkedin
        email
        ${r.p3}
        strengths
        yearsOfExperience
      }
    }
  }
`,o=`
agents {
  title
  ${r.p3}
  phoneNumber
  email
}
`},839:(e,t,s)=>{"use strict";s.d(t,{GA:()=>o,a7:()=>i,vU:()=>r,xi:()=>a});var l=s(62208);let r=async e=>{let{doc:t}=e||{},s="object"==typeof t?.meta?.image&&t?.meta?.image!==null&&"url"in t?.meta?.image&&`http://localhost:3000${t.meta.image.url}`;return{title:t?.meta?.title||"Payload",description:t?.meta?.description,openGraph:(0,l.T)({title:t?.meta?.title||"Payload",description:t?.meta?.description,url:Array.isArray(t?.slug)?t?.slug.join("/"):"/",images:s?[{url:s}]:void 0})}},i=async e=>{let{doc:t}=e||{};return{title:t?.title,description:t?.bio}},a=async e=>{let{doc:t}=e||{};return{title:`${t?.title} | ${t?.address}`,description:`Learn more about ${t?.address}`}},o=async e=>{let{doc:t}=e||{};return{title:`${t?.title}`,description:`Learn more about ${t?.title}`}}},13101:(e,t,s)=>{"use strict";s.d(t,{b:()=>o});var l=s(17536);let r=(0,l.createProxy)(String.raw`C:\Users\liamk\Desktop\LKY\WW-Group\TeamWebsite\ww-group-real\src\app\customComponents\GoogleMap\GoogleMap.tsx`),{__esModule:i,$$typeof:a}=r;r.default;let o=r.GoogleMap}};
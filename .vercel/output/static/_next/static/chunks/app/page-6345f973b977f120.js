(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2898:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(2265),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(e,t)=>{let l=(0,n.forwardRef)(({color:l="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:u="",children:o,...d},m)=>(0,n.createElement)("svg",{ref:m,...i,width:a,height:a,stroke:l,strokeWidth:c?24*Number(s)/Number(a):s,className:["lucide",`lucide-${r(e)}`,u].join(" "),...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(o)?o:[o]]));return l.displayName=`${e}`,l}},1807:function(e,t,l){Promise.resolve().then(l.t.bind(l,5250,23)),Promise.resolve().then(l.bind(l,7285))},7447:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{unstable_getImgProps:function(){return c},default:function(){return u}});let n=l(1024),i=l(8630),r=l(6184),a=l(1749),s=n._(l(536)),c=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},u=a.Image},2584:function(e,t,l){"use strict";l.r(t);var n=l(7437),i=l(8278),r=l(6691),a=l.n(r);l(6978),l(501);var s=l(2265),c=l(7062),u=l(2169),o=l(7158),d=l(1291);t.default=e=>{var t;let{urls:l}=e,[r,m]=(0,s.useState)(null),[f,g]=(0,s.useState)(0),[x,h]=(0,s.useState)({isBeginning:!0,isEnd:f===(null!==(t=l.length)&&void 0!==t?t:0)-1});(0,s.useEffect)(()=>{null==r||r.on("slideChange",e=>{var t;let{activeIndex:n}=e;g(n),h({isBeginning:0===n,isEnd:n===(null!==(t=l.length)&&void 0!==t?t:0)-1})})},[r,l]);let p="active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300 ",v="hidden text-gray-400";return(0,n.jsx)("div",{className:"group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl",children:(0,n.jsxs)("div",{className:"absolute z-10 inset-0 opacity-100 group-hover:opacity-100 transition",children:[(0,n.jsxs)("button",{onClick:e=>{e.preventDefault(),null==r||r.slideNext()},className:(0,u.cn)(p,"right-3 transition",{[v]:x.isEnd,"hover:bg-primary-300 text-primary-800 opacity-100":!x.isEnd}),"aria-label":"next-image",children:[(0,n.jsx)(o.Z,{className:"h-4 w-4 text-zinc-700"})," "]}),(0,n.jsxs)("button",{onClick:e=>{e.preventDefault(),null==r||r.slidePrev()},className:(0,u.cn)(p,"left-3 transition",{[v]:x.isBeginning,"hover:bg-primary-300 text-primary-800 opacity-100":!x.isBeginning}),"aria-label":"next-image",children:[(0,n.jsx)(d.Z,{className:"h-4 w-4 text-zinc-700"})," "]}),(0,n.jsx)(i.tq,{pagination:{renderBullet:(e,t)=>'<span class="rounded-full transition '.concat(t,'"></span>')},onSwiper:e=>m(e),spaceBetween:50,modules:[c.tl],slidesPerView:1,className:"h-full w-full",children:l.map((e,t)=>(0,n.jsx)(i.o5,{className:"-z-10 relative h-full w-full",children:(0,n.jsx)(a(),{fill:!0,loading:"eager",className:"-z-10 h-full w-full object-cover object-center",src:e,alt:"Product image"})},t))})]})})}},7285:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return g}});var n=l(7437),i=l(2662),r=l(1396),a=l.n(r),s=l(2265),c=l(2169);function u(e){let{className:t,...l}=e;return(0,n.jsx)("div",{className:(0,c.cn)("animate-pulse rounded-md bg-muted",t),...l})}var o=l(1413),d=l(2584);let m=()=>(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)("div",{className:"relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl",children:(0,n.jsx)(u,{className:"h-full w-full"})}),(0,n.jsx)(u,{className:"mt-4 w-2/3 h-4 rounded-lg"}),(0,n.jsx)(u,{className:"mt-2 w-16 h-4 rounded-lg"}),(0,n.jsx)(u,{className:"mt-2 w-12 h-4 rounded-lg"})]});var f=e=>{var t;let{product:l,index:i}=e,[r,u]=(0,s.useState)(!1);if((0,s.useEffect)(()=>{setTimeout(()=>{u(!0)},75*i)},[i]),!l||!r)return(0,n.jsx)(m,{});let f=null===(t=o.P.find(e=>{let{value:t}=e;return t===l.category}))||void 0===t?void 0:t.label,g=l.images.map(e=>"string"==typeof e.image?e.image:e.image.url).filter(Boolean);if(r&&l)return(0,n.jsx)(a(),{className:(0,c.cn)("invisible h-full w-full cursor-pointer group/main",{"visible animate-in fade-in-5":r}),href:"/product/".concat(l.id),children:(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)(d.default,{urls:g}),(0,n.jsx)("h3",{className:"mt-4 font-medium text-sm text-gray-700",children:l.name}),(0,n.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:f}),(0,n.jsx)("p",{className:"mt-1 font-medium text-gray-900",children:(0,c.T)(l.price)})]})})},g=e=>{var t,l,r;let{title:s,subtitle:c,href:u,query:o}=e,{data:d,isLoading:m}=i.S.getInfiniteProducts.useInfiniteQuery({limit:null!==(t=o.limit)&&void 0!==t?t:4,query:o},{getNextPageParam:e=>e.nextPage}),g=null==d?void 0:d.pages.flatMap(e=>e.items),x=Array(null!==(l=o.limit)&&void 0!==l?l:4).fill(null);return g&&g.length?x=g:m&&(x=Array(null!==(r=o.limit)&&void 0!==r?r:4).fill(null)),(0,n.jsx)("section",{className:"py-12",children:(0,n.jsxs)("div",{className:"md:flex md:flex-col md:items-center md:justify-between mb-4",children:[(0,n.jsxs)("div",{className:"max-w-2xl px-4 lg:max-w-4xl lg:px-0",children:[s?(0,n.jsx)("h1",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:s}):null,c?(0,n.jsx)("h1",{className:"mt-2 text-sm text-muted-foreground",children:c}):null,u?(0,n.jsxs)(a(),{href:u,className:"hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block",children:["Shop the collection"," ",(0,n.jsx)("span",{"aria-hidden":"true",children:"→"})]}):null]}),(0,n.jsx)("div",{className:"relative md:w-full",children:(0,n.jsx)("div",{className:"mt-6 flex items-center w-full",children:(0,n.jsx)("div",{className:"w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8 ",children:x.map((e,t)=>(0,n.jsx)(f,{product:e,index:t},t))})})})]})})}},1413:function(e,t,l){"use strict";l.d(t,{P:function(){return n}});let n=[{label:"UI Kits",value:"ui_kits",featured:[{name:"Editor picks",href:"#",imageScr:"/nav/ui-kits/mixed.jpg"},{name:"New Arrivals",href:"#",imageScr:"/nav/ui-kits/blue.jpg"},{name:"Bestsellers",href:"#",imageScr:"/nav/ui-kits/purple.jpg"}]},{label:"Icons",value:"icons",featured:[{name:"Favorite Icon picks",href:"#",imageScr:"/nav/icons/picks.jpg"},{name:"New Arrivals",href:"#",imageScr:"/nav/icons/new.jpg"},{name:"Bestsellers",href:"#",imageScr:"/nav/icons/bestsellers.jpg"}]}]},2169:function(e,t,l){"use strict";l.d(t,{T:function(){return a},cn:function(){return r}});var n=l(7042),i=l(4769);function r(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,i.m6)((0,n.W)(t))}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currency:l="USD",notation:n="compact"}=t,i="string"==typeof e?parseFloat(e):e;return new Intl.NumberFormat("en-US",{style:"currency",currency:l,notation:n,maximumFractionDigits:2}).format(i)}},2662:function(e,t,l){"use strict";l.d(t,{S:function(){return n}});let n=(0,l(2312).ec)({})},6691:function(e,t,l){e.exports=l(7447)}},function(e){e.O(0,[613,939,749,89,971,938,744],function(){return e(e.s=1807)}),_N_E=e.O()}]);
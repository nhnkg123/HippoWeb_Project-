(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{2898:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2265),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),o=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:u="",children:c,...d},f)=>(0,r.createElement)("svg",{ref:f,...i,width:o,height:o,stroke:n,strokeWidth:a?24*Number(s)/Number(o):s,className:["lucide",`lucide-${l(e)}`,u].join(" "),...d},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n}},6264:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},3284:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.bind(n,8840))},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return a},default:function(){return u}});let r=n(1024),i=n(8630),l=n(6184),o=n(1749),s=r._(n(536)),a=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=o.Image},8840:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),i=n(2662);/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(2898).Z)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var o=n(6264),s=n(6691),a=n.n(s),u=n(575),c=n(1396),d=n.n(c),f=e=>{let{token:t}=e,{data:n,isLoading:s,isError:c}=i.S.auth.verifyEmail.useQuery({token:t});return c?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)(l,{className:"h-8 w-8 text-red-600"}),(0,r.jsx)("h3",{className:"font-semibold text-xl",children:"There was a problem"}),(0,r.jsx)("p",{className:"text-muted-foreground text-sm",children:"This token is not valid of might be expired. Please try again."})]}):(null==n?void 0:n.success)?(0,r.jsxs)("div",{className:"flex h-full flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"relative mb-4 h-60 w-60 text-muted-foreground",children:(0,r.jsx)(a(),{src:"/hippo-email-sent.png",fill:!0,alt:"the email was sent"})}),(0,r.jsx)("h3",{className:"font-semibold text-2xl",children:"You're all set"}),(0,r.jsx)("p",{className:"text-muted-foreground text-center mt-1",children:"Thank you for verifying your email"}),(0,r.jsx)(d(),{className:(0,u.d)({className:"mt-4"}),href:"/sign-in",children:"Sign in"})]}):s?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)(o.Z,{className:"animate-spin h-8 w-8 text-zinc-300"}),(0,r.jsx)("h3",{className:"font-semibold text-xl",children:"Verifying..."}),(0,r.jsx)("p",{className:"text-muted-foreground text-sm",children:"This won't take long."})]}):void 0}},575:function(e,t,n){"use strict";n.d(t,{d:function(){return a},z:function(){return u}});var r=n(7437),i=n(2265),l=n(7256),o=n(6061),s=n(2169);let a=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:n,variant:i,size:o,asChild:u=!1,...c}=e,d=u?l.g7:"button";return(0,r.jsx)(d,{className:(0,s.cn)(a({variant:i,size:o,className:n})),ref:t,...c})});u.displayName="Button"},2169:function(e,t,n){"use strict";n.d(t,{T:function(){return o},cn:function(){return l}});var r=n(7042),i=n(4769);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currency:n="USD",notation:r="compact"}=t,i="string"==typeof e?parseFloat(e):e;return new Intl.NumberFormat("en-US",{style:"currency",currency:n,notation:r,maximumFractionDigits:2}).format(i)}},2662:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});let r=(0,n(2312).ec)({})},6691:function(e,t,n){e.exports=n(7447)},3428:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},2210:function(e,t,n){"use strict";n.d(t,{F:function(){return i},e:function(){return l}});var r=n(2265);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,r.useCallback)(i(...e),e)}},7256:function(e,t,n){"use strict";n.d(t,{g7:function(){return o}});var r=n(3428),i=n(2265),l=n(2210);let o=(0,i.forwardRef)((e,t)=>{let{children:n,...l}=e,o=i.Children.toArray(n),a=o.find(u);if(a){let e=a.props.children,n=o.map(t=>t!==a?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(s,(0,r.Z)({},l,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)(s,(0,r.Z)({},l,{ref:t}),n)});o.displayName="Slot";let s=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],l=t[r];/^on[A-Z]/.test(r)?i&&l?n[r]=(...e)=>{l(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...l}:"className"===r&&(n[r]=[i,l].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,l.F)(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});s.displayName="SlotClone";let a=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function u(e){return(0,i.isValidElement)(e)&&e.type===a}},6061:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var r=n(7042);let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=r.W,o=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==s?void 0:s[e];if(null===t)return null;let l=i(t)||i(r);return o[e][l]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return l(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...s,...u}[t]):({...s,...u})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[613,939,749,971,938,744],function(){return e(e.s=3284)}),_N_E=e.O()}]);
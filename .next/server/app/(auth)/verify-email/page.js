(()=>{var e={};e.id=552,e.ids=[552],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2905:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(482),i=s(9108),a=s(2563),n=s.n(a),l=s(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["(auth)",{children:["verify-email",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9800)),"F:\\FILE KHTN\\DIGITAL_HIPPO_PROJECT\\digitalhippo\\src\\app\\(auth)\\verify-email\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,9924)),"F:\\FILE KHTN\\DIGITAL_HIPPO_PROJECT\\digitalhippo\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["F:\\FILE KHTN\\DIGITAL_HIPPO_PROJECT\\digitalhippo\\src\\app\\(auth)\\verify-email\\page.tsx"],m="/(auth)/verify-email/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(auth)/verify-email/page",pathname:"/verify-email",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1912:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.bind(s,9290))},2739:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s(9224).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},9290:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var r=s(2295),i=s(2362);/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(9224).Z)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);var n=s(2739),l=s(1223),o=s.n(l),c=s(5094),d=s(783),m=s.n(d);let x=({token:e})=>{let{data:t,isLoading:s,isError:l}=i.S.auth.verifyEmail.useQuery({token:e});return l?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[r.jsx(a,{className:"h-8 w-8 text-red-600"}),r.jsx("h3",{className:"font-semibold text-xl",children:"There was a problem"}),r.jsx("p",{className:"text-muted-foreground text-sm",children:"This token is not valid of might be expired. Please try again."})]}):t?.success?(0,r.jsxs)("div",{className:"flex h-full flex-col items-center justify-center",children:[r.jsx("div",{className:"relative mb-4 h-60 w-60 text-muted-foreground",children:r.jsx(o(),{src:"/hippo-email-sent.png",fill:!0,alt:"the email was sent"})}),r.jsx("h3",{className:"font-semibold text-2xl",children:"You're all set"}),r.jsx("p",{className:"text-muted-foreground text-center mt-1",children:"Thank you for verifying your email"}),r.jsx(m(),{className:(0,c.d)({className:"mt-4"}),href:"/sign-in",children:"Sign in"})]}):s?(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[r.jsx(n.Z,{className:"animate-spin h-8 w-8 text-zinc-300"}),r.jsx("h3",{className:"font-semibold text-xl",children:"Verifying..."}),r.jsx("p",{className:"text-muted-foreground text-sm",children:"This won't take long."})]}):void 0}},9800:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(5036);let i=(0,s(6843).createProxy)(String.raw`F:\FILE KHTN\DIGITAL_HIPPO_PROJECT\digitalhippo\src\components\VerifyEmail.tsx`),{__esModule:a,$$typeof:n}=i,l=i.default;var o=s(5614),c=s.n(o);let d=({searchParams:e})=>{let t=e.token,s=e.to;return r.jsx("div",{className:"container relative flex pt-20 flex-col items-center justify-center lg:px-0",children:r.jsx("div",{className:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]",children:t&&"string"==typeof t?r.jsx("div",{className:"grid gap-6",children:r.jsx(l,{token:t})}):(0,r.jsxs)("div",{className:"flex h-full flex-col items-center justify-center space-y-1",children:[r.jsx("div",{className:"relative mb-4 h-60 w-60 text-muted-foreground",children:r.jsx(c(),{src:"/hippo-email-sent.png",fill:!0,alt:"hippo emil sent image"})}),r.jsx("h3",{className:"font-semibold text-2xl",children:"Check your email"}),s?(0,r.jsxs)("p",{className:"text-muted-foreground text-center",children:["We've sent a verification link to ",r.jsx("span",{className:"font-semibold",children:s}),"."]}):r.jsx("p",{className:"text-muted-foreground text-center",children:"We've sent a verification link to your email."})]})})})}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,43,337,904,631],()=>s(2905));module.exports=r})();
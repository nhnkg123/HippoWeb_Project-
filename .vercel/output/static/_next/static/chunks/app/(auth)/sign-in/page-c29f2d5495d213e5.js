(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[389],{7730:function(e,a,r){Promise.resolve().then(r.bind(r,2667))},2667:function(e,a,r){"use strict";r.r(a);var s=r(7437),i=r(5414),t=r(575),n=r(2782),l=r(2169),c=r(6743),o=r(1396),d=r.n(o),u=r(1865),f=r(8110),p=r(4045),x=r(2662),g=r(1424),m=r(4033);a.default=()=>{let e=(0,m.useSearchParams)(),a=(0,m.useRouter)(),r="seller"===e.get("as"),o=e.get("origin"),{register:h,handleSubmit:v,formState:{errors:b}}=(0,u.cI)({resolver:(0,f.F)(p.H)}),{mutate:y,isLoading:j}=x.S.auth.signIn.useMutation({onSuccess:()=>{g.toast.success("Signed in successfully"),a.refresh(),o&&a.push("/".concat(o)),r&&a.push("/sell"),a.push("/")},onError:e=>{var a;(null===(a=e.data)||void 0===a?void 0:a.code)==="UNAUTHORIZED"&&g.toast.error("Invalid email or password")}});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"container relative flex-col items-center justify-center lg:px-0",children:(0,s.jsxs)("div",{className:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center space-y-2 text-center",children:[(0,s.jsx)(i.P.logo,{className:"h-20 w-20"}),(0,s.jsxs)("h1",{className:"text-2xl font-bold",children:["Sign in to your ",r?"seller":""," ","account"]}),(0,s.jsx)(d(),{className:(0,t.d)({variant:"link",className:"gap-1.5"}),href:"/sign-up",children:"Don't have an account"})]}),(0,s.jsxs)("div",{className:"grid gap-6",children:[(0,s.jsx)("form",{onSubmit:v(e=>{let{email:a,password:r}=e;y({email:a,password:r})}),children:(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsxs)("div",{className:"grid gap-1 py-2",children:[(0,s.jsx)(c._,{htmlFor:"email",children:"Email"}),(0,s.jsx)(n.I,{...h("email"),className:(0,l.cn)({"focus-visible:ring-red-500":b.email}),placeholder:"you@example.com"}),(null==b?void 0:b.email)&&(0,s.jsx)("p",{className:"text-sm text-red-500",children:b.email.message})]}),(0,s.jsxs)("div",{className:"grid gap-1 py-2",children:[(0,s.jsx)(c._,{htmlFor:"email",children:"Password"}),(0,s.jsx)(n.I,{...h("password"),type:"password",className:(0,l.cn)({"focus-visible:ring-red-500":b.password}),placeholder:"Password"}),(null==b?void 0:b.password)&&(0,s.jsx)("p",{className:"text-sm text-red-500",children:b.password.message})]}),(0,s.jsx)(t.z,{children:"Sign in"})]})}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{"aria-hidden":"true",className:"absolute inset-0 flex items-center",children:(0,s.jsx)("span",{className:"w-full border-t"})}),(0,s.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,s.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:"or"})})]}),r?(0,s.jsx)(t.z,{onClick:()=>{a.replace("/sign-in",void 0)},variant:"secondary",disabled:j,children:"Countinue as customer"}):(0,s.jsx)(t.z,{onClick:()=>{a.push("?as=seller")},variant:"secondary",disabled:j,children:"Countinue as seller"})]})]})})})}},5414:function(e,a,r){"use strict";r.d(a,{P:function(){return i}});var s=r(7437);let i={logo:e=>(0,s.jsx)("svg",{...e,viewBox:"0 0 512 512",children:(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{d:"M105.67 56.012c24.601 24.601 41.244 81.13 16.643 105.731s-81.13 7.958-105.731-16.643-20.623-60.509 3.978-85.11 60.509-28.579 85.11-3.978z",fill:"#60a5fa","data-original":"#abdfeb",opacity:"1"}),(0,s.jsx)("path",{d:"M111.097 169.375c-9.754-53.933-61.535-93.098-102.131-94.531-13.495 22.793-12.381 50.26 7.615 70.256 21.368 21.367 66.817 36.724 94.516 24.275z",fill:"#558ce7","data-original":"#8bcdd8",opacity:"1"}),(0,s.jsx)("path",{d:"M406.33 56.012c-24.601 24.601-41.244 81.13-16.643 105.731s81.13 7.958 105.731-16.643 20.623-60.509-3.978-85.11-60.509-28.579-85.11-3.978z",fill:"#60a5fa","data-original":"#abdfeb",opacity:"1"}),(0,s.jsx)("path",{d:"M400.903 169.375c9.754-53.933 61.535-93.098 102.13-94.531 13.495 22.793 12.381 50.26-7.615 70.256-21.367 21.367-66.816 36.724-94.515 24.275z",fill:"#558ce7","data-original":"#8bcdd8",opacity:"1"}),(0,s.jsx)("ellipse",{cx:"256",cy:"244.04",rx:"196.34",ry:"186.42",fill:"#60a5fa","data-original":"#abdfeb",opacity:"1"}),(0,s.jsx)("path",{d:"M165.588 196.685a7.5 7.5 0 0 1-7.5-7.5v-15.008a7.5 7.5 0 0 1 15 0v15.008a7.5 7.5 0 0 1-7.5 7.5zM346.412 196.685a7.5 7.5 0 0 1-7.5-7.5v-15.008a7.5 7.5 0 0 1 15 0v15.008a7.5 7.5 0 0 1-7.5 7.5z",fill:"#222222","data-original":"#464d59",opacity:"1"}),(0,s.jsx)("path",{d:"M212.03 62.322c-87.266 18.957-152.372 93.12-152.372 181.723 0 102.957 87.905 186.42 196.342 186.42 19.952 0 39.204-2.835 57.346-8.087C85.074 329.977 119.169 118.281 212.03 62.322z",fill:"#558ce7","data-original":"#8bcdd8",opacity:"1"}),(0,s.jsx)("path",{d:"M409.201 247.067c-3.993-1.525-7.205-4.522-9.287-8.256-7.292-13.082-21.262-21.931-37.303-21.931a42.466 42.466 0 0 0-25.912 8.775c-2.706 2.072-6.138 2.964-9.522 2.563-22.448-2.662-46.36-3.941-71.178-3.941-24.818 0-48.73 1.279-71.178 3.941-3.384.401-6.816-.491-9.522-2.563a42.466 42.466 0 0 0-25.912-8.775c-16.04 0-30.01 8.85-37.303 21.931-2.081 3.734-5.293 6.731-9.287 8.256-49.69 18.976-81.141 50.52-81.141 97.301 0 85.459 104.919 128.202 234.342 128.202S490.34 429.827 490.34 344.368c.002-46.782-31.448-78.325-81.139-97.301z",fill:"#87befb","data-original":"#b9e8ef",opacity:"1"}),(0,s.jsx)("path",{d:"M256 383.302a44.19 44.19 0 0 1-33.317-15.175 7.5 7.5 0 0 1 11.309-9.855 29.192 29.192 0 0 0 22.009 10.03 29.195 29.195 0 0 0 22.009-10.03 7.501 7.501 0 0 1 11.309 9.855A44.197 44.197 0 0 1 256 383.302z",fill:"#222222","data-original":"#464d59",opacity:"1"}),(0,s.jsx)("circle",{cx:"149.39",cy:"259.56",r:"15.519",fill:"#558ce7","data-original":"#8bcdd8",opacity:"1"}),(0,s.jsx)("circle",{cx:"362.61",cy:"259.56",r:"15.519",fill:"#558ce7","data-original":"#8bcdd8",opacity:"1"}),(0,s.jsx)("path",{d:"M416.18 443.185c-246.851 43.269-311.115-113.303-300.169-158.197.615-2.522.695-5.142.379-7.719-2.455-20.031 5.053-45.274 18.266-57.764a42.819 42.819 0 0 0-22.705 19.548c-2.002 3.647-5.171 6.496-9.059 7.978-49.745 18.972-81.235 50.526-81.235 97.337 0 85.459 104.919 128.202 234.342 128.202 61.953 0 118.279-9.801 160.181-29.385z",fill:"#60a5fa","data-original":"#abdfeb",opacity:"1"})]})})}},575:function(e,a,r){"use strict";r.d(a,{d:function(){return c},z:function(){return o}});var s=r(7437),i=r(2265),t=r(7256),n=r(6061),l=r(2169);let c=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=i.forwardRef((e,a)=>{let{className:r,variant:i,size:n,asChild:o=!1,...d}=e,u=o?t.g7:"button";return(0,s.jsx)(u,{className:(0,l.cn)(c({variant:i,size:n,className:r})),ref:a,...d})});o.displayName="Button"},2782:function(e,a,r){"use strict";r.d(a,{I:function(){return n}});var s=r(7437),i=r(2265),t=r(2169);let n=i.forwardRef((e,a)=>{let{className:r,type:i,...n}=e;return(0,s.jsx)("input",{type:i,className:(0,t.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:a,...n})});n.displayName="Input"},2169:function(e,a,r){"use strict";r.d(a,{T:function(){return n},cn:function(){return t}});var s=r(7042),i=r(4769);function t(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,i.m6)((0,s.W)(a))}function n(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currency:r="USD",notation:s="compact"}=a,i="string"==typeof e?parseFloat(e):e;return new Intl.NumberFormat("en-US",{style:"currency",currency:r,notation:s,maximumFractionDigits:2}).format(i)}},4045:function(e,a,r){"use strict";r.d(a,{H:function(){return i}});var s=r(4578);let i=s.z.object({email:s.z.string().email(),password:s.z.string().min(8,{message:"Password must be at least 8 characters long."})})},2662:function(e,a,r){"use strict";r.d(a,{S:function(){return s}});let s=(0,r(2312).ec)({})}},function(e){e.O(0,[613,939,802,233,971,938,744],function(){return e(e.s=7730)}),_N_E=e.O()}]);
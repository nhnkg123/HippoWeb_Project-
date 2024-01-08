(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{6264:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(2898).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},2549:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(2898).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},8513:function(e,t,r){Promise.resolve().then(r.bind(r,9504))},9504:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7437),s=r(575),l=r(1413),i=r(733),a=r(2169),c=r(2662),o=r(2549);/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,r(2898).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var u=r(6264),m=r(6691),f=r.n(m),x=r(1396),h=r.n(x),p=r(4033),g=r(2265),v=()=>{let{items:e,removeItem:t}=(0,i.j)(),r=(0,p.useRouter)(),{mutate:m,isLoading:x}=c.S.payment.createSession.useMutation({onSuccess:e=>{let{url:t}=e;t&&r.push(t)}}),v=e.map(e=>{let{product:t}=e;return t.id}),[j,y]=(0,g.useState)(!1);(0,g.useEffect)(()=>{y(!0)},[]);let b=e.reduce((e,t)=>{let{product:r}=t;return e+r.price},0);return(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsxs)("div",{className:"mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Shopping Cart"}),(0,n.jsxs)("div",{className:"mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16",children:[(0,n.jsxs)("div",{className:(0,a.cn)("lg:col-span-7",{"rounded-lg border-2 border-dashed border-zinc-200 p-12":j&&0===e.length}),children:[(0,n.jsx)("h2",{className:"sr-only",children:"Items in your shopping cart"}),j&&0===e.length?(0,n.jsxs)("div",{className:"flex h-full flex-col items-center justify-center space-y-1",children:[(0,n.jsx)("div",{"aria-hidden":"true",className:"relative mb-4 h-40 w-40 text-muted-foreground",children:(0,n.jsx)(f(),{src:"/hippo-empty-cart.png",fill:!0,loading:"eager",alt:"empty shopping cart hippo"})}),(0,n.jsx)("h3",{className:"font-semibold text-2xl",children:"Your cart is empty"}),(0,n.jsx)("p",{className:"text-muted-foreground text-center",children:"Whoops! Nothing to show here yet."})]}):null,(0,n.jsx)("ul",{className:(0,a.cn)({"divide-y devide-gray-200 border-b border-t border-gray-200":j&&e.length>0}),children:j&&e.map(e=>{var r;let{product:i}=e,c=null===(r=l.P.find(e=>e.value===i.category))||void 0===r?void 0:r.label,{image:u}=i.images[0];return(0,n.jsxs)("li",{className:"flex py-6 sm:py-10",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)("div",{className:"relative h-24 w-24",children:"string"!=typeof u&&u.url?(0,n.jsx)(f(),{src:u.url,fill:!0,alt:"product image",className:"h-full w-full rounded-md object-cover object-center sm:h-48 sm:w-48"}):null})}),(0,n.jsxs)("div",{className:"ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[(0,n.jsxs)("div",{className:"relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-between",children:(0,n.jsx)("h3",{className:"text-sm",children:(0,n.jsx)(h(),{href:"/product/".concat(i.id),className:"font-medium text-gray-700 hover:text-gray-800",children:i.name})})}),(0,n.jsx)("div",{className:"mt-1 flex text-sm",children:(0,n.jsxs)("p",{className:"text-muted-foreground",children:["Category: ",c]})}),(0,n.jsx)("p",{className:"mt-1 text-sm font-medium text-gray-900",children:(0,a.T)(i.price)})]}),(0,n.jsx)("div",{className:"mt-4 sm:mt-0 sm:pr-9 w-20",children:(0,n.jsx)("div",{className:"absolute right-0 top-0",children:(0,n.jsx)(s.z,{"aria-label":"remove product",onClick:()=>t(i.id),variant:"ghost",children:(0,n.jsx)(o.Z,{className:"h-5 w-5","aria-hidden":"true"})})})})]}),(0,n.jsxs)("p",{className:"mt-4 flex space-x-2 text-sm text-gray-700",children:[(0,n.jsx)(d,{className:"h-5 w-5 flex-shrink-0 text-green-500"}),(0,n.jsx)("span",{children:"Eligible for instant delivery"})]})]})]},i.id)})})]}),(0,n.jsxs)("section",{className:"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[(0,n.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Order summary"}),(0,n.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("p",{className:"text-sm text-gray-600",children:"Subtotal"}),(0,n.jsx)("p",{className:"text-sm font-medium text-gray-900",children:j?(0,a.T)(b):(0,n.jsx)(u.Z,{className:"h-4 w-4 animate-spin text-muted-foreground"})})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[(0,n.jsx)("div",{className:"flex items-center text-sm text-muted-foreground",children:(0,n.jsx)("span",{children:"Flat Transaction Fee"})}),(0,n.jsx)("div",{className:"text-sm font-medium text-gray-900",children:j?(0,a.T)(1):(0,n.jsx)(u.Z,{className:"h-4 w-4 animate-spin text-muted-foreground"})})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[(0,n.jsx)("div",{className:"text-base font-medium text-gray-900",children:"Order Total"}),(0,n.jsx)("div",{className:"text-base font-medium text-gray-900",children:j?(0,a.T)(b+1):(0,n.jsx)(u.Z,{className:"h-4 w-4 animate-spin text-muted-foreground"})})]})]}),(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)(s.z,{disabled:0===e.length||x,className:"w-full",size:"lg",onClick:()=>m({productIds:v}),children:[x?(0,n.jsx)(u.Z,{className:"w-4 h-4 animate-spin mr-1.5"}):null,"Checkout"]})})]})]})]})})}},575:function(e,t,r){"use strict";r.d(t,{d:function(){return c},z:function(){return o}});var n=r(7437),s=r(2265),l=r(7256),i=r(6061),a=r(2169);let c=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:o=!1,...d}=e,u=o?l.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(c({variant:s,size:i,className:r})),ref:t,...d})});o.displayName="Button"},1413:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=[{label:"UI Kits",value:"ui_kits",featured:[{name:"Editor picks",href:"#",imageScr:"/nav/ui-kits/mixed.jpg"},{name:"New Arrivals",href:"#",imageScr:"/nav/ui-kits/blue.jpg"},{name:"Bestsellers",href:"#",imageScr:"/nav/ui-kits/purple.jpg"}]},{label:"Icons",value:"icons",featured:[{name:"Favorite Icon picks",href:"#",imageScr:"/nav/icons/picks.jpg"},{name:"New Arrivals",href:"#",imageScr:"/nav/icons/new.jpg"},{name:"Bestsellers",href:"#",imageScr:"/nav/icons/bestsellers.jpg"}]}]},733:function(e,t,r){"use strict";r.d(t,{j:function(){return l}});var n=r(4660),s=r(4810);let l=(0,n.Ue)()((0,s.tJ)(e=>({items:[],addItem:t=>e(e=>({items:[...e.items,{product:t}]})),removeItem:t=>e(e=>({items:e.items.filter(e=>e.product.id!==t)})),clearCart:()=>e({items:[]})}),{name:"cart-storage",storage:(0,s.FL)(()=>localStorage)}))},2169:function(e,t,r){"use strict";r.d(t,{T:function(){return i},cn:function(){return l}});var n=r(7042),s=r(4769);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currency:r="USD",notation:n="compact"}=t,s="string"==typeof e?parseFloat(e):e;return new Intl.NumberFormat("en-US",{style:"currency",currency:r,notation:n,maximumFractionDigits:2}).format(s)}},2662:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});let n=(0,r(2312).ec)({})},4033:function(e,t,r){e.exports=r(5313)},3428:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},2210:function(e,t,r){"use strict";r.d(t,{F:function(){return s},e:function(){return l}});var n=r(2265);function s(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,n.useCallback)(s(...e),e)}},7256:function(e,t,r){"use strict";r.d(t,{g7:function(){return i}});var n=r(3428),s=r(2265),l=r(2210);let i=(0,s.forwardRef)((e,t)=>{let{children:r,...l}=e,i=s.Children.toArray(r),c=i.find(o);if(c){let e=c.props.children,r=i.map(t=>t!==c?t:s.Children.count(e)>1?s.Children.only(null):(0,s.isValidElement)(e)?e.props.children:null);return(0,s.createElement)(a,(0,n.Z)({},l,{ref:t}),(0,s.isValidElement)(e)?(0,s.cloneElement)(e,void 0,r):null)}return(0,s.createElement)(a,(0,n.Z)({},l,{ref:t}),r)});i.displayName="Slot";let a=(0,s.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,s.isValidElement)(r)?(0,s.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let s=e[n],l=t[n];/^on[A-Z]/.test(n)?s&&l?r[n]=(...e)=>{l(...e),s(...e)}:s&&(r[n]=s):"style"===n?r[n]={...s,...l}:"className"===n&&(r[n]=[s,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,l.F)(t,r.ref):r.ref}):s.Children.count(r)>1?s.Children.only(null):null});a.displayName="SlotClone";let c=({children:e})=>(0,s.createElement)(s.Fragment,null,e);function o(e){return(0,s.isValidElement)(e)&&e.type===c}},6061:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(7042);let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=n.W,i=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,c=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==a?void 0:a[e];if(null===t)return null;let l=s(t)||s(n);return i[e][l]}),o=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return l(e,c,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...o}[t]):({...a,...o})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[613,939,749,93,971,938,744],function(){return e(e.s=8513)}),_N_E=e.O()}]);
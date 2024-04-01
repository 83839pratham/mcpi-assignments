"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_register-app_ts"],{80810:(t,e,r)=>{r.d(e,{N:()=>n,x:()=>o});var a=r(71207);function n(t,e){o((t.getAttribute("aria-label")||t.innerText||"").trim(),e)}function o(t,e){let{assertive:r}=e??{};!function(t,e){let r=a.n4?.querySelector(e?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");r&&(r.textContent===t?r.textContent=`${t}\u00A0`:r.textContent=t)}(t,r)}},79600:(t,e,r)=>{r.d(e,{T:()=>o});var a=r(80810),n=r(71207);function o(t){if(!n.n4)return;let e=n.n4.querySelector("title"),r=n.n4.createElement("title");r.textContent=t,e?e.textContent!==t&&(e.replaceWith(r),(0,a.x)(t)):(n.n4.head.appendChild(r),(0,a.x)(t))}},79697:(t,e,r)=>{let a;r.d(e,{YT:()=>h,qP:()=>p,yM:()=>f});var n=r(88149),o=r(86058),i=r(56363),s=r(43786);let{getItem:l}=(0,i.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let t=(0,n.n)("octolytics");delete t.baseContext,a=new o.R(t)}catch(t){}function d(t){let e=(0,n.n)("octolytics").baseContext||{};if(e)for(let[t,r]of(delete e.app_id,delete e.event_url,delete e.host,Object.entries(e)))t.startsWith(c)&&(e[t.replace(c,"")]=r,delete e[t]);let r=document.querySelector("meta[name=visitor-payload]");if(r){let t=JSON.parse(atob(r.content));Object.assign(e,t)}let a=new URLSearchParams(window.location.search);for(let[t,r]of a)u.includes(t.toLowerCase())&&(e[t]=r);return e.staff=(0,s.B)().toString(),Object.assign(e,t)}function h(t){a?.sendPageView(d(t))}function p(t,e={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=r?{service:r}:{};for(let[t,r]of Object.entries(e))null!=r&&(n[t]=`${r}`);if(a){let e=t||"unknown";d(n),a.sendEvent(e,d(n))}}function f(t){return Object.fromEntries(Object.entries(t).map(([t,e])=>[t,JSON.stringify(e)]))}},69788:(t,e,r)=>{var a;r.d(e,{x:()=>a}),function(t){t.FETCH_THEN_TRANSITION="fetch-then-transition",t.TRANSITION_WHILE_FETCHING="transition-while-fetch",t.TRANSITION_WITHOUT_FETCH="transition-without-fetch"}(a||(a={}))},83206:(t,e,r)=>{r.d(e,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(t,e){let r=this.registrationEntries[t];r?r.resolve?.(e):this.registrationEntries[t]={promise:Promise.resolve(e)}}getRegistration(t){var e;return(e=this.registrationEntries)[t]||(e[t]=new a),this.registrationEntries[t].promise}constructor(){this.registrationEntries={}}};let a=class Deferred{constructor(){this.promise=new Promise(t=>{this.resolve=t})}}},42439:(t,e,r)=>{r.d(e,{X:()=>o});var a=r(18515),n=r(67294);function o(t){return(0,a.c)("react_start_transition_for_navigations")?(0,n.startTransition)(t):t()}},96810:(t,e,r)=>{r.d(e,{g:()=>U});var a=r(83206);let n=new a.e;async function o(t){let e=await n.getRegistration(t);return e()}var i=r(85893),s=r(76006),l=r(12599),c=r(67294),u=r(69788),d=r(79600);let h=(t,e)=>null!==t&&null!==e&&t.pathname===e.pathname&&t.search===e.search&&!!e.hash,p=t=>{let e=404===t.httpStatus?"404 Page not found":500===t.httpStatus?"500 Internal server error":t.httpStatus?`Error ${t.httpStatus}`:"Error";return f(e)};function f(t){return document.body.classList.contains("logged-out")?`${t} \xb7 GitHub`:t}var v=r(71207),m=r(10394),E=r(42439);let g=class Navigator{setAppNavigationStateCallback(t){this.appNavigationStateCallback=t}update(t){Object.assign(this.state,t);let e=this.getAppNavigationState();this.appNavigationStateCallback?.(e)}getAppNavigationState(){let{location:t,error:e,navigateOnError:r,routeStateMap:a,appPayload:n,pendingNavigation:o}=this.state;return{location:t,error:e,navigateOnError:r,routeStateMap:a,appPayload:n,isLoading:!!o}}async handleHistoryUpdate(t){if("POP"!==t.action||history.state?.turboCount===this.state.turboCount){if(this.isHashNavigation(t)){this.navigateWithCurrentPayload(t);return}if("POP"!==t.action&&(0,m.LD)("react"),void 0!==this.state.routeStateMap[t.location.key])this.navigateFromHistory(t);else{let e=this.matchLocation(t.location);if(!e)throw Error("handleHistoryUpdate should only be called for matching routes");let[r,a]=e;if(a?.transitionType===u.x.TRANSITION_WHILE_FETCHING&&this.navigateWithoutPayload(t),a?.transitionType===u.x.TRANSITION_WITHOUT_FETCH){this.navigateWithoutPayload(t);return}this.enterLoadingState(t);let n=await a?.coreLoader({location:t.location,pathParams:r.params});if(t.location!==this.state.pendingNavigation?.update.location)return;if(history.state&&"POP"!==t.action){let{turbo:t,...e}=history.state;history.replaceState({...e,skipTurbo:!0},"",location.href)}switch(n.type){case"loaded":this.leaveLoadingStateWithRouteData(t,n.data,n.title);break;case"error":this.leaveLoadingStateWithError(t,n.error,!1);break;case"redirect":window.location.replace(n.url+location.hash);break;case"route-handled-error":this.leaveLoadingStateWithError(t,n.error,!0);break;default:throw Error(`Unexpected loader result type: ${n.type}`)}}}}matchLocation(t){let e,r;for(let a of this.routes)if(e=(0,l.LX)(a.path,t.pathname)){r=a;break}return e&&r?[e,r]:null}isHashNavigation(t){let e=this.state.location,r=t.location;return h(e,r)}navigateFromHistory(t){this.update({location:t.location,pendingNavigation:null,error:null})}enterLoadingState(t){this.update({pendingNavigation:{update:t}})}leaveLoadingStateWithError(t,e,r){this.update({location:t.location,error:e,pendingNavigation:null,navigateOnError:r})}navigateWithoutPayload(t){this.update({location:t.location,error:null})}navigateWithCurrentPayload(t){let e=this.state.location.key,r=e+t.location.hash,a={...t.location,key:r},n={...this.state.routeStateMap,[r]:this.state.routeStateMap[e]};this.update({...t,location:a,routeStateMap:n,error:null})}leaveLoadingStateWithRouteData(t,e,r){this.update({location:t.location,pendingNavigation:null,routeStateMap:e?{...this.state.routeStateMap,[t.location.key]:{type:"loaded",data:e,title:r}}:this.state.routeStateMap,error:null})}getRoutesText(){return this.routes.map(t=>t.path).join(", ")}constructor(t,e,r,a){this.routes=a;let n=this.matchLocation(t);if(!n)throw Error(`No route found for initial location: ${t.pathname} in [${this.getRoutesText()}]`);let[o,i]=n,{data:s,title:l}=i.loadFromEmbeddedData({embeddedData:e,location:t,pathParams:o.params});this.state={location:t,routeStateMap:{[t.key]:{type:"loaded",data:s,title:l}},appPayload:r,pendingNavigation:null,error:null,navigateOnError:!1,turboCount:v.zu?.state?.turboCount}}};var y=r(63451),S=r(89250),R=r(96463),b=r(66629),N=r(80491),w=r(43786),T=r(79697),x=r(58374);let C=(t,e,r,a)=>{(0,c.useEffect)(()=>{e||(t.key,(0,T.YT)({react_app:a}))},[a,t.key,e]);let n=(0,c.useRef)(void 0);(0,c.useEffect)(()=>{e||void 0!==n.current&&n.current===t.key||((0,x.sj)()?A(r):j(r),n.current=t.key)},[t.key,e,r])},A=t=>{t?(0,m.r_)():((0,m.TL)(),(0,m.BT)())},j=t=>{if(t)return;let e=function(){window.performance.measure(_);let t=window.performance.getEntriesByName(_),e=t.pop();return e?e.duration:null}();e&&(0,w.b)({requestUrl:window.location.href,distributionKey:"REACT_NAV_DURATION",distributionValue:Math.round(e),distributionTags:["REACT_NAV_HARD"]})},_="react_nav_duration";var k=r(32458);let L=new Map,I=!1;async function O(){let{session:t}=await r.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js").then(r.bind(r,67852));window.addEventListener("popstate",()=>{let{scrollPosition:e}=t.history.getRestorationDataForIdentifier(t.history.restorationIdentifier)||{};e&&L.set(window.location.href,e)})}let P=v.iG?function(){(0,y.b)(()=>{let t=window.location.href,e=L.get(t);if(!e)return;let r=setTimeout(()=>{window.scrollTo(e.x,e.y)},0);return()=>{clearTimeout(r)}})}:k.Z;"function"==typeof afterEach&&afterEach(()=>{L.clear(),I=!1});var D=r(7533),W=r(59309);function H({appName:t,initialPath:e,embeddedData:r,routes:a,App:n,wasServerRendered:o,ssrError:s}){let l=(0,c.useRef)(),u=globalThis.window,{pathname:v,search:m,hash:w}=new URL(`${e}${u?.location.hash??""}`,u?.location.href??"https://github.com");l.current||(l.current=(0,D.l)({window:u,v5Compat:!0}));let T=l.current,{key:x,state:A}=T.location,[{location:j,error:_,routeStateMap:k,appPayload:L,navigateOnError:I,isLoading:O},{handleHistoryUpdate:H}]=function({initialLocation:t,embeddedData:e,routes:r}){let[a]=(0,c.useState)(()=>{let{appPayload:a,...n}=e;return new g(t,{...n,enabled_features:a?.enabled_features?a.enabled_features:{}},a,r)}),[n,o]=(0,c.useState)(()=>a.getAppNavigationState()),i=(0,c.useRef)(!1);i.current||(a.setAppNavigationStateCallback(o),i.current=!0);let s=(0,c.useCallback)(t=>{(0,E.X)(()=>{a.handleHistoryUpdate(t)})},[a]);return[n,{handleHistoryUpdate:s}]}({initialLocation:{pathname:v,search:m,hash:w,key:x,state:A},appName:t,embeddedData:r,routes:a});return!function(t,e,r){let a=(0,c.useRef)(null);(0,c.useEffect)(()=>{if(a.current||(a.current=r),!h(a.current,r)&&(e||t)){if(e){let t=p(e);(0,d.T)(t)}else t?.type==="loaded"&&t.title&&(0,d.T)(f(t.title))}a.current?.key!==r.key&&(a.current=r)},[e,t,r])}(k[j.key],_,j),!function(t,e){let r=(0,c.useRef)(void 0);(0,c.useEffect)(()=>{let a=e.pathname+e.search;if(void 0===r.current)r.current=a;else if(r.current!==a&&!t){let t=document.querySelector("[data-react-autofocus]");t||(t=document.querySelector("react-app h1")),t?.focus(),r.current=a}},[t,e.pathname,e.search])}(O,j),C(j,O,_,t),P(),(0,y.b)(()=>{let t=T.listen(H);return t},[T,H]),(0,i.jsx)(b.R,{appName:t,wasServerRendered:o,children:(0,i.jsx)(R.S,{children:(0,i.jsx)(W.W,{App:n,appPayload:L,error:_,history:T,location:j,navigateOnError:I,Router:S.F0,routes:a,routeStateMap:k,children:(0,i.jsx)(N.P,{ssrError:s})})})})}v.iG&&(I||(O(),I=!0));try{H.displayName||(H.displayName="ClientEntry")}catch{}var $=r(60302);let M=class ReactAppElement extends $.S{async getReactNode(t){let e=this.name,r=this.getAttribute("initial-path"),{App:a,routes:n}=await o(e);if(this.isLazy){let e=await fetch(r,{mode:"no-cors",cache:"no-cache",credentials:"include"}),{payload:a}=await e.json();t.payload=a}return(0,i.jsx)(H,{appName:e,initialPath:r,embeddedData:t,routes:n,App:a,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError})}get isLazy(){return"true"===this.getAttribute("data-lazy")}constructor(...t){super(...t),this.nameAttribute="app-name"}};function U(t,e){n.register(t,e)}M=function(t,e,r,a){var n,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,r,i):n(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}([s.Ih],M)},59628:(t,e,r)=>{r.d(e,{A:()=>n});var a=r(67294);let n=(0,a.createContext)({})},12008:(t,e,r)=>{r.d(e,{E:()=>n,M:()=>o});var a=r(67294);let n=(0,a.createContext)(void 0);function o(){let t=(0,a.useContext)(n);return t}},18866:(t,e,r)=>{r.d(e,{V:()=>i});var a=r(67294),n=r(89250),o=r(59628);function i(){let t=(0,a.useContext)(o.A),e=(0,n.TH)();return t[e.key]}},24533:(t,e,r)=>{r.d(e,{T:()=>n});var a=r(18866);function n(){let t=(0,a.V)(),e=t&&"loaded"===t.type?t.data:void 0;return e?.payload}},82914:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(56363);let{getItem:n,setItem:o,removeItem:i}=(0,a.Z)("localStorage"),s="REACT_PROFILING_ENABLED",l={enable:()=>o(s,"true"),disable:()=>i(s),isEnabled:()=>!!n(s)}},82266:(t,e,r)=>{r.d(e,{$g:()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var a=r(90804);let n=class SoftNavEvent extends Event{constructor(t,e){super(e),this.mechanism=t}};let SoftNavStartEvent=class SoftNavStartEvent extends n{constructor(t){super(t,a.Q.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends n{constructor(t,e){super(t,a.Q.SUCCESS),this.visitCount=e}};let SoftNavErrorEvent=class SoftNavErrorEvent extends n{constructor(t,e){super(t,a.Q.ERROR),this.error=e}};let SoftNavEndEvent=class SoftNavEndEvent extends n{constructor(t){super(t,a.Q.END)}}},10394:(t,e,r)=>{r.d(e,{BT:()=>u,FP:()=>h,LD:()=>c,TL:()=>p,Yl:()=>l,r_:()=>d,u5:()=>f});var a=r(90804),n=r(82266),o=r(99691),i=r(58374);let s=0;function l(){s=0,document.dispatchEvent(new Event(a.Q.INITIAL)),(0,i.XL)()}function c(t){(0,i.sj)()||(document.dispatchEvent(new Event(a.Q.PROGRESS_BAR.START)),document.dispatchEvent(new n.OV(t)),(0,i.U6)(t),(0,i.J$)(),(0,i.Nt)(),(0,o.hY)())}function u(t={}){m(t)&&(s+=1,document.dispatchEvent(new n.$g((0,i.Gj)(),s)),h(t))}function d(t={}){if(!m(t))return;s=0;let e=(0,i.Wl)()||i.jN;document.dispatchEvent(new n.QW((0,i.Gj)(),e)),v(),(0,o.t3)(e),(0,i.XL)()}function h(t={}){if(!m(t))return;let e=(0,i.Gj)();v(),document.dispatchEvent(new n.Xr(e)),(0,i.pS)(),(0,i.vu)(e)}function p(t={}){m(t)&&((0,o.mr)(),document.dispatchEvent(new Event(a.Q.RENDER)))}function f(){document.dispatchEvent(new Event(a.Q.FRAME_UPDATE))}function v(){document.dispatchEvent(new Event(a.Q.PROGRESS_BAR.END))}function m({skipIfGoingToReactApp:t,allowedMechanisms:e=[]}={}){return(0,i.sj)()&&(0===e.length||e.includes((0,i.Gj)()))&&(!t||!(0,i.Nb)())}},90804:(t,e,r)=>{r.d(e,{Q:()=>a});let a=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}})},99691:(t,e,r)=>{r.d(e,{CF:()=>i,aq:()=>o,hY:()=>s,mr:()=>c,t3:()=>l});var a=r(43786),n=r(58374);let o="stats:soft-nav-duration",i={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function s(){performance.clearResourceTimings(),performance.mark(o)}function l(t){(0,a.b)({turboFailureReason:t,turboStartUrl:(0,n.wP)(),turboEndUrl:window.location.href})}function c(){let t=function(){if(0===performance.getEntriesByName(o).length)return null;performance.measure(o,o);let t=performance.getEntriesByName(o),e=t.pop();return e?e.duration:null}();if(!t)return;let e=i[(0,n.Gj)()],r=Math.round(t);e===i.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:r}})),(0,a.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:e,destination:(0,n.Nb)()||"rails",duration:r,initiator:(0,n.CI)()||"rails"}})}},63451:(t,e,r)=>{r.d(e,{b:()=>o});var a=r(71207),n=r(67294);let o=void 0!==a.iG?.document?.createElement?n.useLayoutEffect:n.useEffect},59309:(t,e,r)=>{r.d(e,{W:()=>f,h:()=>p});var a=r(85893),n=r(73216),o=r(89250),i=r(67294),s=r(90804),l=r(12008),c=r(24533);function u({App:t}){return!function(){let t=(0,c.T)(),e=(0,l.M)();(0,i.useEffect)(()=>{function r(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))}return document.addEventListener(s.Q.INITIAL,r),()=>{document.removeEventListener(s.Q.INITIAL,r)}},[]),(0,i.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))},[e,t])}(),t?(0,a.jsx)(t,{children:(0,a.jsx)(o.j3,{})}):(0,a.jsx)(o.j3,{})}try{u.displayName||(u.displayName="AppWrapper")}catch{}var d=r(90320),h=r(59628);let p=(0,i.createContext)(null);function f({App:t,appPayload:e,children:r,error:o,history:i,location:s,navigateOnError:c,Router:u,routes:f,routeStateMap:m}){return(0,a.jsx)(n.i,{routes:f,history:i,children:o&&!c?(0,a.jsx)(d.m,{...o}):(0,a.jsx)(l.E.Provider,{value:e,children:(0,a.jsx)(p.Provider,{value:o,children:(0,a.jsx)(h.A.Provider,{value:m,children:(0,a.jsxs)(u,{location:s,navigator:i,children:[(0,a.jsx)(v,{routes:f,App:t}),r]})})})})})}function v({App:t,routes:e}){return(0,o.V$)([{element:(0,a.jsx)(u,{App:t}),children:e}])}try{p.displayName||(p.displayName="NavigationErrorContext")}catch{}try{f.displayName||(f.displayName="AppRouter")}catch{}try{v.displayName||(v.displayName="AppRoutes")}catch{}},96463:(t,e,r)=>{r.d(e,{S:()=>ErrorBoundary});var a=r(85893),n=r(90320),o=r(67294);let ErrorBoundary=class ErrorBoundary extends o.Component{static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){"function"==typeof this.props.onError?this.props.onError(t):setTimeout(()=>{throw t})}render(){return this.state.error?void 0===this.props.fallback?(0,a.jsx)(n.m,{type:"httpError"}):this.props.fallback:this.props.children}constructor(t){super(t),this.state={error:null}}}},90320:(t,e,r)=>{r.d(e,{m:()=>s});var a=r(85893),n=r(75308),o=r(42483);let i={404:"Didn\u2019t find anything here!",500:"Looks like something went wrong!"};function s({httpStatus:t,type:e}){let r="fetchError"===e?"Looks like network is down!":i[t||500];return(0,a.jsxs)(n.Z,{as:"h1",tabIndex:-1,sx:{display:"flex",flexDirection:"column",minWidth:"100%",minHeight:"100%",alignItems:"center",justifyContent:"center"},children:["Error",t?(0,a.jsx)(o.Z,{sx:{fontSize:"144px",fontWeight:"bold",lineHeight:1},children:t}):null,(0,a.jsx)(o.Z,{sx:{fontSize:4,pt:2},children:r})]})}try{s.displayName||(s.displayName="ErrorPage")}catch{}},60302:(t,e,r)=>{r.d(e,{S:()=>ReactBaseElement});var a=r(85893),n=r(76006),o=r(20745),i=r(67294),s=r(82914),l=r(18448);function c(t,e,r,a){var n,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o<3?n(i):o>3?n(e,r,i):n(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let t=this.embeddedData?.textContent;if(!t)throw Error(`No embedded data provided for react element ${this.name}`);return t}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let t={createRoot:o.s,hydrateRoot:o.a};s.Z.isEnabled()&&(t=await this.getReactDomWithProfiling());let e=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,n=await this.getReactNode(e),l=(0,a.jsx)(i.StrictMode,{children:n});if(r&&this.logSSRError(r),this.hasSSRContent){let e=this.querySelector('style[data-styled="true"]');e&&document.head.appendChild(e),this.root=t.hydrateRoot(this.reactRoot,l,{onRecoverableError:()=>{}}),e&&requestIdleCallback(()=>{e.parentElement?.removeChild(e)})}else this.root=t.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,62518,19))}logSSRError(t){if(l.t[t])return console.error("SSR failed with an expected error:",l.t[t]);try{let e=JSON.parse(t),r=function(t){if(!t.stacktrace)return"";let e="\n ",r=t.stacktrace.map(t=>{let{function:r,filename:a,lineno:n,colno:o}=t,i=`${e} at ${r} (${a}:${n}:${o})`;return e=" ",i});return r.join("\n")}(e);console.error("Error During Alloy SSR:",`${e.type}: ${e.value}
`,e,r)}catch{console.error("Error During Alloy SSR:",t,"unable to parse as json")}}};c([n.fA],ReactBaseElement.prototype,"embeddedData",void 0),c([n.fA],ReactBaseElement.prototype,"ssrError",void 0),c([n.fA],ReactBaseElement.prototype,"reactRoot",void 0)}}]);
//# sourceMappingURL=ui_packages_react-core_register-app_ts-cc3dc17a85ff.js.map
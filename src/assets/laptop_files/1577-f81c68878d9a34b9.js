!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0df898c2-9dff-4d81-8821-25f9a02ed22f",e._sentryDebugIdIdentifier="sentry-dbid-0df898c2-9dff-4d81-8821-25f9a02ed22f")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1577],{88067:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(2654).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2654:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let u=globalThis.AsyncLocalStorage;function i(){return u?new u:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},58590:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(83166),r(52983),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},93843:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return y},useSearchParams:function(){return p},usePathname:function(){return b},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return m},useParams:function(){return g},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return _},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return d.notFound}});let n=r(52983),u=r(20638),i=r(44159),o=r(58590),a=r(53677),s=r(74205),l=r(506),c=r(41821),d=r(65218),f=Symbol("internal for urlsearchparams readonly");function h(){return Error("ReadonlyURLSearchParams cannot be modified")}class y{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw h()}delete(){throw h()}set(){throw h()}sort(){throw h()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function p(){(0,o.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext);return(0,n.useMemo)(()=>e?new y(e):null,[e])}function b(){return(0,o.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function m(){(0,o.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(u.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,o.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(u.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let n of(void 0===r&&(r={}),Object.values(t[1]))){let t=n[0],u=Array.isArray(t),i=u?t[1]:t;!i||i.startsWith(s.PAGE_SEGMENT_KEY)||(u&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):u&&(r[t[0]]=t[1]),r=e(n,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function v(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(u.LayoutRouterContext);return function e(t,r,n,u){let i;if(void 0===n&&(n=!0),void 0===u&&(u=[]),n)i=t[1][r];else{var o;let e=t[1];i=null!=(o=e.children)?o:Object.values(e)[0]}if(!i)return u;let l=i[0],c=(0,a.getSegmentValue)(l);return!c||c.startsWith(s.PAGE_SEGMENT_KEY)?u:(u.push(c),e(i,r,!1,u))}(t,e)}function _(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},65218:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return u}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function u(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},59282:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),(n=r||(r={}))[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41821:function(e,t,r){"use strict";var n,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},redirect:function(){return c},permanentRedirect:function(){return d},isRedirectError:function(){return f},getURLFromRedirectError:function(){return h},getRedirectTypeFromError:function(){return y},getRedirectStatusCodeFromError:function(){return p}});let i=r(63412),o=r(88067),a=r(59282),s="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(s);n.digest=s+";"+t+";"+e+";"+r+";";let u=i.requestAsyncStorage.getStore();return u&&(n.mutableCookies=u.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function f(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,u]=e.digest.split(";",4),i=Number(u);return t===s&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in a.RedirectStatusCode}function h(e){return f(e)?e.digest.split(";",3)[2]:null}function y(e){if(!f(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function p(e){if(!f(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(u=n||(n={})).push="push",u.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63412:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(2654).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53677:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return i}});let n=r(44925)._(r(52983)),u=n.default.createContext(null);function i(e){let t=(0,n.useContext)(u);t&&t(e)}},62845:function(){},91686:function(){},2720:function(){},4793:function(){},84122:function(){},34543:function(){},11369:function(){},21712:function(){},95209:function(){},79543:function(){},59238:function(){},3655:function(){},53742:function(){},39451:function(){},78883:function(){},66718:function(){},45625:function(){},92296:function(){},78523:function(){},39961:function(){},52398:function(){},92970:function(){},43121:function(e,t,r){e.exports=r(93843)},2606:function(e,t,r){"use strict";r.d(t,{VY:function(){return j},aV:function(){return E},fC:function(){return M},xz:function(){return w}});var n=r(24552),u=r(52983),i=r(12527),o=r(62331),a=r(22092),s=r(88702),l=r(37956),c=r(57164),d=r(23196),f=r(74009);let h="Tabs",[y,p]=(0,o.b)(h,[a.Pc]),b=(0,a.Pc)(),[m,g]=y(h),v=(0,u.forwardRef)((e,t)=>{let{__scopeTabs:r,value:i,onValueChange:o,defaultValue:a,orientation:s="horizontal",dir:h,activationMode:y="automatic",...p}=e,b=(0,c.gm)(h),[g,v]=(0,d.T)({prop:i,onChange:o,defaultProp:a});return(0,u.createElement)(m,{scope:r,baseId:(0,f.M)(),value:g,onValueChange:v,orientation:s,dir:b,activationMode:y},(0,u.createElement)(l.WV.div,(0,n.Z)({dir:b,"data-orientation":s},p,{ref:t})))}),_=(0,u.forwardRef)((e,t)=>{let{__scopeTabs:r,loop:i=!0,...o}=e,s=g("TabsList",r),c=b(r);return(0,u.createElement)(a.fC,(0,n.Z)({asChild:!0},c,{orientation:s.orientation,dir:s.dir,loop:i}),(0,u.createElement)(l.WV.div,(0,n.Z)({role:"tablist","aria-orientation":s.orientation},o,{ref:t})))}),C=(0,u.forwardRef)((e,t)=>{let{__scopeTabs:r,value:o,disabled:s=!1,...c}=e,d=g("TabsTrigger",r),f=b(r),h=P(d.baseId,o),y=S(d.baseId,o),p=o===d.value;return(0,u.createElement)(a.ck,(0,n.Z)({asChild:!0},f,{focusable:!s,active:p}),(0,u.createElement)(l.WV.button,(0,n.Z)({type:"button",role:"tab","aria-selected":p,"aria-controls":y,"data-state":p?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:h},c,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(o)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(o)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;p||s||!e||d.onValueChange(o)})})))}),O=(0,u.forwardRef)((e,t)=>{let{__scopeTabs:r,value:i,forceMount:o,children:a,...c}=e,d=g("TabsContent",r),f=P(d.baseId,i),h=S(d.baseId,i),y=i===d.value,p=(0,u.useRef)(y);return(0,u.useEffect)(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.createElement)(s.z,{present:o||y},({present:r})=>(0,u.createElement)(l.WV.div,(0,n.Z)({"data-state":y?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":f,hidden:!r,id:h,tabIndex:0},c,{ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0}}),r&&a))});function P(e,t){return`${e}-trigger-${t}`}function S(e,t){return`${e}-content-${t}`}let M=v,E=_,w=C,j=O},78302:function(e,t,r){"use strict";r.d(t,{S:function(){return p}});var n=r(53317),u=r(15518),i=r(89374),o=r(39051),a=class extends o.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let i=t.queryKey,o=t.queryHash??(0,n.Rm)(i,t),a=this.get(o);return a||(a=new u.A({cache:this,queryKey:i,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},s=r(41515),l=class extends o.l{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#r=Date.now()}#t;#r;build(e,t,r){let n=new s.m({mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){let t=c(e),r=this.#t.get(t)??[];r.push(e),this.#t.set(t,r),this.notify({type:"added",mutation:e})}remove(e){let t=c(e);if(this.#t.has(t)){let r=this.#t.get(t)?.filter(t=>t!==e);r&&(0===r.length?this.#t.delete(t):this.#t.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(c(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(c(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.X7)(e,t))}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return i.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.ZT))))}};function c(e){return e.options.scope?.id??String(e.mutationId)}var d=r(16677),f=r(6877);function h(e){return{onFetch:(t,r)=>{let u=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],a=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},l=0,c=async()=>{let r=!1,c=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?r=!0:t.signal.addEventListener("abort",()=>{r=!0}),t.signal)})},d=(0,n.cG)(t.options,t.fetchOptions),f=async(e,u,i)=>{if(r)return Promise.reject();if(null==u&&e.pages.length)return Promise.resolve(e);let o={queryKey:t.queryKey,pageParam:u,direction:i?"backward":"forward",meta:t.options.meta};c(o);let a=await d(o),{maxPages:s}=t.options,l=i?n.Ht:n.VX;return{pages:l(e.pages,a,s),pageParams:l(e.pageParams,u,s)}};if(i&&o.length){let e="backward"===i,t={pages:o,pageParams:a},r=(e?function(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}:y)(u,t);s=await f(t,r,e)}else{let t=e??o.length;do{let e=0===l?a[0]??u.initialPageParam:y(u,s);if(l>0&&null==e)break;s=await f(s,e),l++}while(l<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=c}}}function y(e,{pages:t,pageParams:r}){let n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}var p=class{#n;#u;#i;#o;#a;#s;#l;#c;constructor(e={}){this.#n=e.queryCache||new a,this.#u=e.mutationCache||new l,this.#i=e.defaultOptions||{},this.#o=new Map,this.#a=new Map,this.#s=0}mount(){this.#s++,1===this.#s&&(this.#l=d.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onFocus())}),this.#c=f.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onOnline())}))}unmount(){this.#s--,0===this.#s&&(this.#l?.(),this.#l=void 0,this.#c?.(),this.#c=void 0)}isFetching(e){return this.#n.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#u.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),u=this.#n.build(this,r);return e.revalidateIfStale&&u.isStaleByTime((0,n.KC)(r.staleTime,u))&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#n.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let u=this.defaultQueryOptions({queryKey:e}),i=this.#n.get(u.queryHash),o=i?.state.data,a=(0,n.SE)(t,o);if(void 0!==a)return this.#n.build(this,u).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return i.V.batch(()=>this.#n.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state}removeQueries(e){let t=this.#n;i.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#n,n={type:"active",...e};return i.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(i.V.batch(()=>this.#n.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return i.V.batch(()=>{if(this.#n.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(i.V.batch(()=>this.#n.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#n.build(this,t);return r.isStaleByTime((0,n.KC)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){return e.behavior=h(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}ensureInfiniteQueryData(e){return e.behavior=h(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return f.N.isOnline()?this.#u.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#n}getMutationCache(){return this.#u}getDefaultOptions(){return this.#i}setDefaultOptions(e){this.#i=e}setQueryDefaults(e,t){this.#o.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#o.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#a.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#a.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#i.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#i.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#n.clear(),this.#u.clear()}}}}]);
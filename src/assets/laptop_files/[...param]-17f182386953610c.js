!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="baa8bc2d-2e72-4f03-98da-559c8a9751f2",e._sentryDebugIdIdentifier="sentry-dbid-baa8bc2d-2e72-4f03-98da-559c8a9751f2")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1712],{2492:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/free-photos-vectors/[...param]",function(){return r(50812)}])},95348:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(97458),a=r(21956),c=r(71409);let s=e=>{let{path:t,slug:r,currentPage:n,sponsor:a,uuid:c}=e,s=o(t,r,a,c);return{nextHref:s(n+1),prevHref:s(n-1),page1Href:s(1),getHrefFromPage:s}},o=(e,t,r,n)=>{let a=(0,c.$T)(e);return c=>{let s=n?"uuid=".concat(n):"",o=c>1?[c]:[],i=[e,t,...o,...r?["sponsor"]:[]],l=[a,t,...o];return{href:{pathname:i.join("/"),hash:s},as:{pathname:l.join("/"),hash:s}}}},i=e=>{let{path:t,currentPage:r,slug:c,lastPage:o,uuid:i,shouldShowSponsor:l}=e,{nextHref:u,prevHref:p,page1Href:d,getHrefFromPage:g}=s({path:t,slug:c,currentPage:r,sponsor:l,uuid:i});return(0,n.jsx)(a.t,{nextHref:u,prevHref:p,page1Href:d,currentPage:r,pages:o,inputPageUrlGenerator:g})}},93322:function(e,t,r){"use strict";r.d(t,{m:function(){return g}});var n=r(97458),a=r(8490),c=r(70177),s=r(84615),o=r(32748),i=r(84540),l=r(14200),u=r(43096);let p=e=>{let{t}=(0,o.$G)("common"),r=(0,u.Jn)("term"),n=(0,u.Jn)("type"),a=(0,u.Jn)("license"),c=t(n?"regularTypeTitle.".concat(n):"images");return{resourcesLabel:c,resourcesUrl:"collections"===e?d("search",n,r,a):void 0,collectionsLabel:t("collections"),collectionsUrl:"search"===e?d("collections",n,r,a):void 0}},d=(e,t,r,n)=>{let a=new URLSearchParams({format:e});return t&&a.set("type",t),r&&a.set("query",r),n===i.FILTERS_VALUES.license.free?a.set(l.C2.selection,"1"):n===i.FILTERS_VALUES.license.premium&&a.set(l.C2.premium,"1"),"/search?".concat(a.toString())},g=e=>{let{resourcesQuantity:t=0,collectionsQuantity:r=0,selected:o="search"}=e,{resourcesLabel:i,resourcesUrl:l,collectionsLabel:u,collectionsUrl:d}=p(o);return(0,n.jsxs)(s.f,{children:[(0,n.jsx)(s.A,{icon:a.Z,label:i,selected:"search"===o,quantity:t,url:l}),!!r&&(0,n.jsx)(s.A,{icon:c.Z,label:u,selected:"collections"===o,quantity:r,url:d})]})}},50812:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return a},default:function(){return n.Z}});var n=r(84885),a=!0},84885:function(e,t,r){"use strict";r.d(t,{Z:function(){return U}});var n=r(97458),a=r(71409),c=r(34529),s=r(32748),o=r(52983),i=r(93322),l=r(20711),u=r(8295),p=r(92111),d=r(62687),g=r(43369),m=r(56590),f=r(6863),h=r(71927),y=r(33106),x=r(85668),j=r(95348),v=r(25092),b=r(46635),w=r(26521),_=r(48510),T=r(43096),P=r(45770);let I=e=>{let{currentPage:t,regularType:r,tag:n}=e,{t:a}=(0,s.$G)(["common","regularTags"]),c="regularTags:".concat(r),o=a("".concat(c,".h1"),{tag:n}),i=a("".concat(c,".title"),{tag:n}),l=a("".concat(c,".description"),{tag:n}),u=t>1?"".concat(a("common:pageNumber",{page:t})," | "):"";return{seoTitle:"".concat(u).concat(i).concat("allImages"===r?"":" | Freepik"),seoDescription:l,title:o,hashtags:["freepik"]}};var k=r(25215),S=r(70306);let E=(e,t)=>{let r=(0,S.m)(e.preview.url);return{"@type":"ImageObject",name:e.name,contentUrl:r,encodingFormat:"image/jpeg",license:t,acquireLicensePage:e.url,thumbnailUrl:"".concat(r,"?w=360"),isPartOf:{"@type":"WebPage",url:e.url,name:e.name}}},L=e=>{let{title:t,description:r,basePath:c,slug:s,items:i,relatedTags:l,type:u}=e,{domain:p}=(0,a.Vx)(),d=(0,a.L3)(),g=d(c),m=(0,a.ZK)(),f="es"===m?"/legal/terminos-de-uso#nav-freepik-license":"/legal/terms-of-use".concat("#nav-freepik-agreement"),h="".concat(p).concat(f),y="pl"===m&&"vector"===u?"/wektorow":d({vector:"/vectors",photo:"/popular-photos",psd:"/popular-psd",allImages:"/images"}[u]||""),x="".concat(p).concat(y),j="".concat(p).concat(g,"/").concat(s),v=l.map(e=>{let{slug:t}=e;return"".concat(p).concat(g,"/").concat(t)}).slice(0,10),b=i.map(e=>E(e,h)),w=(0,o.useMemo)(()=>({"@context":"https://schema.org","@graph":[{"@type":"ImageGallery",name:t,url:j,"@id":"".concat(j,"#imagegallery"),description:r,inLanguage:m,relatedLink:[x],significantLink:v,isPartOf:{"@type":"WebSite","@id":"".concat(p,"/#website"),url:"".concat(p,"/")},mainEntity:{"@type":"ItemList","@id":"".concat(j,"#itemlist"),itemListElement:b}}]}),[t,j,r,m,x,v,p,b]);return(0,n.jsx)(k.h,{data:w})},C=e=>{var t;let{initialActiveFilters:r,currentPage:v,lastPage:k,items:S,relatedTags:E,resultsCount:C,track:U,tag:N,tagDescription:V,canonicalPath:F,slug:H,shouldShowSponsor:A,typeRegularTag:O,resourceType:Z,relatedCollectionsTotal:$,filterMenuUserPreferences:q,basePath:D}=e,[G,R]=(0,o.useState)(!1),{domain:B}=(0,a.Vx)(),{seoTitle:J,seoDescription:M,hashtags:K}=I({currentPage:v,regularType:O,tag:N}),{uuidSearchTracker:Q}=(0,P.S)({items:S.filter(e=>"ads"!==e.name),path:D,trackerParams:{page:v,term:N,resourceType:"allImages"===O?"global":O,total:C,fromView:"keyword",track:U},pageViewParams:{content_group2:O,content_group:"tags",content_type:"na"}}),W=A&&v>1,X=A&&1===v;return(0,o.useEffect)(()=>{R(!0)},[]),(0,c.Pu)([[T.lh,r],[w.zs,null!=q?q:w.cs]]),(0,n.jsxs)(_.t,{filters:r,children:[(0,n.jsx)(d.Seo,{title:J,description:M,image:null===(t=S[0])||void 0===t?void 0:t.preview,forceUrl:F?"".concat(B).concat(F):void 0,hashtags:K,noIndex:C<=10}),(0,n.jsxs)(m.A,{hasSearchByImage:!0,format:"search",resourceType:Z,header:W&&(0,n.jsx)(y.M,{placement:"srp",page:v}),topContent:(0,n.jsx)(p.RelatedTagsBar,{excludeTag:O,children:(0,n.jsx)(p.ExtraTags,{basePath:D,source:"tag",items:E})}),footer:X&&(0,n.jsx)(y.M,{placement:"srp",page:v,onlyInViewport:!0}),children:[(0,n.jsx)(g.t,{}),(0,n.jsxs)(f.f,{introContent:(0,n.jsx)("div",{className:"$mb-30",children:(0,n.jsx)(x.T,{transKey:"regularTags:".concat(O,".h1"),description:V&&(0,n.jsx)(s.cC,{defaults:V,components:{em:(0,n.jsx)("em",{}),a:(0,n.jsx)("a",{})}})})}),infoContent:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.m,{resourcesQuantity:C,collectionsQuantity:$}),(0,n.jsx)(h.B,{})]}),children:[(0,n.jsx)(b.n,{searchTrackingCode:U,vertical:"tag_regular",page:v,children:(0,n.jsx)(l.E,{fromView:"keyword",items:S,uuid:G?Q:void 0,maxPriorityItems:4,page:v})}),(0,n.jsx)(j.m,{path:D,currentPage:v,slug:H,lastPage:k,uuid:G?Q:void 0,shouldShowSponsor:A})]})]}),(0,n.jsx)(u.$,{}),(0,n.jsx)(L,{title:J,description:M,basePath:D,slug:H,items:S,relatedTags:E,type:O})]})};C.layout=v.FullLayout;var U=C}},function(e){e.O(0,[236,381,6273,5757,5450,1577,9378,1116,7092,6249,8780,5499,6438,5808,7408,7601,8872,6177,7183,4853,9979,6483,6529,8010,1489,8834,9339,640,6802,125,5907,7078,4831,2888,9774,179],function(){return e(e.s=2492)}),_N_E=e.O()}]);
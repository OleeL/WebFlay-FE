(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6137:function(e,t,n){Promise.resolve().then(n.bind(n,4726))},4726:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var s=n(9268),a=n(2100),l=n(3500),c=n(7374),r=n(9362);let i={google:1,bing:2,duckDuckGo:3},o={[i.google]:"Google",[i.bing]:"Bing",[i.duckDuckGo]:"DuckDuckGo"};var d=n(3380),u=n(9);let h=e=>{let t=e%10,n=e%100;return 1===t&&11!==n?"".concat(e,"st"):2===t&&12!==n?"".concat(e,"nd"):3===t&&13!==n?"".concat(e,"rd"):"".concat(e,"th")};var m=n(8900),x=n(5195),j=n(8807),p=n.n(j),v=n(6902),b=n.n(v),g=n(6006);let _=()=>{var e;let[t,n]=(0,g.useState)(""),[s,a]=(0,g.useState)("https://infotrack.co.uk"),[l,c]=(0,g.useState)(!0),[r,o]=(0,g.useState)(i.google),[d,u]=(0,g.useState)(null),[h,m]=(0,g.useState)(!1),[x,j]=(0,g.useState)(!1),p=void 0,v=!t||!s||h,_=async e=>{if(v)return;e.preventDefault(),m(!0);let n=await fetch("".concat("http://localhost:5184","/scrape?name=").concat(t,"&url=").concat(s,"&searchEngine=").concat(r),{method:"GET"}),a=await n.json();m(!1),u({...a,createdOn:b()(a.createdOn)}),a.position.split(",").some(e=>"1"===e)&&(j(!0),setTimeout(()=>j(!1),1e3))};(0,g.useEffect)(()=>()=>clearTimeout(p),[p]);let f=(0,g.useMemo)(()=>null!==(e=null==d?void 0:d.position.split(","))&&void 0!==e?e:[],[null==d?void 0:d.position]);return{searchTerm:t,setSearchTerm:n,url:s,setUrl:a,loading:h,results:d,searchEngine:r,setSearchEngine:o,urlDisabled:l,setUrlDisabled:c,onSubmit:_,confetti:x,submitDisabled:v,resultsArray:f}},f=Object.values(i).map(e=>({value:e,label:o[e]}));var k=()=>{let{searchTerm:e,setSearchTerm:t,url:n,setUrl:i,searchEngine:j,setSearchEngine:v,urlDisabled:b,setUrlDisabled:g,onSubmit:k,loading:N,confetti:Z,submitDisabled:S,resultsArray:C}=_();return(0,s.jsx)("div",{className:p().container,children:(0,s.jsxs)("div",{className:p().box,children:[(0,s.jsx)("h1",{className:p().title,children:"WebFlay"}),(0,s.jsxs)(a.Z,{onSubmit:k,children:[(0,s.jsx)(a.Z.Label,{htmlFor:"search-term",children:"Search Term"}),(0,s.jsx)(l.Z,{className:"mb-3",children:(0,s.jsx)(a.Z.Control,{id:"search-term",placeholder:"E.g. Info Track",value:e,onChange:e=>t(e.target.value)})}),(0,s.jsx)(a.Z.Label,{htmlFor:"url",children:"Url"}),(0,s.jsxs)(l.Z,{className:"mb-3",children:[(0,s.jsx)(a.Z.Control,{id:"url",disabled:b,value:n,onChange:e=>i(e.target.value)}),(0,s.jsx)(l.Z.Text,{id:"basic-addon1",className:"cursor-pointer",onClick:()=>g(!b),children:(0,s.jsx)(d.G,{icon:b?u.byT:u.tAh})})]}),(0,s.jsx)(a.Z.Label,{htmlFor:"dropdown-search-engine",children:"Search Engine"}),(0,s.jsxs)(c.Z,{className:"mb-3",children:[(0,s.jsx)(c.Z.Toggle,{id:"dropdown-search-engine",children:o[j]}),(0,s.jsx)(c.Z.Menu,{children:f.map(e=>(0,s.jsx)(c.Z.Item,{onClick:()=>v(e.value),children:e.label},e.value))})]}),(0,s.jsx)(r.Z,{type:"submit",variant:"success",disabled:S,children:"Submit"})]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:p().resultsBox,children:[(0,s.jsxs)("div",{className:p().centeredDivChild,children:[(0,s.jsx)(m.Z,{color:"white",loading:N,size:150,"aria-label":"Loading Spinner","data-testid":"loader",className:p().centered}),Z&&(0,s.jsx)(x.Z,{className:p().centered})]}),!N&&C.map((e,t)=>(0,s.jsxs)("div",{className:p().title,children:[h(+e),t!==C.length-1&&","]},t))]})]})})},N=n(9001),Z=n.n(N);function S(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("main",{className:"".concat(Z().app," flex-row width-12 height-12 justify-center"),children:(0,s.jsx)(k,{})})})}},9001:function(){},8807:function(e){e.exports={container:"scrape_container__8dsM0",box:"scrape_box__GnWHM",title:"scrape_title__Ik_mY",resultsBox:"scrape_resultsBox__Gb_nW",centeredDivChild:"scrape_centeredDivChild__7Gj5I"}}},function(e){e.O(0,[957,508,253,769,744],function(){return e(e.s=6137)}),_N_E=e.O()}]);
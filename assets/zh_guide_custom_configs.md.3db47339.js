import{d as g,u as w,a3 as C,l as F,D as l,g as D,J as e,b as t,m as s,e as a,t as _,f as m,Q as n,o as v}from"./chunks/framework.086e05ea.js";import{c as A,W}from"./chunks/WatermarkOptionsForm.36879f63.js";import{u as b}from"./chunks/app.b2ed3a8f.js";import"./chunks/commonjsHelpers.725317a4.js";import"./chunks/index.bab9d324.js";import"./chunks/global.61cd703a.js";import"./chunks/upload.dfad041d.js";import"./chunks/pinia.e7cfee71.js";const O=s("h1",{id:"自定义配置",tabindex:"-1"},[a("自定义配置 "),s("a",{class:"header-anchor",href:"#自定义配置","aria-label":'Permalink to "自定义配置"'},"​")],-1),B={class:"language-js vp-adaptive-theme"},x=s("button",{title:"Copy Code",class:"copy"},null,-1),j=s("span",{class:"lang"},"js",-1),N={class:"shiki github-dark vp-code-dark"},S=n('<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Watermark } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;watermark-js-plus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>',1),V=s("span",{class:"line"},null,-1),z={class:"line"},P=n('<span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">watermark</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Watermark</span>',9),J={style:{color:"#E1E4E8"}},M=s("span",{class:"line"},null,-1),Q=n('<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// add watermark</span></span>',1),R=s("span",{class:"line"},null,-1),T=n('<span class="line"><span style="color:#E1E4E8;">watermark.</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// remove watermark</span></span>',1),q={class:"shiki github-light vp-code-light"},G=n('<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Watermark } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;watermark-js-plus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// import watermark plugin</span></span>',1),H=s("span",{class:"line"},null,-1),I={class:"line"},K=n('<span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">watermark</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Watermark</span>',9),L={style:{color:"#24292E"}},U=s("span",{class:"line"},null,-1),X=n('<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// add watermark</span></span>',1),Y=s("span",{class:"line"},null,-1),Z=n('<span class="line"><span style="color:#24292E;">watermark.</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// remove watermark</span></span>',1),cs=JSON.parse('{"title":"自定义配置","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/guide/custom/configs.md","filePath":"zh/guide/custom/configs.md"}'),$={name:"zh/guide/custom/configs.md"},is=g({...$,setup(ss){const p=b();w();const c={width:300,height:300,rotate:45};let o=C(A(c));F(()=>{});const y=()=>{p.createWatermark(o)},h=()=>{p.removeWatermark()},E=r=>{Object.keys(o).forEach(i=>{delete o[i]}),o=Object.assign(o,r),p.changeWatermark(r)};return(r,i)=>{const u=l("ClientOnly"),d=l("el-button"),k=l("el-space"),f=l("el-affix");return v(),D("div",null,[O,e(u,null,{default:t(()=>[e(W,{options:c,onChange:E})]),_:1}),s("div",B,[x,j,s("pre",N,[s("code",null,[S,a(`
`),V,a(`
`),s("span",z,[P,s("span",J,"("+_(m(o))+")",1)]),a(`
`),M,a(`
`),Q,a(`
`),R,a(`
`),T])]),s("pre",q,[s("code",null,[G,a(`
`),H,a(`
`),s("span",I,[K,s("span",L,"("+_(m(o))+")",1)]),a(`
`),U,a(`
`),X,a(`
`),Y,a(`
`),Z])])]),e(f,{position:"bottom",offset:0},{default:t(()=>[e(k,{class:"block-operation"},{default:t(()=>[e(d,{round:"",type:"primary",onClick:y},{default:t(()=>[a("添加水印")]),_:1}),e(d,{round:"",type:"danger",onClick:h},{default:t(()=>[a("删除水印")]),_:1})]),_:1})]),_:1})])}}});export{cs as __pageData,is as default};
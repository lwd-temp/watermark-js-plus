import{aj as g,ar as p,aZ as v,ai as b,an as u}from"./framework.8b9dc6a7.js";function S(e){for(var t=-1,a=e==null?0:e.length,s={};++t<a;){var l=e[t];s[l[0]]=l[1]}return s}function F(e){return e==null}class O extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function j(e,t){throw new O(`[${e}] ${t}`)}function A(e,t){}const h="__epPropKey",o=e=>e,$=e=>g(e)&&!!e[h],x=(e,t)=>{if(!g(e)||$(e))return e;const{values:a,required:s,default:l,type:n,validator:r}=e,c={type:n,required:!!s,validator:a||r?f=>{let d=!1,i=[];if(a&&(i=Array.from(a),p(e,"default")&&i.push(l),d||(d=i.includes(f))),r&&(d||(d=r(f))),!d&&i.length>0){const w=[...new Set(i)].map(P=>JSON.stringify(P)).join(", ");v(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${w}], got value ${JSON.stringify(f)}.`)}return d}:void 0,[h]:!0};return p(e,"default")&&(c.default=l),c},E=e=>S(Object.entries(e).map(([t,a])=>[t,x(a,t)])),y=e=>e,L="ElUpload";class q extends Error{constructor(t,a,s,l){super(t),this.name="UploadAjaxError",this.status=a,this.method=s,this.url=l}}function m(e,t,a){let s;return a.response?s=`${a.response.error||a.response}`:a.responseText?s=`${a.responseText}`:s=`fail to ${t.method} ${e} ${a.status}`,new q(s,a.status,t.method,e)}function B(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const R=e=>{typeof XMLHttpRequest>"u"&&j(L,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=e.action;t.upload&&t.upload.addEventListener("progress",n=>{const r=n;r.percent=n.total>0?n.loaded/n.total*100:0,e.onProgress(r)});const s=new FormData;if(e.data)for(const[n,r]of Object.entries(e.data))b(r)&&r.length?s.append(n,...r):s.append(n,r);s.append(e.filename,e.file,e.file.name),t.addEventListener("error",()=>{e.onError(m(a,e,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return e.onError(m(a,e,t));e.onSuccess(B(t))}),t.open(e.method,a,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const l=e.headers||{};if(l instanceof Headers)l.forEach((n,r)=>t.setRequestHeader(r,n));else for(const[n,r]of Object.entries(l))F(r)||t.setRequestHeader(n,String(r));return t.send(s),t},T=["text","picture","picture-card"];let C=1;const _=()=>Date.now()+C++,H=E({action:{type:String,default:"#"},headers:{type:o(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>y({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:o(Array),default:()=>y([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:T,default:"text"},httpRequest:{type:o(Function),default:R},disabled:Boolean,limit:Number}),D=E({...H,beforeUpload:{type:o(Function),default:u},beforeRemove:{type:o(Function)},onRemove:{type:o(Function),default:u},onChange:{type:o(Function),default:u},onPreview:{type:o(Function),default:u},onSuccess:{type:o(Function),default:u},onProgress:{type:o(Function),default:u},onError:{type:o(Function),default:u},onExceed:{type:o(Function),default:u}});export{E as a,x as b,A as c,o as d,H as e,S as f,_ as g,D as h,F as i,y as m,j as t,T as u};
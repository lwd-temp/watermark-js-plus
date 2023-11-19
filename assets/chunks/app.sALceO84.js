import{d as v}from"./pinia.dXsbNHkF.js";import{i as d,W as l,a as k,r as f,c as w,g,b as E}from"./global.Qo6jmeRt.js";const y=()=>{typeof window<"u"&&(Object.defineProperty(window,"MutationObserver",{writable:!1,configurable:!1}),Object.defineProperty(window,"requestAnimationFrame",{writable:!1,configurable:!1}))};class b{constructor(t={}){this.parentElement=document.body,this.props=t,this.options=Object.assign({},d,t),this.changeParentElement(this.options.parent),this.watermarkCanvas=new l(this.props,this.options),y()}async changeOptions(t={},e="overwrite",r=!0){this.initConfigData(t,e),r&&(this.remove(),await this.create())}async create(){var s,a,h,m,c,p,u;if(!this.validateUnique()||!this.validateContent())return;const t=k(this.watermarkDom);await((s=this.watermarkCanvas)==null?void 0:s.draw()),this.layoutCanvas=f(this.options,(a=this.watermarkCanvas)==null?void 0:a.getCanvas());const e=w(this.layoutCanvas);(h=this.watermarkCanvas)==null||h.clear(),this.watermarkDom=document.createElement("div");const r=document.createElement("div");this.watermarkDom.__WATERMARK__="watermark",this.watermarkDom.__WATERMARK__INSTANCE__=this;const i=this.checkParentElementType();this.watermarkDom.style.cssText=`
      z-index: ${this.options.zIndex}!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;
      ${i==="custom"?"top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;":"position:relative!important;"}
    `;const n=g(this.options);if(r.style.cssText=`
      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;
      position:${i==="root"?"fixed":"absolute"}!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;
      z-index:${this.options.zIndex}!important;background-image:url(${e})!important;background-repeat:${this.options.backgroundRepeat}!important;
      background-size:${n[0]}px ${n[1]}px!important;background-position:${this.options.backgroundPosition};
      ${this.options.movable?"animation: 200s ease 0s infinite normal none running watermark !important;":""}
    `,this.watermarkDom.append(r),this.parentElement.appendChild(this.watermarkDom),this.options.mutationObserve)try{this.bindMutationObserve()}catch{(c=(m=this.options).onObserveError)==null||c.call(m)}t&&((u=(p=this.options).onSuccess)==null||u.call(p))}destroy(){this.remove(),this.watermarkDom=void 0}async check(){this.parentElement.contains(this.watermarkDom)||(this.remove(),await this.create())}remove(){var t,e,r,i,n,s,a;(e=(t=this.options).onBeforeDestroy)==null||e.call(t),(r=this.observer)==null||r.disconnect(),(i=this.parentObserve)==null||i.disconnect(),this.unbindCheckWatermarkElementEvent(),(n=this.watermarkDom)==null||n.remove(),(a=(s=this.options).onDestroyed)==null||a.call(s)}initConfigData(t,e="overwrite"){e==="append"?Object.keys(t).forEach(r=>{this.props&&(this.props[r]=t[r])}):this.props=t,this.options=Object.assign({},d,this.props),this.changeParentElement(this.options.parent),this.watermarkCanvas=new l(this.props,this.options)}changeParentElement(t){if(typeof t=="string"){const e=document.querySelector(t);e&&(this.parentElement=e)}else this.parentElement=t}validateUnique(){let t=!0;return this.parentElement.childNodes.forEach(e=>{t&&Object.hasOwnProperty.call(e,"__WATERMARK__")&&(t=!1)}),t}validateContent(){switch(this.options.contentType){case"image":return Object.hasOwnProperty.call(this.options,"image");case"multi-line-text":case"rich-text":case"text":return this.options.content.length>0}return!1}checkParentElementType(){return["html","body"].includes(this.parentElement.tagName.toLocaleLowerCase())?"root":"custom"}async checkWatermarkElement(){this.parentElement.contains(this.watermarkDom)||(this.remove(),await this.create()),this.bindCheckWatermarkElementEvent()}bindMutationObserve(){this.watermarkDom&&(this.bindCheckWatermarkElementEvent(),this.observer=new MutationObserver(async t=>{t.length>0&&(this.remove(),await this.create())}),this.observer.observe(this.watermarkDom,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.parentObserve=new MutationObserver(async t=>{var e;for(const r of t)((r==null?void 0:r.target)===this.watermarkDom||((e=r==null?void 0:r.removedNodes)==null?void 0:e[0])===this.watermarkDom||r.type==="childList"&&r.target===this.parentElement&&r.target.lastChild!==this.watermarkDom)&&(this.remove(),await this.create())}),this.parentObserve.observe(this.parentElement,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))}bindCheckWatermarkElementEvent(){this.unbindCheckWatermarkElementEvent(),this.checkWatermarkElementRequestID=requestAnimationFrame(this.checkWatermarkElement.bind(this))}unbindCheckWatermarkElementEvent(){k(this.checkWatermarkElementRequestID)||cancelAnimationFrame(this.checkWatermarkElementRequestID)}}class C extends b{constructor(t={}){t.globalAlpha=.005,t.mode="blind",super(t)}static decode(t){const e=Object.assign({url:"",fillColor:"#000",compositeOperation:"color-burn",mode:"canvas",compositeTimes:3},t);if(e.url&&e.mode==="canvas"){const r=new Image;r.src=e.url,r.onload=()=>{var m;const{width:i,height:n}=r,s=l.createCanvas(i,n),a=s.getContext("2d");if(a===null)throw new Error("get context error");a.drawImage(r,0,0,i,n),a.globalCompositeOperation=e.compositeOperation,a.fillStyle=e.fillColor;for(let c=0;c<e.compositeTimes;c++)a.fillRect(0,0,i,n);const h=w(s);e.onSuccess&&E(e.onSuccess)&&((m=e.onSuccess)==null||m.call(e,h))}}}}const x=v("app",{state:()=>({watermark:null}),getters:{},actions:{createWatermark(o,t="default"){this.watermark&&this.watermark.destroy(),this.watermark=t==="default"?new b(o):new C(o),this.watermark.create()},changeWatermark(o={},t="overwrite",e=!0){this.watermark&&this.watermark.changeOptions(o,t,e)},removeWatermark(){this.watermark&&this.watermark.destroy()}}});export{C as B,b as W,x as u};
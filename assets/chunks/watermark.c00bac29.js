import{a as l,W as u,b as d,r as b,c as k,g as v}from"./index.b6df71ed.js";const w=()=>{typeof window<"u"&&(Object.defineProperty(window,"MutationObserver",{writable:!1,configurable:!1}),Object.defineProperty(window,"requestAnimationFrame",{writable:!1,configurable:!1}))};class y{constructor(t={}){this.parentElement=document.body,this.props=t,this.options=Object.assign({},l,t),this.changeParentElement(this.options.parent),this.watermarkCanvas=new u(this.props,this.options),w()}changeOptions(t={},i="overwrite"){this.initConfigData(t,i)}async create(){var n,s,o,m,h,c,p;if(!this.validateUnique()||!this.validateContent())return;const t=d(this.watermarkDom);await((n=this.watermarkCanvas)==null?void 0:n.draw()),this.layoutCanvas=b(this.options,(s=this.watermarkCanvas)==null?void 0:s.getCanvas());const i=k(this.layoutCanvas);(o=this.watermarkCanvas)==null||o.clear(),this.watermarkDom=document.createElement("div");const e=document.createElement("div");this.watermarkDom.__WATERMARK__="watermark",this.watermarkDom.__WATERMARK__INSTANCE__=this;const r=this.checkParentElementType();this.watermarkDom.style.cssText=`
      z-index: ${this.options.zIndex}!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;
      ${r==="custom"?"top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;":"position:relative!important;"}
    `;const a=v(this.options);if(e.style.cssText=`
      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;
      position:${r==="root"?"fixed":"absolute"}!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;
      z-index:${this.options.zIndex}!important;background-image:url(${i})!important;background-repeat:${this.options.backgroundRepeat}!important;
      background-size:${a[0]}px ${a[1]}px!important;background-position:${this.options.backgroundPosition}!important;
    `,this.watermarkDom.append(e),this.parentElement.appendChild(this.watermarkDom),this.options.mutationObserve)try{this.bindMutationObserve()}catch{(h=(m=this.options).onObserveError)==null||h.call(m)}t&&((p=(c=this.options).onSuccess)==null||p.call(c))}destroy(){this.remove(),this.watermarkDom=void 0}async check(){this.parentElement.contains(this.watermarkDom)||(this.remove(),await this.create())}remove(){var t,i,e,r,a,n,s;(i=(t=this.options).onBeforeDestroy)==null||i.call(t),(e=this.observer)==null||e.disconnect(),(r=this.parentObserve)==null||r.disconnect(),this.unbindCheckWatermarkElementEvent(),(a=this.watermarkDom)==null||a.remove(),(s=(n=this.options).onDestroyed)==null||s.call(n)}initConfigData(t,i="overwrite"){this.props=t,i==="overwrite"?this.options=Object.assign({},l,t):Object.keys(t).forEach(e=>{this.options[e]=t[e]}),this.changeParentElement(this.options.parent),this.watermarkCanvas=new u(this.props,this.options)}changeParentElement(t){if(typeof t=="string"){const i=document.querySelector(t);i&&(this.parentElement=i)}else this.parentElement=t}validateUnique(){let t=!0;return this.parentElement.childNodes.forEach(i=>{t&&Object.hasOwnProperty.call(i,"__WATERMARK__")&&(t=!1)}),t}validateContent(){switch(this.options.contentType){case"image":return Object.hasOwnProperty.call(this.options,"image");case"multi-line-text":case"rich-text":case"text":return this.options.content.length>0}return!1}checkParentElementType(){return["html","body"].includes(this.parentElement.tagName.toLocaleLowerCase())?"root":"custom"}async checkWatermarkElement(){this.parentElement.contains(this.watermarkDom)||(this.remove(),await this.create()),this.bindCheckWatermarkElementEvent()}bindMutationObserve(){this.watermarkDom&&(this.bindCheckWatermarkElementEvent(),this.observer=new MutationObserver(async t=>{t.length>0&&(this.remove(),await this.create())}),this.observer.observe(this.watermarkDom,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.parentObserve=new MutationObserver(async t=>{var i;for(const e of t)((e==null?void 0:e.target)===this.watermarkDom||((i=e==null?void 0:e.removedNodes)==null?void 0:i[0])===this.watermarkDom||e.type==="childList"&&e.target===this.parentElement&&e.target.lastChild!==this.watermarkDom)&&(this.remove(),await this.create())}),this.parentObserve.observe(this.parentElement,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))}bindCheckWatermarkElementEvent(){this.unbindCheckWatermarkElementEvent(),this.checkWatermarkElementRequestID=requestAnimationFrame(this.checkWatermarkElement.bind(this))}unbindCheckWatermarkElementEvent(){d(this.checkWatermarkElementRequestID)||cancelAnimationFrame(this.checkWatermarkElementRequestID)}}export{y as W};

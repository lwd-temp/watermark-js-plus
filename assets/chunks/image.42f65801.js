import{a as o,W as e,r as n,c as h}from"./index.895a2a81.js";class c{constructor(t={}){var s;this.drew=!1,this.props=t,this.options=Object.assign({},o,t),this.watermarkCanvas=new e(this.props,this.options),this.originalSrc=(s=this.props.dom)==null?void 0:s.src,this.backgroundImage=this.getBackgroundImage()}create(){var t,s,a,i,r;this.drew||((t=this.watermarkCanvas)==null||t.draw(),this.options.layout="grid",this.options.gridLayoutOptions={...this.options.gridLayoutOptions,width:(s=this.backgroundImage)==null?void 0:s.width,height:(a=this.backgroundImage)==null?void 0:a.height,backgroundImage:this.backgroundImage},this.layoutCanvas=n(this.options,(i=this.watermarkCanvas)==null?void 0:i.getCanvas()),this.options.dom.src=h(this.layoutCanvas),(r=this.watermarkCanvas)==null||r.clear(),this.drew=!0)}destroy(){this.options.dom.src=this.originalSrc,this.drew=!1}getBackgroundImage(){if(this.options.dom)return this.options.dom}}const d="/watermark-js-plus/assets/image.569bacc0.png";export{c as I,d as i};

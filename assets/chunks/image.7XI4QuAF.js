import{i as o,W as e,r as n,c as h}from"./index.BodUvnj1.js";class m{constructor(t={}){var s;this.drew=!1,this.props=t,this.options=Object.assign({},o,t),this.watermarkCanvas=new e(this.props,this.options),this.originalSrc=(s=this.props.dom)==null?void 0:s.src,this.backgroundImage=this.getBackgroundImage()}async create(){var t,s,a,i,r;this.drew||(await((t=this.watermarkCanvas)==null?void 0:t.draw()),this.options.layout="grid",this.options.gridLayoutOptions={...this.options.gridLayoutOptions,width:(s=this.backgroundImage)==null?void 0:s.width,height:(a=this.backgroundImage)==null?void 0:a.height,backgroundImage:this.backgroundImage},this.layoutCanvas=n(this.options,(i=this.watermarkCanvas)==null?void 0:i.getCanvas()),this.options.dom.src=h(this.layoutCanvas),(r=this.watermarkCanvas)==null||r.clear(),this.drew=!0)}destroy(){this.options.dom.src=this.originalSrc,this.drew=!1}getBackgroundImage(){if(this.options.dom)return this.options.dom}}const c="/watermark-js-plus/assets/image.BDuqOd6r.png";export{m as I,c as i};

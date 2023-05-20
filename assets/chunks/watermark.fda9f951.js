const j=s=>s.toDataURL("image/png",1),q=s=>typeof s=="function",c=s=>s===void 0,I=(s,t={},a="http://www.w3.org/2000/svg")=>{const i=document.createElementNS(a,s);for(const e in t)i.setAttribute(e,t[e]);return i},G=(s,t,a)=>{const i=[];let e="";for(let n=0,r=t.length;n<r;n++)e+=t.charAt(n),s.measureText(e).width>a&&(i.push(e.substring(0,e.length-1)),e="",n--);return i.push(e),i},B=(s,t)=>{const a=I("svg",{xmlns:"http://www.w3.org/2000/svg"}),i=document.createElement("div");i.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),i.style.cssText=`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: ${s.font};
  color: ${t.fontColor};
`,i.innerHTML=`<div class="rich-text-content">${t.content}</div>`,document.body.appendChild(i);const{offsetHeight:e,offsetWidth:n}=i.querySelector(".rich-text-content");document.body.removeChild(i);const r=t.richTextWidth||n||t.width,o=t.richTextHeight||e||t.height,d=I("foreignObject",{width:r.toString(),height:o.toString()});return d.appendChild(i),a.appendChild(d),{element:a,width:r,height:o}},V=s=>`data:image/svg+xml;charset=utf-8,${s.outerHTML.replace(/\n/g,"").replace(/\t/g,"").replace(/#/g,"%23")}`,h=(s,t)=>c(s)?t:s,W=(s,t=void 0,a=void 0)=>{const i=new Image;return i.setAttribute("crossOrigin","Anonymous"),!c(t)&&(i.width=t),!c(a)&&(i.height=a),i.src=s,new Promise(e=>{i.onload=()=>{e(i)}})},_=(s,t,a)=>Array.from({length:s},()=>new Array(t).fill(a)),$={width:300,height:300,rotate:45,layout:"default",auxiliaryLine:!1,translatePlacement:"middle",contentType:"text",content:"hello watermark-js-plus",textType:"fill",imageWidth:0,imageHeight:0,lineHeight:30,zIndex:2147483647,backgroundPosition:"0 0, 0 0",backgroundRepeat:"repeat",fontSize:"20px",fontFamily:"sans-serif",fontStyle:"",fontVariant:"",fontColor:"#000",fontWeight:"normal",filter:"none",globalAlpha:.5,mode:"default",mutationObserve:!0,unique:!0,parent:"body",onSuccess:()=>{},onBeforeDestroy:()=>{},onDestroyed:()=>{},onObserveError:()=>{}},M=(s,t,a)=>{const i=s.getContext("2d");if(i===null)throw new Error("get context error");i.font=`${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`,i.filter=t.filter,t!=null&&t.rotate&&(t.rotate=(360-t.rotate%360)*(Math.PI/180)),c(a.textRowMaxWidth)&&(t.textRowMaxWidth=t.width);const e={image:{rect:{width:t.imageWidth,height:t.imageHeight},position:{x:0,y:0}},textLine:{data:[],yOffsetValue:0},advancedStyleParams:{linear:{x0:0,x1:0},radial:{x0:0,y0:0,r0:0,x1:0,y1:0,r1:0},conic:{x:0,y:0,startAngle:0},pattern:{}}};switch(t.contentType){case"text":e.textLine.data=[t.content];break;case"multi-line-text":e.textLine.data=G(i,t.content,t.textRowMaxWidth);break}let n=t.width/2,r=t.height/2,o="middle",d="center";switch(!c(a==null?void 0:a.translateX)&&!c(a==null?void 0:a.translateY)?(n=a==null?void 0:a.translateX,r=a==null?void 0:a.translateY,o="top",d="left"):(e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.r0=0,e.advancedStyleParams.radial.r1=t.width/2),a.translatePlacement){case"top":n=t.width/2,r=0,o="top",e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"top-start":n=0,r=0,o="top",d="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"top-end":n=t.width,r=0,o="top",d="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"bottom":n=t.width/2,r=t.height,o="bottom",e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=0,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"bottom-start":n=0,r=t.height,o="bottom",d="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"bottom-end":n=t.width,r=t.height,o="bottom",d="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"left":n=0,r=t.height/2,d="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=0;break;case"right":n=t.width,r=t.height/2,d="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=0;break}if(t.translateX=n,t.translateY=r,c(a==null?void 0:a.textBaseline)&&(t.textBaseline=o),c(a==null?void 0:a.textAlign)&&(t.textAlign=d),t.contentType==="multi-line-text")switch(t.textBaseline){case"middle":e.textLine.yOffsetValue=(e.textLine.data.length-1)*t.lineHeight/2;break;case"bottom":case"alphabetic":case"ideographic":e.textLine.yOffsetValue=(e.textLine.data.length-1)*t.lineHeight;break;case"top":case"hanging":e.textLine.yOffsetValue=0;break}return e},z=()=>{typeof window<"u"&&(Object.defineProperty(window,"MutationObserver",{writable:!1,configurable:!1}),Object.defineProperty(window,"requestAnimationFrame",{writable:!1,configurable:!1}))};class F{constructor(t,a){var i,e,n,r;this.options=t,this.partialWidth=this.options.width,this.partialHeight=this.options.height,this.rows=((i=this.options.gridLayoutOptions)==null?void 0:i.rows)||1,this.cols=((e=this.options.gridLayoutOptions)==null?void 0:e.cols)||1,this.matrix=((n=this.options.gridLayoutOptions)==null?void 0:n.matrix)||_(this.rows,this.cols,1),this.gap=((r=this.options.gridLayoutOptions)==null?void 0:r.gap)||[0,0],this.partialCanvas=a}draw(){var i,e;const t=S.createCanvas(this.partialWidth*this.cols+this.gap[0]*this.cols,this.partialHeight*this.rows+this.gap[1]*this.rows),a=t.getContext("2d");for(let n=0;n<this.rows;n++)for(let r=0;r<this.cols;r++)(e=(i=this.matrix)==null?void 0:i[n])!=null&&e[r]&&(a==null||a.drawImage(this.partialCanvas,this.partialWidth*r+this.gap[0]*r,this.partialHeight*n+this.gap[1]*n,this.partialWidth,this.partialHeight));return t}}const X=(s,t)=>{switch(s.layout){case"grid":return new F(s,t).draw();default:return t}},Y=s=>{var t,a,i;switch(s.layout){case"grid":{const e=((t=s.gridLayoutOptions)==null?void 0:t.cols)||1,n=((a=s.gridLayoutOptions)==null?void 0:a.rows)||1,r=((i=s.gridLayoutOptions)==null?void 0:i.gap)||[0,0];return[s.width*e+r[0]*e,s.height*n+r[1]*n]}default:return[s.width,s.height]}};class S{constructor(t={}){this.parentElement=document.body,this.props=t,this.options=Object.assign({},$,t),this.changeParentElement(this.options.parent),this.canvas=S.createCanvas(this.options.width,this.options.height),this.recommendOptions=M(this.canvas,this.options,this.props),z()}static createCanvas(t,a){var n;const i=window.devicePixelRatio||1,e=document.createElement("canvas");return e.width=t*i,e.height=a*i,e.style.width=`${t}px`,e.style.height=`${a}px`,(n=e.getContext("2d"))==null||n.setTransform(i,0,0,i,0,0),e}changeOptions(t={},a="overwrite"){this.initConfigData(t,a)}async create(){var r,o,d,l;if(!this.validateUnique()||!this.validateContent())return;const t=c(this.watermarkDom);await this.draw(),this.layoutCanvas=X(this.options,this.canvas);const a=j(this.layoutCanvas);this.clearCanvas(),this.watermarkDom=document.createElement("div");const i=document.createElement("div");this.watermarkDom.__WATERMARK__="watermark",this.watermarkDom.__WATERMARK__INSTANCE__=this;const e=this.checkParentElementType();this.watermarkDom.style.cssText=`
      z-index: ${this.options.zIndex}!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;
      ${e==="custom"?"top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;":"position:relative!important;"}
    `;const n=Y(this.options);if(i.style.cssText=`
      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;
      position:${e==="root"?"fixed":"absolute"}!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;
      z-index:${this.options.zIndex}!important;background-image:url(${a})!important;background-repeat:${this.options.backgroundRepeat}!important;
      background-size:${n[0]}px ${n[1]}px!important;background-position:${this.options.backgroundPosition}!important;
    `,this.watermarkDom.append(i),this.parentElement.appendChild(this.watermarkDom),this.options.mutationObserve)try{this.bindMutationObserve()}catch{(o=(r=this.options).onObserveError)==null||o.call(r)}t&&((l=(d=this.options).onSuccess)==null||l.call(d))}destroy(){var t,a,i,e,n,r,o;(a=(t=this.options).onBeforeDestroy)==null||a.call(t),(i=this.observer)==null||i.disconnect(),(e=this.parentObserve)==null||e.disconnect(),c(this.checkWatermarkElementRequestID)||cancelAnimationFrame(this.checkWatermarkElementRequestID),(n=this.watermarkDom)==null||n.remove(),(o=(r=this.options).onDestroyed)==null||o.call(r)}async check(){document.body.contains(this.watermarkDom)||(this.destroy(),await this.create())}initConfigData(t,a="overwrite"){this.props=t,a==="overwrite"?this.options=Object.assign({},$,t):Object.keys(t).forEach(i=>{this.options[i]=t[i]}),this.changeParentElement(this.options.parent),this.canvas=S.createCanvas(this.options.width,this.options.height),this.recommendOptions=M(this.canvas,this.options,this.props)}changeParentElement(t){if(typeof t=="string"){const a=document.querySelector(t);a&&(this.parentElement=a)}else this.parentElement=t}validateUnique(){let t=!0;return this.options.unique&&this.parentElement.childNodes.forEach(a=>{t&&Object.hasOwnProperty.call(a,"__WATERMARK__")&&(t=!1)}),t}validateContent(){switch(this.options.contentType){case"image":return Object.hasOwnProperty.call(this.options,"image");case"multi-line-text":case"rich-text":case"text":return this.options.content.length>0}return!1}draw(){const t=this.canvas.getContext("2d");if(t===null)throw new Error("get context error");return this.options.auxiliaryLine&&(t.beginPath(),t.rect(1,1,this.options.width,this.options.height),t.lineWidth=1,t.strokeStyle="#000",t.stroke(),t.closePath(),t.beginPath(),t.rect(this.options.translateX,this.options.translateY,1,1),t.lineWidth=1,t.strokeStyle="#f00",t.stroke(),t.closePath()),this.setStyle(t),t.save(),t.translate(this.options.translateX,this.options.translateY),t.rotate(this.options.rotate),new Promise(a=>{switch(this.options.contentType){case"text":this.drawText(t,a);break;case"image":this.drawImage(t,a);break;case"multi-line-text":this.drawMultiLineText(t,a);break;case"rich-text":this.drawRichText(t,a);break}})}setStyle(t){var e;let a="fillStyle";this.options.textType==="stroke"&&(a="strokeStyle");let i=this.options.fontColor;if((e=this.options)!=null&&e.advancedStyle)switch(this.options.advancedStyle.type){case"linear":i=this.createLinearGradient(t);break;case"radial":i=this.createRadialGradient(t);break;case"conic":i=this.createConicGradient(t);break;case"pattern":i=this.createPattern(t);break}t[a]&&i&&(t[a]=i),this.options.textAlign&&(t.textAlign=this.options.textAlign),this.options.textBaseline&&(t.textBaseline=this.options.textBaseline),t.globalAlpha=this.options.globalAlpha,this.options.shadowStyle&&(t.shadowBlur=h(this.options.shadowStyle.shadowBlur,0),t.shadowColor=h(this.options.shadowStyle.shadowColor,"#00000000"),t.shadowOffsetX=h(this.options.shadowStyle.shadowOffsetX,0),t.shadowOffsetY=h(this.options.shadowStyle.shadowOffsetY,0)),q(this.options.extraDrawFunc)&&this.options.extraDrawFunc(t)}createLinearGradient(t){var i,e,n,r,o,d,l,m,y,w,p,g,x,u,v;const a=t.createLinearGradient(h((n=(e=(i=this.options.advancedStyle)==null?void 0:i.params)==null?void 0:e.linear)==null?void 0:n.x0,this.recommendOptions.advancedStyleParams.linear.x0),h((d=(o=(r=this.options.advancedStyle)==null?void 0:r.params)==null?void 0:o.linear)==null?void 0:d.y0,0),h((y=(m=(l=this.options.advancedStyle)==null?void 0:l.params)==null?void 0:m.linear)==null?void 0:y.x1,this.recommendOptions.advancedStyleParams.linear.x1),h((g=(p=(w=this.options.advancedStyle)==null?void 0:w.params)==null?void 0:p.linear)==null?void 0:g.y1,0));return(v=(u=(x=this.options)==null?void 0:x.advancedStyle)==null?void 0:u.colorStops)==null||v.forEach(f=>{a.addColorStop(f.offset,f.color)}),a}createConicGradient(t){var i,e,n,r,o,d,l,m,y,w,p,g,x,u,v;const a=t.createConicGradient(h((r=(n=(e=(i=this.options)==null?void 0:i.advancedStyle)==null?void 0:e.params)==null?void 0:n.conic)==null?void 0:r.startAngle,0),h((m=(l=(d=(o=this.options)==null?void 0:o.advancedStyle)==null?void 0:d.params)==null?void 0:l.conic)==null?void 0:m.x,this.recommendOptions.advancedStyleParams.conic.x),h((g=(p=(w=(y=this.options)==null?void 0:y.advancedStyle)==null?void 0:w.params)==null?void 0:p.conic)==null?void 0:g.y,this.recommendOptions.advancedStyleParams.conic.y));return(v=(u=(x=this.options)==null?void 0:x.advancedStyle)==null?void 0:u.colorStops)==null||v.forEach(f=>{a.addColorStop(f.offset,f.color)}),a}createRadialGradient(t){var i,e,n,r,o,d,l,m,y,w,p,g,x,u,v,f,b,P,k,O,L,E,C,D,T,A,H;const a=t.createRadialGradient(h((r=(n=(e=(i=this.options)==null?void 0:i.advancedStyle)==null?void 0:e.params)==null?void 0:n.radial)==null?void 0:r.x0,this.recommendOptions.advancedStyleParams.radial.x0),h((m=(l=(d=(o=this.options)==null?void 0:o.advancedStyle)==null?void 0:d.params)==null?void 0:l.radial)==null?void 0:m.y0,this.recommendOptions.advancedStyleParams.radial.y0),h((g=(p=(w=(y=this.options)==null?void 0:y.advancedStyle)==null?void 0:w.params)==null?void 0:p.radial)==null?void 0:g.r0,this.recommendOptions.advancedStyleParams.radial.r0),h((f=(v=(u=(x=this.options)==null?void 0:x.advancedStyle)==null?void 0:u.params)==null?void 0:v.radial)==null?void 0:f.x1,this.recommendOptions.advancedStyleParams.radial.x1),h((O=(k=(P=(b=this.options)==null?void 0:b.advancedStyle)==null?void 0:P.params)==null?void 0:k.radial)==null?void 0:O.y1,this.recommendOptions.advancedStyleParams.radial.y1),h((D=(C=(E=(L=this.options)==null?void 0:L.advancedStyle)==null?void 0:E.params)==null?void 0:C.radial)==null?void 0:D.r1,this.recommendOptions.advancedStyleParams.radial.r1));return(H=(A=(T=this.options)==null?void 0:T.advancedStyle)==null?void 0:A.colorStops)==null||H.forEach(R=>{a.addColorStop(R.offset,R.color)}),a}createPattern(t){var a,i,e,n,r,o,d,l;return t.createPattern((n=(e=(i=(a=this.options)==null?void 0:a.advancedStyle)==null?void 0:i.params)==null?void 0:e.pattern)==null?void 0:n.image,((l=(d=(o=(r=this.options)==null?void 0:r.advancedStyle)==null?void 0:o.params)==null?void 0:d.pattern)==null?void 0:l.repetition)||"")}setText(t,a){let i="fillText";this.options.textType==="stroke"&&(i="strokeText"),t[i]&&t[i](a.text,a.x,a.y,a.maxWidth)}drawText(t,a){this.setText(t,{text:this.options.content,x:0,y:0,maxWidth:this.options.textRowMaxWidth||this.options.width}),a(t.canvas)}drawImage(t,a){W(this.options.image).then(i=>{const{width:e,height:n}=this.getImageRect(i),r=this.getDrawImagePosition(e,n);t.drawImage(i,r.x,r.y,e,n),a(t.canvas)})}drawMultiLineText(t,a){const i=this.recommendOptions.textLine.data,e=this.recommendOptions.textLine.yOffsetValue;i.forEach((n,r)=>{this.setText(t,{text:n,x:0,y:this.options.lineHeight*r-e})}),a(t.canvas)}drawRichText(t,a){const i=B(t,this.options);W(V(i.element),i.width,i.height).then(e=>{const n=this.getDrawImagePosition(e.width,e.height);t.drawImage(e,n.x,n.y,t.canvas.width,t.canvas.height),a(t.canvas)})}getImageRect(t){const a={width:this.options.imageWidth||0,height:this.options.imageHeight||0};switch(!0){case(a.width!==0&&a.height===0):a.height=a.width*t.height/t.width;break;case(a.width===0&&a.height!==0):a.width=a.height*t.width/t.height;break;case(a.width===0&&a.height===0):a.width=t.width,a.height=t.height;break}return a}getDrawImagePosition(t,a){var e,n;const i={x:-t/2,y:-a/2};switch(this.options.translatePlacement){case"top":i.x=-t/2,i.y=0;break;case"top-start":i.x=0,i.y=0;break;case"top-end":i.x=-t,i.y=0;break;case"bottom":i.x=-t/2,i.y=-a;break;case"bottom-start":i.x=0,i.y=-a;break;case"bottom-end":i.x=-t,i.y=-a;break;case"left":i.x=0,i.y=-a/2;break;case"right":i.x=-t,i.y=-a/2;break}return!c((e=this.props)==null?void 0:e.translateX)&&(i.x=0),!c((n=this.props)==null?void 0:n.translateY)&&(i.y=0),i}checkParentElementType(){return["html","body"].includes(this.parentElement.tagName.toLocaleLowerCase())?"root":"custom"}async checkWatermarkElement(){document.body.contains(this.watermarkDom)||(this.destroy(),await this.create()),this.checkWatermarkElementRequestID=requestAnimationFrame(this.checkWatermarkElement.bind(this))}bindMutationObserve(){this.watermarkDom&&(this.checkWatermarkElementRequestID=requestAnimationFrame(this.checkWatermarkElement.bind(this)),this.observer=new MutationObserver(async t=>{t.length>0&&(this.destroy(),await this.create())}),this.observer.observe(this.watermarkDom,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),this.parentObserve=new MutationObserver(async t=>{var a;for(const i of t)((i==null?void 0:i.target)===this.watermarkDom||((a=i==null?void 0:i.removedNodes)==null?void 0:a[0])===this.watermarkDom||i.type==="childList"&&i.target===this.parentElement&&i.target.lastChild!==this.watermarkDom)&&(this.destroy(),await this.create())}),this.parentObserve.observe(this.parentElement,{attributes:!0,childList:!0,subtree:!0,characterData:!0}))}clearCanvas(){const t=this.canvas.getContext("2d");if(t===null)throw new Error("get context error");t.restore(),t.clearRect(0,0,this.canvas.width,this.canvas.height)}}export{S as W,j as c,q as i,W as l};
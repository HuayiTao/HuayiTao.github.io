/*! For license information please see 543d92c6191a4e0a5985d9e2ee0f5986fb92d182-fb1279e135f7f674477f.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[400],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},9013:function(e,t,r){"use strict";var n=r(7294),a=r(5692),s=r(1945);t.Z=function(e){const{title:t,image:r,description:o,price:i,handleClick:c}=e;return n.createElement(a.Z,{style:{width:"18rem"}},n.createElement(a.Z.Img,{variant:"top",src:r}),n.createElement(a.Z.Body,null,n.createElement(a.Z.Title,null,t," - ",i," Baht"),n.createElement(s.Z,{variant:"primary",onClick:c},"Add to Cart")))}},1945:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4184),a=r.n(n),s=r(7294),o=r(5893);const i=["as","disabled"];function c({tagName:e,disabled:t,href:r,target:n,rel:a,role:s,onClick:o,tabIndex:i=0,type:c}){e||(e=null!=r||null!=n||null!=a?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},l];const u=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==o||o(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},l]}const l=s.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);const[s,{tagName:l}]=c(Object.assign({tagName:r,disabled:n},a));return(0,o.jsx)(l,Object.assign({},a,s,{ref:t}))}));l.displayName="Button";var u=r(6792);const f=s.forwardRef((({as:e,bsPrefix:t,variant:r,size:n,active:s,className:i,...l},f)=>{const d=(0,u.vE)(t,"btn"),[p,{tagName:v}]=c({tagName:e,...l}),m=v;return(0,o.jsx)(m,{...p,...l,ref:f,className:a()(i,d,s&&"active",r&&`${d}-${r}`,n&&`${d}-${n}`,l.href&&l.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var d=f},2086:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,size:t,vertical:r,className:n,as:s="div",...c},l)=>{const u=(0,o.vE)(e,"btn-group");let f=u;return r&&(f=`${u}-vertical`),(0,i.jsx)(s,{...c,ref:l,className:a()(n,f,t&&`${u}-${t}`)})}));c.displayName="ButtonGroup",c.defaultProps={vertical:!1,role:"group"},t.Z=c},5692:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(4680),c=r(9602),l=r(5893);const u=s.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...s},i)=>{const c=(0,o.vE)(e,"card-img");return(0,l.jsx)(n,{ref:i,className:a()(r?`${c}-${r}`:c,t),...s})}));u.displayName="CardImg";var f=u;const d=s.createContext(null);d.displayName="CardHeaderContext";var p=d;const v=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},i)=>{const c=(0,o.vE)(e,"card-header"),u=(0,s.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,l.jsx)(p.Provider,{value:u,children:(0,l.jsx)(r,{ref:i,...n,className:a()(t,c)})})}));v.displayName="CardHeader";var m=v;const b=(0,c.Z)("h5"),y=(0,c.Z)("h6"),g=(0,i.Z)("card-body"),x=(0,i.Z)("card-title",{Component:b}),N=(0,i.Z)("card-subtitle",{Component:y}),h=(0,i.Z)("card-link",{Component:"a"}),C=(0,i.Z)("card-text",{Component:"p"}),$=(0,i.Z)("card-footer"),w=(0,i.Z)("card-img-overlay"),Z=s.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:s,body:i,children:c,as:u="div",...f},d)=>{const p=(0,o.vE)(e,"card");return(0,l.jsx)(u,{ref:d,...f,className:a()(t,p,r&&`bg-${r}`,n&&`text-${n}`,s&&`border-${s}`),children:i?(0,l.jsx)(g,{children:c}):c})}));Z.displayName="Card",Z.defaultProps={body:!1};var j=Object.assign(Z,{Img:f,Title:x,Subtitle:N,Body:g,Link:h,Text:C,Header:m,Footer:$,ImgOverlay:w})},1555:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef(((e,t)=>{const[{className:r,...n},{as:s="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,o.vE)(t,"col");const s=(0,o.pi)(),i=(0,o.zG)(),c=[],l=[];return s.forEach((e=>{const r=n[e];let a,s,o;delete n[e],"object"==typeof r&&null!=r?({span:a,offset:s,order:o}=r):a=r;const u=e!==i?`-${e}`:"";a&&c.push(!0===a?`${t}${u}`:`${t}${u}-${a}`),null!=o&&l.push(`order${u}-${o}`),null!=s&&l.push(`offset${u}-${s}`)})),[{...n,className:a()(r,...c,...l)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(s,{...n,ref:t,className:a()(r,!l.length&&c)})}));c.displayName="Col",t.Z=c},682:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...s},c)=>{const l=(0,o.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:c,...s,className:a()(n,t?`${l}${u}`:l)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},4051:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const c=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},s)=>{const c=(0,o.vE)(e,"row"),l=(0,o.pi)(),u=(0,o.zG)(),f=`${c}-cols`,d=[];return l.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==u?`-${e}`:"";null!=r&&d.push(`${f}${a}-${r}`)})),(0,i.jsx)(r,{ref:s,...n,className:a()(t,c,...d)})}));c.displayName="Row",t.Z=c},6792:function(e,t,r){"use strict";r.d(t,{SC:function(){return f},pi:function(){return l},vE:function(){return c},zG:function(){return u}});var n=r(7294);r(5893);const a=["xxl","xl","lg","md","sm","xs"],s=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:o,Provider:i}=s;function c(e,t){const{prefixes:r}=(0,n.useContext)(s);return e||r[t]||t}function l(){const{breakpoints:e}=(0,n.useContext)(s);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(s);return e}function f(){const{dir:e}=(0,n.useContext)(s);return"rtl"===e}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4184),a=r.n(n),s=/-(.)/g;var o=r(7294),i=r(6792),c=r(5893);const l=e=>{return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=l(e),Component:r,defaultProps:n}={}){const s=o.forwardRef((({className:t,bsPrefix:n,as:s=r||"div",...o},l)=>{const u=(0,i.vE)(n,e);return(0,c.jsx)(s,{ref:l,className:a()(t,u),...o})}));return s.defaultProps=n,s.displayName=t,s}},9602:function(e,t,r){"use strict";var n=r(7294),a=r(4184),s=r.n(a),o=r(5893);t.Z=e=>n.forwardRef(((t,r)=>(0,o.jsx)("div",{...t,ref:r,className:s()(t.className,e)})))},30:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),a=function(){};var s="undefined"!=typeof window,o=function(e,t,r){if(!s)return[t,a,a];if(!e)throw new Error("useLocalStorage key may not be falsy");var o=r?r.raw?function(e){return e}:r.deserializer:JSON.parse,i=(0,n.useRef)((function(e){try{var n=r?r.raw?String:r.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?o(a):(t&&localStorage.setItem(e,n(t)),t)}catch(c){return t}})),c=(0,n.useState)((function(){return i.current(e)})),l=c[0],u=c[1];(0,n.useLayoutEffect)((function(){return u(i.current(e))}),[e]);var f=(0,n.useCallback)((function(t){try{var n="function"==typeof t?t(l):t;if(void 0===n)return;var a=void 0;a=r?r.raw?"string"==typeof n?n:JSON.stringify(n):r.serializer?r.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(e,a),u(o(a))}catch(c){}}),[e,u]),d=(0,n.useCallback)((function(){try{localStorage.removeItem(e),u(void 0)}catch(c){}}),[e,u]);return[l,f,d]}}}]);
//# sourceMappingURL=543d92c6191a4e0a5985d9e2ee0f5986fb92d182-fb1279e135f7f674477f.js.map
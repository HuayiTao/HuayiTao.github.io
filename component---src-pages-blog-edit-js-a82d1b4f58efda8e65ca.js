"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[190],{7447:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(7294),a=n(1883),l=n(682),r=n(4051),c=n(7833),s=n(1945);n(3945);function u(e){console.log(e.location);const t=new URLSearchParams(e.location.search);console.log(t.get("id"));const n="https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs",u=o.useRef({}),[i,p]=o.useState([]),[d,f]=o.useState([]),[h,m]=o.useState(!0);o.useState((()=>{fetch(n+"/"+t.get("id")).then((e=>e.json())).then((e=>{console.log(e),u.current.topic.value=e.topic,u.current.content.value=e.content,u.current.author.value=e.author}))}),[]);return o.createElement(l.Z,null,o.createElement("h1",null,"Edit Blog"),o.createElement(a.Link,{to:"/blog"},"Blog Home"),o.createElement(r.Z,null,o.createElement(c.Z,{ref:u},o.createElement(c.Z.Group,{controlId:"topic"},o.createElement(c.Z.Label,null,"Topic"),o.createElement(c.Z.Control,{type:"text",placeholder:"Enter topic"})),o.createElement(c.Z.Group,{controlId:"content"},o.createElement(c.Z.Label,null,"Content"),o.createElement(c.Z.Control,{as:"textarea",rows:3})),o.createElement(c.Z.Group,{controlId:"author"},o.createElement(c.Z.Label,null,"Author"),o.createElement(c.Z.Control,{type:"text",placeholder:"Enter author"})),o.createElement(s.Z,{variant:"dark",onClick:e=>{e.preventDefault();const o={_id:t.get("id"),topic:u.current.topic.value,content:u.current.content.value,author:u.current.author.value};console.log(o),fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>e.json())).then((e=>{console.log("Updated",e),alert("Updated")}))}},"Save"))))}},682:function(e,t,n){var o=n(4184),a=n.n(o),l=n(7294),r=n(6792),c=n(5893);const s=l.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:o,...l},s)=>{const u=(0,r.vE)(e,"container"),i="string"==typeof t?`-${t}`:"-fluid";return(0,c.jsx)(n,{ref:s,...l,className:a()(o,t?`${u}${i}`:u)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},4051:function(e,t,n){var o=n(4184),a=n.n(o),l=n(7294),r=n(6792),c=n(5893);const s=l.forwardRef((({bsPrefix:e,className:t,as:n="div",...o},l)=>{const s=(0,r.vE)(e,"row"),u=(0,r.pi)(),i=(0,r.zG)(),p=`${s}-cols`,d=[];return u.forEach((e=>{const t=o[e];let n;delete o[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a=e!==i?`-${e}`:"";null!=n&&d.push(`${p}${a}-${n}`)})),(0,c.jsx)(n,{ref:l,...o,className:a()(t,s,...d)})}));s.displayName="Row",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-blog-edit-js-a82d1b4f58efda8e65ca.js.map
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[265],{5857:function(e,t,l){l.r(t);var a=l(5785),n=l(7294),c=l(682),r=l(2086),s=l(1945),i=l(4051),u=l(1555),m=l(9013),o=l(30);t.default=function(){const[e,t]=(0,o.Z)("coffee","Latte");let[l,f]=n.useState([]),[h,E]=n.useState("iced"),[Z,p]=(0,o.Z)("cart",[]);function d(e){Z.push(e),console.table(Z),p((0,a.Z)(Z))}return n.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/coffee/"+h).then((e=>e.json())).then((t=>{for(let l=0;l<t.length;l++)e.push(n.createElement(m.Z,{key:l,image:t[l].image,title:t[l].title,description:t[l].description,price:59,handleClick:()=>{d(t[l])}}));f(e)}))}),[h]),n.createElement(c.Z,null,n.createElement("h1",null,"POS"),n.createElement(r.Z,{"aria-label":"Basic example"},n.createElement(s.Z,{variant:"secondary",onClick:()=>{E("hot")}},"Hot"),n.createElement(s.Z,{variant:"secondary",onClick:()=>{E("iced")}},"Iced")),n.createElement(i.Z,null,n.createElement(u.Z,null,n.createElement(i.Z,null,l)),n.createElement(u.Z,{sm:3},n.createElement("h2",null,"Cart ",e),Z.map(((e,t)=>n.createElement(i.Z,{key:t},n.createElement(u.Z,null,e.title),n.createElement(u.Z,null,59)))),n.createElement(i.Z,null,"Total: ",59*Z.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-wine-pos-index-js-a4dc5633f7e187c107cc.js.map
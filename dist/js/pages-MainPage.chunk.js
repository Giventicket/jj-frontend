exports.ids=[1],exports.modules={16:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(3),i=r(5),c={padding:"0.375rem 0.75rem",color:"black","&:hover":{color:"red"}},l=function(t){var e=t.children,r=t.to;return Object(n.jsx)(i.Link,{style:c,to:r,children:e})},a=r(19),s={backgroundColor:"#f1f3f5"},d={lineHeight:"10rem",width:"80%",margin:"0 auto"},u={paddingLeft:"0.75rem"},j={textAlign:"end"},b=function(){return Object(n.jsx)(a.Box,{height:"10rem",style:s,children:Object(n.jsxs)(a.Grid,{container:!0,style:d,children:[Object(n.jsx)(a.Grid,{item:!0,xs:!0,style:u,children:"J&J"}),Object(n.jsxs)(a.Grid,{item:!0,xs:!0,style:j,children:[Object(n.jsx)(l,{to:"/",children:"Home"}),Object(n.jsx)(l,{to:"/about",children:"About"}),Object(n.jsx)(l,{to:"/blog",children:"Blog"}),Object(n.jsx)(l,{to:"/contactus",children:"Contact Us"})]})]})})},h={backgroundColor:"#f8f0fc"},f={backgroundColor:"#f8f0fc",lineHeight:"10rem",width:"80%",margin:"0 auto"},g=function(){return Object(n.jsx)(a.Box,{height:"10rem",style:h,children:Object(n.jsx)(a.Grid,{container:!0,style:f,children:"About Us Panel"})})},m={backgroundColor:"#f3d9fa"},x={lineHeight:"10rem",width:"80%",margin:"0 auto"},y=function(){return Object(n.jsx)(a.Box,{height:"10rem",style:m,children:Object(n.jsx)(a.Grid,{container:!0,style:x,children:"Blog Panel"})})},O={backgroundColor:"#f8f0fc"},p={lineHeight:"10rem",width:"80%",margin:"0 auto"},v=function(){return Object(n.jsx)(a.Box,{height:"10rem",style:O,children:Object(n.jsx)(a.Grid,{container:!0,style:p,children:"Contact Us Panel"})})},k={backgroundColor:"f1f3f5",lineHeight:"10rem",width:"80%",margin:"0 auto"},w=function(){return Object(n.jsx)(a.Box,{height:"10rem",children:Object(n.jsx)(a.Grid,{container:!0,style:k,children:"Footer"})})},A=r.p+"static/media/testImage.56548690.jpg";function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(t){var e=t.src,r=t.style,i=B(Object(o.useState)("false"),2),c=i[0],l=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{alt:"loading",src:e,style:{display:"none"},onLoad:function(){l(!0)}}),c&&Object(n.jsx)("img",{alt:"actual",src:e,style:r})]})},S={display:"block"};e.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{}),Object(n.jsx)(G,{src:A,style:S}),Object(n.jsx)(g,{}),Object(n.jsx)(y,{}),Object(n.jsx)(v,{}),Object(n.jsx)(w,{})]})}}};
(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[11],{130:function(e,a,t){"use strict";var r=t(1),l=t(3),n=t(5),c=t.n(n),s=t(0),i=t.n(s),o=t(20),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,s=e.className,o=e.type,m=Object(l.a)(e,["as","className","type"]);return i.a.createElement(n,Object(r.a)({},m,{ref:a,className:c()(s,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"},a.a=u},131:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r={baseURL:"http://localhost:1337/api/"};localStorage.getItem("session_token")},140:function(e,a,t){"use strict";var r=t(1),l=t(3),n=t(5),c=t.n(n),s=t(0),i=t.n(s),o=(t(81),t(130)),m=i.a.createContext({controlId:void 0}),d=t(8),u=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,b=e.isValid,f=e.isInvalid,p=e.isStatic,v=e.as,O=void 0===v?"input":v,j=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),N=Object(s.useContext)(m),y=N.controlId;return n=N.custom?Object(d.b)(o,"custom-control-input"):Object(d.b)(n,"form-check-input"),i.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,className:c()(u,n,b&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));u.displayName="FormCheckInput",u.defaultProps={type:"checkbox"};var b=u,f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,u=e.htmlFor,b=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(s.useContext)(m),p=f.controlId;return t=f.custom?Object(d.b)(n,"custom-control-label"):Object(d.b)(t,"form-check-label"),i.a.createElement("label",Object(r.a)({},b,{ref:a,htmlFor:u||p,className:c()(o,t)}))}));f.displayName="FormCheckLabel";var p=f,v=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,u=e.bsCustomPrefix,f=e.inline,v=e.disabled,O=e.isValid,j=e.isInvalid,N=e.feedback,y=e.className,h=e.style,x=e.title,E=e.type,C=e.label,g=e.children,P=e.custom,F=e.as,w=void 0===F?"input":F,I=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===E||P;n=k?Object(d.b)(u,"custom-control"):Object(d.b)(n,"form-check");var S=Object(s.useContext)(m).controlId,R=Object(s.useMemo)((function(){return{controlId:t||S,custom:k}}),[S,k,t]),V=null!=C&&!1!==C&&!g,L=i.a.createElement(b,Object(r.a)({},I,{type:"switch"===E?"checkbox":E,ref:a,isValid:O,isInvalid:j,isStatic:!V,disabled:v,as:w}));return i.a.createElement(m.Provider,{value:R},i.a.createElement("div",{style:h,className:c()(y,n,k&&"custom-"+E,f&&n+"-inline")},g||i.a.createElement(i.a.Fragment,null,L,V&&i.a.createElement(p,{title:x},C),(O||j)&&i.a.createElement(o.a,{type:O?"valid":"invalid"},N))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=b,v.Label=p;var O=v,j=(t(50),i.a.forwardRef((function(e,a){var t,n,o=e.bsPrefix,u=e.type,b=e.size,f=e.id,p=e.className,v=e.isValid,O=e.isInvalid,j=e.plaintext,N=e.readOnly,y=e.as,h=void 0===y?"input":y,x=Object(l.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(s.useContext)(m).controlId;if(o=Object(d.b)(o,"form-control"),j)(n={})[o+"-plaintext"]=!0,t=n;else if("file"===u){var C;(C={})[o+"-file"]=!0,t=C}else{var g;(g={})[o]=!0,g[o+"-"+b]=b,t=g}return i.a.createElement(h,Object(r.a)({},x,{type:u,ref:a,readOnly:N,id:f||E,className:c()(p,t,v&&"is-valid",O&&"is-invalid")}))})));j.displayName="FormControl",j.Feedback=o.a;var N=j,y=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,u=e.controlId,b=e.as,f=void 0===b?"div":b,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(d.b)(t,"form-group");var v=Object(s.useMemo)((function(){return{controlId:u}}),[u]);return i.a.createElement(m.Provider,{value:v},i.a.createElement(f,Object(r.a)({},p,{ref:a,className:c()(n,t)}),o))}));y.displayName="FormGroup";var h=y,x=["xl","lg","md","sm","xs"],E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.as,o=void 0===s?"div":s,m=Object(l.a)(e,["bsPrefix","className","as"]),u=Object(d.b)(t,"col"),b=[],f=[];return x.forEach((function(e){var a,t,r,l=m[e];if(delete m[e],null!=l&&"object"===typeof l){var n=l.span;a=void 0===n||n,t=l.offset,r=l.order}else a=l;var c="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+u+c:""+u+c+"-"+a),null!=r&&f.push("order"+c+"-"+r),null!=t&&f.push("offset"+c+"-"+t)})),b.length||b.push(u),i.a.createElement(o,Object(r.a)({},m,{ref:a,className:c.a.apply(void 0,[n].concat(b,f))}))}));E.displayName="Col";var C=E,g=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.column,o=e.srOnly,u=e.className,b=e.htmlFor,f=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(s.useContext)(m).controlId;t=Object(d.b)(t,"form-label");var v=c()(u,t,o&&"sr-only",n&&"col-form-label");return b=b||p,n?i.a.createElement(C,Object(r.a)({as:"label",className:v,htmlFor:b},f)):i.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:b},f))}));g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var P=g,F=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.as,o=void 0===s?"small":s,m=e.muted,u=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(d.b)(t,"form-text"),i.a.createElement(o,Object(r.a)({},u,{ref:a,className:c()(n,t,m&&"text-muted")}))}));F.displayName="FormText";var w=F,I=i.a.forwardRef((function(e,a){return i.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));I.displayName="Switch",I.Input=O.Input,I.Label=O.Label;var k=I,S=t(51),R=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,s=e.className,o=e.validated,m=e.as,u=void 0===m?"form":m,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(d.b)(t,"form"),i.a.createElement(u,Object(r.a)({},b,{ref:a,className:c()(s,o&&"was-validated",n&&t+"-inline")}))}));R.displayName="Form",R.defaultProps={inline:!1},R.Row=Object(S.a)("form-row"),R.Group=h,R.Control=N,R.Check=O,R.Switch=k,R.Label=P,R.Text=w;a.a=R},393:function(e,a,t){"use strict";t.r(a);var r=t(135),l=t.n(r),n=t(136),c=t(138),s=t(0),i=t.n(s),o=t(140),m=t(7),d=t(137),u=t.n(d),b=t(131),f=u.a.create(b.a);a.default=function(){var e=Object(s.useState)(null),a=Object(c.a)(e,2),t=a[0],r=a[1],d=Object(s.useState)(!1),u=Object(c.a)(d,2),b=u[0],p=u[1],v=Object(s.useState)(null),O=Object(c.a)(v,2),j=(O[0],O[1],Object(s.useState)(null)),N=Object(c.a)(j,2),y=N[0],h=N[1],x=Object(s.useState)(null),E=Object(c.a)(x,2),C=E[0],g=E[1],P=Object(s.useState)([]),F=Object(c.a)(P,2),w=F[0],I=F[1],k=Object(s.useState)([]),S=Object(c.a)(k,2),R=(S[0],S[1]),V=Object(s.useState)([]),L=Object(c.a)(V,2),G=L[0],q=L[1],T=function(){var e=Object(n.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/productos?filters[$and][0][estado][$eq]=true");case 3:return a=e.sent,e.next=6,f.get("/clientes?filters[$and][0][estado][$eq]=true");case 6:t=e.sent,q(t.data),R(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){T()}),[]),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Crear movimiento"),i.a.createElement("p",{className:"card-description"}," "),i.a.createElement(o.a,{className:"forms-sample",noValidate:!0,validated:b,onSubmit:function(e){e.preventDefault();var a=e.currentTarget;console.log(a),!1===a.checkValidity()&&e.stopPropagation(),p(!0)}},i.a.createElement(o.a.Group,null,i.a.createElement("label",{htmlFor:"exampleSelectProducto"},"producto"),i.a.createElement("select",{value:w,onChange:function(e){return I(e.target.value)},className:"form-control",id:"producto"},G.map((function(e){return i.a.createElement("option",{value:e.id},e.attributes.nombre)}))),i.a.createElement(o.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(o.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputCity1"},"Cantidad"),i.a.createElement(o.a.Control,{type:"number",className:"form-control",id:"cantidad",placeholder:"Cantidad",required:!0,value:y,onChange:function(e){return h(e.target.value)}}),i.a.createElement(o.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(o.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputCity1"},"Valor"),i.a.createElement(o.a.Control,{type:"number",className:"form-control",id:"cantidad",placeholder:"Cantidad",required:!0,value:C,onChange:function(e){return g(e.target.value)}}),i.a.createElement(o.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(o.a.Group,null,i.a.createElement("label",null,"Foto"),i.a.createElement("div",{className:"custom-file"},i.a.createElement(o.a.Control,{accept:"image/*",type:"file",className:"form-control visibility-hidden",id:"customFileLang",lang:"es",onChange:function(e){return r(e.target.files[0])}}),i.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileLang"},null==t?"Cargar imagen":t.name))),i.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary mr-2"},"Crear"),i.a.createElement(m.b,{to:"/movimientos",className:"btn btn-gradient-secondary btn-fw"},"Cancelar")))))}}}]);
//# sourceMappingURL=11.2f1b7567.chunk.js.map
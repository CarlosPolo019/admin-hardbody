(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[9],{130:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(5),c=t.n(n),o=t(0),i=t.n(o),s=t(20),m=t.n(s),u={type:m.a.string.isRequired,as:m.a.elementType},d=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,o=e.className,s=e.type,m=Object(r.a)(e,["as","className","type"]);return i.a.createElement(n,Object(l.a)({},m,{ref:a,className:c()(o,s&&s+"-feedback")}))}));d.displayName="Feedback",d.propTypes=u,d.defaultProps={type:"valid"},a.a=d},131:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l={baseURL:"http://localhost:1337/api/"};localStorage.getItem("session_token")},140:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(5),c=t.n(n),o=t(0),i=t.n(o),s=(t(81),t(130)),m=i.a.createContext({controlId:void 0}),u=t(8),d=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,b=e.isValid,p=e.isInvalid,f=e.isStatic,v=e.as,E=void 0===v?"input":v,h=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),N=Object(o.useContext)(m),O=N.controlId;return n=N.custom?Object(u.b)(s,"custom-control-input"):Object(u.b)(n,"form-check-input"),i.a.createElement(E,Object(l.a)({},h,{ref:a,id:t||O,className:c()(d,n,b&&"is-valid",p&&"is-invalid",f&&"position-static")}))}));d.displayName="FormCheckInput",d.defaultProps={type:"checkbox"};var b=d,p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,d=e.htmlFor,b=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(o.useContext)(m),f=p.controlId;return t=p.custom?Object(u.b)(n,"custom-control-label"):Object(u.b)(t,"form-check-label"),i.a.createElement("label",Object(l.a)({},b,{ref:a,htmlFor:d||f,className:c()(s,t)}))}));p.displayName="FormCheckLabel";var f=p,v=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,p=e.inline,v=e.disabled,E=e.isValid,h=e.isInvalid,N=e.feedback,O=e.className,j=e.style,y=e.title,x=e.type,g=e.label,C=e.children,F=e.custom,k=e.as,P=void 0===k?"input":k,I=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),w="switch"===x||F;n=w?Object(u.b)(d,"custom-control"):Object(u.b)(n,"form-check");var S=Object(o.useContext)(m).controlId,R=Object(o.useMemo)((function(){return{controlId:t||S,custom:w}}),[S,w,t]),G=null!=g&&!1!==g&&!C,_=i.a.createElement(b,Object(l.a)({},I,{type:"switch"===x?"checkbox":x,ref:a,isValid:E,isInvalid:h,isStatic:!G,disabled:v,as:P}));return i.a.createElement(m.Provider,{value:R},i.a.createElement("div",{style:j,className:c()(O,n,w&&"custom-"+x,p&&n+"-inline")},C||i.a.createElement(i.a.Fragment,null,_,G&&i.a.createElement(f,{title:y},g),(E||h)&&i.a.createElement(s.a,{type:E?"valid":"invalid"},N))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=b,v.Label=f;var E=v,h=(t(50),i.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,d=e.type,b=e.size,p=e.id,f=e.className,v=e.isValid,E=e.isInvalid,h=e.plaintext,N=e.readOnly,O=e.as,j=void 0===O?"input":O,y=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(o.useContext)(m).controlId;if(s=Object(u.b)(s,"form-control"),h)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===d){var g;(g={})[s+"-file"]=!0,t=g}else{var C;(C={})[s]=!0,C[s+"-"+b]=b,t=C}return i.a.createElement(j,Object(l.a)({},y,{type:d,ref:a,readOnly:N,id:p||x,className:c()(f,t,v&&"is-valid",E&&"is-invalid")}))})));h.displayName="FormControl",h.Feedback=s.a;var N=h,O=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,d=e.controlId,b=e.as,p=void 0===b?"div":b,f=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.b)(t,"form-group");var v=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return i.a.createElement(m.Provider,{value:v},i.a.createElement(p,Object(l.a)({},f,{ref:a,className:c()(n,t)}),s))}));O.displayName="FormGroup";var j=O,y=["xl","lg","md","sm","xs"],x=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,s=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(u.b)(t,"col"),b=[],p=[];return y.forEach((function(e){var a,t,l,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var n=r.span;a=void 0===n||n,t=r.offset,l=r.order}else a=r;var c="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+d+c:""+d+c+"-"+a),null!=l&&p.push("order"+c+"-"+l),null!=t&&p.push("offset"+c+"-"+t)})),b.length||b.push(d),i.a.createElement(s,Object(l.a)({},m,{ref:a,className:c.a.apply(void 0,[n].concat(b,p))}))}));x.displayName="Col";var g=x,C=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.column,s=e.srOnly,d=e.className,b=e.htmlFor,p=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),f=Object(o.useContext)(m).controlId;t=Object(u.b)(t,"form-label");var v=c()(d,t,s&&"sr-only",n&&"col-form-label");return b=b||f,n?i.a.createElement(g,Object(l.a)({as:"label",className:v,htmlFor:b},p)):i.a.createElement("label",Object(l.a)({ref:a,className:v,htmlFor:b},p))}));C.displayName="FormLabel",C.defaultProps={column:!1,srOnly:!1};var F=C,k=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,s=void 0===o?"small":o,m=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.b)(t,"form-text"),i.a.createElement(s,Object(l.a)({},d,{ref:a,className:c()(n,t,m&&"text-muted")}))}));k.displayName="FormText";var P=k,I=i.a.forwardRef((function(e,a){return i.a.createElement(E,Object(l.a)({},e,{ref:a,type:"switch"}))}));I.displayName="Switch",I.Input=E.Input,I.Label=E.Label;var w=I,S=t(51),R=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,o=e.className,s=e.validated,m=e.as,d=void 0===m?"form":m,b=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.b)(t,"form"),i.a.createElement(d,Object(l.a)({},b,{ref:a,className:c()(o,s&&"was-validated",n&&t+"-inline")}))}));R.displayName="Form",R.defaultProps={inline:!1},R.Row=Object(S.a)("form-row"),R.Group=j,R.Control=N,R.Check=E,R.Switch=w,R.Label=F,R.Text=P;a.a=R},389:function(e,a,t){"use strict";t.r(a);var l=t(135),r=t.n(l),n=t(136),c=t(138),o=t(0),i=t.n(o),s=t(140),m=t(137),u=t.n(m),d=t(7),b=t(131),p=u.a.create(b.a);a.default=function(e){var a=Object(o.useState)(null),t=Object(c.a)(a,2),l=t[0],m=t[1],u=Object(o.useState)(!1),b=Object(c.a)(u,2),f=b[0],v=b[1],E=Object(o.useState)(null),h=Object(c.a)(E,2),N=(h[0],h[1]),O=Object(o.useState)(null),j=Object(c.a)(O,2),y=j[0],x=j[1],g=Object(o.useState)(""),C=Object(c.a)(g,2),F=C[0],k=C[1],P=Object(o.useState)(null),I=Object(c.a)(P,2),w=I[0],S=I[1],R=Object(o.useState)(null),G=Object(c.a)(R,2),_=G[0],V=G[1],L=Object(o.useState)(null),q=Object(c.a)(L,2),T=q[0],D=q[1],M=Object(o.useState)(null),z=Object(c.a)(M,2),J=z[0],A=z[1],U=Object(o.useState)(null),B=Object(c.a)(U,2),H=B[0],K=B[1],Q=Object(o.useState)(null),W=Object(c.a)(Q,2),X=W[0],Y=W[1],Z=Object(o.useState)(null),$=Object(c.a)(Z,2),ee=$[0],ae=$[1],te=Object(o.useState)(null),le=Object(c.a)(te,2),re=le[0],ne=le[1],ce=Object(o.useState)(null),oe=Object(c.a)(ce,2),ie=oe[0],se=oe[1],me=e.match.params.id,ue=function(){var e=Object(n.a)(r.a.mark((function e(a){var t,l,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={nro_documento:y,primer_nombre:F,segundo_nombre:w,primer_apellido:_,telefono:H,correo:J,fecha_nacimiento:X,genero:ee,direccion:re,estado:ie},e.next=4,p.put("/clientes/".concat(a),{data:t});case 4:l=e.sent,n=l.data,console.log(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),de=Object(o.useCallback)(Object(n.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/clientes/".concat(me));case 3:a=(a=e.sent).data.data.attributes,N(a),x(a.nro_documento),k(a.primer_nombre),S(a.segundo_nombre),D(a.segundo_apellido),V(a.primer_apellido),K(a.telefono),ne(a.direccion),A(a.correo),Y(a.fecha_nacimiento),ae(a.genero),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[me]);return Object(o.useEffect)((function(){de()}),[me,de]),i.a.createElement("div",{className:"col-12 grid-margin stretch-card"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Editar cliente"),i.a.createElement("p",{className:"card-description"}," "),i.a.createElement(s.a,{className:"forms-sample",noValidate:!0,validated:f,onSubmit:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()?e.stopPropagation():ue(1),v(!0)}},i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputName1"},"Numero de documento"),i.a.createElement(s.a.Control,{required:!0,type:"number",className:"form-control",id:"nro_documento",value:y,placeholder:"Numero de documento",onChange:function(e){return x(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputName1"},"Primer nombre"),i.a.createElement(s.a.Control,{type:"text",className:"form-control",id:"primer_nombre",placeholder:"Primer nombre",value:F,required:!0,onChange:function(e){return k(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputName1"},"Segundo nombre"),i.a.createElement(s.a.Control,{type:"text",className:"form-control",id:"segundo_nombre",placeholder:"Segundo nombre",value:w,onChange:function(e){return S(e.target.value)}}))," ",i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputName1"},"Primer apellido"),i.a.createElement(s.a.Control,{type:"text",className:"form-control",id:"primer_apellido",placeholder:"Primer apellido",required:!0,value:_,onChange:function(e){return V(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion"))," ",i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputName1"},"Segundo apellido"),i.a.createElement(s.a.Control,{type:"text",className:"form-control",id:"segundo_apellido",placeholder:"Segundo apellido",value:T,onChange:function(e){return D(e.target.value)}})),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Fecha de nacimiento"),i.a.createElement(s.a.Control,{type:"date",className:"form-control",id:"email",placeholder:"Email",required:!0,value:X,onChange:function(e){return Y(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Correo"),i.a.createElement(s.a.Control,{type:"email",className:"form-control",id:"email",placeholder:"Email",required:!0,value:J,onChange:function(e){return A(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleSelectGender"},"Genero"),i.a.createElement("select",{value:ee,onChange:function(e){return ae(e.target.value)},className:"form-control",id:"genero"},i.a.createElement("option",null,"Masculino"),i.a.createElement("option",null,"Femenino"),i.a.createElement("option",null,"Otro"))),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputCity1"},"Direccion"),i.a.createElement(s.a.Control,{type:"text",className:"form-control",id:"direccion",placeholder:"Direccion",required:!0,value:re,onChange:function(e){return ne(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(s.a.Group,null,i.a.createElement("label",{htmlFor:"exampleInputCity1"},"Telefono"),i.a.createElement(s.a.Control,{type:"number",className:"form-control",id:"telefono",placeholder:"Telefono",required:!0,value:H,onChange:function(e){return K(e.target.value)}}),i.a.createElement(s.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),i.a.createElement(s.a.Group,null,i.a.createElement("label",null,"Foto"),i.a.createElement("div",{className:"custom-file"},i.a.createElement(s.a.Control,{accept:"image/*",type:"file",className:"form-control visibility-hidden",id:"customFileLang",lang:"es",onChange:function(e){return m(e.target.files[0])}}),i.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileLang"},null==l?"Cargar imagen":l.name))),i.a.createElement(s.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Estado"),i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"radio",className:"form-check-input",onChange:function(){return se(!0)},name:"ExampleRadio4",id:"membershipRadios1"})," Activo",i.a.createElement("i",{className:"input-helper"})))),i.a.createElement("div",{className:"col-sm-5"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"radio",className:"form-check-input",onChange:function(){return se(!1)},value:ie,name:"ExampleRadio4",id:"membershipRadios2"})," Inactivo",i.a.createElement("i",{className:"input-helper"}))))),i.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary mr-2"},"Guardar"),i.a.createElement(d.b,{to:"/clientes",className:"btn btn-gradient-secondary btn-fw"},"Cancelar")))))}}}]);
//# sourceMappingURL=9.667602fa.chunk.js.map
(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[8],{130:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(5),c=t.n(n),o=t(0),i=t.n(o),s=t(20),m=t.n(s),u={type:m.a.string.isRequired,as:m.a.elementType},d=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,o=e.className,s=e.type,m=Object(r.a)(e,["as","className","type"]);return i.a.createElement(n,Object(l.a)({},m,{ref:a,className:c()(o,s&&s+"-feedback")}))}));d.displayName="Feedback",d.propTypes=u,d.defaultProps={type:"valid"},a.a=d},131:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l={baseURL:"http://localhost:1337/api/"};localStorage.getItem("session_token")},140:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(5),c=t.n(n),o=t(0),i=t.n(o),s=(t(81),t(130)),m=i.a.createContext({controlId:void 0}),u=t(8),d=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,b=e.isValid,f=e.isInvalid,p=e.isStatic,v=e.as,O=void 0===v?"input":v,E=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),h=Object(o.useContext)(m),j=h.controlId;return n=h.custom?Object(u.b)(s,"custom-control-input"):Object(u.b)(n,"form-check-input"),i.a.createElement(O,Object(l.a)({},E,{ref:a,id:t||j,className:c()(d,n,b&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));d.displayName="FormCheckInput",d.defaultProps={type:"checkbox"};var b=d,f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,d=e.htmlFor,b=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(o.useContext)(m),p=f.controlId;return t=f.custom?Object(u.b)(n,"custom-control-label"):Object(u.b)(t,"form-check-label"),i.a.createElement("label",Object(l.a)({},b,{ref:a,htmlFor:d||p,className:c()(s,t)}))}));f.displayName="FormCheckLabel";var p=f,v=i.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,d=e.bsCustomPrefix,f=e.inline,v=e.disabled,O=e.isValid,E=e.isInvalid,h=e.feedback,j=e.className,N=e.style,y=e.title,x=e.type,g=e.label,C=e.children,F=e.custom,P=e.as,I=void 0===P?"input":P,k=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),w="switch"===x||F;n=w?Object(u.b)(d,"custom-control"):Object(u.b)(n,"form-check");var S=Object(o.useContext)(m).controlId,G=Object(o.useMemo)((function(){return{controlId:t||S,custom:w}}),[S,w,t]),R=null!=g&&!1!==g&&!C,V=i.a.createElement(b,Object(l.a)({},k,{type:"switch"===x?"checkbox":x,ref:a,isValid:O,isInvalid:E,isStatic:!R,disabled:v,as:I}));return i.a.createElement(m.Provider,{value:G},i.a.createElement("div",{style:N,className:c()(j,n,w&&"custom-"+x,f&&n+"-inline")},C||i.a.createElement(i.a.Fragment,null,V,R&&i.a.createElement(p,{title:y},g),(O||E)&&i.a.createElement(s.a,{type:O?"valid":"invalid"},h))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=b,v.Label=p;var O=v,E=(t(50),i.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,d=e.type,b=e.size,f=e.id,p=e.className,v=e.isValid,O=e.isInvalid,E=e.plaintext,h=e.readOnly,j=e.as,N=void 0===j?"input":j,y=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),x=Object(o.useContext)(m).controlId;if(s=Object(u.b)(s,"form-control"),E)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===d){var g;(g={})[s+"-file"]=!0,t=g}else{var C;(C={})[s]=!0,C[s+"-"+b]=b,t=C}return i.a.createElement(N,Object(l.a)({},y,{type:d,ref:a,readOnly:h,id:f||x,className:c()(p,t,v&&"is-valid",O&&"is-invalid")}))})));E.displayName="FormControl",E.Feedback=s.a;var h=E,j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,d=e.controlId,b=e.as,f=void 0===b?"div":b,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.b)(t,"form-group");var v=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return i.a.createElement(m.Provider,{value:v},i.a.createElement(f,Object(l.a)({},p,{ref:a,className:c()(n,t)}),s))}));j.displayName="FormGroup";var N=j,y=["xl","lg","md","sm","xs"],x=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,s=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(u.b)(t,"col"),b=[],f=[];return y.forEach((function(e){var a,t,l,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var n=r.span;a=void 0===n||n,t=r.offset,l=r.order}else a=r;var c="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+d+c:""+d+c+"-"+a),null!=l&&f.push("order"+c+"-"+l),null!=t&&f.push("offset"+c+"-"+t)})),b.length||b.push(d),i.a.createElement(s,Object(l.a)({},m,{ref:a,className:c.a.apply(void 0,[n].concat(b,f))}))}));x.displayName="Col";var g=x,C=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.column,s=e.srOnly,d=e.className,b=e.htmlFor,f=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(o.useContext)(m).controlId;t=Object(u.b)(t,"form-label");var v=c()(d,t,s&&"sr-only",n&&"col-form-label");return b=b||p,n?i.a.createElement(g,Object(l.a)({as:"label",className:v,htmlFor:b},f)):i.a.createElement("label",Object(l.a)({ref:a,className:v,htmlFor:b},f))}));C.displayName="FormLabel",C.defaultProps={column:!1,srOnly:!1};var F=C,P=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,s=void 0===o?"small":o,m=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.b)(t,"form-text"),i.a.createElement(s,Object(l.a)({},d,{ref:a,className:c()(n,t,m&&"text-muted")}))}));P.displayName="FormText";var I=P,k=i.a.forwardRef((function(e,a){return i.a.createElement(O,Object(l.a)({},e,{ref:a,type:"switch"}))}));k.displayName="Switch",k.Input=O.Input,k.Label=O.Label;var w=k,S=t(51),G=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,o=e.className,s=e.validated,m=e.as,d=void 0===m?"form":m,b=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.b)(t,"form"),i.a.createElement(d,Object(l.a)({},b,{ref:a,className:c()(o,s&&"was-validated",n&&t+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=Object(S.a)("form-row"),G.Group=N,G.Control=h,G.Check=O,G.Switch=w,G.Label=F,G.Text=I;a.a=G},387:function(e,a,t){"use strict";t.r(a);t(135),t(136);var l=t(138),r=t(0),n=t.n(r),c=t(140),o=t(7),i=t(137),s=t.n(i),m=t(131);s.a.create(m.a);a.default=function(){var e=Object(r.useState)(null),a=Object(l.a)(e,2),t=a[0],i=a[1],s=Object(r.useState)(!1),m=Object(l.a)(s,2),u=m[0],d=m[1],b=Object(r.useState)(null),f=Object(l.a)(b,2),p=(f[0],f[1],Object(r.useState)(null)),v=Object(l.a)(p,2),O=v[0],E=v[1],h=Object(r.useState)(""),j=Object(l.a)(h,2),N=j[0],y=j[1],x=Object(r.useState)(null),g=Object(l.a)(x,2),C=g[0],F=g[1],P=Object(r.useState)(null),I=Object(l.a)(P,2),k=I[0],w=I[1],S=Object(r.useState)(null),G=Object(l.a)(S,2),R=G[0],V=G[1],L=Object(r.useState)(null),q=Object(l.a)(L,2),T=q[0],_=q[1],D=Object(r.useState)(null),M=Object(l.a)(D,2),z=M[0],J=M[1],U=Object(r.useState)(null),A=Object(l.a)(U,2),B=A[0],H=A[1],K=Object(r.useState)(null),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=Object(r.useState)(null),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],ae=Object(r.useState)(null),te=Object(l.a)(ae,2);te[0],te[1];return n.a.createElement("div",{className:"col-12 grid-margin stretch-card"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Crear cliente"),n.a.createElement("p",{className:"card-description"}," "),n.a.createElement(c.a,{className:"forms-sample",noValidate:!0,validated:u,onSubmit:function(e){e.preventDefault();var a=e.currentTarget;console.log(a),!1===a.checkValidity()&&e.stopPropagation(),d(!0)}},n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputName1"},"Numero de documento"),n.a.createElement(c.a.Control,{required:!0,type:"number",className:"form-control",id:"nro_documento",value:O,placeholder:"Numero de documento",onChange:function(e){return E(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputName1"},"Primer nombre"),n.a.createElement(c.a.Control,{type:"text",className:"form-control",id:"primer_nombre",placeholder:"Primer nombre",value:N,required:!0,onChange:function(e){return y(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputName1"},"Segundo nombre"),n.a.createElement(c.a.Control,{type:"text",className:"form-control",id:"segundo_nombre",placeholder:"Segundo nombre",value:C,onChange:function(e){return F(e.target.value)}}))," ",n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputName1"},"Primer apellido"),n.a.createElement(c.a.Control,{type:"text",className:"form-control",id:"primer_apellido",placeholder:"Primer apellido",required:!0,value:k,onChange:function(e){return w(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion"))," ",n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputName1"},"Segundo apellido"),n.a.createElement(c.a.Control,{type:"text",className:"form-control",id:"segundo_apellido",placeholder:"Segundo apellido",value:R,onChange:function(e){return V(e.target.value)}})),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Fecha de nacimiento"),n.a.createElement(c.a.Control,{type:"date",className:"form-control",id:"email",placeholder:"Email",required:!0,value:B,onChange:function(e){return H(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputEmail3"},"Correo"),n.a.createElement(c.a.Control,{type:"email",className:"form-control",id:"email",placeholder:"Email",required:!0,value:T,onChange:function(e){return _(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleSelectGender"},"Genero"),n.a.createElement("select",{value:W,onChange:function(e){return X(e.target.value)},className:"form-control",id:"genero"},n.a.createElement("option",null,"Masculino"),n.a.createElement("option",null,"Femenino"),n.a.createElement("option",null,"Otro"))),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputCity1"},"Direccion"),n.a.createElement(c.a.Control,{type:"text",className:"form-control",id:"direccion",placeholder:"Direccion",required:!0,value:$,onChange:function(e){return ee(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),n.a.createElement(c.a.Group,null,n.a.createElement("label",{htmlFor:"exampleInputCity1"},"Telefono"),n.a.createElement(c.a.Control,{type:"number",className:"form-control",id:"telefono",placeholder:"Telefono",required:!0,value:z,onChange:function(e){return J(e.target.value)}}),n.a.createElement(c.a.Control.Feedback,{type:"invalid"},"Falta ingresar informacion")),n.a.createElement(c.a.Group,null,n.a.createElement("label",null,"Foto"),n.a.createElement("div",{className:"custom-file"},n.a.createElement(c.a.Control,{accept:"image/*",type:"file",className:"form-control visibility-hidden",id:"customFileLang",lang:"es",onChange:function(e){return i(e.target.files[0])}}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileLang"},null==t?"Cargar imagen":t.name))),n.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary mr-2"},"Crear"),n.a.createElement(o.b,{to:"/clientes",className:"btn btn-gradient-secondary btn-fw"},"Cancelar")))))}}}]);
//# sourceMappingURL=8.23ec8fed.chunk.js.map
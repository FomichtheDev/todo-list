(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{10:function(e,t,n){e.exports={SignUpForm:"SignUpForm_SignUpForm__RUwap",icon:"SignUpForm_icon__1G4wO",SignUp:"SignUpForm_SignUp__BsMEp",error:"SignUpForm_error__vT4I9"}},18:function(e,t,n){e.exports={navbar:"Header_navbar__15l9m",headerActive:"Header_headerActive__ploth"}},23:function(e,t,n){e.exports={LogInForm:"LogInForm_LogInForm__2HXFE",error:"LogInForm_error__3d447"}},25:function(e,t,n){e.exports={footerComp:"Footer_footerComp__1Q7ws",white:"Footer_white__qUOTK"}},30:function(e,t,n){e.exports={todoItem:"TaskItem_todoItem__261Yt",icon:"TaskItem_icon__Ea5kd"}},32:function(e,t,n){e.exports={checkbox:"CheckBox_checkbox__1bHbk",done:"CheckBox_done__3GzkT"}},43:function(e,t,n){e.exports={layout:"Layout_layout__1kN5G"}},44:function(e,t,n){e.exports={todoComponent:"TodoComponent_todoComponent__3vg3x"}},46:function(e,t,n){e.exports={icon:"TodoInput_icon__19F7K"}},47:function(e,t,n){e.exports={input:"FormInput_input__12keV"}},48:function(e,t,n){e.exports=n(79)},53:function(e,t,n){},54:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(53),n(54),n(43)),s=n.n(l),i=function(e){return r.a.createElement("section",{className:s.a.layout},e.children)},u=n(44),m=n.n(u),p=n(4),d=n(25),f=n.n(d),E=n(2),g=n(8),h=function(e){return{type:"CHANGE",payload:e}},_=function(e){return{type:"REMOVE_TASK",task:e}},v=function(e,t){return{type:"CHANGE_STATUS_TASK",newTasks:e,index:t}},b=function(e){return e?{type:"CHANGE_TO_TRUE"}:{type:"CHANGE_TO_FALSE"}},w=function(){var e=Object(E.c)((function(e){return e.tasks})),t=e.filter((function(e){return!1===e.isCompleted})).length,n=[],a=Object(E.b)();0===e.filter((function(e){return e.isCompleted})).length&&n.push(f.a.white);var o;return t<1&&(o=r.a.createElement("span",null,"No items left")),1===t&&(o=r.a.createElement("span",null,"1 item left")),t>1&&(o=r.a.createElement("span",null,t," items left")),r.a.createElement("footer",{className:f.a.footerComp},o,r.a.createElement("ul",null,r.a.createElement(g.b,{to:"/tasks",exact:!0},r.a.createElement("li",null,"All")),r.a.createElement(g.b,{to:"/active"},r.a.createElement("li",null,"Active")),r.a.createElement(g.b,{to:"/completed"},r.a.createElement("li",null,"Completed"))),r.a.createElement("span",{className:n,onClick:function(){Object(p.a)(e).map((function(e){return e.isCompleted?a(_(e)):null}))}},"Clear Completed"))},O=n(30),C=n.n(O),S=n(12),k=n(13),N=n(32),y=n.n(N);var T=function(e){var t=[];return e.checked&&t.push(y.a.done),r.a.createElement("div",{className:y.a.checkbox},r.a.createElement("input",{type:"checkbox",id:e.id,checked:e.checked,onChange:e.onChange}),r.a.createElement("label",{className:t,htmlFor:e.id,onClick:e.onChange},e.name))},x=function(e){return r.a.createElement("div",{className:C.a.todoItem},r.a.createElement(T,{id:e.id,checked:e.checked,name:e.name,onChange:e.onChange}),r.a.createElement(S.a,{icon:k.c,className:C.a.icon,onClick:e.onDelete}))},A=function(e){var t=Object(E.c)((function(e){return e.tasks})),n=Object(E.b)(),a=function(e){n(_(e))},o=function(e){var a=Object(p.a)(t),r=t[e];r.isCompleted=!r.isCompleted,a[e]=r,n(v(a))};switch(e.type){default:return r.a.createElement("main",null,t.map((function(e,t){return r.a.createElement(x,{name:e.text,checked:e.isCompleted,key:t,onDelete:function(){return a(e)},onChange:function(){return o(t)}})})));case"active":return r.a.createElement("main",null,t.map((function(e,t){return e.isCompleted?null:r.a.createElement(x,{name:e.text,checked:e.isCompleted,key:t,onDelete:function(){return a(t)},onChange:function(){return o(t)}})})));case"completed":return r.a.createElement("main",null,t.map((function(e,t){return e.isCompleted?r.a.createElement(x,{name:e.text,checked:e.isCompleted,key:t,onDelete:function(){return a(t)},onChange:function(){return o(t)}}):null})))}},I=n(46),j=n.n(I),L=function(){var e=Object(E.c)((function(e){return e.input})),t=Object(E.c)((function(e){return e.tasks})),n=Object(E.c)((function(e){return e.globalStatus})),a=Object(E.b)();return r.a.createElement("header",null,r.a.createElement("label",{onClick:function(){n?(t.map((function(e,n){var r=Object(p.a)(t),o=t[n];return o.isCompleted=!1,r[n]=o,a(v(r))})),a(b(!n))):(t.map((function(e,n){var r=Object(p.a)(t),o=t[n];return o.isCompleted=!0,r[n]=o,a(v(r))})),a(b(!n)))}},r.a.createElement(S.a,{icon:k.a,className:j.a.icon})),r.a.createElement("input",{type:"text",value:e,onChange:function(e){a(h(e.target.value))},placeholder:"What task needs to be done",onKeyPress:function(t){"Enter"===t.key&&(a({type:"ADD_TASK",newTask:{text:e,isCompleted:!1}}),a(h("")))}}))},F=n(3),U=function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:m.a.todoComponent},r.a.createElement("h1",null,"Todos"),r.a.createElement("section",null,r.a.createElement(L,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{path:"/tasks",exact:!0,component:A}),r.a.createElement(F.b,{path:"/active",exact:!0,render:function(){return r.a.createElement(A,{type:"active"})}}),r.a.createElement(F.b,{path:"/completed",exact:!0,render:function(){return r.a.createElement(A,{type:"completed"})}})),r.a.createElement(w,null))))},G=n(15),R=n.n(G),D=n(21),H=n(6),P=n(23),K=n.n(P),z=n(22),J=n.n(z);var M=function(){var e=Object(E.c)((function(e){return e.LogInForm})),t=Object(E.b)(),n=e.errors,a=function(n){var a=n.target,r=a.name,o=a.value,c=Object(H.a)({},e.errors);switch(r){case"email":c.email=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())?"":"Email is not valid!";break;case"password":c.password=o.length<8?"Wrong password!":""}t(function(e,t){return{type:"SET_LOG_IN_DATA",name:e,value:t}}(r,o)),t(function(e){return{type:"SET_LOG_IN_ERRORS",errors:e}}(c))},o=function(){var n=Object(D.a)(R.a.mark((function n(a){var r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!c(e.errors)){n.next=13;break}return r={email:e.email,password:e.password,returnSecureToken:!0},n.prev=3,n.next=6,J.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAr7rSU3glbvTR4hpSZCfsf5TGrFDMCwFo",r);case 6:n.sent,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),console.log(n.t0);case 12:t({type:"LOG_IN"});case 13:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e){return n.apply(this,arguments)}}(),c=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t};return r.a.createElement("div",{className:K.a.LogInForm},r.a.createElement("div",null,r.a.createElement("h1",null,"Log In Form"),r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:a,value:e.email,autoComplete:"current-password"}),r.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:a,value:e.password,autoComplete:"current-password"}),r.a.createElement("button",{type:"submit"},"\uf04b"),r.a.createElement("p",null,"forgot your password? ",r.a.createElement("a",{href:"https://fontawesome.com/icons/play?style=solid"},"click here")),n.email.length>0&&r.a.createElement("span",{className:K.a.error},n.email),n.password.length>0&&r.a.createElement("span",{className:K.a.error},n.password))))},Z=n(10),B=n.n(Z),V=n(47),W=n.n(V);var X=function(e){return r.a.createElement("div",{className:W.a.input},r.a.createElement("label",{htmlFor:e.id},e.text),r.a.createElement("input",{type:e.type,id:e.id,name:e.id,onChange:e.onChange,autoComplete:"current-password"}))};var $=function(){var e=Object(E.c)((function(e){return e.SignUpForm})),t=e.errors,n=Object(E.b)(),a=Object(E.c)((function(e){return e.isLogged})),o=function(t){var a=t.target,r=a.name,o=a.value,c=new RegExp(/^([\w]{3,})+\s+([\w\s]{3,})+$/i),l=Object(H.a)({},e.errors);switch(r){case"fullName":l.fullName=c.test(String(o))?"":"Incorrect Full Name!";break;case"email":l.email=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())?"":"Email is not valid!";break;case"password":l.password=o.length<8?"Password must be 8 characters long!":"";break;case"passwordConfirmation":l.passwordConfirmation=e.password===o?"":"Passwords should be the same!"}n(function(e,t){return{type:"SET_SIGN_UP_DATA",name:e,value:t}}(r,o)),n(function(e){return{type:"SET_SIGN_UP_ERRORS",errors:e}}(l))},c=function(){var t=Object(D.a)(R.a.mark((function t(n){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!l(e.errors)){t.next=12;break}return a={email:e.email,password:e.password,returnSecureToken:!0},t.prev=3,t.next=6,J.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAr7rSU3glbvTR4hpSZCfsf5TGrFDMCwFo",a);case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t};return r.a.createElement("div",{className:B.a.SignUpForm},a?null:r.a.createElement("span",null,"Please, sign up or log in before using TODO app"),r.a.createElement("h1",null,"Sign Up Form"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:c},r.a.createElement(X,{type:"text",id:"fullName",text:"Full Name",onChange:o}),t.fullName.length>0&&r.a.createElement("span",{className:B.a.error},t.fullName),r.a.createElement(X,{type:"email",id:"email",text:"E-mail",onChange:o}),t.email.length>0&&r.a.createElement("span",{className:B.a.error},t.email),r.a.createElement(X,{type:"password",id:"password",text:"Password",onChange:o}),t.password.length>0&&r.a.createElement("span",{className:B.a.error},t.password),r.a.createElement(X,{type:"password",id:"passwordConfirmation",text:"Confirm password",onChange:o}),t.passwordConfirmation.length>0&&r.a.createElement("span",{className:B.a.error},t.passwordConfirmation),r.a.createElement("section",null,r.a.createElement("span",{className:B.a.SignUp},"Sign Up"),r.a.createElement("button",{type:"submit"},r.a.createElement(S.a,{icon:k.b,className:B.a.icon}))))))},Y=n(18),q=n.n(Y);var Q=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.isLoggedIn.isLogged}));return r.a.createElement("nav",{className:q.a.navbar},r.a.createElement("ul",null,r.a.createElement(g.b,{exact:!0,to:"/",activeClassName:q.a.headerActive},r.a.createElement("li",null,"Log In")),r.a.createElement(g.b,{to:"/signup",activeClassName:q.a.headerActive},r.a.createElement("li",null,"Sign Up")),r.a.createElement(g.b,{to:"/tasks",activeClassName:q.a.headerActive},r.a.createElement("li",null,"Todos"))),t?r.a.createElement("button",{onClick:function(){return e({type:"LOG_OUT"})}},"Log Out"):r.a.createElement("button",null,"You are not logged in"))};var ee=function(){var e=Object(E.c)((function(e){return e.isLoggedIn.isLogged}));return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{path:"/",exact:!0,component:M}),r.a.createElement(F.b,{path:"/signup",exact:!0,component:$}),r.a.createElement(F.b,{path:"/tasks",exact:!0,render:function(){return e?r.a.createElement(i,null,r.a.createElement(U,null)):r.a.createElement(F.a,{to:"/signup"})}}),r.a.createElement(F.a,{to:"/signup"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(11),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"CHANGE":return t.payload}},ae=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];localStorage.setItem("items",JSON.stringify(ae));var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(p.a)(ae),t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"ADD_TASK":return localStorage.setItem("items",JSON.stringify([].concat(Object(p.a)(e),[Object(H.a)({},t.newTask)]))),[].concat(Object(p.a)(e),[Object(H.a)({},t.newTask)]);case"REMOVE_TASK":var n=Object(p.a)(e),a=n.indexOf(t.task);return n.splice(a,1),localStorage.setItem("items",JSON.stringify(n)),Object(p.a)(n);case"CHANGE_STATUS_TASK":return localStorage.setItem("items",JSON.stringify(t.newTasks)),Object(p.a)(t.newTasks)}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"CHANGE_TO_TRUE":case"CHANGE_TO_FALSE":return!e}},ce=n(14),le={email:"",password:"",errors:{email:"",password:""}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"SET_LOG_IN_DATA":return Object(H.a)({},e,Object(ce.a)({},t.name,t.value));case"SET_LOG_IN_ERRORS":return Object(H.a)({},e,{errors:t.errors})}},ie={fullName:"",email:"",password:"",passwordConfirmation:"",errors:{fullName:"",email:"",password:"",passwordConfirmation:""}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"SET_SIGN_UP_DATA":return Object(H.a)({},e,Object(ce.a)({},t.name,t.value));case"SET_SIGN_UP_ERRORS":return Object(H.a)({},e,{errors:t.errors})}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLogged:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"LOG_IN":return{isLogged:!0};case"LOG_OUT":return{isLogged:!1}}},pe=Object(te.b)({input:ne,tasks:re,globalStatus:oe,LogInForm:se,SignUpForm:ue,isLoggedIn:me}),de=Object(te.c)(pe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:de},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.4b63520a.chunk.js.map
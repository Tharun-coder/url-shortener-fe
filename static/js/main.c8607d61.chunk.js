(this["webpackJsonpurlshortener-fe"]=this["webpackJsonpurlshortener-fe"]||[]).push([[0],{24:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},30:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),s=r(18),n=r.n(s),o=(r(24),r(25),r(9)),l=r(2),i=r(3),u=r.n(i),d=r(6),j=r(4);r(27),r(28);var h=r(0);var b=function(e){var t=e.closeModal,r=Object(a.useState)(""),c=Object(j.a)(r,2),s=c[0],n=c[1],o=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=4;break}alert("Enter Full Url to proceed"),e.next=6;break;case 4:return e.next=6,fetch("https://urlshortener-be.herokuapp.com/home/shorten_url",{method:"POST",body:JSON.stringify({full_url:s}),headers:{"Content-type":"application/json"}});case 6:t();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"Modal",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"header-modal",children:[Object(h.jsx)("h5",{children:"Create Short URL"}),Object(h.jsx)("button",{className:"close-modal",onClick:t,children:Object(h.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}),Object(h.jsx)("label",{htmlFor:"full-url",children:"Enter URL to be shortened"}),Object(h.jsx)("input",{type:"text",id:"full-url",className:"form-group inp-modal",value:s,onChange:function(e){return n(e.target.value)},autoComplete:"off"}),Object(h.jsx)("button",{className:"btn btn-primary btn-modal",onClick:o,children:"Generate Short URL"})]})})};var p=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(!1),n=Object(j.a)(s,2),o=n[0],l=n[1];Object(a.useEffect)(Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://urlshortener-be.herokuapp.com/home");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,c(r.data);case 7:case"end":return e.stop()}}),e)}))),[r]);var i=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://urlshortener-be.herokuapp.com/home/shorten_url/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container-fluid",id:"home",children:[Object(h.jsxs)("div",{className:"row header",children:[Object(h.jsx)("div",{className:"col-lg-8",children:Object(h.jsx)("h1",{children:"URL Shortener makes life ease"})}),Object(h.jsx)("div",{className:"col-lg-4",children:Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){l(!0)},children:"Create Short URL"})})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-lg-12",children:Object(h.jsx)("h4",{className:"table-header",children:"Generated URLs and Respective clicks"})}),Object(h.jsx)("div",{className:"col-lg-2"}),Object(h.jsx)("div",{className:"col-lg-8",children:Object(h.jsxs)("table",{className:"table table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Full URL"}),Object(h.jsx)("th",{scope:"col",children:"Short URL"}),Object(h.jsx)("th",{scope:"col",children:"Total Clicks"})]})}),Object(h.jsx)("tbody",{children:r&&r.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:e.full,target:"_blank",children:(r=e.full,r.length>=25?r.substr(0,25)+"...":r)})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"/home",onClick:function(e){e.preventDefault(),i(e.target.computedName)},children:e.short})}),Object(h.jsx)("td",{children:e.clicks})]},t);var r}))})]})})]}),o&&Object(h.jsx)(b,{closeModal:function(){l(!1)}})]})};r(30);var m=function(e){var t=Object(a.useState)(""),r=Object(j.a)(t,2),c=r[0],s=r[1],n=Object(a.useState)(""),i=Object(j.a)(n,2),b=i[0],p=i[1],m=Object(l.f)(),O=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===c&&""===b&&alert("Enter the details to proceed"),e.next=3,fetch("https://urlshortener-be.herokuapp.com/auth/login/".concat(c,"/").concat(b));case 3:200===(t=e.sent).status?m.push("/home"):400===t.status?alert("User not registered"):alert("Invalid Password");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container-main",children:[Object(h.jsx)("h1",{children:"Welcome to the site"}),Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your registered email",value:c,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter your Password",value:b,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:O,children:"Login"}),Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)(o.b,{to:"/forget-password",children:"Forget Password?"}),Object(h.jsxs)("div",{children:["New User? ",Object(h.jsx)(o.b,{to:"/register",children:"Register Here"})]})]})]})]})};r(36);var O=function(e){var t=Object(a.useState)(""),r=Object(j.a)(t,2),c=r[0],s=r[1],n=Object(a.useState)(""),l=Object(j.a)(n,2),i=l[0],b=l[1],p=Object(a.useState)(""),m=Object(j.a)(p,2),O=m[0],f=m[1],x=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===c||""===i||""===O&&alert("Enter the details to proceed"),e.next=3,fetch("https://urlshortener-be.herokuapp.com/auth/register",{method:"POST",body:JSON.stringify({email:c,password:i,cpassword:O}),headers:{"Content-type":"application/json"}});case 3:200===(t=e.sent).status?alert("User Registration Successfull"):400===t.status?alert("Email ID already registered"):alert("Could not regiser due to server error. Please try again later");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container-main",children:[Object(h.jsx)("h1",{children:"Welcome to the site"}),Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your registered email",value:c,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter your Password",value:i,onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"cpassword",children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",id:"cpassword",className:"form-control",placeholder:"Enter your Password",value:O,onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:x,children:"Register"}),Object(h.jsx)("div",{className:"register",children:Object(h.jsx)(o.b,{to:"/",children:"Go Back to Home Page"})})]})]})};r(37);var f=function(e){var t=Object(a.useState)(""),r=Object(j.a)(t,2),c=r[0],s=r[1],n=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""===c&&alert("Enter the details to proceed"),e.next=3,fetch("https://urlshortener-be.herokuapp.com/auth/forgot_password/".concat(c));case 3:200===e.sent.status?alert("Secret code to reset the Password send to your mail ID. Please Check"):alert("User not found");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container-main",children:[Object(h.jsx)("h1",{children:"Welcome to the site"}),Object(h.jsxs)("div",{className:"forget_pass",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your registered email",value:c,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:n,children:"Submit"}),Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)(o.b,{to:"/",children:"Go Back to Home Page"}),Object(h.jsx)(o.b,{to:"/updatepass",children:"Click Here to Update Password"})]})]})]})};r(38);var x=function(e){var t=Object(a.useState)(""),r=Object(j.a)(t,2),c=r[0],s=r[1],n=Object(a.useState)(""),l=Object(j.a)(n,2),i=l[0],b=l[1],p=Object(a.useState)(""),m=Object(j.a)(p,2),O=m[0],f=m[1],x=Object(a.useState)(""),v=Object(j.a)(x,2),g=v[0],w=v[1],y=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),""===c&&""===i&&""===O&&""===g&&alert("Enter the details to proceed"),console.log(g,O),e.next=5,fetch("https://nodepassword.herokuapp.com/auth/password_reset/".concat(g,"/").concat(O),{method:"PUT",body:JSON.stringify(),headers:{"Content-type":"application/json"}});case 5:200===e.sent.status?alert("Password Updated Successfully"):alert("Error Occured");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container-main",children:[Object(h.jsx)("h1",{children:"Welcome to the site"}),Object(h.jsxs)("div",{className:"update_pass",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter your registered email",value:c,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"secret",children:"Secret Code (Send Via Mail)"}),Object(h.jsx)("input",{type:"text",id:"secret",className:"form-control",placeholder:"Enter Secret code",value:g,onChange:function(e){return w(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter your Password",value:i,onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"cpassword",children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",id:"cpassword",className:"form-control",placeholder:"Enter your Password",value:O,onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:y,children:"Submit"}),Object(h.jsx)("div",{className:"register",children:Object(h.jsx)(o.b,{to:"/",children:"Go Back to Home Page"})})]})]})};var v=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,component:m}),Object(h.jsx)(l.a,{path:"/register",exact:!0,component:O}),Object(h.jsx)(l.a,{path:"/forget-password",exact:!0,component:f}),Object(h.jsx)(l.a,{path:"/updatepass",exact:!0,component:x}),Object(h.jsx)(l.a,{path:"/home",exact:!0,component:p})]})})})};n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c8607d61.chunk.js.map
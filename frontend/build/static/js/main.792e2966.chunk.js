(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(16),r=n.n(s),c=(n(23),n(4)),o=n(3),i=n.n(o),l=n(0);var d=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Accent"})})};function j(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsxs)("h1",{children:["  Property Address: ",e.address," "]}),Object(l.jsxs)("p",{children:[" Erected Board Type: ",e.board]}),Object(l.jsxs)("p",{children:[" Total Fee Charged: ",e.fee]})]})}var u=function(e){var t,n;e.fees&&(t=e.fees,n=Object(c.a)(t,1)[0]);var a=e.agentz;return a&&0!==a.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"list-head",children:"Properties managed by Accent Estate Agents"}),a.map((function(e){return Object(l.jsx)(j,{address:e.address,board:e.board,fee:e.fee},e.id)})),e.fees&&Object(l.jsxs)("h1",{className:"total",children:["Grand Total : ",n.total,"  "]})]}):Object(l.jsx)("h2",{className:"list-head",children:" Sorry, No property managed by this client was found"})},f=n(17),h=n(18),b=["isLoading"];var g=function(e){return function(t){var n=t.isLoading,a=Object(h.a)(t,b);return n?Object(l.jsx)("p",{style:{textAlign:"center",fontSize:"30px"},children:"Hold on, fetching data!! This may take some time :)"}):Object(l.jsx)(e,Object(f.a)({},a))}};i.a.defaults.xsrfCookieName="csrftoken",i.a.defaults.xsrfHeaderName="X-CSRFToken";var O=function(e){var t=g(u),n=Object(a.useState)(""),s=Object(c.a)(n,2),r=s[0],o=s[1],d=Object(a.useState)(!1),j=Object(c.a)(d,2),f=j[0],h=j[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i()({method:"POST",url:"/",data:{customer:r}}).then((function(e){console.log(e),200===e.status?(console.log("Message Sent."),o(""),h(!0)):console.log("Message failed to send. Kindly retry")})).catch((function(e){e.response&&(console.log(e.response),console.log(e.response.status),console.log(e.response.headers))}))},children:[Object(l.jsx)("input",{className:"form-control form-control-lg",type:"text",name:"searchy",placeholder:"ENTER CUSTOMER CODE e.g ACC001",value:r,onChange:function(e){var t=e.target.value;o(t)}}),Object(l.jsx)("button",{children:" Search "})]}),f&&Object(l.jsx)("div",{className:"repo-container",children:Object(l.jsx)(t,{isLoading:e.isLoading,agentz:e.agentz,fees:e.fees})})]})};var p=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \u24d2 ",e]})})};var x=function(){var e=Object(a.useState)({loading:!1,agents:null,fee:null}),t=Object(c.a)(e,2),n=t[0],s=t[1],r=i.a.get("/api/properties/"),o=i.a.get("/api/grandtotal/");return Object(a.useEffect)((function(){s({loading:!0}),i.a.all([r,o]).then(i.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0],r=t[1];s({loading:!1,agents:a.data,fee:r.data})}))).catch((function(e){return console.log(e)}))}),[s]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{isLoading:n.loading,agentz:n.agents,fees:n.fee}),Object(l.jsx)(p,{})]})};r.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.792e2966.chunk.js.map
(this.webpackJsonpwebpack=this.webpackJsonpwebpack||[]).push([[0],{117:function(t,n,e){t.exports={button:"Button_button__24m90"}},123:function(t,n,e){},133:function(t,n){},135:function(t,n){},146:function(t,n){},148:function(t,n){},16:function(t,n,e){t.exports={form:"ContactForm_form__2Y6p9",label:"ContactForm_label__tMYbd",form_input:"ContactForm_form_input__3k2zI"}},175:function(t,n){},177:function(t,n){},178:function(t,n){},183:function(t,n){},185:function(t,n){},191:function(t,n){},193:function(t,n){},212:function(t,n){},224:function(t,n){},227:function(t,n){},231:function(t,n,e){},233:function(t,n,e){"use strict";e.r(n);var a=e(8),c=e.n(a),o=e(115),i=e.n(o),r=(e(123),e(118)),u=e(23),s=e(116),l=e.n(s),b=(e(231),e(117)),m=e.n(b),f=e(2);function d(t){var n=t.type,e=t.onClick,a=t.btnName,c=t.disabled;return Object(f.jsx)("button",{type:n,className:m.a.button,onClick:e,disabled:c,children:a})}var j=e(16),p=e.n(j);function O(t){var n=t.onSubmit,e=Object(a.useState)(""),c=Object(u.a)(e,2),o=c[0],i=c[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),l=s[0],b=s[1],m=function(){i(""),b("")};return Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(o,l),m()},className:p.a.form,children:[Object(f.jsxs)("label",{className:p.a.label,children:["Name",Object(f.jsx)("input",{className:p.a.form_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:function(t){i(t.currentTarget.value)}})]}),Object(f.jsxs)("label",{className:p.a.label,children:["Number",Object(f.jsx)("input",{className:p.a.form_input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:function(t){b(t.currentTarget.value)}})]}),Object(f.jsx)(d,{type:"submit",btnName:"Add contact",disabled:!(o&&l),className:p.a.form_btn})]})}var _=e(60),x=e.n(_);function h(t){var n=t.value,e=t.onChange;return Object(f.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:n,onChange:e,className:x.a.input})]})}var v=e(61),C=e.n(v);function g(t){var n=t.contacts,e=t.onDelete;return Object(f.jsx)("ul",{children:n.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:C.a.contact,children:[Object(f.jsxs)("span",{children:[a,": ",c]}),Object(f.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})}var N=function(){var t,n=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),e=Object(u.a)(n,2),c=e[0],o=e[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),b=s[0],m=s[1];return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:function(t,n){c.find((function(n){return n.name===t}))?alert("".concat(t," already exists")):o((function(e){return[].concat(Object(r.a)(e),[{id:l.a.generate(),name:t,number:n}])}))}}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(h,{value:b,onChange:function(t){m(t.currentTarget.value)}}),Object(f.jsx)(g,{contacts:function(){var t=b.toLowerCase();return c.filter((function(n){return n.name.toLowerCase().includes(t)}))}(),onDelete:function(t){o(c.filter((function(n){return n.id!==t})))}})]})},S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,234)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),S()},60:function(t,n,e){t.exports={label:"Filter_label__2QdWm",input:"Filter_input__17a_2"}},61:function(t,n,e){t.exports={contact:"ContactList_contact__3pQ4A",button:"ContactList_button__33rnS"}}},[[233,1,2]]]);
//# sourceMappingURL=main.3ea615d0.chunk.js.map
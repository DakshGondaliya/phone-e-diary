(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(52),c=a.n(s),i=(a(66),a(53)),l=a(24),o=a(54),m=a(55),u=a(59),d=a(56),p=a(60),b=a(39),h=a.n(b);h.a.initializeApp({apiKey:"AIzaSyCbixkqPpE8zrHrJeJtpFiv3l8h8FhRqv8",authDomain:"phonedirectory-cf402.firebaseapp.com",databaseURL:"https://phonedirectory-cf402.firebaseio.com",projectId:"phonedirectory-cf402",storageBucket:"phonedirectory-cf402.appspot.com",messagingSenderId:"1004885701681"});var f=h.a.database(),E=(a(122),a(57)),v=a.n(E),g=a(58),y=a.n(g),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),10!==a.refs.phone_number.value.length?alert("Invalid Phone Number"):(a.itemsRef.push({username:a.refs.username.value,phone_number:a.refs.phone_number.value}),a.refs.username.value="",a.refs.phone_number.value="")},a.deleteSubscriber=function(e){a.itemsRef.update(Object(l.a)({},e.key,null))},a.state={subscribers:[],loading:!1},a.itemsRef=f.ref("subscriber"),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.itemsRef.on("value",function(t){var a=t.val()||{};console.log(a);var n=Object.keys(a).map(function(e){return Object(i.a)({key:e},a[e])});e.setState({subscribers:n,loading:!1})})}},{key:"render",value:function(){var e=this,t=this.state.subscribers.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:v.a,alt:"logo"}),r.a.createElement("h1",null," phone - e - diary ")," ",r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group",id:"spc-1"},r.a.createElement("div",{className:"input-1"},r.a.createElement("i",{className:"fa fa-user"}),r.a.createElement("input",{type:"text",className:"form-control",ref:"username",placeholder:"Your name",required:!0}))," ")," ",r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-1"},r.a.createElement("i",{className:"fa fa-phone"}),r.a.createElement("input",{type:"number",className:"form-control",minLength:"10",maxLength:"10",size:"10",ref:"phone_number",placeholder:"Your phone number",required:!0}))," ")," ",r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add ")," ")," ")," ")," ",this.state.loading?r.a.createElement("div",{className:"gif"},r.a.createElement("img",{src:y.a,alt:"gif"})):0===t?r.a.createElement("p",{className:"gif"}," There is no subscriber in the Database "):r.a.createElement("div",{className:"list"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{id:"tablehead"},r.a.createElement("th",{id:"name"}," Name ")," ",r.a.createElement("th",{id:"phone"}," Phone Number ")," ",r.a.createElement("th",{id:"null"}))," ")," ",r.a.createElement("tbody",null," ",this.state.subscribers.map(function(t){return r.a.createElement("tr",{key:t.key},r.a.createElement("td",{className:"user"}," ",t.username," ")," ",r.a.createElement("td",{className:"mobno"}," ",t.phone_number," ")," ",r.a.createElement("td",null,r.a.createElement("button",{className:"delete--button",onClick:function(){return e.deleteSubscriber(t)}},"Delete ")," ")," ")})," ")," ")," ")," ")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a.p+"static/media/phone_4.cc117caa.svg"},58:function(e,t,a){e.exports=a.p+"static/media/load_7.d291d4d7.gif"},61:function(e,t,a){e.exports=a(123)},66:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.65c83836.chunk.js.map
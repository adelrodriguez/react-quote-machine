(this["webpackJsonpreact-quote-machine"]=this["webpackJsonpreact-quote-machine"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),o=n(6),i=n.n(o),s=n(4),u=n.n(s),d=n(7),l=n(2),j=n(5),h=n.n(j);n(14);var b=function(){var e=Object(c.useState)("Loading..."),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),s=i[0],j=i[1],b=Object(c.useState)("#15202c"),f=Object(l.a)(b,2),x=f[0],O=f[1];function p(){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(u.a.mark((function e(){var t,n,r,c,o,i,s,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=".concat(Date.now()));case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error("Sorry, there was an issue while fetching the quote");case 6:return e.next=8,r.json();case 8:c=e.sent,o=Object(l.a)(c,1),i=o[0],s=h.a.sanitize(null===i||void 0===i||null===(t=i.content)||void 0===t?void 0:t.rendered),d=h.a.sanitize(null===i||void 0===i||null===(n=i.title)||void 0===n?void 0:n.rendered),a(s),j(d),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){p()}),[]),Object(c.useEffect)((function(){!function(){var e=Array.from(Array(3)).map((function(){return Math.floor(200*Math.random())}));O("rgb(".concat(e.join(","),")"))}()}),[n]),Object(r.jsxs)("div",{className:"App",style:{backgroundColor:x},children:[Object(r.jsxs)("main",{id:"quote-box",children:[Object(r.jsx)("i",{className:"fa fa-quote-left","aria-hidden":"true"}),Object(r.jsx)("div",{id:"text",dangerouslySetInnerHTML:{__html:n}}),Object(r.jsx)("i",{className:"fa fa-quote-right","aria-hidden":"true"}),Object(r.jsxs)("div",{id:"author",children:["\u2014 ",s]}),Object(r.jsxs)("div",{id:"buttons",children:[Object(r.jsxs)("a",{className:"button",id:"tweet-quote",target:"_blank",rel:"noreferrer",title:"Tweet this quote!",href:"https://twitter.com/intent/tweet?text=".concat(function(){var e=document.getElementById("text");return'"'.concat(null===e||void 0===e?void 0:e.innerText,'" \u2014 ').concat(s)}()),children:[Object(r.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})," Tweet"]}),Object(r.jsx)("button",{className:"button",id:"new-quote",onClick:p,children:"New Quote"})]})]}),Object(r.jsxs)("footer",{children:[Object(r.jsxs)("p",{children:["Made by"," ",Object(r.jsx)("a",{href:"http://www.adelrodriguez.com/",target:"_blank",rel:"noreferrer",children:"Adel Rodr\xedguez"})]}),Object(r.jsxs)("p",{children:["Quotes from"," ",Object(r.jsx)("a",{href:"http://quotesondesign.com/",target:"_blank",rel:"noreferrer",children:"Quotes on Design"})]})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b66915b8.chunk.js.map
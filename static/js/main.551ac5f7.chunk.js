(this.webpackJsonpcounter_use_state=this.webpackJsonpcounter_use_state||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(5),s=n.n(r),u=(n(16),n(17),n(6)),a=n(4),o=function(e,t){switch(t.type){case"INCREMENT":return Object(a.a)(Object(a.a)({},e),{},{count:e.count+t.payload});case"DECREMENT":return Object(a.a)(Object(a.a)({},e),{},{count:e.count-t.payload});default:return e}},i=n(1),j={count:0},b=Object(c.createContext)(j),l=function(e){var t=e.children,n=Object(c.useReducer)(o,j),r=Object(u.a)(n,2),s=r[0],a=r[1];return Object(i.jsx)(b.Provider,{value:{state:s,dispatch:a},children:t})},d=function(e){var t=e.name,n=Object(c.useContext)(b),r=n.state,s=n.dispatch;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:t}),Object(i.jsxs)("p",{className:"container",children:[Object(i.jsx)("button",{onClick:function(){return s({type:"DECREMENT",payload:1})},children:"-"}),Object(i.jsx)("span",{className:"counter",children:r.count}),Object(i.jsx)("button",{onClick:function(){return s({type:"INCREMENT",payload:1})},children:"+"})]})]})},O=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"useState Counter"}),Object(i.jsxs)("p",{className:"container",children:[Object(i.jsx)("button",{onClick:function(){r(n-1)},children:"-"}),Object(i.jsx)("span",{className:"counter",children:n}),Object(i.jsx)("button",{onClick:function(){r(n+1)},children:"+"})]})]})},h=(n(19),n(2)),x=function(e){var t=e.name,n=Object(h.c)((function(e){return e.counter})),c=Object(h.b)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:t}),Object(i.jsxs)("p",{className:"container",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return c((function(e){e({type:"DECREMENT"})}))},children:"-"}),Object(i.jsx)("span",{className:"counter",children:n.counter}),Object(i.jsx)("button",{className:"btn",onClick:function(){return c((function(e){e({type:"INCREMENT"})}))},children:"+"})]})]})};var p=function(){return Object(i.jsx)(l,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)(x,{name:"Redux Counter"}),Object(i.jsx)(d,{name:"useContext Counter"}),Object(i.jsx)(O,{name:"useState Counter"})]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),s(e),u(e)}))},C=n(3),m=n(11),N=n(10),E={counter:0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return{counter:e.counter+1};case"DECREMENT":return{counter:e.counter-1};default:return e}},y=Object(C.combineReducers)({counter:v}),g=Object(C.createStore)(y,Object(N.composeWithDevTools)(Object(C.applyMiddleware)(m.a)));s.a.render(Object(i.jsx)(h.a,{store:g,children:Object(i.jsx)(p,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.551ac5f7.chunk.js.map
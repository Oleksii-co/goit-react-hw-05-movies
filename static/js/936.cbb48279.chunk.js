"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{864:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(689),a=r(87),c=r(184),u=function(t){var n=t.id,r=t.title,u=(0,e.TH)();return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{state:{from:u},to:"/movies/".concat(n),children:r})})},i="MovieList_list__yjDCC",o=function(t){var n=t.movies;return(0,c.jsx)("ul",{className:i,children:n.map((function(t){var n=t.id,r=t.title;return(0,c.jsx)(u,{id:n,title:r},n)}))})}},936:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(864),o=r(791),s=r(390),f="Home_title__L087v",p=r(184),v=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.u5)();case 3:n=t.sent,c(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{className:f,children:"Trending today"}),(0,p.jsx)(i.Z,{movies:r})]})}},390:function(t,n,r){r.d(n,{FL:function(){return p},OQ:function(){return f},Xj:function(){return d},gI:function(){return v},u5:function(){return s}});var e=r(861),a=r(757),c=r.n(a),u=r(243),i="201a200521ee100a5b50e6d6c06ca200",o="https://api.themoviedb.org/3",s=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.cbb48279.chunk.js.map
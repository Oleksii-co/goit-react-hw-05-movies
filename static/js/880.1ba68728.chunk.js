"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{880:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),u=n(87),l="MovieDetailsPage_btn__oGTxV",d="MovieDetailsPage_container__VyXai",p="MovieDetailsPage_about__B09T1",v="MovieDetailsPage_information__q5+od",f="MovieDetailsPage_infList__YeTrL",h=n(184),x=function(e){var t=e.data,n=e.backLink,r=(0,o.TH)(),a=t.poster_path,c=t.title,s=t.release_date,x=t.vote_average,m=t.overview,j=t.genres;return(0,h.jsxs)("div",{children:[(0,h.jsx)(u.OL,{className:l,to:n,children:"Go Back"}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w300".concat(a):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg}",alt:""}),(0,h.jsxs)("div",{className:p,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"".concat(c," (").concat(s.slice(0,4),")")}),(0,h.jsx)("p",{children:"User Score: ".concat(Math.round(10*x),"%")})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:m})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("p",{children:j.map((function(e){return e.name})).join(", ")})]})]})]}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("h3",{children:"Addictional Information"}),(0,h.jsxs)("ul",{className:f,children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{state:r.state,to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{state:r.state,to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(o.j3,{})})]})},m=n(390),j=function(){var e,t,n=(0,o.UO)().moviesId,c=(0,i.useState)(),u=(0,a.Z)(c,2),l=u[0],d=u[1],p=(0,o.TH)(),v=(0,i.useRef)(null!==(e=null===p||void 0===p||null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.FL)(n);case 3:t=e.sent,d(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,d]),(0,h.jsx)("main",{children:l&&(0,h.jsx)(x,{backLink:v.current,data:l})})}},390:function(e,t,n){n.d(t,{FL:function(){return d},OQ:function(){return l},Xj:function(){return v},gI:function(){return p},u5:function(){return u}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="201a200521ee100a5b50e6d6c06ca200",o="https://api.themoviedb.org/3",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=880.1ba68728.chunk.js.map
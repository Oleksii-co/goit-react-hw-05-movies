"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,e,n){n.r(e);var r=n(439),a=n(216),c=n(791),u=n(689),i=n(390),o=n(184);e.default=function(){var t=(0,u.UO)().moviesId,e=(0,c.useState)([]),n=(0,r.Z)(e,2),s=n[0],p=n[1];return(0,c.useEffect)((function(){(0,i.gI)(t).then((function(t){0!==t.length&&p(t)}))}),[t]),(0,o.jsxs)(o.Fragment,{children:[s.length>0&&(0,o.jsx)("ul",{children:s.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/200px-No-image-available.jpg",alt:""}),(0,o.jsxs)("p",{children:["Name: ",t.name]}),(0,o.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))}),0===s.length&&(0,o.jsx)(a.Z,{message:"We don`t have any cast for this movie"})]})}},216:function(t,e,n){var r=n(184);e.Z=function(t){var e=t.message;return(0,r.jsx)("p",{children:e})}},390:function(t,e,n){n.d(e,{FL:function(){return f},OQ:function(){return p},Xj:function(){return l},gI:function(){return h},u5:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="201a200521ee100a5b50e6d6c06ca200",o="https://api.themoviedb.org/3",s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.62306e42.chunk.js.map
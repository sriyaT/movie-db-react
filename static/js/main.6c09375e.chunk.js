(this["webpackJsonpmovie-db-react"]=this["webpackJsonpmovie-db-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a(78)},33:function(e,t,a){},51:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),s=(a(33),a(2)),o=a(27),u=a(7),i=a.n(u),m=(a(51),function(e){var t=e.handleInput,a=e.search;return c.a.createElement("section",{className:"searchbox-wrap"},c.a.createElement("input",{type:"text",placeholder:"Search for a movie ...",className:"searchbox",onChange:t,onKeyPress:a}))}),p=a(26),d=a.n(p);var E=function(e){var t=e.result,a=e.openPopup;return c.a.createElement("div",{className:"Result",onClick:function(){return a(t.imdbID)}},c.a.createElement("img",{src:t.Poster}),c.a.createElement("h3",null,t.Title))};var f=function(e){var t=e.results,a=e.openPopup;return c.a.createElement("section",{className:"results"},!d()(t)&&t.map((function(e){return c.a.createElement(E,{result:e,key:e.imdbID,openPopup:a})})))};var b=function(e){var t=e.selected,a=e.closePopup;return c.a.createElement("section",{className:"popup"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.Title," ",c.a.createElement("span",null,"(",t.Year,")")),c.a.createElement("p",{className:"rating"},"Rating:",t.imdbRating),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:t.Poster}),c.a.createElement("p",null,t.Plot)),c.a.createElement("button",{className:"close",onClick:a},"Close")))};var v=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(o.a)(e,2),a=t[0],r=t[1],l="http://www.omdbapi.com/?apikey=dfe6d885";return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"Movie Database")),c.a.createElement("main",null,c.a.createElement(m,{handleInput:function(e){var t=e.target.value;r((function(e){return Object(s.a)(Object(s.a)({},e),{},{s:t})}))},search:function(e){(e.key="Enter")&&i()(l+"&s="+a.s).then((function(e){var t=e.data.Search;r((function(e){return Object(s.a)(Object(s.a)({},e),{},{results:t})}))}))}}),c.a.createElement(f,{results:a.results,openPopup:function(e){i()(l+"&i="+e).then((function(e){var t=e.data;r((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof a.selected.Title&&c.a.createElement(b,{selected:a.selected,closePopup:function(){r((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:{}})}))}})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6c09375e.chunk.js.map
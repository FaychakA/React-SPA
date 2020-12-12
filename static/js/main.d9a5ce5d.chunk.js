(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(0),n=c(18),s=c.n(n),i=c(10),o=c(33),l=c(19),j=c(11),u=(c(47),c(4)),d=(c(48),function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("div",{className:"header__logo",children:Object(r.jsx)("img",{src:"./img/icons/header/logo.jpg",alt:"logo",className:"header__img"})}),Object(r.jsxs)("ul",{className:"header__link-list link__list",children:[Object(r.jsx)("li",{className:"link__item",children:Object(r.jsx)(i.c,{to:"/",exact:!0,className:"link__routing-link",activeClassName:"link__disabled",children:"Home"})}),Object(r.jsx)("li",{className:"link__item",children:Object(r.jsx)(i.c,{to:"/search",exact:!0,className:"link__routing-link",activeClassName:"link__disabled",children:"Search"})})]})]})}),f=c(37),b=c(25),O=c(2),h="START_LOAD_TOP_TRACKS",m="LOADED_TOP_TRACKS",_="ERROR_TOP_TRACKS",p="START_LOAD_ARTIST_INFO",g="LOADED_ARTIST_INFO",x="ERROR_ARTIST_INFO",k="START_LOAD_SEARCH",N="LOADED_SEARCH",v="ERROR_SEARCH",y=function(){return{type:k}},T=function(e){return{type:N,payload:Object(O.a)({},e)}},A=function(e){return{type:v,payload:{error:e}}},R=c(35),S=c.n(R),w=(c(57),function(){return Object(r.jsx)("div",{className:"spinner",children:Object(r.jsx)(S.a,{})})}),E=c(67),I=(c(58),function(e){var t=e.foundTracks;return e.loading?Object(r.jsx)("div",{children:Object(r.jsx)(w,{})}):Object(r.jsx)("div",{className:"track",children:Object(r.jsxs)("ul",{className:"track__list",children:[Object(r.jsxs)("h6",{className:"track__head",children:[Object(r.jsx)("div",{className:"track__wrapper",children:"Name"}),Object(r.jsx)("div",{children:"Artist"})]}),t.hasOwnProperty("track")?t.track.map((function(e){return Object(r.jsxs)("li",{className:"track__item",children:[Object(r.jsx)("div",{className:"track__wrapper",children:Object(r.jsx)("a",{href:e.url,className:"track__link",children:e.name})}),Object(r.jsx)(i.b,{to:"/artist/".concat(e.artist),className:"track__link",children:e.artist})]},Object(E.a)())})):Object(r.jsx)("p",{})]})})}),C=c(36),D=c.n(C),L=(c(59),Object(b.a)((function(e){return{foundTracks:e.foundTracks.foundTracks,loading:e.foundTracks.loading,error:e.foundTracks.error}}),(function(e){return{getSearch:function(t){e(function(e){return function(t){t(y()),fetch("https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(e,"&api_key=c47452df41d75f8668f4640f376f4ee9&format=json")).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(T(e))})).catch((function(e){t(A(e.message))}))}}(t))}}}))((function(e){var t=e.getSearch,c=e.foundTracks,n=e.loading,s=(e.error,Object(u.g)()),i=new URLSearchParams(s.search),o=Object(u.f)(),l=Object(a.useState)(i.get("searchQuery")||""),j=Object(f.a)(l,2),d=j[0],b=j[1];Object(a.useEffect)((function(){t(d)}),[]);var O=Object(a.useCallback)(D()(t,500),[]);return Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{type:"text",className:"search__input",value:d,placeholder:"Search by name",onChange:function(e){var t=e.target.value;b(t),function(e){e?i.set("searchQuery",e):i.delete("searchQuery"),o.push({search:i.toString()})}(t),O(t.replaceAll(" ","+"))}}),Object(r.jsx)(I,{foundTracks:c,loading:n})]})}))),H=(c(60),function(e){var t=e.song;return Object(r.jsxs)("div",{className:"song",children:[Object(r.jsx)("img",{src:t.image[2]["#text"],className:"song__img",alt:"caver"}),Object(r.jsxs)("div",{className:"song__wrapper",children:["Name:\xa0",Object(r.jsx)("a",{href:t.url,className:"song__link",children:t.name})]}),Object(r.jsxs)("div",{className:"song__wrapper",children:["Artist:\xa0",Object(r.jsx)(i.b,{to:"/artist/".concat(t.artist.name.replace(" ","+")),className:"song__link",children:t.artist.name})]})]})}),P=(c(61),function(e){var t=e.listSongs;return Object(r.jsx)("div",{className:"music",children:Object(r.jsx)("ul",{className:"music__list",children:t.map((function(e){return Object(r.jsx)("li",{className:"music__item",children:Object(r.jsx)(H,{song:e})},Object(E.a)())}))})})}),F=function(){return{type:h}},K=function(e){return{type:m,payload:Object(O.a)({},e)}},Q=function(e){return{type:_,payload:{error:e}}},J=Object(b.a)((function(e){return{music:e.music.music,loading:e.music.loading,error:e.music.error}}),(function(e){return{getTopTracks:function(){e((function(e){e(F()),fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=c47452df41d75f8668f4640f376f4ee9&format=json").then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(t){e(K(t))})).catch((function(t){e(Q(t.message))}))}))}}}))((function(e){var t=e.getTopTracks,c=e.music,n=e.loading;e.error;return Object(a.useEffect)((function(){t()}),[]),n?Object(r.jsx)("div",{children:Object(r.jsx)(w,{})}):Object(r.jsx)("div",{children:Object(r.jsx)(P,{listSongs:c})})})),B=c(38),M=function(){return{type:p}},U=function(e){return{type:g,payload:Object(O.a)({},e)}},q=function(e){return{type:x,payload:{error:e}}},z=c(22),G=(c(62),Object(z.a)((function(e){return{info:e.artist.info,loading:e.artist.loading,error:e.artist.error}}),(function(e){return{getArtistInfo:function(t){e(function(e){return function(t){t(M()),fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(e,"&api_key=c47452df41d75f8668f4640f376f4ee9&format=json")).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(U(e))})).catch((function(e){t(q(e.message))}))}}(t))}}}))((function(e){var t=e.getArtistInfo,c=e.info,n=e.loading,s=(e.error,Object(B.a)(e,["getArtistInfo","info","loading","error"]));return Object(a.useEffect)((function(){t(s.match.params.artistName)}),[]),n?Object(r.jsx)("div",{children:Object(r.jsx)(w,{})}):Object(r.jsxs)("div",{className:"artist",children:[Object(r.jsx)("h1",{className:"artist__name",children:c.name}),Object(r.jsxs)("div",{className:"artist__wrapper",children:[Object(r.jsx)("img",{src:c&&c.image&&c.image[1]["#text"],className:"artist__img"}),Object(r.jsx)("ul",{className:"artist__tags-list",children:c&&c.tags&&c.tags.tag.map((function(e){return Object(r.jsx)("li",{className:"artist__tags-item",children:e.name})}))})]}),Object(r.jsx)("p",{className:"artist__info",dangerouslySetInnerHTML:{__html:c&&c.bio&&c.bio.content}})]})}))),V=(c(63),function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"footer__text",children:"\xa92020"})})});c(64);var W=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"app__header",children:Object(r.jsx)(d,{})}),Object(r.jsx)("div",{className:"app__content",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",exact:!0,component:J}),Object(r.jsx)(u.a,{path:"/search",component:L}),Object(r.jsx)(u.a,{path:"/artist/:artistName",exact:!0,component:G})]})}),Object(r.jsx)("div",{className:"app__footer",children:Object(r.jsx)(V,{})})]})},X=c(32),Y={loading:!1,music:[],error:null};var Z={loading:!1,info:{},error:null};var $={loading:!1,foundTracks:{},error:null};var ee=Object(j.c)({music:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case m:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:null,music:[].concat(Object(X.a)(e.music),Object(X.a)(t.payload.tracks.track))});case _:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},artist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:null,info:Object(O.a)(Object(O.a)({},e.info),t.payload.artist)});case x:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},foundTracks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case N:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:null,foundTracks:Object(O.a)(Object(O.a)({},e.foundTracks),t.payload.results.trackmatches)});case v:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}}}),te=Object(j.d)(ee,Object(j.a)(o.a));s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(l.a,{store:te,children:Object(r.jsx)(W,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d9a5ce5d.chunk.js.map
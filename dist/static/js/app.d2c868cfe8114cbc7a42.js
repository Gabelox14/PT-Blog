webpackJsonp([1],{0:function(t,e){},"1kd3":function(t,e){},"2hz1":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"disqus_thread"}})},r=[],a={render:n,staticRenderFns:r};e.a=a},"2x06":function(t,e,i){"use strict";var n=i("fZjL"),r=i.n(n),a=i("cX0o");e.a={name:"blog-feed",resource:"BlogFeed",props:{filters:{type:Object,default:function(){}}},data:function(){return{posts:[],transition:"preview-appear"}},computed:{reading:function(){return this.filters.post},scrollDelay:function(){return this.$device.phone?0:560},figureClass:function(){return{"preview__figure--mobile":this.$device.phone&&this.reading}},feed:function(){var t=this,e={post:function(t,e){return t===e.id},author:function(e,i){var n=i.author;return e===t.kebabify(n)}};return r()(this.filters).length?this.posts.filter(function(i){return r()(t.filters).every(function(n){return e[n](t.filters[n],i)})}):this.posts}},methods:{scrollTo:a.c,kebabify:a.a,prettyDate:a.b,getBgImg:function(t){return{backgroundImage:"url("+t+")"}},stackPosts:function(t){var e=this,i=void 0,n=function(){e.posts.push(t.shift()),t.length||(e.transition="preview",clearInterval(i))};i=setInterval(n,125)}},mounted:function(){var t=this;this.$getResource("feed").then(function(e){r()(t.filters).length?(t.posts=e,t.transition="preview"):t.stackPosts(e)})}}},"5lVm":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjkiIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik04Ny45NiA2Ljc2N2wtMi40NjIgNC4yNjUtMi40Ni00LjI2NWgtOC4ybDEwLjY2IDE4LjQ2Nkw5Ni4xNiA2Ljc2N0g4Ny45NnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQxYjg4MyIvPjxwYXRoIGQ9Ik04Ny45NiA2Ljc2N2wtMi40NjIgNC4yNjUtMi40Ni00LjI2NWgtMy45MzZsNi4zOTcgMTEuMDggNi4zOTctMTEuMDhIODcuOTZ6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzNDQ5NWUiLz48cGF0aCBkPSJNMTQzLjY3NyAxMC41MDdsLTYuNDYyLTMuNzQ3Yy0uNTgxLS4zMjMtMS40ODYtLjMyMy0yLjA2NyAwbC02LjQ2MSAzLjc0N2MtLjUxNy4zODctLjk2OSAxLjE2My0uOTY5IDEuODF2Ny40M2MwIC42NDYuNDUyIDEuNDIyIDEuMDM0IDEuNzQ1bDYuNDYxIDMuNzQ3Yy41ODEuMzIzIDEuNDg2LjMyMyAyLjA2NyAwbDYuNDYyLTMuNzQ3Yy41ODEtLjMyMyAxLjAzMy0xLjEgMS4wMzMtMS43NDV2LTcuNDNjLS4wNjQtLjY0Ni0uNTE2LTEuNDIyLTEuMDk4LTEuODFtLTEuNzQ0IDQuMDcxaC0uNjQ3di0xLjE2M2MwLS44NC0uNjQ2LTEuMTYzLTEuOTM3LTEuMTYzaC0uMDY1Yy0zLjEwMiAwLTIuODQ0LTEuMTYzLTIuOTA4LTEuNjE2aC0uMDY0Yy0uMDY1LjQ1My4xOTMgMS42MTYtMi45MDggMS42MTZoLS4wNjRjLTEuMjkzIDAtMS45MzkuMjU5LTEuOTM5IDEuMTYzdi45MDVsMTAuNTMyIDMuMDM3djEuMjkxYzAgMS4yMjktLjU4MiAxLjk0LTIuNjQ5IDEuOTRoLS4xM2MtMS41NSAwLTIuNTg0LjMyMi0yLjU4NCAxLjYxNWgtLjY0NmMwLTEuMjI5LS45Ny0xLjYxNi0yLjU4NC0xLjYxNi0yLjAwNCAwLTIuNjUtLjcxLTIuNjUtMS45MzlWMTcuNTVoLjY0NnYxLjE2M2MwIC44NC42NDYgMS4xNjMgMS45MzkgMS4xNjNoLjA2NWMzLjEgMCAyLjg0MiAxLjE2MyAyLjkwNyAxLjYxNmguMDY1Yy4wNjQtLjQ1My0uMTk1LTEuNjE2IDIuOTA3LTEuNjE2aC4xM2MxLjI5MSAwIDEuOTM3LS4yNTggMS45MzctMS4xNjN2LS42NDZsLTEwLjU5Ni0zLjFWMTMuNDhjMC0xLjIyOC41ODEtMS45MzkgMi42NDktMS45MzloLjEyOWMxLjYxNiAwIDIuNTg1LS4zMjMgMi41ODUtMS42MTVoLjY0NmMwIDEuMjI4Ljk2OSAxLjYxNSAyLjU4NSAxLjYxNWguMDY0YzIuMDAzIDAgMi42NS43MTEgMi42NSAxLjk0bC0uMDY1IDEuMDk3eiIgZmlsbD0iI2Y2ZTc2NyIvPjxnPjxwYXRoIGQ9Ik0xNTEuNjc3IDEzLjU5NGMwLTEuMDcgMS4xNDYtMS41MjcgMi4wNjQtMS41MjcuOTE2IDAgMS45MDkuMzA1IDEuOTg2IDEuMzc1aC44NGMtLjIzLTEuNzU3LTEuNzU3LTIuMTQtMi45MDMtMi4xNC0xLjQ1MiAwLTIuODI3Ljg0LTIuODI3IDIuNDQ1IDAgMS45MSAyLjIxNiAyLjM2OCAzLjY2OCAyLjkwNC43NjMuMjI5IDEuMzc1LjY4NyAxLjM3NSAxLjUyNyAwIDEuMTQ2LTEuMTQ2IDEuNzU4LTIuMTM5IDEuNzU4LTEuMjIzIDAtMi4yMTYtLjM4Mi0yLjIxNi0xLjc1OGgtLjg0MWMwIDEuNDUyIDEuMjIzIDIuNTIgMi42NzQgMi41MiAxLjgzNCAwIDMuNTE1LS42MSAzLjUxNS0yLjUyLS4xNTMtMy4yMS01LjE5Ni0yLjA2Mi01LjE5Ni00LjU4NG0xNS43NCA1LjczbC00Ljk2Ni03Ljg3aC0uOTE4djguOTRoLjg0MXYtNy43MTdsNC44MTMgNy43MTdoLjk5NHYtOC45NGgtLjg0MWwuMDc3IDcuODdtNi4yNjUgMS4xNDdoLjg0di05LjAxNmgtLjg0djkuMDE2bTguNjMzLTkuMDE2aC0yLjIxNnY4LjkzOWguODQxdi0zLjg5NmgxLjQ1MmMxLjc1NyAwIDMuNjY4LS4zODMgMy42NjgtMi41MjItLjA3Ny0yLjE0LTIuMDYzLTIuNTIxLTMuNzQ1LTIuNTIxbS41MzYgNC4zNTVoLTEuOTg3di0zLjU5MWgxLjk4N2MxLjIyMSAwIDIuMjkxLjM4MiAyLjI5MSAxLjc1Ny0uMDc1IDEuNDUyLTEuMTQ1IDEuODM1LTIuMjkxIDEuODM1bTEwLjM5MSA0LjA0OGMtMi4yOTMgMC0yLjk4MS0yLjA2Mi0yLjk4MS0zLjg5NyAwLTEuODMzLjY4OC0zLjg5NiAyLjk4MS0zLjg5Ni45OTMgMCAxLjk4Ni40NTggMi4xMzkgMS41MjhoLjg0MWMtLjE1NC0xLjYwNC0xLjUyOS0yLjI5MS0yLjk4LTIuMjkxLTIuNjc1IDAtMy44OTcgMi4yMTYtMy44OTcgNC42NiAwIDIuNTIgMS4xNDYgNC42NiAzLjg5NyA0LjY2IDEuNDUxIDAgMi44MjYtLjg0IDMuMDU1LTIuMzY4aC0uODRjLS4yMjkgMS4xNDYtMS4yMjIgMS42MDUtMi4yMTUgMS42MDVtOS4wOTItOC40MDVsLTMuNTkxIDguOTM5aC44NGwuOTE3LTIuNDQ1aDQuNDMybC45OTMgMi40NDVoLjkxNmwtMy41OTEtOC45NGgtLjkxNm0tMS41MjggNS44MDhsMS45ODctNS4wNDMgMS45MDkgNS4wNDNoLTMuODk2bTEzLjI5NC0xLjUzYzEuMDctLjMwNCAxLjc1Ny0uOTkyIDEuNzU3LTEuOTg1IDAtLjg0LS4zMDUtMS41MjgtLjkxNi0xLjkxLS42ODgtLjQ2LTEuMy0uNDYtMi4xMzktLjQ2aC0yLjkwNHY4Ljk0aC44NHYtNC4yOGgyLjIxNmMxLjYwNSAwIDEuNzU3LjM4NCAxLjkxIDIuNDQ3LjA3Ny42MS4wNzcgMS4yOTkuMzA2IDEuODM0aC45MTdjLS4zODItLjUzNS0uMzA2LTEuMjIzLS40NTktMi42NzQtLjE1My0uOTE4LS4zODItMS42ODItMS41MjgtMS45MW0tMS43NTctLjMwNmgtMS43NTd2LTMuMjFoMS44MzNjLjg0IDAgMi40NDUtLjE1MiAyLjQ0NSAxLjYwNS4wNzcgMS41MjgtMS4zNzUgMS42MDUtMi41MjEgMS42MDVtNi40MTgtMy45NzN2Ljc2NGgyLjkwM3Y4LjI1MmguNzY0di04LjI1MmgyLjgyN3YtLjc2NGgtNi40OTR6IiBmaWxsPSIjNzA4MDkwIiBmaWxsLW9wYWNpdHk9Ii43NDkiLz48L2c+PGc+PHBhdGggZD0iTTIuNjcgMjAuMTczdi04LjM0NmgxLjQ4NGwyLjYwMiA2LjQzMyAyLjU5LTYuNDMzaDEuNDkxdjguMzQ2SDkuOHYtNy4wMmwtMi44MjkgNy4wMmgtLjQyMmwtMi44NC03LjAydjcuMDJIMi42N205LjI0OSAwbDMuMzY1LTguMzQ2aDEuMjlsMy4zNTMgOC4zNDZoLTEuMTg0bC0uNzQtMS44NjNIMTMuODVsLS43NCAxLjg2M2gtMS4xOTFtMi4yNDEtMi43OGgzLjU0NGwtMS43NzgtNC41MDMtMS43NjYgNC41MDNtNi44NTQgMi43OHYtOC4zNDZoMi44NTJjLjg0NyAwIDEuNTk5LjE4NCAyLjI1NC41NTNhMy43OSAzLjc5IDAgMCAxIDEuNTAzIDEuNWMuMzUyLjY1My41MyAxLjM4NS41MiAyLjEyNiAwIC41OTEtLjEwMiAxLjE0My0uMzA1IDEuNjUyYTMuOTE4IDMuOTE4IDAgMCAxLS44NTYgMS4zMjRjLS4zODUuMzgzLS44NDcuNjgtMS4zNTQuODczYTQuNzYgNC43NiAwIDAgMS0xLjc2Mi4zMThoLTIuODUxbTEuMDM4LS45M2gxLjgxNGMuNjU2IDAgMS4yMy0uMTQ2IDEuNzIzLS40MzkuNDc1LS4yNzQuODYtLjY4IDEuMTA5LTEuMTY3LjI0Ny0uNDg1LjM3LTEuMDI5LjM3LTEuNjMgMC0uNjEyLS4xMjItMS4xNi0uMzY0LTEuNjQ0YTIuODA1IDIuODA1IDAgMCAwLTEuMDk5LTEuMTY3Yy0uNDkyLS4yOTMtMS4wNy0uNDQtMS43MzktLjQ0aC0xLjgxNHY2LjQ4OG03LjcxLjkyOXYtOC4zNDZoNS40Njd2LjkzaC00LjQyOHYyLjY4N2g0LjMzOHYuOTIySDMwLjh2Mi44NzhoNC40Mjl2LjkyOUgyOS43Nm05LjUyOS04LjM0NmgxLjE0OGwxLjg1IDYuOTU4IDEuOTItNi45NThoLjg2MWwxLjkxMyA2Ljk1OCAxLjgzOC02Ljk1OGgxLjE2N2wtMi4zODggOC4zNDZoLTEuMTNsLTEuODQtNi43MzItMS44MzcgNi43MzJoLTEuMTI1bC0yLjM3Ny04LjM0Nm0xMS44NDcgOC4zNDZ2LTguMzQ2aDEuMDM4djguMzQ2aC0xLjA0bTIuNDA3LTcuNDE3di0uOTI5aDYuMzN2LjkzSDU3LjIydjcuNDE2aC0xLjAzOHYtNy40MTdoLTIuNjRtNy42OTQgNy40MTd2LTguMzQ2aDEuMDM4djMuNTkzaDQuODc2di0zLjU5M2gxLjAzOHY4LjM0Nkg2Ny4xNXYtMy44M2gtNC44NzZ2My44M2gtMS4wMzh6IiBmaWxsPSIjNzA4MDkwIiBmaWxsLW9wYWNpdHk9Ii43NDkiLz48L2c+PGc+PHBhdGggZD0iTTEwMy40NjcgMjAuMjQ3di04LjQ5NGgzLjc4MmMuNzI5IDAgMS4zMDkuMTk5IDEuNzM4LjU5Ni40MjkuMzk3LjY0NC45Mi42NDQgMS41NjcgMCAuNTEtLjE0Ni45MzktLjQzNiAxLjI4OGExLjg3IDEuODcgMCAwIDEtMS4wNTcuNjU4Yy40NTIuMDcyLjg0Mi4zMSAxLjE3LjcyLjMyNi40MDguNDkuODY1LjQ5IDEuMzcxIDAgLjY5Mi0uMjE4IDEuMjQ4LS42NTUgMS42NjctLjQzNy40MTgtMS4wNC42MjgtMS44MDcuNjI4aC0zLjg2OW0xLjA1Ny0uOTQ1aDIuNjEzYy40ODkgMCAuODcyLS4xMzEgMS4xNDgtLjM5Mi4yNzUtLjI2LjQxMy0uNjE5LjQxMy0xLjA3IDAtLjQxNC0uMTM4LS43NjMtLjQxMS0xLjA0NS0uMjczLS4yODItLjY1Ny0uNDIyLTEuMTUtLjQyMmgtMi42MTN2Mi45M20wLTMuODdoMi41NDRjLjQ2NCAwIC44MjUtLjEyNyAxLjA4Mi0uMzc5LjI1OC0uMjUzLjM4NS0uNTgxLjM4NS0uOTg0IDAtLjM5Ny0uMTI3LS43MjYtLjM4NS0uOTg0LS4yNTctLjI2MS0uNjE4LS4zODktMS4wODItLjM4OWgtMi41NDR2Mi43MzZtNS42ODktMy42ODJoMS4yMzhsMi42MzcgMy45NDkgMi42MzctMy45NWgxLjIzOGwtMy4zNCA0LjkwMnYzLjU5NWgtMS4wNTd2LTMuNTk1bC0zLjM1My00LjkwMXoiIGZpbGw9IiM3MDgwOTAiIGZpbGwtb3BhY2l0eT0iLjc0OSIvPjwvZz48L3N2Zz4="},"6Lyb":function(t,e,i){"use strict";e.a={name:"blog-footer"}},"7A2W":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"nav"},[i("h1",{staticClass:"nav__title"},[i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.content.title))])],1),t._v(" "),i("transition-group",{staticClass:"nav__menu",attrs:{tag:"menu",name:"nav__item"}},t._l(t.labels,function(e){return i("li",{key:e,staticClass:"nav__item",on:{click:t.navBack}},[i("i",{staticClass:"nav__item--icon"}),t._v(" "),i("span",{staticClass:"nav__item--label"},[t._v(t._s(e))])])}))],1)},r=[],a={render:n,staticRenderFns:r};e.a=a},"8EWh":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view",{attrs:{id:"app"}})},r=[],a={render:n,staticRenderFns:r};e.a=a},"8FFV":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition-group",{staticClass:"blog__feed",attrs:{tag:"ul",name:t.transition}},t._l(t.feed,function(e){return i("li",{key:e.id,staticClass:"preview"},[i("figure",{staticClass:"preview__figure",class:t.figureClass,style:t.getBgImg(e.image)},[i("transition",{attrs:{name:"v--fade"}},[!t.reading||t.$device.phone?i("figcaption",{staticClass:"preview__details"},[i("router-link",{staticClass:"preview__title",attrs:{to:"/read/"+e.id},nativeOn:{click:function(e){t.scrollTo(0,220,t.scrollDelay)}}},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),i("div",{staticClass:"preview__meta"},[i("time",{staticClass:"preview__published"},[t._v("\n              "+t._s(t.prettyDate(e.published))+"\n            ")]),t._v(" "),i("router-link",{staticClass:"preview__author",attrs:{to:"/by/"+t.kebabify(e.author)},nativeOn:{click:function(e){t.scrollTo(0,220,t.scrollDelay)}}},[t._v("\n              "+t._s(e.author)+"\n            ")])],1)],1):t._e()])],1)])}))},r=[],a={render:n,staticRenderFns:r};e.a=a},"9k9s":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("eJ85");i.d(e,"Blog",function(){return n.a});var r=i("bksL");i.d(e,"BlogFeed",function(){return r.a});var a=i("rcwA");i.d(e,"BlogPost",function(){return a.a})},CHQz:function(t,e,i){"use strict";var n=i("y7Eb"),r=i("xdpD"),a=i("InHs"),s=i("kYEd");e.a={name:"blog",components:{BlogNav:n.a,BlogFeed:r.a,BlogPost:a.a,BlogFooter:s.a},resource:"Blog",props:{post:String,author:String},data:function(){return{navs:0,title:"",labels:{post:"",author:""}}},computed:{content:function(){return{title:this.title,labels:this.labels}},filters:function(){var t={};return this.post&&(t.post=this.post),this.author&&(t.author=this.author),t}},watch:{"$route.name":function(t,e){t!==e&&this.navs++}},mounted:function(){this.$getResource("blog").then(function(t){})}}},Dk1v:function(t,e){t.exports={_args:[["scrollto-with-animation@4.5.2","C:\\Users\\agabr\\OneDrive\\Escritorio\\vue-blog-demo"]],_from:"scrollto-with-animation@4.5.2",_id:"scrollto-with-animation@4.5.2",_inBundle:!1,_integrity:"sha1-WoS10aHtlDvlRiVULXcxk9bBGd4=",_location:"/scrollto-with-animation",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"scrollto-with-animation@4.5.2",name:"scrollto-with-animation",escapedName:"scrollto-with-animation",rawSpec:"4.5.2",saveSpec:null,fetchSpec:"4.5.2"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/scrollto-with-animation/-/scrollto-with-animation-4.5.2.tgz",_spec:"4.5.2",_where:"C:\\Users\\agabr\\OneDrive\\Escritorio\\vue-blog-demo",author:{name:"David Sancho",email:"dsnxmoreno@gmail.com",url:"https://github.com/davesnx"},bugs:{url:"https://github.com/davesnx/scrollto-with-animation/issues"},dependencies:{"animation-frame":"^0.3.0"},description:"Animated Scroll with requestAnimationFrame. For smooth animate scrollTo defining the easing, running at 60FPS and cross-browser",devDependencies:{"babel-cli":"^6.9.0","babel-loader":"^6.2.2","babel-preset-es2015":"^6.3.13","babel-preset-stage-2":"^6.3.13","jasmine-core":"^2.3.4","json-loader":"^0.5.4",karma:"^0.13.9","karma-chrome-launcher":"^0.2.1","karma-cli":"0.1.0","karma-coverage":"^0.5.3","karma-jasmine":"^0.3.6","karma-phantomjs-launcher":"^0.2.1","karma-sourcemap-loader":"^0.3.6","karma-spec-reporter":"0.0.22","karma-story-reporter":"^0.3.1","karma-webpack":"^1.7.0",phantomjs:"^1.9.18","pre-push":"^0.1.1",webpack:"^1.12.13"},files:["src","lib","dist","README.md"],homepage:"https://github.com/davesnx/scrollto-with-animation#readme",keywords:["animation","scrollTo","60fps","cross-browser","requestAnimationFrame","easeInQuad","browserify"],license:"MIT",main:"lib/index.js",name:"scrollto-with-animation","pre-commit":["test"],repository:{type:"git",url:"git+https://github.com/davesnx/scrollto-with-animation.git"},scripts:{build:"npm run clean && npm run compile:prod && npm run minify:prod",clean:"rm -rf dist/* && rm -rf lib/","compile:dev":"NODE_ENV=dev babel src --watch --out-dir lib","compile:prod":"NODE_ENV=prod babel src --out-dir lib","minify:dev":"NODE_ENV=dev webpack --watch","minify:prod":"NODE_ENV=prod webpack -p",prepublish:"npm run build",test:"NODE_ENV=prod karma start test/karma.config.js --single-run","test:dev":"NODE_ENV=prod karma start test/karma.config.js --auto-watch"},standard:{parser:"babel-eslint",global:["jasmine","it","describe","beforeEach","afterEach","expect","spyOn"]},version:"4.5.2"}},"E7C/":function(t,e,i){"use strict";var n=i("d9EC"),r=i("cX0o");e.a={name:"blog-post",resource:"BlogPost",components:{VueDisqus:n.a},props:{post:String},data:function(){return{title:"",author:"",content:"",published:"",description:"",commentsReady:!1,ready:!1}},computed:{allReady:function(){return this.ready&&this.post}},watch:{post:function(t,e){var i=this;t!==e&&this.post&&(this.commentsReady=!1,this.$getResource("post",t).then(this.showComments).then(function(){i.ready=!0}))}},methods:{kebabify:r.a,prettyDate:r.b,showComments:function(){var t=this;window.__PRERENDER_INJECTED&&window.__PRERENDER_INJECTED.prerendered||setTimeout(function(){t.commentsReady=!0},1e3)}},mounted:function(){var t=this;if(!this.post)return void(this.ready=!0);this.$getResource("post",this.post).then(this.showComments).then(function(){t.ready=!0})}}},InHs:function(t,e,i){"use strict";var n=i("E7C/"),r=i("uHAj"),a=i("VU/8"),s=a(n.a,r.a,!1,null,null,null);e.a=s.exports},M93x:function(t,e,i){"use strict";function n(t){i("1kd3")}var r=i("xJD8"),a=i("8EWh"),s=i("VU/8"),u=n,o=s(r.a,a.a,!1,u,null,null);e.a=o.exports},MdQY:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return matchMedia});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__=__webpack_require__("d7EF"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__),matchMediaFallback=function matchMediaFallback(){var listeners=[],idle=!0,device=function(){var t=document.createElement("div"),e=document.createElement("style");return t.id="match-media-node",e.innerHTML="#match-media-node {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      bottom: 100%;\n      overflow: scroll;\n    }",document.head.appendChild(e),document.body.insertBefore(t,document.body.children[0]),{get width(){return t.clientWidth},get height(){return t.clientHeight},get orientation(){return t.clientHeight>t.clientWidth?"portrait":"landscape"},get fontSize(){return window.getComputedStyle(document.documentElement).getPropertyValue("font-size")}}}(),createHandler=function createHandler(feature,value){if("orientation"===feature)return function(){return value===device.orientation};var _feature$split$revers=feature.split("-").reverse(),_feature$split$revers2=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_feature$split$revers,2),prop=_feature$split$revers2[0],limit=_feature$split$revers2[1],operand=limit?"min"===limit?"<":">":"==",parseValue=function(){return~value.indexOf("em")?function(){return parseFloat(value)*device.fontSize}:function(){return parseFloat(value)}}(),handlers={width:function width(){return eval(parseValue()+operand+device.width)},height:function height(){return eval(parseValue()+operand+device.height)}};return handlers[prop]},parseQuery=function(t){var e=t.replace(/[()\s]/g,"").split(":"),i=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(e,2),n=i[0],r=i[1];return createHandler(n,r)};return window.addEventListener("resize",function(){if(idle){idle=!1;var t=device.width,e=device.height,i=setInterval(function(){t!==device.width||e!==device.height?(t=device.width,e=device.height):(clearTimeout(i),listeners.forEach(function(t){return t()}),idle=!0)},100)}}),function(t){var e=parseQuery(t),i={get matches(){return e()}};return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},i,{addListener:function(t){var e=function(){return t(i)};listeners.push(e)}})}},matchMedia=window.matchMedia||matchMediaFallback()},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r=i("M93x"),a=i("YaEn"),s=i("9k9s"),u=i("cb2V"),o=i("uJQI"),c=i("heTW"),M=i.n(c);n.a.config.productionTip=!1,n.a.use(u.a,{resources:s,endpoint:"/static/api"}),n.a.use(o.a,{phone:"max-width: 567px",tablet:"min-width: 568px",mobile:"max-width: 1024px",laptop:"min-width: 1025px",desktop:"min-width: 1280px",monitor:"min-width: 1448px"}),new n.a({router:a.a,render:function(t){return t(r.a)},mounted:function(){M.a.start(),M.a.on("hide",function(){document.dispatchEvent(new Event("app.rendered"))})}}).$mount("#app")},O6JE:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{appear:"",name:"v--mask"}},[t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"blog__footer"},[n("a",{staticClass:"signature",attrs:{href:"https://snipcart.com",target:"_blank"}},[n("img",{attrs:{src:i("5lVm")}})])])}],a={render:n,staticRenderFns:r};e.a=a},SGec:function(t,e,i){"use strict";var n=i("CHQz"),r=i("dMPu"),a=i("VU/8"),s=a(n.a,r.a,!1,null,null,null);e.a=s.exports},WYec:function(t,e,i){"use strict";var n=i("//Fk"),r=i.n(n),a=i("mvHQ"),s=i.n(a);e.a=function(){var t={};return{has:function(e){return!!t[e]},get:function(e){return JSON.parse(t[e])},set:function(e,i){return t[e]=s()(i),r.a.resolve(i)}}}()},YaEn:function(t,e,i){"use strict";var n=i("7+uW"),r=i("/ocq"),a=i("bGai");n.a.use(r.a),e.a=new r.a({mode:"history",linkActiveClass:"active",routes:[{path:"/",name:"feed",component:a.a},{path:"/by/:author",name:"author",props:!0,component:a.a},{path:"/read/:post",name:"post",props:!0,component:a.a}]})},bGai:function(t,e,i){"use strict";var n=i("SGec");i.d(e,"a",function(){return n.a})},bksL:function(t,e,i){"use strict";e.a={feed:function(){return{path:"/feed.json",resolve:function(t,e){return e.pipe(t.results)}}}}},cX0o:function(t,e,i){"use strict";i.d(e,"c",function(){return u}),i.d(e,"a",function(){return o}),i.d(e,"b",function(){return c});var n=i("//Fk"),r=i.n(n),a=i("M75F"),s=i.n(a),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new r.a(function(n){setTimeout(function(){s()(document.documentElement,"scrollTop",t,e,"easeInOutSine",n)},i)})},o=function(t){return t.toLowerCase().replace(" ","-")},c=function(t){return new Date(t).toString().split(" ").slice(0,4).join(" ").replace(/( \d+)$/,",$1")}},cb2V:function(t,e,i){"use strict";var n=i("fZjL"),r=i.n(n),a=i("//Fk"),s=i.n(a),u=i("WYec"),o=i("mB6w"),c=i.n(o);e.a={install:function(t,e){var i=e.endpoint,n=void 0===i?"":i,a=e.resources,o=void 0===a?{}:a;t.prototype.$getResource=function(t,e){var i=this,a=this.$options.resource;if(a&&o[a]&&o[a][t]){var M=o[a][t](e),l=M.path,j=M.resolve,N=n+l,L={pipe:function(t){return s.a.resolve(t)},merge:function(t){return c()(i.$data,t),s.a.resolve(t)},set:function(t){return r()(t).forEach(function(e){i.$set(i.$data,e,t[e])}),s.a.resolve(t)}};return u.a.has(N)?j(u.a.get(N),L):fetch(N).then(function(t){return t.json()}).then(function(t){return u.a.set(N,t)}).then(function(t){return j(t,L)})}}}}},d9EC:function(t,e,i){"use strict";var n=i("gNKr"),r=i("2hz1"),a=i("VU/8"),s=a(n.a,r.a,!1,null,null,null);e.a=s.exports},dMPu:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"blog",class:{"blog--reading":this.post}},[i("blog-nav",{attrs:{content:t.content,filters:t.filters,navs:t.navs}}),t._v(" "),i("blog-feed",{attrs:{filters:t.filters}}),t._v(" "),i("blog-post",{attrs:{post:t.post}}),t._v(" "),i("blog-footer")],1)},r=[],a={render:n,staticRenderFns:r};e.a=a},eJ85:function(t,e,i){"use strict";e.a={blog:function(){return{path:"/blog.json",resolve:function(t,e){var i=t.results[0];return e.merge({title:i.title,labels:{post:i.post_label,author:i.author_label}})}}}}},gNKr:function(t,e,i){"use strict";e.a={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted:function(){if(window.DISQUS)return void this.reset(window.DISQUS);this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){e.setBaseConfig(this)}})},init:function(){var t=this,e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout(function(){var e=document,i=e.createElement("script");i.setAttribute("id","embed-disqus"),i.setAttribute("data-timestamp",+new Date),i.type="text/javascript",i.async=!0,i.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(i)},0)},setBaseConfig:function(t){var e=this;t.page.identifier=this.identifier||this.$route.path||window.location.pathname,t.page.url=this.url||this.$el.baseURI,this.title&&(t.page.title=this.title),this.remote_auth_s3&&(t.page.remote_auth_s3=this.remote_auth_s3),this.api_key&&(t.page.api_key=this.api_key),this.sso_config&&(t.sso=this.sso_config),this.language&&(t.language=this.language),t.callbacks.onReady=[function(){e.$emit("ready")}]}}}},ggVv:function(t,e,i){"use strict";var n=i("fZjL"),r=i.n(n);e.a={name:"blog-nav",props:{navs:Number,content:Object,filters:{type:Object,default:function(){}}},computed:{labels:function(){var t=this;return r()(this.filters).map(function(e){return t.content.labels[e]})}},methods:{navBack:function(){this.navs&&!this.filters.author?this.$router.go(-1):this.$router.push("/")}}}},kYEd:function(t,e,i){"use strict";var n=i("6Lyb"),r=i("O6JE"),a=i("VU/8"),s=a(n.a,r.a,!1,null,null,null);e.a=s.exports},rcwA:function(t,e,i){"use strict";var n=i("Dd8w"),r=i.n(n);e.a={post:function(t){return{path:"/post/"+t+".json",resolve:function(t,e){var i=t.results[0],n=i.title,a=i.content,s=i.meta;return a="<p>"+a.split("\n\n").join("</p><p>")+"</p>",e.merge(r()({title:n,content:a},s))}}}}},uHAj:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"post"}},[t.allReady?i("article",{staticClass:"post"},[i("header",{staticClass:"post__header"},[i("h2",{staticClass:"post__title"},[t._v(t._s(t.title))]),t._v(" "),i("h3",{staticClass:"post__meta"},[t._v("by "),i("router-link",{staticClass:"post__author",attrs:{to:"/by/"+t.kebabify(t.author)}},[t._v(t._s(t.author))]),t._v(" "),i("span",{staticClass:"post__sep"}),t._v(" "),i("time",[t._v(t._s(t.prettyDate(t.published)))])],1),t._v(" "),i("blockquote",{staticClass:"post__subtitle"},[t._v(t._s(t.description))])]),t._v(" "),i("section",{staticClass:"post__body rte",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),i("footer",{staticClass:"post__footer"},[t.commentsReady?i("vue-disqus",{key:t.post,attrs:{shortname:"vue-blog-demo",identifier:t.post,url:"https://vue-blog-demo.netlify.com/read/"+t.post}}):t._e()],1)]):t._e()])},r=[],a={render:n,staticRenderFns:r};e.a=a},uJQI:function(t,e,i){"use strict";var n=i("fZjL"),r=i.n(n),a=i("MdQY");e.a={install:function(t,e){var i=new t({data:function(){return{devices:{}}},methods:{addDevice:function(t,e){var i=this;return this.$set(this.devices,t,e),function(e){var n=e.matches;i.devices[t]=n}}}});r()(e).forEach(function(t){var n=Object(a.a)("("+e[t]+")"),r=i.addDevice(t,n.matches);n.addListener(r)}),t.prototype.$device=i.devices}}},xJD8:function(t,e,i){"use strict";e.a={name:"app"}},xdpD:function(t,e,i){"use strict";var n=i("2x06"),r=i("8FFV"),a=i("VU/8"),s=a(n.a,r.a,!1,null,null,null);e.a=s.exports},y7Eb:function(t,e,i){"use strict";var n=i("ggVv"),r=i("7A2W"),a=i("VU/8"),s=a(n.a,r.a,!1,null,null,null);e.a=s.exports}},["NHnr"]);
//# sourceMappingURL=app.d2c868cfe8114cbc7a42.js.map
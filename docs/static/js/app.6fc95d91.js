(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&p.push(l[a][0]),l[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==l[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},l={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/flexcourse/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"42c0":function(e,t,n){"use strict";var r=n("6dcc"),l=n.n(r);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("7faf"),n("2877")),i={},c=Object(a["a"])(i,l,o,!1,null,null,null),s=c.exports,f=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v(" flex教程 "),n("button",{on:{click:e.init}},[e._v("初始化")]),n("button",{on:{click:e.copy}},[e._v("复制")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentStyle,expression:"currentStyle"}],ref:"copySelect",attrs:{type:"text"},domProps:{value:e.currentStyle},on:{input:function(t){t.target.composing||(e.currentStyle=t.target.value)}}})]),n("main",[n("aside",e._l(e.attrList,(function(t,r){return n("section",{key:r},[n("h3",[e._v(" "+e._s(t.name)+" "),n("span",[e._v(e._s(t.discribe))]),n("i",{staticClass:"slideUp"})]),n("ul",[e._m(0,!0),e._l(t.value,(function(l,o){return n("li",{key:o,on:{click:function(n){return e.showExample(t.name,l.key,r,o)}}},[n("label",{class:e.activeList[r]==o?"active":""},[e._v(" "+e._s(l.key)+" ")]),n("p",[e._v(e._s(l.de))])])}))],2)])})),0),n("article",{style:e.flexStyle},e._l(e.exampleList,(function(t,r){return n("div",{key:r,staticClass:"example",style:{background:"rgba("+20*(r%7+1)+","+20*(r%7+2)+","+20*(r%7+3)+","+.2*(r%4+1)+")"}},[e._v(" "+e._s(t)+" ")])})),0)])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("label",[e._v("可选值")]),n("p",[e._v("含义")])])}],d=(n("99af"),n("cb29"),n("c975"),n("d81d"),n("ac1f"),n("5319"),[{name:"flex-direction",discribe:"决定主轴的方向（即项目的排列方向）",value:[{key:"row",de:"横向(默认)"},{key:"row-reverse",de:"反横向"},{key:"column",de:"纵向"},{key:"column-reverse",de:"反纵向"}]},{name:"flex-wrap",discribe:"一条轴线排不下时换行方式",value:[{key:"nowrap",de:"不换行(默认)"},{key:"wrap ",de:"换行，第一行在上方"},{key:"wrap-reverse",de:"换行，第一行在下方"}]},{name:"flex-flow",discribe:"flex-direction属性和flex-wrap属性的简写形式 <flex-direction> || <flex-wrap>",value:[{key:"row nowrap",de:"横向 || 不换行(默认)"},{key:"row wrap",de:"横向 || 换行第一行在上方"},{key:"row wrap-reverse",de:"横向 || 换行第一行在下方"},{key:"row-reverse nowrap",de:"反横向 || 不换行"},{key:"row-reverse wrap",de:"反横向 || 换行第一行在上方"},{key:"row-reverse wrap-reverse",de:"反横向 || 换行第一行在下方"},{key:"column nowrap",de:"纵向 || 不换行"},{key:"column wrap",de:"纵向 || 换行第一行在上方"},{key:"column wrap-reverse",de:"纵向 || 换行第一行在下方"},{key:"column-reverse nowrap",de:"反纵向 || 不换行(默认)"},{key:"column-reverse wrap",de:"反纵向 || 换行第一行在上方"},{key:"column-reverse wrap-reverse",de:"反纵向 || 换行第一行在下方"}]},{name:"justify-content",discribe:"在主轴上的对齐方式",value:[{key:"flex-start",de:"起始"},{key:"flex-end ",de:"结束"},{key:"center ",de:"居中"},{key:"space-between",de:"两端"},{key:"space-around",de:"散列"}]},{name:"align-items",discribe:"交叉轴上对齐方式",value:[{key:"flex-start",de:"起始"},{key:"flex-end ",de:"结束"},{key:"center ",de:"居中"},{key:"stretch",de:"两端（会拉伸元素）"},{key:"baseline",de:"第一行文字基线"}]},{name:"align-content",discribe:"多根轴线的对齐方式",value:[{key:"flex-start",de:"交叉轴起始"},{key:"flex-end ",de:"交叉轴结束"},{key:"center ",de:"交叉轴居中"},{key:"space-between",de:"交叉轴两端"},{key:"space-around",de:"交叉轴散列"},{key:"stretch",de:"交叉轴两端且占满整个交叉轴(拉伸元素)"}]}]),y=d,x={name:"Home",components:{},data:function(){return{attrList:y,exampleList:[],activeList:[0,0,0,0,0,0],flexStyle:{flexDirection:"row",flexWrap:"nowrap",flexFlow:"row nowrap",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start"},currentStyle:"{flex-direction:'row';flex-wrap:'nowrap';flex-flow:'row nowrap';justify-content:'flex-start';align-items:'flex-start';align-content:'flex-start'}"}},created:function(){this.init()},methods:{init:function(){this.flexStyle={flexDirection:"row",flexWrap:"nowrap",flexFlow:"row nowrap",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start"},this.exampleList.length=20,console.log(this.exampleList),this.exampleList.fill(1,0,20),this.exampleList=this.exampleList.map((function(e,t){return t+1})),console.log(this.exampleList),this.activeList=[0,0,0,0,0,0],this.currentStyle="{flex-direction:".concat(this.flexStyle.flexDirection,";flex-wrap:").concat(this.flexStyle.flexWrap,";flex-flow:").concat(this.flexStyle.flexFlow,";justify-content:").concat(this.flexStyle.justifyContent,";align-items:").concat(this.flexStyle.alignItems,";align-content:").concat(this.flexStyle.alignContent,"}")},copy:function(){var e=this.$refs.copySelect;e.select(),document.execCommand("Copy")},showExample:function(e,t,n,r){var l;e.indexOf("-")>-1?(l=e.replace(/-\w/g,(function(e){return e.toUpperCase()})),l=l.replace(/-/g,"")):l=e,this.activeList[n]=r,this.flexStyle[l]=t,this.currentStyle="{flex-direction:".concat(this.flexStyle.flexDirection,";flex-wrap:").concat(this.flexStyle.flexWrap,";flex-flow:").concat(this.flexStyle.flexFlow,";justify-content:").concat(this.flexStyle.justifyContent,";align-items:").concat(this.flexStyle.alignItems,";align-content:").concat(this.flexStyle.alignContent,"}")}}},m=x,v=(n("42c0"),Object(a["a"])(m,u,p,!1,null,"7191743e",null)),w=v.exports;r["a"].use(f["a"]);var h=[{path:"/",name:"Home",component:w},{path:"/home",name:"Home",component:w}],k=new f["a"]({mode:"history",base:"/flexcourse/",routes:h}),b=k,g=n("2f62");r["a"].use(g["a"]);var S=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:S,render:function(e){return e(s)}}).$mount("#app")},"6dcc":function(e,t,n){},"7faf":function(e,t,n){"use strict";var r=n("b8ff"),l=n.n(r);l.a},b8ff:function(e,t,n){}});
//# sourceMappingURL=app.6fc95d91.js.map
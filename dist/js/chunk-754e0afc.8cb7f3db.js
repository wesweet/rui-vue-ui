(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-754e0afc"],{6702:function(t,e,a){"use strict";a("e833")},a04b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dateSelect-box"},[a("a-card",{staticStyle:{width:"800px"},attrs:{title:"时间范围选择（带对比功能：前一天、前一周、前一月）组件使用展示"}},[a("mj-date-select",{attrs:{fnSelectDate:t.fnSelectDate,compareAllowClear:!0,currentDisabled:!1,defaultValue:[t.moment(),t.moment()],compareDefaultValue:[t.moment(),t.moment()]}})],1),a("a-row",{attrs:{type:"flex"}},[a("a-col",{staticClass:"markdown-body",attrs:{span:20}},[a("dateSelectDocs")],1)],1)],1)},r=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h2",[t._v("使用")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("mj-date-select")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":fnSelectDate")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fnSelectDate"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":compareAllowClear")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":currentDisabled")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":defaultValue")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"[moment(), moment()]"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":compareDefaultValue")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"[moment(), moment()]"')]),t._v("\n/>")]),t._v("\n")])]),a("h2",[t._v("API")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("默认值")]),a("th",[t._v("必填")]),a("th",[t._v("返回值")])])]),a("tbody",[a("tr",[a("td",[t._v("fnSelectDate")]),a("td",[t._v("选择日期时间后组件回调")]),a("td",[t._v("Function")]),a("td",[t._v("function")]),a("td",[t._v("false")]),a("td",[t._v("{开始日期、结束日期、对比开始日期、对比结束日期}")])]),a("tr",[a("td",[t._v("compareAllowClear")]),a("td",[t._v("对比时间是否携带清空功能")]),a("td",[t._v("Boolean")]),a("td",[t._v("true")]),a("td"),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("currentDisabled")]),a("td",[t._v("当前时间选择是否禁用")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")]),a("td",[t._v("false")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("defaultValue")]),a("td",[t._v("当前默认选择时间范围")]),a("td",[t._v("Array")]),a("td",[t._v("[]")]),a("td",[t._v("true")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("compareDefaultValue")]),a("td",[t._v("对比默认时间范围")]),a("td",[t._v("Array")]),a("td",[t._v("[]")]),a("td",[t._v("false")]),a("td",[t._v("-")])])])])])}],c=a("2877"),_={},v=Object(c["a"])(_,l,n,!1,null,null,null),o=v.exports,d=a("c1df"),m=a.n(d),i={name:"DateSelect",components:{dateSelectDocs:o},data(){return{}},methods:{moment:m.a,fnSelectDate(){console.log("选择后回调")},selectCallback(){this.fnSelectDate({start_time:this.startTime,end_time:this.endTime,compare_start_time:this.contrastTime.length>0?this.contrastTime[0].format(this.formatDate):null,compare_end_time:this.contrastTime.length>0?this.contrastTime[1].format(this.formatDate):null})}}},p=i,u=(a("6702"),Object(c["a"])(p,s,r,!1,null,"9cc98bae",null));e["default"]=u.exports},e833:function(t,e,a){}}]);
//# sourceMappingURL=chunk-754e0afc.8cb7f3db.js.map
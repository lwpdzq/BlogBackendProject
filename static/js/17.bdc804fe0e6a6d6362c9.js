webpackJsonp([17],{"/OW9":function(t,o,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(o,"__esModule",{value:!0});var i=e("cs8/"),a=s(i),n=e("NXNv"),r=s(n),c=e("SLXF"),l=s(c),u=e("qm2k"),m=s(u),k=e("XxWu"),h=s(k),d=e("63Js"),N=s(d),b=e("P9l9");o.default={data:function(){return{bookNotes:[],categorys:void 0,top_category:void 0,limit_size:10,bookNotesTimeSorted:!1,bookNotesMostComment:void 0,bookNotesRecommend:void 0,bookNotesPage:0,bookNotesTotalCount:0,noMorebookNotesData:!1,bookNotesMenus:[{title:"顺序",selectedTitle:"逆序",selected:!0,method:"timeSorted"},{title:"评论最多",selected:!1,method:"mostComment"},{title:"推荐",selected:!1,method:"recommend"}],bookNotesDatePickerOptions:{disabledDate:function(t){return t&&t.valueOf()>Date.now()},shortcuts:[{text:"近一周",value:function(){var t=new Date,o=new Date;return o.setTime(o.getTime()-6048e5),[o,t]}},{text:"近一个月",value:function(){var t=new Date,o=new Date;return o.setTime(o.getTime()-2592e6),[o,t]}},{text:"近三个月",value:function(){var t=new Date,o=new Date;return o.setTime(o.getTime()-7776e6),[o,t]}},{text:"近一年",value:function(){var t=new Date,o=new Date;return o.setTime(o.getTime()-31536e6),[o,t]}}]},bookNotesSelectedDateRange:[]}},created:function(){this.top_category=parseInt(this.$route.params.id),this.getDatas()},methods:{selectCategory:function(t){this.top_category=t,this.bookNotesTimeSorted=!1,this.bookNotesMostComment=void 0,this.bookNotesRecommend=void 0,this.bookNotesPage=0,this.bookNotes=[],this.bookNotesTotalCount=0,this.noMoreBookNotesData=!1,this.bookNotesSelectedDateRange=[],this.getBookNoteBaseInfo()},getDatas:function(){this.getCategorys(),this.getBookNoteBaseInfo()},getCategorys:function(){var t=this;(0,b.getCategorys)({params:{level_min:1,level_max:1,id:this.$Window.__category_info__.reading}}).then(function(o){t.categorys=o.data.results}).catch(function(t){})},getBookNoteBaseInfo:function(){var t=this;if(!this.noMoreBookNotesData){var o=[];this.bookNotesTimeSorted?o.push("add_time"):o.push("-add_time"),void 0!==this.bookNotesMostComment&&(this.bookNotesMostComment?o.push("comment_num"):o.push("-comment_num")),(0,b.getBookNoteBaseInfo)({params:{top_category:this.top_category,ordering:o.toString(),is_recommend:!1,time_min:this.bookNotesSelectedDateRange[0],time_max:this.bookNotesSelectedDateRange[1],limit:this.limit_size,offset:this.bookNotesPage*this.limit_size}}).then(function(o){t.bookNotes=t.bookNotes.concat(o.data.results),t.bookNotesTotalCount+=o.data.results.length,t.noMoreBookNotesData=t.bookNotesTotalCount>=o.data.count,t.$refs.browseMoreBookNotes.stopLoading(t.noMoreBookNotesData)}).catch(function(t){})}},browseMoreBookNotes:function(){this.bookNotesPage++,this.getBookNoteBaseInfo()},refreshBookNotes:function(){this.top_category=parseInt(this.$route.params.id),this.bookNotesTimeSorted=!1,this.bookNotesMostComment=void 0,this.bookNotesRecommend=void 0,this.bookNotesPage=0,this.bookNotes=[],this.bookNotesTotalCount=0,this.noMoreBookNotesData=!1,this.bookNotesSelectedDateRange=[],this.getCategorys(),this.getBookNoteBaseInfo()},bookNotesMenusControl:function(t){switch(t[0]){case"timeSorted":this.bookNotesTimeSorted=!t[1];break;case"mostComment":this.bookNotesMostComment=t[1];break;case"recommend":this.bookNotesRecommend=t[1]}this.bookNotesPage=0,this.bookNotes=[],this.bookNotesTotalCount=0,this.noMoreBookNotesData=!1,this.getBookNoteBaseInfo()},bookNotesDateSelect:function(t){this.bookNotesSelectedDateRange=t,this.bookNotesPage=0,this.limit_size=10,this.bookNotes=[],this.bookNotesTotalCount=0,this.noMoreBooksData=!1,this.getBookNoteBaseInfo()},bookNotesDateSelectClear:function(){this.bookNotesSelectedDateRange=[],this.bookNotesPage=0,this.limit_size=10,this.bookNotes=[],this.bookNotesTotalCount=0,this.noMoreBookNotesData=!1,this.getBookNoteBaseInfo()}},components:{"book-note-cell":a.default,"classify-menu":r.default,"section-title":l.default,recommend:m.default,"tag-wall":h.default,"browse-more":N.default}}},"44eX":function(t,o,e){var s=e("BUr+");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("6f7c0bec",s,!0)},"BUr+":function(t,o,e){o=t.exports=e("FZ+f")(!0),o.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"BookNoteListContent.vue",sourceRoot:""}])},"TMq/":function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"book-note-list-content layout-content"},[e("iv-row",[e("iv-col",{attrs:{xs:24,sm:24,md:24,lg:17}},[e("div",{staticClass:"layout-left"},[e("classify-menu",{attrs:{categorys:t.categorys,defaultCategory:t.top_category},on:{selectCategory:t.selectCategory}}),t._v(" "),e("iv-affix",{staticStyle:{position:"relative","z-index":"12"}},[e("section-title",{attrs:{mainTitle:"笔记列表",subTitle:"Book Notes",menus:t.bookNotesMenus,withRefresh:!0,withTimeSelect:!0,datePickerOptions:t.bookNotesDatePickerOptions},on:{refresh:t.refreshBookNotes,menusControl:t.bookNotesMenusControl,comfirmDateSelect:t.bookNotesDateSelect,clearDateSelect:t.bookNotesDateSelectClear}})],1),t._v(" "),t._l(t.bookNotes,function(t){return e("book-note-cell",{key:t.id,attrs:{bookNote:t}})}),t._v(" "),e("browse-more",{ref:"browseMoreBookNotes",on:{browseMore:t.browseMoreBookNotes}})],2)]),t._v(" "),e("iv-col",{attrs:{xs:0,sm:0,md:0,lg:7}},[e("div",{staticClass:"layout-right"},[e("recommend"),t._v(" "),e("tag-wall",{staticStyle:{"margin-top":"15px"}})],1)])],1)],1)},i=[],a={render:s,staticRenderFns:i};o.a=a},"X/R8":function(t,o,e){"use strict";function s(t){e("44eX")}Object.defineProperty(o,"__esModule",{value:!0});var i=e("/OW9"),a=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(o,t,function(){return i[t]})}(n);var r=e("TMq/"),c=e("VU/8"),l=s,u=c(a.a,r.a,!1,l,null,null);o.default=u.exports}});
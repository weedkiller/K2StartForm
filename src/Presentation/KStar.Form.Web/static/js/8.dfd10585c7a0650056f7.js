webpackJsonp([8],{"1uJO":function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__=__webpack_require__("Gu7T"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__=__webpack_require__("pFYg"),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__=__webpack_require__("BO1k"),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__),__WEBPACK_IMPORTED_MODULE_4_vuex__=__webpack_require__("NYxO"),__WEBPACK_IMPORTED_MODULE_5_moment__=__webpack_require__("PJh5"),__WEBPACK_IMPORTED_MODULE_5_moment___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__),__WEBPACK_IMPORTED_MODULE_6__js_util_js__=__webpack_require__("Lxn6"),__WEBPACK_IMPORTED_MODULE_7__plugins_loading_loading__=__webpack_require__("+vjY"),__WEBPACK_IMPORTED_MODULE_8__plugins_page_index__=__webpack_require__("T//Y"),__WEBPACK_IMPORTED_MODULE_9__plugins_cascaderOrganize_index__=__webpack_require__("8IKV"),__WEBPACK_IMPORTED_MODULE_10__biz_compositeChoosen_vue__=__webpack_require__("/xpi");__webpack_exports__.a={name:"doneProcess",components:{CascaderOrganize:__WEBPACK_IMPORTED_MODULE_9__plugins_cascaderOrganize_index__.a,page:__WEBPACK_IMPORTED_MODULE_8__plugins_page_index__.a,Choosen:__WEBPACK_IMPORTED_MODULE_10__biz_compositeChoosen_vue__.default},mounted:function(){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-进入我的已办页面"),this.getList();var e=this;window.onmessage=function(t){"refreshNewSystem"===t.data.key&&e.getList()}},data:function(){var e=this;return{pickerOptionsBefore:{disabledDate:function(t){var a=e.model.startDate[1];if(a)return __WEBPACK_IMPORTED_MODULE_5_moment___default()(t).format("YYYY-MM-DD")>a}},pickerOptionsAfter:{disabledDate:function(t){var a=e.model.startDate[0];if(a)return __WEBPACK_IMPORTED_MODULE_5_moment___default()(t).format("YYYY-MM-DD")<a}},handtDatepickerOptionsBefore:{disabledDate:function(t){var a=e.model.handtDate[1];if(a)return __WEBPACK_IMPORTED_MODULE_5_moment___default()(t).format("YYYY-MM-DD")>a}},handtDatepickerOptionsAfter:{disabledDate:function(t){var a=e.model.handtDate[0];if(a)return __WEBPACK_IMPORTED_MODULE_5_moment___default()(t).format("YYYY-MM-DD")<a}},finshDatepickerOptionsBefore:{disabledDate:function(t){var a=e.model.finshDate[1];if(a)return __WEBPACK_IMPORTED_MODULE_5_moment___default()(t).format("YYYY-MM-DD")>a}},finshDatepickerOptionsAfter:{disabledDate:function(t){var a=e.model.finshDate[0];if(a)return __WEBPACK_IMPORTED_MODULE_5_moment___default()(t).format("YYYY-MM-DD")<a}},model:{whereParams:{originator:"",searchWord:"",amountOfMoneyB:"",amountOfMoneyE:"",approveStatus:"",startDate:"",finishDate:"",processFullName:"",companyCode:"",departmentID:"",projectId:"",orderBy:"startDate desc"},startDate:[],handtDate:[],finshDate:[],userName:""},startDate:!0,endDate:!0,processFormName:"",disabled:!1,loading:!1,showdialog:!1,comp:{},orgStates:[],showList:!1,activeList:[],showremove:!1,showMess:!1,showNone:!1,endsDialog:!1,multipleSelection:[],sn:"",state:[{value:"",label:"所有"},{value:0,label:"错误"},{value:1,label:"草稿"},{value:2,label:"运行中"},{value:3,label:"结束"},{value:31,label:"取消"},{value:32,label:"作废"},{value:33,label:"终审通过"},{value:34,label:"拒绝"}],currentId:"",isSeach:!1,imgLoading:!1,serachSlectData:{tagsOwnProcess:[],tagsOwnCategory:[],tagsPersonSelect:[],tagsOrgSelect:[],tagsOwnsUser:[],CurrentUser:[]},dataTitle:"",CriteriaModel:{ProcessNum:"",ProcessCode:[],ProcessCategory:[],FormSubject:"",Originator:"",SubmitStartDate:"",SubmitEndDate:"",DepartmentId:"",CurrentUser:"",ProcessStatus:"",ProcessingStartDate:"",ProcessingEndDate:"",FinishStartDate:"",FinishEndDate:"",SortField:"",SortDirection:"",total:0,pageSizesList:[10,20],PageIndex:1,PageSize:10},ProcessType:"",typeTab:"User",portalmMtilselectCheck:"false",Visible:!1,echoData:[],currenHandler:[]}},methods:{burialPointEvent:function(e){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint(e)},mailUrging:function(){this.showNone=!0,__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-操作-邮件催办按钮")},loadMore:function(e){this.originatorPageIndex++,this.getUsers(e)},hideDate:function(e){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-输入条件-发起时段"),setTimeout(function(){var t=void 0,a=void 0,s=null,r=null;document.getElementsByClassName("el-picker-panel")[0]&&(s=!0),document.getElementsByClassName("el-picker-panel")[1]&&(r=!0),t=s?document.getElementsByClassName("el-picker-panel")[0]:"",a=r?document.getElementsByClassName("el-picker-panel")[1]:"",e.$el.firstElementChild==document.activeElement?(s&&(t.style.display="none"),r&&(a.style.display="none")):(s&&(t.style.display="block"),r&&(a.style.display="block"))},10)},formatter:function(e){switch(e.todoflag){case"审核":e.todoflag="审批";break;case"反馈":e.todoflag="意见反馈";break;default:e.todoflag=""}return e},changeSetvaule:function(e){var t=e.data;this.model.whereParams.companyCode=t.organize?t.organize.orgID:"",this.model.whereParams.departmentID=t.department?t.department.id:"",this.model.whereParams.projectId=t.projects?t.projects.pc_ID:""},getUsers:function(e){var t=this,a=this;this.originatorLoading=!0,a.$axios.post("/api/getUser?pageIndex="+this.originatorPageIndex+"&pageSize="+this.originatorPageSize,{name:e,deptId:"",isWork:"1"}).then(function(e){t.originatorTotal=e.data.pageControllerInfo.totalRecordCount;for(var s=0;s<e.data.result.length;s++)a.orgStates.push({value:e.data.result[s].displayName,userId:e.data.result[s].adAccount,companyName:e.data.result[s].companyName,orgFullPath:e.data.result[s].orgNameFullPath,vankeId:e.data.result[s].vankeId});t.loading=!1,t.originatorLoading=!1}).catch(function(e){t.originatorLoading=!1,a.$message.error("查询列表数据失败!ERROR MESSAGE:"+e)})},personChange:function(e){this.$set(this.$refs.userId,"query","")},visibleChange:function(){this.orgStates=[]},validationInput:function(e){if(this.orgStates=[],""==e||0==e.length)return this.loading=!1,null;e==this.$refs.userId.query?this.getUsers(e):this.orgStates=[]},openDailog:function(e){"originator_dailog"==e?(__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-输入条件-发起人输入框"),this.childDataUrl.getTree="getTree",this.childDataUrl.companytree="companytree/page"):"processSelection"==e&&__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-输入条件-流程类别"),this.comp.component=e,this.showdialog=!0,__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.showDailog_mask()},correctend:function correctend(){var _this4=this,urlParam=this.multipleSelection[0].viewUrl.substr(this.multipleSelection[0].viewUrl.indexOf("SN=")+3,this.multipleSelection[0].viewUrl.length);urlParam=urlParam.substr(0,urlParam.indexOf("&")),this.$axios.post("/api/stopProcessInstances",{procInstId:this.multipleSelection[0].procInstID,sn:urlParam}).then(function(res){var data=eval("("+res.data.result+")");"4"===data.Status?(_this4.endsDialog=!1,_this4.$message.success(""+data.Message),_this4.getList()):(_this4.endsDialog=!1,_this4.$message.warning(""+data.Message),_this4.$refs.multipleTable.clearSelection())}).catch(function(e){_this4.endsDialog=!1,_this4.$message.error("结束流程失败！"+e)})},cancelend:function(){this.endsDialog=!1,this.$refs.multipleTable.clearSelection()},correctmess:function(){var e=this;this.$axios.post("/api/myprocess/sendEmai",{procinstid:this.multipleSelection[0].procInstID}).then(function(t){var a=t.data.result;"邮件催办成功"===t.data.result.message?(e.$message({type:"success",message:"邮件催办成功!"}),e.showNone=!1):e.$message({type:"warning",message:t.data.result.message}),t.data.result.hasOwnProperty("note")&&(e.$message.warning(""+a.note),e.showNone=!1),e.showNone=!1}).catch(function(t){e.$message.error("发送失败！"+t),e.showNone=!1}),this.$refs.multipleTable.clearSelection()},cancelmess:function(){this.showNone=!1,this.$refs.multipleTable.clearSelection()},correctinfo:function correctinfo(){var _this6=this;this.showMess=!1,this.$axios.post("/api/myprocess/sendSortMessage",{procinstid:this.multipleSelection[0].procInstID}).then(function(res){var data=eval("("+res.data.result+")");if("2"!=data.Status)return"1"==data.Status?(_this6.$message({type:"warning",message:data.Message}),void(_this6.showMess=!1)):"3"==data.Status?(_this6.$message({type:"warning",message:data.Message}),void(_this6.showMess=!1)):void 0;_this6.$message({type:"success",message:data.Message})}).catch(function(e){_this6.$message.error("发送失败！"+e),_this6.showNone=!1}),this.$refs.multipleTable.clearSelection()},cancelinfo:function(){this.showMess=!1,this.$refs.multipleTable.clearSelection()},withdraw:function(){if(2!=this.multipleSelection[0].status)return this.$message.warning("只能回收审批中的流程！"),void this.$refs.multipleTable.clearSelection();__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-操作-回收按钮"),this.currentId=this.multipleSelection[0].procInstID,this.showremove=!0},close:function(){var e=this;this.showremove=!1,this.$axios.delete("/api/recyclingButton",{data:{procInstID:this.multipleSelection[0].procInstID}}).then(function(t){var a=t.data;if("01"==a.messageList[0].key)for(var s=0;s<e.activeList.length;s++)Number(e.activeList[s].procInstID)===Number(e.currentId)&&(e.activeList.splice(s,1),e.total=e.total-1,e.$message.success(a.messageList[0].message+" 【回收请求已发出，10分钟后请再刷新确认】"));else"04"==a.messageList[0].key?(e.$message.warning("回收失败："+a.messageList[0].message),e.$refs.multipleTable.clearSelection()):e.$message.error("回收失败："+a.messageList[0].message)}).catch(function(t){e.$message.error("回收失败！"+t),e.$refs.multipleTable.clearSelection(),e.showremove=!1})},cancelremove:function(){this.showremove=!1,this.$refs.multipleTable.clearSelection()},refresh:function(){this.CriteriaModel.ProcessNum="",this.serachSlectData.tagsOwnProcess=[],this.serachSlectData.tagsOwnCategory=[],this.CriteriaModel.ProcessCategory=[],this.CriteriaModel.Originator="",this.CriteriaModel.DepartmentId="",this.CriteriaModel.FormSubject="",this.serachSlectData.tagsOrgSelect=[],this.serachSlectData.tagsOwnsUser=[],this.serachSlectData.CurrentUser=[],this.model.startDate=[],this.model.handtDate=[],this.model.finshDate=[],this.CriteriaModel.ProcessStatus=this.state[0].value},inputValidate:function(e,t){var a=this,s=/^([0-9]*)([.]?|(\.\d{1,2})?)$/;"front"==e?s.test(t)||setTimeout(function(){a.model.whereParams.amountOfMoneyB=""},100):"back"==e&&(s.test(t)||setTimeout(function(){a.model.whereParams.amountOfMoneyE=""},100))},checkValidate:function(e,t){t=parseFloat(t);"front"==e?""!=this.model.whereParams.amountOfMoneyE&&t>parseFloat(this.model.whereParams.amountOfMoneyE)&&(this.model.whereParams.amountOfMoneyB=""):"back"==e&&""!=this.model.whereParams.amountOfMoneyB&&t<parseFloat(this.model.whereParams.amountOfMoneyB)&&(this.model.whereParams.amountOfMoneyE="")},search:function(){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-输入条件-搜索按钮"),this.pageIndex=1,this.getList()},getList:function(){var e=this;if(null==e.model.startDate&&(e.model.startDate=[]),null==e.model.handtDate&&(e.model.handtDate=[]),null==e.model.finshDate&&(e.model.finshDate=[]),e.CriteriaModel.SubmitStartDate=e.model.startDate[0]?e.model.startDate[0]+" 00:00:00":"",e.CriteriaModel.SubmitEndDate=e.model.startDate[1]?e.model.startDate[1]+" 23:59:59":"",e.CriteriaModel.ProcessingStartDate=e.model.handtDate[0]?e.model.handtDate[0]+" 00:00:00":"",e.CriteriaModel.ProcessingEndDate=e.model.handtDate[1]?e.model.handtDate[1]+" 23:59:59":"",e.CriteriaModel.FinishStartDate=e.model.finshDate[0]?e.model.finshDate[0]+" 00:00:00":"",e.CriteriaModel.FinishEndDate=e.model.finshDate[1]?e.model.finshDate[1]+" 23:59:59":"",e.CriteriaModel.ProcessNum=e.CriteriaModel.ProcessNum.replace(/\s+/g,""),e.CriteriaModel.FormSubject=e.CriteriaModel.FormSubject.replace(/\s+/g,""),e.serachSlectData.CurrentUser[0]&&(e.CriteriaModel.CurrentUser=e.serachSlectData.CurrentUser[0].UserAccount),e.serachSlectData.tagsOwnsUser[0]?e.CriteriaModel.Originator=e.serachSlectData.tagsOwnsUser[0].UserAccount:e.CriteriaModel.Originator="",e.serachSlectData.tagsOrgSelect[0]?e.CriteriaModel.DepartmentId=e.serachSlectData.tagsOrgSelect[0].UserAccount:this.CriteriaModel.DepartmentId="",e.serachSlectData.tagsOwnProcess){e.CriteriaModel.ProcessCode=[];var t=!0,a=!1,s=void 0;try{for(var r,i=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(this.serachSlectData.tagsOwnProcess);!(t=(r=i.next()).done);t=!0){var o=r.value;e.CriteriaModel.ProcessCode.push(o.processCode)}}catch(e){a=!0,s=e}finally{try{!t&&i.return&&i.return()}finally{if(a)throw s}}}if(e.serachSlectData.tagsOwnCategory.length>0){e.CriteriaModel.ProcessCategory=[];var l=!0,n=!1,c=void 0;try{for(var _,u=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(e.serachSlectData.tagsOwnCategory);!(l=(_=u.next()).done);l=!0){var h=_.value;e.CriteriaModel.ProcessCategory.push(h.id)}}catch(e){n=!0,c=e}finally{try{!l&&u.return&&u.return()}finally{if(n)throw c}}}e.imgLoading=!0,e.$axios({url:"/Portal/WorkFlow/GetMyInvolveds",data:e.CriteriaModel,method:"post"}).then(function(t){if(200===t.data.code){e.activeList=t.data.data.item;var a=!0,s=!1,r=void 0;try{for(var i,o=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(e.activeList);!(a=(i=o.next()).done);a=!0){var l=i.value;l.FinishDate=l.FinishDate?__WEBPACK_IMPORTED_MODULE_5_moment___default()(l.FinishDate).format("YYYY-MM-DD HH:mm"):"",l.ApprovalUsers&&(l.ApprovalUsers=l.ApprovalUsers.split(","))}}catch(e){s=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(s)throw r}}e.CriteriaModel.total=t.data.data.total}else e.$message.error("请求失败！");e.imgLoading=!1}).catch(function(t){e.imgLoading=!1})},handleSizeChange:function(e){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-列表-每页显示条数按钮");var t=""+e;this.PageIndex=1,this.CriteriaModel.PageSize=parseInt(t),localStorage.donePageSize=e,this.getList()},handleCurrentChange:function(e){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-列表-页码按钮"),this.CriteriaModel.PageIndex=e,this.getList()},tableHeaderClassName:function(e){e.row,e.rowIndex;return"table-head-th"},sortChange:function(e){__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.burialPoint("我的已办-列表-"+e.column.label+"排序"),this.CriteriaModel.SortDirection=""+e.order.replace("ending",""),this.CriteriaModel.SortField=e.prop,this.pageIndex=1,this.getList()},rowStyle:function(e){var t=e.row;e.rowIndex;if(this.multipleSelection.length>0)for(var a=0;a<this.multipleSelection.length;a++)if(t.procInstID==this.multipleSelection[a].procInstID)return"background:#E7F4FE"},renderIcon:function(e,t){t.column;return e("i",{class:"iconfont icon-process"})},handleSelectionChange:function(e){this.multipleSelection=e},choosenDialogType:function(e,t){this.typeTab=e,this.ProcessType=t,this.$refs.dialogChoosen.openChoosen(this.typeTab,t),this.$refs.dialogChoosen.getCollect()},OpenDialog:function(e){this.Visible=e},CloseDialog:function(e){this.Visible=e},sendTag:function(e,t){if(e.length>0){if(t){var a=!0,s=!1,r=void 0;try{for(var i,o=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(e);!(a=(i=o.next()).done);a=!0){var l=i.value;if("CurrentUser"===t)if(this.serachSlectData.CurrentUser=[],this.serachSlectData.CurrentUser.length>0){var n=!0,c=!1,_=void 0;try{for(var u,h=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(this.serachSlectData.CurrentUser);!(n=(u=h.next()).done);n=!0){if(u.value.SysId===l.SysId)return;this.serachSlectData.CurrentUser.push(l)}}catch(e){c=!0,_=e}finally{try{!n&&h.return&&h.return()}finally{if(c)throw _}}}else this.serachSlectData.CurrentUser.push(l);if("User"===t)if(this.serachSlectData.tagsOwnsUser=[],this.serachSlectData.tagsOwnsUser.length>0){var d=!0,m=!1,p=void 0;try{for(var f,g=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(this.serachSlectData.tagsOwnsUser);!(d=(f=g.next()).done);d=!0){if(f.value.SysId===l.SysId)return;this.serachSlectData.tagsOwnsUser.push(l)}}catch(e){m=!0,p=e}finally{try{!d&&g.return&&g.return()}finally{if(m)throw p}}}else this.serachSlectData.tagsOwnsUser.push(l);if("Process"===t)if(this.serachSlectData.tagsOwnProcess.length>0){var D=!0,v=!1,b=void 0;try{for(var C,y=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(this.serachSlectData.tagsOwnProcess);!(D=(C=y.next()).done);D=!0){if(C.value.id===l.id)return;this.serachSlectData.tagsOwnProcess.push(l)}}catch(e){v=!0,b=e}finally{try{!D&&y.return&&y.return()}finally{if(v)throw b}}}else this.serachSlectData.tagsOwnProcess.push(l);if("Category"===t)if(this.serachSlectData.tagsOwnCategory.length>0){var O=!0,P=!1,M=void 0;try{for(var w,S=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(this.serachSlectData.tagsOwnCategory);!(O=(w=S.next()).done);O=!0){if(w.value.id===l.id)return;this.serachSlectData.tagsOwnCategory.push(l)}}catch(e){P=!0,M=e}finally{try{!O&&S.return&&S.return()}finally{if(P)throw M}}}else this.serachSlectData.tagsOwnCategory.push(l);if("Org"===t)if(this.serachSlectData.tagsOrgSelect=[],this.serachSlectData.tagsOrgSelect.length>0){var E=!0,k=!1,U=void 0;try{for(var I,T=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(this.serachSlectData.tagsOrgSelect);!(E=(I=T.next()).done);E=!0){if(I.value.SysId===l.SysId)return;this.serachSlectData.tagsOrgSelect.push(l)}}catch(e){k=!0,U=e}finally{try{!E&&T.return&&T.return()}finally{if(k)throw U}}}else this.serachSlectData.tagsOrgSelect.push(l)}}catch(e){s=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(s)throw r}}}}else switch(t){case"Process":this.serachSlectData.tagsOwnProcess=[];break;case"Category":this.serachSlectData.tagsOwnCategory=[];break;case"User":this.serachSlectData.tagsOwnsUser=[];break;case"Org":this.serachSlectData.tagsOrgSelect=[];break;case"CurrentUser":this.serachSlectData.CurrentUser=[]}},closeProcessTag:function(e){if(e.portalType){if("CurrentUser"===e.portalType){var t=this.serachSlectData.CurrentUser.indexOf(e);this.serachSlectData.CurrentUser.splice(t,1),this.$refs.dialogChoosen.portalehco(this.serachSlectData.CurrentUser,null)}else if("User"===e.portalType){var a=this.serachSlectData.tagsOwnsUser.indexOf(e);this.serachSlectData.tagsOwnsUser.splice(a,1),this.CriteriaModel.Originator="",this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOwnsUser,null)}else if("Process"===e.portalType){var s=this.serachSlectData.tagsOwnProcess.indexOf(e);this.serachSlectData.tagsOwnProcess.splice(s,1),this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOwnProcess)}else if("Category"===e.portalType){var r=this.serachSlectData.tagsOwnCategory.indexOf(e);this.serachSlectData.tagsOwnCategory.splice(r,1),this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOwnCategory)}}else switch(e.type){case"Process":var i=this.serachSlectData.tagsOwnProcess.indexOf(e);this.serachSlectData.tagsOwnProcess.splice(i,1),this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOwnProcess);break;case"Category":var o=this.serachSlectData.tagsOwnCategory.indexOf(e);this.serachSlectData.tagsOwnCategory.splice(o,1),this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOwnCategory);break;case"User":var l=this.serachSlectData.tagsOwnsUser.indexOf(e);this.serachSlectData.tagsOwnsUser.splice(l,1),this.CriteriaModel.Originator="",this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOwnsUser,null);break;case"CurrentUser":var n=this.serachSlectData.CurrentUser.indexOf(e);this.serachSlectData.CurrentUser.splice(n,1),this.$refs.dialogChoosen.portalehco(this.serachSlectData.CurrentUser,null);break;case"Org":var c=this.serachSlectData.tagsOrgSelect.indexOf(e);this.serachSlectData.tagsOrgSelect.splice(c,1),this.CriteriaModel.DepartmentId="",this.$refs.dialogChoosen.portalehco(this.serachSlectData.tagsOrgSelect,null)}},jumpToView:function(e){window.open(e.FlowViewUrl,"_blank"),document.getElementById("dailog_mask").style.display="none"},folioBlank:function(e){window.open(e.Url,"_blank")},checkBoxForm:function(e,t){return e.IsBatchApproval?1:0}},watch:{"model.userName":{handler:function(e,t){var a=this.$refs.userId;__WEBPACK_IMPORTED_MODULE_6__js_util_js__.a.inputHeight(e,a),this.dataTitle="";for(var s=0;s<e.length;s++)"object"==__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(e[s])?this.dataTitle+=e[s].value+",":"string"==typeof e[s]&&(this.dataTitle+=e[s]+",");this.dataTitle=this.dataTitle.substr(0,this.dataTitle.length-1)},deep:!0},"model.date":{handler:function(e,t){var a=this;this.startDate=!1,this.$nextTick(function(){a.startDate=!0}),this.endDate=!1,this.$nextTick(function(){a.endDate=!0})},deep:!0},Visible:{handler:function(e,t){if(e){switch(this.typeTab){case"User":this.echoData=[].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(this.serachSlectData.tagsOwnsUser));break;case"Org":this.echoData=[].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(this.serachSlectData.tagsOrgSelect))}switch(this.ProcessType){case"CurrentUser":this.echoData=[].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(this.serachSlectData.CurrentUser));break;case"Process":this.echoData=[].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(this.serachSlectData.tagsOwnProcess));break;case"Category":this.echoData=[].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(this.serachSlectData.tagsOwnCategory))}}}}},computed:__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({bodyHeight:function(){return document.documentElement.clientHeight}},Object(__WEBPACK_IMPORTED_MODULE_4_vuex__.b)(["isIE","isSafari","bodyHeight"]))}},"75zL":function(e,t){},O152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("1uJO"),r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.imgLoading,expression:"imgLoading"}],staticClass:"todoProcess loadingtext",attrs:{"element-loading-text":"加载中...","element-loading-background":"rgba(255, 255, 255, 0.8)"}},[a("el-container",[a("el-header",{staticStyle:{height:"100px"}},[a("div",{staticClass:"top-header"},[a("p",{staticClass:"top-breadCrumb"},[e._v("我的已审")]),e._v(" "),a("el-row",{staticClass:"searchCom",attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-col",{attrs:{span:6}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-col",[a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{staticClass:"inputCom",attrs:{round:"","prefix-icon":"el-icon-search",placeholder:"编号",size:"mini",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null},click:function(t){e.burialPointEvent("我的待办-输入条件-搜索输入框")}},model:{value:e.CriteriaModel.ProcessNum,callback:function(t){e.$set(e.CriteriaModel,"ProcessNum",t)},expression:"CriteriaModel.ProcessNum"}})],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-col",[a("el-form-item",{attrs:{label:"主题"}},[a("el-input",{staticClass:"inputCom",attrs:{round:"","prefix-icon":"el-icon-search",placeholder:"主题",size:"mini",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null},click:function(t){e.burialPointEvent("我的待办-输入条件-搜索输入框")}},model:{value:e.CriteriaModel.FormSubject,callback:function(t){e.$set(e.CriteriaModel,"FormSubject",t)},expression:"CriteriaModel.FormSubject"}})],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-col",[a("el-form-item",{staticClass:"PersonTags",attrs:{label:"申请人"}},[a("el-input",{staticClass:"microcheiria ",attrs:{readonly:"readonly",size:"mini"},on:{focus:function(t){e.choosenDialogType("User")}}},[e._l(e.serachSlectData.tagsOwnsUser,function(t,s){return a("el-tag",{key:s,attrs:{slot:"prefix",size:"mini",closable:""},on:{close:function(a){e.closeProcessTag(t)}},slot:"prefix"},[e._v("\n                          "+e._s(t.UserDisplayName)+"\n                        ")])}),e._v(" "),a("i",{staticClass:"iconfont icon-member",attrs:{slot:"suffix"},on:{click:function(t){e.choosenDialogType("User")}},slot:"suffix"})],2)],1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"sererchBtn",attrs:{span:6}},[a("el-button",{staticClass:"searchBtn",attrs:{round:"",type:"primary",size:"mini"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"searchReset",attrs:{round:"",type:"primary",size:"mini"},on:{click:e.refresh}},[e._v("重置\n                ")]),e._v(" "),a("el-button",{staticClass:"searchMore",attrs:{round:"",type:"primary",size:"mini"},on:{click:function(t){e.showList=!e.showList,e.burialPointEvent("我的待办-输入条件-更多筛选按钮")}}},[e._v("\n                  更多筛选\n                ")])],1)],1)],1)],1)],1)]),e._v(" "),a("el-main",[a("div",{staticClass:"mainContaint"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"todoProcess-screenList screenList-box",class:{screenList_box_ie:e.isIE}},[a("el-form",{ref:"whereParams",staticClass:"todoForm",attrs:{model:e.model.whereParams,inline:!0,"label-width":"110px",size:"mini"}},[a("el-row",{attrs:{type:""}},[a("el-col",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"发起时段"}},[a("div",{staticClass:"money-box"},[a("el-form-item",[a("el-date-picker",{staticClass:"todoDate",attrs:{"value-format":"yyyy-MM-dd",type:"date","picker-options":e.pickerOptionsBefore,placeholder:"选择日期"},model:{value:e.model.startDate[0],callback:function(t){e.$set(e.model.startDate,0,t)},expression:"model.startDate[0]"}})],1),e._v(" "),a("el-form-item",[e._v("~")]),e._v(" "),a("el-form-item",[a("el-date-picker",{staticClass:"todoDate",staticStyle:{float:"right"},attrs:{"value-format":"yyyy-MM-dd",type:"date","picker-options":e.pickerOptionsAfter,placeholder:"选择日期"},model:{value:e.model.startDate[1],callback:function(t){e.$set(e.model.startDate,1,t)},expression:"model.startDate[1]"}})],1)],1)])],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"PersonTags",attrs:{label:"流程名称"}},[a("el-input",{staticClass:"microcheiria",attrs:{readonly:"readonly",size:"mini"},on:{focus:function(t){e.choosenDialogType("Process","Process")}}},[e._l(e.serachSlectData.tagsOwnProcess,function(t,s){return a("el-tag",{key:s,attrs:{slot:"prefix",size:"mini",closable:""},on:{close:function(a){e.closeProcessTag(t)}},slot:"prefix"},[e._v("\n                        "+e._s(t.processName)+"\n                      ")])}),e._v(" "),a("i",{staticClass:"iconfont icon-member",attrs:{slot:"suffix"},on:{click:function(t){e.choosenDialogType("Process","Process")}},slot:"suffix"})],2)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"PersonTags",attrs:{label:"流程类别"}},[a("el-input",{staticClass:"microcheiria ",attrs:{readonly:"readonly",size:"mini"},on:{focus:function(t){e.choosenDialogType("Process","Category")}}},[e._l(e.serachSlectData.tagsOwnCategory,function(t,s){return a("el-tag",{key:s,attrs:{slot:"prefix",size:"mini",closable:""},on:{close:function(a){e.closeProcessTag(t)}},slot:"prefix"},[e._v("\n                        "+e._s(t.categoryName)+"\n                      ")])}),e._v(" "),a("i",{staticClass:"iconfont icon-member",attrs:{slot:"suffix"},on:{click:function(t){e.choosenDialogType("Process","Category")}},slot:"suffix"})],2)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}})],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"PersonTags",attrs:{label:"申请人部门"}},[a("el-input",{staticClass:"microcheiria",attrs:{id:"checkedPersons",readonly:"readonly",size:"mini"},on:{focus:function(t){e.choosenDialogType("Org")}}},[e._l(e.serachSlectData.tagsOrgSelect,function(t,s){return a("el-tag",{key:s,attrs:{slot:"prefix",size:"mini",closable:""},on:{close:function(a){e.closeProcessTag(t)}},slot:"prefix"},[e._v("\n                        "+e._s(t.UserDisplayName)+"\n                      ")])}),e._v(" "),a("i",{staticClass:"iconfont icon-member",attrs:{slot:"suffix"},on:{click:function(t){e.choosenDialogType("Org")}},slot:"suffix"})],2)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"处理时间"}},[a("div",{staticClass:"money-box"},[a("el-form-item",[a("el-date-picker",{staticClass:"todoDate",attrs:{"value-format":"yyyy-MM-dd",type:"date","picker-options":e.handtDatepickerOptionsBefore,placeholder:"选择日期"},model:{value:e.model.handtDate[0],callback:function(t){e.$set(e.model.handtDate,0,t)},expression:"model.handtDate[0]"}})],1),e._v(" "),a("el-form-item",[e._v("~")]),e._v(" "),a("el-form-item",[a("el-date-picker",{staticClass:"todoDate",staticStyle:{float:"right"},attrs:{"value-format":"yyyy-MM-dd",type:"date","picker-options":e.handtDatepickerOptionsAfter,placeholder:"选择日期"},model:{value:e.model.handtDate[1],callback:function(t){e.$set(e.model.handtDate,1,t)},expression:"model.handtDate[1]"}})],1)],1)])],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"流程状态"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择..."},on:{focus:function(t){e.burialPointEvent("我的已办-输入条件-流程状态选择框")}},model:{value:e.CriteriaModel.ProcessStatus,callback:function(t){e.$set(e.CriteriaModel,"ProcessStatus",t)},expression:"CriteriaModel.ProcessStatus"}},e._l(e.state,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}})],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"结束时间"}},[a("div",{staticClass:"money-box"},[a("el-form-item",[a("el-date-picker",{staticClass:"todoDate",attrs:{"value-format":"yyyy-MM-dd",type:"date","picker-options":e.finshDatepickerOptionsBefore,placeholder:"选择日期"},model:{value:e.model.finshDate[0],callback:function(t){e.$set(e.model.finshDate,0,t)},expression:"model.finshDate[0]"}})],1),e._v(" "),a("el-form-item",[e._v("~")]),e._v(" "),a("el-form-item",[a("el-date-picker",{staticClass:"todoDate",staticStyle:{float:"right"},attrs:{"value-format":"yyyy-MM-dd",type:"date","picker-options":e.finshDatepickerOptionsAfter,placeholder:"选择日期"},model:{value:e.model.finshDate[1],callback:function(t){e.$set(e.model.finshDate,1,t)},expression:"model.finshDate[1]"}})],1)],1)])],1)],1)],1)],1)],1),e._v(" "),e.showMess?a("el-dialog",{staticClass:"message-dialog",attrs:{visible:e.showMess,title:"短信催办流程","close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.showMess=t}}},[a("span",{staticStyle:{"text-align":"left"}},[e._v("您确认需要短信催办该流程？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline",size:"mini"},on:{click:e.correctinfo}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-close-outline",size:"mini"},on:{click:e.cancelinfo}},[e._v("取 消")])],1)]):e._e(),e._v(" "),e.showNone?a("el-dialog",{staticClass:"message-dialog",attrs:{visible:e.showNone,title:"邮件催办邮件催办流程","close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.showNone=t}}},[a("span",{staticStyle:{"text-align":"left"}},[e._v("您确认需要邮件催办该流程？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline",size:"mini"},on:{click:e.correctmess}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-close-outline",size:"mini"},on:{click:e.cancelmess}},[e._v("取 消")])],1)]):e._e(),e._v(" "),e.showremove?a("el-dialog",{staticClass:"message-dialog",attrs:{visible:e.showremove,title:"回收流程","close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.showremove=t}}},[a("span",{staticStyle:{"text-align":"left"}},[e._v("是否回收当前这条信息？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline",size:"mini"},on:{click:e.close}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-circle-close-outline",size:"mini"},on:{click:e.cancelremove}},[e._v("取 消")])],1)]):e._e(),e._v(" "),e.endsDialog?a("el-dialog",{staticClass:"message-dialog",attrs:{visible:e.endsDialog,title:"结束流程","close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(t){e.endsDialog=t}}},[a("span",{staticStyle:{"text-align":"left"}},[e._v("您确认需要结束该流程？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline",size:"mini"},on:{click:e.correctend}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-close-outline",size:"mini"},on:{click:e.cancelend}},[e._v("取 消")])],1)]):e._e(),e._v(" "),a("div",{staticClass:"todoProcess-main"},[a("el-row",{staticClass:"listButton",attrs:{type:"flex",justify:"end"}}),e._v(" "),a("div",{staticClass:"list",class:{table_safari:e.isSafari}},[a("el-table",{ref:"multipleTable",attrs:{data:e.activeList,height:e.showList?e.bodyHeight-295:e.bodyHeight-180,border:"","header-row-class-name":e.tableHeaderClassName,"row-style":e.rowStyle,size:"mini"},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"selection",width:"42px",selectable:e.checkBoxForm}}),e._v(" "),a("el-table-column",{attrs:{prop:"icon",width:"44px","render-header":e.renderIcon,label:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"iconfont icon-process",on:{click:function(a){e.jumpToView(t.row)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"Folio",label:"流程编号",width:"150px",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"table-popover folio",on:{click:function(a){e.folioBlank(t.row)}}},[e._v(e._s(t.row.Folio))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ProcessName","min-width":"120px",align:"center",label:"流程名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-popover",attrs:{title:t.row.ProcessName}},[e._v(e._s(t.row.ProcessName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"FormSubject","min-width":"200px",align:"center",label:"流程主题"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-popover folio",attrs:{target:"view_window"},on:{click:function(a){e.folioBlank(t.row)}}},[e._v(e._s(t.row.FormSubject)+"\n                  ")]),e._v(" "),a("el-tooltip",{attrs:{disabled:!t.row.Summary,placement:"right",color:"rgb(166, 176, 185)",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"toolTipContent"},[a("div",{domProps:{innerHTML:e._s(t.row.Summary)}})])])])]}}])}),e._v(" "),a("el-table-column",{staticClass:"ApplicantDisplayName",attrs:{prop:"Originator",width:"140px",label:"申请人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-popover",attrs:{title:t.row.ApplicantDisplayName}},[e._v(e._s(t.row.ApplicantDisplayName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ApprovalUsers",width:"120px",label:"当前处理人"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.ApprovalUsers,function(t){return a("div",[e._v(e._s(t))])})}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ActivityDisplayName",width:"100px",label:"当前环节"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ActivityDisplayName))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"SubmitDate",width:"150px",label:"开始时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("moment")(t.row.SubmitDate,"YYYY-MM-DD HH:mm")))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"FinishDate",width:"150px",label:"结束时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.FinishDate))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ProcessingDate",width:"150px",label:"处理时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("moment")(t.row.ProcessingDate,"YYYY-MM-DD HH:mm")))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"StatusName",label:"流程状态",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-popover",attrs:{title:t.row.StatusName}},[e._v(e._s(t.row.StatusName))])]}}])}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.imgLoading,expression:"!imgLoading"}],attrs:{slot:"empty"},slot:"empty"},[a("p",{style:{marginTop:"23px"}},[e._v("暂无数据")])]),e._v(" "),a("div",{attrs:{slot:"append"},slot:"append"},[e.activeList.length>0?a("page",{attrs:{pageIndex:e.CriteriaModel.PageIndex,total:e.CriteriaModel.total,pageSize:e.CriteriaModel.PageSize,pageSizesList:e.CriteriaModel.pageSizesList},on:{handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange}}):e._e()],1)],1)],1)],1)],1),e._v(" "),a("choosen",{ref:"dialogChoosen",attrs:{typeTab:e.typeTab,ProcessType:e.ProcessType,Visible:e.Visible,echoData:e.echoData,portalmMtilselectCheck:e.portalmMtilselectCheck},on:{OpenDialog:e.OpenDialog,sendTag:e.sendTag,CloseDialog:e.CloseDialog}})],1)],1)],1)},staticRenderFns:[]};var i=function(e){a("75zL")},o=a("VU/8")(s.a,r,!1,i,"data-v-4fd49f84",null);t.default=o.exports}});
//# sourceMappingURL=8.dfd10585c7a0650056f7.js.map
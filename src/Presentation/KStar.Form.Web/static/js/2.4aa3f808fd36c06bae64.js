webpackJsonp([2],{Cdx3:function(e,o,a){var t=a("sB3e"),i=a("lktj");a("uqUo")("keys",function(){return function(e){return i(t(e))}})},DfIy:function(e,o){},SaGX:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=a("fZjL"),i=a.n(t),r=a("BO1k"),n=a.n(r),s=a("Gu7T"),l=a.n(s),c=(a("NYxO"),{name:"iframeDialogChoosen",components:{iframeChoosen:a("/xpi").default},data:function(){return{compName:"",childDataUrl:{url:""},showdialog:!1,closeShow:!1,w:0,h:0,Visible:!1,parmDialog:{typeIframe:"",mutilselect:"",classifier:"",formType:""},echoData:[]}},created:function(){},mounted:function(){var e=this;window.addEventListener("message",function(o){if("init"===o.data.key){var a=/\\/g;e.echoData=[].concat(l()(o.data.data));var t=!0,r=!1,s=void 0;try{for(var c,f=n()(e.echoData);!(t=(c=f.next()).done);t=!0){var u=c.value,m=i()(u),p=!0,d=!1,h=void 0;try{for(var y,g=n()(m);!(p=(y=g.next()).done);p=!0){var v=y.value;u[v]&&u[v].match(a)&&(u[v]=u[v].replace("\n","\\\\"),console.log(u[v],9999))}}catch(e){d=!0,h=e}finally{try{!p&&g.return&&g.return()}finally{if(d)throw h}}}}catch(e){r=!0,s=e}finally{try{!t&&f.return&&f.return()}finally{if(r)throw s}}}},!1),e.parmDialog.classifier=e.getUrlParam("compName"),e.parmDialog.classifier,e.$store.state.initProgress.apiUrl=!0,e.parmDialog.typeIframe=e.getUrlParam("picktype"),e.parmDialog.formType=e.getUrlParam("formType"),""===e.parmDialog.typeIframe&&(e.parmDialog.typeIframe="UserPick"),e.parmDialog.mutilselect=e.getUrlParam("mutilselect"),e.setDialog(e.parmDialog.classifier);var o={};o.data=e.model,o.w=e.w,o.h=e.h,o.key="setCss",window.parent.postMessage(o,"*"),e.openDailog(e.parmDialog.classifier)},methods:{setDialog:function(e){var o=586,a=450;switch(e){case"compsite-Choosen":o=586,a=450}this.w=o,this.h=a},getUrlParam:function(e,o){var a=new RegExp("[?&]"+e+"=([^&]*)","i"),t=(o=o||window.location.href).match(a);return null!=t?decodeURIComponent(t[1]):null},openDailog:function(e){""!==e&&this.$refs.Choosen.openChoosen()},showMsgfromchild:function(e){var o={},a=[],t=!0,i=!1,r=void 0;try{for(var s,l=n()(e);!(t=(s=l.next()).done);t=!0){var c=s.value;"ProcessPick"===c.ProcessType?a.push({Type:c.type,CategoryId:c.categoryId,CategoryName:c.categoryName,ProcessCode:c.processCode,ProcessName:c.processName,VersionId:c.versionId,VersionName:c.versionName,ActivityId:c.activityId,ActivityName:c.activityName}):"Position"===c.type||"InventedPosition"===c.type?a.push({Type:c.type,Value:c.UserAccount,Name:c.UserDisplayName,OrgPosMapSysId:c.OrganizationPositionMapSysId}):a.push({Type:c.type,Value:c.UserAccount,Name:c.UserDisplayName})}}catch(e){i=!0,r=e}finally{try{!t&&l.return&&l.return()}finally{if(i)throw r}}o.data=a,o.key="ok",window.parent.postMessage(o,"*"),console.log(o,9999)},closeWin:function(e){this.$refs.Choosen.close()},CloseDialog:function(e){var o={key:"close",data:{}};this.Visible=e,window.parent.postMessage(o,"*")},OpenDialog:function(e){this.Visible=e,setTimeout(function(){document.querySelector(".v-modal").style.background="#ffffff"},200)}}}),f={render:function(){var e=this.$createElement;return(this._self._c||e)("iframe-choosen",{ref:"Choosen",attrs:{id:"iframemodal",parmDialog:this.parmDialog,echoData:this.echoData,Visible:this.Visible},on:{showMsgfromchild:this.showMsgfromchild,sureSubmit:this.showMsgfromchild,OpenDialog:this.OpenDialog,CloseDialog:this.CloseDialog}})},staticRenderFns:[]};var u=a("VU/8")(c,f,!1,function(e){a("DfIy")},null,null);o.default=u.exports},fZjL:function(e,o,a){e.exports={default:a("jFbC"),__esModule:!0}},jFbC:function(e,o,a){a("Cdx3"),e.exports=a("FeBl").Object.keys},uqUo:function(e,o,a){var t=a("kM2E"),i=a("FeBl"),r=a("S82l");e.exports=function(e,o){var a=(i.Object||{})[e]||Object[e],n={};n[e]=o(a),t(t.S+t.F*r(function(){a(1)}),"Object",n)}}});
//# sourceMappingURL=2.4aa3f808fd36c06bae64.js.map
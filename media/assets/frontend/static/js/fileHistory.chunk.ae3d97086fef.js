(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[8],{1689:function(e,t,n){n(73),e.exports=n(1827)},1827:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(4),s=n(6),o=n(7),r=n(2),c=n.n(r),l=n(34),d=n.n(l),h=n(134),u=n(1),p=n(5),m=n(72),j=n(48),f=n(108),b=n(21),O=n(12),g=n.n(O),v=n(326),I=n(329),k=n(328),C=n(200),w=n(110),x=(n(561),n(0));g.a.locale(window.app.config.lang);var y=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onMouseEnter=function(){a.props.isItemFreezed||a.setState({isShowOperationIcon:!0})},a.onMouseLeave=function(){a.props.isItemFreezed||a.setState({isShowOperationIcon:!1})},a.onToggleClick=function(e){a.setState({isMenuShow:!a.state.isMenuShow}),a.props.onFreezedItemToggle()},a.onItemClick=function(){if(a.setState({isShowOperationIcon:!1}),a.props.item.commit_id!==a.props.currentItem.commit_id){var e=a.props.index;a.props.onItemClick(a.props.item,e)}},a.onItemRestore=function(){a.props.onItemRestore(a.props.currentItem)},a.onItemDownload=function(){},a.state={isShowOperationIcon:!1,isMenuShow:!1},a}return Object(a.a)(n,[{key:"render",value:function(){if(!this.props.currentItem)return"";var e=this.props.item,t=g()(e.ctime).format("YYYY-MM-DD HH:mm"),n=!1;this.props.item&&this.props.currentItem&&(n=this.props.item.commit_id===this.props.currentItem.commit_id);var i=this.props.currentItem.rev_file_id,a=w.a.getUrl({type:"download_historic_file",filePath:u.qb,objID:i});return Object(x.jsxs)("li",{className:"history-list-item ".concat(n?"item-active":""),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.onItemClick,children:[Object(x.jsxs)("div",{className:"history-info",children:[Object(x.jsx)("div",{className:"time",children:t}),Object(x.jsxs)("div",{className:"owner",children:[Object(x.jsx)("span",{className:"squire-icon"}),Object(x.jsx)("span",{children:e.creator_name})]})]}),Object(x.jsx)("div",{className:"history-operation",children:Object(x.jsxs)(v.a,{isOpen:this.state.isMenuShow,toggle:this.onToggleClick,children:[Object(x.jsx)(I.a,{tag:"a",className:"fas fa-ellipsis-v ".concat(this.state.isShowOperationIcon||n?"":"invisible"),"data-toggle":"dropdown","aria-expanded":this.state.isMenuShow,alt:Object(u.ub)("More Operations")}),Object(x.jsxs)(k.a,{children:[0!==this.props.index&&Object(x.jsx)(C.a,{onClick:this.onItemRestore,children:Object(u.ub)("Restore")}),Object(x.jsx)(C.a,{tag:"a",href:a,onClick:this.onItemDownLoad,children:Object(u.ub)("Download")})]})]})})]})}}]),n}(c.a.Component),S=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){var e=a.props.historyList;e.length>0&&(a.setState({currentItem:e[0]}),1===e?a.props.onItemClick(e[0]):a.props.onItemClick(e[0],e[1]))},a.onFreezedItemToggle=function(){a.setState({isItemFreezed:!a.state.isItemFreezed})},a.onScrollHandler=function(e){var t=e.target.clientHeight,n=e.target.scrollHeight,i=t+e.target.scrollTop+1>=n,s=a.props.hasMore;i&&s&&a.props.reloadMore()},a.onItemClick=function(e,t){if(a.setState({currentItem:e}),t!==a.props.historyList.length){var n=a.props.historyList[t+1];a.props.onItemClick(e,n)}else a.props.onItemClick(e)},a.state={isItemFreezed:!1,currentItem:null},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("ul",{className:"history-list-container",onScroll:this.onScrollHandler,children:[this.props.historyList.map((function(t,n){return Object(x.jsx)(y,{item:t,index:n,currentItem:e.state.currentItem,isItemFreezed:e.state.isItemFreezed,onItemClick:e.onItemClick,onItemRestore:e.props.onItemRestore,onFreezedItemToggle:e.onFreezedItemToggle},n)})),this.props.isReloadingData&&Object(x.jsx)("li",{children:Object(x.jsx)(b.a,{})})]})}}]),n}(c.a.Component),M=n(10),R=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).reloadMore=function(){if(!a.state.isReloadingData){var e=a.state.currentPage+1;a.setState({currentPage:e,isReloadingData:!0}),f.a.listFileHistoryRecords(u.qb,e,u.a).then((function(e){a.updateResultState(e.data),a.setState({isReloadingData:!1})}))}},a.onItemRestore=function(e){var t=e.commit_id;f.a.revertFile(u.qb,t).then((function(e){e.data.success&&(a.setState({isLoading:!0}),a.refershFileList());var t=Object(u.ub)("Successfully restored.");M.a.success(t)}))},a.onItemClick=function(e,t){a.props.onItemClick(e,t)},a.state={historyInfo:"",currentPage:1,hasMore:!1,isLoading:!0,isError:!1,fileOwner:"",isReloadingData:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.listFileHistoryRecords(u.qb,1,u.a).then((function(t){if(0===t.data.length)throw e.setState({isLoading:!1}),Error("there has an error in server");e.initResultState(t.data)}))}},{key:"refershFileList",value:function(){var e=this;f.a.listFileHistoryRecords(u.qb,1,u.a).then((function(t){e.initResultState(t.data)}))}},{key:"initResultState",value:function(e){e.data.length&&this.setState({historyInfo:e.data,currentPage:e.page,hasMore:e.total_count>u.a*this.state.currentPage,isLoading:!1,isError:!1,fileOwner:e.data[0].creator_email})}},{key:"updateResultState",value:function(e){e.data.length&&this.setState({historyInfo:[].concat(Object(j.a)(this.state.historyInfo),Object(j.a)(e.data)),currentPage:e.page,hasMore:e.total_count>u.a*this.state.currentPage,isLoading:!1,isError:!1,fileOwner:e.data[0].creator_email})}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"side-panel history-side-panel",children:Object(x.jsxs)("div",{className:"side-panel-center",children:[Object(x.jsx)("div",{className:"history-side-panel-title",children:Object(u.ub)("History Versions")}),Object(x.jsxs)("div",{className:"history-body",children:[this.state.isLoading&&Object(x.jsx)(b.a,{}),this.state.historyInfo&&Object(x.jsx)(S,{hasMore:this.state.hasMore,isReloadingData:this.state.isReloadingData,historyList:this.state.historyInfo,reloadMore:this.reloadMore,onItemClick:this.onItemClick,onItemRestore:this.onItemRestore})]})]})})}}]),n}(c.a.Component),F=n(238),N=n.n(F),D=n(57),L=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).onSearchedClick=function(){},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){N.a.highlightAll()}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"main-panel",children:Object(x.jsx)("div",{className:"main-panel-center content-viewer",children:Object(x.jsx)("div",{className:"markdown-viewer-render-content",children:this.props.renderingContent?Object(x.jsx)(b.a,{}):Object(x.jsx)("div",{className:"diff-view article",children:Object(x.jsx)(D.a,{scriptSource:u.Sb+"js/mathjax/tex-svg.js",newMarkdownContent:this.props.newMarkdownContent,oldMarkdownContent:this.props.oldMarkdownContent})})})})})}}]),n}(c.a.Component),_=L,H=n(8),z=(n(204),n(562),n(157),n(178),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onSearchedClick=function(e){p.a.handleSearchedItemClick(e)},a.setDiffContent=function(e,t){a.setState({renderingContent:!1,newMarkdownContent:e,oldMarkdownContent:t})},a.onHistoryItemClick=function(e,t){a.setState({renderingContent:!0}),t?h.a.all([H.a.getFileRevision(u.yb,e.commit_id,e.path),H.a.getFileRevision(u.yb,t.commit_id,t.path)]).then(h.a.spread((function(e,t){h.a.all([H.a.getFileContent(e.data),H.a.getFileContent(t.data)]).then(h.a.spread((function(e,t){a.setDiffContent(e.data,t.data)})))}))):H.a.getFileRevision(u.yb,e.commit_id,e.path).then((function(e){h.a.all([H.a.getFileContent(e.data)]).then(h.a.spread((function(e){a.setDiffContent(e.data,"")})))}))},a.onBackClick=function(e){e.preventDefault(),window.history.back()},a.state={renderingContent:!0,newMarkdownContent:"",oldMarkdownContent:""},a}return Object(a.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsxs)("div",{id:"header",className:"history-header",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("a",{href:"#",className:"go-back",title:"Back",onClick:this.onBackClick,children:Object(x.jsx)("span",{className:"fas fa-chevron-left"})}),Object(x.jsx)("span",{className:"name",children:u.pb})]}),Object(x.jsx)("div",{className:"toolbar",children:Object(x.jsx)(m.a,{onSearchedClick:this.onSearchedClick})})]}),Object(x.jsxs)("div",{id:"main",className:"history-content",children:[Object(x.jsx)(_,{newMarkdownContent:this.state.newMarkdownContent,oldMarkdownContent:this.state.oldMarkdownContent,renderingContent:this.state.renderingContent}),Object(x.jsx)(R,{onItemClick:this.onHistoryItemClick})]})]})}}]),n}(c.a.Component));d.a.render(Object(x.jsx)(z,{}),document.getElementById("wrapper"))},561:function(e,t,n){},562:function(e,t,n){}},[[1689,1,0]]]);
//# sourceMappingURL=fileHistory.chunk.js.map
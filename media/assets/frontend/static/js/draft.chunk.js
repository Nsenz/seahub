(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[7],{1846:function(e,t,n){n(73),e.exports=n(1923)},1847:function(e,t,n){"use strict";var i=n(693),a=n(694),s=n(695),o=n(697),r=n(698),c=n(699);e.exports=function e(){var t=[],n=o(),p={},g=!1,O=-1;return w.data=function(e,t){if(r(e))return 2===arguments.length?(j("data",g),p[e]=t,w):d.call(p,e)&&p[e]||null;if(e)return j("data",g),p=e,w;return p},w.freeze=x,w.attachers=t,w.use=function(e){var n;if(j("use",g),null===e||void 0===e);else if("function"===typeof e)r.apply(null,arguments);else{if("object"!==typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?o(e):a(e)}n&&(p.settings=i(p.settings||{},n));return w;function a(e){o(e.plugins),e.settings&&(n=i(n||{},e.settings))}function s(e){if("function"===typeof e)r(e);else{if("object"!==typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?r.apply(null,e):a(e)}}function o(e){var t,n;if(null===e||void 0===e);else{if("object"!==typeof e||!("length"in e))throw new Error("Expected a list of plugins, not `"+e+"`");for(t=e.length,n=-1;++n<t;)s(e[n])}}function r(e,n){var a=C(e);a?(c(a[1])&&c(n)&&(n=i(a[1],n)),a[1]=n):t.push(l.call(arguments))}},w.parse=function(e){var t,n=s(e);if(x(),h("parse",t=w.Parser),u(t))return new t(String(n),n).parse();return t(String(n),n)},w.stringify=function(e,t){var n,i=s(t);if(x(),f("stringify",n=w.Compiler),v(e),u(n))return new n(e,i).compile();return n(e,i)},w.run=N,w.runSync=function(e,t){var n,i=!1;return N(e,t,s),b("runSync","run",i),n;function s(e,t){i=!0,a(e),n=t}},w.process=y,w.processSync=function(e){var t,n=!1;return x(),h("processSync",w.Parser),f("processSync",w.Compiler),y(t=s(e),i),b("processSync","process",n),t;function i(e){n=!0,a(e)}},w;function w(){for(var n=e(),a=t.length,s=-1;++s<a;)n.use.apply(null,t[s]);return n.data(i(!0,{},p)),n}function x(){var e,i,a,s;if(g)return w;for(;++O<t.length;)i=(e=t[O])[0],null,!1!==(a=e[1])&&(!0===a&&(e[1]=void 0),"function"===typeof(s=i.apply(w,e.slice(1)))&&n.use(s));return g=!0,O=1/0,w}function C(e){for(var n,i=t.length,a=-1;++a<i;)if((n=t[a])[0]===e)return n}function N(e,t,i){if(v(e),x(),i||"function"!==typeof t||(i=t,t=null),!i)return new Promise(a);function a(a,o){n.run(e,s(t),(function(t,n,s){n=n||e,t?o(t):a?a(n):i(null,n,s)}))}a(null,i)}function y(e,t){if(x(),h("process",w.Parser),f("process",w.Compiler),!t)return new Promise(n);function n(n,i){var a=s(e);m.run(w,{file:a},(function(e){e?i(e):n?n(a):t(null,a)}))}n(null,t)}}().freeze();var l=[].slice,d={}.hasOwnProperty,m=o().use((function(e,t){t.tree=e.parse(t.file)})).use((function(e,t,n){e.run(t.tree,t.file,(function(e,i,a){e?n(e):(t.tree=i,t.file=a,n())}))})).use((function(e,t){t.file.contents=e.stringify(t.tree,t.file)}));function u(e){return"function"===typeof e&&function(e){var t;for(t in e)return!0;return!1}(e.prototype)}function h(e,t){if("function"!==typeof t)throw new Error("Cannot `"+e+"` without `Parser`")}function f(e,t){if("function"!==typeof t)throw new Error("Cannot `"+e+"` without `Compiler`")}function j(e,t){if(t)throw new Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function v(e){if(!e||!r(e.type))throw new Error("Expected node, got `"+e+"`")}function b(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}},1848:function(e,t,n){},1849:function(e,t,n){},1850:function(e,t,n){},1923:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(4),s=n(37),o=n(6),r=n(7),c=n(2),l=n.n(c),d=n(35),m=n.n(d),u=n(85),h=(n(234),n(59)),f=n(1),j=n(8),v=n(136),b=n(23),p=n(1847),g=n(511),O=n(723),w=n(724),x=n(725),C=n(731),N=n(735),y=n(132),S=n(745),D=n(753),I=n(523),k=n(754).default;var R=p().use(g,{commonmark:!0}).use(w).use(O).use(x,{allowDangerousHTML:!0}).use(N).use(C).use((function(e){var t=y(e,this.data("settings")),n=k(I,{attributes:{input:["type"],li:["className"],code:["className"]},tagNames:["input","code"]});this.Compiler=function(e){var i=D(e,n);return S(i,t)}})),L=(p().use(g,{commonmark:!0}).use(O),n(316)),T=n(319),_=n(318),M=n(203),E=n(5),P=n(10),q=(n(575),n(0)),H=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleCommentChange=function(e){a.setState({comment:e.target.value})},a.submitComment=function(){var e=a.state.comment.trim();e.length>0&&(j.a.postComment(f.N,f.J,e).then((function(){a.props.listComments()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)})),a.setState({comment:""}))},a.resolveComment=function(e){j.a.updateComment(f.N,e.target.id,"true").then((function(e){a.props.listComments()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))},a.editComment=function(e,t){j.a.updateComment(f.N,e,null,null,t).then((function(e){a.props.listComments()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))},a.deleteComment=function(e){j.a.deleteComment(f.N,e.target.id).then((function(e){a.props.listComments()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))},a.scrollToQuote=function(e,t,n){a.props.scrollToQuote(e,t,n),a.setState({comment:""})},a.state={showResolvedComment:!0,comment:""},a}return Object(a.a)(n,[{key:"componentWillReceiveProps",value:function(e){if(this.props.commentsList.length<e.commentsList.length){var t=this;setTimeout((function(){t.refs.commentsList.scrollTo(0,1e4)}),100)}}},{key:"render",value:function(){var e=this,t=this.props.commentsList;return Object(q.jsxs)("div",{className:"seafile-comment h-100",children:[Object(q.jsx)("div",{className:"flex-fill o-auto",children:t.length>0?Object(q.jsx)("ul",{className:"seafile-comment-list",ref:"commentsList",children:t.map((function(t,n){return Object(q.jsx)(F,{item:t,showResolvedComment:e.state.showResolvedComment,resolveComment:e.resolveComment,editComment:e.editComment,scrollToQuote:e.scrollToQuote,deleteComment:e.deleteComment},n)}))}):Object(q.jsx)("p",{className:"text-center my-4",children:Object(f.ub)("No comment yet.")})}),Object(q.jsxs)("div",{className:"seafile-comment-footer flex-shrink-0",children:[Object(q.jsx)("textarea",{className:"add-comment-input",value:this.state.comment,placeholder:Object(f.ub)("Add a comment..."),onChange:this.handleCommentChange,clos:"100",rows:"3",warp:"virtual"}),Object(q.jsx)("div",{className:"comment-submit-container",children:Object(q.jsx)(u.a,{className:"submit-comment",color:"primary",size:"sm",onClick:this.submitComment,children:Object(f.ub)("Submit")})})]})]})}}]),n}(l.a.Component),F=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggleDropDownMenu=function(){a.setState({dropdownOpen:!a.state.dropdownOpen})},a.convertComment=function(e){R.process(e.comment).then((function(e){var t=String(e);a.setState({comment:t})})),R.process(e.quote).then((function(e){var t=String(e);a.setState({quote:t})}))},a.scrollToQuote=function(){var e=a.props.item;a.props.scrollToQuote(e.newIndex,e.oldIndex,e.quote)},a.toggleEditComment=function(){a.setState({editable:!a.state.editable})},a.updateComment=function(e){var t=a.state.newComment;a.props.item.comment!==t&&a.props.editComment(e.target.id,t),a.toggleEditComment()},a.handleCommentChange=function(e){a.setState({newComment:e.target.value})},a.state={dropdownOpen:!1,comment:"",quote:"",newComment:a.props.item.comment,editable:!1},a}return Object(a.a)(n,[{key:"componentWillMount",value:function(){this.convertComment(this.props.item)}},{key:"componentWillReceiveProps",value:function(e){this.convertComment(e.item)}},{key:"render",value:function(){var e=this.props.item;return e.resolved&&!this.props.showResolvedComment?null:this.state.editable?Object(q.jsxs)("li",{className:"seafile-comment-item",id:e.id,children:[Object(q.jsxs)("div",{className:"seafile-comment-info",children:[Object(q.jsx)("img",{className:"avatar",src:e.avatarUrl,alt:""}),Object(q.jsxs)("div",{className:"reviewer-info",children:[Object(q.jsx)("div",{className:"reviewer-name ellipsis",children:e.name}),Object(q.jsx)("div",{className:"review-time",children:e.time})]})]}),Object(q.jsxs)("div",{className:"seafile-edit-comment",children:[Object(q.jsx)("textarea",{className:"edit-comment-input",value:this.state.newComment,onChange:this.handleCommentChange,clos:"100",rows:"3",warp:"virtual"}),Object(q.jsx)(u.a,{className:"comment-btn",color:"primary",size:"sm",onClick:this.updateComment,id:e.id,children:Object(f.ub)("Update")})," ",Object(q.jsx)(u.a,{className:"comment-btn",color:"secondary",size:"sm",onClick:this.toggleEditComment,children:Object(f.ub)("Cancel")})]})]}):Object(q.jsxs)("li",{className:e.resolved?"seafile-comment-item seafile-comment-item-resolved":"seafile-comment-item",id:e.id,children:[Object(q.jsxs)("div",{className:"seafile-comment-info",children:[Object(q.jsx)("img",{className:"avatar",src:e.avatarUrl,alt:""}),Object(q.jsxs)("div",{className:"reviewer-info",children:[Object(q.jsx)("div",{className:"reviewer-name ellipsis",children:e.name}),Object(q.jsx)("div",{className:"review-time",children:e.time})]}),!e.resolved&&Object(q.jsxs)(L.a,{isOpen:this.state.dropdownOpen,size:"sm",className:"seafile-comment-dropdown",toggle:this.toggleDropDownMenu,children:[Object(q.jsx)(T.a,{className:"seafile-comment-dropdown-btn",children:Object(q.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(q.jsxs)(_.a,{children:[e.userEmail===f.Ic&&Object(q.jsx)(M.a,{onClick:this.props.deleteComment,className:"delete-comment",id:e.id,children:Object(f.ub)("Delete")}),e.userEmail===f.Ic&&Object(q.jsx)(M.a,{onClick:this.toggleEditComment,className:"edit-comment",id:e.id,children:Object(f.ub)("Edit")}),Object(q.jsx)(M.a,{onClick:this.props.resolveComment,className:"seafile-comment-resolved",id:e.id,children:Object(f.ub)("Mark as resolved")})]})]})]}),e.newIndex>=-1&&e.oldIndex>=-1&&Object(q.jsx)("blockquote",{className:"seafile-comment-content",children:Object(q.jsx)("div",{onClick:this.scrollToQuote,dangerouslySetInnerHTML:{__html:this.state.quote}})}),Object(q.jsx)("div",{className:"seafile-comment-content",dangerouslySetInnerHTML:{__html:this.state.comment}})]})}}]),n}(l.a.Component),J=H,A=(n(1848),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleCommentChange=function(e){var t=e.target.value;a.setState({comment:t})},a.submitComment=function(){var e=a.props,t=e.quote,n=e.newIndex,i=e.oldIndex,s=a.state.comment.trim();if(0!==s.length){if(t.length>0){var o={quote:t,newIndex:n,oldIndex:i};j.a.postComment(f.N,f.J,s,JSON.stringify(o)).then((function(){a.props.onCommentAdded()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))}else j.a.postComment(f.N,f.J,s).then((function(){a.props.onCommentAdded()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}));a.setState({comment:""})}},a.setQuoteText=function(e){R.process(e).then((function(e){var t=String(e);a.setState({quote:t})}))},a.state={comment:"",quote:""},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setQuoteText(this.props.quote)}},{key:"componentWillReceiveProps",value:function(e){this.props.quote!==e.quote&&this.setQuoteText(e.quote)}},{key:"render",value:function(){return Object(q.jsxs)("div",{className:"review-comment-dialog",children:[Object(q.jsx)("div",{children:f.Vb}),Object(q.jsx)("blockquote",{className:"review-comment-dialog-quote",children:Object(q.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.quote}})}),Object(q.jsx)("textarea",{value:this.state.comment,onChange:this.handleCommentChange}),Object(q.jsxs)("div",{className:"button-group",children:[Object(q.jsx)(u.a,{size:"sm",color:"primary",onClick:this.submitComment,children:Object(f.ub)("Submit")}),Object(q.jsx)(u.a,{size:"sm",color:"secondary",onClick:this.props.toggleCommentDialog,children:Object(f.ub)("Cancel")})]}),Object(q.jsx)("span",{className:"review-comment-dialog-triangle"})]})}}]),n}(l.a.Component)),Q=n(600),V=n(121),Y=n(112),B=n(113),U=n(141),z=n(86),W=(n(1849),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).listReviewers=function(){j.a.listDraftReviewers(a.props.draftID).then((function(e){a.setState({reviewers:e.data.reviewers})}))},a.handleSelectChange=function(e){a.setState({selectedOption:e}),a.Options=[]},a.addReviewers=function(){if(a.state.selectedOption.length>0){a.refs.reviewSelect.clearSelect();for(var e=[],t=0;t<a.state.selectedOption.length;t++)e[t]=a.state.selectedOption[t].email;a.setState({loading:!0,errorMsg:[]}),j.a.addDraftReviewers(a.props.draftID,e).then((function(e){if(e.data.failed.length>0){for(var t=[],n=0;n<e.data.failed.length;n++)t[n]=e.data.failed[n];a.setState({errorMsg:t})}a.setState({selectedOption:null,loading:!1}),e.data.success.length>0&&a.listReviewers()})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))}},a.deleteReviewer=function(e){var t=e.target.getAttribute("name");j.a.deleteDraftReviewer(a.props.draftID,t).then((function(e){if(200===e.data){for(var n=[],i=0;i<a.state.reviewers.length;i++)a.state.reviewers[i].user_email!==t&&n.push(a.state.reviewers[i]);a.setState({reviewers:n})}})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))},a.state={reviewers:a.props.reviewers,selectedOption:null,errorMsg:[],loading:!1},a.Options=[],a}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props.toggleAddReviewerDialog,n=this.state,i=n.reviewers,a=n.errorMsg;return Object(q.jsxs)(V.a,{isOpen:!0,toggle:t,children:[Object(q.jsx)(Y.a,{toggle:t,children:Object(f.ub)("Request a review")}),Object(q.jsxs)(B.a,{children:[Object(q.jsx)("p",{children:Object(f.ub)("Add new reviewer")}),Object(q.jsxs)("div",{className:"add-reviewer",children:[Object(q.jsx)(z.a,{placeholder:Object(f.ub)("Search users..."),onSelectChange:this.handleSelectChange,ref:"reviewSelect",isMulti:!0,className:"reviewer-select"}),this.state.selectedOption&&!this.state.loading?Object(q.jsx)(u.a,{color:"secondary",onClick:this.addReviewers,children:Object(f.ub)("Submit")}):Object(q.jsx)(u.a,{color:"secondary",disabled:!0,children:Object(f.ub)("Submit")})]}),a.length>0&&a.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(q.jsxs)("p",{className:"reviewer-select-error error",children:[a[t].email,": ",a[t].error_msg]},t)})),i.length>0&&i.map((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(q.jsxs)("div",{className:"reviewer-select-info",children:[Object(q.jsxs)("div",{className:"d-flex",children:[Object(q.jsx)("img",{className:"avatar reviewer-select-avatar",src:t.avatar_url,alt:""}),Object(q.jsx)("span",{className:"reviewer-select-name ellipsis",children:t.user_name})]}),Object(q.jsx)("i",{className:"fa fa-times",name:t.user_email,onClick:e.deleteReviewer})]},n)}))]}),Object(q.jsx)(U.a,{children:Object(q.jsx)(u.a,{color:"secondary",onClick:t,children:Object(f.ub)("Close")})})]})}}]),n}(l.a.Component)),K=W,Z=n(96),G=n(1944),X=n(1945),$=n(1943),ee=n(1946),te=n(1947),ne=n(26),ie=n.n(ne),ae=n(50),se=n(12),oe=n.n(se);n(555);oe.a.locale(window.app.config.lang);var re=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onClick=function(e,t,n,i){if(t===a.state.activeItem)return!1;a.props.onHistoryItemClick(i,n,t)},a.onScroll=function(e){var t=e.target.clientHeight,n=e.target.scrollHeight;if(t+e.target.scrollTop+1>=n&&a.props.totalReversionCount>a.perPage*a.state.currentPage){var i=a.state.currentPage+1;a.setState({currentPage:i,loading:!0}),j.a.listFileHistoryRecords(f.N,f.J,i,a.perPage).then((function(e){var t=Object.assign([],a.props.historyList);a.props.onHistoryListChange([].concat(Object(ae.a)(t),Object(ae.a)(e.data.data))),a.setState({loading:!1})})).catch((function(e){var t=E.a.getErrorMsg(e);P.a.danger(t)}))}},a.perPage=25,a.state={currentPage:1,loading:!1},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(q.jsx)("div",{className:"history-body",children:Object(q.jsxs)("ul",{onScroll:this.onScroll,className:"history-list-container",children:[this.props.historyList?this.props.historyList.map((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=n+1;return a===i.length&&(a=n),Object(q.jsx)(ce,{onClick:e.onClick,ctime:t.ctime,className:e.props.activeItem===n?"item-active":"",name:t.creator_name,index:n,preItem:i[a],currentItem:t},n)})):Object(q.jsx)(b.a,{}),this.state.loading&&Object(q.jsx)("li",{className:"reloading-reversion",children:Object(q.jsx)(b.a,{})})]})})}}]),n}(l.a.Component),ce=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=oe.a.parseZone(this.props.ctime).format("YYYY-MM-DD HH:mm");return Object(q.jsx)("li",{onClick:function(t){return e.props.onClick(t,e.props.index,e.props.preItem,e.props.currentItem)},className:"history-list-item "+this.props.className,children:Object(q.jsxs)("div",{className:"history-info",children:[Object(q.jsx)("div",{className:"time",children:t}),Object(q.jsxs)("div",{className:"owner",children:[Object(q.jsx)("i",{className:"squire-icon"}),Object(q.jsx)("span",{children:this.props.name})]})]})})}}]),n}(l.a.Component),le=re,de=n(14),me=n(30),ue=function e(t){Object(i.a)(this,e);var n=new Date(t.created_at).getTime();if(this.time=oe()(n).format("YYYY-MM-DD HH:mm"),this.id=t.id,this.avatarUrl=t.avatar_url,this.comment=t.comment,this.name=t.user_name,this.userEmail=t.user_email,this.resolved=t.resolved,t.detail){var a=JSON.parse(t.detail);this.newIndex=a.newIndex,this.oldIndex=a.oldIndex,this.quote=a.quote}},he=(n(190),n(158),n(353),n(1850),n(359)),fe=n(12),je=Z.b.toSlateRange,ve=Z.b.toDOMNode,be=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).initialContent=function(){switch(f.O){case"open":if(!f.H)return void a.setState({isLoading:!1,isShowDiff:!1});if(!f.cc)return void j.a.getFileDownloadLink(f.N,f.J).then((function(e){j.a.getFileContent(e.data).then((function(e){a.setState({draftContent:e.data,draftOriginContent:e.data,isLoading:!1,isShowDiff:!1})}))}));var e=window.location.hash;if(0===e.indexOf("#history-")){var t,n,i=e.slice(9,49),o=e.slice(50,90);a.setState({isLoading:!1,activeTab:"history"}),j.a.listFileHistoryRecords(f.N,f.J,1,25).then((function(e){var s=e.data.data;a.setState({historyList:s,totalReversionCount:e.data.total_count});for(var r=0,c=s.length;r<c&&(o===s[r].commit_id&&(a.setState({activeItem:r}),t=s[r].path),i===s[r].commit_id&&(n=s[r].path),!t||!n);r++);v.a.all([j.a.getFileRevision(f.N,i,n),j.a.getFileRevision(f.N,o,t)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){a.setDiffViewerContent(t.data,e.data)})))})))}))}else v.a.all([j.a.getFileDownloadLink(f.N,f.J),j.a.getFileDownloadLink(f.N,f.L)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){a.setState({draftContent:e.data,draftOriginContent:t.data,isLoading:!1});var n=Object(s.a)(a);setTimeout((function(){n.getChangedNodes()}),100)})))})));break;case"published":if(!f.cc)return void a.setState({isLoading:!1,isShowDiff:!1});var r=f.wc+"repo/"+f.N+"/"+f.M+"/download?p="+f.L,c=f.wc+"repo/"+f.N+"/"+f.dc+"/download?p="+f.L;v.a.all([j.a.getFileContent(r),j.a.getFileContent(c)]).then(v.a.spread((function(e,t){a.setState({draftContent:e.data,draftOriginContent:t.data,isLoading:!1})})))}},a.onHistoryItemClick=function(e,t,n){var i=t.commit_id,s=e.commit_id,o="history-"+i+"-"+s;a.setURL(o),a.setState({activeItem:n,isLoading:!0}),v.a.all([j.a.getFileRevision(f.N,s,e.path),j.a.getFileRevision(f.N,i,t.path)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){a.setDiffViewerContent(e.data,t.data)})))})))},a.onHistoryListChange=function(e){a.setState({historyList:e})},a.listComments=function(){j.a.listComments(f.N,f.J).then((function(e){var t=[];e.data.comments.forEach((function(e){t.push(new ue(e))})),a.setState({commentsList:t})}))},a.addComment=function(e){e.stopPropagation(),a.getQuote(),a.quote&&a.setState({isShowCommentDialog:!0})},a.onCommentAdded=function(){a.listComments(),a.toggleCommentDialog()},a.toggleCommentDialog=function(){a.setState({isShowCommentDialog:!a.state.isShowCommentDialog})},a.getOriginRepoInfo=function(){j.a.getRepoInfo(f.N).then((function(e){a.setState({originRepoName:e.data.repo_name})}))},a.getDraftInfo=function(){"open"===f.O&&j.a.getFileInfo(f.N,f.J).then((function(e){a.setState({draftInfo:e.data})}))},a.getChangedNodes=function(){var e=a.refs.diffViewer.value,t=[],n="";e.map((function(e,i){var a=e.data.diff_state;("diff-added"===a&&"diff-added"!==n||"diff-removed"===a&&"diff-removed"!==n||"diff-replaced"===a&&"diff-replaced"!==n)&&t.push(i),n=e.data.diff_state})),a.setState({changedNodes:t})},a.scrollToChangedNode=function(e){if(0!=a.state.changedNodes.length){"up"===e?a.changeIndex++:a.changeIndex--,a.changeIndex>a.state.changedNodes.length-1&&(a.changeIndex=0),a.changeIndex<0&&(a.changeIndex=a.state.changedNodes.length-1);for(var t=window,n=a.state.changedNodes[a.changeIndex],i=window.viewer.children[n],s=ve(window.viewer,i);-1===s.className.indexOf("diff-")&&"BODY"!==s.tagName;)s=s.parentNode;var o=a.findScrollContainer(s,t);o==t.document.body||o==t.document.documentElement?t.scrollTo(0,s.offsetTop):o.scrollTop=s.offsetTop}},a.findScrollContainer=function(e,t){for(var n,i=e.parentNode,a=["auto","overlay","scroll"];!n&&i.parentNode;){var s=t.getComputedStyle(i).overflowY;if(a.includes(s)){n=i;break}i=i.parentNode}return n||t.document.body},a.scrollToQuote=function(e,t,n){var i=a.refs.diffViewer.value.find((function(n){if(n.data.old_index==t&&n.data.new_index==e)return n}));if(i){var s=ve(window.viewer,i);if(!s)return;var o=window,r=a.findScrollContainer(s,o);r==o.document.body||r==o.document.documentElement?o.scrollTo(0,s.offsetTop):r.scrollTop=s.offsetTop}},a.showDiffViewer=function(){return Object(q.jsxs)("div",{children:[a.state.isShowDiff?Object(q.jsx)(h.a,{scriptSource:f.Sb+"js/mathjax/tex-svg.js",newMarkdownContent:a.state.draftContent,oldMarkdownContent:a.state.draftOriginContent,ref:"diffViewer"}):Object(q.jsx)(h.a,{scriptSource:f.Sb+"js/mathjax/tex-svg.js",newMarkdownContent:a.state.draftContent,oldMarkdownContent:a.state.draftContent,ref:"diffViewer"}),Object(q.jsx)("i",{className:"fa fa-plus-square review-comment-btn",ref:"commentbtn",onMouseDown:a.addComment})]})},a.listReviewers=function(){j.a.listDraftReviewers(f.K).then((function(e){a.setState({reviewers:e.data.reviewers})}))},a.onSwitchShowDiff=function(){if(!a.state.isShowDiff){var e=Object(s.a)(a);setTimeout((function(){e.getChangedNodes()}),100)}a.setState({isShowDiff:!a.state.isShowDiff})},a.toggleDiffTip=function(){a.setState({showDiffTip:!a.state.showDiffTip})},a.toggleAddReviewerDialog=function(){a.state.showReviewerDialog&&a.listReviewers(),a.setState({showReviewerDialog:!a.state.showReviewerDialog})},a.showDiffButton=function(){return Object(q.jsxs)("div",{className:"seafile-toggle-diff",children:[Object(q.jsxs)("label",{className:"custom-switch",id:"toggle-diff",children:[Object(q.jsx)("input",{type:"checkbox",checked:a.state.isShowDiff&&"checked",name:"option",className:"custom-switch-input",onChange:a.onSwitchShowDiff}),Object(q.jsx)("span",{className:"custom-switch-indicator"})]}),Object(q.jsx)(Q.a,{placement:"bottom",isOpen:a.state.showDiffTip,target:"toggle-diff",toggle:a.toggleDiffTip,children:Object(f.ub)("View diff")})]})},a.onPublishDraft=function(){j.a.publishDraft(f.K).then((function(e){a.setState({draftStatus:e.data.draft_status})}))},a.initialDiffViewerContent=function(){j.a.listFileHistoryRecords(f.N,f.J,1,25).then((function(e){a.setState({historyList:e.data.data,totalReversionCount:e.data.total_count}),e.data.data.length>1?v.a.all([j.a.getFileRevision(f.N,e.data.data[0].commit_id,f.J),j.a.getFileRevision(f.N,e.data.data[1].commit_id,f.J)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){a.setState({draftContent:e.data,draftOriginContent:t.data})})))}))):j.a.getFileRevision(f.N,e.data.data[0].commit_id,f.J).then((function(e){j.a.getFileContent(e.data).then((function(e){a.setState({draftContent:e.data,draftOriginContent:""})}))}))}))},a.setDiffViewerContent=function(e,t){a.setState({draftContent:e,draftOriginContent:t,isLoading:!1})},a.setURL=function(e){var t=new he(window.location.href);t.set("hash",e),window.location.href=t.toString()},a.tabItemClick=function(e){a.state.activeTab!==e&&("history"!==e&&window.location.hash&&a.setURL("#"),"reviewInfo"==e?a.initialContent():"history"==e&&a.initialDiffViewerContent(),a.setState({activeTab:e}))},a.showNavItem=function(e){var t=a.state.commentsList.length;switch(e){case"info":return Object(q.jsx)(G.a,{className:"nav-item",children:Object(q.jsx)(X.a,{className:ie()({active:"reviewInfo"===a.state.activeTab}),onClick:function(){a.tabItemClick("reviewInfo")},children:Object(q.jsx)("i",{className:"fas fa-info-circle"})})});case"comments":return Object(q.jsx)(G.a,{className:"nav-item",children:Object(q.jsxs)(X.a,{className:ie()({active:"comments"===a.state.activeTab}),onClick:function(){a.tabItemClick("comments")},children:[Object(q.jsx)("i",{className:"fa fa-comments"}),t>0&&Object(q.jsx)("div",{className:"comments-number",children:t})]})});case"history":return Object(q.jsx)(G.a,{className:"nav-item",children:Object(q.jsx)(X.a,{className:ie()({active:"history"===a.state.activeTab}),onClick:function(){a.tabItemClick("history")},children:Object(q.jsx)("i",{className:"fas fa-history"})})})}},a.getDomNodeByPath=function(e){for(var t,n=document.querySelector(".viewer-component");"number"===typeof e[0]&&n;)(t=n.children[e[0]]).getAttribute("data-slate-node")||(t=t.children[0]),e.shift(),n=t;return t},a.setBtnPosition=function(){var e=window.getSelection();if(e.rangeCount){var t=e.getRangeAt(0),n=null,i=a.refs.commentbtn.style;try{n=je(window.viewer,t)}catch(r){return void(i.top="-1000px")}if(n&&!de.h.isCollapsed(n)){a.range=n;var s=n.anchor.path.slice();s.pop();var o=a.getDomNodeByPath(s);i.right="0px",i.top=o?"".concat(o.offsetTop,"px"):"-1000px"}else i.top="-1000px"}},a.getQuote=function(){if(a.range){a.quote=Object(h.l)(de.b.fragment(window.viewer,a.range));var e=window.viewer.children[a.range.anchor.path[0]];a.newIndex=e.data.new_index,a.oldIndex=e.data.old_index}},a.renderDiffButton=function(){switch(f.O){case"open":if(!f.H||!f.cc)return;return a.showDiffButton();case"published":if(!f.cc)return;return a.showDiffButton()}},a.renderNavItems=function(){switch(f.O){case"open":return f.H?Object(q.jsxs)($.a,{tabs:!0,className:"review-side-panel-nav",children:[a.showNavItem("info"),a.showNavItem("comments"),a.showNavItem("history")]}):Object(q.jsx)($.a,{tabs:!0,className:"review-side-panel-nav",children:a.showNavItem("info")});case"published":return f.cc?Object(q.jsxs)($.a,{tabs:!0,className:"review-side-panel-nav",children:[a.showNavItem("info"),a.showNavItem("comments")]}):Object(q.jsx)($.a,{tabs:!0,className:"review-side-panel-nav",children:a.showNavItem("info")})}},a.renderContent=function(){switch(f.O){case"open":return f.H?a.showDiffViewer():Object(q.jsx)("p",{className:"error",children:Object(f.ub)("Draft has been deleted.")});case"published":return f.cc?a.showDiffViewer():Object(q.jsx)("p",{className:"error",children:Object(f.ub)("Original file has been deleted.")})}},a.state={draftContent:"",draftOriginContent:"",draftInfo:{},isLoading:!0,isShowDiff:!0,showDiffTip:!1,activeTab:"reviewInfo",commentsList:[],changedNodes:[],originRepoName:"",isShowCommentDialog:!1,activeItem:null,historyList:[],showReviewerDialog:!1,reviewers:[],draftStatus:f.O},a.quote="",a.newIndex=null,a.oldIndex=null,a.changeIndex=-1,a.range=null,a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.getOriginRepoInfo(),this.getDraftInfo(),this.listReviewers(),this.listComments(),this.initialContent(),document.addEventListener("selectionchange",this.setBtnPosition)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("selectionchange",this.setBtnPosition)}},{key:"render",value:function(){var e=this.state,t=e.draftInfo,n=e.reviewers,i=e.originRepoName,a=e.draftStatus,s=f.wc+"lib/"+f.N+"/file"+f.J+"?mode=edit",o="published"==this.state.draftStatus,r="open"==this.state.draftStatus&&"rw"==f.rb,c="open"==this.state.draftStatus&&"rw"==f.rb,l=fe(1e3*t.mtime).format("YYYY-MM-DD HH:mm"),d="".concat(f.wc,"profile/").concat(encodeURIComponent(t.last_modifier_email),"/");return Object(q.jsxs)("div",{className:"wrapper",children:[Object(q.jsxs)("div",{id:"header",className:"header review",children:[Object(q.jsxs)("div",{className:"cur-file-info",children:[Object(q.jsx)("div",{className:"info-item file-feature",children:Object(q.jsx)("span",{className:"sf2-icon-review"})}),Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:"info-item file-info",children:[Object(q.jsx)("span",{className:"file-name",children:f.I}),Object(q.jsx)("span",{className:"mx-2 file-review",children:Object(f.ub)("Review")})]}),!o&&t.mtime&&Object(q.jsxs)("div",{className:"last-modification",children:[Object(q.jsx)("a",{href:d,children:t.last_modifier_name}),Object(q.jsx)("span",{className:"mx-1",children:l})]})]})]}),Object(q.jsxs)("div",{className:"button-group",children:[this.renderDiffButton(),c&&Object(q.jsx)("a",{href:s,className:"mx-1",children:Object(q.jsx)(u.a,{className:"file-operation-btn",color:"secondary",children:Object(f.ub)("Edit Draft")})}),r&&Object(q.jsx)("button",{className:"btn btn-success file-operation-btn",title:Object(f.ub)("Publish draft"),onClick:this.onPublishDraft,children:Object(f.ub)("Publish")}),o&&Object(q.jsx)("button",{className:"btn btn-success file-operation-btn",title:Object(f.ub)("Published"),disabled:!0,children:Object(f.ub)("Published")})]})]}),Object(q.jsx)("div",{id:"main",className:"main",ref:"main",children:Object(q.jsxs)("div",{className:"cur-view-container",children:[Object(q.jsx)("div",{className:"cur-view-content",ref:"viewContent",children:this.state.isLoading?Object(q.jsx)("div",{className:"markdown-viewer-render-content article",children:Object(q.jsx)(b.a,{})}):Object(q.jsx)("div",{className:"markdown-viewer-render-content article",children:this.renderContent()})}),Object(q.jsx)("div",{className:"cur-view-right-part",children:Object(q.jsxs)("div",{className:"review-side-panel",children:[this.renderNavItems(),Object(q.jsxs)(ee.a,{activeTab:this.state.activeTab,children:[Object(q.jsx)(te.a,{tabId:"reviewInfo",children:Object(q.jsxs)("div",{className:"review-side-panel-body",children:[Object(q.jsx)(pe,{reviewers:n,toggleAddReviewerDialog:this.toggleAddReviewerDialog}),Object(q.jsx)(ge,{}),f.H&&Object(q.jsx)(we,{commentsList:this.state.commentsList}),!0===this.state.isShowDiff&&this.state.changedNodes.length>0&&Object(q.jsx)(xe,{changedNumber:this.state.changedNodes.length,scrollToChangedNode:this.scrollToChangedNode}),Object(q.jsx)(Oe,{originRepoName:i,draftInfo:t,draftStatus:a})]})}),Object(q.jsx)(te.a,{tabId:"comments",className:"comments",children:Object(q.jsx)(J,{scrollToQuote:this.scrollToQuote,listComments:this.listComments,commentsList:this.state.commentsList,inResizing:!1})}),Object(q.jsx)(te.a,{tabId:"history",className:"history",children:Object(q.jsx)(le,{activeItem:this.state.activeItem,historyList:this.state.historyList,totalReversionCount:this.state.totalReversionCount,onHistoryItemClick:this.onHistoryItemClick,onHistoryListChange:this.onHistoryListChange})})]})]})})]})}),this.state.showReviewerDialog&&Object(q.jsx)(me.a,{children:Object(q.jsx)(K,{showReviewerDialog:this.state.showReviewerDialog,toggleAddReviewerDialog:this.toggleAddReviewerDialog,draftID:f.K,reviewers:n})}),this.state.isShowCommentDialog&&Object(q.jsx)(me.a,{children:Object(q.jsx)(A,{toggleCommentDialog:this.toggleCommentDialog,onCommentAdded:this.onCommentAdded,quote:this.quote,newIndex:this.newIndex,oldIndex:this.oldIndex})})]})}}]),n}(l.a.Component),pe=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.reviewers;return Object(q.jsxs)("div",{className:"review-side-panel-item",children:[Object(q.jsxs)("div",{className:"review-side-panel-header",children:[Object(f.ub)("Reviewers"),Object(q.jsx)("i",{className:"fa fa-cog",onClick:this.props.toggleAddReviewerDialog})]}),e.length>0?e.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(q.jsxs)("div",{className:"reviewer-info",children:[Object(q.jsx)("img",{className:"avatar review-side-panel-avatar",src:e.avatar_url,alt:""}),Object(q.jsx)("span",{className:"reviewer-name ellipsis",children:e.user_name})]},t)})):Object(q.jsx)("span",{children:Object(f.ub)("No reviewer yet.")})]})}}]),n}(l.a.Component),ge=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(q.jsxs)("div",{className:"review-side-panel-item",children:[Object(q.jsx)("div",{className:"review-side-panel-header",children:Object(f.ub)("Author")}),Object(q.jsxs)("div",{className:"author-info",children:[Object(q.jsx)("img",{className:"avatar review-side-panel-avatar",src:f.h,alt:""}),Object(q.jsx)("span",{className:"author-name ellipsis",children:f.g})]})]})}}]),n}(l.a.Component),Oe=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.draftStatus,n=e.originRepoName,i=f.lc+"/lib/"+f.N+"/file"+f.L;return Object(q.jsx)("div",{className:"dirent-table-container",children:Object(q.jsxs)("table",{className:"table-thead-hidden",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{width:"25%"}),Object(q.jsx)("th",{width:"75%"})]})}),Object(q.jsx)("tbody",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{className:"align-text-top",children:Object(f.ub)("Location")}),Object(q.jsx)("td",{children:"open"===t?Object(q.jsxs)("span",{children:[n,f.J]}):Object(q.jsx)("a",{href:i,className:"text-dark",children:i})})]})})]})})}}]),n}(l.a.Component),we=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.commentsList,t=0;if(e)for(var n=0,i=e.length;n<i;n++)!1===e[n].resolved&&t++;return Object(q.jsxs)("div",{className:"review-side-panel-item",children:[Object(q.jsx)("div",{className:"review-side-panel-header",children:Object(f.ub)("Comments")}),Object(q.jsx)("div",{className:"changes-info",children:Object(q.jsxs)("span",{children:[Object(f.ub)("Unresolved comments:")," ",t]})})]})}}]),n}(l.a.Component),xe=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{className:"review-side-panel-item",children:[Object(q.jsx)("div",{className:"review-side-panel-header",children:Object(f.ub)("Changes")}),Object(q.jsxs)("div",{className:"changes-info",children:[Object(q.jsxs)("span",{children:[Object(f.ub)("Number of changes:")," ",this.props.changedNumber]}),this.props.changedNumber>0&&Object(q.jsxs)("div",{children:[Object(q.jsx)("i",{className:"fa fa-arrow-circle-up",onClick:function(){e.props.scrollToChangedNode("down")}}),Object(q.jsx)("i",{className:"fa fa-arrow-circle-down",onClick:function(){e.props.scrollToChangedNode("up")}})]})]})]})}}]),n}(l.a.Component);m.a.render(Object(q.jsx)(be,{}),document.getElementById("wrapper"))},555:function(e,t,n){}},[[1846,1,0]]]);
//# sourceMappingURL=draft.chunk.js.map
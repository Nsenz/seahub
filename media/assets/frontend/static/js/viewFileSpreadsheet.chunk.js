(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[39],{1897:function(e,t,n){n(73),e.exports=n(1898)},1898:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),c=n(6),o=n(7),i=n(2),s=n.n(i),u=n(35),f=n.n(u),b=n(8),d=n(1),h=n(212),j=n(174),O=n(23),l=(n(584),n(0)),p=window.app.pageOptions,g=p.repoID,m=p.filePath,v=p.err,w=p.commitID,x=p.fileType,k=p.fileName,L=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)(h.a,{content:Object(l.jsx)(y,{})})}}]),n}(s.a.Component),y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setIframeHeight=function(e){var t=e.currentTarget;t.height=t.contentDocument.body.scrollHeight},r.state={isLoading:!v,errorMsg:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!v){!function t(){b.a.queryOfficeFileConvertStatus(g,w,m,x.toLowerCase()).then((function(n){switch(n.data.status){case"QUEUED":case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(d.ub)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""})}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(d.ub)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(d.ub)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return v?Object(l.jsx)(j.a,{}):t?Object(l.jsx)(O.a,{}):n?Object(l.jsx)(j.a,{errorMsg:n}):Object(l.jsx)("div",{className:"file-view-content flex-1 spreadsheet-file-view",children:Object(l.jsx)("iframe",{id:"spreadsheet-container",title:k,src:"".concat(d.wc,"office-convert/static/").concat(g,"/").concat(w).concat(encodeURIComponent(m),"/index.html"),onLoad:this.setIframeHeight})})}}]),n}(s.a.Component);f.a.render(Object(l.jsx)(L,{}),document.getElementById("wrapper"))},584:function(e,t,n){}},[[1897,1,0]]]);
//# sourceMappingURL=viewFileSpreadsheet.chunk.js.map
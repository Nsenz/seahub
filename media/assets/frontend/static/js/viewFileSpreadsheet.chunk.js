(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[34],{1725:function(e,t,n){n(74),e.exports=n(1726)},1726:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(5),c=n(7),o=n(6),i=n(2),s=n.n(i),u=n(31),f=n.n(u),b=n(8),d=n(1),h=n(200),j=n(163),O=n(19),l=(n(549),n(0)),p=window.app.pageOptions,g=p.repoID,m=p.filePath,v=p.err,x=p.commitID,w=p.fileType,k=p.fileName,L=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(h.a,{content:Object(l.jsx)(y,{})})}}]),n}(s.a.Component),y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).setIframeHeight=function(e){var t=e.currentTarget;t.height=t.contentDocument.body.scrollHeight},a.state={isLoading:!v,errorMsg:""},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!v){!function t(){b.a.queryOfficeFileConvertStatus(g,x,m,w.toLowerCase()).then((function(n){switch(n.data.status){case"QUEUED":case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(d.rb)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""})}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(d.rb)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(d.rb)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return v?Object(l.jsx)(j.a,{}):t?Object(l.jsx)(O.a,{}):n?Object(l.jsx)(j.a,{errorMsg:n}):Object(l.jsx)("div",{className:"file-view-content flex-1 spreadsheet-file-view",children:Object(l.jsx)("iframe",{id:"spreadsheet-container",title:k,src:"".concat(d.rc,"office-convert/static/").concat(g,"/").concat(x).concat(encodeURIComponent(m),"/index.html"),onLoad:this.setIframeHeight})})}}]),n}(s.a.Component);f.a.render(Object(l.jsx)(L,{}),document.getElementById("wrapper"))},549:function(e,t,n){}},[[1725,1,0]]]);
//# sourceMappingURL=viewFileSpreadsheet.chunk.js.map
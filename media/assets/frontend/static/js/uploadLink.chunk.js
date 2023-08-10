(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[35],{1914:function(e,a,t){t(73),e.exports=t(1929)},1915:function(e,a,t){},1929:function(e,a,t){"use strict";t.r(a);var r=t(3),i=t(4),l=t(6),o=t(7),n=t(2),s=t.n(n),d=t(35),c=t.n(d),p=t(5),u=t(8),b=t(1),m=t(123),h=t(108),f=t(37),j=t(295),g=t.n(j),O=t(170),v=t.n(O),F=t(989),x=t(319),U=t(318),y=t(203),k=t(85),S=t(0),w="uploading",C="error",N="isSaving",L="uploaded",D=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).onUploadCancel=function(e){e.preventDefault(),i.props.onUploadCancel(i.props.resumableFile)},i.onUploadRetry=function(e){e.preventDefault(),i.props.onUploadRetry(i.props.resumableFile)},i.formatFileSize=function(e){return"number"!==typeof e?"":e>=1e9?(e/1e9).toFixed(1)+" G":e>=1e6?(e/1e6).toFixed(1)+" M":e>=1e3?(e/1e3).toFixed(1)+" K":e.toFixed(1)+" B"},i.state={uploadState:w},i}return Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=e.resumableFile,t=w;a.error?t=C:(0!==a.remainingTime||a.isSaved||(t=N),a.isSaved&&(t=L)),this.setState({uploadState:t})}},{key:"render",value:function(){var e=this.props.resumableFile,a=Math.round(100*e.progress()),t=e.error;return Object(S.jsxs)("tr",{className:"file-upload-item",children:[Object(S.jsx)("td",{className:"upload-name",children:Object(S.jsx)("div",{className:"ellipsis",children:e.newFileName})}),Object(S.jsx)("td",{children:Object(S.jsx)("span",{className:"file-size",children:this.formatFileSize(e.size)})}),Object(S.jsxs)("td",{className:"upload-progress",children:[(this.state.uploadState===w||this.state.uploadState===N)&&Object(S.jsxs)(n.Fragment,{children:[e.size>=1e8&&Object(S.jsxs)(n.Fragment,{children:[e.isUploading()&&Object(S.jsxs)("div",{className:"progress-container",children:[Object(S.jsx)("div",{className:"progress",children:Object(S.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})}),-1===e.remainingTime&&Object(S.jsx)("div",{className:"progress-text",children:Object(b.ub)("Preparing to upload...")}),e.remainingTime>0&&Object(S.jsxs)("div",{className:"progress-text",children:[Object(b.ub)("Remaining")," ",p.a.formatTime(e.remainingTime)]}),0===e.remainingTime&&Object(S.jsx)("div",{className:"progress-text",children:Object(b.ub)("Indexing...")})]}),!e.isUploading()&&Object(S.jsx)("div",{className:"progress-container d-flex align-items-center",children:Object(S.jsx)("div",{className:"progress",children:Object(S.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})})})]}),e.size<1e8&&Object(S.jsx)("div",{className:"progress-container d-flex align-items-center",children:Object(S.jsx)("div",{className:"progress",children:Object(S.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"})})})]}),this.state.uploadState===C&&Object(S.jsx)("div",{className:"message err-message ml-0",dangerouslySetInnerHTML:{__html:t}})]}),Object(S.jsx)("td",{className:"upload-operation",children:Object(S.jsxs)(n.Fragment,{children:[this.state.uploadState===w&&Object(S.jsx)("a",{href:"#",onClick:this.onUploadCancel,role:"button",children:Object(b.ub)("Cancel")}),this.state.uploadState===C&&Object(S.jsx)("a",{href:"#",onClick:this.onUploadRetry,role:"button",children:Object(b.ub)("Retry")}),this.state.uploadState===N&&Object(S.jsx)("span",{className:"saving",children:Object(b.ub)("Saving...")}),this.state.uploadState===L&&Object(S.jsx)("span",{className:"uploaded",children:Object(b.ub)("Uploaded")})]})})]})}}]),t}(s.a.Component),I=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.file,a=Object(b.ub)("Please upload files less than {placeholder}").replace("{placeholder}",p.a.bytesToSize(1e3*b.Rb*1e3));return Object(S.jsxs)("tr",{className:"file-upload-item",children:[Object(S.jsx)("td",{className:"upload-name",children:Object(S.jsx)("div",{className:"ellipsis",children:e.name})}),Object(S.jsx)("td",{colSpan:3,className:"error",children:a})]})}}]),t}(s.a.Component),z=I,E=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).toggleDropdown=function(){i.setState({dropdownOpen:!i.state.dropdownOpen})},i.onDropdownToggleKeyDown=function(e){"Enter"!=e.key&&"Space"!=e.key||i.toggleDropdown()},i.onMenuItemKeyDown=function(e){"Enter"!=e.key&&"Space"!=e.key||e.target.click()},i.state={dropdownOpen:!1},i}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.allFilesUploaded;return Object(S.jsxs)(n.Fragment,{children:[Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsxs)(F.a,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown,children:[Object(S.jsx)(x.a,{color:"primary",caret:!0,onKeyDown:this.onDropdownToggleKeyDown,children:Object(b.ub)("Upload")}),Object(S.jsxs)(U.a,{children:[Object(S.jsx)(y.a,{onClick:this.props.onFileUpload,onKeyDown:this.onMenuItemKeyDown,children:Object(b.ub)("Upload Files")}),Object(S.jsx)(y.a,{onClick:this.props.onFolderUpload,onKeyDown:this.onMenuItemKeyDown,children:Object(b.ub)("Upload Folder")})]})]}),Object(S.jsx)(k.a,{color:"primary",outline:!0,className:"ml-4",onClick:this.props.onCancelAllUploading,disabled:a,children:Object(b.ub)("Cancel All")})]}),Object(S.jsx)("div",{className:"mt-4 mh-2",children:Object(S.jsxs)("table",{className:"table-thead-hidden",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{width:"35%",children:Object(b.ub)("name")}),Object(S.jsx)("th",{width:"15%",children:Object(b.ub)("size")}),Object(S.jsx)("th",{width:"35%",children:Object(b.ub)("progress")}),Object(S.jsx)("th",{width:"15%",children:Object(b.ub)("state")})]})}),Object(S.jsxs)("tbody",{children:[this.props.forbidUploadFileList.map((function(e,a){return Object(S.jsx)(z,{file:e},a)})),this.props.uploadFileList.map((function(a,t){return Object(S.jsx)(D,{resumableFile:a,onUploadCancel:e.props.onUploadCancel,onUploadRetry:e.props.onUploadRetry},t)})).reverse()]})]})})]})}}]),t}(s.a.Component),P=t(10),_=(t(578),function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).componentWillUnmount=function(){window.onbeforeunload=null,!0===i.props.dragAndDrop&&i.resumable.disableDropOnDocument()},i.onbeforeunload=function(){if(window.uploader&&window.uploader.isUploadProgressDialogShow&&100!==window.uploader.totalProgress)return""},i.bindCallbackHandler=function(){var e=i.props,a=e.minFileSizeErrorCallback,t=e.fileTypeErrorCallback;i.maxFilesErrorCallback&&(i.resumable.opts.maxFilesErrorCallback=i.maxFilesErrorCallback),a&&(i.resumable.opts.minFileSizeErrorCallback=i.props.minFileSizeErrorCallback),i.maxFileSizeErrorCallback&&(i.resumable.opts.maxFileSizeErrorCallback=i.maxFileSizeErrorCallback),t&&(i.resumable.opts.fileTypeErrorCallback=i.props.fileTypeErrorCallback)},i.bindEventHandler=function(){i.resumable.on("chunkingComplete",i.onChunkingComplete.bind(Object(f.a)(i))),i.resumable.on("fileAdded",i.onFileAdded.bind(Object(f.a)(i))),i.resumable.on("fileProgress",i.onFileProgress.bind(Object(f.a)(i))),i.resumable.on("fileSuccess",i.onFileUploadSuccess.bind(Object(f.a)(i))),i.resumable.on("fileError",i.onFileError.bind(Object(f.a)(i))),i.resumable.on("uploadStart",i.onUploadStart.bind(Object(f.a)(i))),i.resumable.on("progress",i.onProgress.bind(Object(f.a)(i))),i.resumable.on("complete",i.onComplete.bind(Object(f.a)(i))),i.resumable.on("error",i.onError.bind(Object(f.a)(i))),i.resumable.on("dragstart",i.onDragStart.bind(Object(f.a)(i)))},i.maxFilesErrorCallback=function(e,a){var t=b.Qb,r=Object(b.ub)("Please upload no more than {maxFiles} files at a time.");r=r.replace("{maxFiles}",t),P.a.danger(r)},i.maxFileSizeErrorCallback=function(e){var a=i.state.forbidUploadFileList;a.push(e),i.setState({forbidUploadFileList:a})},i.onChunkingComplete=function(e){!0===i.state.allFilesUploaded&&i.setState({allFilesUploaded:!1});var a=i.props.path,t=e.fileName,r=e.relativePath,l=t===r;if(e.formData={},l)e.formData={parent_dir:a};else{var o=r.slice(0,r.lastIndexOf("/")+1);e.formData={parent_dir:a,relative_path:o}}},i.onFileAdded=function(e,a){if(e.fileName===e.relativePath&&1===a.length){i.setUploadFileList(i.resumable.files),u.a.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(a){i.resumable.opts.target=a.data.upload_link+"?ret-json=1",i.resumableUpload(e)})).catch((function(e){var a=p.a.getErrorMsg(e);P.a.danger(a)}))}else i.setUploadFileList(i.resumable.files),i.isUploadLinkLoaded||(i.isUploadLinkLoaded=!0,u.a.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(e){i.resumable.opts.target=e.data.upload_link+"?ret-json=1",i.resumable.upload()})).catch((function(e){var a=p.a.getErrorMsg(e);P.a.danger(a)})))},i.resumableUpload=function(e){var a=i.props,t=a.repoID,r=a.path;u.a.getFileUploadedBytes(t,r,e.fileName).then((function(a){var t=a.data.uploadedBytes,r=1024*parseInt(b.ic)*1024||1048576,l=Math.floor(t/r);e.markChunksCompleted(l),i.resumable.upload()})).catch((function(e){var a=p.a.getErrorMsg(e);P.a.danger(a)}))},i.filesAddedComplete=function(e,a){i.state.forbidUploadFileList.length>0&&0===a.length&&i.setState({isUploadProgressDialogShow:!0,totalProgress:100})},i.setUploadFileList=function(){var e=i.resumable.files;i.setState({uploadFileList:e,isUploadProgressDialogShow:!0}),p.a.registerGlobalVariable("uploader","isUploadProgressDialogShow",!0)},i.onFileProgress=function(e){var a=i.getBitrate(),t=i.state.uploadFileList.map((function(t){if(t.uniqueIdentifier===e.uniqueIdentifier&&a){var r=8*(t.size-t.size*t.progress()),i=Math.floor(r/a);t.remainingTime=i}return t}));i.setState({uploadBitrate:a,uploadFileList:t})},i.getBitrate=function(){var e=0,a=0,t=(new Date).getTime();if(i.resumable.files.forEach((function(a){e+=a.progress()*a.size})),i.timestamp){var r=t-i.timestamp;if(r<i.bitrateInterval)return i.state.uploadBitrate;(e<i.loaded||0===i.loaded)&&(i.loaded=e),a=(e-i.loaded)*(1e3/r)*8}return i.timestamp=t,i.loaded=e,a},i.onUploadStart=function(){var e=Object(b.ub)("File upload started");P.a.notify(e)},i.onProgress=function(){var e=Math.round(100*i.resumable.progress());i.setState({totalProgress:e}),p.a.registerGlobalVariable("uploader","totalProgress",e)},i.onFileUploadSuccess=function(e,a){var t=e.formData,r=(new Date).getTime()/1e3;if(a=t.replace?a:JSON.parse(a)[0],t.relative_path){var l=t.relative_path,o=l.slice(0,l.indexOf("/")),n={id:a.id,name:o,type:"dir",mtime:r};i.notifiedFolders.some((function(e){return e.name===n.name}))||(i.notifiedFolders.push(n),i.props.onFileUploadSuccess(n));var s=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=l+a.name,t.isSaved=!0),t}));i.setState({uploadFileList:s})}else if(t.replace){var d=e.fileName,c={id:a,name:d,type:"file",mtime:r};i.props.onFileUploadSuccess(c);var p=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.newFileName=d,a.isSaved=!0),a}));i.setState({uploadFileList:p})}else{var u={id:a.id,type:"file",name:a.name,size:a.size,mtime:r};i.props.onFileUploadSuccess(u);var b=i.state.uploadFileList.map((function(t){return t.uniqueIdentifier===e.uniqueIdentifier&&(t.newFileName=a.name,t.isSaved=!0),t}));i.setState({uploadFileList:b})}},i.onFileError=function(e,a){var t="";if(a){var r=a.replace(/\n/g,"");r=JSON.parse(r),"File locked by others."===(t=r.error)&&(t=Object(b.ub)("File is locked by others.")),"Internal error."===t&&(t=Object(b.ub)("Internal Server Error"))}else t=Object(b.ub)("Network error");var l=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(i.state.retryFileList.push(a),a.error=t),a}));i.loaded=0,i.setState({retryFileList:i.state.retryFileList,uploadFileList:l})},i.onComplete=function(){if(!i.error){var e=Object(b.ub)("All files uploaded");P.a.success(e)}i.error=!1,i.notifiedFolders=[],i.isUploadLinkLoaded=!1,i.setState({allFilesUploaded:!0})},i.onError=function(e,a){var t=Object(b.ub)("Error");a&&a.fileName&&(t=Object(b.ub)("Failed to upload {file_name}.").replace("{file_name}",a.fileName)),P.a.danger(t,{id:"file-error-msg"}),i.error=!0,i.isUploadLinkLoaded=!1,p.a.registerGlobalVariable("uploader","totalProgress",100)},i.setHeaders=function(e,a){var t=a.offset,r=a.getOpt("chunkSize"),i=0===e.size?1:e.size,l=0!==t?t*r:0,o=Math.min(i,(t+1)*r)-1;return i-a.endByte<r&&!a.getOpt("forceChunkSize")&&(o=i),{Accept:"application/json; text/javascript, */*; q=0.01","Content-Disposition":'attachment; filename="'+encodeURI(e.fileName)+'"',"Content-Range":"bytes "+l+"-"+o+"/"+i}},i.setQuery=function(e){return e.formData},i.generateUniqueIdentifier=function(e){var a=e.webkitRelativePath||e.relativePath||e.fileName||e.name;return v()(a+new Date)+a},i.onClick=function(e){e.nativeEvent.stopImmediatePropagation(),e.stopPropagation()},i.onFileUpload=function(){i.uploadInput.current.removeAttribute("webkitdirectory"),i.uploadInput.current.click()},i.onFolderUpload=function(){i.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory"),i.uploadInput.current.click()},i.onDragStart=function(){i.uploadInput.current.setAttribute("webkitdirectory","webkitdirectory")},i.onCloseUploadDialog=function(){i.loaded=0,i.resumable.files=[],i.isUploadLinkLoaded=!1,i.setState({isUploadProgressDialogShow:!1,uploadFileList:[],forbidUploadFileList:[]}),p.a.registerGlobalVariable("uploader","isUploadProgressDialogShow",!1)},i.onUploadCancel=function(e){var a=i.state.uploadFileList.filter((function(a){return a.uniqueIdentifier!==e.uniqueIdentifier||(a.cancel(),!1)}));i.resumable.isUploading()||(i.setState({totalProgress:"100",allFilesUploaded:!0}),i.loaded=0),i.setState({uploadFileList:a})},i.onCancelAllUploading=function(){var e=i.state.uploadFileList.filter((function(e){return!Math.round(1!==e.progress())||(e.cancel(),!1)}));i.loaded=0,i.setState({allFilesUploaded:!0,totalProgress:"100",uploadFileList:e}),i.isUploadLinkLoaded=!1},i.onUploadRetry=function(e){u.a.sharedUploadLinkGetFileUploadUrl(i.props.token).then((function(a){i.resumable.opts.target=a.data.upload_link+"?ret-json=1";var t=i.state.retryFileList.filter((function(a){return a.uniqueIdentifier!==e.uniqueIdentifier})),r=i.state.uploadFileList.map((function(a){return a.uniqueIdentifier===e.uniqueIdentifier&&(a.error=null,i.retryUploadFile(a)),a}));i.setState({retryFileList:t,uploadFileList:r})})).catch((function(e){var a=p.a.getErrorMsg(e);P.a.danger(a)}))},i.retryUploadFile=function(e){var a=i.props,t=a.repoID,r=a.path,l=e.fileName;if(!(e.fileName===e.relativePath)){var o=e.formData.relative_path;l=("/"===r?r+o:r+"/"+o)+l}e.bootstrap();var n=!1;e.resumableObj.on("chunkingComplete",(function(){n||u.a.getFileUploadedBytes(t,r,l).then((function(a){var t=a.data.uploadedBytes,r=1024*parseInt(b.ic)*1024||1048576,i=Math.floor(t/r);e.markChunksCompleted(i),e.resumableObj.upload()})).catch((function(e){var a=p.a.getErrorMsg(e);P.a.danger(a)})),n=!0}))},i.replaceRepetitionFile=function(){var e=i.props,a=e.repoID,t=e.path;u.a.getUpdateLink(a,t).then((function(e){i.resumable.opts.target=e.data;var a=i.resumable.files[i.resumable.files.length-1];a.formData.replace=1,a.formData.target_file=a.formData.parent_dir+a.fileName,i.setUploadFileList(i.resumable.files),i.resumable.upload()})).catch((function(e){var a=p.a.getErrorMsg(e);P.a.danger(a)}))},i.cancelFileUpload=function(){i.resumable.files.pop()},i.state={retryFileList:[],uploadFileList:[],forbidUploadFileList:[],totalProgress:0,isUploadProgressDialogShow:!1,currentResumableFile:null,uploadBitrate:0,allFilesUploaded:!1},i.uploadInput=s.a.createRef(),i.notifiedFolders=[],i.timestamp=null,i.loaded=0,i.bitrateInterval=500,i.isUploadLinkLoaded=!1,window.onbeforeunload=i.onbeforeunload,i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.resumable=new g.a({target:"",query:this.setQuery||{},fileType:this.props.filetypes,maxFiles:b.Qb||void 0,maxFileSize:1e3*b.Rb*1e3||void 0,testMethod:this.props.testMethod||"post",testChunks:this.props.testChunks||!1,headers:this.setHeaders||{},withCredentials:this.props.withCredentials||!1,chunkSize:1024*parseInt(b.ic)*1024||1048576,simultaneousUploads:this.props.simultaneousUploads||1,fileParameterName:this.props.fileParameterName,generateUniqueIdentifier:this.generateUniqueIdentifier,forceChunkSize:!0,maxChunkRetries:3,minFileSize:0}),this.resumable.assignBrowse(this.uploadInput.current,!0),this.props.dragAndDrop&&this.resumable.assignDrop(document.getElementById("upload-link-drop-zone")),this.bindCallbackHandler(),this.bindEventHandler()}},{key:"render",value:function(){return Object(S.jsxs)(n.Fragment,{children:[Object(S.jsx)("div",{className:"file-uploader-container",children:Object(S.jsx)("div",{className:"file-uploader",children:Object(S.jsx)("input",{className:"upload-input",type:"file",ref:this.uploadInput,onClick:this.onClick})})}),Object(S.jsx)(E,{retryFileList:this.state.retryFileList,uploadFileList:this.state.uploadFileList,forbidUploadFileList:this.state.forbidUploadFileList,totalProgress:this.state.totalProgress,uploadBitrate:this.state.uploadBitrate,allFilesUploaded:this.state.allFilesUploaded,onCloseUploadDialog:this.onCloseUploadDialog,onCancelAllUploading:this.onCancelAllUploading,onUploadCancel:this.onUploadCancel,onUploadRetry:this.onUploadRetry,onFileUpload:this.onFileUpload,onFolderUpload:this.onFolderUpload})]})}}]),t}(s.a.Component)),M=_,T=(t(1915),window.app.pageOptions.username),q=window.uploadLink,R=q.dirName,A=q.sharedBy,B=q.noQuota,H=q.maxUploadFileSize,K=q.token,G=q.repoID,Q=q.path,J=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).onFileUploadSuccess=function(e){var a=e.name;e.size;u.a.shareLinksUploadDone(K,p.a.joinPath(Q,a))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(S.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(S.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(S.jsx)(m.a,{}),T&&Object(S.jsx)(h.a,{})]}),Object(S.jsx)("div",{className:"o-auto",children:Object(S.jsxs)("div",{className:"py-4 px-6 mx-auto rounded",id:"upload-link-panel",children:[Object(S.jsx)("h3",{className:"h5",dangerouslySetInnerHTML:{__html:Object(b.ub)("Upload files to {folder_name_placeholder}").replace("{folder_name_placeholder}",'<span class="op-target">'.concat(p.a.HTMLescape(R),"</span>"))}}),Object(S.jsx)("p",{className:"small shared-by",dangerouslySetInnerHTML:{__html:"".concat(Object(b.ub)("shared by:")," ").concat(A.avatar," ").concat(A.name)}}),B?Object(S.jsxs)("div",{className:"py-6 text-center",children:[Object(S.jsx)("span",{className:"sf3-font sf3-font-tips warning-icon"}),Object(S.jsx)("p",{children:Object(b.ub)("The owner of this library has run out of space.")})]}):Object(S.jsxs)(n.Fragment,{children:[Object(S.jsxs)("ol",{className:"small text-gray",children:[Object(S.jsx)("li",{className:"tip-list-item",children:Object(b.ub)("Folder upload is limited to Chrome, Firefox 50+, and Microsoft Edge.")}),H&&Object(S.jsx)("li",{className:"tip-list-item",children:Object(b.ub)("File size should be smaller than {max_size_placeholder}.").replace("{max_size_placeholder}",p.a.bytesToSize(1e3*H*1e3))})]}),Object(S.jsxs)("div",{id:"upload-link-drop-zone",className:"text-center mt-2 mb-4",children:[Object(S.jsx)("span",{className:"sf3-font sf3-font-upload upload-icon"}),Object(S.jsx)("p",{className:"small text-gray mb-0",children:Object(b.ub)("Drag and drop files or folders here.")})]}),Object(S.jsx)(M,{ref:function(a){return e.uploader=a},dragAndDrop:!0,token:K,repoID:G,path:Q,onFileUploadSuccess:this.onFileUploadSuccess})]})]})})]})}}]),t}(s.a.Component);c.a.render(Object(S.jsx)(J,{}),document.getElementById("wrapper"))}},[[1914,1,0]]]);
//# sourceMappingURL=uploadLink.chunk.js.map
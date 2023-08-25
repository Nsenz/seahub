(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[44],{1961:function(e,t,n){"use strict";function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}n.r(t),n.d(t,"mkPython",(function(){return c})),n.d(t,"python",(function(){return u})),n.d(t,"cython",(function(){return f}));var i=r(["and","or","not","is"]),a=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function s(e){return e.scopes[e.scopes.length-1]}function c(e){for(var t="error",n=e.delimiters||e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,c=[e.singleOperators,e.doubleOperators,e.doubleDelimiters,e.tripleDelimiters,e.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],l=0;l<c.length;l++)c[l]||c.splice(l--,1);var u=e.hangingIndent,f=a,p=o;void 0!=e.extra_keywords&&(f=f.concat(e.extra_keywords)),void 0!=e.extra_builtins&&(p=p.concat(e.extra_builtins));var d=!(e.version&&Number(e.version)<3);if(d){var m=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;f=f.concat(["nonlocal","False","True","None","async","await"]),p=p.concat(["ascii","bytes","exec","print"]);var h=new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else{m=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;f=f.concat(["exec","print"]),p=p.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]);h=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var b=r(f),g=r(p);function y(e,n){var r=e.sol()&&"\\"!=n.lastToken;if(r&&(n.indent=e.indentation()),r&&"py"==s(n).type){var i=s(n).offset;if(e.eatSpace()){var a=e.indentation();return a>i?v(e,n):a<i&&x(e,n)&&"#"!=e.peek()&&(n.errorToken=!0),null}var o=k(e,n);return i>0&&x(e,n)&&(o+=" "+t),o}return k(e,n)}function k(r,a,o){if(r.eatSpace())return null;if(!o&&r.match(/^#.*/))return"comment";if(r.match(/^[0-9\.]/,!1)){var s=!1;if(r.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(s=!0),r.match(/^[\d_]+\.\d*/)&&(s=!0),r.match(/^\.\d+/)&&(s=!0),s)return r.eat(/J/i),"number";var l=!1;if(r.match(/^0x[0-9a-f_]+/i)&&(l=!0),r.match(/^0b[01_]+/i)&&(l=!0),r.match(/^0o[0-7_]+/i)&&(l=!0),r.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(r.eat(/J/i),l=!0),r.match(/^0(?![\dx])/i)&&(l=!0),l)return r.eat(/L/i),"number"}if(r.match(h))return-1!==r.current().toLowerCase().indexOf("f")?(a.tokenize=function(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=1==n.length,a="string";function o(e){return function(t,n){var r=k(t,n,!0);return"punctuation"==r&&("{"==t.current()?n.tokenize=o(e+1):"}"==t.current()&&(n.tokenize=e>1?o(e-1):s)),r}}function s(s,c){for(;!s.eol();)if(s.eatWhile(/[^'"\{\}\\]/),s.eat("\\")){if(s.next(),i&&s.eol())return a}else{if(s.match(n))return c.tokenize=r,a;if(s.match("{{"))return a;if(s.match("{",!1))return c.tokenize=o(0),s.current()?a:c.tokenize(s,c);if(s.match("}}"))return a;if(s.match("}"))return t;s.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;c.tokenize=r}return a}return s.isString=!0,s}(r.current(),a.tokenize),a.tokenize(r,a)):(a.tokenize=function(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=1==n.length,a="string";function o(o,s){for(;!o.eol();)if(o.eatWhile(/[^'"\\]/),o.eat("\\")){if(o.next(),i&&o.eol())return a}else{if(o.match(n))return s.tokenize=r,a;o.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;s.tokenize=r}return a}return o.isString=!0,o}(r.current(),a.tokenize),a.tokenize(r,a));for(var u=0;u<c.length;u++)if(r.match(c[u]))return"operator";return r.match(n)?"punctuation":"."==a.lastToken&&r.match(m)?"property":r.match(b)||r.match(i)?"keyword":r.match(g)?"builtin":r.match(/^(self|cls)\b/)?"self":r.match(m)?"def"==a.lastToken||"class"==a.lastToken?"def":"variable":(r.next(),o?null:t)}function v(e,t){for(;"py"!=s(t).type;)t.scopes.pop();t.scopes.push({offset:s(t).offset+e.indentUnit,type:"py",align:null})}function x(e,t){for(var n=e.indentation();t.scopes.length>1&&s(t).offset>n;){if("py"!=s(t).type)return!0;t.scopes.pop()}return s(t).offset!=n}function _(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),i=e.current();if(n.beginningOfLine&&"@"==i)return e.match(m,!1)?"meta":d?"operator":t;if(/\S/.test(i)&&(n.beginningOfLine=!1),"variable"!=r&&"builtin"!=r||"meta"!=n.lastToken||(r="meta"),"pass"!=i&&"return"!=i||(n.dedent=!0),"lambda"==i&&(n.lambda=!0),":"==i&&!n.lambda&&"py"==s(n).type&&e.match(/^\s*(?:#|$)/,!1)&&v(e,n),1==i.length&&!/string|comment/.test(r)){var a="[({".indexOf(i);if(-1!=a&&function(e,t,n){var r=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+(u||e.indentUnit),type:n,align:r})}(e,n,"])}".slice(a,a+1)),-1!=(a="])}".indexOf(i))){if(s(n).type!=i)return t;n.indent=n.scopes.pop().offset-(u||e.indentUnit)}}return n.dedent&&e.eol()&&"py"==s(n).type&&n.scopes.length>1&&n.scopes.pop(),r}return{name:"python",startState:function(){return{tokenize:y,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var i=_(e,n);return i&&"comment"!=i&&(n.lastToken="keyword"==i||"punctuation"==i?e.current():i),"punctuation"==i&&(i=null),e.eol()&&n.lambda&&(n.lambda=!1),r?t:i},indent:function(e,t,n){if(e.tokenize!=y)return e.tokenize.isString?null:0;var r=s(e),i=r.type==t.charAt(0)||"py"==r.type&&!e.dedent&&/^(else:|elif |except |finally:)/.test(t);return null!=r.align?r.align-(i?1:0):r.offset-(i?u||n.unit:0)},languageData:{autocomplete:a.concat(o).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}var l,u=c({}),f=c({extra_keywords:(l="by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE",l.split(" "))})}}]);
//# sourceMappingURL=44.chunk.js.map
"use strict";var Hn=Object.create;var ie=Object.defineProperty;var zn=Object.getOwnPropertyDescriptor;var Xn=Object.getOwnPropertyNames,Ye=Object.getOwnPropertySymbols,Zn=Object.getPrototypeOf,Ke=Object.prototype.hasOwnProperty,bn=Object.prototype.propertyIsEnumerable;var Ge=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))Ke.call(t,n)&&Ge(e,n,t[n]);if(Ye)for(var n of Ye(t))bn.call(t,n)&&Ge(e,n,t[n]);return e};var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),er=(e,t)=>{for(var n in t)ie(e,n,{get:t[n],enumerable:!0})},Ve=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Xn(t))!Ke.call(e,i)&&i!==n&&ie(e,i,{get:()=>t[i],enumerable:!(r=zn(t,i))||r.enumerable});return e};var tr=(e,t,n)=>(n=e!=null?Hn(Zn(e)):{},Ve(t||!e||!e.__esModule?ie(n,"default",{value:e,enumerable:!0}):n,e)),nr=e=>Ve(ie({},"__esModule",{value:!0}),e);var R=d(xe=>{"use strict";xe.fromCallback=function(e){return Object.defineProperty(function(...t){if(typeof t[t.length-1]=="function")e.apply(this,t);else return new Promise((n,r)=>{e.call(this,...t,(i,o)=>i!=null?r(i):n(o))})},"name",{value:e.name})};xe.fromPromise=function(e){return Object.defineProperty(function(...t){let n=t[t.length-1];if(typeof n!="function")return e.apply(this,t);e.apply(this,t.slice(0,-1)).then(r=>n(null,r),n)},"name",{value:e.name})}});var He=d((po,Qe)=>{var G=require("constants"),rr=process.cwd,me=null,ir=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return me||(me=rr.call(process)),me};try{process.cwd()}catch(e){}typeof process.chdir=="function"&&(Pe=process.chdir,process.chdir=function(e){me=null,Pe.call(process,e)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,Pe));var Pe;Qe.exports=or;function or(e){G.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&t(e),e.lutimes||n(e),e.chown=o(e.chown),e.fchown=o(e.fchown),e.lchown=o(e.lchown),e.chmod=r(e.chmod),e.fchmod=r(e.fchmod),e.lchmod=r(e.lchmod),e.chownSync=u(e.chownSync),e.fchownSync=u(e.fchownSync),e.lchownSync=u(e.lchownSync),e.chmodSync=i(e.chmodSync),e.fchmodSync=i(e.fchmodSync),e.lchmodSync=i(e.lchmodSync),e.stat=s(e.stat),e.fstat=s(e.fstat),e.lstat=s(e.lstat),e.statSync=a(e.statSync),e.fstatSync=a(e.fstatSync),e.lstatSync=a(e.lstatSync),e.chmod&&!e.lchmod&&(e.lchmod=function(c,l,y){y&&process.nextTick(y)},e.lchmodSync=function(){}),e.chown&&!e.lchown&&(e.lchown=function(c,l,y,f){f&&process.nextTick(f)},e.lchownSync=function(){}),ir==="win32"&&(e.rename=typeof e.rename!="function"?e.rename:function(c){function l(y,f,h){var k=Date.now(),v=0;c(y,f,function q(J){if(J&&(J.code==="EACCES"||J.code==="EPERM")&&Date.now()-k<6e4){setTimeout(function(){e.stat(f,function(T,re){T&&T.code==="ENOENT"?c(y,f,q):h(J)})},v),v<100&&(v+=10);return}h&&h(J)})}return Object.setPrototypeOf&&Object.setPrototypeOf(l,c),l}(e.rename)),e.read=typeof e.read!="function"?e.read:function(c){function l(y,f,h,k,v,q){var J;if(q&&typeof q=="function"){var T=0;J=function(re,Be,Ue){if(re&&re.code==="EAGAIN"&&T<10)return T++,c.call(e,y,f,h,k,v,J);q.apply(this,arguments)}}return c.call(e,y,f,h,k,v,J)}return Object.setPrototypeOf&&Object.setPrototypeOf(l,c),l}(e.read),e.readSync=typeof e.readSync!="function"?e.readSync:function(c){return function(l,y,f,h,k){for(var v=0;;)try{return c.call(e,l,y,f,h,k)}catch(q){if(q.code==="EAGAIN"&&v<10){v++;continue}throw q}}}(e.readSync);function t(c){c.lchmod=function(l,y,f){c.open(l,G.O_WRONLY|G.O_SYMLINK,y,function(h,k){if(h){f&&f(h);return}c.fchmod(k,y,function(v){c.close(k,function(q){f&&f(v||q)})})})},c.lchmodSync=function(l,y){var f=c.openSync(l,G.O_WRONLY|G.O_SYMLINK,y),h=!0,k;try{k=c.fchmodSync(f,y),h=!1}finally{if(h)try{c.closeSync(f)}catch(v){}else c.closeSync(f)}return k}}function n(c){G.hasOwnProperty("O_SYMLINK")&&c.futimes?(c.lutimes=function(l,y,f,h){c.open(l,G.O_SYMLINK,function(k,v){if(k){h&&h(k);return}c.futimes(v,y,f,function(q){c.close(v,function(J){h&&h(q||J)})})})},c.lutimesSync=function(l,y,f){var h=c.openSync(l,G.O_SYMLINK),k,v=!0;try{k=c.futimesSync(h,y,f),v=!1}finally{if(v)try{c.closeSync(h)}catch(q){}else c.closeSync(h)}return k}):c.futimes&&(c.lutimes=function(l,y,f,h){h&&process.nextTick(h)},c.lutimesSync=function(){})}function r(c){return c&&function(l,y,f){return c.call(e,l,y,function(h){p(h)&&(h=null),f&&f.apply(this,arguments)})}}function i(c){return c&&function(l,y){try{return c.call(e,l,y)}catch(f){if(!p(f))throw f}}}function o(c){return c&&function(l,y,f,h){return c.call(e,l,y,f,function(k){p(k)&&(k=null),h&&h.apply(this,arguments)})}}function u(c){return c&&function(l,y,f){try{return c.call(e,l,y,f)}catch(h){if(!p(h))throw h}}}function s(c){return c&&function(l,y,f){typeof y=="function"&&(f=y,y=null);function h(k,v){v&&(v.uid<0&&(v.uid+=4294967296),v.gid<0&&(v.gid+=4294967296)),f&&f.apply(this,arguments)}return y?c.call(e,l,y,h):c.call(e,l,h)}}function a(c){return c&&function(l,y){var f=y?c.call(e,l,y):c.call(e,l);return f&&(f.uid<0&&(f.uid+=4294967296),f.gid<0&&(f.gid+=4294967296)),f}}function p(c){if(!c||c.code==="ENOSYS")return!0;var l=!process.getuid||process.getuid()!==0;return!!(l&&(c.code==="EINVAL"||c.code==="EPERM"))}}});var Ze=d((So,Xe)=>{var ze=require("stream").Stream;Xe.exports=ur;function ur(e){return{ReadStream:t,WriteStream:n};function t(r,i){if(!(this instanceof t))return new t(r,i);ze.call(this);var o=this;this.path=r,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=64*1024,i=i||{};for(var u=Object.keys(i),s=0,a=u.length;s<a;s++){var p=u[s];this[p]=i[p]}if(this.encoding&&this.setEncoding(this.encoding),this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.end===void 0)this.end=1/0;else if(typeof this.end!="number")throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(this.fd!==null){process.nextTick(function(){o._read()});return}e.open(this.path,this.flags,this.mode,function(c,l){if(c){o.emit("error",c),o.readable=!1;return}o.fd=l,o.emit("open",l),o._read()})}function n(r,i){if(!(this instanceof n))return new n(r,i);ze.call(this),this.path=r,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,i=i||{};for(var o=Object.keys(i),u=0,s=o.length;u<s;u++){var a=o[u];this[a]=i[a]}if(this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],this.fd===null&&(this._open=e.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}});var et=d((wo,be)=>{"use strict";be.exports=sr;var cr=Object.getPrototypeOf||function(e){return e.__proto__};function sr(e){if(e===null||typeof e!="object")return e;if(e instanceof Object)var t={__proto__:cr(e)};else var t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}),t}});var A=d((vo,Ne)=>{var x=require("fs"),ar=He(),fr=Ze(),lr=et(),he=require("util"),L,pe;typeof Symbol=="function"&&typeof Symbol.for=="function"?(L=Symbol.for("graceful-fs.queue"),pe=Symbol.for("graceful-fs.previous")):(L="___graceful-fs.queue",pe="___graceful-fs.previous");function yr(){}function rt(e,t){Object.defineProperty(e,L,{get:function(){return t}})}var z=yr;he.debuglog?z=he.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(z=function(){var e=he.format.apply(he,arguments);e="GFS4: "+e.split(/\n/).join(`
GFS4: `),console.error(e)});x[L]||(tt=global[L]||[],rt(x,tt),x.close=function(e){function t(n,r){return e.call(x,n,function(i){i||nt(),typeof r=="function"&&r.apply(this,arguments)})}return Object.defineProperty(t,pe,{value:e}),t}(x.close),x.closeSync=function(e){function t(n){e.apply(x,arguments),nt()}return Object.defineProperty(t,pe,{value:e}),t}(x.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){z(x[L]),require("assert").equal(x[L].length,0)}));var tt;global[L]||rt(global,x[L]);Ne.exports=Oe(lr(x));process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!x.__patched&&(Ne.exports=Oe(x),x.__patched=!0);function Oe(e){ar(e),e.gracefulify=Oe,e.createReadStream=Be,e.createWriteStream=Ue;var t=e.readFile;e.readFile=n;function n(m,w,S){return typeof w=="function"&&(S=w,w=null),N(m,w,S);function N(C,O,g,P){return t(C,O,function(E){E&&(E.code==="EMFILE"||E.code==="ENFILE")?b([N,[C,O,g],E,P||Date.now(),Date.now()]):typeof g=="function"&&g.apply(this,arguments)})}}var r=e.writeFile;e.writeFile=i;function i(m,w,S,N){return typeof S=="function"&&(N=S,S=null),C(m,w,S,N);function C(O,g,P,E,_){return r(O,g,P,function(F){F&&(F.code==="EMFILE"||F.code==="ENFILE")?b([C,[O,g,P,E],F,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var o=e.appendFile;o&&(e.appendFile=u);function u(m,w,S,N){return typeof S=="function"&&(N=S,S=null),C(m,w,S,N);function C(O,g,P,E,_){return o(O,g,P,function(F){F&&(F.code==="EMFILE"||F.code==="ENFILE")?b([C,[O,g,P,E],F,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var s=e.copyFile;s&&(e.copyFile=a);function a(m,w,S,N){return typeof S=="function"&&(N=S,S=0),C(m,w,S,N);function C(O,g,P,E,_){return s(O,g,P,function(F){F&&(F.code==="EMFILE"||F.code==="ENFILE")?b([C,[O,g,P,E],F,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var p=e.readdir;e.readdir=l;var c=/^v[0-5]\./;function l(m,w,S){typeof w=="function"&&(S=w,w=null);var N=c.test(process.version)?function(g,P,E,_){return p(g,C(g,P,E,_))}:function(g,P,E,_){return p(g,P,C(g,P,E,_))};return N(m,w,S);function C(O,g,P,E){return function(_,F){_&&(_.code==="EMFILE"||_.code==="ENFILE")?b([N,[O,g,P],_,E||Date.now(),Date.now()]):(F&&F.sort&&F.sort(),typeof P=="function"&&P.call(this,_,F))}}}if(process.version.substr(0,4)==="v0.8"){var y=fr(e);q=y.ReadStream,T=y.WriteStream}var f=e.ReadStream;f&&(q.prototype=Object.create(f.prototype),q.prototype.open=J);var h=e.WriteStream;h&&(T.prototype=Object.create(h.prototype),T.prototype.open=re),Object.defineProperty(e,"ReadStream",{get:function(){return q},set:function(m){q=m},enumerable:!0,configurable:!0}),Object.defineProperty(e,"WriteStream",{get:function(){return T},set:function(m){T=m},enumerable:!0,configurable:!0});var k=q;Object.defineProperty(e,"FileReadStream",{get:function(){return k},set:function(m){k=m},enumerable:!0,configurable:!0});var v=T;Object.defineProperty(e,"FileWriteStream",{get:function(){return v},set:function(m){v=m},enumerable:!0,configurable:!0});function q(m,w){return this instanceof q?(f.apply(this,arguments),this):q.apply(Object.create(q.prototype),arguments)}function J(){var m=this;ge(m.path,m.flags,m.mode,function(w,S){w?(m.autoClose&&m.destroy(),m.emit("error",w)):(m.fd=S,m.emit("open",S),m.read())})}function T(m,w){return this instanceof T?(h.apply(this,arguments),this):T.apply(Object.create(T.prototype),arguments)}function re(){var m=this;ge(m.path,m.flags,m.mode,function(w,S){w?(m.destroy(),m.emit("error",w)):(m.fd=S,m.emit("open",S))})}function Be(m,w){return new e.ReadStream(m,w)}function Ue(m,w){return new e.WriteStream(m,w)}var Qn=e.open;e.open=ge;function ge(m,w,S,N){return typeof S=="function"&&(N=S,S=null),C(m,w,S,N);function C(O,g,P,E,_){return Qn(O,g,P,function(F,yo){F&&(F.code==="EMFILE"||F.code==="ENFILE")?b([C,[O,g,P,E],F,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}return e}function b(e){z("ENQUEUE",e[0].name,e[1]),x[L].push(e),De()}var de;function nt(){for(var e=Date.now(),t=0;t<x[L].length;++t)x[L][t].length>2&&(x[L][t][3]=e,x[L][t][4]=e);De()}function De(){if(clearTimeout(de),de=void 0,x[L].length!==0){var e=x[L].shift(),t=e[0],n=e[1],r=e[2],i=e[3],o=e[4];if(i===void 0)z("RETRY",t.name,n),t.apply(null,n);else if(Date.now()-i>=6e4){z("TIMEOUT",t.name,n);var u=n.pop();typeof u=="function"&&u.call(null,r)}else{var s=Date.now()-o,a=Math.max(o-i,1),p=Math.min(a*1.2,100);s>=p?(z("RETRY",t.name,n),t.apply(null,n.concat([i]))):x[L].push(e)}de===void 0&&(de=setTimeout(De,0))}}});var X=d(Y=>{"use strict";var it=R().fromCallback,$=A(),mr=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter(e=>typeof $[e]=="function");Object.assign(Y,$);mr.forEach(e=>{Y[e]=it($[e])});Y.exists=function(e,t){return typeof t=="function"?$.exists(e,t):new Promise(n=>$.exists(e,n))};Y.read=function(e,t,n,r,i,o){return typeof o=="function"?$.read(e,t,n,r,i,o):new Promise((u,s)=>{$.read(e,t,n,r,i,(a,p,c)=>{if(a)return s(a);u({bytesRead:p,buffer:c})})})};Y.write=function(e,t,...n){return typeof n[n.length-1]=="function"?$.write(e,t,...n):new Promise((r,i)=>{$.write(e,t,...n,(o,u,s)=>{if(o)return i(o);r({bytesWritten:u,buffer:s})})})};Y.readv=function(e,t,...n){return typeof n[n.length-1]=="function"?$.readv(e,t,...n):new Promise((r,i)=>{$.readv(e,t,...n,(o,u,s)=>{if(o)return i(o);r({bytesRead:u,buffers:s})})})};Y.writev=function(e,t,...n){return typeof n[n.length-1]=="function"?$.writev(e,t,...n):new Promise((r,i)=>{$.writev(e,t,...n,(o,u,s)=>{if(o)return i(o);r({bytesWritten:u,buffers:s})})})};typeof $.realpath.native=="function"?Y.realpath.native=it($.realpath.native):process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?","Warning","fs-extra-WARN0003")});var ut=d((ko,ot)=>{"use strict";var hr=require("path");ot.exports.checkPath=function(t){if(process.platform==="win32"&&/[<>:"|?*]/.test(t.replace(hr.parse(t).root,""))){let r=new Error(`Path contains invalid characters: ${t}`);throw r.code="EINVAL",r}}});var ft=d((Fo,Ce)=>{"use strict";var ct=X(),{checkPath:st}=ut(),at=e=>{let t={mode:511};return typeof e=="number"?e:W(W({},t),e).mode};Ce.exports.makeDir=async(e,t)=>(st(e),ct.mkdir(e,{mode:at(t),recursive:!0}));Ce.exports.makeDirSync=(e,t)=>(st(e),ct.mkdirSync(e,{mode:at(t),recursive:!0}))});var B=d((go,lt)=>{"use strict";var dr=R().fromPromise,{makeDir:pr,makeDirSync:_e}=ft(),Le=dr(pr);lt.exports={mkdirs:Le,mkdirsSync:_e,mkdirp:Le,mkdirpSync:_e,ensureDir:Le,ensureDirSync:_e}});var K=d((xo,mt)=>{"use strict";var Sr=R().fromPromise,yt=X();function wr(e){return yt.access(e).then(()=>!0).catch(()=>!1)}mt.exports={pathExists:Sr(wr),pathExistsSync:yt.existsSync}});var Te=d((Po,ht)=>{"use strict";var ee=A();function vr(e,t,n,r){ee.open(e,"r+",(i,o)=>{if(i)return r(i);ee.futimes(o,t,n,u=>{ee.close(o,s=>{r&&r(u||s)})})})}function Er(e,t,n){let r=ee.openSync(e,"r+");return ee.futimesSync(r,t,n),ee.closeSync(r)}ht.exports={utimesMillis:vr,utimesMillisSync:Er}});var Z=d((Oo,St)=>{"use strict";var te=X(),D=require("path"),kr=require("util");function Fr(e,t,n){let r=n.dereference?i=>te.stat(i,{bigint:!0}):i=>te.lstat(i,{bigint:!0});return Promise.all([r(e),r(t).catch(i=>{if(i.code==="ENOENT")return null;throw i})]).then(([i,o])=>({srcStat:i,destStat:o}))}function qr(e,t,n){let r,i=n.dereference?u=>te.statSync(u,{bigint:!0}):u=>te.lstatSync(u,{bigint:!0}),o=i(e);try{r=i(t)}catch(u){if(u.code==="ENOENT")return{srcStat:o,destStat:null};throw u}return{srcStat:o,destStat:r}}function gr(e,t,n,r,i){kr.callbackify(Fr)(e,t,r,(o,u)=>{if(o)return i(o);let{srcStat:s,destStat:a}=u;if(a){if(oe(s,a)){let p=D.basename(e),c=D.basename(t);return n==="move"&&p!==c&&p.toLowerCase()===c.toLowerCase()?i(null,{srcStat:s,destStat:a,isChangingCase:!0}):i(new Error("Source and destination must not be the same."))}if(s.isDirectory()&&!a.isDirectory())return i(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));if(!s.isDirectory()&&a.isDirectory())return i(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`))}return s.isDirectory()&&$e(e,t)?i(new Error(Se(e,t,n))):i(null,{srcStat:s,destStat:a})})}function xr(e,t,n,r){let{srcStat:i,destStat:o}=qr(e,t,r);if(o){if(oe(i,o)){let u=D.basename(e),s=D.basename(t);if(n==="move"&&u!==s&&u.toLowerCase()===s.toLowerCase())return{srcStat:i,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(i.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!i.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(i.isDirectory()&&$e(e,t))throw new Error(Se(e,t,n));return{srcStat:i,destStat:o}}function dt(e,t,n,r,i){let o=D.resolve(D.dirname(e)),u=D.resolve(D.dirname(n));if(u===o||u===D.parse(u).root)return i();te.stat(u,{bigint:!0},(s,a)=>s?s.code==="ENOENT"?i():i(s):oe(t,a)?i(new Error(Se(e,n,r))):dt(e,t,u,r,i))}function pt(e,t,n,r){let i=D.resolve(D.dirname(e)),o=D.resolve(D.dirname(n));if(o===i||o===D.parse(o).root)return;let u;try{u=te.statSync(o,{bigint:!0})}catch(s){if(s.code==="ENOENT")return;throw s}if(oe(t,u))throw new Error(Se(e,n,r));return pt(e,t,o,r)}function oe(e,t){return t.ino&&t.dev&&t.ino===e.ino&&t.dev===e.dev}function $e(e,t){let n=D.resolve(e).split(D.sep).filter(i=>i),r=D.resolve(t).split(D.sep).filter(i=>i);return n.reduce((i,o,u)=>i&&r[u]===o,!0)}function Se(e,t,n){return`Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`}St.exports={checkPaths:gr,checkPathsSync:xr,checkParentPaths:dt,checkParentPathsSync:pt,isSrcSubdir:$e,areIdentical:oe}});var qt=d((Do,Ft)=>{"use strict";var M=A(),ue=require("path"),Pr=B().mkdirs,Or=K().pathExists,Dr=Te().utimesMillis,ce=Z();function Nr(e,t,n,r){typeof n=="function"&&!r?(r=n,n={}):typeof n=="function"&&(n={filter:n}),r=r||function(){},n=n||{},n.clobber="clobber"in n?!!n.clobber:!0,n.overwrite="overwrite"in n?!!n.overwrite:n.clobber,n.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0001"),ce.checkPaths(e,t,"copy",n,(i,o)=>{if(i)return r(i);let{srcStat:u,destStat:s}=o;ce.checkParentPaths(e,u,t,"copy",a=>{if(a)return r(a);vt(e,t,n,(p,c)=>{if(p)return r(p);if(!c)return r();Cr(s,e,t,n,r)})})})}function Cr(e,t,n,r,i){let o=ue.dirname(n);Or(o,(u,s)=>{if(u)return i(u);if(s)return Ie(e,t,n,r,i);Pr(o,a=>a?i(a):Ie(e,t,n,r,i))})}function vt(e,t,n,r){if(!n.filter)return r(null,!0);Promise.resolve(n.filter(e,t)).then(i=>r(null,i),i=>r(i))}function Ie(e,t,n,r,i){(r.dereference?M.stat:M.lstat)(t,(u,s)=>u?i(u):s.isDirectory()?Wr(s,e,t,n,r,i):s.isFile()||s.isCharacterDevice()||s.isBlockDevice()?_r(s,e,t,n,r,i):s.isSymbolicLink()?Mr(e,t,n,r,i):s.isSocket()?i(new Error(`Cannot copy a socket file: ${t}`)):s.isFIFO()?i(new Error(`Cannot copy a FIFO pipe: ${t}`)):i(new Error(`Unknown file: ${t}`)))}function _r(e,t,n,r,i,o){return t?Lr(e,n,r,i,o):Et(e,n,r,i,o)}function Lr(e,t,n,r,i){if(r.overwrite)M.unlink(n,o=>o?i(o):Et(e,t,n,r,i));else return r.errorOnExist?i(new Error(`'${n}' already exists`)):i()}function Et(e,t,n,r,i){M.copyFile(t,n,o=>o?i(o):r.preserveTimestamps?Tr(e.mode,t,n,i):we(n,e.mode,i))}function Tr(e,t,n,r){return $r(e)?Ir(n,e,i=>i?r(i):wt(e,t,n,r)):wt(e,t,n,r)}function $r(e){return(e&128)===0}function Ir(e,t,n){return we(e,t|128,n)}function wt(e,t,n,r){jr(t,n,i=>i?r(i):we(n,e,r))}function we(e,t,n){return M.chmod(e,t,n)}function jr(e,t,n){M.stat(e,(r,i)=>r?n(r):Dr(t,i.atime,i.mtime,n))}function Wr(e,t,n,r,i,o){return t?kt(n,r,i,o):Rr(e.mode,n,r,i,o)}function Rr(e,t,n,r,i){M.mkdir(n,o=>{if(o)return i(o);kt(t,n,r,u=>u?i(u):we(n,e,i))})}function kt(e,t,n,r){M.readdir(e,(i,o)=>i?r(i):je(o,e,t,n,r))}function je(e,t,n,r,i){let o=e.pop();return o?Ar(e,o,t,n,r,i):i()}function Ar(e,t,n,r,i,o){let u=ue.join(n,t),s=ue.join(r,t);vt(u,s,i,(a,p)=>{if(a)return o(a);if(!p)return je(e,n,r,i,o);ce.checkPaths(u,s,"copy",i,(c,l)=>{if(c)return o(c);let{destStat:y}=l;Ie(y,u,s,i,f=>f?o(f):je(e,n,r,i,o))})})}function Mr(e,t,n,r,i){M.readlink(t,(o,u)=>{if(o)return i(o);if(r.dereference&&(u=ue.resolve(process.cwd(),u)),e)M.readlink(n,(s,a)=>s?s.code==="EINVAL"||s.code==="UNKNOWN"?M.symlink(u,n,i):i(s):(r.dereference&&(a=ue.resolve(process.cwd(),a)),ce.isSrcSubdir(u,a)?i(new Error(`Cannot copy '${u}' to a subdirectory of itself, '${a}'.`)):ce.isSrcSubdir(a,u)?i(new Error(`Cannot overwrite '${a}' with '${u}'.`)):Jr(u,n,i)));else return M.symlink(u,n,i)})}function Jr(e,t,n){M.unlink(t,r=>r?n(r):M.symlink(e,t,n))}Ft.exports=Nr});var Dt=d((No,Ot)=>{"use strict";var I=A(),se=require("path"),Br=B().mkdirsSync,Ur=Te().utimesMillisSync,ae=Z();function Yr(e,t,n){typeof n=="function"&&(n={filter:n}),n=n||{},n.clobber="clobber"in n?!!n.clobber:!0,n.overwrite="overwrite"in n?!!n.overwrite:n.clobber,n.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0002");let{srcStat:r,destStat:i}=ae.checkPathsSync(e,t,"copy",n);if(ae.checkParentPathsSync(e,r,t,"copy"),n.filter&&!n.filter(e,t))return;let o=se.dirname(t);return I.existsSync(o)||Br(o),gt(i,e,t,n)}function gt(e,t,n,r){let o=(r.dereference?I.statSync:I.lstatSync)(t);if(o.isDirectory())return Xr(o,e,t,n,r);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return Gr(o,e,t,n,r);if(o.isSymbolicLink())return ei(e,t,n,r);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}function Gr(e,t,n,r,i){return t?Kr(e,n,r,i):xt(e,n,r,i)}function Kr(e,t,n,r){if(r.overwrite)return I.unlinkSync(n),xt(e,t,n,r);if(r.errorOnExist)throw new Error(`'${n}' already exists`)}function xt(e,t,n,r){return I.copyFileSync(t,n),r.preserveTimestamps&&Vr(e.mode,t,n),We(n,e.mode)}function Vr(e,t,n){return Qr(e)&&Hr(n,e),zr(t,n)}function Qr(e){return(e&128)===0}function Hr(e,t){return We(e,t|128)}function We(e,t){return I.chmodSync(e,t)}function zr(e,t){let n=I.statSync(e);return Ur(t,n.atime,n.mtime)}function Xr(e,t,n,r,i){return t?Pt(n,r,i):Zr(e.mode,n,r,i)}function Zr(e,t,n,r){return I.mkdirSync(n),Pt(t,n,r),We(n,e)}function Pt(e,t,n){I.readdirSync(e).forEach(r=>br(r,e,t,n))}function br(e,t,n,r){let i=se.join(t,e),o=se.join(n,e);if(r.filter&&!r.filter(i,o))return;let{destStat:u}=ae.checkPathsSync(i,o,"copy",r);return gt(u,i,o,r)}function ei(e,t,n,r){let i=I.readlinkSync(t);if(r.dereference&&(i=se.resolve(process.cwd(),i)),e){let o;try{o=I.readlinkSync(n)}catch(u){if(u.code==="EINVAL"||u.code==="UNKNOWN")return I.symlinkSync(i,n);throw u}if(r.dereference&&(o=se.resolve(process.cwd(),o)),ae.isSrcSubdir(i,o))throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);if(ae.isSrcSubdir(o,i))throw new Error(`Cannot overwrite '${o}' with '${i}'.`);return ti(i,n)}else return I.symlinkSync(i,n)}function ti(e,t){return I.unlinkSync(t),I.symlinkSync(e,t)}Ot.exports=Yr});var ve=d((Co,Nt)=>{"use strict";var ni=R().fromCallback;Nt.exports={copy:ni(qt()),copySync:Dt()}});var fe=d((_o,_t)=>{"use strict";var Ct=A(),ri=R().fromCallback;function ii(e,t){Ct.rm(e,{recursive:!0,force:!0},t)}function oi(e){Ct.rmSync(e,{recursive:!0,force:!0})}_t.exports={remove:ri(ii),removeSync:oi}});var At=d((Lo,Rt)=>{"use strict";var ui=R().fromPromise,$t=X(),It=require("path"),jt=B(),Wt=fe(),Lt=ui(async function(t){let n;try{n=await $t.readdir(t)}catch(r){return jt.mkdirs(t)}return Promise.all(n.map(r=>Wt.remove(It.join(t,r))))});function Tt(e){let t;try{t=$t.readdirSync(e)}catch(n){return jt.mkdirsSync(e)}t.forEach(n=>{n=It.join(e,n),Wt.removeSync(n)})}Rt.exports={emptyDirSync:Tt,emptydirSync:Tt,emptyDir:Lt,emptydir:Lt}});var Ut=d((To,Bt)=>{"use strict";var ci=R().fromCallback,Mt=require("path"),V=A(),Jt=B();function si(e,t){function n(){V.writeFile(e,"",r=>{if(r)return t(r);t()})}V.stat(e,(r,i)=>{if(!r&&i.isFile())return t();let o=Mt.dirname(e);V.stat(o,(u,s)=>{if(u)return u.code==="ENOENT"?Jt.mkdirs(o,a=>{if(a)return t(a);n()}):t(u);s.isDirectory()?n():V.readdir(o,a=>{if(a)return t(a)})})})}function ai(e){let t;try{t=V.statSync(e)}catch(r){}if(t&&t.isFile())return;let n=Mt.dirname(e);try{V.statSync(n).isDirectory()||V.readdirSync(n)}catch(r){if(r&&r.code==="ENOENT")Jt.mkdirsSync(n);else throw r}V.writeFileSync(e,"")}Bt.exports={createFile:ci(si),createFileSync:ai}});var Qt=d(($o,Vt)=>{"use strict";var fi=R().fromCallback,Yt=require("path"),Q=A(),Gt=B(),li=K().pathExists,{areIdentical:Kt}=Z();function yi(e,t,n){function r(i,o){Q.link(i,o,u=>{if(u)return n(u);n(null)})}Q.lstat(t,(i,o)=>{Q.lstat(e,(u,s)=>{if(u)return u.message=u.message.replace("lstat","ensureLink"),n(u);if(o&&Kt(s,o))return n(null);let a=Yt.dirname(t);li(a,(p,c)=>{if(p)return n(p);if(c)return r(e,t);Gt.mkdirs(a,l=>{if(l)return n(l);r(e,t)})})})})}function mi(e,t){let n;try{n=Q.lstatSync(t)}catch(o){}try{let o=Q.lstatSync(e);if(n&&Kt(o,n))return}catch(o){throw o.message=o.message.replace("lstat","ensureLink"),o}let r=Yt.dirname(t);return Q.existsSync(r)||Gt.mkdirsSync(r),Q.linkSync(e,t)}Vt.exports={createLink:fi(yi),createLinkSync:mi}});var zt=d((Io,Ht)=>{"use strict";var H=require("path"),le=A(),hi=K().pathExists;function di(e,t,n){if(H.isAbsolute(e))return le.lstat(e,r=>r?(r.message=r.message.replace("lstat","ensureSymlink"),n(r)):n(null,{toCwd:e,toDst:e}));{let r=H.dirname(t),i=H.join(r,e);return hi(i,(o,u)=>o?n(o):u?n(null,{toCwd:i,toDst:e}):le.lstat(e,s=>s?(s.message=s.message.replace("lstat","ensureSymlink"),n(s)):n(null,{toCwd:e,toDst:H.relative(r,e)})))}}function pi(e,t){let n;if(H.isAbsolute(e)){if(n=le.existsSync(e),!n)throw new Error("absolute srcpath does not exist");return{toCwd:e,toDst:e}}else{let r=H.dirname(t),i=H.join(r,e);if(n=le.existsSync(i),n)return{toCwd:i,toDst:e};if(n=le.existsSync(e),!n)throw new Error("relative srcpath does not exist");return{toCwd:e,toDst:H.relative(r,e)}}}Ht.exports={symlinkPaths:di,symlinkPathsSync:pi}});var bt=d((jo,Zt)=>{"use strict";var Xt=A();function Si(e,t,n){if(n=typeof t=="function"?t:n,t=typeof t=="function"?!1:t,t)return n(null,t);Xt.lstat(e,(r,i)=>{if(r)return n(null,"file");t=i&&i.isDirectory()?"dir":"file",n(null,t)})}function wi(e,t){let n;if(t)return t;try{n=Xt.lstatSync(e)}catch(r){return"file"}return n&&n.isDirectory()?"dir":"file"}Zt.exports={symlinkType:Si,symlinkTypeSync:wi}});var sn=d((Wo,cn)=>{"use strict";var vi=R().fromCallback,tn=require("path"),U=X(),nn=B(),Ei=nn.mkdirs,ki=nn.mkdirsSync,rn=zt(),Fi=rn.symlinkPaths,qi=rn.symlinkPathsSync,on=bt(),gi=on.symlinkType,xi=on.symlinkTypeSync,Pi=K().pathExists,{areIdentical:un}=Z();function Oi(e,t,n,r){r=typeof n=="function"?n:r,n=typeof n=="function"?!1:n,U.lstat(t,(i,o)=>{!i&&o.isSymbolicLink()?Promise.all([U.stat(e),U.stat(t)]).then(([u,s])=>{if(un(u,s))return r(null);en(e,t,n,r)}):en(e,t,n,r)})}function en(e,t,n,r){Fi(e,t,(i,o)=>{if(i)return r(i);e=o.toDst,gi(o.toCwd,n,(u,s)=>{if(u)return r(u);let a=tn.dirname(t);Pi(a,(p,c)=>{if(p)return r(p);if(c)return U.symlink(e,t,s,r);Ei(a,l=>{if(l)return r(l);U.symlink(e,t,s,r)})})})})}function Di(e,t,n){let r;try{r=U.lstatSync(t)}catch(s){}if(r&&r.isSymbolicLink()){let s=U.statSync(e),a=U.statSync(t);if(un(s,a))return}let i=qi(e,t);e=i.toDst,n=xi(i.toCwd,n);let o=tn.dirname(t);return U.existsSync(o)||ki(o),U.symlinkSync(e,t,n)}cn.exports={createSymlink:vi(Oi),createSymlinkSync:Di}});var pn=d((Ro,dn)=>{"use strict";var{createFile:an,createFileSync:fn}=Ut(),{createLink:ln,createLinkSync:yn}=Qt(),{createSymlink:mn,createSymlinkSync:hn}=sn();dn.exports={createFile:an,createFileSync:fn,ensureFile:an,ensureFileSync:fn,createLink:ln,createLinkSync:yn,ensureLink:ln,ensureLinkSync:yn,createSymlink:mn,createSymlinkSync:hn,ensureSymlink:mn,ensureSymlinkSync:hn}});var Ee=d((Ao,Sn)=>{function Ni(e,{EOL:t=`
`,finalEOL:n=!0,replacer:r=null,spaces:i}={}){let o=n?t:"";return JSON.stringify(e,r,i).replace(/\n/g,t)+o}function Ci(e){return Buffer.isBuffer(e)&&(e=e.toString("utf8")),e.replace(/^\uFEFF/,"")}Sn.exports={stringify:Ni,stripBom:Ci}});var kn=d((Mo,En)=>{var ne;try{ne=A()}catch(e){ne=require("fs")}var ke=R(),{stringify:wn,stripBom:vn}=Ee();async function _i(e,t={}){typeof t=="string"&&(t={encoding:t});let n=t.fs||ne,r="throws"in t?t.throws:!0,i=await ke.fromCallback(n.readFile)(e,t);i=vn(i);let o;try{o=JSON.parse(i,t?t.reviver:null)}catch(u){if(r)throw u.message=`${e}: ${u.message}`,u;return null}return o}var Li=ke.fromPromise(_i);function Ti(e,t={}){typeof t=="string"&&(t={encoding:t});let n=t.fs||ne,r="throws"in t?t.throws:!0;try{let i=n.readFileSync(e,t);return i=vn(i),JSON.parse(i,t.reviver)}catch(i){if(r)throw i.message=`${e}: ${i.message}`,i;return null}}async function $i(e,t,n={}){let r=n.fs||ne,i=wn(t,n);await ke.fromCallback(r.writeFile)(e,i,n)}var Ii=ke.fromPromise($i);function ji(e,t,n={}){let r=n.fs||ne,i=wn(t,n);return r.writeFileSync(e,i,n)}var Wi={readFile:Li,readFileSync:Ti,writeFile:Ii,writeFileSync:ji};En.exports=Wi});var qn=d((Jo,Fn)=>{"use strict";var Fe=kn();Fn.exports={readJson:Fe.readFile,readJsonSync:Fe.readFileSync,writeJson:Fe.writeFile,writeJsonSync:Fe.writeFileSync}});var qe=d((Bo,Pn)=>{"use strict";var Ri=R().fromCallback,ye=A(),gn=require("path"),xn=B(),Ai=K().pathExists;function Mi(e,t,n,r){typeof n=="function"&&(r=n,n="utf8");let i=gn.dirname(e);Ai(i,(o,u)=>{if(o)return r(o);if(u)return ye.writeFile(e,t,n,r);xn.mkdirs(i,s=>{if(s)return r(s);ye.writeFile(e,t,n,r)})})}function Ji(e,...t){let n=gn.dirname(e);if(ye.existsSync(n))return ye.writeFileSync(e,...t);xn.mkdirsSync(n),ye.writeFileSync(e,...t)}Pn.exports={outputFile:Ri(Mi),outputFileSync:Ji}});var Dn=d((Uo,On)=>{"use strict";var{stringify:Bi}=Ee(),{outputFile:Ui}=qe();async function Yi(e,t,n={}){let r=Bi(t,n);await Ui(e,r,n)}On.exports=Yi});var Cn=d((Yo,Nn)=>{"use strict";var{stringify:Gi}=Ee(),{outputFileSync:Ki}=qe();function Vi(e,t,n){let r=Gi(t,n);Ki(e,r,n)}Nn.exports=Vi});var Ln=d((Go,_n)=>{"use strict";var Qi=R().fromPromise,j=qn();j.outputJson=Qi(Dn());j.outputJsonSync=Cn();j.outputJSON=j.outputJson;j.outputJSONSync=j.outputJsonSync;j.writeJSON=j.writeJson;j.writeJSONSync=j.writeJsonSync;j.readJSON=j.readJson;j.readJSONSync=j.readJsonSync;_n.exports=j});var Wn=d((Ko,jn)=>{"use strict";var Hi=A(),Ae=require("path"),zi=ve().copy,In=fe().remove,Xi=B().mkdirp,Zi=K().pathExists,Tn=Z();function bi(e,t,n,r){typeof n=="function"&&(r=n,n={}),n=n||{};let i=n.overwrite||n.clobber||!1;Tn.checkPaths(e,t,"move",n,(o,u)=>{if(o)return r(o);let{srcStat:s,isChangingCase:a=!1}=u;Tn.checkParentPaths(e,s,t,"move",p=>{if(p)return r(p);if(eo(t))return $n(e,t,i,a,r);Xi(Ae.dirname(t),c=>c?r(c):$n(e,t,i,a,r))})})}function eo(e){let t=Ae.dirname(e);return Ae.parse(t).root===t}function $n(e,t,n,r,i){if(r)return Re(e,t,n,i);if(n)return In(t,o=>o?i(o):Re(e,t,n,i));Zi(t,(o,u)=>o?i(o):u?i(new Error("dest already exists.")):Re(e,t,n,i))}function Re(e,t,n,r){Hi.rename(e,t,i=>i?i.code!=="EXDEV"?r(i):to(e,t,n,r):r())}function to(e,t,n,r){zi(e,t,{overwrite:n,errorOnExist:!0},o=>o?r(o):In(e,r))}jn.exports=bi});var Bn=d((Vo,Jn)=>{"use strict";var An=A(),Je=require("path"),no=ve().copySync,Mn=fe().removeSync,ro=B().mkdirpSync,Rn=Z();function io(e,t,n){n=n||{};let r=n.overwrite||n.clobber||!1,{srcStat:i,isChangingCase:o=!1}=Rn.checkPathsSync(e,t,"move",n);return Rn.checkParentPathsSync(e,i,t,"move"),oo(t)||ro(Je.dirname(t)),uo(e,t,r,o)}function oo(e){let t=Je.dirname(e);return Je.parse(t).root===t}function uo(e,t,n,r){if(r)return Me(e,t,n);if(n)return Mn(t),Me(e,t,n);if(An.existsSync(t))throw new Error("dest already exists.");return Me(e,t,n)}function Me(e,t,n){try{An.renameSync(e,t)}catch(r){if(r.code!=="EXDEV")throw r;return co(e,t,n)}}function co(e,t,n){return no(e,t,{overwrite:n,errorOnExist:!0}),Mn(e)}Jn.exports=io});var Yn=d((Qo,Un)=>{"use strict";var so=R().fromCallback;Un.exports={move:so(Wn()),moveSync:Bn()}});var Kn=d((Ho,Gn)=>{"use strict";Gn.exports=W(W(W(W(W(W(W(W(W(W({},X()),ve()),At()),pn()),Ln()),B()),Yn()),qe()),K()),fe())});var lo={};er(lo,{strve:()=>fo});module.exports=nr(lo);var Vn=tr(Kn()),{readFileSync:ao}=Vn.default;function fo(){return{name:"vite-plugin-strve",enforce:"pre",transform(e,t){if(t.endsWith(".strve")){let n=ao(t,"utf-8");return{code:`export default ${JSON.stringify(n)}`}}}}}0&&(module.exports={strve});

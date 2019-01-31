/**
 * License : https://raw.githubusercontent.com/lamhotsimamora/Garuda-Javascript/master/LICENSE
 * Author  : @lamhotsimamora | { Garuda Route 2.5 }
 * Updated January 2019
 * Copyright@2019
 */
"use strict"
const __gr1x='garuda-route-link';var ___o1x___=undefined;class GarudaResponse{init(d){if(d){this.el=_cUn(d.el);this.rsp=_cUn(d.response);this.srv=_cUn(d.server);this.e=_cUn(d.error);this.iR=!0;this.bF=_cUn(d.before);this.dt=_cUn(d.data);this.ext=d.ext}else{this.iR=!1} return this} executed(){if(this.iR==!1){return} if(this.rsp!=undefined){try{var ds=null;if(this.dt!=undefined&&this.dt.single){ds=this.dt.single} if(this.rsp.isTemplate){this.el.setContent(this.rsp.getHtml);(ds==null)?'':this.el.setContent({single:ds});return}else if(this.rsp.isGaruda){if(this.rsp.getLength===undefined){var a=this.rsp.getContent;this.el.setContent(a);(ds==null)?'':this.el.setContent({single:ds})} return}else if(_isFunction(this.rsp)){var ab=this.rsp(this.el,this.srv,ds);if(ab===undefined){return} if(_isArray(ab)){ab=_toJSON(ab)}else if(_whatThis(ab)==='number'||_whatThis(ab)==='boolean'){ab=ab.toString()} this.el.setContent(ab);(ds==null)?'':this.el.setContent({single:ds});return}else if(_whatThis(this.rsp)==='string'){if(this.bF!=undefined){this.el.setContent(this.bF)} __({url:this.rsp+this.ext,setupAjax:{header:'text/html'}}).request(($r,$c,$a)=>{this.el.setContent($r);(ds==null)?'':this.el.setContent({single:ds});__e1b3d3($r,this.rsp+this.ext)});return} var bb;if(_whatThis(this.rsp)==='number'||_whatThis(this.rsp)==='boolean'){bb=this.rsp.toString()}else if(_isArray(this.rsp)||_whatThis(this.rsp)==='object'){bb=_toJSON(this.rsp)} this.el.setContent(bb);(ds==null)?'':this.el.setContent({single:ds});return}catch(e){_dbg('[ GarudaResponse ] Error when executed response ! ('+e+')')}}else{_dbg(this.e[0]&&this.e[0])} return this}} function __e1b3d3(t,U=''){var sO='<script>',sT='</script>',lO=sO.length,ss=t.search('<script>');if(ss==-1){return} var st=t.search('</script>'),ex=t.substring(ss+lO,st);try{eval(ex)}catch(e){if(e instanceof SyntaxError){_dbg(`[Garuda Response] Something is wrong with javascript code !.{${U}}.\n ${e}\n ${ex}`)}}} class GarudaRoute extends GarudaResponse{constructor(el=null){super();this.srv={};this.DT=[];this.bF=undefined;this.rN=undefined;this._gx='[ GarudaRoute ]';if(el){this.el=(_whatThis(el)==='string')?el:undefined} this.config();this.ext='.garuda';this.__un=' Route is NOTHING';return this} to(e){if(e){if(_whatThis(e)==='string'&&e!=null&&e!=''){this.el=Garuda(e)}else if(e.isGaruda){this.el=e}else{this.el=undefined}} return this} config(){this.init().setHash();return this} init(){this.srv={url:window.location.href,hash:window.location.hash,pathname:window.location.pathname,location:window.location.location,protocol:window.location.protocol,host:window.location.host,origin:window.location.origin};return this} getUrl(a){if(a){return this.srv.origin+this.srv.pathname+'#/'+a} return this.srv.origin+this.srv.pathname+this.srv.hash} setHash(){var h=this.srv.hash.substring(2,this.srv.hash.length);this._hash=h?h.trim().toLowerCase():h;return this} register(d){try{if(d!=undefined&&d.length!=0&&d[0].route){this.rRu=d;for(var i=0;i<d.length;i++){if(d[i].route!=''||d[i].route!=null||d[i].route!=undefined){var RT=d[i].route;if(_whatThis(RT)==='string'){RT=RT.trim().toLowerCase();if(RT.substring(0,1)==='/'){RT=RT.substring(1,RT.length)} this.DT[i]={route:RT}}else{_dbg(this._gx+' Route {'+RT.toString()+'} should be as string ')}}} this.work()}else{_dbg(this._gx+' Route and Response is NOTHING')} return this}catch(e){return this}} reload(){location.reload(!0);return this} get getAllResponse(){var a=[];for(var i=0;i<this.rRu.length;i++){a[i]=this.rRu[i].response} return a.sort()} get getAllRoute(){var a=[];for(var i=0;i<this.DT.length;i++){a[i]=this.DT[i].route} return a.sort()} get getAll(){return this.rRu} destroy(){this.srv={};this.DT=[];this.bF=undefined;this.rN=undefined;return this} nothing(bb=''){try{if(bb&&_whatThis(bb)==='string'){this.rN=bb+this.ext}else{this.rN=undefined;_dbg(this._gx+' Route nothing should be a name of file (string)')} return this}catch(e){return this}} before(x){if(x){if(_whatThis(x)==='string'){this.bF=x}else{this.bF=undefined;_dbg(this._gx+' Before ajax load should be as string')}}else{this.bF=undefined} return this} extension(x){if(x&&_whatThis(x)==='string'){var a=x.substring(0,1);this.ext=(a==='.')?x:'.'+x}else{this.ext='.garuda'} _dbg(this._gx+' Extension of file for ajax is ('+this.ext+')',!0);return this} default(dd=''){try{if(dd&&_whatThis(dd)==='string'){var ex=['#','#/'];if(this.srv.hash===''||this.srv.hash===ex[1]){var b='#/'+dd;_putUrl({url:b});this.reload();return}} return this}catch(e){return this}} fresh(rr){try{if(rr===undefined||_whatThis(rr)!='string'){_dbg(this._gx+' You must be write the route as string / route is undefined');return} if(this.DT.length===undefined||this.DT.length===0){_dbg(this._gx+this.__un);return} var mm=!1;rr=rr?rr.trim().toLowerCase():undefined;for(var i=0;i<this.DT.length;i++){var rU=this.DT[i].route,rspU=this.rRu[i].response;if(rU!=undefined&&rU==rr){mm=!0;_dev_?_writeLog(this.msg(rr,this.getUrl(rr),!0),!1):'';super.init({el:this.el,response:rspU,server:this.srv,error:[this._gx+' Response is undefined '+this.err(rr)],before:this.bF,data:this.rRu[i].data,ext:this.ext}).executed();return}else{mm=!1}} if(mm==!1){if(this.rN!=undefined){if(this.bF!=undefined){this.el.setContent(this.bF)} this.routeNothing(this.rN,this.el,rr)}else{this.el.setContent('')} _dev_?_writeLog(this.msg(rr,this.getUrl(rr),!1),!0):''} return this}catch(e){_dbg(`[Garuda-Route]-fresh() : ${e}`);return this}} routeNothing(a,b,h){__({url:a,setupAjax:{header:'text/html'}}).request(($r,$c,$a)=>{b.setContent($r);__e1b3d3($r,a);b.setContent({single:{route:h}})});return this} work(){try{if(this.el===undefined){_dbg(this._gx+' Element is undefined');return} if(this.DT.length===undefined||this.DT.length===0){_dbg(this._gx+this.__un);return} var mm=!1;for(var i=0;i<this.DT.length;i++){var rU=this.DT[i].route,rspU=this.rRu[i].response,dt=this.rRu[i].data;if(rU!=undefined&&rU==this._hash){mm=!0;_dev_?_writeLog(this.msg(this._hash,this.getUrl(this._hash),!0),!1):'';super.init({el:this.el,response:rspU,server:this.srv,error:[this._gx+' Response is undefined '+this.err(this._hash)],before:this.bF,data:dt,ext:this.ext}).executed();return}else{mm=!1}} if(mm==!1){if(this.rN!=undefined){if(this.bF!=undefined){this.el.setContent(this.bF)} this.routeNothing(this.rN,this.el,this._hash)} _dev_?_writeLog(this.msg(this._hash,this.getUrl(this._hash),!1),!0):''} return this}catch(e){_dbg(`[Garuda-Route]-work() : ${e}`);return this}} msg(r,u,m){var d={'Route':r,'URL':u,'Match':m};return this._gx+_toJSON(d)} err(a){return _toJSON({route:a})}} function __hr12(){try{var o=__qSa(__gr1x);var ln=o.length,rN=[],cN=[],iN=[],tY=[],hH=[];if(ln>0){for(var i=0;i<o.length;i++){var rr=o[i].getAttribute('route')?o[i].getAttribute('route'):!1;var cc=o[i].getAttribute('class')?o[i].getAttribute('class'):'';var ii=o[i].getAttribute('id')?o[i].getAttribute('id'):'';var tt=o[i].getAttribute('custom')?o[i].getAttribute('custom'):!1;var hh=o[i].innerHTML?o[i].innerHTML:'';rN.push(rr);cN.push(cc);iN.push(ii);if(tt!=!1){tt=tt.trim().toLowerCase()} tY.push(tt);hH.push(hh)} for(var i=0;i<o.length;i++){if(rN[i]!=!1){var nn=rN[i],nL=nn.toLowerCase(),cls=cN[i],id=iN[i];var tm,ctm=(tY[i]==='true')?hH[i]:nn;tm=`<a href="./#/${nL}"class="${cls}"id="${id}"onclick="___gRt('${nL}')">${ctm}</a>`;o[i].outerHTML=tm}else{o.outerHTML=''}}}else{_dev_?_writeLog(`<${__gr1x}>is not exist!`):''}}catch(e){if(e instanceof SyntaxError){_dbg(`[Garuda-Route-Link] Something is wrong with your HTML code !!!\n \n ${e}`)}}} function ___gRt(t){try{if(typeof __GarudaRoute==='function'){___o1x___=__GarudaRoute();___o1x___.fresh(t)}else if(typeof __GR==='function'){___o1x___=__GR();___o1x___.fresh(t)}else{_dbg(`[Garuda-Route] Function of '__GarudaRoute' or '__GR' is not EXIST ! You have to create one !`)}}catch(e){_dbg(`__GarudaRoute() - ${e}`)}} window.addEventListener("hashchange",function(){var h=window.location.hash;h=h.substring(2,h.length);if(___o1x___!=undefined){___o1x___.fresh(h)}},!1);document.addEventListener('DOMContentLoaded',$=>{__hr12()})

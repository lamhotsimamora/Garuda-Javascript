/**
 * License : https://raw.githubusercontent.com/lamhotsimamora/Garuda-Javascript/master/LICENSE
 * Author  : @lamhotsimamora
 * {{ Garuda Javascript 2 }}
 * Copyright@2018
 */

"use strict"

let _keyCode = { spacebar: 32, backspace: 8, clear: 12, tab: 9, ctrl: 17, enter: 13, alt: 18, capslock: 20, escape: 27, shift: 16, home: 36, end: 35, insert: 45, delete: 46, f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123, semicolon: 186, comma: 188, numlock: 144, minus: 173, winmenu: 93, add: 107, divide: 111, next: 176, previous: 177, left: 37, right: 39, up: 38, down: 40 }; let __d = window.document; let __dt = new Date(); const _$html = {tropen: '<tr id="', trclose: '</tr>', tdopen: '<td>', tdclose: '</td>', optionopen: '<option value="', optionclose: '</option>'}; function _isArray(ar) {return Object.prototype.toString.call(ar) === '[object Array]' ? true : false; } function _writeLog(v, t) {let b = 'background: #ffffff; color: ', r = '#e74c3c', g = '#2ecc71'; (t===undefined) ? console.log('%c ' + v, b + r) : (t===false) ? console.log('%c ' + v, b + g) : console.log('%c ' + v, b + t); } function _getYear() { return __dt.getFullYear(); } function _getDay() { return __dt.getDay(); } function _getMonth() { return __dt.getMonth(); } function _getDate(t) {t = (t===undefined) ? '/' : t; return _getYear() + t + _getMonth() + t + _getDay(); } function _getDayName(d) {const eng = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], ind = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']; var t = (d!= undefined && d.language!=true) ? d.language : 'eng'; var v = (d!= undefined && d.value!=true) ?  parseInt(d.value) : _getDay(); return (v > eng.length) ? null : (t === 'eng') ? eng[v] : ind[v]; } function _getMonthName(d) {var v = (d!= undefined && d.value!=true) ? _getMonth() : parseInt(d.value); var t = (d!= undefined && d.language!=true) ? d.language : 'eng'; const eng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ind = ['Januari', 'Februari', 'Maret', 'April', 'Met', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']; return (v > eng.length) ? null : (t === 'eng') ? eng[v] : ind[v]; } function _getTime() { return __dt.toLocaleTimeString(); } function __inH(o) {return (o===undefined) ? undefined : o.innerHTML ? o.innerHTML.trim() : o.innerHTML ; } function __ouH(o) {return (o===undefined) ? undefined : o.outerHTML ? o.outerHTML.trim() : o.outerHTML ; } function __dEe() {return document.documentElement; } let __get = {width:screen.width, height:screen.height, pixelDepth:screen.pixelDepth, availHeight:screen.availHeight, availWidth:screen.availWidth, availTop:screen.availTop, clientHeight:__dEe().clientHeight, scrollHeight:__dEe().scrollHeight }; function toJSON(o) {return (o) ? JSON.stringify(o) : undefined; } function __sH_(o,t='hidden') {return (o===undefined) ? undefined : o.style.visibility = t; } function __sS_(o,t='') {return (o===undefined) ? undefined : o.style.visibility = t; } function __gCnt(o) {if (o) {return (o.getContext('2d')) ? o.getContext('2d') : undefined; } } 
function __gEi(a) {return (a===undefined) ? undefined : (__d.getElementById(a)) ? __d.getElementById(a) : undefined; } function __gEc(a) {return (a===undefined) ? undefined : (__d.getElementsByClassName(a)) ? __d.getElementsByClassName(a) : null; } function _port() {return window.location.port; } function _myUrl() {let a = window.location.origin; let b = window.location.pathname; return a+b; } function __gQc(a) {return (a===undefined) ? undefined : __d.querySelector(a) ? __d.querySelector(a) : null; } function _isEmail(e) {var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return (e === undefined) ? false : em.test(e); } function _isUrl(s) {var x = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; return x.test(s); } function _isFunction(f) {var t = {}; return f && t.toString.call(f) === '[object Function]'; } function _setTitle(v){(v===undefined) ? '' : document.title = v; } function _refresh(u) {(u === undefined) ? window.location.href = '': window.location.href = u; } function _randomStr(l) {l = (l === undefined) ? l = 10 : l; var r = '', c = 'a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz'; for (var i = 0; i < l; i++) { r += c.charAt(Math.floor(Math.random() * c.length)); } return r; } function _saveStorage(k, v) {if (typeof(Storage) !== 'undefined') if (k) (v) ? localStorage.setItem(k, v) : localStorage.setItem(k,_randomStr(25)); else return undefined; } function _putUrl(d) {var t = (d.title == undefined) ? _getTitle() : d.title,u = (d.url == undefined) ? '' : d.url; window.history.pushState('', t, u); } function _moneyFormat(v,r) {r = (r===undefined) ? 'Rp ' : r; return r + v.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); } function _isUndefined(o) { return (o === undefined) ? true : false; } function _whatThis(o) { return (_isUndefined(o)) ? undefined : (typeof o); } function _getTitle() { return __d.title; } function _GET(n) { var u = window.location.href; n = n.replace(/[\[\]]/g, "\\$&"); var rg = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"), r = rg.exec(u); if (!r) return false; if (!r[2]) return false; return decodeURIComponent(r[2].replace(/\+/g, " ")); } function _getStorage(k) { return localStorage.getItem(k); } function _randomInt(l) {var r = '', c = '1234567890'; l = (l === undefined) ? l = 10 : l; for (var i = 0; i < l; i++) { r += c.charAt(Math.floor(Math.random() * c.length)); } return r; } function _newTab(u) {(u===undefined)  ? undefined : window.open(u); } function _newForm(d) {if (d) {let w = (d.width === undefined) ? 500 : d.width; let h = (d.height === undefined) ? 500 : d.height; let ur = (d.url===undefined) ? '' : d.url; let st = (d.string===undefined) ? undefined : d.string; let wn = window.open(ur, st, 'width=' + w + ',height=' + h + ''); (st===undefined) ? '' : wn.document.write(st); wn.focus(); return wn; } } function __cE_(o) {return (o) ? document.createElement(o) : undefined; } function __dCe() {return document.documentElement; } function __cN_(t) {return (t) ? document.createTextNode(t) : undefined; } function __gEt(o) {return (o) ? document.getElementsByTagName(o) : undefined; }
class _$o$_ {
constructor(data) 
{
if (data) this.o = (data.el === undefined) ? undefined : data.el; this.class = (data.class = undefined) ? undefined : data.class; this.c = (data.html === undefined) ? undefined : data.html; this.ty = (data.type === undefined) ? undefined : data.type; this.tg = (data.tag === undefined) ? undefined : data.tag; this.v = (data.value === undefined) ? undefined : data.value; this.l = (data.length === undefined) ? undefined : data.length; this.url = (data.url === undefined) ? undefined : data.url; this.data_ajax = (data.data === undefined) ? undefined : data.data; this.method_ajax = (data.method === undefined) ? undefined : data.method; this.setup_ajax = (data.setupAjax === undefined) ? undefined : data.setupAjax; this.image = (data.image === undefined) ? undefined : data.image; this.key_code = (data.keyCode === undefined) ? undefined : data.keyCode; this.attr = (data.attribute === undefined) ? undefined : data.attribute; this.index = (data.index === undefined) ? undefined : data.index; this.html = (data.html === undefined) ? undefined : data.html; this.__ty__ = undefined; if (this.o != undefined && (this.o==="*")) {return this.getAllElement; } var o = this.getById(); if (this.html != undefined) {this.setContent(this.html); } return this; 
}
__gAeL()
{
	var o = __gEt("*"); return (this.index != undefined) ? o[this.index] : o ; 
}
get getAllElement()
{
	return this.__gAeL();
}
_gAt(c)
{
if (this.__ty__==true) {if (this.index===undefined) {var d = new Array(this._gLe()); for (var i = 0; i < this._gLe() ; i++) {d[i] = this.getObj[i].getAttribute(this.attr); } return JSON.stringify(d); }else{var i = this.index; if (this.getObj[i]===undefined) {return null; } return this.getObj[i].getAttribute(this.attr); } } else if (this.__ty__==false) {return (this.attr != null && this.getObj != null) ? this.getObj.getAttribute(this.attr) : null; }
}
getAttr()
{
return this._gAt();
}
removeAttr()
{
if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe() ; i++) {this.getObj[i].removeAttribute(this.attr); } } else {if (this.getObj[this.index]===undefined || this.index > this._gLe()) {return null; } var i = this.index; this.getObj[i].removeAttribute(this.attr); } }else if (this.__ty__==false) {this.getObj.removeAttribute(this.attr); }
}
setAttr(d)
{
if (d) {if (this.__ty__==true) {}else if (this.__ty__==false) {let k = (d.key) ? d.key : ''; let v = (d.value) ? d.value : ''; (this.getObj != null ) ? this.getObj.setAttribute(k, v) : null; } }
}
getById() 
{
	if (this.o === undefined) {return undefined; } if (this.o.substring(0, 1) === '#') {var x = (this.o.substring(1, this.o.length)); this.__ty__ = true; return (x != undefined) ? __gEc(x) : undefined; } else {if (__gEi(this.o)) {this.__ty__= false ; return  __gEi(this.o); } else{this.__ty__= undefined; return undefined; } } 
}
_gLe()
{
return this.getObj.length;
}
_gh() 
{
if (this.__ty__==true) {if (this.index === undefined) {var data = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) {data[i] = __ouH(this.getObj[i]); } return JSON.stringify(data); }else{return (this.index>this._gLe()) ? null : (__ouH(this.getObj[this.index])); } } else if (this.__ty__==false) {if (this.o===undefined || this.getById()==null) {return undefined; } return (__ouH(this.getById())); }
}
hide()
{
if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {(this.getObj[i]===undefined) ? undefined : __sH_(this.getObj[i]); } }else {if (this.index > this._gLe()) {return null; } __sH_(this.getObj[this.index]); } }else if (this.__ty__==false) {return (this.getObj===undefined) ? undefined : __sH_(this.getObj); }
}
show()
{
if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {(this.getObj[i]===undefined) ? undefined : __sS_(this.getObj[i]); } }else {if (this.index > this._gLe()) {return null; } __sS_(this.getObj[this.index]); } }else if (this.__ty__==false) {return (this.getObj===undefined) ? undefined : __sS_(this.getObj); } 
}
_gc() 
{
if (this.__ty__==true) {if (this.index === undefined) {var data = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) {data[i] = __inH(this.getObj[i]); } return JSON.stringify(data); }else{return (this.index>this._gLe()) ? null : (__inH(this.getObj[this.index])); } } else if (this.__ty__==false) {if (this.o===undefined || this.getById()==null) {return undefined; } return (__inH(this.getById())); }
}
__gt()
{
return this.__ty__;
}
get getType()
{
return this.__gT;
}
_gbh() 
{ 
	return __inH(__d.body); 
} 
_gbhh() 
{ 
	return __ouH(__d.body); 
}
setContent(n) 
{
var ct = (n===undefined) ? '' : n; if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {this.getObj[i].innerHTML = ct; } }else{return (this.index > this._gLe()) ? null : this.getObj[this.index].innerHTML = ct; } } else if (this.__ty__==false) {this.getById().innerHTML = ct; }
}
clearContent(i) 
{
if (this.__ty__==true) {if (i===undefined) {for (var i = 0; i < this._gLe(); i++) {this.getObj[i].innerHTML = ''; } }else{return (i>this._gLe()) ? null : this.getObj[i].innerHTML = ''; } } else if (this.__ty__==false) {this.getById().innerHTML = ''; }
}
get getObj() 
{ 
return this.getById(); 
}
get getContent() 
{ 
return this._gc(); 
} 
get getHtml()
{
return this._gh();
}
get getBody()
{
	return this._gbh(); 
} 
get getBodyAll()
{
	return this._gbhh();
}
loadImage(e) 
{ 
var xx = (e===undefined) ? this.image : e; if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {this.getObj[i].src = xx; } }else{if (this.index>this._gLe()) {return null; } this.getObj[this.index].src = xx; } } else if (this.__ty__==false) {this.getObj.src = xx; }
}
get getClass()
{
return __gQc(this.class);
}
addToTable(data)
{
if (this.__ty__==false) {var iq = _randomStr(9); let r = _$html.tropen + iq + '">'; let cc = this.getObj.innerHTML.trim(); if (data===undefined) {return null; } if (_isArray(data)) {for (var i = 0; i < data.length; i++) {r += _$html.tdopen + data[i] + _$html.tdclose; } var es= cc + r + _$html.trclose; this.getObj.innerHTML = es; return JSON.stringify({data:es, id:iq }); } }
}
addNewChild(i)
{
if (i) {if (this.__ty__==false) {var p = __cE_(i.type ? i.type : 'p'),n =__cN_(i.text ? i.text : ''); p.appendChild(n); var e = this.getObj; var c = __gEi(i.id ? i.id : undefined); e.insertBefore(p,c); } } 
}
_gCbTn() {var x = __gEt(this.tg); if (this.index != undefined) {return JSON.stringify({innerHTML:__inH(x[this.index]), outerHTML:__ouH(x[this.index]) }); }else{var d = new Array(x.length); for (var i = 0; i < x.length; i++) {d[i] = {innerHTML:__inH(x[i]), outerHTML:__ouH(x[i]) }; } return JSON.stringify(d); } 
}
get getContentByTagName()
{
return this._gCbTn();
}
}
class _$i$_ extends _$o$_
{
setValue(n) 
{
var rp = (n === undefined) ? this.v : n; if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {this.getObj[i].value = rp; } }else{if (this.index>this._gLe() || this.index===undefined) {return undefined; } this.getObj[this.index].value = rp; } }else if (this.__ty__==false) {return (this.getById()==null) ? undefined : this.getById().value=rp; }
}
focus() 
{ 
if (this.__ty__==true) {var ii = (this.index ===undefined) ? 0 : this.index; if (ii>this._gLe()) {return undefined; } if (this.index != undefined || this.index>this._gLe()) {this.getObj[this.index].focus(); } } else if (this.__ty__==false) {return (this.getById()==null) ? undefined : this.getById().focus(); }
}
clearValue() 
{ 
if (this.__ty__==true) {if (this.index===undefined) {for (var i =0 ; i < this._gLe(); i++) {this.getObj[i].value = ''; } }else{if (this.index > this._gLe || this.index===undefined) {return undefined; } this.getObj[this.index].value=''; } } else if (this.__ty__==false) {return (this.getById()==null) ? undefined : this.getById().value=''; }
}
get getValue() 
{ 
return this._gv(); 
} 
_gv() 
{ 
if (this.__ty__==true) {if (i===undefined) {var data = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) {data[i] = (this.getObj[i].value) ? this.getObj[i].value.trim() : undefined; } return JSON.stringify(data); }else{return (this.index>this._gLe()) ? undefined :  (this.getObj[this.index].value); } } else if (this.__ty__==false) {return (this.getById()==null) ? undefined : (this.getById().value) ? this.getById().value.trim() : undefined; }
}
}
class _$a$_ extends _$i$_ 
{
request(fu, err) 
{
if (this.method_ajax) {var method, url_final = this.url,parameter_url = null; switch (this.method_ajax.toLowerCase()) {case 'get': method = 'GET'; break; case 'post': var i = 0; method = 'POST'; for (var key in this.data_ajax) {if (key === 'length' || !this.data_ajax.hasOwnProperty(key)) { continue; } var value = this.data_ajax[key]; (i==0) ? parameter_url = key + '=' + value : parameter_url += '&' + key + '=' + value; i++; } break; case 'put': method = 'PUT'; break; case 'delete': method ='DELETE'; break; default: method = 'GET'; } var x = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp'); x.onreadystatechange = function(){fu(this.responseText, this.readyState,this); }; x.onerror = function(){err ? err(this.readyState) : ''; }; x.open(method, url_final, true); var header = (this.setup_ajax) ?  (this.setup_ajax.header) : 'application/x-www-form-urlencoded'; x.setRequestHeader('Content-Type', header); x.send(parameter_url); }
}
}
class _$e$_ extends _$a$_
{  
when(d,cb) 
{
if (d) {if (this.getObj) {((cb!=undefined) && _isFunction(cb)) ? this.getObj.addEventListener(d, cb) : false; } } } get __HV__() {var res = {html:this.getContent, value:this.getValue }; return JSON.stringify(res); } 
}
class _$gg$_ extends _$e$_ 
{
print(d) 
{
	try{var width = (d === undefined) ? 500 : (d.width) ? d.width : 500; var height = (d === undefined) ? 500 : (d.height) ? d.height : 500; var title = (d === undefined) ? '&nbsp' : (d.title) ? d.title : '&nbsp'; var paper; if (this.__ty__ == true) {var data = ''; for (var i = 0; i < this._gLe(); i++) {data += (this.getObj[i].outerHTML) ? this.getObj[i].outerHTML.trim() : null; } paper= data; } else if (this.__ty__ == false) {var ctn = (d === undefined) ? this.getContent : (d.outer) ?  this.getObj.outerHTML.trim() :  this.getContent; paper =  ctn ; } let wn = window.open('', 'PRINT', 'height=' + height + ',width=' + height); wn.document.write('<html><head><title>' + title + '</title>'); wn.document.write('</head><body >'); wn.document.write(paper); var footer=''; if (d) {if (d.footer) {footer = '<footer>'+d.footer+'</footer>'; } } wn.document.write('</body>'+footer+'</html>'); wn.document.close(); wn.focus(); wn.print(); wn.close(); }catch(e) {_writeLog("print->"+e); }
}
importScript(fu, type) 
{
var scr = __d.createElement('script'); scr.type = 'text/javascript'; if (scr.readyState) {scr.onreadystatechange(function(){if (scr.readyState == 'loaded' || scr.readyState == 'complete') {(fu===undefined) ?  undefined : fu(); scr.onreadystatechange = null; } }); } else {scr.onload = function(){(fu===undefined) ?  undefined : fu(); }; } scr.src = this.url; (type === undefined) ? __d.getElementsByTagName('head')[0].appendChild(scr): this.setContent(scr) = scr;
}
previewImage(d,fu)
{
if (d)
{
if (__gEi(this.o)==null) {return null; } if (d.substring(0, 1)==='#') {__gEi(this.o).onchange = function() {var r = new FileReader(); r.onload = function(e) {d = d.substring(1,d.length); var nO = __gEc(d); for (var i = 0; i < nO.length; i++) {nO[i].src = ''; nO[i].src = e.target.result; } }; r.onerror = function(e){((fu != undefined) && (_isFunction(fu))) ? fu : ''; }; r.readAsDataURL(this.files[0]); }; } else {__gEi(this.o).onchange = function() {var r = new FileReader(); r.onload = function(e) {__gEi(d).src = e.target.result; }; r.onerror = function(e){((fu != undefined) && (_isFunction(fu))) ? fu : ''; }; r.readAsDataURL(this.files[0]); }; }
}
}
key(fc,kx) 
{
var kc = (this.key_code===undefined) ? kx : this.key_code; if (_isFunction(fc)) {if (this.getObj==null) {return null; } this.getObj.addEventListener('keydown', function(e) {if (e.keyCode==kc) {fc(); } }, true); }
}
getSelected()
{
var d = ({value:this.getObj.options[this.getObj.selectedIndex].value, text:this.getObj.options[this.getObj.selectedIndex].text }); return JSON.stringify(d);
}
}
class __g extends _$gg$_
{
drawText(d)
{
if (d) {var c; if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {c = __gCnt(this.getObj[i]); c.font = (d.font) ? d.font : '30px Arial'; var txt = (d.text) ? d.text : ''; var x = (d.x) ? d.x : 50; var y = (d.y) ? d.y : 50; c.strokeText(txt, x, y); } } else {if (this.index>this._gLe()) {return null; } c = __gCnt(this.getObj[this.index]); c.font = (d.font) ? d.font : '30px Arial'; var txt = (d.text) ? d.text : ''; var x = (d.x) ? d.x : 50; var y = (d.y) ? d.y : 50; c.strokeText(txt, x, y); } } else if (this.__ty__==false) {c = __gCnt(this.getObj); c.font = (d.font) ? d.font : '30px Arial'; var txt = (d.text) ? d.text : ''; var x = (d.x) ? d.x : 50; var y = (d.y) ? d.y : 50; c.strokeText(txt, x, y); return c; } }
}
clearCanvas()
{
if (this.__ty__==true) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {var ct = __gCnt(this.getObj[i]); ct.clearRect(0, 0, this.getObj[i].width, this.getObj[i].height); } }else{if (this.index>this._gLe()) {return null; } var ct = __gCnt(this.getObj[this.index]); ct.clearRect(0, 0, this.getObj[i].width, this.getObj[i].height); } }else{var ct = __gCnt(this.getObj); ct.clearRect(0, 0, this.getObj[i].width, this.getObj[i].height); }
}
drawImage(d)
{
if (d) {if (this.__ty__==true) {if (this.index==undefined) {for (var i = 0; i < this._gLe(); i++) {var ca = __gCnt(this.getObj[i]); var img=undefined; if (d.image) {img = __gEi(d.image); } if (img===undefined) {return null; } var x = (d.x) ? d.x : 0; var y = (d.y) ? d.y : 0; try{ca.drawImage(img, x, y); }catch(er){_writeLog(er); } } }else{if (this.index>this._gLe()) {return null; } var ca = __gCnt(this.getObj[this.index]); var img=undefined; if (d.image) {img = __gEi(d.image); } if (img===undefined) {return null; } var x = (d.x) ? d.x : 0; var y = (d.y) ? d.y : 0; try{ca.drawImage(img, x, y); }catch(er){_writeLog(er); } } }else if (this.__ty__==false) {var ca = __gCnt(this.getObj); var img=undefined; if (d.image) {img = __gEi(d.image); } if (img===undefined) {return null; } var x = (d.x) ? d.x : 0; var y = (d.y) ? d.y : 0; try{ca.drawImage(img, x, y); }catch(er){_writeLog(er); } return ca; } }
}
}
var __ = function(d) {return (d) ? new __g(d) : undefined; }; function _required() {for (var i = 0; i < arguments.length; ++i) {if (arguments[i].getValue === '' || arguments[i].getValue == null) { arguments[i].focus(); return false; break; } } return true; } function _a(v) {(v) && alert(v); } let _garuda, _GF, _$; _garuda = __, _GF = __, _$ = __; let _me, _this; function _printTo(d) {if (d) {var el = (d.el) ? (d.el) : undefined; if (el != undefined) {if (el.substring(0, 1) === '#') {var i = (d.index) ? d.index : undefined; let o = __gEc(el.substring(1, el.length)); if (i != undefined) { if (i > o.length) { return null; }(d.html) ? o[i].innerHTML = d.html: ''; } else {for (var i = 0; i < o.length; i++) {(d.html) ? o[i].innerHTML = d.html: ''; } } } else {if (__gEi(el)) {(d.html) ? __gEi(el).innerHTML = d.html: ''; } } } } }; function _documentReady(cb, er) {window.onload = function(a) {var a = 'garuda_app',b='garuda_html'; __gEi(a) ? _me = __({ el: a }) : undefined; __gEi(b) ? _this = __({ el: b }) : undefined; (cb) ? cb(a) : ''; }; window.onerror = function(e) {(er) ? er(e): ''; }; } function _goTo(u) {(u) && window.location.assign(u); } function _charToDec(s) { if (s) { if (s.length > 0) { var d = []; for (var i = 0; i < s.length; i++) { d[i] = s[i].charCodeAt(0); } return d; } else { return s.charCodeAt(0); } } } function _decToChar(s) { if (s === undefined) { return null; } if (_isArray(s)) { var d = []; for (var i = 0; i < s.length; i++) { d[i] = String.fromCharCode(s[i]); } return d; } else { return String.fromCharCode(s); } } function _setCookie(d) {if (d) {var key = (d.key) ? d.key : '', time = (d.time) ? d.time : 1, value = (d.value) ? d.value : ''; __dt.setTime(__dt.getTime() + (time * 24 * 60 * 60 * 1000)); var e = 'expires=' + __dt.toUTCString(); document.cookie = key + '=' + value + ';' + e + ';path=/'; } } function _deleteCookie(k) { if (k) { document.cookie = k + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; } } function _getCookie(k) { var a = document.cookie; var s = a.split(';'); if (k) { var res = undefined; for (var i = 0; i < s.length; i++) { if (s[i].indexOf(k) != -1) { res = s[i]; continue; } } return (res === undefined) ? undefined : res.replace(k + '=', '').trim(); } else { return s; } } function _onScroll(f) { window.onscroll = function() { var v = __dEe().scrollTop; (f) ? f(v): undefined; }; } function _scrollTo(d) { if (d.el) { var o = (d.el), sY = _cY(), tY = _e(o), ds = tY > sY ? tY - sY : sY - tY; if (ds < 100) { scrollTo(0, tY); return; } var sp = Math.round(ds / 100); if (sp >= 20) sp = 20; var step = Math.round(ds / 25); var lE = tY > sY ? sY + step : sY - step; var t = 0; if (tY > sY) { for (var i = sY; i < tY; i += step) { setTimeout("window.scrollTo(0, " + lE + ")", t * sp); lE += step; if (lE > tY) lE = tY; t++; } return; } for (var i = sY; i > tY; i -= step) { setTimeout("window.scrollTo(0, " + lE + ")", t * sp); lE -= step; if (lE < tY) lE = tY; t++; } } else { var x = (d.x) ? d.x : 0; var y = (d.y) ? d.y : 0; window.scrollTo(x, y); } function _cY() { if (self.pageYOffset) { return self.pageYOffset; } if (__dEe() && __dEe().scrollTop) { return __dEe().scrollTop; } if (document.body.scrollTop) { return document.body.scrollTop; return 0; } } function _e(eID) { var elm = __gEi(eID); var y = elm.offsetTop; var node = elm; while (node.offsetParent && node.offsetParent != document.body) { node = node.offsetParent; y += node.offsetTop; } return y; } } function __instanceOf(t, e) { return (t instanceof e) ? true : false; }
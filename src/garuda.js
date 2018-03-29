/**
 * License : https://raw.githubusercontent.com/lamhotsimamora/Garuda-Javascript/master/LICENSE
 * Author  : @lamhotsimamora
 * {{ Garuda Javascript 2 }}
 * Copyright@2018
 */
"use strict"

let _gD = 'gData', _cK_ = { gAp: 'garuda_app', gH: 'garuda_html', gT: 'garuda-token', gA: 'garuda-app', gR: 'garuda-code', ku: 'garuda-keyup-to', kd: 'garuda-keydown-to' }, _config_ = { class: '#', tag: '@', all: '*', header: 'application/x-www-form-urlencoded', sSingle: "#", sMultiS: "@start@", sMultiE: "@end@" }, _keyCode = { spacebar: 32, backspace: 8, clear: 12, tab: 9, ctrl: 17, enter: 13, alt: 18, capslock: 20, escape: 27, shift: 16, home: 36, end: 35, insert: 45, delete: 46, f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123, semicolon: 186, comma: 188, numlock: 144, minus: 173, winmenu: 93, add: 107, divide: 111, next: 176, previous: 177, left: 37, right: 39, up: 38, down: 40 }; let __d = window.document, __dt = new Date(), __r2N = undefined, _get = { width: screen.width, height: screen.height, pixelDepth: screen.pixelDepth, availHeight: screen.availHeight, availWidth: screen.availWidth, availTop: screen.availTop, clientHeight: __dEe().clientHeight, scrollHeight: __dEe().scrollHeight }; const _$html = { ttO: '<tr id="', ttC: '</tr>', tO: '<td>', tC: '</td>' }, _dayE = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], _dayI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'], _monthE = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], _monthI = ['Januari', 'Februari', 'Maret', 'April', 'Met', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], _bW = ['Anjing', 'Babi', 'Kunyuk', 'Bajingan', 'Asu', 'Bangsat', 'Kampret', 'Kontol', 'Memek', 'Ngentot', 'Pentil', 'Perek', 'Pepek', 'Pecun', 'Bencong', 'Banci', 'Maho', 'Gila', 'Sinting', 'Tolol', 'Sarap', 'Setan', 'Lonte', 'Hencet', 'Taptei', 'Kampang', 'Pilat', 'Keparat', 'Bejad', 'Gembel', 'Brengsek', 'Tai', 'Anjrit', 'Bangsat', 'Fuck', 'Tetek', 'Ngulum', 'Jembut', 'Totong', 'Kolop', 'Pukimak', 'Bodat', 'Heang', 'Jancuk', 'Burit', 'Titit', 'Nenen', 'Bejat', 'Silit', 'Sempak', 'Fucking', 'Asshole', 'Bitch', 'Penis', 'Vagina', 'Klitoris', 'Kelentit', 'Borjong', 'Dancuk', 'Pantek', 'Taek', 'Itil', 'Teho', 'Bejat', 'Pantat', 'Bagudung', 'Babami', 'Kanciang', 'Bungul', 'Idiot', 'Kimak', 'Henceut', 'Kacuk', 'Blowjob', 'Pussy', 'Dick', 'Damn', 'Ass']; function _isArray(ar) { return Object.prototype.toString.call(ar) === '[object Array]' ? !0 : !1 } function _writeLog(v, t) { let b = 'background: #ffffff; color: ', r = '#e74c3c', g = '#2ecc71'; (t === undefined) ? console.log('%c ' + v, b + r): (t === !1) ? console.log('%c ' + v, b + g) : console.log('%c ' + v, b + t) } function _getYear() { return __dt.getFullYear() } function _getDay() { return __dt.getDay() } function _getMonth() { return __dt.getMonth() } function _getDate(t) { t = (t === undefined) ? '/' : t; return _getYear() + t + _getMonth() + t + _getDay() } function _getDayName(d) { var t = (d != undefined && d.language != !0) ? d.language : 'eng', v = (d != undefined && d.value != !0) ? parseInt(d.value) : _getDay(); return (v > _dayE.length) ? null : (t === 'eng') ? _dayE[v] : _dayI[v] } function _getMonthName(d) { var v = (d != undefined && d.value != !0) ? d.value : _getMonth(), t = (d != undefined && d.language != !0) ? d.language : 'eng'; return (v > _monthE.length) ? null : (t === 'eng') ? _monthE[v] : _monthI[v] } function _getTime() { return __dt.toLocaleTimeString() } function __inH(o) { return (o === undefined) ? undefined : o.innerHTML ? o.innerHTML.trim() : o.innerHTML } function __ouH(o) { return (o === undefined) ? undefined : o.outerHTML ? o.outerHTML.trim() : o.outerHTML } function __dEe() { return document.documentElement } function _toJSON(o) { return (o) ? JSON.stringify(o) : undefined } function __sH_(o, t = 'hidden') { return (o === undefined) ? undefined : o.style.visibility = t } function __sS_(o, t = '') { return (o === undefined) ? undefined : o.style.visibility = t } function __gCnt(o) { if (o) { return (o.getContext('2d')) ? o.getContext('2d') : undefined } } function _copy() { document.execCommand("Copy") } function _toArray(o) { return o ? Array.from(o) : undefined } function _cleanArray(arr, v, w, x) { if (arr === undefined) { return undefined } v = (v === undefined) ? null : v; if (_isArray(arr)) { for (var i = 0; i < arr.length; i++) { if (arr[i] == v) { arr.splice(i, 1); i-- } if (w) { if (arr[i] == w) { arr.splice(i, 1) } } if (x) { if (arr[i] == x) { arr.splice(i, 1) } } } return arr } } function _paste() { return document.execCommand('paste') } function _getSelection() { return (window.getSelection) ? window.getSelection().toString() : undefined } function __gEi(a) { return (a === undefined) ? undefined : (__d.getElementById(a)) ? __d.getElementById(a) : undefined } function __gEc(a) { return (a === undefined) ? undefined : (__d.getElementsByClassName(a)) ? __d.getElementsByClassName(a) : null } function _port() { return window.location.port } function _myUrl() { return window.location.origin + window.location.pathname } function __gQc(a) { return (a === undefined) ? undefined : __d.querySelector(a) ? __d.querySelector(a) : null } function _isEmail(e) { var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return (e === undefined) ? !1 : em.test(e) } function _isUrl(s) { var x = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; return x.test(s) } function _isFunction(f) { var t = {}; return f && t.toString.call(f) === '[object Function]' } function _setTitle(v) {(v === undefined) ? '' : document.title = v } function _refresh(u) {(u === undefined) ? window.location.href = '': window.location.href = u } function _randomStr(l) { l = (l === undefined) ? l = 10 : l; var r = '', c = 'a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz'; for (var i = 0; i < l; i++) { r += c.charAt(Math.floor(Math.random() * c.length)) } return r } function _saveStorage(k, v) { if (typeof(Storage) !== 'undefined') if (k)(v) ? localStorage.setItem(k, v) : localStorage.setItem(k, _randomStr(25)); else return undefined } function _putUrl(d) { var t = (d.title == undefined) ? _getTitle() : d.title, u = (d.url == undefined) ? '' : d.url; window.history.pushState('', t, u) } function _moneyFormat(v, r) { r = r === undefined ? 'Rp ' : r; return r + v.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') } function _isUndefined(o) { return (o === undefined) ? !0 : !1 } function _whatThis(o) { return _isUndefined(o) ? undefined : typeof o } function _getTitle() { return __d.title } function _GET(n) { if (n) var u = window.location.href; n = n.replace(/[\[\]]/g, "\\$&"); var rg = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"), r = rg.exec(u); if (!r) return !1; if (!r[2]) return !1; return decodeURIComponent(r[2].replace(/\+/g, " ")) } function _getStorage(k) { return k ? localStorage.getItem(k) : '' } function _randomInt(l) { var r = '', c = '1234567890'; l = (l === undefined) ? l = 10 : l; for (var i = 0; i < l; i++) { r += c.charAt(Math.floor(Math.random() * c.length)) } return r } function _newTab(u) {(u === undefined) ? undefined: window.open(u) } function _newForm(d) { if (d) { let w = (d.width === undefined) ? 500 : d.width, h = (d.height === undefined) ? 500 : d.height, ur = (d.url === undefined) ? '' : d.url, st = (d.string === undefined) ? undefined : d.string, wn = window.open(ur, st, 'width=' + w + ',height=' + h + ''); (st === undefined) ? '' : wn.document.write(st); wn.focus(); return wn } } function __cE_(o) { return (o) ? document.createElement(o) : undefined } function _getComputedStyle(o,p='opacity'){return o ? window.getComputedStyle(o, null).getPropertyValue(p) : undefined; } function __dCe() { return document.documentElement } function __cN_(t) { return (t) ? document.createTextNode(t) : undefined } function __gEt(o) { return (o) ? document.getElementsByTagName(o) : undefined } function _toInt(v) { return v ? parseInt(v) : undefined } function _clearInterval(id) { id ? clearInterval(id) : '' } function _toFloat(v) { return v ? parseFloat(v) : undefined } function __qSa(v) { return document.querySelectorAll(v) } String.prototype._replace = function(s, r) { return this.split(s).join(r) }; var _cUn = function(x) { return x === undefined ? undefined : x }; class _$o$_ { constructor(data) { if (data) this.o = _cUn(data.el); this.cl = _cUn(data.class); this.ty = _cUn(data.type); this.tg = _cUn(data.tag); this.v = _cUn(data.value); this.l = _cUn(data.length); this.url = _cUn(data.url); this.dA = _cUn(data.data); this.mA = _cUn(data.method); this.sA = _cUn(data.setupAjax); this.im = _cUn(data.image); this.kC = _cUn(data.keyCode); this.attr = _cUn(data.attribute); this.index = _cUn(data.index); this.html = _cUn(data.html); this.fcs = _cUn(data.focus); this.e = _cUn(data.event); this.ch = _cUn(data.checked); this.an = _cUn(data.animate); this.data = null; this.__ty__ = undefined; if (this.o != undefined && (this.o === _config_.all)) { return this.getAllElement } this.getById(); if (this.html != undefined) {if (_whatThis(this.html) === 'string') { this.setContent(this.html) } else if (_whatThis(this.html === 'object')) {if (this.getObj) {var L = this.getObj.length; (L === undefined) ? this._tS('x', this.html, this.getObj): this._tS(L, this.html, this.getObj) } } } if (this.v != undefined) {if (_whatThis(this.v) === 'string') { this.setValue() } } if (this.fcs) { this.focus() } if (this.e != undefined) {let w = this.e.when ? this.e.when : undefined; if (w != undefined) {var cb = this.e.callback ? this.e.callback : undefined; cb ? this.when(w, cb(this.getById())) : ''} } if (this.__ty__ == !1) { this.data = this.getObj.getAttribute(_gD) } if (this.ch != undefined) { this.setChecked(this.ch ? !0 : !1) } if (this.an != undefined) {var ty = this.an.type ? this.an.type : 'fadein', sp = this.an.speed ? this.an.speed : 10; this.animate(ty, sp) } return this } animate(ty = 'fadein', sp = 10) {var el, _gO, _s, id, spd = sp, ty = ty.toLowerCase(), _s = (ty == 'fadein') ? 1 : (ty == 'fadeout') ? 0.1 : 0.1; function prc(o, id) {try{_gO = _getComputedStyle(o); switch (ty) {case 'fadein': _s = _s - 0.02; if (_gO <= 0) {_clearInterval(id) } else {o.style.opacity = _s; (_s <= 0) ? _clearInterval(id): ''} break; case 'fadeout': _s = _s + 0.01; if (_gO >= 1) {_clearInterval(id) } else {o.style.opacity = _s; (_s >= 1) ? _clearInterval(id): ''} } }catch(e) {_writeLog("Debug Animate ->"+e); } } function rd(o, id) {id = setInterval($ => {prc(o, id) }, spd); return id } if (this.__ty__ == !1) {_clearInterval(id); rd(this.getObj, id); } else if (this.__ty__ == 1 || this.__ty__ == null) {if (this.index===undefined) {for (var i = 0; i < this._gLe(); i++) {_clearInterval(id); rd(this.getObj[i], id); } }else{if (this.index > this._gLe()) {return; } var el = this.getObj[this.index]; _clearInterval(id); rd(el, id); } } } setChecked(a) { if (this.__ty__ == !1) { var x; if (a === undefined) { x = !0 } else { x = a ? !0 : !1 } this.getObj.checked = x } else if (this.__ty__ == !0 || this.__ty__ == null) { var x; if (a === undefined) { x = !0 } else { x = a ? !0 : !1 } if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].checked = x } } else { if (this.index > this._gLe()) { return } this.getObj[this.index].checked = x } } } get gData() { return this.data } _tS(L, _HH, oOo) { if (_HH.single) { try { var _HH = _HH.single; var _km = L, xl = (L === 'x') ? 1 : L, dd = new Array(), ii = 0; for (var k in _HH) { var v = _HH[k]; k = k.toString(); v = v.toString(); dd[ii] = { k, v }; ii++ } var obj, tt; for (var i = 0; i < xl; i++) { if (xl == 0) { return !1 } if (_km === 'x') { obj = oOo; tt = obj.innerHTML } else if (xl > 0) { obj = oOo[i]; tt = obj.innerHTML } for (var j = 0; j < dd.length; j++) { var _k = _config_.sSingle + dd[j].k + _config_.sSingle, _v = dd[j].v; tt = tt._replace(_k, _v) } obj.innerHTML = tt } } catch (e) { _writeLog("Debug Syntax Templating [Single Data] : " + e.toString()) } } else if (_HH.multi) { try { var _km = L, xl = (L === 'x') ? 1 : L; for (var dd = 0; dd < xl; dd++) { var hU; if (_km === 'x') { hU = oOo.innerHTML } else { var _oKx = oOo[dd], hU = _oKx.innerHTML } var s = hU.search(_config_.sMultiS), e = hU.search(_config_.sMultiE), pp_html = hU.substring(s, (e + _config_.sMultiE.length)); var rH = pp_html._replace(_config_.sMultiS, ''); rH = rH._replace(_config_.sMultiE, ''); var _GG = _HH.multi, $Arr = new Array(), ii = 0; for (var k in _GG) { var nk = _GG[k], jj = 0; for (var l in nk) { $Arr[jj] = l; jj++; if (jj == jj.length) { continue } } if (ii == 1) { continue } ii++ } var pH = '', pPp = '', _kL = $Arr.length; for (var m = 0; m < _GG.length; m++) { var XC = ''; for (var nn = 0; nn < _kL; nn++) { var kk = $Arr[nn] ? $Arr[nn] : '', vv = _GG[m][kk]; if (nn == 0) { XC = rH._replace(_config_.sSingle + kk + _config_.sSingle, vv) } else { XC = XC._replace(_config_.sSingle + kk + _config_.sSingle, vv) } } pPp += XC } pH = pPp; if (_km === 'x') { oOo.innerHTML = pH } else { oOo[dd].innerHTML = pH } } } catch (e) { _writeLog("Debug Syntax Templating [Multi Data] : " + e.toString()) } } } __gAeL() { var o = __gEt(_config_.all); return (this.index != undefined) ? o[this.index] : o } insertContent(v) { if (v) { if (this.__ty__ == !1) { var x = this.getObj.innerHTML; this.getObj.innerHTML = x + v } else if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { var x = this.getObj[i].innerHTML; this.getObj[i].innerHTML = x + v } } else { if (this.index > this._gLe()) { return } var x = this.getObj[this.index].innerHTML; this.getObj[this.index].innerHTML = x + v } } } } replaceContent(d) { if (d) { var k = d.key ? d.key : '', v = d.value ? d.value : ''; if (this.__ty__ == !1) { var x = this.getObj.innerHTML; x = x._replace(k, v); this.getObj.innerHTML = x } else if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { var x = this.getObj[i].innerHTML; x = x._replace(k, v); this.getObj[i].innerHTML = x } } else { if (this.index > this._gLe()) { return } var x = this.getObj[this.index].innerHTML; x = x._replace(k, v); this.getObj[this.index].innerHTML = x } } } } findInContent(a) { if (this.__ty__ == !1) { var x = this.getObj.innerHTML; return x.search(a) == -1 ? !1 : x.search(a) } else { return undefined } } duplicateContent() { if (this.__ty__ == !1) { var x = this.getObj.innerHTML; this.getObj.innerHTML = x + x } else if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { var x = this.getObj[i].innerHTML; this.getObj[i].innerHTML = x + x } } else { if (this.index > this._gLe()) { return } var x = this.getObj[this.index].innerHTML; this.getObj[this.index].innerHTML = x + x } } } copy() { if (this.__ty__ == !1) { if (this.getObj.value && this.getObj.value.length > 0) { this.getObj.select(); _copy() } } } select(d) { if (this.__ty__ == !1) { if (this.getObj.value && this.getObj.value.length > 0) { let s = 0, e = this.getObj.value.length, c = undefined; if (d) { s = d.start ? d.start : 0; e = d.end ? d.end : e; c = d.copy ? d.copy : !1 } this.getObj.focus(); this.getObj.setSelectionRange(s, e); (c) ? _copy(): '' } } } _gAt(c) { if (this.__ty__ == !0) { if (this.index === undefined) { var d = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) { d[i] = this.getObj[i].getAttribute(this.attr) } return JSON.stringify(d) } else { var i = this.index; if (this.getObj[i] === undefined) { return null } return this.getObj[i].getAttribute(this.attr) } } else if (this.__ty__ == !1) { return (this.attr != null && this.getObj != null) ? this.getObj.getAttribute(this.attr) : null } } delete() { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].outerHTML = '' } } else { if (this.index > this._gLe()) { return } this.getObj[this.index].outerHTML = '' } } else if (this.__ty__ == !1) { this.getObj.outerHTML = '' } } disabled() { this.setAttr({ key: 'disabled' }) } enabled() { this.removeAttr('disabled') } setContent(n) { var ct = (n === undefined) ? '' : n; if (_whatThis(ct) === 'object') { if (this.getObj) { var L = this.getObj.length; (L === undefined) ? this._tS('x', ct, this.getObj): this._tS(L, ct, this.getObj) } } else { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].innerHTML = ct } } else { return (this.index > this._gLe()) ? null : this.getObj[this.index].innerHTML = ct } } else if (this.__ty__ == !1) { this.getById().innerHTML = ct } } } clearContent(i) { if (this.__ty__ == !0 || this.__ty__ == null) { if (i === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].innerHTML = '' } } else { return (i > this._gLe()) ? null : this.getObj[i].innerHTML = '' } } else if (this.__ty__ == !1) { this.getById().innerHTML = '' } } getAttr() { return this._gAt() } removeAttr(d) { var aT; if (d) { aT = d ? d : this.aT } if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].removeAttribute(aT) } } else { if (this.getObj[this.index] === undefined || this.index > this._gLe()) { return null } this.getObj[this.index].removeAttribute(aT) } } else if (this.__ty__ == !1) { this.getObj.removeAttribute(aT) } } setAttr(d) { var k, v; if (d) { k = d.key ? d.key : undefined; v = d.value ? d.value : '' } else { k = this.attr; v = '' } if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) {(this.getObj[i] != null) ? this.getObj[i].setAttribute(k, v): null } } else { if (this.index > this._gLe()) { return null }(this.getObj[this.index] != null) ? this.getObj[this.index].setAttribute(k, v): null } } else if (this.__ty__ == !1) {(this.getObj != null) ? this.getObj.setAttribute(k, v): null } } getById() { if (this.o === undefined) { return undefined } if (_whatThis(this.o) === 'object') { this.__ty__ = 'o'; return this.o } this.o = this.o.trim(); if (this.o.substring(0, 1) === '{') { if (this.o.substring(this.o.length - 1, this.o.length) === '}') { this.__ty__ = !1; var x = this.o.substring(1, this.o.length - 1); return __dQ(x) } } else if (this.o.substring(0, 1) === _config_.class) { var x = (this.o.substring(1, this.o.length)); this.__ty__ = !0; return (x != undefined) ? __gEc(x) : undefined } else if (this.o.substring(0, 1) === _config_.tag) { this.__ty__ = null; var x = (this.o.substring(1, this.o.length)); return (x != undefined) ? __gEt(x) : undefined } else { if (__gEi(this.o)) { this.__ty__ = !1; return __gEi(this.o) } else { this.__ty__ = undefined; return undefined } } } _gLe() { return this.getObj ? this.getObj.length : undefined } get getLength() { return this._gLe() } setUrl(x) { x ? this.url = x : '' } setImage(x) { x ? this.im = x : '' } _gh() { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { var data = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) { data[i] = __ouH(this.getObj[i]) } return JSON.stringify(data) } else { return (this.index > this._gLe()) ? null : (__ouH(this.getObj[this.index])) } } else if (this.__ty__ == !1) { if (this.o === undefined || this.getById() == null) { return undefined } return (__ouH(this.getById())) } } hide() { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) {(this.getObj[i] === undefined) ? undefined: __sH_(this.getObj[i]) } } else { if (this.index > this._gLe()) { return null } __sH_(this.getObj[this.index]) } } else if (this.__ty__ == !1) { return (this.getObj === undefined) ? undefined : __sH_(this.getObj) } } show() { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) {(this.getObj[i] === undefined) ? undefined: this.getObj[i].removeAttribute('style') } } else { if (this.index > this._gLe()) { return null } this.getObj[this.index].removeAttribute('style') } } else if (this.__ty__ == !1) { return (this.getObj === undefined) ? undefined : this.getObj.removeAttribute('style') } } _gc() { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { var data = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) { data[i] = __inH(this.getObj[i]) } return JSON.stringify(data) } else { return (this.index > this._gLe()) ? null : __inH(this.getObj[this.index]) } } else if (this.__ty__ == !1) { if (this.o === undefined || this.getById() == null) { return undefined } return (__inH(this.getById())) } } __gt() { return this.__ty__ } _gbh() { return __inH(__d.body) } _gbhh() { return __ouH(__d.body) } get getAllElement() { return this.__gAeL() } get getType() { return this.__gT } get getObj() { return this.getById() } get getContent() { return this._gc() } get getHtml() { return this._gh() } get getBody() { return this._gbh() } get getBodyAll() { return this._gbhh() } get getClass() { return __gQc(this.cl) } get getContentByTagName() { return this._gCbTn() } loadImage(e) { var xx = (e === undefined) ? this.im : e; if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].src = xx } } else { if (this.index > this._gLe()) { return null } this.getObj[this.index].src = xx } } else if (this.__ty__ == !1) { this.getObj.src = xx } } addToTable(data) { if (this.__ty__ == !1) { var iq = _randomStr(9); let r = _$html.ttO + iq + '">'; let cc = this.getObj.innerHTML.trim(); if (data === undefined) { return null } if (_isArray(data)) { for (var i = 0; i < data.length; i++) { r += _$html.tO + data[i] + _$html.tC } var es = cc + r + _$html.ttC; this.getObj.innerHTML = es; return JSON.stringify({ data: es, id: iq }) } } } addNewChild(i) { if (i) { if (this.__ty__ == !1) { var p = __cE_(i.type ? i.type : 'p'), n = __cN_(i.text ? i.text : ''); p.appendChild(n); var e = this.getObj; var c = __gEi(i.id ? i.id : undefined); e.insertBefore(p, c) } } } _gCbTn() { var x = __gEt(this.tg); if (this.index != undefined) { return JSON.stringify({ innerHTML: __inH(x[this.index]), outerHTML: __ouH(x[this.index]) }) } else { var d = new Array(x.length); for (var i = 0; i < x.length; i++) { d[i] = { innerHTML: __inH(x[i]), outerHTML: __ouH(x[i]) } } return JSON.stringify(d) } } } class _$i$_ extends _$o$_ { setValue(n) { var rp = (n === undefined) ? this.v : n; if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].value = rp } } else { if (this.index > this._gLe() || this.index === undefined) { return undefined } this.getObj[this.index].value = rp } } else if (this.__ty__ == !1) { return (this.getById() == null) ? undefined : this.getById().value = rp } } focus() { if (this.__ty__ == !0) { var ii = (this.index === undefined) ? 0 : this.index; if (ii > this._gLe()) { return undefined } if (this.index != undefined || this.index > this._gLe()) { this.getObj[this.index].focus() } } else if (this.__ty__ == !1) { return (this.getById() == null) ? undefined : this.getById().focus() } } clearValue() { if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { this.getObj[i].value = '' } } else { if (this.index > this._gLe || this.index === undefined) { return undefined } this.getObj[this.index].value = '' } } else if (this.__ty__ == !1) { return (this.getById() == null) ? undefined : this.getById().value = '' } } get getValue() { return this._gv() } _gv() { if (this.__ty__ == !0 || this.__ty__ == null) {if (i === undefined) { var data = new Array(this._gLe()); for (var i = 0; i < this._gLe(); i++) { data[i] = (this.getObj[i].value) ? this.getObj[i].value.trim() : undefined } return JSON.stringify(data) } else { return (this.index > this._gLe()) ? undefined : (this.getObj[this.index].value) } } else if (this.__ty__ == !1) {return (this.getById() == null) ? undefined : (this.getById().value) ? this.getById().value.trim() : null } } } class _$a$_ extends _$i$_ { request(fu, er) { var mm, uF = this.url, pU = null; var __ = this.mA === undefined ? 'get' : this.mA; switch (__.toLowerCase()) {case 'get': mm = 'GET'; break; case 'post': var i = 0; mm = 'POST'; for (var key in this.dA) { if (key === 'length' || !this.dA.hasOwnProperty(key)) { continue } var vL = this.dA[key]; (i == 0) ? pU = key + '=' + vL: pU += '&' + key + '=' + vL; i++ } break; case 'put': mm = 'PUT'; break; case 'delete': mm = 'DELETE'; break; default: mm = 'GET' } var x = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp'); x.onreadystatechange = function() { if (fu != undefined) {(this.readyState == 4 && this.status == 200) ? fu(this.responseText, this.readyState, this): '' } }; x.onerror = function() { er ? er(this.readyState) : '' }; x.open(mm, uF, !0); var hh = (this.sA) ? (this.sA.header) : _config_.header; x.setRequestHeader('Content-Type', hh); try { x.send(pU) } catch (e) { _writeLog("request ->" + e) } } } class _$e$_ extends _$a$_ { when(d, cb) { if (d) { if (this.__ty__ == !1) { if (this.getObj) {((cb != undefined) && _isFunction(cb)) ? this.getObj.addEventListener(d, cb): !1 } } else if (this.__ty__ == !0 || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { if (this.getObj[i]) {((cb != undefined) && _isFunction(cb)) ? this.getObj[i].addEventListener(d, cb): !1 } } } else { if (this.index > this._gLe()) { return !1 } if (this.getObj[this.index]) {((cb != undefined) && _isFunction(cb)) ? this.getObj[this.index].addEventListener(d, cb): !1 } } } } } get __HV__() { var res = { html: this.getContent, value: this.getValue }; return JSON.stringify(res) } } class _$gg$_ extends _$e$_ { print(d) { try { var wW = (d === undefined) ? 500 : (d.width) ? d.width : 500, hH = (d === undefined) ? 500 : (d.height) ? d.height : 500, tT = (d === undefined) ? '&nbsp' : (d.title) ? d.title : '&nbsp'; var pp; if (this.__ty__ == true) { var dt = ''; for (var i = 0; i < this._gLe(); i++) { dt += (this.getObj[i].outerHTML) ? this.getObj[i].outerHTML.trim() : null; } pp = dt; } else if (this.__ty__ == false) { pp = (d === undefined) ? this.getContent : (d.outer) ? this.getObj.outerHTML.trim() : this.getContent; } let wn = window.open('', 'PRINT', 'height=' + hH + ',width=' + wW); wn.document.write('<html><head><title>' + tT + '</title>'); wn.document.write('</head><body >'); wn.document.write(pp); var ft = ''; if (d) { if (d.footer) { ft = '<footer>' + d.ft + '</footer>'; } } wn.document.write('</body>' + ft + '</html>'); wn.document.close(); wn.focus(); wn.print(); wn.close(); } catch (e) { _writeLog("print->" + e); } } importScript(fu, t) { var scr = __d.createElement('script'); scr.type = 'text/javascript'; if (scr.readyState) { scr.onreadystatechange(function() { if (scr.readyState == 'loaded' || scr.readyState == 'complete') {(fu === undefined) ? undefined: fu(); scr.onreadystatechange = null; } }); } else { scr.onload = function() {(fu === undefined) ? undefined: fu(); }; } scr.src = this.url; (t === undefined) ? __d.getElementsByTagName('head')[0].appendChild(scr): this.setContent(scr); } previewImage(d, fu) { if (d) { if (__gEi(this.o) == undefined) { return null; } let _oI = _whatThis(d) === 'string' ? __gEi(d) : d; if (_whatThis(d) === 'string' && d.substring(0, 1) === '#') { try { __gEi(this.o).onchange = function() { var r = new FileReader(); r.onload = function(e) { let o_to = d.substring(1, d.length); var nO = __gEc(o_to); for (var i = 0; i < nO.length; i++) { nO[i].src = ''; nO[i].src = e.target.result; } }; r.onerror = function(e) {(fu != undefined && _isFunction(fu)) ? fu: ''; }; r.readAsDataURL(this.files[0]); }; } catch (e) { _writeLog(e); } } else { wE(__gEi(this.o), _oI); } } function wE(a, b) { try { a.onchange = function() { let r = new FileReader(); r.onload = function(e) { b.src = e.target.result; }; r.onerror = function(e) {(fu != undefined && _isFunction(fu)) ? fu: ''; }; r.readAsDataURL(this.files[0]); }; } catch (e) { _writeLog(e); } } } key(fc, kx) { var kc = (this.kC === undefined) ? kx : this.kC; if (_isFunction(fc)) { if (this.getObj == null) { return null; } this.getObj.addEventListener('keydown', function(e) { if (e.keyCode == kc) { fc(); } }, true); } } getSelected() { return JSON.stringify({ value: this.getObj.options[this.getObj.selectedIndex].value, text: this.getObj.options[this.getObj.selectedIndex].text }); } } class __g extends _$gg$_ { drawText(d) { if (d) { var c, ff = '30px Arial'; if (this.__ty__ == true || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { c = __gCnt(this.getObj[i]); c.font = (d.font) ? d.font : ff; var txt = (d.text) ? d.text : '', x = (d.x) ? d.x : 50, y = (d.y) ? d.y : 50; c.strokeText(txt, x, y); } } else { if (this.index > this._gLe()) { return null; } c = __gCnt(this.getObj[this.index]); c.font = (d.font) ? d.font : ff; var txt = (d.text) ? d.text : '', x = (d.x) ? d.x : 50, y = (d.y) ? d.y : 50; c.strokeText(txt, x, y); } } else if (this.__ty__ == false) { c = __gCnt(this.getObj); c.font = (d.font) ? d.font : ff; var txt = (d.text) ? d.text : '', x = (d.x) ? d.x : 50; y = (d.y) ? d.y : 50; c.strokeText(txt, x, y); return c; } } } clearCanvas() { if (this.__ty__ == true || this.__ty__ == null) { if (this.index === undefined) { for (var i = 0; i < this._gLe(); i++) { var ct = __gCnt(this.getObj[i]); ct.clearRect(0, 0, this.getObj[i].width, this.getObj[i].height); } } else { if (this.index > this._gLe()) { return null; } var ct = __gCnt(this.getObj[this.index]); ct.clearRect(0, 0, this.getObj[i].width, this.getObj[i].height); } } else { var ct = __gCnt(this.getObj); ct.clearRect(0, 0, this.getObj[i].width, this.getObj[i].height); } } drawImage(d) { if (d) { if (this.__ty__ == true || this.__ty__ == null) { if (this.index == undefined) { for (var i = 0; i < this._gLe(); i++) { var ca = __gCnt(this.getObj[i]), img = undefined; if (d.image) { img = _isUrl(d.image) ? new Image : __gEi(d.image); } if (img != undefined) { var x = (d.x) ? d.x : 0, y = (d.y) ? d.y : 0; try { if (_isUrl(d.image)) { img.onload = function() { ca.drawImage(img, x, y); }; img.src = d.image; } else { ca.drawImage(img, x, y); } } catch (e) { _writeLog(e); } } } } else { if (this.index > this._gLe()) { return null; } var ca = __gCnt(this.getObj[this.index]), img = undefined; if (d.image) { img = _isUrl(d.image) ? new Image : __gEi(d.image); } if (img != undefined) { var x = (d.x) ? d.x : 0, y = (d.y) ? d.y : 0; try { if (_isUrl(d.image)) { img.onload = function() { ca.drawImage(img, x, y); }; img.src = d.image; } else { ca.drawImage(img, x, y); } } catch (e) { _writeLog(e); } } } } else if (this.__ty__ == false) { var ca = __gCnt(this.getObj), img = undefined; if (d.image) { img = _isUrl(d.image) ? new Image : __gEi(d.image); } if (img != undefined) { var x = (d.x) ? d.x : 0, y = (d.y) ? d.y : 0; try { if (_isUrl(d.image)) { img.onload = function() { ca.drawImage(img, x, y); }; img.src = d.image; } else { ca.drawImage(img, x, y); } } catch (e) { _writeLog(e); } return ca; } } } } } let __ = function(d) { return (d) ? new __g(d) : undefined; }; function _required() { for (var i = 0; i < arguments.length; ++i) { if (arguments[i].getValue === '' || arguments[i].getValue == null) { arguments[i].focus(); return false; break; } } return true; } function _a(v) {(v) && alert(v); } function _printTo(d) { if (d) { var el = (d.el) ? (d.el) : undefined; if (el != undefined) { if (el.substring(0, 1) === '#') { var i = (d.index) ? d.index : undefined; let o = __gEc(el.substring(1, el.length)); if (i != undefined) { if (i > o.length) { return null; }(d.html) ? o[i].innerHTML = d.html: ''; } else { for (var i = 0; i < o.length; i++) {(d.html) ? o[i].innerHTML = d.html: ''; } } } else { if (__gEi(el)) {(d.html) ? __gEi(el).innerHTML = d.html: ''; } } } } }; function _goTo(u) {(u) && window.location.assign(u); } function _charToDec(s) { if (s) { if (s.length > 0) { var d = []; for (var i = 0; i < s.length; i++) { d[i] = s[i].charCodeAt(0); } return d; } else { return s.charCodeAt(0); } } } function _decToChar(s) { if (s === undefined) { return null; } if (_isArray(s)) { var d = []; for (var i = 0; i < s.length; i++) { d[i] = String.fromCharCode(s[i]); } return d; } else { return String.fromCharCode(s); } } function _setCookie(d) { if (d) { var key = (d.key) ? d.key : '', time = (d.time) ? d.time : 1, value = (d.value) ? d.value : ''; __dt.setTime(__dt.getTime() + (time * 24 * 60 * 60 * 1000)); var e = 'expires=' + __dt.toUTCString(); document.cookie = key + '=' + value + ';' + e + ';path=/'; } } function _deleteCookie(k) { if (k) { document.cookie = k + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; } } function _getCookie(k) { var a = document.cookie; var s = a.split(';'); if (k) { var res = undefined; for (var i = 0; i < s.length; i++) { if (s[i].indexOf(k) != -1) { res = s[i]; continue; } } return (res === undefined) ? undefined : res.replace(k + '=', '').trim(); } else { return s; } } function _onScroll(f) { window.onscroll = function() { var v = __dEe().scrollTop; (f) ? f(v): undefined; }; } function _scrollTo(d) { if (d.el) { var o = (d.el), sY = _cY(), tY = _e(o), ds = tY > sY ? tY - sY : sY - tY; if (ds < 100) { scrollTo(0, tY); return; } var sp = Math.round(ds / 100); if (sp >= 20) sp = 20; var step = Math.round(ds / 25), lE = tY > sY ? sY + step : sY - step, t = 0; if (tY > sY) { for (var i = sY; i < tY; i += step) { setTimeout("window.scrollTo(0, " + lE + ")", t * sp); lE += step; if (lE > tY) lE = tY; t++; } return; } for (var i = sY; i > tY; i -= step) { setTimeout("window.scrollTo(0, " + lE + ")", t * sp); lE -= step; if (lE < tY) lE = tY; t++; } } else { var x = (d.x) ? d.x : 0, y = (d.y) ? d.y : 0; window.scrollTo(x, y); } function _cY() { if (self.pageYOffset) { return self.pageYOffset; } if (__dEe() && __dEe().scrollTop) { return __dEe().scrollTop; } if (document.body.scrollTop) { return document.body.scrollTop; return 0; } } function _e(eID) { var elm = __gEi(eID), y = elm.offsetTop, node = elm; while (node.offsetParent && node.offsetParent != document.body) { node = node.offsetParent; y += node.offsetTop; } return y; } } function __instanceOf(t, e) { return (t instanceof e) ? true : false; } function _allowNotif(f) { document.addEventListener('DOMContentLoaded', $ => { if (!Notification) { f ? f() : ''; return; } Notification.permission != 'granted' ? Notification.requestPermission() : ''; }); } function _createNotif(d, cl) { _allowNotif(); if (d) { let ti = d.title ? d.title : '', ic = d.icon ? d.icon : 'https://goo.gl/YLVUoc', bb = d.body ? d.body : '', ss = d.sound ? d.sound : '', vv = d.vibrate ? d.vibrate : '', dd = d.data ? d.data : ''; let nt = new Notification(ti, { icon: ic, body: bb, sound: ss, vibrate: vv, data: dd }); nt.onclick = function() { cl ? cl() : ''; return nt; }; } } function _eL(a, b, c, d) { if (a) { a.addEventListener(c, function() { var bb = a.value ? a.value : ''; if (d == true) { if (__gEi(b)) { __gEi(b).innerHTML = bb; } } else if (d == false) { var k = __qSa("*." + b); if (k) { for (var i = 0; i < k.length; i++) { k[i].innerHTML = bb; } } } }); } } function __dQ(x) { return x ? document.querySelector(x) : undefined; } function _filterBadWord(d) { if (d) { let t = d.text ? d.text : '', p = d.dic ? d.dic : _bW, f = d.filter ? d.filter : '***'; for (let x = 0; x < p.length; x++) { let a = p[x].toLowerCase(), b = t.search(a); t = (b != -1) ? t._replace(a, f) : t; } return t; } } let _garuda, _GF, _$ = __; let _me, _this; function Garuda(i) { if (i) { return __({ el: i }); } } document.addEventListener('DOMContentLoaded', function() { ___1a(); }); function ___1a() { if (_me === undefined) { __gEi(_cK_.gAp) ? _me = __({ el: _cK_.gAp }) : ''; __gEi(_cK_.gH) ? _this = __({ el: _cK_.gH }) : ''; } if (__r2N === undefined) { var oo = __qSa('[' + _cK_.ku + ']'), pp = __qSa('[' + _cK_.kd + ']'), mm = __qSa(_cK_.gA), oo = __qSa(_cK_.gR), nn = __qSa(_cK_.gT); if (oo) { for (var i = 0; i < oo.length; i++) { var cH = oo[i].getAttribute(_cK_.ku); if (cH != null) var xd = cH.charAt(0); if (xd === '#') { cH = cH.substring(1, cH.length); _eL(oo[i], cH, 'keyup', false); } else { _eL(oo[i], cH, 'keyup', true); } } } if (pp) { for (var i = 0; i < pp.length; i++) { var cH = pp[i].getAttribute(_cK_.kd); if (cH != null) var xd = cH.charAt(0); if (xd === '#') { cH = cH.substring(1, cH.length); _eL(pp[i], cH, 'keydown', false); } else { _eL(pp[i], cH, 'keydown', true); } } } if (oo) { for (var i = 0; i < oo.length; i++) { let z = oo[i].innerHTML ? oo[i].innerHTML : '', a = oo[i].getAttribute('display') ? oo[i].getAttribute('display') : undefined; if (a === 'false') { oo[i].innerHTML = ''; } try { z ? eval(z) : ''; } catch (e) { _writeLog("Debug Render Code " + e); } } } if (mm) { let _xp = 'content'; for (var i = 0; i < mm.length; i++) { let z = mm[i].innerHTML ? mm[i].innerHTML : '', a = mm[i].getAttribute(_xp) ? mm[i].getAttribute(_xp) : undefined; if (a != undefined) { let p = z._replace('#' + _xp + '#', a); mm[i].innerHTML = p; } } } if (nn) { let _xp = 'length'; for (var i = 0; i < nn.length; i++) { let z = nn[i].innerHTML ? nn[i].innerHTML : '', a = nn[i].getAttribute(_xp) ? nn[i].getAttribute(_xp) : 25; let p = z._replace('#token#', _randomStr(a)); nn[i].innerHTML = p; } } __r2N = true; } } function _documentReady(b, a) { window.onload = function(a) { if (_me === undefined) { __gEi(_cK_.gAp) ? _me = __({ el: _cK_.gAp }) : ''; __gEi(_cK_.gH) ? _this = __({ el: _cK_.gH }) : ''; } b ? b(a) : ''; }; window.onerror = function(e) { a ? a(e) : ''; }; } class GarudaInput {constructor(o) {if (o) { this.o = o ? o : undefined; } } } GarudaInput.prototype.set = function(t){var o = this.o; t = t.toLowerCase(); switch (t) {case 'enabled': for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).enabled() : ''; } else {o[i].getObj ? o[i].enabled() : ''; } } break; case 'disabled': for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).disabled() : ''; } else {o[i].getObj ? o[i].disabled() : ''; } } break; case 'clear': for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).clearValue() : ''; } else {o[i].getObj ? o[i].clearValue() : ''; } } break; case 'hide': for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).setAttr({key: 'style', value: 'display: none'}) : ''; } else {o[i].getObj ? o[i].setAttr({key: 'style', value: 'display: none'}) : ''; } } break; case 'show': for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).setAttr({key: 'style', value: 'display: block'}) : ''; } else {o[i].getObj ? o[i].setAttr({key: 'style', value: 'display: block'}) : ''; } } break; case 'delete': for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).delete() : ''; } else {o[i].getObj ? o[i].delete() : ''; } } break; case 'readonly' : for (var i = 0; i < o.length; i++) {if (_whatThis(o[i]) === 'string') {__gEi(o[i]) ? Garuda(o[i]).setAttr({key: 'readonly', value: ''}) : ''; } else {o[i].getObj ? o[i].setAttr({key: 'readonly', value: ''}) : ''; } } default: break; } return this; } function _doWhen(d) { if (d) { let a = d.keycode ? d.keycode : undefined, b = d.callback ? d.callback : undefined, c = d.el ? d.el : document; c.addEventListener('keydown', function(e) { if (a != undefined || b != undefined) {(e.keyCode == a) ? b(): ''; } }, true); } }

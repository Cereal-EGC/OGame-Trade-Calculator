// ==UserScript==
// @name           OGame Trade Calculator
// @description    Adds a trade calculator to the OGame interface
// @namespace      http://userscripts.org/users/68563/scripts
// @downloadURL    https://userscripts.org/scripts/source/151002.user.js
// @updateURL      https://userscripts.org/scripts/source/151002.meta.js
// @version        2.1.0
// @include        *://*.ogame.*/game/index.php?*page=*
// ==/UserScript==
/*! OGame Trade Calculator (C) 2012 Elías Grande Cásedas | GNU-GPL | gnu.org/licenses */
(function(){var o={ID_PREFIX:"o_trade_calc_",NAME:"OGame Trade Calculator",HOME_URL:"http://userscripts.org/scripts/show/151002",TESTED_OGAME_VERSION:"5.2.0-beta1"};var k=window,q,i;try{if(unsafeWindow){k=unsafeWindow}}catch(l){}q=k.document;i=k.jQuery;i.getScript("/cdn/js/greasemonkey/version-check.js",function(){k.oGameVersionCheck(o.NAME,o.TESTED_OGAME_VERSION,o.HOME_URL)});
/*! jCaret (C) 2010 C. F. Wong | cloudgen.w0ng.hk | www.opensource.org/licenses/mit-license.php */
(function(s,e,r,t){s.fn.caret=function(I,E){var v,y,G=this[0],A=s.browser.msie;if(typeof I==="object"&&typeof I.start==="number"&&typeof I.end==="number"){v=I.start;y=I.end}else{if(typeof I==="number"&&typeof E==="number"){v=I;y=E}else{if(typeof I==="string"){if((v=G.value.indexOf(I))>-1){y=v+I[e]}else{v=null}}else{if(Object.prototype.toString.call(I)==="[object RegExp]"){var F=I.exec(G.value);if(F!=null){v=F.index;y=v+F[0][e]}}}}}if(typeof v!="undefined"){if(A){var B=this[0].createTextRange();B.collapse(true);B.moveStart("character",v);B.moveEnd("character",y-v);B.select()}else{this[0].selectionStart=v;this[0].selectionEnd=y}this[0].focus();return this}else{if(A){var D=document.selection;if(this[0].tagName.toLowerCase()!="textarea"){var w=this.val(),z=D[r]()[t]();z.moveEnd("character",w[e]);var H=(z.text==""?w[e]:w.lastIndexOf(z.text));z=D[r]()[t]();z.moveStart("character",-w[e]);var C=z.text[e]}else{var z=D[r](),u=z[t]();u.moveToElementText(this[0]);u.setEndPoint("EndToEnd",z);var H=u.text[e]-z.text[e],C=H+z.text[e]}}else{var H=G.selectionStart,C=G.selectionEnd}var x=G.value.substring(H,C);return{start:H,end:C,text:x,replace:function(J){return G.value.substring(0,H)+J+G.value.substring(C,G.value[e])}}}}})(i,"length","createRange","duplicate");
/*! [/jCaret] */
String.prototype.replaceAll=function(e,r){return this.split(e).join(r)};String.prototype.recursiveReplaceMap=function(u,t,r){if(r==0){return this.split(u[0]).join(t[0])}var s,e=this.split(u[r]);for(s in e){e[s]=e[s].recursiveReplaceMap(u,t,r-1)}return e.join(t[r])};String.prototype.replaceMap=function(e){var r,u,t,s;u=new Array();t=new Array();s=0;for(r in e){u.push(r);t.push(e[r]);s++}if(s==0){return this}else{return this.recursiveReplaceMap(u,t,s-1)}};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var b=({info:{RAT_MAX:[5,3,1],RAT_REG:[3,2,1],RAT_MIN:[2,1.5,1]},getMeta:function(r,s){try{return i('meta[name="'+r+'"]').attr("content")}catch(t){if(arguments.length>1){return s}else{return null}}},getResource:function(s){var e={NAME:"",AMOUNT:0,getName:function(u){var t=this.NAME+"";b[u]=this.AMOUNT+0;return t}};var r=i("#"+s).attr("title");e.NAME=r.split(":").shift();e.AMOUNT=parseInt(r.split("/tr").shift().replace(/\D/g,""));return e},init:function(){this.info.LANGUAGE=this.getMeta("ogame-language","");this.info.RES_MET=this.getResource("metal_box");this.info.RES_CRY=this.getResource("crystal_box");this.info.RES_DEU=this.getResource("deuterium_box");return this.info}}).init();var a={
/*! [colors] */
MET:"#FF7700",CRY:"#00FFFF",DEU:"#FF33FF"
/*! [/colors] */
};var p=({text:{RES_MET:b.RES_MET.getName("RES_MET"),RES_CRY:b.RES_CRY.getName("RES_CRY"),RES_DEU:b.RES_DEU.getName("RES_DEU")},set:function(e,r){if(e.test(b.LANGUAGE)){i.extend(true,this.text,r)}return this}}
/*! [i18n=EN] */
).set(/.*/,{THO_SEP:",",DEC_SEP:".",MENU:"Trace C.",TITLE:"Trade calculator",ACTION:"Action",BUY:"I buy",SELL:"I sell",RATIO:"Ratio",ILLEGAL:"illegal",IN_EXCH:"In exchange for",RESULT:"Result",MESSAGE:"Message",WHERE:"Place of delivery",PLANET:"Planet",MOON:"Moon",CUR_PLA:"Current planet",MAX:"Maximum",REG:"Regular",MIN:"Minimum"}
/*! [i18n=ES] */
).set(/es|ar|mx/,{THO_SEP:".",DEC_SEP:",",MENU:"C. Comercio",TITLE:"Calculadora de comercio",ACTION:"Acción",BUY:"Compro",SELL:"Vendo",RATIO:"Ratio",ILLEGAL:"ilegal",IN_EXCH:"A cambio de",RESULT:"Resultado",MESSAGE:"Mensaje",WHERE:"Lugar de entrega",PLANET:"Planeta",MOON:"Luna",CUR_PLA:"Planeta actual",MAX:"Máximo",REG:"Normal",MIN:"Mínimo"}
/*! [/i18n] */
).text;var f={formatI:function(t,r){if(arguments.length>1&&r&&t==""){return""}var s;if(typeof(t)=="string"){s=("0"+t+"").replace(/[kK]$/,"000").replace(/[mM]$/,"000000").replace(/\D/g,"").replace(/^0+(\d)/,"$1")}else{s=t.toFixed()+""}var e=/(\d+)(\d{3})/;while(e.test(s)){s=s.replace(e,"$1"+p.THO_SEP+"$2")}return s},formatF:function(w,u){if(arguments.length>1&&u&&w==""){return""}var v,e,t,r;if(typeof(w)=="string"){v=("0"+w+"").replace(/[\.\,]$/,p.DEC_SEP).replace(new RegExp("[^0-9\\"+p.DEC_SEP+"]","g"),"").replace(/^0+(\d)/,"$1")}else{v=(w+"").replace(".",p.DEC_SEP)}e=v.split(p.DEC_SEP);t=e[0];r=e.length>1?p.DEC_SEP+e[1]:"";if(v[v.length-1]==p.DEC_SEP&&arguments.length>1&&u){r=p.DEC_SEP}var s=/(\d+)(\d{3})/;while(s.test(t)){t=t.replace(s,"$1"+p.THO_SEP+"$2")}return t+r},parseI:function(e){return parseInt(e.split(p.THO_SEP).join(""))},parseF:function(e){return parseFloat(e.split(p.THO_SEP).join("").replace(p.DEC_SEP,"."))}};var h=({limits:[],isLegal:function(){var t;if(arguments.length==1){t=arguments[0]}else{t=[arguments[0],arguments[1],arguments[2]]}var s=t[0]/t[1],e=0;if(s<this.limits[e++]||s>this.limits[e++]){return false}s=t[0]/t[2];if(s<this.limits[e++]||s>this.limits[e++]){return false}s=t[1]/t[2];if(s<this.limits[e++]||s>this.limits[e++]){return false}return true},init:function(t,s){this.limits=[];var r=t[0]/t[1],e=s[0]/s[1];this.limits.push(Math.min(r,e));this.limits.push(Math.max(r,e));r=t[0]/t[2];e=s[0]/s[2];this.limits.push(Math.min(r,e));this.limits.push(Math.max(r,e));r=t[1]/t[2];e=s[1]/s[2];this.limits.push(Math.min(r,e));this.limits.push(Math.max(r,e));return this}}).init(b.RAT_MIN,b.RAT_MAX);delete h.init;var g=function(u,v,t,x,y,w,r,s,e){return{met:Math.round(((u+(v/y)*x+(t/w)*x)/100)*r),cry:Math.round((((u/x)*y+v+(t/w)*y)/100)*s),deu:Math.round((((u/x)*w+(v/y)*w+t)/100)*e)}};var n=({DEFAULT_TPL:
/*! [TPL=MESSAGE] */
"[b]{?b}{I18N.BUY}{/b}{?s}{I18N.SELL}{/s}:[/b] {?m}[b][color={COLOR.MET}]{m}[/color][/b] ({I18N.RES_MET}){?cd} + {/cd}{/m}{?c}[b][color={COLOR.CRY}]{c}[/color][/b] ({I18N.RES_CRY}){?d} + {/d}{/c}{?d}[b][color={COLOR.DEU}]{d}[/color][/b] ({I18N.RES_DEU}){/d}\n[b]{I18N.IN_EXCH}:[/b] {?M}[b][color={COLOR.MET}]{M}[/color][/b] ({I18N.RES_MET}){?CD} + {/CD}{/M}{?C}[b][color={COLOR.CRY}]{C}[/color][/b] ({I18N.RES_CRY}){?D} + {/D}{/C}{?D}[b][color={COLOR.DEU}]{D}[/color][/b] ({I18N.RES_DEU}){/D}\n\n[b]* {I18N.RATIO}:[/b] {rm}:{rc}:{rd}{?w}\n[b]* {I18N.WHERE}:[/b] {wg}:{ws}:{wp} ({wt}){/w}\n\n[b][url={SCRIPT.HOME_URL}]{SCRIPT.NAME}[/url][/b]",
/*! [/TPL] */
parseIf:function(w,x,e){var y="{?"+x+"}",t="{/"+x+"}";if(e){return w.split(y).join("").split(t).join("")}var v,u,r,s=w;while((v=s.indexOf(y))>=0&&(u=s.indexOf(t))>=0&&v<u){s=s.split(y);for(v=1;v<s.length;v++){r=s[v].split(t);if(r.length>1){r.shift();s[v]=t+r.shift()+r.join(t)}}s=s.join(y).split(y+t).join("")}return s},parseIfs:function(v,z){var u=v+"",t=v+"",B=/\{\?(\!?\w)+\}/,x,A,y,s,r;while(B.test(u)){x=(B.exec(u)+"").replace(/\}.*$/,"").replace(/^.*\{/,"");u=u.split("{"+x+"}").join("");try{x=x.replace(/[^\w\!]/g,"");if((r=x[y=0])=="!"){A=!z[++y]}else{A=z[r]}s=x.length-1;A=z[x[y]];while(y<s){if((r=x[++y])=="!"){A=(A||!z[++y])}else{A=(A||z[r])}}t=this.parseIf(t,x,A)}catch(w){alert(w)}}return t},make:function(x,r,e,w,t){var u,v=/[1-9]/,s=this.parseIfs(this.tpl,{b:(x=="buy"),s:(x=="sell"),m:v.test(r.met),c:v.test(r.cry),d:v.test(r.deu),M:v.test(e.met),C:v.test(e.cry),D:v.test(e.deu),w:(t!=null)});s=s.replaceMap({"{m}":r.met,"{c}":r.cry,"{d}":r.deu,"{M}":e.met,"{C}":e.cry,"{D}":e.deu,"{rm}":w.met,"{rc}":w.cry,"{rd}":w.deu,"{wg}":(t==null)?"":t.galaxy,"{ws}":(t==null)?"":t.system,"{wp}":(t==null)?"":t.planet,"{wt}":(t==null)?"":"{I18N."+(t.type+"").toUpperCase()+"}"});for(u in p){s=s.replaceAll("{I18N."+u+"}",p[u])}for(u in o){s=s.replaceAll("{SCRIPT."+u+"}",o[u])}for(u in a){s=s.replaceAll("{COLOR."+u+"}",a[u])}return s},init:function(){this.tpl=this.DEFAULT_TPL;return this}}).init();var j=({CSS:
/*! [CSS] */
"#"+o.ID_PREFIX+"window{float:left;position:relative;width:670px;overflow:visible;z-index:2;}#galaxy #"+o.ID_PREFIX+"window{top:-44px;}#"+o.ID_PREFIX+'header{height:28px;position: relative;background: url("http://gf1.geo.gfsrv.net/cdn63/10e31cd5234445e4084558ea3506ea.gif") no-repeat scroll 0px 0px transparent;}#'+o.ID_PREFIX+"header h4{height:28px;line-height:28px;text-align:center;color:#6F9FC8;font-size:12px;font-weight:bold;position:absolute;top:0;left:60px;right:60px;}#"+o.ID_PREFIX+'main{padding:15px 25px 0 25px;background: url("http://gf1.geo.gfsrv.net/cdn9e/4f73643e86a952be4aed7fdd61805a.gif") repeat-y scroll 5px 0px transparent;}#'+o.ID_PREFIX+"main *{font-size:11px;}#"+o.ID_PREFIX+"main table{width:620px;background-color:#0D1014;border-collapse:collapse;clear:both;}#"+o.ID_PREFIX+"main th{color:#FFF;text-align:center;font-weight:bold;}."+o.ID_PREFIX+"label,."+o.ID_PREFIX+"label *{color:grey;text-align:left;}."+o.ID_PREFIX+"label{padding:0 0 0 5px;font-weight:bold;}#"+o.ID_PREFIX+"main tr,#"+o.ID_PREFIX+"main td,#"+o.ID_PREFIX+"main th{height:28px;line-height:28px;}#"+o.ID_PREFIX+'main input[type="text"]{width:100px;text-align:center;}option.'+o.ID_PREFIX+"highlight{color:lime !important;font-weight:bold;}option."+o.ID_PREFIX+"moon{color:orange;}."+o.ID_PREFIX+"select{width:150px;text-align:left;}."+o.ID_PREFIX+"select select{width:130px;text-align:center;}#"+o.ID_PREFIX+"main option{padding:1px 5px 1px 5px;}."+o.ID_PREFIX+"input{width:112px;padding:0 1px 0 1px;text-align:right;}#"+o.ID_PREFIX+"ratio_illegal{color:red;}."+o.ID_PREFIX+"output{width:108px;text-align:center;font-weight:bold;}#"+o.ID_PREFIX+"output_met{color:"+a.MET+";}#"+o.ID_PREFIX+"output_cry{color:"+a.CRY+";}#"+o.ID_PREFIX+"output_deu{color:"+a.DEU+";}."+o.ID_PREFIX+"textarea{padding:0 3px 0 3px !important;}#"+o.ID_PREFIX+"message{width:601px;height:50px !important;margin:0 !important;}#"+o.ID_PREFIX+"planet{width:auto;text-align:left;margin:0;}."+o.ID_PREFIX+"select1row select{width:auto;text-align:left;margin:0;}#"+o.ID_PREFIX+'footer{height:17px;background: url("http://gf1.geo.gfsrv.net/cdn30/aa3e8edec0a2681915b3c9c6795e6f.gif") no-repeat scroll 2px 0px transparent;}',
/*! [/CSS] */
addCss:function(s){var r=q.createElement("style");r.setAttribute("type","text/css");if(r.styleSheet){r.styleSheet.cssText=s}else{r.appendChild(q.createTextNode(s))}var e=q.getElementsByTagName("head")[0];e.appendChild(r);return this},WINDOW_TPL:
/*! [TPL=WINDOW] */
'<div id="'+o.ID_PREFIX+'window"><div id="'+o.ID_PREFIX+'header"><h4>'+p.TITLE+'</h4><a id="'+o.ID_PREFIX+'close" href="javascript:void(0);" class="close_details close_ressources"></a></div><div id="'+o.ID_PREFIX+'main"><table cellspacing="0" cellpadding="0"><tbody><tr><th colspan="2"></th><th>'+p.RES_MET+"</th><th>"+p.RES_CRY+"</th><th>"+p.RES_DEU+'</th></tr><tr class="alt"><td class="'+o.ID_PREFIX+'label">'+p.ACTION+'</td><td class="'+o.ID_PREFIX+'select"><select id="'+o.ID_PREFIX+'action"></select></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'input_met" type="text" value=""></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'input_cry" type="text" value=""></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'input_deu" type="text" value=""></td></tr><tr><td class="'+o.ID_PREFIX+'label">'+p.RATIO+'<span id="'+o.ID_PREFIX+'ratio_illegal"> ('+p.ILLEGAL+')</span></td><td class="'+o.ID_PREFIX+'select"><select id="'+o.ID_PREFIX+'ratio"></select></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'ratio_met" type="text" value=""></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'ratio_cry" type="text" value=""></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'ratio_deu" type="text" value=""></td></tr><tr class="alt"><td class="'+o.ID_PREFIX+'label">'+p.IN_EXCH+'</td><td class="'+o.ID_PREFIX+'select"><select id="'+o.ID_PREFIX+'output"></select></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'percent_met" type="text" value=""></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'percent_cry" type="text" value=""></td><td class="'+o.ID_PREFIX+'input"><input id="'+o.ID_PREFIX+'percent_deu" type="text" value=""></td></tr><tr><td class="'+o.ID_PREFIX+'label" colspan="2">'+p.RESULT+'</td><td class="'+o.ID_PREFIX+'output" id="'+o.ID_PREFIX+'output_met"></td><td class="'+o.ID_PREFIX+'output" id="'+o.ID_PREFIX+'output_cry"></td><td class="'+o.ID_PREFIX+'output" id="'+o.ID_PREFIX+'output_deu"></td></tr><tr><td colspan="5">&nbsp;</td></tr><tr class="alt"><td class="'+o.ID_PREFIX+'label" colspan="5">'+p.PLANET+'</td></tr><tr class="alt"><td class="'+o.ID_PREFIX+'select1row" colspan="5"><select id="'+o.ID_PREFIX+'planet"></select></td></tr><tr><td colspan="5">&nbsp;</td></tr><tr class="alt"><td class="'+o.ID_PREFIX+'label" colspan="5">'+p.MESSAGE+'</td></tr><tr class="alt"><td class="'+o.ID_PREFIX+'textarea" colspan="5"><textarea id="'+o.ID_PREFIX+'message" cols="1" rows="1" readonly="readonly"></textarea></td></tr></tbody></table></div><div id="'+o.ID_PREFIX+'footer"></div></div>',
/*! [/TPL] */
MENUBUTTON_TPL:
/*! [TPL=BUTTON] */
'<li><a id="'+o.ID_PREFIX+'menubutton" class="menubutton" href="javascript:void(0)" accesskey="" target="_self"><span class="textlabel">'+p.MENU+"</span></a></li>",
/*! [/TPL] */
menuButton:null,menuButtonAction:function(){this.menuButtonAction=function(){};this.makeWindow()},makeMenuButton:function(){var e=this;this.menuButton=i(this.MENUBUTTON_TPL).appendTo(i("#menuTableTools")).find("#"+o.ID_PREFIX+"menubutton").click(function(){e.menuButtonAction()});return this},window:null,ogameHide:null,isHidden:true,show:function(){this.isHidden=false;this.ogameHide.hide();this.window.show();return this},hide:function(){this.isHidden=true;this.window.hide();this.ogameHide.show();return this},toggle:function(){if(this.isHidden){return this.show()}return this.hide()},planet:null,makePlanetSelect:function(){var t=this,e=this.window.find("#"+o.ID_PREFIX+"planet");this.planetJqo=e;i('<option value="">-</option>').appendTo(e);var s=i('meta[name="ogame-planet-coordinates"]').attr("content").replace(/[^0-9\:]/g,"");var r=i('meta[name="ogame-planet-type"]').attr("content").toLowerCase().trim();i.each(i("#planetList").children("div").get(),function(u,v){var w=i(v),x=w.find(".planet-koords");if(x.get().length==0){return}x=x.text().replace(/[^0-9\:]/g,"");option=i('<option value="planet:'+x+'">['+x+"] "+w.find(".planet-name").text().trim()+"</option>").appendTo(e);if(x==s&&r=="planet"){option.addClass(o.ID_PREFIX+"highlight").html(option.html()+" &laquo; "+p.CUR_PLA)}if(w.find(".moonlink").get().length>0){option=i('<option value="moon:'+x+'">['+x+"] ("+p.MOON+")</option>").appendTo(e).addClass(o.ID_PREFIX+"moon");if(x==s&&r=="moon"){option.addClass(o.ID_PREFIX+"highlight").html(option.html()+" &laquo; "+p.CUR_PLA)}}});return e.change(function(){var u=i(this).val().split(":");if(u.length<4){t.planet=null}else{t.planet={type:u.shift(),galaxy:u.shift(),system:u.shift(),planet:u.shift()}}t.onChange()})},action:"sell",makeActionSelect:function(){var r=this,e=this.window.find("#"+o.ID_PREFIX+"action");this.actionJqo=e;i('<option value="sell">'+p.SELL+"</option>").appendTo(e);i('<option value="buy">'+p.BUY+"</option>").appendTo(e);return e.change(function(){r.action=i(this).val();r.onChange()})},makeResourceInput:function(s,t){var v=this;var u="input"+s.capitalize();var r=this.window.find("#"+o.ID_PREFIX+"input_"+s);this[u+"Jqo"]=r;var e=function(){var x=r.val(),w=x.length-r.caret().end;x=f.formatI(x,true);w=Math.max(Math.min(x.length-w,x.length),0);r.val(x).caret(w,w);v[u]={num:(x=="")?0:f.parseI(x),txt:x};v.checkOutputSelect();v.onChange()};r.val(f.formatI(t)).focus(function(){if(r.val()=="0"){r.val("")}}).keyup(e).change(e).blur(function(){if(r.val()==""){r.val("0")}});this[u]={num:t,txt:r.val()};return r},makeRatioOption:function(e,r){return i('<option value="'+e[0]+":"+e[1]+":"+e[2]+'">'+f.formatF(e[0])+":"+f.formatF(e[1])+":"+f.formatF(e[2])+" ("+r+")</option>")},setRatioComponent:function(r,s){var e=parseFloat(s+""),t="ratio"+r.capitalize();this[t]={num:e,txt:f.formatF(e)};this[t+"Jqo"].val(this[t].txt)},makeRatioSelect:function(){var r=this,e=this.window.find("#"+o.ID_PREFIX+"ratio").append(i('<option value="">-</option>')).append(this.makeRatioOption(b.RAT_REG,p.REG)).append(this.makeRatioOption(b.RAT_MIN,p.MIN)).append(this.makeRatioOption(b.RAT_MAX,p.MAX));return e.change(function(){var s=i(this).val().split(":");if(s.length>2){r.setRatioComponent("met",s[0]);r.setRatioComponent("cry",s[1]);r.setRatioComponent("deu",s[2]);i(this).val("");r.checkRatio();r.onChange()}})},makeRatioInput:function(s,t){var v=this;var u="ratio"+s.capitalize();var r=this.window.find("#"+o.ID_PREFIX+"ratio_"+s);this[u+"Jqo"]=r;var e=function(){var y=i(this),x=y.val(),w=x.length-y.caret().end;x=f.formatF(y.val(),true);w=Math.max(Math.min(x.length-w,x.length),0);y.val(x).caret(w,w);num=f.parseF(x);if(num>0){v[u]={num:num,txt:f.formatF(num)};v.checkRatio();v.onChange()}};r.val(f.formatF(t));r.keyup(e).change(e).blur(function(){var x=i(this),w=f.formatF(x.val());if(f.parseF(w)==0){x.val(v[u].txt)}}).focus(function(){i(this).val("")});this[u]={num:t,txt:r.val()};return r},checkRatio:function(){if(h.isLegal(this.ratioMet.num,this.ratioCry.num,this.ratioDeu.num)){this.ratioIllegal.hide()}else{this.ratioIllegal.show()}},disable:function(r,e){r.attr("disabled","disabled").prop("disabled",true);if(arguments.length>1){r.val(e)}return this},enable:function(r,e){r.prop("disabled",false).removeAttr("disabled");if(arguments.length>1){r.val(e)}return this},isDisabled:function(e){return(e.attr("disabled")=="disabled")},makePercentInput:function(s,t){var v=this;var u="percent"+s.capitalize();var r=this.window.find("#"+o.ID_PREFIX+"percent_"+s);this[u+"Jqo"]=r;var e=function(){var z=r.val(),x=z.length-r.caret().end,w="percentMet",y;if(f.parseF(z)>100){z="100"}z=f.formatF(z,true);x=Math.max(Math.min(z.length-x,z.length),0);r.val(z).caret(x,x);y=(z=="")?0:f.parseF(z);v[u]={num:y,txt:f.formatF(y)+"%"};if(/Met|Cry/.test(u)&&(!v.isDisabled(v.percentDeuJqo))){w="percentDeu"}else{if(/Met|Deu/.test(u)&&(!v.isDisabled(v.percentCryJqo))){w="percentCry"}}y=100-y;z=f.formatF(y)+"%";v[w+"Jqo"].val(z);v[w]={num:y,txt:z+"%"};v.onChange()};this.disable(r,f.formatF(t)+"%");r.focus(function(){if(v.isDisabled(r)){return}r.val("");e()}).keyup(e).change(e).blur(function(){r.val(f.formatF(r.val())+"%")});this[u]={num:t,txt:r.val()};return r},checkOutputSelect:function(){var v=this.outputJqo.val(),t=(this.inputMet.num>0),r=(this.inputCry.num>0),w=(this.inputDeu.num>0),u=/m/.test(v),s=/c/.test(v),e=/d/.test(v);if(!t&&!r&&w&&!u&&!s&&e){this.changeOutputSelect("mc")}else{if(!t&&r&&!w&&!u&&s&&!e){this.changeOutputSelect("md")}else{if(t&&!r&&!w&&u&&!s&&!e){this.changeOutputSelect("cd")}else{if((!t&&r&&w)||u&&((r&&s)||(w&&e))){this.changeOutputSelect("m")}else{if((t&&!r&&w)||s&&((t&&u)||(w&&e))){this.changeOutputSelect("c")}else{if((t&&r&&!w)||e&&((t&&u)||(r&&s))){this.changeOutputSelect("d")}}}}}}},changeOutputSelect:function(e){this.outputJqo.val(e);m=this.percentMetJqo,c=this.percentCryJqo,d=this.percentDeuJqo;this.disable(m,"0%").disable(c,"0%").disable(d,"0%");if(e=="m"){m.val("100%")}else{if(e=="c"){c.val("100%")}else{if(e=="d"){d.val("100%")}else{if(e=="mc"){this.enable(m,"50%").enable(c,"50%")}else{if(e=="md"){this.enable(m,"50%").enable(d,"50%")}else{this.enable(c,"50%").enable(d,"50%")}}}}}this.percentMet={txt:m.val(),num:parseInt(m.val().replace("%",""))};this.percentCry={txt:c.val(),num:parseInt(c.val().replace("%",""))};this.percentDeu={txt:d.val(),num:parseInt(d.val().replace("%",""))}},makeOutputSelect:function(){var r=this,e=this.window.find("#"+o.ID_PREFIX+"output");this.outputJqo=e;i('<option value="m">'+p.RES_MET+"</option>").appendTo(e);i('<option value="c">'+p.RES_CRY+"</option>").appendTo(e);i('<option value="d">'+p.RES_DEU+"</option>").appendTo(e);i('<option value="mc">'+p.RES_MET+" + "+p.RES_CRY+"</option>").appendTo(e);i('<option value="md">'+p.RES_MET+" + "+p.RES_DEU+"</option>").appendTo(e);i('<option value="cd">'+p.RES_CRY+" + "+p.RES_DEU+"</option>").appendTo(e);e.change(function(){r.changeOutputSelect(i(this).val());r.onChange()});return this},makeWindow:function(){var r=this,e;this.ogameHide=i("#inhalt").after(e=(this.window=i(this.WINDOW_TPL).hide()));this.addCss(this.CSS).show();this.closeButton=e.find("#"+o.ID_PREFIX+"close").click(function(){r.hide()});this.makeActionSelect();this.makeResourceInput("met",0);this.makeResourceInput("cry",0);this.makeResourceInput("deu",0);this.ratioIllegal=e.find("#"+o.ID_PREFIX+"ratio_illegal").hide();this.makeRatioSelect();this.makeRatioInput("met",3);this.makeRatioInput("cry",2);this.makeRatioInput("deu",1);this.makeOutputSelect();this.makePercentInput("met",100);this.makePercentInput("cry",0);this.makePercentInput("deu",0);this.outputMet=e.find("#"+o.ID_PREFIX+"output_met").text(0);this.outputCry=e.find("#"+o.ID_PREFIX+"output_cry").text(0);this.outputDeu=e.find("#"+o.ID_PREFIX+"output_deu").text(0);this.makePlanetSelect();this.outputMessage=e.find("#"+o.ID_PREFIX+"message");this.menuButtonAction=function(){r.toggle()};return this},onChange:function(){var e=g(this.inputMet.num,this.inputCry.num,this.inputDeu.num,this.ratioMet.num,this.ratioCry.num,this.ratioDeu.num,this.percentMet.num,this.percentCry.num,this.percentDeu.num);this.outputMet.text(f.formatI(e.met));this.outputCry.text(f.formatI(e.cry));this.outputDeu.text(f.formatI(e.deu));this.outputMessage.text(n.make(this.action,{met:this.inputMet.txt,cry:this.inputCry.txt,deu:this.inputDeu.txt,},{met:this.outputMet.text(),cry:this.outputCry.text(),deu:this.outputDeu.text(),},{met:this.ratioMet.txt,cry:this.ratioCry.txt,deu:this.ratioDeu.txt,},this.planet))},init:function(){return this.makeMenuButton()}}).init()})();

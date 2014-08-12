// ==UserScript==
// @name           OGame Trade Calculator
// @description    Adds a trade calculator to the OGame interface
// @namespace      http://userscripts.org/users/68563/scripts
// @downloadURL    https://userscripts.org/scripts/source/151002.user.js
// @updateURL      https://userscripts.org/scripts/source/151002.meta.js
// @version        1.5.0
// @include        *://*.ogame.*/game/index.php?*page=*
// ==/UserScript==
/*! Commerce Calculator for OGame (C) 2012 Elías Grande Cásedas | GNU-GPL | gnu.org/licenses */
(function(){var m=window,r,i;try{if(unsafeWindow){m=unsafeWindow}}catch(n){}r=m.document;i=m.jQuery;
/*! jCaret (C) 2010 C. F. Wong | cloudgen.w0ng.hk | www.opensource.org/licenses/mit-license.php */
(function(t,e,s,u){t.fn.caret=function(J,F){var w,z,H=this[0],B=t.browser.msie;if(typeof J==="object"&&typeof J.start==="number"&&typeof J.end==="number"){w=J.start;z=J.end}else{if(typeof J==="number"&&typeof F==="number"){w=J;z=F}else{if(typeof J==="string"){if((w=H.value.indexOf(J))>-1){z=w+J[e]}else{w=null}}else{if(Object.prototype.toString.call(J)==="[object RegExp]"){var G=J.exec(H.value);if(G!=null){w=G.index;z=w+G[0][e]}}}}}if(typeof w!="undefined"){if(B){var C=this[0].createTextRange();C.collapse(true);C.moveStart("character",w);C.moveEnd("character",z-w);C.select()}else{this[0].selectionStart=w;this[0].selectionEnd=z}this[0].focus();return this}else{if(B){var E=document.selection;if(this[0].tagName.toLowerCase()!="textarea"){var x=this.val(),A=E[s]()[u]();A.moveEnd("character",x[e]);var I=(A.text==""?x[e]:x.lastIndexOf(A.text));A=E[s]()[u]();A.moveStart("character",-x[e]);var D=A.text[e]}else{var A=E[s](),v=A[u]();v.moveToElementText(this[0]);v.setEndPoint("EndToEnd",A);var I=v.text[e]-A.text[e],D=I+A.text[e]}}else{var I=H.selectionStart,D=H.selectionEnd}var y=H.value.substring(I,D);return{start:I,end:D,text:y,replace:function(K){return H.value.substring(0,I)+K+H.value.substring(D,H.value[e])}}}}})(i,"length","createRange","duplicate");String.prototype.replaceAll=function(e,s){return this.split(e).join(s)};String.prototype.recursiveReplaceMap=function(v,u,s){if(s==0){return this.split(v[0]).join(u[0])}var t,e=this.split(v[s]);for(t in e){e[t]=e[t].recursiveReplaceMap(v,u,s-1)}return e.join(u[s])};String.prototype.replaceMap=function(e){var s,v,u,t;v=new Array();u=new Array();t=0;for(s in e){v.push(s);u.push(e[s]);t++}if(t==0){return this}else{return this.recursiveReplaceMap(v,u,t-1)}};var p={ID_PREFIX:"o_trade_calc_",NAME:"OGame Trade Calculator",SHOW_URL:"http://userscripts.org/scripts/show/151002"};var d=({info:{RAT_MAX:[5,3,1],RAT_REG:[3,2,1],RAT_MIN:[2,1.5,1]},getMeta:function(s,t){try{return i('meta[name="'+s+'"]').attr("content")}catch(u){if(arguments.length>1){return t}else{return null}}},getResource:function(t){var e={NAME:"",AMOUNT:0,getName:function(v){var u=this.NAME+"";d[v]=this.AMOUNT+0;return u}};var s=i("#"+t).attr("title");e.NAME=s.split(":").shift();e.AMOUNT=parseInt(s.split("/tr").shift().replace(/\D/g,""));return e},init:function(){this.info.LANGUAGE=this.getMeta("ogame-language","");this.info.RES_MET=this.getResource("metal_box");this.info.RES_CRY=this.getResource("crystal_box");this.info.RES_DEU=this.getResource("deuterium_box");return this.info}}).init();var a={MET:"#FF7700",CRY:"#00FFFF",DEU:"#FF33FF"};var q=({text:{RES_MET:d.RES_MET.getName("RES_MET"),RES_CRY:d.RES_CRY.getName("RES_CRY"),RES_DEU:d.RES_DEU.getName("RES_DEU")},set:function(e,s){if(e.test(d.LANGUAGE)){i.extend(true,this.text,s)}return this}}).set(/.*/,{THO_SEP:",",DEC_SEP:".",MENU:"Trace C.",TITLE:"Trade calculator",ACTION:"Action",BUY:"I buy",SELL:"I sell",RATIO:"Ratio",LEGAL:"legal",ILLEGAL:"illegal",CUSTOM:"Custom",IN_EXCH:"In exchange for",RES_ONE:"A resource",RES_MIX:"Resource mix",MESSAGE:"Message",WHERE:"Place of delivery",PLANET:"Planet",MOON:"Moon",CUR_PLA:"Current planet",MAX:"Maximum",REG:"Regular",MIN:"Minimum"}).set(/es|ar|mx/,{THO_SEP:".",DEC_SEP:",",MENU:"C. Comercio",TITLE:"Calculadora de comercio",ACTION:"Acción",BUY:"Compro",SELL:"Vendo",RATIO:"Ratio",LEGAL:"legal",ILLEGAL:"ilegal",CUSTOM:"Personalizado",IN_EXCH:"A cambio de",RES_ONE:"Un recurso",RES_MIX:"Mezcla de recursos",MESSAGE:"Mensaje",WHERE:"Lugar de entrega",PLANET:"Planeta",MOON:"Luna",CUR_PLA:"Planeta actual",MAX:"Máximo",REG:"Normal",MIN:"Mínimo"}).text;var c="."+p.ID_PREFIX+"window{float:left;position:relative;width:670px;overflow:visible;z-index:2;}#galaxy ."+p.ID_PREFIX+"window{top:-44px;}."+p.ID_PREFIX+'header{height:28px;line-height:28px;text-align:center;color:#6F9FC8;font-size:12px;font-weight:bold;background: url("http://gf1.geo.gfsrv.net/cdn63/10e31cd5234445e4084558ea3506ea.gif") no-repeat scroll 0px 0px transparent;}.'+p.ID_PREFIX+'main{padding:15px 25px 0 25px;background: url("http://gf1.geo.gfsrv.net/cdn9e/4f73643e86a952be4aed7fdd61805a.gif") repeat-y scroll 5px 0px transparent;}.'+p.ID_PREFIX+"main *{font-size:11px;}."+p.ID_PREFIX+"main table{width:620px;background-color:#0D1014;border-collapse:collapse;clear:both;}."+p.ID_PREFIX+"main th{color:#FFF;text-align:center;font-weight:bold;}."+p.ID_PREFIX+"main td.label,."+p.ID_PREFIX+"main td.label *{color:grey;text-align:left;}."+p.ID_PREFIX+"main td.label{padding:0 0 0 5px;font-weight:bold;}."+p.ID_PREFIX+"main tr,."+p.ID_PREFIX+"main td,."+p.ID_PREFIX+"main th{height:27px;line-height:27px;}."+p.ID_PREFIX+'main input[type="text"]{width:100px;text-align:right;}.'+p.ID_PREFIX+"main option.highlight{color:lime !important;font-weight:bold;}."+p.ID_PREFIX+"main option.moonOption{color:orange;}."+p.ID_PREFIX+"main td.select{width:150px;text-align:left;}."+p.ID_PREFIX+"main select{width:130px;text-align:center;}."+p.ID_PREFIX+"main option{padding:1px 5px 1px 5px;}."+p.ID_PREFIX+'main input[type="text"].ratio{width:30px;}.'+p.ID_PREFIX+"main td.input{width:112px;padding:0 1px 0 0;text-align:right;}."+p.ID_PREFIX+"main td.input{width:112px;padding:0 1px 0 0;text-align:right;}."+p.ID_PREFIX+"main span.illegal{color:red;}."+p.ID_PREFIX+"main span.legal span.illegal{display:none;}."+p.ID_PREFIX+"main td.output{width:108px;padding:0 5px 0 0;text-align:right;color:grey;text-decoration:line-through;cursor:pointer;}."+p.ID_PREFIX+"main td.output.sel{color:#FFF;text-decoration:none;cursor:dafault;}."+p.ID_PREFIX+"main td.textarea{padding:0 1px 0 1px;}."+p.ID_PREFIX+"main textarea{width:602px;height:50px !important;margin:0;}."+p.ID_PREFIX+"main td.select1row select{width:auto;text-align:left;margin:0;}."+p.ID_PREFIX+'footer{height:17px;background: url("http://gf1.geo.gfsrv.net/cdn30/aa3e8edec0a2681915b3c9c6795e6f.gif") no-repeat scroll 2px 0px transparent;}';var l=function(t){var s=r.createElement("style");s.setAttribute("type","text/css");if(s.styleSheet){s.styleSheet.cssText=t}else{s.appendChild(r.createTextNode(t))}var e=r.getElementsByTagName("head")[0];e.appendChild(s)};var b={seed:(new Date()).getTime(),get:function(){return p.ID_PREFIX+(this.seed++)}};var f=function(u,s){if(s&&u==""){return""}var t=("0"+u+"").replace(/[kK]$/,"000").replace(/[mM]$/,"000000").replace(/\D/g,"").replace(/^0+(\d)/,"$1");var e=/(\d+)(\d{3})/;while(e.test(t)){t=t.replace(e,"$1"+q.THO_SEP+"$2")}return t};var k=function(y,v){if(v&&y==""){return""}var w,e,u,s;w=("0"+y+"").replace(/[\.\,]$/,q.DEC_SEP).replace(new RegExp("[^0-9\\"+q.DEC_SEP+"]","g"),"").replace(/^0+(\d)/,"$1");e=w.split(q.DEC_SEP);u=e[0];s=e.length>1?q.DEC_SEP+e[1]:"";if(w[w.length-1]==q.DEC_SEP&&v){s=q.DEC_SEP}var t=/(\d+)(\d{3})/;while(t.test(u)){u=u.replace(t,"$1"+q.THO_SEP+"$2")}return u+s};var h=({limits:[],isLegal:function(){var t;if(arguments.length==1){t=arguments[0]}else{t=[arguments[0],arguments[1],arguments[2]]}var s=t[0]/t[1],e=0;if(s<this.limits[e++]||s>this.limits[e++]){return false}s=t[0]/t[2];if(s<this.limits[e++]||s>this.limits[e++]){return false}s=t[1]/t[2];if(s<this.limits[e++]||s>this.limits[e++]){return false}return true},init:function(u,t){this.limits=[];var s=u[0]/u[1],e=t[0]/t[1];this.limits.push(Math.min(s,e));this.limits.push(Math.max(s,e));s=u[0]/u[2];e=t[0]/t[2];this.limits.push(Math.min(s,e));this.limits.push(Math.max(s,e));s=u[1]/u[2];e=t[1]/t[2];this.limits.push(Math.min(s,e));this.limits.push(Math.max(s,e));return this}}).init(d.RAT_MIN,d.RAT_MAX);delete h.init;var g=function(e,v,t,u,s,w){return{met:Math.round(e+(v/s)*u+(t/w)*u),cry:Math.round((e/u)*s+v+(t/w)*s),deu:Math.round((e/u)*w+(v/s)*w+t)}};var o=({DEFAULT_TPL:"[b]{?b}{I18N.BUY}{/b}{?s}{I18N.SELL}{/s}:[/b] {?m}[b][color={COLOR.MET}]{m}[/color][/b] ({I18N.RES_MET}){?cd} + {/cd}{/m}{?c}[b][color={COLOR.CRY}]{c}[/color][/b] ({I18N.RES_CRY}){?d} + {/d}{/c}{?d}[b][color={COLOR.DEU}]{d}[/color][/b] ({I18N.RES_DEU}){/d}\n[b]{I18N.IN_EXCH}:[/b] {?M}[b][color={COLOR.MET}]{M}[/color][/b] ({I18N.RES_MET}){/M}{?C}[b][color={COLOR.CRY}]{C}[/color][/b] ({I18N.RES_CRY}){/C}{?D}[b][color={COLOR.DEU}]{D}[/color][/b] ({I18N.RES_DEU}){/D}\n\n[b]* {I18N.RATIO}:[/b] {rm}:{rc}:{rd}{?w}\n[b]* {I18N.WHERE}:[/b] {w}{/w}\n\n[b][url={SCRIPT.SHOW_URL}]{SCRIPT.NAME}[/url][/b]",parseIf:function(y,t,z,e){var A="{"+t+z+"}",v="{/"+z+"}";if(e){return y.split(A).join("").split(v).join("")}var x,w,s,u=y;while((x=u.indexOf(A))>=0&&(w=u.indexOf(v))>=0&&x<w){u=u.split(A);for(x=1;x<u.length;x++){s=u[x].split(v);if(s.length>1){s.shift();u[x]=v+s.shift()+s.join(v)}}u=u.join(A).split(A+v).join("")}return u},parseIfs:function(){var t=arguments[0],u=1,v,s,e=arguments.length;while(true){v=arguments[u++];s=arguments[u++];t=this.parseIf(t,"?",v,s);t=this.parseIf(t,"!",v,!s);if(u==e){return t}}},make:function(s,y,u,z,E,A,t,B,e,D,x){var w,C=/[1-9]/,v=this.parseIfs(this.tpl,"b",(s==q.BUY),"s",(s==q.SELL),"m",C.test(y),"c",C.test(u),"d",C.test(z),"mc",C.test(y+u),"md",C.test(y+z),"cd",C.test(u+z),"M",C.test(E),"C",C.test(A),"D",C.test(t),"w",(x!=""));v=v.replaceMap({"{m}":y,"{c}":u,"{d}":z,"{M}":E,"{C}":A,"{D}":t,"{rm}":B,"{rc}":e,"{rd}":D,"{w}":x});for(w in q){v=v.replaceAll("{I18N."+w+"}",q[w])}for(w in p){v=v.replaceAll("{SCRIPT."+w+"}",p[w])}for(w in a){v=v.replaceAll("{COLOR."+w+"}",a[w])}return v},init:function(){this.tpl=this.DEFAULT_TPL;return this}}).init();var j=({isNotBuilded:true,isHidden:true,mkTr:function(e){return i("<tr/>").appendTo(e)},mkIntegerInput:function(t,u){var v=this;var s=i('<input type="text" value="" />').appendTo(t);var e=function(){var y=i(this),x=y.val(),w=x.length-y.caret().end;x=f(x);w=x.length-w;y.val(x).caret(w,w);v.doIt()};s.val(f(u),false);s.keyup(e).change(e).blur(function(){var w=i(this);w.val(f(w.val(),false));v.doIt()});s.focus(function(){var w=i(this);if(w.val()=="0"){w.val("")}});return s},mkRatioInput:function(u,v){var w=this;var s=i('<input type="text" value="" />').appendTo(u);var t={value:""};var e=function(){var z=i(this),y=z.val(),x=y.length-z.caret().end;y=k(z.val(),true);x=y.length-x;z.val(y).caret(x,x);if(y!=""){w.doIt()}};s.val(k((v+"").split(".").join(q.DEC_SEP),false));s.keyup(e).change(e).blur(function(){var y=i(this),x=k(y.val(),false);if(x=="0"){y.val(t.value)}else{t.value=x;y.val(x)}w.doIt()});s.focus(function(){t.value=i(this).val()});return s.addClass("ratio")},mkRatioOption:function(t,u,s){var v=(u[0]+"").replace(".",q.DEC_SEP),e=(u[1]+"").replace(".",q.DEC_SEP),w=(u[2]+"").replace(".",q.DEC_SEP);return i('<option value="'+v+":"+e+":"+w+'">'+s+" "+v+":"+e+":"+w+"</option>").appendTo(t)},build:function(){var v=this,y,t,w,e,x,u;this.isNotBuilded=false;l(c);this.ogameContainer=i("#inhalt");this.scriptContainer=i("<div/>").addClass(p.ID_PREFIX+"window").hide();this.ogameContainer.after(this.scriptContainer);this.scriptContainer.append(i("<div/>").addClass(p.ID_PREFIX+"header").text(q.TITLE).append(i('<a href="javascript:void(0);" />').addClass("close_details").addClass("close_ressources").click(function(){v.hide()})));this.scriptContainer.append(this.scriptMain=i("<div/>").addClass(p.ID_PREFIX+"main"));this.scriptContainer.append(i("<div/>").addClass(p.ID_PREFIX+"footer"));y=i('<table cellpadding="0" cellspacing="0"/>').appendTo(this.scriptMain);t=i("<tbody/>").appendTo(y);w=i("<tr/>").appendTo(t);i("<th/>").appendTo(w).attr("colspan",2);i("<th/>").appendTo(w).text(q.RES_MET);i("<th/>").appendTo(w).text(q.RES_CRY);i("<th/>").appendTo(w).text(q.RES_DEU);w=this.mkTr(t).addClass("alt");i("<td/>").appendTo(w).addClass("label").text(q.ACTION);e=i("<td/>").appendTo(w).addClass("select");x=i("<select/>").appendTo(e);this.actionOptions=[];this.actionOptions.push(i('<option value="'+q.SELL+'">'+q.SELL+"</option>").appendTo(x));this.actionOptions.push(i('<option value="'+q.BUY+'">'+q.BUY+"</option>").appendTo(x));this.actionSelect=x.change(function(){v.doIt()});e=i("<td/>").appendTo(w).addClass("input");this.inputMet=this.mkIntegerInput(e,0);e=i("<td/>").appendTo(w).addClass("input");this.inputCry=this.mkIntegerInput(e,0);e=i("<td/>").appendTo(w).addClass("input");this.inputDeu=this.mkIntegerInput(e,0);w=this.mkTr(t);e=i("<td/>").appendTo(w).addClass("label");this.ratioIsLegal=i('<span class="legal">'+q.RATIO+"</span>").appendTo(e).append(i('<span class="illegal"> ('+q.ILLEGAL+")</span>"));e=i("<td/>").appendTo(w).addClass("select");x=i("<select/>").appendTo(e);i('<option value="">-</option>').appendTo(x);this.ratioOptions=[0];this.ratioOptions.push(this.mkRatioOption(x,d.RAT_REG,q.REG));this.ratioOptions.push(this.mkRatioOption(x,d.RAT_MIN,q.MIN));this.ratioOptions.push(this.mkRatioOption(x,d.RAT_MAX,q.MAX));this.ratioSelect=x.change(function(){v.doIt()});e=i("<td/>").appendTo(w).addClass("input");this.ratioMet=this.mkRatioInput(e,d.RAT_REG[0]);e=i("<td/>").appendTo(w).addClass("input");this.ratioCry=this.mkRatioInput(e,d.RAT_REG[1]);e=i("<td/>").appendTo(w).addClass("input");this.ratioDeu=this.mkRatioInput(e,d.RAT_REG[2]);w=this.mkTr(t).addClass("alt");i("<td/>").appendTo(w).addClass("label").text(q.IN_EXCH);e=i("<td/>").appendTo(w).addClass("select");x=i("<select/>").appendTo(e);this.exchangeOptions=[];this.exchangeOptions.push(i('<option value="met">'+q.RES_MET+"</option>").appendTo(x));this.exchangeOptions.push(i('<option value="cry">'+q.RES_CRY+"</option>").appendTo(x));this.exchangeOptions.push(i('<option value="deu">'+q.RES_DEU+"</option>").appendTo(x));this.exchangeSelect=x.change(function(){v.doIt()});this.outputMet=i("<td/>").appendTo(w).addClass("output").click(function(){v.exchangeSelect.prop("selectedIndex",0);v.doIt()});this.outputCry=i("<td/>").appendTo(w).addClass("output").click(function(){v.exchangeSelect.prop("selectedIndex",1);v.doIt()});this.outputDeu=i("<td/>").appendTo(w).addClass("output").click(function(){v.exchangeSelect.prop("selectedIndex",2);v.doIt()});this.mkTr(t).append(i("<td/>").appendTo(w).attr("colspan",5).html("&nbsp;"));w=this.mkTr(t).addClass("alt");i("<td/>").appendTo(w).addClass("label").attr("colspan",5).text(q.WHERE);w=this.mkTr(t).addClass("alt");e=i("<td/>").appendTo(w).addClass("select1row").attr("colspan",5);x=i("<select/>").appendTo(e);i('<option value="">-</option>').appendTo(x);var z="["+i('meta[name="ogame-planet-coordinates"]').attr("content")+"]";var s=i('meta[name="ogame-planet-type"]').attr("content").toLowerCase().trim();this.planetOptions=[0];i.each(i("#planetList").children("div").get(),function(A,B){var C=i(B),D=C.find(".planet-koords");if(D.get().length==0){return}D=D.text().trim();u=i('<option value="'+D+" ("+q.PLANET+')">'+D+" "+C.find(".planet-name").text().trim()+"</option>").appendTo(x).addClass("planetOption");if(D==z&&s=="planet"){u.addClass("highlight").html(u.html()+" &laquo; "+q.CUR_PLA)}v.planetOptions.push(u);if(C.find(".moonlink").get().length>0){u=i('<option value="'+D+" ("+q.MOON+')">'+D+" ("+q.MOON+")</option>").appendTo(x).addClass("moonOption");if(D==z&&s=="moon"){u.addClass("highlight").html(u.html()+" &laquo; "+q.CUR_PLA)}v.planetOptions.push(u)}});this.planetSelect=x.change(function(){v.doIt()});this.mkTr(t).append(i("<td/>").appendTo(w).attr("colspan",5).html("&nbsp;"));w=this.mkTr(t).addClass("alt");i("<td/>").appendTo(w).addClass("label").attr("colspan",5).text(q.MESSAGE);w=this.mkTr(t).addClass("alt");e=i("<td/>").appendTo(w).addClass("textarea").attr("colspan",5);this.outputMessage=i('<textarea rows="1" cols="1"/>').appendTo(e).attr("readonly","readonly").click(function(){i(this).select()});return this.doIt()},getResource:function(s){var e=s.val();if(e==""){return 0}else{return parseInt(s.val().replace(/\D/g,""))}},getRatio:function(e){return parseFloat(e.val().split(q.THO_SEP).join("").split(q.DEC_SEP).join("."))},doIt:function(){var x=this,s,u=this.ratioSelect.prop("selectedIndex");if(u>0){s=this.ratioOptions[u].val().split(":");this.ratioMet.val(s.shift());this.ratioCry.val(s.shift());this.ratioDeu.val(s.shift());this.ratioSelect.prop("selectedIndex",0)}var v=this.getRatio(this.ratioMet),e=this.getRatio(this.ratioCry),w=this.getRatio(this.ratioDeu),t=g(this.getResource(this.inputMet),this.getResource(this.inputCry),this.getResource(this.inputDeu),v,e,w);if(h.isLegal(v,e,w)){this.ratioIsLegal.addClass("legal")}else{this.ratioIsLegal.removeClass("legal")}this.outputMet.text(f(t.met)).removeClass("sel");this.outputCry.text(f(t.cry)).removeClass("sel");this.outputDeu.text(f(t.deu)).removeClass("sel");i.each([this.outputMet,this.outputCry,this.outputDeu],function(y,z){if(x.exchangeSelect.prop("selectedIndex")==y){z.addClass("sel")}else{z.removeClass("sel")}});this.outputMessage.text(o.make(this.actionSelect.val(),this.inputMet.val(),this.inputCry.val(),this.inputDeu.val(),this.outputMet.hasClass("sel")?this.outputMet.text():"",this.outputCry.hasClass("sel")?this.outputCry.text():"",this.outputDeu.hasClass("sel")?this.outputDeu.text():"",this.ratioMet.val(),this.ratioCry.val(),this.ratioDeu.val(),this.planetSelect.val()));return this},show:function(){this.isHidden=false;this.ogameContainer.hide();this.scriptContainer.show();return this},hide:function(){this.isHidden=true;this.scriptContainer.hide();this.ogameContainer.show();return this},toggle:function(){if(this.isNotBuilded){return this.build().show()}if(this.isHidden){return this.show()}return this.hide()},menuButton:i('<a target="_self" accesskey="" href="javascript:void(0)" class="menubutton"><span class="textlabel">'+q.MENU+"</span></a>").appendTo(i("<li/>").appendTo(i("#menuTableTools"))),init:function(){var e=this;this.menuButton.click(function(){e.toggle()});return this}}).init()})();

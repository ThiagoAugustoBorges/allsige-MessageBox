/*
 * PLUGIN: allSIGE MessageBox
 * OWNER: Thiago Augusto Borges - Uberaba MG
 * VERSION: 2.0.0.4
 * INIT: 01/05/2016
 * LICENSE: M.I.T
 */
"use strict";!function(t){var e,o="allSIGE MessageBox - ";t.allSIGEDynamicMessageBoxSettings=function(a,n){void 0===n?n=!1:"";var r={boxType:"none",boxShortcuts:{enabled:!0,closeKeyCode:27,showShortcutLabel:!0},boxShowIcon:!1,boxShowHeaderControls:!0,boxReloadModal:!1,boxTypeIcon:{none:{type:"img",val:"none.png"},success:{type:"img",val:"success.png"},error:{type:"img",val:"error.png"},info:{type:"img",val:"info.png"},alert:{type:"img",val:"alert.png"}},boxSize:"md",boxTitle:"allSIGE MessageBox",boxMessage:"",boxButtons:[],boxHeaderButtons:[],boxButtonDefaultPosition:1,boxButtonAlign:"right",boxAutoClose:{timeout:0,message:"Closing in %s% seconds...",container:"message"},boxAlternateReturn:{selector:"",close:!0},boxFocusOnLoad:{selector:""},dataParams:[],defaultStyle:"style01",topPosition:"100px",closeOnClickModal:!0,blockWhenOpen:!1,effects:{modalIn:"fadeIn",modalOut:"fadeOut",boxIn:"fadeInDown",boxOut:"fadeOutUp"},onSuccess:function(t){},onBeforeShow:function(t){},onAfterShow:function(t){},onBeforeClose:function(t){},onAfterClose:function(t){}};n&&(e=t.extend(!0,{},r,e,a)),a=t.extend(!0,{},r,e,a);var s=t.extend(!0,{},e,a),i={},l=["em","rem","ex","px","%","pt","pc","mm","cm","in","vh","vw","vmin","vmax","ch"];i._doValid_boxType=function(){return s.boxType},i._doValid_boxShortcuts=function(){var t=s.boxShortcuts;return t.enabled?t.enabled=!0:t.enabled=!1,t.showShortcutLabel?t.showShortcutLabel=!0:t.showShortcutLabel=!1,t},i._doValid_boxSize=function(){var e,a,n=s.boxSize,r=["330","420","585","880","100"],i=["xs","sm","md","lg","full"],c=t.inArray(n,i);return c>=0?(a=r[c],e="full"==i[c]?"%":"px"):(e=n.replace(/[0-9]/g,""),a=parseInt(n),(""===a||0>a||isNaN(a))&&t.error(o+"The paramater 'boxSize' it has to be a no empty and integer."),-1==t.inArray(e,l)&&t.error(o+"The allowable values for the parameter 'boxSize' are "+l.splice(0)+".")),a+e},i._doValid_boxTitle=function(){return s.boxTitle},i._doValid_boxMessage=function(){return s.boxMessage},i._doValid_boxButtons=function(){var e=s.boxButtons,a=s.boxShortcuts;t.isArray(e)||t.error(o+"The paramater 'boxButtons' it has to be a array of objects.");var n={label:"","class":"btn","return":"OK",close:!0,iconClass:"",shortcutCharCode:null,props:{element:"button",attribs:{}}};e.length<=0?e.push(n):"";for(var r={9:"TAB",13:"ENTER"},i=0;i<e.length;i++){e[i]=t.extend(!0,{},n,e[i]),""===e[i].label&&""===e[i].iconClass&&(e[i].label="OK");var l="";if(a.showShortcutLabel){l=String.fromCharCode(e[i].shortcutCharCode);var c=l.charCodeAt();0!==c&&(l=r.hasOwnProperty(c)?r[c]:l,e[i].label+=" <strong>["+l+"]</strong>")}var u=e[i].props.element;(""===u||t.isNumeric(u))&&t.error(o+"The paramater 'boxButtons[props][element]' it has to be a html element.")}return e},i._doValid_boxHeaderButtons=function(){var e=s.boxHeaderButtons;t.isArray(e)||t.error(o+"The paramater 'boxHeaderButtons' it has to be a array of objects.");var a={"return":"OK",close:!0,iconClass:"fa fa-close",props:{element:"li",attribs:{}}};e.length<=0?e.push(a):"";for(var n=0;n<e.length;n++){e[n]=t.extend(!0,{},a,e[n]);var r=e[n].props.element;(""===r||t.isNumeric(r))&&t.error(o+"The paramater 'boxHeaderButtons[props][element]' it has to be a html element.")}return e},i._doValid_boxTypeIcon=function(){var e=s.boxTypeIcon,a={type:"img",val:"none.png"};for(var n in e)e[n]=t.extend(!0,{},a,e[n]);return e.hasOwnProperty(s.boxType)||t.error(o+"The paramater 'boxTypeIcon' must have a position with the same type of parameter 'boxType'."),e},i._doValid_boxFocusOnLoad=function(){var e=s.boxFocusOnLoad,o={selector:""};return e=t.extend(!0,{},o,e)},i._doValid_boxButtonDefaultPosition=function(){var e=parseInt(s.boxButtonDefaultPosition-1);return(""===e||0>e||isNaN(e))&&t.error(o+"The paramater 'boxButtonDefaultPosition' it has to be a no empty and integer."),s.boxButtons.length>0&&void 0===s.boxButtons[e]&&t.error(o+"Not found an button in the position "+(e+1)+" in 'boxButtonDefaultPosition'."),e},i._doValid_boxAlternateReturn=function(){var t=s.boxAlternateReturn;return t},i._doValid_boxButtonAlign=function(){var e=s.boxButtonAlign,a=["left","right","center"];return-1==t.inArray(e,a)&&t.error(o+"The allowable values for the parameter 'boxButtonAlign' are "+a.splice(0)+"."),e},i._doValid_boxAutoClose=function(){var e=s.boxAutoClose;return t.isNumeric(e.timeout)||t.error(o+"The paramater 'boxAutoClose[timeout]' it has to be a no empty and integer."),e.timeout=1e3*e.timeout,e},i._doValid_defaultStyle=function(){return s.defaultStyle},i._doValid_dataParams=function(){return s.dataParams},i._doValid_topPosition=function(){var e=s.topPosition,a=e.replace(/[0-9]/g,"");parseInt(e);return-1==t.inArray(a,l)&&t.error(o+"The allowable values for the parameter 'topPosition' are "+l.splice(0)+"."),e},i._doValid_closeOnClickModal=function(){var t=s.closeOnClickModal;return t=t?!0:!1},i._doValid_boxReloadModal=function(){var t=s.boxReloadModal;return t=t?!0:!1},i._doValid_boxShowIcon=function(){var t=s.boxShowIcon;return t=t?!0:!1},i._doValid_boxShowHeaderControls=function(){var t=s.boxShowHeaderControls;return t=t?!0:!1},i._doValid_blockWhenOpen=function(){var t=s.blockWhenOpen;return t=t?!0:!1},i._doValid_effects=function(){var t=s.effects;return t},i._doValid_onSuccess=function(){return t.isFunction(s.onSuccess)||t.error(o+"The paramater 'onSuccess' it has to be a function."),s.onSuccess},i._doValid_onBeforeShow=function(){return t.isFunction(s.onBeforeShow)||t.error(o+"The paramater 'onBeforeShow' it has to be a function."),s.onBeforeShow},i._doValid_onAfterShow=function(){return t.isFunction(s.onAfterShow)||t.error(o+"The paramater 'onAfterShow' it has to be a function."),s.onAfterShow},i._doValid_onBeforeClose=function(){return t.isFunction(s.onBeforeClose)||t.error(o+"The paramater 'onBeforeClose' it has to be a function."),s.onBeforeClose},i._doValid_onAfterClose=function(){return t.isFunction(s.onAfterClose)||t.error(o+"The paramater 'onAfterClose' it has to be a function."),s.onAfterClose};var c=function(){for(var e in s)if(r.hasOwnProperty(e)){var a="_doValid_"+e;i.hasOwnProperty(a)||t.error(o+"Setting '"+e+"' needs a validation function."),s[e]=i[a]()}else t.error(o+"Setting '"+e+"' is not recognized as a word without making dictionary plugin.")};return c(),this.toAMBObject=function(){return s},this},t.allSIGEDynamicMessageBox=function(e){var a,n,r=t.allSIGEDynamicMessageBoxSettings(e).toAMBObject(),s=500,i=!1,l={modal:{tag:"div",styleClass:"message-box-modal",showModal:!0,getContainer:function(){return"body"},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-modal";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},doOpen:function(){this.showModal&&(t(this.getDataSelector()).addClass(r.effects.modalIn),t(this.getDataSelector()).addClass("animated"),t(this.getDataSelector()).show())},doClose:function(){t(this.getDataSelector()).removeClass(r.effects.modalIn),t(this.getDataSelector()).addClass(r.effects.modalOut);var e=this;window.setTimeout(function(){t(e.getDataSelector()).hide()},s)}},container:{tag:"div",styleClass:"message-box-container",hasSpecialConfig:!0,getContainer:function(){return"body"},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-container";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},doOpen:function(){t(this.getDataSelector()).show()},doClose:function(){var e=this;window.setTimeout(function(){t(e.getDataSelector()).hide()},s)},doSpecialConfig:function(){t(this.getDataSelector()).animate({scrollTop:0},"fast")}},main:{tag:"section",styleClass:"message-box-body",hasSpecialConfig:!0,getContainer:function(){return l.container.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-main";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},doOpen:function(){t(this.getDataSelector()).addClass(r.effects.boxIn),t(this.getDataSelector()).addClass("animated"),t(this.getDataSelector()).show()},doClose:function(){t(this.getDataSelector()).removeClass(r.effects.boxIn),t(this.getDataSelector()).addClass(r.effects.boxOut);var e=this;window.setTimeout(function(){t(e.getDataSelector()).hide()},s)},doSpecialConfig:function(){t(this.getDataSelector()).addClass(r.defaultStyle),t(this.getDataSelector()).addClass(this.styleClass+"-"+r.boxType),t(this.getDataSelector()).css("width",r.boxSize),t(this.getDataSelector()).css("margin-top",r.topPosition),t(this.getDataSelector()).css("margin-bottom",r.topPosition)}},header:{tag:"header",styleClass:"message-box-header",getContainer:function(){return l.main.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-header";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e}},"header-content":{tag:"div",styleClass:"content",getContainer:function(){return l.header.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-header-content";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)}},"header-options":{tag:"ul",styleClass:"options",getContainer:function(){return l.header.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-header-options";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)}},message:{tag:"div",styleClass:"message-box-message",getContainer:function(){return l.main.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-message";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e}},"message-content":{tag:"div",styleClass:"content",hasSpecialConfig:!0,getContainer:function(){return l.message.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-message-content";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(t(this.getDataSelector()).html()+e)},doSpecialConfig:function(){var t=r.boxShowIcon;t&&(l["message-icon"].doSpecialConfig(),d("message-icon"))}},footer:{tag:"footer",styleClass:"message-box-footer",getContainer:function(){return l.main.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-footer";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e}},"footer-content":{tag:"div",styleClass:"buttons",hasSpecialConfig:!0,getContainer:function(){return l.footer.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-footer-content";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)},doSpecialConfig:function(){t(this.getDataSelector()).css("text-align",r.boxButtonAlign)}},timeout:{tag:"p",styleClass:"message-box-timeout",isBlockAutoCreate:!0,getContainer:function(){var t=r.boxAutoClose.container;return c(t),l[t].getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-timeout";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)}},"message-icon":{tag:"span",styleClass:"message-box-icon",isBlockAutoCreate:!0,hasSpecialConfig:!0,getContainer:function(){return l["message-content"].getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-message-icon";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)},doSpecialConfig:function(){var e=r.boxTypeIcon,o=e[r.boxType];if("img"==o.type){l["message-icon"].tag="img";var a=t(this.getDataSelector());a.attr("src","img/"+o.val)}else{l["message-icon"].tag="span";var a=t(this.getDataSelector());a.addClass(o.val)}}}},c=function(e){return l.hasOwnProperty(e)?!0:(t.error(o+"The type informed is a invalid type."),!1)},u=function(e){return t(l[e].getDataSelector()).is(":visible")},d=function(e){c(e);var o=t("<"+l[e].tag+">",{"class":l[e].styleClass});t(o).attr("data-amb-skel",l[e].getDataSelector(!1)),t(o).appendTo(l[e].getContainer()),l[e].hasSpecialConfig&&l[e].doSpecialConfig()},f=function(e){c(e),t(l[e].getDataSelector()).remove()},g="amb-box-return",h="amb-box-close",b="data-amb-control",m="control",p="label",x="icon",S=function(e){t(t(l["footer-content"].getContainer()).find("["+b+"="+m+"]")).get(e).click()},v=function(){for(var e=[],o=0;o<r.boxButtons.length;o++){var a=r.boxButtons[o].label,n=r.boxButtons[o]["class"],s=r.boxButtons[o]["return"],i=r.boxButtons[o].iconClass,l=r.boxButtons[o].close,c=r.boxButtons[o].props,u=t("<"+c.element+">",{"class":n}),d=t("<span>",{"class":i});if(c.hasOwnProperty("attribs")&&!t.isEmptyObject(c.attribs)){var f="";for(f in c.attribs)t(u).attr(f,c.attribs[f])}if(t(u).attr(b,m),t(u).data(g,s),t(u).data(h,l),""!=a){var S=t("<span>").html(a);t(S).attr(b,p),t(u).html(S)}""!=i&&(t(d).prependTo(u),t(d).attr(b,x)),e.push(u)}return e},C=function(){for(var e=[],o=r.boxHeaderButtons,a=0;a<o.length;a++){var n=r.boxHeaderButtons[a]["return"],s=r.boxHeaderButtons[a].iconClass,i=r.boxHeaderButtons[a].close,l=r.boxHeaderButtons[a].props,c=t("<"+l.element+">",{"class":"control"}),u=t("<span>",{"class":s});if(l.hasOwnProperty("attribs")&&!t.isEmptyObject(l.attribs)){var d="";for(d in l.attribs)t(c).attr(d,l.attribs[d])}t(c).attr(b,m),t(c).data(g,n),t(c).data(h,i),t(c).append(u),e.push(c)}return e},y=function(e){setTimeout(function(){t(t(l["footer-content"].getContainer()+" ["+b+"="+m+"]:eq("+e+")")).focus()},100)},D=function(e){var o=l.modal.getContainer()+" "+e+":eq(0)";t(o).length>0?setTimeout(function(){t(o).focus()},100):y(0)},B=function(){for(var e in l)if(!l[e].isBlockAutoCreate){if("modal"==e&&t(l[e].getDataSelector()).is(":visible")&&!r.boxReloadModal)continue;d(e)}l["header-content"].setContent(r.boxTitle),l["message-content"].setContent(r.boxMessage),l["footer-content"].setContent(v()),r.boxShowHeaderControls&&l["header-options"].setContent(C()),M(),P(),O(),L(),r.boxShortcuts.enabled&&k()},w=function(){i=!0,r.onBeforeShow(V()),l.modal.doOpen(),l.container.doOpen(),l.main.doOpen(),r.onAfterShow(V())},_=function(){i=!1,r.onBeforeClose(V()),l.modal.doClose(),l.container.doClose(),l.main.doClose(),r.onAfterClose(V()),t("html").off("keydown"),F(),A(!0)},T=function(t){for(var e in l)("modal"!=e||!E||t||r.boxReloadModal)&&f(e)},A=function(t){void 0===t?t=!1:"",t?window.setTimeout(function(){T(t)},500):T(t)},O=function(){r.closeOnClickModal&&t(l.container.getDataSelector()).click(function(e){t(e.target).data("amb-skel")==l.container.getDataSelector(!1)&&_()})},k=function(){t("html").off("keydown"),t("html").on("keydown",function(t){var e="number"==typeof t.which?t.which:t.keyCode;e==r.boxShortcuts.closeKeyCode&&u("container")&&_();var o=0;for(var a in r.boxButtons){var n=r.boxButtons[a].shortcutCharCode;void 0!=n&&e==n&&S(o),o++}})},I=function(t,e,o){var a={};a.result=t,a.resultLocation=o,a.dataParams=r.dataParams,r.onSuccess(a),e&&_()},V=function(){var t={};return t.result="onEvent",t.dataParams=r.dataParams,t},P=function(){var e=t(l["footer-content"].getDataSelector()).selector+","+t(l["header-options"].getDataSelector()).selector;t(e).find("["+b+"="+m+"]").click(function(){var e=t(this).data(g),o=t(this).data(h);I(e,o,"BUT")})},M=function(){var e=r.boxAlternateReturn;""!==e.selector&&t(e.selector).click(function(){I(t(e.selector).get(0),e.close,"ALT")})},H=function(){var t=r.boxButtonDefaultPosition,e=r.boxFocusOnLoad;return""!=e.selector?(D(e.selector),"loadFocus"):(y(t),"buttonFocus")},F=function(){clearInterval(a),clearTimeout(n)},L=function(){var t=r.boxAutoClose.timeout,e=r.boxAutoClose.message,o=function(t){return e.replace("%s%",t)};if(t>0){d("timeout");var s=function(t){l.timeout.setContent(o(t))},i=t/1e3;s(i),a=setInterval(function(){i--,s(i)},1e3),n=setTimeout(function(){_(),clearInterval(a)},t)}},E=!1,R=function(){var e=!1;t(l.container.getDataSelector()).length>=1&&(e=r.blockWhenOpen,E=!0,e||A(!1)),e||(B(),w(),H())};return R(),this.getMBSettings=function(){return l},this.isOpen=function(){return i},this}}(jQuery);
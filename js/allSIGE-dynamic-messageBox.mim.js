"use strict";!function(t){var e,o="allSIGE MessageBox - ";t.allSIGEDynamicMessageBoxSettings=function(a,n){void 0===n?n=!1:"";var r={boxType:"none",boxShowIcon:!1,boxShowHeaderControls:!0,boxReloadModal:!1,boxTypeIcon:{none:{type:"img",val:"none.png"},success:{type:"img",val:"success.png"},error:{type:"img",val:"error.png"},info:{type:"img",val:"info.png"},alert:{type:"img",val:"alert.png"}},boxSize:"md",boxTitle:"allSIGE MessageBox",boxMessage:"",boxButtons:[],boxHeaderButtons:[],boxButtonDefaultPosition:1,boxButtonAlign:"right",boxAutoClose:{timeout:0,message:"Closing in %s% seconds...",container:"message"},boxAlternateReturn:{selector:"",close:!0},defaultStyle:"style01",topPosition:"100px",closeOnClickModal:!0,effects:{modalIn:"fadeIn",modalOut:"fadeOut",boxIn:"fadeInDown",boxOut:"fadeOutUp"},onSuccess:function(t){},onBeforeShow:function(){},onAfterShow:function(){},onBeforeClose:function(){},onAfterClose:function(){}};n&&(e=t.extend(!0,{},r,e,a)),a=t.extend(!0,{},r,e,a);var i=t.extend(!0,{},e,a),s={},l=["em","rem","ex","px","%","pt","pc","mm","cm","in","vh","vw","vmin","vmax","ch"];s._doValid_boxType=function(){return i.boxType},s._doValid_boxSize=function(){var e,a,n=i.boxSize,r=["330","420","585","880","100"],s=["xs","sm","md","lg","full"],c=t.inArray(n,s);return c>=0?(a=r[c],e="full"==s[c]?"%":"px"):(e=n.replace(/[0-9]/g,""),a=parseInt(n),(""===a||0>a||isNaN(a))&&t.error(o+"The paramater 'boxSize' it has to be a no empty and integer."),-1==t.inArray(e,l)&&t.error(o+"The allowable values for the parameter 'boxSize' are "+l.splice(0)+".")),a+e},s._doValid_boxTitle=function(){return i.boxTitle},s._doValid_boxMessage=function(){return i.boxMessage},s._doValid_boxButtons=function(){var e=i.boxButtons;t.isArray(e)||t.error(o+"The paramater 'boxButtons' it has to be a array of objects.");var a={label:"","class":"btn","return":"OK",close:!0,iconClass:"",props:{element:"button",attribs:{}}};e.length<=0?e.push(a):"";for(var n=0;n<e.length;n++){e[n]=t.extend(!0,{},a,e[n]),""===e[n].label&&""===e[n].iconClass&&(e[n].label="OK");var r=e[n].props.element;(""===r||t.isNumeric(r))&&t.error(o+"The paramater 'boxButtons[props][element]' it has to be a html element.")}return e},s._doValid_boxHeaderButtons=function(){var e=i.boxHeaderButtons;t.isArray(e)||t.error(o+"The paramater 'boxHeaderButtons' it has to be a array of objects.");var a={"return":"OK",close:!0,iconClass:"fa fa-close",props:{element:"li",attribs:{}}};e.length<=0?e.push(a):"";for(var n=0;n<e.length;n++){e[n]=t.extend(!0,{},a,e[n]);var r=e[n].props.element;(""===r||t.isNumeric(r))&&t.error(o+"The paramater 'boxHeaderButtons[props][element]' it has to be a html element.")}return e},s._doValid_boxTypeIcon=function(){var e=i.boxTypeIcon,a={type:"img",val:"none.png"};for(var n in e)e[n]=t.extend(!0,{},a,e[n]);return e.hasOwnProperty(i.boxType)||t.error(o+"The paramater 'boxTypeIcon' must have a position with the same type of parameter 'boxType'."),e},s._doValid_boxButtonDefaultPosition=function(){var e=parseInt(i.boxButtonDefaultPosition-1);return(""===e||0>e||isNaN(e))&&t.error(o+"The paramater 'boxButtonDefaultPosition' it has to be a no empty and integer."),i.boxButtons.length>0&&void 0===i.boxButtons[e]&&t.error(o+"Not found an button in the position "+(e+1)+" in 'boxButtonDefaultPosition'."),e},s._doValid_boxAlternateReturn=function(){var t=i.boxAlternateReturn;return t},s._doValid_boxButtonAlign=function(){var e=i.boxButtonAlign,a=["left","right","center"];return-1==t.inArray(e,a)&&t.error(o+"The allowable values for the parameter 'boxButtonAlign' are "+a.splice(0)+"."),e},s._doValid_boxAutoClose=function(){var e=i.boxAutoClose;return t.isNumeric(e.timeout)||t.error(o+"The paramater 'boxAutoClose[timeout]' it has to be a no empty and integer."),e.timeout=1e3*e.timeout,e},s._doValid_defaultStyle=function(){return i.defaultStyle},s._doValid_topPosition=function(){var e=i.topPosition,a=e.replace(/[0-9]/g,"");parseInt(e);return-1==t.inArray(a,l)&&t.error(o+"The allowable values for the parameter 'topPosition' are "+l.splice(0)+"."),e},s._doValid_closeOnClickModal=function(){var t=i.closeOnClickModal;return t=t?!0:!1},s._doValid_boxReloadModal=function(){var t=i.boxReloadModal;return t=t?!0:!1},s._doValid_boxShowIcon=function(){var t=i.boxShowIcon;return t=t?!0:!1},s._doValid_boxShowHeaderControls=function(){var t=i.boxShowHeaderControls;return t=t?!0:!1},s._doValid_effects=function(){var t=i.effects;return t},s._doValid_onSuccess=function(){return t.isFunction(i.onSuccess)||t.error(o+"The paramater 'onSuccess' it has to be a function."),i.onSuccess},s._doValid_onBeforeShow=function(){return t.isFunction(i.onBeforeShow)||t.error(o+"The paramater 'onBeforeShow' it has to be a function."),i.onBeforeShow},s._doValid_onAfterShow=function(){return t.isFunction(i.onAfterShow)||t.error(o+"The paramater 'onAfterShow' it has to be a function."),i.onAfterShow},s._doValid_onBeforeClose=function(){return t.isFunction(i.onBeforeClose)||t.error(o+"The paramater 'onBeforeClose' it has to be a function."),i.onBeforeClose},s._doValid_onAfterClose=function(){return t.isFunction(i.onAfterClose)||t.error(o+"The paramater 'onAfterClose' it has to be a function."),i.onAfterClose};var c=function(){for(var e in i)if(r.hasOwnProperty(e)){var a="_doValid_"+e;s.hasOwnProperty(a)||t.error(o+"Setting '"+e+"' needs a validation function."),i[e]=s[a]()}else t.error(o+"Setting '"+e+"' is not recognized as a word without making dictionary plugin.")};return c(),this.toAMBObject=function(){return i},this},t.allSIGEDynamicMessageBox=function(e){var a,n,r=t.allSIGEDynamicMessageBoxSettings(e).toAMBObject(),i=500,s=!1,l={modal:{tag:"div",styleClass:"message-box-modal",showModal:!0,getContainer:function(){return"body"},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-modal";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},doOpen:function(){this.showModal&&(t(this.getDataSelector()).addClass(r.effects.modalIn),t(this.getDataSelector()).addClass("animated"),t(this.getDataSelector()).show())},doClose:function(){t(this.getDataSelector()).removeClass(r.effects.modalIn),t(this.getDataSelector()).addClass(r.effects.modalOut);var e=this;window.setTimeout(function(){t(e.getDataSelector()).hide()},i)}},container:{tag:"div",styleClass:"message-box-container",hasSpecialConfig:!0,getContainer:function(){return"body"},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-container";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},doOpen:function(){t(this.getDataSelector()).show()},doClose:function(){var e=this;window.setTimeout(function(){t(e.getDataSelector()).hide()},i)},doSpecialConfig:function(){t(this.getDataSelector()).animate({scrollTop:0},"fast")}},main:{tag:"section",styleClass:"message-box-body",hasSpecialConfig:!0,getContainer:function(){return l.container.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-main";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},doOpen:function(){t(this.getDataSelector()).addClass(r.effects.boxIn),t(this.getDataSelector()).addClass("animated"),t(this.getDataSelector()).show()},doClose:function(){t(this.getDataSelector()).removeClass(r.effects.boxIn),t(this.getDataSelector()).addClass(r.effects.boxOut);var e=this;window.setTimeout(function(){t(e.getDataSelector()).hide()},i)},doSpecialConfig:function(){t(this.getDataSelector()).addClass(r.defaultStyle),t(this.getDataSelector()).addClass(this.styleClass+"-"+r.boxType),t(this.getDataSelector()).css("width",r.boxSize),t(this.getDataSelector()).css("margin-top",r.topPosition),t(this.getDataSelector()).css("margin-bottom",r.topPosition)}},header:{tag:"header",styleClass:"message-box-header",getContainer:function(){return l.main.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-header";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e}},"header-content":{tag:"div",styleClass:"content",getContainer:function(){return l.header.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-header-content";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)}},"header-options":{tag:"ul",styleClass:"options",getContainer:function(){return l.header.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-header-options";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)}},message:{tag:"div",styleClass:"message-box-message",getContainer:function(){return l.main.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-message";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e}},"message-content":{tag:"div",styleClass:"content",hasSpecialConfig:!0,getContainer:function(){return l.message.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-message-content";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(t(this.getDataSelector()).html()+e)},doSpecialConfig:function(){var t=r.boxShowIcon;t&&(l["message-icon"].doSpecialConfig(),u("message-icon"))}},footer:{tag:"footer",styleClass:"message-box-footer",getContainer:function(){return l.main.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-footer";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e}},"footer-content":{tag:"div",styleClass:"buttons",hasSpecialConfig:!0,getContainer:function(){return l.footer.getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-footer-content";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)},doSpecialConfig:function(){t(this.getDataSelector()).css("text-align",r.boxButtonAlign)}},timeout:{tag:"p",styleClass:"message-box-timeout",isBlockAutoCreate:!0,getContainer:function(){var t=r.boxAutoClose.container;return c(t),l[t].getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-timeout";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)}},"message-icon":{tag:"span",styleClass:"message-box-icon",isBlockAutoCreate:!0,hasSpecialConfig:!0,getContainer:function(){return l["message-content"].getDataSelector()},getDataSelector:function(t){void 0==t?t=!0:"";var e="box-message-icon";return e=t?this.tag+'[data-amb-skel="'+e+'"]':e},setContent:function(e){t(this.getDataSelector()).html(e)},doSpecialConfig:function(){var e=r.boxTypeIcon,o=e[r.boxType];if("img"==o.type){l["message-icon"].tag="img";var a=t(this.getDataSelector());a.attr("src","img/"+o.val)}else{l["message-icon"].tag="span";var a=t(this.getDataSelector());a.addClass(o.val)}}}},c=function(e){return l.hasOwnProperty(e)?!0:(t.error(o+"The type informed is a invalid type."),!1)},u=function(e){c(e);var o=t("<"+l[e].tag+">",{"class":l[e].styleClass});t(o).attr("data-amb-skel",l[e].getDataSelector(!1)),t(o).appendTo(l[e].getContainer()),l[e].hasSpecialConfig&&l[e].doSpecialConfig()},d=function(e){c(e),t(l[e].getDataSelector()).remove()},f="amb-box-return",g="amb-box-close",b="data-amb-control",h="control",m="label",p="icon",x=function(){for(var e=[],o=0;o<r.boxButtons.length;o++){var a=r.boxButtons[o].label,n=r.boxButtons[o]["class"],i=r.boxButtons[o]["return"],s=r.boxButtons[o].iconClass,l=r.boxButtons[o].close,c=r.boxButtons[o].props,u=t("<"+c.element+">",{"class":n}),d=t("<span>",{"class":s});if(c.hasOwnProperty("attribs")&&!t.isEmptyObject(c.attribs)){var x="";for(x in c.attribs)t(u).attr(x,c.attribs[x])}if(t(u).attr(b,h),t(u).data(f,i),t(u).data(g,l),""!=a){var S=t("<span>").html(a);t(S).attr(b,m),t(u).html(S)}""!=s&&(t(d).prependTo(u),t(d).attr(b,p)),e.push(u)}return e},S=function(){for(var e=[],o=r.boxHeaderButtons,a=0;a<o.length;a++){var n=r.boxHeaderButtons[a]["return"],i=r.boxHeaderButtons[a].iconClass,s=r.boxHeaderButtons[a].close,l=r.boxHeaderButtons[a].props,c=t("<"+l.element+">",{"class":"control"}),u=t("<span>",{"class":i});if(l.hasOwnProperty("attribs")&&!t.isEmptyObject(l.attribs)){var d="";for(d in l.attribs)t(c).attr(d,l.attribs[d])}t(c).attr(b,h),t(c).data(f,n),t(c).data(g,s),t(c).append(u),e.push(c)}return e},v=function(e){t(t(l["footer-content"].getContainer()+" ["+b+"="+h+"]:eq("+e+")")).focus()},C=function(){for(var e in l)if(!l[e].isBlockAutoCreate){if("modal"==e&&t(l[e].getDataSelector()).is(":visible")&&!r.boxReloadModal)continue;u(e)}l["header-content"].setContent(r.boxTitle),l["message-content"].setContent(r.boxMessage),l["footer-content"].setContent(x()),r.boxShowHeaderControls&&l["header-options"].setContent(S()),O(),A(),_(),k()},D=function(){s=!0,r.onBeforeShow(),l.modal.doOpen(),l.container.doOpen(),l.main.doOpen(),r.onAfterShow()},y=function(){s=!1,r.onBeforeClose(),l.modal.doClose(),l.container.doClose(),l.main.doClose(),r.onAfterClose(),I(),w(!0)},B=function(t){for(var e in l)("modal"!=e||!V||t||r.boxReloadModal)&&d(e)},w=function(t){void 0===t?t=!1:"",t?window.setTimeout(function(){B(t)},500):B(t)},_=function(){r.closeOnClickModal&&t(l.container.getDataSelector()).click(function(e){t(e.target).data("amb-skel")==l.container.getDataSelector(!1)&&y()})},T=function(t,e,o){var a={};a.result=t,a.resultLocation=o,r.onSuccess(a),e&&y()},A=function(){var e=t(l["footer-content"].getDataSelector()).selector+","+t(l["header-options"].getDataSelector()).selector;t(e).find("["+b+"="+h+"]").click(function(){var e=t(this).data(f),o=t(this).data(g);T(e,o,"BUT")})},O=function(){var e=r.boxAlternateReturn;""!==e.selector&&t(e.selector).click(function(){T(t(e.selector).get(0),e.close,"ALT")})},I=function(){clearInterval(a),clearTimeout(n)},k=function(){var t=r.boxAutoClose.timeout,e=r.boxAutoClose.message,o=function(t){return e.replace("%s%",t)};if(t>0){u("timeout");var i=function(t){l.timeout.setContent(o(t))},s=t/1e3;i(s),a=setInterval(function(){s--,i(s)},1e3),n=setTimeout(function(){y(),clearInterval(a)},t)}},V=!1,M=function(){t(l.container.getDataSelector()).length>=1&&(V=!0,w(!1)),C(),D(),v(r.boxButtonDefaultPosition)};return M(),this.getMBSettings=function(){return l},this.isOpen=function(){return s},this}}(jQuery);
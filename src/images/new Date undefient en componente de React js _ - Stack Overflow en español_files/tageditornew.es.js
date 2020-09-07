"use strict";StackExchange.tagEditor=function(e,t,n,i){function o(){N=!0}function r(){if("undefined"==typeof yt){for(var e=StackExchange.tagEditor.requiredTags,t=[],n=0;n<e.length;n++)t.push(f(e[n]).replace(/[.+]/g,"\\$&"));yt=new RegExp("^(?:"+t.join("|")+")$")}return yt}function a(){if(!i.ignoreRequired){var e=StackExchange.tagEditor.requiredTags;if(e&&/^ ?$/.test(pt.val())){var t=r();0===ft.add(ht).children().filter(function(){return t.test($(this).text())}).length&&A(StackExchange.tagEditor.requiredTags)}}}function s(e,t){var n=W(e);if(i.tagMenus&&n.data("tag-menu-tagname",e),!t){if(n.hasClass("s-tag")){var o="<svg class='svg-icon iconClearSm pe-none' width='14' height='14' viewBox='0 0 14 14'><path d='M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z'></path></svg>",r=$("<a>",{"class":"js-delete-tag s-tag--dismiss","title":i.tooltipDeleteTag||"Eliminar etiqueta"});r.append($(o)),n.append(r)}else n.append($("<span>",{"class":"js-delete-tag delete-tag","title":i.tooltipDeleteTag||"Eliminar etiqueta"}));et.trigger("tagSpanCreated",[n])}return i.tagSpanCreated&&i.tagSpanCreated(n),n}function c(e){var t=$([]),n=$([]);switch(e){case jt.all:t=ft.find(".rendered-element"),n=ht.find(".rendered-element");break;case jt.left:t=ft.find(".rendered-element:last");break;case jt.right:n=ht.find(".rendered-element:first");break;case jt.all_left:t=ft.find(".rendered-element");break;case jt.all_right:n=ht.find(".rendered-element")}return{"pre":t,"post":n}}function l(e){e=e||jt.all;var t=c(e),n=t.pre.map(function(e,t){return $(t).text()}).get(),i=n.join(" ");i.length&&(i+=" ");var o=t.post.map(function(e,t){return $(t).text()}).get(),r=o.join(" ");r.length&&pt.val().length&&(r=" "+r);var a=pt.val();return n=n.concat(o),{"text":i+pt.val()+r,"lengthBeforeInput":i.length,"val":a,"tags":n}}function u(t){t=t||l(),setTimeout(function(){e.trigger("tageditor:renderedchange",[t.tags,t.val])}),y()}function d(){var e=pt.val();return(""===e||" "===e)&&0===ft.add(ht).children().filter(function(){return!/^\s*$/.test($(this).text())}).length}function f(e){return i.getTagNameFromData?i.getTagNameFromData(e):e.Name}function p(e){e=e||jt.all;var t=pt.caret(),n=pt[0].selectionDirection,i=c(e);if(i.pre.add(i.post).length){var o=l(e);pt.val(o.text),i.pre.remove(),i.post.remove(),pt.caret(t.start+o.lengthBeforeInput,t.end+o.lengthBeforeInput),ct&&(pt[0].selectionDirection=n),D(),u()}}function h(e){if(i.operators&&i.operators.test(e))return $("<span class='rendered-element'/>").text(e);var t=s(e).addClass("rendered-element");return g(e)||t.addClass("invalid-tag temp-tag__danger").attr("title",i.tooltipInvalidTag||"etiqueta inválida"),t}function g(e){return i.invalid&&i.invalid[e]?!1:i.isTagValid&&!i.isTagValid(e)?!1:!0}function m(t){if(!wt){var n;if(n=t?{"start":pt.val().length,"end":pt.val().length}:pt.caret(),-1==n.start&&(n.start=n.end=0),!ct&&n.start!==n.end)return p(),y(),void 0;var o=pt.val(),r=o.substr(0,n.start),s=o.substr(n.end),c=pt[0].selectionDirection,f=i.customCleanUpSplitRegex||/[,;\s]+/,g=(r+"!").split(f);g[g.length-1]="!"===g[g.length-1]?"":g[g.length-1].slice(0,-1);var m=s.split(f),v=g.pop(),b=v.length;v+=o.substring(n.start,n.end),v+=m.shift(),g=K(g.join(" ")),m=K(m.join(" "));var w,k=!!g.length||!!m.length;for(w=0;w<g.length;w++)h(g[w]).appendTo(ft);for(w=0;w<m.length;w++)h(m[w]).appendTo(ht);v!==pt.val()&&pt.val(v);var x=et.find(".rendered-element"),S=Q(x.map(function(e,t){return $(t).text()}),ft.find(".rendered-element").length);w=0,x.filter(function(){return!S[w++]}).remove();var E=l(),C=$.trim(E.text);C!=e.val()&&(e.val(C).trigger("change"),StackExchange.MarkdownEditor&&!i.ignoreStyleCode&&styleCode.updateLangdivDelayed.trigger(C.split(/ /g))),k&&u(E),N&&(pt.caret(b,b+n.end-n.start),ct&&(pt[0].selectionDirection=c),j(),a()),y(),d()?pt.attr("placeholder")!==z&&pt.attr("placeholder",z):""!==pt.attr("placeholder")&&pt.attr("placeholder","")}}function v(e,t,n,i){var o,r;if("string"==typeof e)r=e;else{if(!e.length)return;o=e,r=o.text()}for(var a=K(pt.val()),s=0;s<a.length;s++)h(a[s]).appendTo(ft);if(pt.val(r),o){var c=$($.unique(o.prevAll(".rendered-element").get()));o.nextAll(".rendered-element").prependTo(ht),c.appendTo(ft),o.remove()}else ht.find(".rendered-element").appendTo(ft);(N||!n)&&pt.focus(),t&&pt.caret(0,0),i||u()}function b(e){var t=e.val(),n="c_"+t;if(n in Tt)return Tt[n];var i=$("<span />").css({"font-family":e.css("font-family"),"font-size":e.css("font-size"),"display":"inline-block"});i.text(e.val()),i.insertAfter(e);var o=i.innerWidth();return i.remove(),Tt[n]=o,o}function y(){st&&(Z=et.innerWidth());{var e=b(pt)+19;ft.outerWidth()}pt.css("width",e);var t=pt.position().top,n=t;return n>0&&dt>n+ut?void 0:t+et.scrollTop()+ut<dt?(et.scrollTop(0),void 0):(et.scrollTop(t-(dt-ut)/2+et.scrollTop()),void 0)}function w(e,t){var n;n=e>0?ht.find("> *"):ft.find("> *");for(var i,o,r=pt.position(),a=pt.val().length,s=a>0?pt.caret().start/a:.5,c=r.left+pt.width()*s,l=0;l<n.length;l++){var u=n.eq(e>0?l:n.length-l-1),d=u.position();if("undefined"!=typeof o){if(d.top!==o)break}else{var f=Math.abs(d.top-r.top);if(!(f>ut/2))continue;o=d.top}var h=d.left+u.width()/2;if(0>e&&c>h||e>0&&h>c){i=i||u;break}i=u}if(i){if(t){for(;i.parent().length;)p(e>0?jt.right:jt.left);pt.caret(0,pt.val().length)}else v(i);return!0}return!1}function k(){$t=!0,setTimeout(function(){$t=!1},0)}function x(){var e=K(pt.val())[0];if(e){var t=$("<span data-tag-name='"+e+"'/>");M(t)}}function S(e){if(!ct&&e.shiftKey&&It[e.which]||e.ctrlKey&&65===e.which)return p(),!0;var t,n,o=pt.caret(),r=pt[0].selectionDirection,a="forward"===r?o.end:o.start,s=a===pt.val().length,c=0===a;switch(e.which){case 37:return c?(t=ft.find(".rendered-element:last"),t.length?(e.shiftKey?p(jt.left):v(t),e.shiftKey):!0):!0;case 39:return s?(n=ht.find(".rendered-element:first"),n.length?(e.shiftKey?p(jt.right):v(n,!0),e.shiftKey):!0):!0;case 8:return c?(t=ft.find(".rendered-element:last"),t.length?(pt.val(t.text()+pt.val()),pt.caret(t.text().length,t.text().length),t.remove(),u(),!1):!0):!0;case 46:return s?(n=ht.find(".rendered-element:first"),n.length?(pt.val(pt.val()+n.text()),pt.caret(a,a),n.remove(),u(),!1):!0):!0;case 38:if(w(-1,e.shiftKey))return!1;case 36:return t=ft.find(".rendered-element:first"),t.length?(e.shiftKey?p(jt.all_left):v(t,!0),e.shiftKey):!0;case 40:var l=X.children("div:first");if(l.length)return k(),l.focus(),!1;if(w(1,e.shiftKey))return!1;case 35:return n=ht.find(".rendered-element:last"),n.length?(e.shiftKey?p(jt.all_right):v(n),e.shiftKey):!0;case 9:k(),i.renderErrorTagIfNoResults&&!C()&&x();break;case 13:if(C())return!1;break;case 32:if(i.spaceSelectsTopSuggestion===!1)return!1;if(i.spaceSelectsTopSuggestion&&C())return M(X.children("div:first")),!1}return!0}function E(e){return 27===e.which&&X.length>0?(D(),e.preventDefault(!0),e.stopPropagation(),!1):!0}function C(){return!!X.length&&!X.hasClass("no-results")}function j(){var e=Y(pt.val());return e&&(i.searchTermModifier&&(e=i.searchTermModifier(e)),i.allowUpperCaseTagNames&&(e=e.toLocaleLowerCase())),Et!==e?(Et=e,e&&e.length?(T(e,function(t){e===Et&&N&&A(t,e)}),void 0):(kt()||D(),void 0)):void 0}function T(e,t){var n=O(e);Ot[n]?t(Ot[n]):At.trigger(e,t)}function I(){return i.tagApiUrl||"/filter/tags"}function O(e){return I()+"|"+e}function A(e,t){X.remove(),wt=!1;for(var n=et.height(),o=J(et.find(".rendered-element").map(function(e,t){return $(t).text()}).get(),ft.find(".rendered-element").length),r=e.length-1;r>=0;r--)-1!==o.indexOf(f(e[r]))&&e.splice(r,1);var a=e.length;if(0===a)return X=$("<div class='tag-suggestions no-results box-border fs-cation fc-light c-default'>No se han encontrado resultados</div>").css({"position":"absolute","left":et.position().left,"top":et.position().top+n+1,"width":nt}).insertAfter(et),void 0;X=$("<div class='tag-suggestions js-tag-suggestions box-border' />").css({"position":"absolute","left":et.position().left,"top":et.position().top+n+1,"width":nt}).insertAfter(et),i.onCreatingTagSuggestions&&i.onCreatingTagSuggestions(o||[]);for(var s=i.suggestionTagBoxRenderer||P,r=0;r<e.length;r++){var c=s(e[r],t).attr("tabindex",gt||0).addClass("js-tag-suggestion").appendTo(X);_(c),r%V!==0||ot||c.css("clear","both")}X.on({"keydown":U,"keyup":F,"click":function(e){R(e)||(M($(this)),e.stopPropagation())},"focus":function(){$t&&1===a?M($(this)):wt=!0},"blur":function(){wt=!1}},".js-tag-suggestion")}function P(e,t){var n=f(e),o=$("<div class='f:bs-ring outline-none' />").css("width",ot?"auto":it).data("tag-name",(e.Negated?"not ":"")+(e.SynonymOf||n)),r=$("<div class='grid ai-center' />"),a=$("<div class='grid--cell mr6' />");o.append(r),r.append(a),t&&(t=t.replace(/-/g,"").replace(/\*+/g,"	").replace(/([^\t])(?=[^\t])/g,"$1-*").replace(/\+/g,"\\+").replace(/\./g,"\\.").replace(/\t/g,".*"));var c=i.operators&&i.operators.test(n),l=c?$('<span class="px4 fs-caption">').text(n):s(n,!0),u=l.html();if(t&&(u=u.replace(new RegExp("("+t+")"),"<span class='match'>$1</span>")),ot&&l.addClass("m0"),e.Negated&&r.prepend($('<div class="grid--cell mr6 fs-caption">').text("not")),a.append(l.html(u)),!e.Count||ot||c||r.append($("<div class='grid--cell fs-fine truncate mr6' />").html(e.Count)),H&&!ot&&!c){var d="";if(e.Excerpt&&(d=e.Excerpt),d.length&&o.append($("<p class='mt6 mb0 v-truncate4 lh-md' />").text(d)),e.Synonyms&&e.Synonyms.length)for(var p=$("<p >además:</p>").appendTo(o),h=e.Synonyms.split(/\|/),g=0;g<h.length;g++)d=h[g],t&&(d=d.replace(new RegExp("("+t+")"),"<span class='match'>$1</span>")),g>0&&(d=", "+d),p.append("<span>"+d+"</span>")}if(G&&!ot&&!c){var m=e.InfoUrl;m||(m=(e.IsDiverged?StackExchange.options.site.routePrefix:"")+"/tags/"+encodeURIComponent(e.SynonymOf||n)+"/info"),$('<a class="ml-auto grid--cell s-btn s-btn__muted p2 js-tag-info-btn" target="_blank" />').attr("href",m).append(Svg.HelpSm).appendTo(r)}return o}function _(e){var t=e.find("p.more-info");"undefined"==typeof Ct&&(Ct=it-5-t.outerWidth());var n=e.find(".rendered-element:first").outerWidth();n>Ct&&t.find("a").text("Información")}function M(e){pt.val(e.data("tag-name")),D(),v(""),m()}function L(e){StackExchange.options.enableLogging&&(console.log("tag editor new: "+e),"string"!=typeof e&&console.log(e))}function D(){X.remove(),X=$(),wt=!1,At.cancel()}function R(e){return $(e.target).closest("a").length>0}function U(e){var t;switch(e.which){case 39:case 40:return $(this).next("div").focus(),!1;case 37:return $(this).prev("div").focus(),!1;case 38:return t=$(this).prev("div"),t.length?t.focus():pt.focus(),!1;case 13:if(R(e))break;return M($(this)),!1;case 32:return i.spaceSelectsTopSuggestion&&M($(this)),!1}}function F(e){return 27===e.which?(D(),pt.focus(),e.stopPropagation(),!1):!0}var N;if("undefined"==typeof n)try{N=e.is(":focus")}catch(B){N=!1}else N=n;if(e.bind("focus",o),!e.is(":visible")){t=t||0;var q=$("body").is(":visible");return 3>t?(setTimeout(function(){e.unbind("focus",o),StackExchange.tagEditor(e,t+(q?1:0),N,i)},300),void 0):(e.unbind("focus",o),$("body.review-task-page").length||StackExchange.debug.log("tag box is invisible, couldn't start tag editor"),void 0)}i||(i={});var V=i.columns||3,H="undefined"==typeof i.excerpts||i.excerpts,G="undefined"==typeof i.learnMore||i.learnMore,z=e.attr("placeholder")||"",W=i.renderTag||function(e){return window.tagRenderer(e,null,"span",i.useStacksClasses)},Q=i.customFilterTags||function(e){var t={};return e.map(function(e){return/^\s*$/.test(e)?!1:t[e]===!0?!1:(i.operators&&i.operators.test(e)||(t[e]=!0),!0)})},J=i.customExistingTags||function(e){return e},K=i.customSafeTags||function(e){var t=StackExchange.helpers.sanitizeAndSplitTags(e,!1,!!i.operators,i.allowUpperCaseTagNames)||[];return e&&$.trim(e)&&L('safeTags("{0}") => {1}'.formatUnicorn(e,t.toString())),t},Y=i.sanitizeSearchTerm||function(e){return K(e)[0]},X=$();e.unbind("focus",o);var Z=e.innerWidth(),et=$("<div class='js-tag-editor tag-editor multi-line' />").insertAfter(e);et.data("target-field",e.get(0)),i.extraTagEditorCssClass&&et.addClass(i.extraTagEditorCssClass),["padding-right","padding-left","box-sizing","margin-top","margin-bottom"].forEach(function(t){et.css(t,e.css(t))});var tt="border-box"===e.css("box-sizing");tt&&(Z+=parseInt(et.css("border-right-width"),10)+parseInt(et.css("border-left-width"),10));var nt=i.suggestionsWidth||Z,it=(nt-12)/V|0,ot=i.responsiveIsh&&150>it;et.css("width",Z);var rt=e.css("display");e.hide();var at=getComputedStyle(e[0]).width,st=/%$/.test(at);st&&et.css("width",at),"inline"===rt&&et.css("display","inline-block");var ct="selectionDirection"in e[0],lt=W("test").appendTo(et),ut=tt?et.outerHeight():et.innerHeight(),dt=e.innerHeight();lt.remove(),tt&&(dt+=parseInt(et.css("border-top-width"),10)+parseInt(et.css("border-bottom-width"),10));var ft=$("<span />").appendTo(et),pt=$("<input type='text' autocomplete='off' tabIndex='0'/>").appendTo(et).val(e.val()+" ").attr("placeholder",z),ht=$("<span />").appendTo(et),gt=e.attr("tabIndex"),mt=e.attr("id");if(mt){var vt=$("label[for='"+mt+"']");if(vt.length){var bt="tageditor-replacing-"+mt+"--input";pt.attr("id",bt),vt.attr("for",bt)}}gt&&pt.attr("tabIndex",gt),e.hasClass("s-input")&&(et.addClass("s-input").css({"paddingTop":0,"paddingBottom":0}),pt.addClass("s-input")),pt.addClass("js-tageditor-replacing");var yt,wt=!1,kt=function(){return i.showAllWhenEmptyAndFocused&&i.getDataPromise&&d()?(i.getDataPromise("").done(function(e){A(e.slice(0,StackExchange.settings.mentions.maxNumUsersInDropdown))}),!0):!1},xt=N;pt.focus(function(t,n){N=!0,a(),xt||(n||e.triggerHandler("focus",!0),xt=!0),kt()});var St=!1;et.mousedown(function(){St=!0,$(document).one("mouseup",function(){setTimeout(function(){N||(e.triggerHandler("blur"),xt=!1),St=!1},0)})}),pt.blur(function(){N=!1,setTimeout(function(){wt||(D(),m(),St||(e.triggerHandler("blur"),xt=!1)),St=!1},0)}),e.focus(function(e,t){t||pt.trigger("focus",!0)}),pt.on({"keydown":S,"keyup":E,"input":function(){setTimeout(m,0)}}),et.delegate(".rendered-element","click",function(e){var t=$(this);$(e.target).hasClass("js-delete-tag")&&t.text(""),v(t),m()}),et.click(function(e){e.target===this&&(v(""),m())}),et.on("rerender",function(){p(),m(!0)});var $t,Et,Ct,jt={"left":1,"right":2,"all_left":3,"all_right":4,"all":5},Tt={},It={"35":!0,"36":!0,"37":!0,"38":!0,"39":!0,"40":!0},Ot={},At=StackExchange.helpers.DelayedReaction(function(e,t){StackExchange.helpers.addSpinner(et,{"position":"absolute","right":10,"top":dt/2-2});var n=null;if(i.getDataPromise)n=i.getDataPromise(e);else{var o=I(),r={"q":e,"newstyle":!0};i.alterQueryParametersBeforeSend&&i.alterQueryParametersBeforeSend(r),n=$.get(o,r,"json")}n.done(function(n){Ot[O(e)]=n,StackExchange.helpers.removeSpinner(),t(n)})},400,{"sliding":!0});m(!0),StackExchange.tagEditor.ready.resolve(),e[0].func_clear=function(){e.val(""),pt.val("").blur(),et.find(".rendered-element").remove()},e[0].func_add=function(e){var t=pt.val();pt.val(e),v(t,!1,!0),m()},e[0].func_finish=function(){v("")},e[0].func_redraw=function(t){var n=e.val();e.val(""),pt.val("").blur(),et.find(".rendered-element").remove(),pt.val(n),v("",!1,!0,!t),m()}},StackExchange.tagEditor.ready=$.Deferred();
"use strict";StackExchange.ready(function(){function t(){var t=d.data("validation-errors"),e=d.data("validation-warnings");(t||e)&&StackExchange.postValidation.showErrorsAfterSubmission(d,u.Question,m,t,e)}function e(t,e,n){S&&StackExchange.using("gps",function(){StackExchange.gps.track(t,e,n),n&&_.trigger()})}function n(t,n,a){a.forEach(function(a){t.one(a,function(){e("question.action",{"action_type":n+"_"+a},!0)})})}function a(t,e){try{j||(V.removeClass("dno"),StackExchange.editor.finallyInit(),j=!0,d.data("delay-validation")||StackExchange.using("postValidation",function(){StackExchange.postValidation.initOnBlur(V,u.Answer,"post",!1)})),W.fadeTo(t?0:400,1,e)}catch(n){setTimeout(function(){a(t,e)},10)}}function o(){var t=I.find('[data-kp="'+(StackExchange.options.site.routePrefix||"")+'"]').index();I.prop("selectedIndex",t)}function i(){O.addClass("is-loading"),StackExchange.cardiologist.ensureDraftSaved(function(){},!0),StackExchange.postValidation.validatePostFields(d,u.Question,m,!1,function(){return $(".js-visible-before-review").fadeOut().promise()}).then(function(){d.data("delay-validation",!1),StackExchange.postValidation.initOnBlurAndSubmit(d,u.Question,m,!1),T.is(":checked")&&(StackExchange.postValidation.initOnBlur(V,u.Answer,"post",!1),StackExchange.postValidation.validatePostFields(V,u.Answer,"post",!1))}).then(function(){$(".js-visible-during-review").removeClass("d-none").hide().fadeIn(),StackExchange.postValidation.scrollToErrors()}).fail(function(){O.removeClass("is-loading")})}function s(t){var e=[],n=function(t){for(var n=0,a=t;n<a.length;n++){var o=a[n];-1===e.indexOf(o)&&e.push(o)}};return n(t.Title),n(t.Body),n(t.Tags),e}function r(){P||(P=$('<input name="distinctErrorCount" type="hidden">').appendTo(d),B=$('<input name="distinctWarningCount" type="hidden">').appendTo(d),X=$('<input name="unresolvedWarningCount" type="hidden">').appendTo(d));var t=A.namedWarnings.map(function(t){return t.bodies});A.unnamedWarnings&&t.push(A.unnamedWarnings),P.val(A.distinctErrorCount),B.val(t.length),X.val(t.filter(function(t){return s(t).length>0}).length)}function c(){function t(t,n){var a=s(n),r=a.length>0,c=$("<div>").html(e.find(".js-warning-template").text());c.find(".js-guidance-title").text(t),c.find(".js-separator").toggleClass("d-none",i.is(":empty")),c.find(".js-success-icon").toggleClass("d-none",r),c.find(".js-warning-icon").toggleClass("d-none",!r);var u=c.find(".js-guidance-body").toggleClass("d-none",!r);if(r){o=!1;for(var d=0,l=a;d<l.length;d++){var f=l[d];$('<div class="grid--cell" />').html(f).appendTo(u)}}u.find("a").attr("target","_blank"),c.children().appendTo(i)}var e=$(".js-post-review-summary");if(0!==e.length&&A.loaded.Title&&A.loaded.Body&&A.loaded.Tags){var n=A.errors.Title+A.errors.Body+A.errors.Tags,a=!!A.unnamedWarnings||A.namedWarnings.length>0;e.find(".js-loading-message").addClass("d-none"),e.find(".js-success-no-warnings").toggleClass("d-none",n>0||a),e.find(".js-error-container").toggleClass("d-none",0===n),e.find(".js-warning-and-error-separator").toggleClass("d-none",0===n||!a),e.find(".js-warning-container").toggleClass("d-none",!a),n>0&&e.find(".js-error-message").text(function(t){return 1==t.__count?"Resuelve "+t.__count+" problema antes de publicar":"Resuelve "+t.__count+" problemas antes de publicar"}({"__count":n}));for(var o=0===n,i=e.find(".js-warning-list").empty(),r=0,c=A.namedWarnings;r<c.length;r++){var u=c[r];t(u.name,u.bodies)}A.unnamedWarnings&&t("Otras sugerencias",A.unnamedWarnings),e.find(".js-resolved-warnings-message").toggleClass("d-none",!o),e.find(".js-unresolved-warnings-message").toggleClass("d-none",o)}}StackExchange.helpers.removeParameterFromQueryString("fromen");var u=StackOverflow.Models.PostTypeId,d=$(".js-post-form"),l=d.find(".js-post-title-field"),f=d.find(".js-post-body-field[data-post-type-id="+u.Question+"]"),p=d.find(".js-post-tags-field"),g=d.find(".js-post-body-field[data-post-type-id="+u.Answer+"]"),h=d.find(".js-similar-questions"),m=d.data("form-type")||"question";d.data("delay-validation")||StackExchange.using("postValidation",function(){d.data("has-answer")||t(),StackExchange.postValidation.initOnBlurAndSubmit(d,u.Question,m,!1)});var v={"siteName":document.title.substr(document.title.indexOf(" - ")+3),"onResults":function(t){null!==t&&S&&(e("question_ask.suggestions_show",{}),StackExchange.using("gps",function(){t.addClass("js-gps-track").data("gps-track","question_ask.suggestion_click similarquestions.title_link_clicked"),StackExchange.gps.bindTrackClicks(h)}))}};StackExchange.question.initTitleSearch(l,h,v);var b=$(".js-ask-public"),k=$(".js-submit-button"),w=$(".js-question-form-overlay"),y=!1;w.length>0&&(y=!0,w.find(":input").prop("disabled",y)),b.change(function(){var t=this.checked;y=!t,b.prop("checked",t),k.prop("disabled",!t),w.toggleClass("pe-none o30",!t).find(":input").prop("disabled",!t)}),$(".js-tag-suggestions").length>0&&StackExchange.using("tagSuggestions",function(){StackExchange.tagSuggestions.init()});var x=d.data("required-tags");x&&StackExchange.using("tagEditor",function(){StackExchange.tagEditor.requiredTags=x});var E=d.data("force-heartbeat-at-body-length");E&&StackExchange.using("editor",function(){var t=setInterval(function(){f.val().length>=E&&(clearInterval(t),StackExchange.cardiologist.beatASAP())},3e3)});var S=d.data("enable-analytics"),q=d.data("enable-warning-analytics"),_=StackExchange.helpers.DelayedReaction(function(){return StackExchange.gps.sendPending()},3e3);e("question_ask.visit",{"inbox_subscription":d.data("inbox-subscription"),"referrer":d.data("referrer")}),n(l,"title",["blur"]),n(f,"body",["focus","blur"]),n(p,"tags",["focus","blur"]);var T=$(".js-post-answer-while-asking-checkbox"),j=!1,V=$("#question-answer-section"),C=$(".js-show-on-question-only"),W=$(".js-show-on-question-and-answer");T.change(function(){var t=T.get(0);t.disabled=!0,T.is(":checked")?C.fadeOut(function(){a(!1,function(){g.focus(),t.disabled=!1})}):W.fadeOut(function(){C.fadeIn(function(){t.disabled=!1})})}),(T.is(":checked")||d.data("has-answer"))&&(T.attr("checked","checked"),C.hide(),StackExchange.using("editor",function(){setTimeout(function(){a(!0,t)},2)}));var I=$(".js-inline-channel-switcher");I.length>0&&($(window).on("load",o),I.off("change"),I.on("change",function(){var t=I.val();if(t&&t.length){var e=l.val().length>0||f.val().length>0||g.val().length>0;if(e){var n=StackExchange.options.user.fkey,a=n.lastIndexOf("/");a>=0&&(n=n.substr(a+1));var i=I.find(":selected").data("kp");i&&i.length&&(n=i+"/"+n);var s=$('#post-form input[name="fkey"]'),r=s.val();s.val(n),w.find(":input").prop("disabled",!y);var c=$("#post-form").serialize();w.find(":input").prop("disabled",y),s.val(r),$.ajax({"url":t+"/save-draft","type":"POST","data":c,"success":function(){window.onbeforeunload=null,$.post("/post/discard-draft",{"fkey":StackExchange.options.user.fkey,"postType":"ask"}),window.location=t},"error":function(){o();var t={"position":{"my":"left top","at":"right center"},"css":{"width":"200px"}};StackExchange.helpers.showErrorMessage($(".js-inline-channel-switcher"),"Se produjo un error, por favor inténtalo de nuevo más tarde.",t)},"doNotRewriteUrl":!0})}else window.location=t}return!1}));var O=$(".js-begin-review-button");O.click(i),d.on("submit",function(t){O.length>0&&d.data("delay-validation")&&(t.preventDefault(),i())});var A={"loaded":{"Title":!1,"Body":!1,"Tags":!1},"errors":{"Title":0,"Body":0,"Tags":0},"namedWarnings":[],"observedErrors":{},"distinctErrorCount":0};d.on("post:validated-field",function(t,n){if(n.postTypeId===u.Question){var a=n.field;if("Title"===a||"Body"===a||"Tags"===a){A.loaded[a]=!0,A.errors[a]=n.errors.length,n.errors.forEach(function(t){A.observedErrors[t]||(A.observedErrors[t]=!0,A.distinctErrorCount+=1)});var o={},i=[];n.warnings.forEach(function(t){var e=$("<div>").html(t),n=e.get(0).childNodes;if(n.length<3||"B"!==n[0].nodeName||"BR"!==n[1].nodeName||$(n[0]).children().length>0)return i.push(t),void 0;for(var a=$(n[0]).remove().text();e.children().first().is("br");)e.children().first().remove();var s=$.trim(e.html());return 0===s.length?(i.push(t),void 0):(o[a]||(o[a]=[]),o[a].push(s),void 0)}),A.namedWarnings.forEach(function(t){t.bodies[a]=o[t.name]||[],delete o[t.name]});for(var s in o){var d={"name":s,"bodies":{"Title":[],"Body":[],"Tags":[]}};d.bodies[a]=o[s],A.namedWarnings.push(d),q&&e("question_ask.warning_show",{"name":s},!0)}(A.unnamedWarnings||i.length>0)&&(A.unnamedWarnings||(A.unnamedWarnings={"Title":[],"Body":[],"Tags":[]},q&&e("question_ask.warning_show",{},!0)),A.unnamedWarnings[a]=i),r(),c()}}}),d.on("post:submit-completed",function(t,n){n.response.success&&S&&q&&StackExchange.gps&&(A.namedWarnings.forEach(function(t){e("question_ask.warning_resolution",{"name":t.name,"resolved":0===s(t.bodies).length},!0)}),A.unnamedWarnings&&e("question_ask.warning_resolution",{"resolved":0===s(A.unnamedWarnings).length},!0))});var P,B,X});
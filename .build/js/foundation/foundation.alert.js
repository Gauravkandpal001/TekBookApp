(function(e,t,n,r){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.2",settings:{callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(e){var r=n(this).closest("["+t.attr_name()+"]"),i=r.data(t.attr_name(!0)+"-init")||t.settings;e.preventDefault(),Modernizr.csstransitions?(r.addClass("alert-close"),r.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){n(this).trigger("close.fndtn.alert").remove(),i.callback()})):r.fadeOut(300,function(){n(this).trigger("close.fndtn.alert").remove(),i.callback()})})},reflow:function(){}}})(jQuery,window,window.document);
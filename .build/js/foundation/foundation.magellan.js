(function(e,t,n,r){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.2",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var t=this,n=t.S,r=t.settings;t.set_expedition_position(),n(t.scope).off(".magellan").on("click.fndtn.magellan","["+t.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(n){var r=this.hostname===location.hostname||!this.hostname,i=t.filterPathname(location.pathname)===t.filterPathname(this.pathname),s=this.hash.replace(/(:|\.|\/)/g,"\\$1"),o=this;if(r&&i&&s){n.preventDefault();var u=e(this).closest("["+t.attr_name()+"]"),a=u.data("magellan-expedition-init"),f=this.hash.split("#").join(""),l=e('a[name="'+f+'"]');l.length===0&&(l=e("#"+f));var c=l.offset().top-a.destination_threshold+1;a.offset_by_height&&(c-=u.outerHeight()),e("html, body").stop().animate({scrollTop:c},a.duration,a.easing,function(){history.pushState?history.pushState(null,null,o.pathname+"#"+f):location.hash=o.pathname+"#"+f})}}).on("scroll.fndtn.magellan",t.throttle(this.check_for_arrivals.bind(this),r.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(n,r){var i=e(this),s=i.data("magellan-expedition-init"),o=i.attr("styles"),u,a;i.attr("style",""),u=i.offset().top+s.threshold,a=parseInt(i.data("magellan-fixed-top")),isNaN(a)||(t.settings.fixed_top=a),i.data(t.data_attr("magellan-top-offset"),u),i.attr("style",o)})},update_expedition_positions:function(){var n=this,r=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),i=t.data("magellan-expedition-init"),s=t.attr("style"),o=t.data("magellan-top-offset");if(r+n.settings.fixed_top>=o){var u=t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");u.length===0&&(u=t.clone(),u.removeAttr(n.attr_name()),u.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(u)),t.css({position:"fixed",top:i.fixed_top}).addClass("fixed")}else t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",s).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var n=this,r=e(t).scrollTop();e("["+this.attr_name()+"]",n.scope).each(function(){var t=e(this),i=t.data(n.attr_name(!0)+"-init"),s=n.offsets(t,r),o=t.find("["+n.add_namespace("data-magellan-arrival")+"]"),u=!1;s.each(function(e,r){if(r.viewport_offset>=r.top_offset){var s=t.find("["+n.add_namespace("data-magellan-arrival")+"]");return s.not(r.arrival).removeClass(i.active_class),r.arrival.addClass(i.active_class),u=!0,!0}}),u||o.removeClass(i.active_class)})},offsets:function(t,n){var r=this,i=t.data(r.attr_name(!0)+"-init"),s=n;return t.find("["+r.add_namespace("data-magellan-arrival")+"]").map(function(n,o){var u=e(this).data(r.data_attr("magellan-arrival")),a=e("["+r.add_namespace("data-magellan-destination")+"="+u+"]");if(a.length>0){var f=a.offset().top-i.destination_threshold;return i.offset_by_height&&(f-=t.outerHeight()),f=Math.floor(f),{destination:a,arrival:e(this),top_offset:f,viewport_offset:s}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},filterPathname:function(e){return e=e||"",e.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}})(jQuery,window,window.document);
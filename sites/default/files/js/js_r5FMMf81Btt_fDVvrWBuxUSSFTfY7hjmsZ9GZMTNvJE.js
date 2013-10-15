/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/*
 * Match Heights Plugin
 * Match the heights of targeted elements
 * 
 * Version 1.3
 * Updated 4/7/2010
 * Copyright (c) 2010 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function(a){a.fn.matchHeights=function(b){b=jQuery.extend(this,{minHeight:null,maxHeight:null},b);tallest=b.minHeight?b.minHeight:0;this.each(function(){if(a(this).innerHeight()>tallest)tallest=a(this).outerHeight()});if(b.maxHeight&&tallest>b.maxHeight)tallest=b.maxHeight;return this.each(function(){extra=a(this).innerHeight()-a(this).height();extra+=a(this).outerHeight()-a(this).innerHeight();a.browser.msie&&a.browser.version==6||b.maxHeight?a(this).css({height:tallest-extra}):a(this).css({"min-height":tallest-extra})})}})(jQuery);;
(function ($) {
  Drupal.TBSirate = Drupal.TBSirate || {};
  Drupal.TBSirate.top = false;
  Drupal.TBSirate.slideshowWrapperTop = false;
  Drupal.TBSirate.socialShareTop = false;
  Drupal.TBSirate.slideshowSize = false;
  Drupal.TBSirate.supportedScreens = [0.5, 479.5, 719.5, 959.5, 1049.5];
  
  Drupal.TBSirate.setEqualHeight = function(){
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    if(windowWidth > Drupal.TBSirate.supportedScreens[2]){
      //	jQuery('key1, key2, key3, ...').equalHeightColumns();
      jQuery('#panel-fourth-wrapper .panel-column > .grid-inner').clearMinHeight();
      jQuery('#mass-bottom-wrapper .views-row.row-1 .grid-inner').clearMinHeight();
      jQuery('#mass-bottom-wrapper .views-row.row-2 .grid-inner').clearMinHeight();
      jQuery('#panel-first-wrapper .block-inner').clearMinHeight();
      jQuery('#panel-third-wrapper .block-inner').clearMinHeight();
	  jQuery('#panel-fourth-wrapper .panel-column > .grid-inner').matchHeights();
      jQuery('#mass-bottom-wrapper .views-row.row-1 .grid-inner').matchHeights();
      jQuery('#mass-bottom-wrapper .views-row.row-2 .grid-inner').matchHeights();
      jQuery('#panel-first-wrapper .block-inner').matchHeights();
      jQuery('#panel-third-wrapper .block-inner').matchHeights();
    }else{
      jQuery('#panel-fourth-wrapper .panel-column > .grid-inner').clearMinHeight();
      jQuery('#mass-bottom-wrapper .views-row.row-1 .grid-inner').clearMinHeight();
      jQuery('#mass-bottom-wrapper .views-row.row-2 .grid-inner').clearMinHeight();
      jQuery('#panel-first-wrapper .block-inner').clearMinHeight();
      jQuery('#panel-third-wrapper .block-inner').clearMinHeight();
    }
  }
  
 /* Drupal.TBSirate.makeMovableSocialShare = function(){
    if(jQuery("#page").offset()) {
      Drupal.TBSirate.top = jQuery("#page").offset().top;
      Drupal.TBSirate.slideshowWrapperTop = jQuery("#slideshow-wrapper").offset() ? jQuery("#slideshow-wrapper").offset().top : jQuery("#main-wrapper").offset().top;
      Drupal.TBSirate.socialShareTop = jQuery("#social-share-wrapper").offset().top;
      var div = jQuery('#header-wrapper div.container');
      var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
	  if (windowWidth > 1048) {
	    jQuery('#social-share-wrapper').css({'left': div.width() + div.offset().left + 1 + "px"});
      }
	  else {
	    jQuery('#social-share-wrapper').css({'left': div.width() + div.offset().left - 27 + "px"});
      }
      Drupal.TBSirate.scrollPage();
    }
  }*/
  
  Drupal.TBSirate.scrollPage = function() {
    var current_top = jQuery(document).scrollTop();
    Drupal.TBSirate.top = jQuery("#page").offset().top;
    Drupal.TBSirate.slideshowWrapperTop = jQuery("#slideshow-wrapper").offset() ? jQuery("#slideshow-wrapper").offset().top : jQuery("#main-wrapper").offset().top;
    if(current_top + Drupal.TBSirate.top < Drupal.TBSirate.slideshowWrapperTop) {
      jQuery('#social-share-wrapper').css({'top': Drupal.TBSirate.slideshowWrapperTop + "px"});
    }
    else {
      jQuery('#social-share-wrapper').css({'top': (current_top + Drupal.TBSirate.top) + "px"});
    }
    var div = jQuery('#header-wrapper div.container');
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
	if (windowWidth > 1048) {
	  jQuery('#social-share-wrapper').css({'left': div.width() + div.offset().left + 1 + "px"});
    }
	else {
	  jQuery('#social-share-wrapper').css({'left': div.width() + div.offset().left - 27 + "px"});
	}
  }
  
  Drupal.TBSirate.setSlideshowHeight = function() {
    var imgs = $('#slideshow-wrapper .view .views-field img')
    if(imgs.length) {
      if(!Drupal.TBSirate.slideshowSize) {
        var img = new Image();
        img.src = $(imgs[0]).attr('src');
        Drupal.TBSirate.getImageSize(img);
        setTimeout(Drupal.TBSirate.setSlideshowHeight, 200)
        return;
      }

      var page_width = $('#page').width();
      if(page_width < Drupal.TBSirate.supportedScreens[3]) {
        var width = Drupal.TBSirate.slideshowSize.width;
        var height = Drupal.TBSirate.slideshowSize.height;
        var new_height = Math.floor(page_width * height / width);
        $('#slideshow-wrapper .view .views-field img, #slideshow-wrapper .view .views_slideshow_cycle_main, #slideshow-wrapper .views-slideshow-cycle-main-frame-row, #slideshow-wrapper .views-slideshow-cycle-main-frame').css({height: new_height + "px"});
      }
      else {
        $('#slideshow-wrapper .view .views-field img, #slideshow-wrapper .view .views_slideshow_cycle_main, #slideshow-wrapper .views-slideshow-cycle-main-frame-row, #slideshow-wrapper .views-slideshow-cycle-main-frame').css({height: Drupal.TBSirate.slideshowSize.height + "px"});
      }
      $('#slideshow-wrapper .views-slideshow-cycle-main-frame').cycle('destroy');
      $('#slideshow-wrapper .views-slideshow-cycle-main-frame').cycle();
    }
  }

  Drupal.TBSirate.getImageSize = function(img) {
    if(img.height == 0) {
      setTimeout(function() {
          Drupal.TBSirate.getImageSize(img);
      }, 200);
      return;
    }
    if(!Drupal.TBSirate.slideshowSize) {
      Drupal.TBSirate.slideshowSize = {height: img.height, width: img.width};
    }
  }

  Drupal.TBSirate.setGalleryFormatterHeight = function(){
    $('#block-system-main .gallery-slides').height($('#block-system-main .gallery-slide').eq(0).height() - 15);
  }
  
  Drupal.behaviors.actionTBSirate = {
    attach: function (context) {     
      Drupal.TBSirate.setEqualHeight();
//      Drupal.TBSirate.makeMovableSocialShare();
      Drupal.TBSirate.setGalleryFormatterHeight();
      Drupal.TBSirate.setSlideshowHeight();
      jQuery(window).scroll(Drupal.TBSirate.scrollPage);
	  $(window).load(function() {
      	Drupal.TBSirate.toolbar = $('#toolbar').length ? $("#toolbar") : false;
        jQuery(window).resize(function(){
          $('body').css({'padding-top': Drupal.TBSirate.toolbar ? (Drupal.TBSirate.toolbar.height() - (Drupal.TBSirate.IE8 ? 10 : 0)) : 0});
          Drupal.TBSirate.scrollPage();
          Drupal.TBSirate.setSlideshowHeight();
          Drupal.TBSirate.setEqualHeight();
          Drupal.TBSirate.setGalleryFormatterHeight();
        });
	  });
    }
  };
  
})(jQuery);
;
(function ($) {
  Drupal.TBResponsive = Drupal.TBResponsive || {};
  Drupal.TBResponsive.supportedScreens = [0.5, 479.5, 719.5, 959.5, 1049.5];
  Drupal.TBResponsive.oldWindowWidth = 0;
  Drupal.TBResponsive.updateResponsiveMenu = function(){
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    if(windowWidth < Drupal.TBResponsive.supportedScreens[3]){
      $('.region-menu-bar').hide();
      $('.responsive-menu-button').show();
    }
    else{
      $('.responsive-menu-button').hide();
      $('.region-menu-bar').show();
    }
  }

  Drupal.TBResponsive.initResponsiveMenu = function(){
    Drupal.TBResponsive.updateResponsiveMenu();
    $('.tb-main-menu-button').bind('click',function(e){
      var target = $('.region-menu-bar');
      if(target.css('display') == 'none') {
        window.scrollTo(0, 0);
        target.css({display: 'block'});
      }
      else {
        target.css({display: 'none'});
      }
    });
  }

  Drupal.behaviors.actionTBResponsive = {
    attach: function (context) {
      Drupal.TBResponsive.initResponsiveMenu();
      $(window).resize(function(){
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if(windowWidth != Drupal.TBResponsive.oldWindowWidth){
          Drupal.TBResponsive.updateResponsiveMenu();
          Drupal.TBResponsive.oldWindowWidth = windowWidth;
        }
      });
    }
  };
})(jQuery);
;
(function($) {
  $.fn.placeholder = function(params) { 
    var $this = $(this);
    $this.val(params['value']);
    $this.focus(function(){
      if(this.value == Drupal.t(params['value'])) {
        this.value='';
      }
    }).blur(function(){
      if(this.value == '') {
        this.value = Drupal.t(params['value']);
      }
    });
  };
  $.fn.clearMinHeight = function() {
    $(this).css('min-height', '0px');
  }
})(jQuery);
;

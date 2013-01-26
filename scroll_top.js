/**
 * jQuery Animated ScrollTop
 *
 * Usage:
 *
 *   Add data-toggle='scrolltop' to a link or button to toggle it,
 *   use the data-position attribute to define where it should appear, default is 100(px) if not specified
 *
 *   <a href="#" data-toggle="scrolltop" data-position="800">Top</a>
 *
 * Licensed under the MIT license.
 * Copyright 2013 HungYuHei
 * https://github.com/HungYuHei
 *
 */
!function ($) {
  'use strict';

  $(window).on('scroll', function(e) {
    var element = $("[data-toggle='scrolltop']");
    element.toggle($(window).scrollTop() > (element.data('position') || 100));
  });

  $('body').on('click', "[data-toggle='scrolltop']", function (e) {
    $('html, body').animate({scrollTop: '0px'}, 300);
    return false;
  });

}(window.jQuery);

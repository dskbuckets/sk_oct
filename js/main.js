'use strict';

$(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('.pageTopArrow').fadeIn(600);
    } else {
      $('.pageTopArrow').fadeOut(600);
    }
  });

  $('.flowTopic').click(function() {
    if ($(this).next().css("display") == "none") {
      $('.flowText').slideUp(300);
      $('.flowTopic').children('a').removeClass('on');
      $(this).next().slideDown(300);
      $(this).children('a').addClass('on');
    } else {
      $(this).next().slideUp(300);
      $(this).children('a').removeClass('on');
    }
  });

  $('.question').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  });

});

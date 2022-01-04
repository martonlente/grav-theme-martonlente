$(function() {
  var $window = $(window);

  /*Bluroverlay.js
   */
  var blurOverlay = $('.js-bluroverlay').bluroverlay({
    contentWrapperClass: "js-bluroverlay-back",
    opacity: 0.5,
  });

  /*Nav md
   */
  var $btnNavMd = $('.js-btn-nav-md');
  var $navMd = $('.js-nav-md');

  $btnNavMd.click(function() {
    $(this).toggleClass('is-active');

    $navMd.toggleClass('nav-md-active opacity-0 transition-fade-in')
  });

  /*Scroll
   */
  var $imgLogo = $('.js-img-logo');
  var $linkTop = $('.js-link-top');

  $window.scroll(function() {
    var scrollTopCurrent = $window.scrollTop();

    if (scrollTopCurrent == 0) {
      $imgLogo.toggleClass('transition-fade-in transition-fade-out');
    } else {
      $imgLogo.addClass('transition-fade-out').removeClass('transition-fade-in');
    }

    $linkTop.css('transform', 'rotate(' + scrollTopCurrent / 3 + 'deg)');
  });

  /*Svg injector
   */
  var $svgInjectorItems = $('.js-svg-injector-item');

  SVGInjector($svgInjectorItems);

});

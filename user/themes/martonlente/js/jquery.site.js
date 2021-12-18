$(function() {
  var $window = $(window);

  /*Bluroverlay.js
   */
  var blurOverlay = $('.js-bluroverlay').bluroverlay({
    contentWrapperClass: "js-bluroverlay-back",
  });

  /*Nav md
   */
  var $btnNavMd = $('.js-btn-nav-md');

  $btnNavMd.click(function() {
    $(this).toggleClass('is-active');
  });

  /*Svg injector
   */
  var $svgInjectorItems = $('.js-svg-injector-item');

  SVGInjector($svgInjectorItems);

  var $linkTop = $('.js-link-top');

  $window.scroll(function() {
    var scrollTopCurrent = $window.scrollTop();

    $linkTop.css('transform', 'rotate(' + scrollTopCurrent / 3 + 'deg)');
  });
});

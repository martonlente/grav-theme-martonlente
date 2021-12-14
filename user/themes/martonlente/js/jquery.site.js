$(function() {
  var $window = $(window);

  /*Svg injector
   */
  var $svgInjectorItems = $('.js-svg-injector-item');

  SVGInjector($svgInjectorItems);

  var $linkTop = $('.js-link-top');

  $window.scroll(function() {
    var scrollTopCurrent = $window.scrollTop();

    $linkTop.css('transform', 'rotate(' + scrollTopCurrent + 'deg)');
  });
});

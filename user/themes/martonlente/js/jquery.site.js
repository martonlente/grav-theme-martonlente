$(function() {
  var $window = $(window);

  /*Card text fade in
   */
  $('.js-btn-card-text').click(function() {
    var $this = $(this);
    var $btnCardTextImg = $this.find('.js-btn-card-text-img');
    var $cardTextTxt = $this.next('.js-card-text-txt');

    if ($this.hasClass('js-active')) {
      $cardTextTxt.removeClass('transition-fade-in').addClass('transition-fade-out');
      setTimeout(function() {
        $cardTextTxt.addClass('h-0 opacity-0');
      }, 300);
    } else {
      $cardTextTxt.removeClass('h-0 opacity-0 transition-fade-out').addClass('transition-fade-in');
    }

    $this.toggleClass('js-active');
    $btnCardTextImg.toggleClass('d-none');
  });

  /*Code copy
   */
  var $btnCodeCopy = $('.js-btn-code-copy');

  $btnCodeCopy.click(function() {
    var $this = $(this);
    var code = $this.siblings('.js-code').children('code').text();

    navigator.clipboard.writeText(code);
  });

  /*Listing gallery
   */
  var $listingGallery = $('.js-listing-gallery');

  $listingGallery.each(function(index) {
    var $this = $(this);
    var $listingGalleryItem = $this.find('.js-listing-gallery-item');
    $listingGalleryItem.first().removeClass('d-none');
    $this.imagesLoaded({
      background: $listingGalleryItem
    }, function() {
      setTimeout(function() {
        var i = 0;

        $listingGalleryItem.eq(i).removeClass('d-none');

        setInterval(function() {
          var $listingGalleryItemActive = $listingGalleryItem.eq(i);

          $listingGalleryItem.addClass('d-none');
          $listingGalleryItemActive.removeClass('d-none');

          if ($listingGalleryItemActive.next().length) {
            i++;
          } else {
            i = 0;
          }
        }, 3000);
      }, 1500 * index);
    });
  });

  /*Isotope
   */
  var $btnIsotopeFilter = $('.js-btn-isotope-filter');
  var $isotopeGrid = $('.js-isotope-grid');

  $('.js-btn-isotope-filter').click(function() {
    var $this = $(this);
    var filterValue = $this.attr('data-filter');

    $btnIsotopeFilter.removeClass('secondary');

    $this.addClass('secondary');

    $isotopeGrid.isotope({
      filter: filterValue,
    });
  });

  $isotopeGrid.isotope({
    itemSelector: '.js-isotope-grid-item'
  });

  /*jQuery Smooth Scroll
   */
  $('.js-link-anchor').smoothScroll();

  /*Nav md
   */
  var $btnNavMd = $('.js-btn-nav-md');
  var $navMd = $('.js-nav-md');

  $btnNavMd.click(function() {
    $(this).toggleClass('is-active');

    $navMd.toggleClass('h-0 nav-md-active opacity-0 transition-fade-in')
  });

  /*Scroll
   */
  var $endZoneHelper = $('.js-end-zone-helper');
  var $footer = $('.js-footer');
  var $imgLogo = $('.js-img-logo');
  var $linkTop = $('.js-link-top');

  $window.scroll(function() {
    var scrollTopCurrent = $window.scrollTop();
    var endZone = $footer.offset().top + $footer.height() - $window.height();

    if (scrollTopCurrent == 0) {
      $imgLogo.toggleClass('transition-fade-in transition-fade-out');
    } else if (scrollTopCurrent >= endZone) {
      $endZoneHelper.removeClass('js-end-zone-helper-transition-inactive').addClass('js-end-zone-helper-transition-active');
    } else {
      $endZoneHelper.removeClass('js-end-zone-helper-transition-active').addClass('js-end-zone-helper-transition-inactive');
      $imgLogo.addClass('transition-fade-out').removeClass('transition-fade-in');
    }

    $linkTop.css('transform', 'rotate(' + scrollTopCurrent / 3 + 'deg)');
  });

  /*Svg injector
   */
  var $svgInjectorItems = $('.js-svg-injector-item');

  SVGInjector($svgInjectorItems);
});

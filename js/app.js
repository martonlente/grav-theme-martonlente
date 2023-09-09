(function() {
  var $window = $(window);

  // TODO: improve function names
  function cardTextFadeIn() {
    $('.js-btn-card-text').click(function() {
      var $this = $(this);
      var $btnCardTextToggle = $this.find('.js-btn-card-text-toggle');
      var $cardTextTxt = $this.next('.js-card-text-txt');

      if ($this.hasClass('js-active')) {
        // Change $btnCardTextToggle to '+'
        $btnCardTextToggle.text('+');

        // Fade out $cardTextTxt
        $cardTextTxt.removeClass('transition-fade-in').addClass('transition-fade-out');
        setTimeout(function() {
          $cardTextTxt.addClass('h-0 opacity-0');
        }, 300);
      } else {
        // Change $btnCardTextToggle to '-'
        $btnCardTextToggle.text('-');

        // Fade in $cardTextTxt
        $cardTextTxt.removeClass('h-0 opacity-0 transition-fade-out').addClass('transition-fade-in');
      }

      $this.toggleClass('js-active');
    });
  }

  function codeCopy() {
    var $btnCodeCopy = $('.js-btn-code-copy');

    $btnCodeCopy.click(function() {
      var $this = $(this);
      var code = $this.siblings('.js-code').children('code').text();

      navigator.clipboard.writeText(code);
    });
  }

  function contentSingle() {
    var $contentSingle = $('.js-content-single');

    function blockquote() {
      // Create variable blockquoteIcon markup
      var blockquoteIcon = '<div class="position-absolute row start-0 top-0"><div class="col-2"></div><div class="col-1 col-2-md text-end"><img alt="" class="bottom-2 h-8 mb-0 mw-100 position-relative" src="' + themeUrl + '/images/ic_fluent_text_quote_24_regular-gradient.svg"></div><div class="col-9"></div></div>';

      $contentSingle.find('blockquote')
        .each(function() {
          var $this = $(this);

          $this.addClass('position-relative')
            .prepend(blockquoteIcon);
        });
    }

    function img() {
      $contentSingle.find('img')
        .each(function() {
          var $this = $(this);
          var imgTitle = $this.attr('title');
          var imgCaption = '<div class="grey-60 pb-5">' + imgTitle + '</div>';

          if (imgTitle.length) {
            $this.after(imgCaption);
          }
        });
    }

    // TODO: add function code codeCopy

    function init() {
      blockquote();
      img();
    }

    init();
  }

  function listingGallery() {
    var $listingGallery = $('.js-listing-gallery');

    $listingGallery.each(function(index) {
      var $this = $(this);
      var $listingGalleryItem = $this.find('.js-listing-gallery-item');

      // Show first gallery item
      $listingGalleryItem.first().addClass('z-index-1');

      // Set a timer based on index
      setTimeout(function() {
        // Initialize counter
        var i = 0;

        // Show gallery item at index i
        $listingGalleryItem.eq(i).addClass('z-index-1');

        // Set an interval to change gallery items
        setInterval(function() {
          // Get active gallery item
          var $listingGalleryItemActive = $listingGalleryItem.eq(i);

          // Hide all gallery items
          $listingGalleryItem.removeClass('z-index-1');
          // Show active gallery item
          $listingGalleryItemActive.addClass('z-index-1');

          // If there is a next gallery item
          if ($listingGalleryItemActive.next().length) {
            // Increase counter
            i++;
          } else {
            // Reset counter
            i = 0;
          }
        }, 3000);
      }, 1500 * index);
    });
  }

  function isotope() {
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
  }

  function jQuerySmoothScroll() {
    $('.js-link-anchor').smoothScroll();
  }


  function navMd() {
    var $btnNavMd = $('.js-btn-nav-md');
    var $navMd = $('.js-nav-md');

    $btnNavMd.click(function() {
      $(this).toggleClass('is-active');

      $navMd.toggleClass('h-0 nav-md-active opacity-0 transition-fade-in')
    });
  }

  function scroll() {
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
  }

  function svgInjector() {
    var $svgInjectorItems = $('.js-svg-injector-item');

    SVGInjector($svgInjectorItems);
  }

  function init() {
    cardTextFadeIn();
    codeCopy();
    contentSingle();
    listingGallery();
    isotope();
    jQuerySmoothScroll();
    navMd();
    scroll();
    svgInjector();
  }

  // Call init when DOM is ready
  $(init);
})();

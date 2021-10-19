/* ==================================================
#Image functions
#Recently viewed
#Load more / infinite load
#Filter products with AJAX
#Search autocomplete
#Sidebar filter on collection pages
#Misc
#Quick shop
#Newsletter popup

/*============================================================================
  Image functions
==============================================================================*/

var usePageDots = true;

var imageFunctions = {
  zoom: function(zoomParent, enableTouch, magnify){
    var activateZoom = $(zoomParent).data('zoom');
    if (activateZoom){
      $(zoomParent + ' img')
          .wrap('<span style="display:inline-block"></span>')
          .css('display', 'block')
          .parent()
          .zoom({
            touch: enableTouch,
            magnify: magnify ? magnify : 1
      });
    }
  },
  linkGalleryAndCarousel: function($gallery, $carousel){

    $carousel.find('.gallery-cell:nth-child(1)').addClass('is-nav-selected');

    //EVENT - click on carousel item to slide gallery
    $carousel.on( 'click', '.gallery-cell', function() {
        var index = $(this).index();
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $(this).addClass('is-nav-selected');
        $gallery.flickity( 'select', index );
    });

    //EVENT - update carousel based on gallery index
    $gallery.on( 'select.flickity', function() {
      var galleryData = $(this).data('flickity');
      if (galleryData){
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $carousel.find('.gallery-cell:nth-child(' + (galleryData.selectedIndex + 1) + ')').addClass('is-nav-selected');
      }
    });
  },
  fullWidth: function(images, imageContainer){
    $(images).each(function(){
      var $image = $(this),
          alt = $image.attr('alt'),
          src = $image.attr('src');

      if (alt.indexOf("[") >= 0){

        //remove from description
        $image.remove();

        //find shortcode values and remove from alt
        var shortcodes = alt.match(/\[(.*?)\]/ig);
        alt = alt.replace(/\[(.*?)\]/ig, '');

        //remove brackets from shortcode to be used as classes
        var captionClass = $.map( shortcodes, function( value, index ) {
            value = value.replace(/[\[\]']+/g,'');
            return value;
        });

        //markup for caption

        var caption = [
            '<div class="position-' + (captionClass.length ? captionClass : 'center') + ' caption js-caption">',
              '<div class="caption-content caption-background-false align-' + (captionClass.length ? captionClass : 'center') + '">',
                '<p class="headline">' + alt + '</p>',
              '</div>',
            '</div>'
        ].join('');

        //image attributes added
        $image.attr({
          alt: alt,
          class: 'lazyload blur-up',
          src: src,
          dataSizes: 'auto'
        });

        var image = $image.prop('outerHTML')
        var banner =  '<div class="banner">' + image + caption + '</div>'

        $(imageContainer).append(banner);
      }
    })
  },
  showSecondaryImage: function(){
    if ($(window).width() > 798) {
      $('body').on("mouseenter", ".swap-true", function() {
        $(this).toggleClass('toggle-images');
      });

      $('body').on("mouseleave", ".swap-true", function() {
        $(this).toggleClass('toggle-images');
      });
    }
  }
}

/*============================================================================
  Recently viewed
==============================================================================*/

var recentlyViewed = {
  init: function(){

    var productHandle,
        rvCookie,
        rvProducts,
        displayProducts,
        rvProductArray;

    if ($('.js-product_section[data-rv-handle]').length){
      productHandle = $('.js-product_section').data('rv-handle').toString();
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    } else if ($('.recently-viewed__section').length){
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    } else if ($('.js-sidebar-recently-viewed').length){
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    }

    if (rvProducts){
      rvProductArray = unescape(rvProducts).split(',');
    }

    if (productHandle){

      if(!$.inArray(productHandle, rvProductArray) !== -1){
        displayProducts = [];
        rvProductArray.unshift(productHandle);
        $.each(rvProductArray, function(i, el){
            if($.inArray(el, displayProducts) === -1) displayProducts.push(el);
        });
      }

      recentlyViewed.setCookieProducts(displayProducts);
    } else {
      displayProducts = rvProductArray;
    }

    if ($('.recently-viewed__section').length){
      var parent = '.recently-viewed__section';
      recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
    } else if ($('.js-recently-viewed .rv-main').length){
      var parent = '.js-recently-viewed';
      recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
    }

    if ($('.sidebar .js-sidebar-recently-viewed').length){
      var parent = '.sidebar .js-sidebar-recently-viewed';
      if (productHandle){
        recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
      } else {
        recentlyViewed.getProductInformation(parent, displayProducts);
      }
      $('.js-sidebar-recently-viewed.hidden').parents('.sidebar-block').hide();
    }

  },
  getCookieProducts: function(rvCookie, productHandle){

    if (!rvCookie && productHandle) {
      Cookies.set('recentlyViewed', productHandle, { expires: 30, path: '/' });
      rvCookie = Cookies.get('recentlyViewed');
    } else {
      rvCookie = Cookies.get('recentlyViewed');
    }

    return rvCookie;

  },
  setCookieProducts: function(rvProductArray){
    Cookies.set('recentlyViewed', escape(rvProductArray.join(',')), { expires: 30, path: '/' });
  },
  getProductInformation: function(parent, displayProducts, productHandle){

    if (productHandle){
      displayProducts.splice( $.inArray(productHandle, displayProducts), 1 );
    }

    var productLimit = $(parent).data('visible-products');

    if (productLimit && displayProducts){
      displayProducts = displayProducts.slice(0, productLimit);
    }

    $.each(displayProducts, function (index, value) {

      if (value){
        $(parent).removeClass('hidden');

        $(parent).parents('.sidebar-block').show();

        $.ajax({
          type: 'GET',
          url: '/products/' + value  + '?view=rv',
          success: function(data) {

            var rvProduct = $(data).find('.js-recently-viewed-product');

            $(parent).find(' .rv-box-' + index ).append(rvProduct);

            //Convert pricing
            

           },
           error: function(x, t, m) {
            console.log(x);
            console.log(t);
            console.log(m);
           },
           dataType: "html"
        });
      }

      if ($(parent).find('.rv-main').hasClass('js-rv-slider')){
        if (displayProducts.length <= productLimit) {
          $('.js-rv-slider .gallery-cell').eq(displayProducts.length).nextAll().addBack().remove();
        } else {
          $('.js-rv-slider .gallery-cell').eq(productLimit).nextAll().addBack().remove();
        }
        recentlyViewed.createSlider(parent, productLimit);
      } else if ($(parent).find('.rv-main').hasClass('js-rv-grid')){
        if (displayProducts.length <= productLimit) {
          $('.js-rv-grid .thumbnail').eq(displayProducts.length).nextAll().addBack().remove();
        } else {
          $('.js-rv-grid .thumbnail').eq(productLimit).nextAll().addBack().remove();
        }
      }
    });
  },

  createSlider: function(el, productsAvailable){

    var products_per_slide = $('.js-rv-slider').data('products-per-slide');
    var products_limit = $('.js-rv-slider').data('products-limit');
    var products_available = productsAvailable;
    var indexProductsAvailable = productsAvailable - 1;
    var rvProductstoShow = $('.js-rv-slider').find('.gallery-cell');
    var cellAlign,
        draggable,
        prevNext,
        wrapAround,
        initialIndex;

    if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
      cellAlign = "left";
    } else {
      cellAlign = "center";
    }

    if (products_available > products_per_slide && products_limit > products_per_slide) {
      draggable = true;
      prevNext = true;
      wrapAround = true;
    } else {
      draggable = false;
      prevNext = false;
      wrapAround = false;
    }

    if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
      initialIndex = 0;
    } else if (products_per_slide == "3" && products_available) {
      initialIndex = 1;
    } else if (products_per_slide == "5" && products_available) {
      initialIndex = 2;
    } else if (products_per_slide == "7" && products_available) {
      initialIndex = 3;
    }

    if ($(window).width() <= 798) {

      cellAlign = "center";
      initialIndex = 1;

      if (rvProductstoShow.length <= 2){
        draggable = false;
        prevNext = false;
        wrapAround = false;
      } else if (products_available > 3 && products_limit > 3) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }

      $('.js-rv-slider').parents('.even-num-slides').removeClass('even-num-slides');
    }

    $('.js-rv-slider').flickity({
      "lazyLoad": 2,
      "imagesLoaded": true,
      "draggable": draggable,
      "prevNextButtons": prevNext,
      "wrapAround": wrapAround,
      "cellAlign": cellAlign,
      "pageDots": usePageDots,
      "contain": true,
      "freeScroll": true,
      "arrowShape": arrowSize,
      "initialIndex": initialIndex
    });

    $('.js-rv-slider').addClass('slider-initialized');
  }
}

/* ===============================================
  #Load more / infinite load
================================================== */

//Collection template

var enableLoadMoreProducts = function(){
  $('body').on('click', '.js-load-more a', function(e){
    enableInfiniteScroll();
    e.stopPropagation();
    return false;
  });
}

var enableInfiniteScroll = function(){
  if ($('.collection-matrix').length) {
    var infiniteScroll = new Waypoint.Infinite({
      element: $('.collection-matrix')[0],
      items: '.collection-matrix',
      more: '.load-more__btn',
      loadingClass: 'loading-in-progress',
      onBeforePageLoad: function(){
        $('.js-load-more').hide();
      },
      onAfterPageLoad: function(data){
        $('.collection-matrix > .collection-matrix .thumbnail').unwrap('.collection-matrix');
        
        
      }
    })
  }
}

//Search template

var enableLoadMoreSearch = function(){
  $('body').on('click', '.js-load-more a', function(e){
    enableInfiniteSearchScroll();
    e.stopPropagation();
    return false;
  });
}

var enableInfiniteSearchScroll = function(){
  if ($('.search-matrix').length) {
    var infiniteSearchScroll = new Waypoint.Infinite({
      element: $('.search-matrix')[0],
      items: '.search-matrix',
      more: '.load-more__btn',
      loadingClass: 'loading-in-progress',
      onBeforePageLoad: function(){
        $('.js-load-more').hide();
      },
      onAfterPageLoad: function(data){
        $('.search-matrix > .search-matrix .thumbnail').unwrap('.search-matrix');
        
        
      }
    })
  }
}

/*============================================================================
  Filter Products with AJAX
==============================================================================*/

Shopify.queryParams = {};
if (location.search.length) {
 for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
    aKeyValue = aCouples[i].split('=');
    if (aKeyValue.length > 1) {
     Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
    }
  }
}

var quickFilter = {
  init: function(){
    var selectedOptions = [],
        query = '',
        currentTags = '',
        siteUrl = 'https://' + $.url('hostname'),
        url1 = $.url('1') ? '/' + $.url('1') + '/' : '',
        url2 = $.url('2') ? $.url('2') + '/' : '',
        url3 = $.url('3'),
        path = url1 + url2;

    //Handle dropdowns if they exist
    if ($('#sort-by').length){
      query = $('#sort-by').val();
    } else {
      query = url('?sort_by');
    }

    if ($('#tag_filter').length){

      if ($('#tag_filter').data('default-collection') != $('#tag_filter').val()){
        urlTag = $('#tag_filter').val().substr($('#tag_filter').val().lastIndexOf('/') + 1);

        if (urlTag != 'all'){
          if ($.inArray( urlTag, selectedOptions ) > -1){
            //Do nothing
          } else {
            selectedOptions.unshift(urlTag);
          }
        }
      }
    }

    //Add all checkbox values to array
    $('[data-option-filter] input:checked').each(function (){
      selectedOptions.push($(this).val());
    });
    selectedOptions = $.makeArray(selectedOptions);

    //Loop through tags to create string to update page url
    $.each(selectedOptions, function(i, value){

      if (i != selectedOptions.length - 1) {
        currentTags += selectedOptions[i] + '+';
      } else {
        currentTags += selectedOptions[i];
      }

    });

    Shopify.queryParams.sort_by = query;
    query = '?' + $.param(Shopify.queryParams);

    quickFilter.processUrl(path, currentTags, query);
  },
  updateView: function(filterURL) {

    $.ajax({
       type: 'GET',
       url: filterURL,
       beforeSend: function() {
          $(".collection-matrix").addClass('fadeOut animated loading-in-progress filter-loading');
          Waypoint.destroyAll()
       },
       success: function(data) {
          $(".collection-matrix").removeClass('loading-in-progress');
          $(".collection-matrix").removeClass('filter-loading');
          var filteredBreadcrumb = $(data).find('.breadcrumb_text').html();
          $('.breadcrumb_text').html(filteredBreadcrumb);

          var filteredPagination = $(data).find('.paginate').html();
          $('.paginate').html(filteredPagination);

          var filteredSidebar = $(data).find('.sidebar').html();
          $('.sidebar').html(filteredSidebar);

          var filteredPageLinks = $(data).find('.paginate').html();
          $('.paginate').empty();
          $('.paginate').html(filteredPageLinks);

          var filteredData = $(data).find('.collection-matrix');
          $('.collection-matrix').remove();
          filteredData.insertBefore( $('.load-more__icon') );

          window.history && window.history.pushState && window.history.pushState("", "", filterURL);

          if ($('.sidebar__collection-filter').length){
            collectionSidebarFilter.init();
          }

          
            enableInfiniteScroll();
          

          

          
       },
       error: function(x, t, m) {
        console.log(x);
        console.log(t);
        console.log(m);
        location.replace(location.protocol + '//' + location.host + filterURL);

       },
       dataType: "html"
    });
  },
  processUrl: function(path, tags, query){

    var query = query.replace(/\page=(\w+)&/, ''),
        urlString = '';

    urlString = path + tags + query;

    quickFilter.updateView(urlString);

  }
}

/*============================================================================
  Search autocomplete
==============================================================================*/

var searchAutocomplete = {
  init: function(){

    var currentAjaxRequest = null;
    var shopURL = $('body').data('shop-url');

    
      var searchPath = shopURL + '/search?q=';
    

    //Submit wildcard searches
    $(".search_form, .search__form, .header_search_form").on("submit", function(e){
      var formValue = $(this).find('input[name="q"]').val();
      var cleanFormValue = encodeURI(formValue);

      e.preventDefault();

      if(cleanFormValue == null) {
        window.location.href = '/search';
      } else {
        window.location.href = searchPath + cleanFormValue + '*';
      }
    });

    var searchForms = $('form.search_form, form.search, form.header_search_form').each(function() {

      var input = $(this).find('input[name="q"]');

      // Adding a list for showing search results.
      $('<div class="search__results-wrapper"><ul class="search__results"></ul></div>').appendTo($(this));
      // Listening to keyup and change on the text field within these search forms.
      input.attr('autocomplete', 'off').bind('keyup change', function() {

        if(input.val() == '') {
          $('.search__results').hide();
          $('.search__results').empty();
        }

        var term = $(this).val();
        var cleanTerm = encodeURI(term);

        var form = $(this).closest('form');
        var searchURL =  searchPath + cleanTerm;

        var resultsList = form.find('.search__results');

        if (term.length >= 3) {

          if (currentAjaxRequest != null) currentAjaxRequest.abort();

          currentAjaxRequest = $.getJSON(searchURL +'*&view=json', function(data) {
            resultsList.empty();

            // If we have no results.
            if(data.results_count == 0) {
              resultsList.hide();
            } else {
              // If we have results.
              $.each(data.results, function(index, item) {
                if(index >= 3) {
                  return false;
                }

                var link = $('<a></a>').attr('href', item.url);

                //Collect collection handles if product
                if(item.object_type == 'product') {

                  var collectionHandles = [];
                  for(i=0; i < item.collections.length; i++) {
                    collectionHandles.push(item.collections[i].handle);
                  }

                  if($.inArray('coming-soon', collectionHandles) != -1) {
                    var itemPrice = "Coming Soon";
                  } else {
                    if(item.available == true) {

                      if(item.raw_compare > item.raw_price ) {
                        var itemPrice = '<span class="was_price">' + item.compare + '</span> ' + item.price;
                      } else {
                        if(item.price_varies && item.price_min > 0) {
                          var itemPrice = "from" + ' ' + item.price;
                        } else if(item.price > 0 || item.raw_price > 0) {
                          var itemPrice = item.price;
                        } else {
                          var itemPrice = 'Free';
                        }
                      }
                    } else {
                      var itemPrice = "Sold Out";
                    }
                  }

                  if(item.thumbnail != 'NULL') {
                    link.append('<div class="thumbnail"><img class="lazyload blur-up" src="' + item.thumbnail + '" /></div>');
                  }
                  link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ itemPrice +'</span></div>');


                } else if(item.object_type == 'article') {
                  if(item.thumbnail != 'NULL') {
                    link.append('<div class="thumbnail"><img class="lazyload blur-up" src="' + item.thumbnail + '" /></div>');
                  }
                  link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ item.text_content +'</span></div>');

                } else if(item.object_type == 'page') {
                  link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ item.text_content +'</span></div>');
                }

                link.wrap('<li class="item-result result--' + item.object_type + '"></li>');
                resultsList.append(link.parent());
              });
              // The Ajax request will return at the most 5 results.
              // If there are more than 5, let's link to the search results page.
              if(data.results_count >= 3) {
                resultsList.append('<li class="all-results"><span class="title see-all"><a href="' + searchURL + '*">' + "View all results" + ' (' + data.results_count + ')</a></span></li>');
              }
              resultsList.fadeIn(200);
            }
          })
        }
      });
    });

    // Clicking outside makes the results disappear.
    $(document).on('click', function(e){
      var container = $('[data-autocomplete-true]');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('[data-autocomplete-true]').find('.search__results-wrapper').hide();
      }
    });

    $('[data-autocomplete-true] input').on('focus', function(){
      $('.search__results-wrapper').hide();
      $(this).parents('[data-autocomplete-true]').find('.search__results-wrapper').show();
    });
  },
  unload: function() {
    $('body').off('focus', '[data-autocomplete-true] input');
  }
}

/*============================================================================
  Sidebar filter on collection pages
==============================================================================*/

var collectionSidebarFilter = {
  init: function(){

    $('.filter-active-tag input:checked').parents('.filter-active-tag').siblings('.filter-all-tags').hide();
    $('.toggle-all--true .toggle_list .filter-active-tag input:checked').parents('ul.toggle_list').prev().click();

    //Hide filters if types or vendors is in URL (can't be combined)
    if ($.url(2) === 'types' || $.url(2) === 'vendors'){
      $('.sidebar__collection-filter').remove();
    }

    $('.sidebar-block:empty').prev().css('border-bottom', 'none');

  },
  clearAllFilters: function(){
    $('[data-option-filter] input').attr('checked', false);
    $('[data-option-filter] input').trigger('change');
  },
  clearSelectedFilter: function(optionFilter){
    optionFilter.find('[data-option-filter] input').attr('checked', false);
    optionFilter.find('[data-option-filter] input').trigger('change');
  }
}




/*============================================================================
  Misc
==============================================================================*/


  var arrowSize = {
    x0: 10,
    x1: 40, y1: 50,
    x2: 80, y2: 50,
    x3: 50
  }
  var svgArrowSizeLeft = '<svg viewBox="0 0 100 100"><path d="M 10,50 L 40,100 L 80,100 L 50,50  L 80,0 L 40,0 Z" class="arrow"></path></svg>'
  var svgArrowSizeRight = '<svg viewBox="0 0 100 100"><path d="M 10,50 L 40,100 L 80,100 L 50,50  L 80,0 L 40,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>'


var utils = {
  createAccordion: function(container, tab, content){
    var $container = $(container);
    var $tab = $(container).find(tab);
    var $content = $(container).find(content);
    var specificTab = container + ' ' + tab;

    //Check to see if need to rearrange product tabs to create accordion (backwards compatible)
    if (container.indexOf(".accordion-tabs") >= 0){
      var rearrangedTabs = $.map($tab, function(v, i) { return [v, $content[i]]; });
      $container.empty();

      $.each(rearrangedTabs, function (index, value) {
        $container.append(this);
      });

      $content.removeClass('active');
      $container.find('.active').next().slideToggle();

      tab = container + '> a';
    }

    $(container).children('a').each(function(i, tab) {
      var tab = $(this);
      var tabValue = tab.attr('href'); //get tab id
      tab.attr('data-tab-value', tabValue); //set tab id in data attribute
      tab.removeAttr("href"); //remove href (to prevent url hash update)
    });

    $(container).find(tab + '.active').next().slideToggle();
    $('body').on('click', specificTab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  mobileAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    $(tab + '.active').next().slideToggle();

    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  mobileParentActiveAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    $(tab + '.active').parent().next().slideToggle();

    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().next().slideToggle();
    });
  },
  initializeTabs: function(){
    $('ul.tabs > li > a').attr('data-no-instant', true);
    $('body').on('click', 'ul.tabs > li > a', function(e) {
      e.preventDefault();
      var contentLocation = $(this).attr('href');
      if(contentLocation.charAt(0)=="#") {
        $('ul.tabs > li > a.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
      }
    });
  },
  pageBannerCheck: function(){
    //check for header banner
    if (!$('.page_banner').length > 0 || $('.header').hasClass('header-background--solid')) {
      $('.feature_image').removeClass('feature_image');
      $('.header.is-absolute').removeClass('is-absolute');
      //hide secondary logo
      $('.secondary_logo--true').find('.secondary_logo').css('display', 'none');
      $('.secondary_logo--true').find('.primary_logo').css('display', 'block');
    } else {
      $('.header').parent().addClass('feature_image');
      $('.header').addClass('is-absolute');
      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').css('display', 'block');
        $('.secondary_logo--true').find('.primary_logo').css('display', 'none');
      }
    }

    //check for section that uses header banner on home page
    if ($('.index-sections').children().first('.under-menu').find('.full-width--true').length) {
      if (!$('.header').hasClass('header-background--solid')) {
        $('.index .header').parent().addClass('feature_image');
        $('.index .header').addClass('is-absolute');
      }
      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    } else {
      $('.index .feature_image').removeClass('feature_image');
      $('.index .header.is-absolute').removeClass('is-absolute');
      //hide secondary logo
      if (!$('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').hide();
        $('.secondary_logo--true').find('.primary_logo').show();
      }
    }

    //check for section that uses header banner on the page details template
    if ($('.detail-sections').children().first().hasClass('under-menu')) {
      if (!$('.header').hasClass('header-background--solid')) {
        $('[class^="page-details"] .header').parent().addClass('feature_image');
        $('[class^="page-details"] .header').addClass('is-absolute');
      }

      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    } else {
      $('[class^="page-details"] .feature_image').removeClass('feature_image');
      $('[class^="page-details"] .header.is-absolute').removeClass('is-absolute');

      //hide secondary logo
      if (!$('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').hide();
        $('.secondary_logo--true').find('.primary_logo').show();
      }
    }
  },
  resizeActionButtons: function(){
    $('.js-caption:visible').each(function(){
      var buttonWidth = 0;
      $(this).find('.action_button').each(function(){
        $button = $(this);
        if($(this).width() > buttonWidth){
            buttonWidth = $(this).width();
        }
      });
      $(this).find('.action_button').width(buttonWidth);
    });
  }
}

var sliderBlock = {
  select: function(blockId, $parentSection){
    var $blocks = $parentSection.find('.gallery-cell');
    var blockIdsArray = $blocks.map(function() {
      return String($(this).data('block-id'));
    });

    var $slider = $parentSection.find('[data-slider-id]');
    var settings = {
      slideshowTextAnimation: $slider.data('slideshow-text-animation')
    }
    var flkty = $slider.data('flickity');

    $slider.flickity('pausePlayer');

    for(var i = 0; i < blockIdsArray.length; i++){
      if(blockIdsArray[i] === blockId){
        var currentSlide = i;
        if (currentSlide !== flkty.selectedIndex){
          $slider.flickity( 'select', parseInt(currentSlide), false, true);
        }
      }
    }
  },
  deselect: function($parentSection){
    var $slider = $parentSection.find('.flexslider').data('flexslider');
    if($slider) {
      $slider.flickity('unpausePlayer');
    }
  }
}

/*============================================================================
  Quick shop
==============================================================================*/

var globalQuickShopProduct;

var quickShop = {
  init: function(){

    //EVENT - click on quick-shop
    $('body').on('click', '.js-quick-shop-link', function(e){
      e.preventDefault();

      //Set productData object based on data attributes
      const productData = {
        handle: $(this).data('handle'),
        product_id: $(this).data('id'),
        single_variant: $(this).attr('data-single-variant'),
        product_in_collection_url: $(this).data('url'),
        escaped_title: $(this).data('title'),
        details_text: $(this).data('details-text'),
        full_description: $(this).data('full-description'),
        regular_description: $(this).data('regular-description'),
        image_array: quickShop.createImageObjects($(this).data('images')),
        collection_handles: $(this).data('collection-handles').trim(',').split(','),
        money_format: $('body').data('money-format')
      }

      //Find current product and notify forms
      const $notifyForm = $(this).next('.js-quickshop-forms__container').find('.notify_form');
      const $productForm = $(this).next('.js-quickshop-forms__container').find('.product_form');

      $.fancybox.open($('.js-quick-shop'), {
        baseClass: 'quick-shop__lightbox product-' + productData.product_id,
        hash: false,
        infobar : false,
        toolbar: false,
        loop: true,
        smallBtn : true,
        mobile: {
          preventCaptionOverlap: false,
          toolbar: true,
          buttons: [
            "close"
          ]
        },
        beforeLoad: function(){
          quickShop.beforeOpen(productData);
        },
        afterLoad: function(){
          quickShop.afterContent($productForm, $notifyForm, productData);
        },
        beforeClose: function(){
          quickShop.beforeClose(productData);
        }
      })

    });

  },
  createImageObjects: function($images){
    //split image info
    const image_paths_alts = $images.split('~');

    //Create new array with image objects
    const imageArray = image_paths_alts.map(function(image){
      var imageInfo = image.split('^');
      return {
        path: imageInfo[0],
        alt: imageInfo[1],
        id: imageInfo[2]
      }
    });

    return imageArray;
  },
  beforeOpen: function(productData) {

    //Add image elements before gallery is opened
    quickShop.populateGallery(productData.image_array);

    $('.js-sale-banner, .js-sold-out, .js-current-price, .js-was-price, .js-savings, .js-new-banner, .js-pre-order-banner').empty();
    $('.modal_price, .js-notify-form').show();

    if (productData.image_array.length > 1) {
      $('.js-gallery-modal').addClass('multi-image');
      $('.js-gallery-modal').removeClass('single-image');
      $('.js-gallery-modal').addClass('is-draggable');
    } else {
      $('.js-gallery-modal').addClass('single-image');
      $('.js-gallery-modal').removeClass('multi-image');
    }

  },
  afterContent: function($productForm, $notifyForm, productData) {

    quickShop.retrieveProductInfo(productData);

    var prevNext = false;
    var draggable = false;
    if (productData.image_array.length > 1) {
      prevNext = true;
      draggable = true;
    } else {
      prevNext = false;
      draggable = false;
    }

    //Add main gallery
    $('.js-gallery-modal').flickity({
      "adaptiveHeight": false,
      "wrapAround": "true",
      "cellAlign": "left",
      "draggable": draggable,
      "contain": true,
      "imagesLoaded": true,
      "lazyLoad": 2,
      "pageDots": false,
      "dragThreshold": 10,
      "arrowShape": arrowSize
    });

    

    //Copy form data to modal
    $('.quick-shop__lightbox .js-notify-form').append($notifyForm);
    $('.quick-shop__lightbox .js-product-form').append($productForm);

    //Initiate selectCallback
    if($productForm.hasClass("product_form_options") && $productForm.hasClass("viewed") == false) {
      //If form hasn't been viewed previously, run OptionSelectors function
      new Shopify.OptionSelectors($productForm.data("select-id"),
      {
        product: $productForm.data("product"),
        onVariantSelected: selectCallback,
        enableHistoryState: $productForm.data("enable-state")
      });
    } else {
      //If form has been previously viewed, just convert currencies
      
    }

    //Link sold out options when there is more than one option available (eg. S is selected and Yellow option appears as sold out)
    
      const JSONData = $productForm.data('product');
      const productID = productData.section_id;
      const productSection = '.product-' + productID + ' .js-product_section';
      const swatchOptions = $productForm.find('.swatch_options .swatch');
      if (swatchOptions.length > 1){
        Shopify.linkOptionSelectors(JSONData, productSection);
      }
    

    $('.js-quick-shop select[name="id"]').trigger('change');

    utils.initializeTabs();

    $('.js-quick-shop .text-modal-wrap iframe[src*=youtube], .js-quick-shop .text-modal-wrap iframe[src*=vimeo]').mediaWrapper({
      intrinsic: true
    });

    productPage.productSwatches();

  },
  beforeClose: function(productData) {

    const $insertedNotifyForm = $('.quick-shop__lightbox .notify_form');
    const $insertedProductForm = $('.quick-shop__lightbox .product_form');

    //Copy form data back to product loop and add .viewed
    $('.js-quickshop-forms--'+ productData.product_id).append($insertedProductForm);
    $('.js-quickshop-forms--'+ productData.product_id).append($insertedNotifyForm);
    $('.js-quickshop-forms--'+ productData.product_id +' .product_form').addClass('viewed');
    $('.js-quickshop-forms--'+ productData.product_id +' .notify_form').addClass('viewed');

    //Find gallery and carousel
    const $gallery = $('.js-gallery-modal');
    const $carousel = $('.js-gallery-carousel');

    $('.js-gallery-carousel .gallery-cell').off('click');

    //Remove image slides from gallery
    $gallery.flickity( 'remove', $('.gallery-cell', $gallery));

    //Destroy sliders when modal closes
    $gallery.flickity('destroy');
    if ($carousel.hasClass('flickity-enabled')){
      $carousel.flickity( 'remove', $('.gallery-cell', $carousel) );
      $carousel.flickity('destroy');
    } else {
      $carousel.find('.gallery-cell').remove();
    }

    const variantPrice = $('.js-current-price .money').text();
    $('.js-quick-shop-link[data-id=' + productData.product_id + ']').attr('data-initial-modal-price', variantPrice);
    $('.js-current-price, .js-was-price, .js-savings').empty();

  },
  retrieveProductInfo: function(productData){
    $.ajax({
      dataType: "json",
      async: false,
      cache: false,
      url: "/products/" + productData.handle + ".js",
      success: function(product) {
        //Create new object combining info
        product = $.extend({}, product, productData);

        globalQuickShopProduct = product;
        quickShop.updateVariant(product.variants[0].id.toString(), product);

      }
    });

  },
  updateVariant: function(variant){

  if (globalQuickShopProduct != 'undefined'){

    var product = globalQuickShopProduct;

    $('.js-current-price').html('');
    $('.js-was-price').html('');
    $('.js-savings').html('');

      //Title and Vendor
      $('.js-product-title').html('<a href="'+ product.product_in_collection_url +'" title="'+ product.escaped_title +'">'+ product.title +'</a>');
      $('.js-product-vendor')
      .html('<a href="/collections/vendors?q=' + product.vendor +'">' + product.vendor + '</a>');

      //Product Description
      $('.js-full-description').html(product.full_description);
      $('.js-regular-description').html(product.regular_description);
      var productDetails = '<a href="'+ product.product_in_collection_url +'" class="secondary_button" title="'+ product.escaped_title +' Details">'+ product.details_text +'</a>';
      $('.js-product-details').html(productDetails);

      //Collection banners
      $.each( product.collection_handles, function( value, index ) {
        if (this.toString() == 'new'){
          $('.js-new-banner').html("New");
        }
        if (this.toString() == 'pre-order'){
          $('.js-pre-order-banner').html("Pre-order: Add to cart");
        }
        if (this.toString() == 'coming-soon'){
          product.price = "Coming Soon";
        }

      });

      if (product.single_variant == 'true'){

        //No variants
        //Sale Banner
        
          if (product.compare_at_price > product.price){
            $('.js-sale-banner').html("Sale");
          }
        

        //Sale
        if (product.compare_at_price > product.price) {
          $('.js-current-price').addClass('sale');
        } else {
          $('.js-current-price').removeClass('sale');
        }

        //Availability
        if (product.available == false){
          $('.js-sold-out').html("Sold Out");
        } else {
          $('.js-sold-out').html('');
        }

        //Price
        if (product.available == true) {
          $('.js-notify-form').hide();

          if (product.compare_at_price > product.price) {
            $('.js-was-price').html('<span class="money">' + Shopify.formatMoney(product.variants[0].compare_at_price, product.money_format)  + '</span>');
            $('.js-savings').html("You save" + ' ' + parseInt(((product.variants[0].compare_at_price - product.variants[0].price) * 100) / product.variants[0].compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(product.variants[0].compare_at_price - product.variants[0].price, product.money_format) + '</span>)');
          }

          if (product.price == "Coming Soon"){
            $('.js-current-price').html("Coming Soon");
          } else if (product.price) {
            $('.js-current-price').html('<span class="money">' + Shopify.formatMoney(product.variants[0].price, product.money_format) + '</span>');
          } else {
            $('.js-current-price').html('Free');
          }
        }

      } else {

        //Variant loop
        for (var i = 0; i < product.variants.length; i++) {

          if (variant == product.variants[i].id.toString()){
            //Sale Banner
            
              if (product.variants[i].compare_at_price > product.variants[i].price){
                $('.js-sale-banner').html("Sale");
              }
            

            //Sale
            if (product.variants[i].compare_at_price > product.variants[i].price) {
              $('.js-current-price').addClass('sale');
            } else {
              $('.js-current-price').removeClass('sale');
            }

            //Availability
            if (product.variants[i].available == false){
              $('.js-sold-out').html("Sold Out");
            } else {
              $('.js-sold-out').html('');
            }

            //Price
            if (product.variants[i].available == true) {
              $('.js-notify-form').hide();

              if (product.variants[i].compare_at_price > product.variants[i].price) {
                $('.js-was-price').html('<span class="money">' + Shopify.formatMoney(product.variants[i].compare_at_price, product.money_format) + '</span>');
                $('.js-savings').html("You save" + ' ' + parseInt(((product.variants[i].compare_at_price - product.variants[i].price) * 100) / product.variants[i].compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(product.variants[i].compare_at_price - product.variants[i].price, product.money_format) + '</span>)');
              }

              if (product.price == "Coming Soon"){
                $('.js-current-price').html("Coming Soon");
              } else if (product.variants[i].price) {
                $('.js-current-price').html('<span class="money">' + Shopify.formatMoney(product.variants[i].price, product.money_format) + '</span>');
              } else {
                $('.js-current-price').html('Free');
              }
            } else {
              $('.js-notify-form').show();
            }
          }
        }
      }
    }

    

  },
  populateGallery: function(image_array){

    //Find gallery and carousel
    const $gallery = $('.js-gallery-modal');
    const $carousel = $('.js-gallery-carousel');

    //Add gallery images based on product info from API
    function addMainGalleryImages(){

      $.each( image_array, function( i, image ){

        var imgPath = image.path;

        var img2048x2048 = imgPath.replace(/(\.[^.]*)$/, "_2048x2048$1").replace('http:', '');
        var alt = image.alt;
        var cellContent;

        if (alt.indexOf("youtube") >= 0){
          cellContent = '<div class="video-container youtube"><div>' + alt + '</div></div>';
        } else if (alt.indexOf("vimeo") >= 0) {
          cellContent = '<div class="video-container vimeo"><div>' + alt + '</div></div>';
        } else {
          cellContent = '<img src="' + img2048x2048 + '" alt="' + alt + '" data-image-id="' + image.id + '" data-index="' + i + '" />';
        }

        var $cellElems = $('<div class="gallery-cell">'+ cellContent +'</div>');
        $('.js-gallery-modal').append($cellElems);
      });

    }

    //Add carousel images based on product info from API
    function addCarouselGalleryImages(){
      $.each( image_array, function( i, image ){
        var imgPath = image.path;
        var carouselSizedImg = imgPath.replace(/(\.[^.]*)$/, "_grande$1").replace('http:', '');

        var img = '<img src="'+ carouselSizedImg + '" alt="' + escape(image.alt) + '" />';
        var $carouselCellElems = $('<div class="gallery-cell">'+ img +'</div>');
        $carousel.append($carouselCellElems);
      });

      imageFunctions.linkGalleryAndCarousel($gallery, $carousel);

      

    }

    addMainGalleryImages();
    addCarouselGalleryImages();

    imageFunctions.zoom('.js-gallery-modal', false);

  }
}

/*============================================================================
  Newsletter Popup
==============================================================================*/

var newsletter_popup = {
  init: function(){
    var popup = Cookies.get('popup');
    var cookie_enabled = true;

    if (cookie_enabled && popup == 'open') {
      return false;
    } else {
      newsletter_popup.open();
    }
    if (cookie_enabled) {
      Cookies.set('popup', 'open', { expires: 30 });
    }
  },
  open: function(){
    if (false || $(window).width() > 798) {
      setTimeout( function() {
        $.fancybox.open($('.js-newsletter-popup'), {
          baseClass: 'newsletter__lightbox',
          hash: false,
          infobar : false,
          toolbar: false,
          loop: true,
          smallBtn : true,
          mobile: {
            preventCaptionOverlap: false,
            toolbar: true,
            buttons: [
              "close"
            ]
          }
        });
      },
      2*1000);
    }
  }
}

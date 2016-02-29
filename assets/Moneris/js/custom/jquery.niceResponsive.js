var NiceResponsive = (function($) {

  var sm = 768,
    md = 1044,
    lg = 1200;

  // Width of the browser/viewport window
  var wWidth = null,
  // Height of the browser/viewport window
    wHeight = null,
  // Height of the document
    dHeight = null;
  // The current orientation of the device, if the device is a tablet
  var orientation = null;

  var getSize = function() {
    var size;
    if (wWidth < sm)
      size = 'xs';
    else if (wWidth >= sm && wWidth < md)
      size = 'sm';
    else
      size = 'md';
    return size;
  };

  var getWinHeight = function() {
    return wHeight;
  };

  var getDocHeight = function() {
    return dHeight;
  };

  var getOrientation = function() {
    return orientation;
  };

  var floatHeightAdj = function(path, altPath) {
    // Holds the height value of the tallest item
    var tallest = 0;
    // For each floating item...
    $(path).each(function(i) {
      /*
      ...if the height of the current container is greater than tallest’s 
      current value...
      */
      if ($(this).height() > tallest)
        // ...apply its height to tallest
        tallest = $(this).height();
    });
    if (altPath !== undefined)
      path = altPath;
    /*
    Apply the value of tallest to each floating item’s height value
    */
    $(path).height(tallest);
  };

  function setCatListHeights() {
    if (wWidth >= md) {
      floatHeightAdj($('div.categoryListingComponent a.h6'));
      floatHeightAdj($('div.categoryListingComponent div.height'), $('div.categoryListingComponent'));
    } else {
      $('div.categoryListingComponent div.height a.h6, div.categoryListingComponent').removeAttr('style');
    }
  }

  var sizeTabWidths = function() {
    var tabsLength = $('#tpTabs li').length;
    var percentage = 100 / tabsLength;
    $('#tpTabs li').css('width', percentage + '%');
  };

  var showHideSearchFilter = function() {
    if (wWidth < md) {
      $('#fltrmble').show();
      $('#fltrdsktp').hide();
    } else {
      $('#fltrmble').hide();
      $('#fltrdsktp').show();
    }
  };

  function sizeWatchTheVideo() {
    var wtvWidth,
      wtvHeight;
    if (wWidth < sm) {
      wtvWidth = '260px';
      wtvHeight = '171px';
    } else if (wWidth < md) {
      wtvWidth = '648px';
      wtvHeight = '426px';
    } else {
      wtvWidth = '819px';
      wtvHeight = '538px';
    }
    $('#viddler-63098acf').attr({
      'width': wtvWidth,
      'height': wtvHeight
    });
  }

  function sizeViddler() {
    var wtvWidth,
      wtvHeight;
    if (wWidth < sm) {
      wtvWidth = '260px';
      wtvHeight = '166px';
    } else if (wWidth < md) {
      wtvWidth = '678px';
      wtvHeight = '432px';
    } else {
      wtvWidth = '486px';
      wtvHeight = '310px';
    }
    $('iframe[id^="viddler-"]').attr({
      'width': wtvWidth,
      'height': wtvHeight
    });
  }

  var showHideCollapsesTabs = function() {
    if (wWidth < sm) {
      $('#cllpsswrppr').show();
      $('#tbswrppr').hide();
      var currentlyOpen = CreateTabbedParagraphs.getCurrentlyOpen();
      $('#accordion div.panel').each(function(i, panel) {
        if (i == currentlyOpen) {
          $('#heading-' + i + ' h2.panel-title a').attr('aria-expanded', 'true');
          $('#collapse-' + i).addClass('in').removeAttr('style');
        } else {
          $('#heading-' + i + ' h2.panel-title a').attr('aria-expanded', 'false');
          $('#collapse-' + i).removeClass('in');
        }
      });
    } else {
      $('#cllpsswrppr').hide();
      $('#tbswrppr').show();
      $('#tpTabs li a[href="#tab-' + CreateTabbedParagraphs.getCurrentlyOpen() + '"]').tab('show');
    }
  };

  var tileImageLoaded = false,
    tileImgLoadedCheck = 0;

  /*

  function setTileLineHeights() {
    if ($('div.homepageTileComponent').length > 0) {
      $('div.homepageTileComponent ul.row li:first-child img').imagesLoaded(function() {
        tileImageLoaded = true;
      });
      if (!tileImageLoaded) {
        // console.log('Image loaded: ' + tileImageLoaded);
        tileImgLoadedCheck = setTimeout(function() {
          setTileLineHeights();
          // console.log('Image still hasn’t loaded.');
        }, 500);
      } else {
        clearTimeout(tileImgLoadedCheck);
        var lineHeight = $('div.homepageTileComponent ul.row li:first-child img').height();
        $('div.homepageTileComponent ul.row li a').css('line-height', lineHeight + 'px');
      }
    }
    if ($('#vdobx').length > 0)
      sizeWatchTheVideo();
  }

  */

  function setTileLineHeights() {
    var size;
    if (wWidth < sm)
      size = 'xs';
    else if (wWidth >= sm && wWidth < md)
      size = 'sm';
    else
      size = 'md';
    if ($('div.homepageTileComponent').length > 0) {
      $('div.homepageTileComponent ul.row li:first-child img.' + size).imagesLoaded(function() {
        tileImageLoaded = true;
      });
      if (!tileImageLoaded) {
        // console.log('Image loaded: ' + tileImageLoaded);
        tileImgLoadedCheck = setTimeout(function() {
          setTileLineHeights();
          // console.log('Image still hasn’t loaded.');
        }, 500);
      } else {
        clearTimeout(tileImgLoadedCheck);
        var lineHeight = $('div.homepageTileComponent ul.row li:first-child img.' + size).height();
        $('div.homepageTileComponent ul.row li a').css('line-height', lineHeight + 'px');
      }
    }
  }

  // Holds the longest navigation menu list in the global navigation
  var lis = 0,
  /*
  Holds the height of the longest navigation menu list in the global 
  navigation
  */
    lisHeight = 0;

  function countSizeLevelLis(liPath) {
    // Holds the number of list items in the current navigation list
    var levelLis = 0;
    /*
    Holds the number of the height of the list items in the current 
    navigation list
    */
    var levelLisHeight = 0;

    // For each list item in the current navigation list...
    $(liPath).each(function() {
      /*
      ...add one to the count of the number of list items in the current 
      navigation list
      */
      levelLis++;
      /*
      Add 65px to the height count of the list items in the current 
      navigation list
      */
      levelLisHeight += 65;
    });
    if (levelLis < ($('#glblnv ul.topLevel > li').length + 1)) {
      levelLis = ($('#glblnv ul.topLevel > li').length + 1);
      levelLisHeight = ($('#glblnv ul.topLevel > li').length + 1) * 65;
    }
    /*
    If the the count of the number of list items in the current navigation 
    list exceeds that of the highest count of all of the previously counted 
    navigation lists...
    */
    if (levelLis > lis) {
      /*
      ...set the longest navigation menu list in the global navigation as 
      the current navigation list.
      */
      lis = levelLis;
      /*
      Set the height of the longest navigation menu list in the global 
      navigation as the height of the current navigation list.
      */
      lisHeight = levelLisHeight;
      // console.log('lis: ' + lis + ', lisHeight: ' + lisHeight);
    }
  }

  function sizetheLis() {
    // Reset lis and lisHeight variables to 0
    lis = 0;
    lisHeight = 0;
    // countSizeLevelLis('#glblnv ul.topLevel > li');
    // console.log('Length: ' + $('#glblnv ul.topLevel > li').length);
    // For each list item in ul.topLevel...
    $('#glblnv ul.topLevel > li').each(function(i) {
      /*
      ...determine whether it’s the longest list in the global navigation 
      and determine it’s height.
      */
      countSizeLevelLis('#glblnv ul.topLevel li.li-' + i);
      /*
      For each list item in the current ul.topLevel list item’s 
      ul.secondLevel list item...
      */
      $('#glblnv ul.topLevel li.li-' + i + ' ul.secondLevel > li').each(function(j) {
        /*
        ...determine whether it’s the longest list in the global navigation 
        and determine it’s height.
        */
        countSizeLevelLis('#glblnv ul.topLevel li.li-' + i + ' ul.secondLevel li.li-' + i + '-' + j);
        /*
        For each list item in the current ul.secondLevel list item’s 
        ul.thirdLevel list item...
        */
        $('#glblnv ul.topLevel li.li-' + i + ' ul.secondLevel li.li-' + i + '-' + j + ' ul.thirdLevel > li').each(function() {
          /*
          ...determine whether it’s the longest list in the global navigation 
          and determine it’s height.
          */
          countSizeLevelLis('#glblnv ul.topLevel li.li-' + i + ' ul.secondLevel li.li-' + i + '-' + j + ' ul.thirdLevel li');
        });
      });
    });
    /*
    Set the height for each global navigation menu list to accomodate 
    the longest list
    */
    $('#glblnv ul.topLevel, #glblnv ul.secondLevel, #glblnv ul.thirdLevel').height(lisHeight);
    // If the device is a smartphone...
    if (wWidth >= sm && wWidth < md)
      /*
      ...set the height for the Login dropdown list to accomodate the 
      longest list
      */
      $('#lgnwrppr ul.dropdown-menu').height(lisHeight);
  }

  function header() {
    // If the device is a smartphone or a tablet...
    if (wWidth < sm) {
      // ...set the Dropdowns’ script viewport width indicator to ‘smartphone’
      Dropdowns.setWidth('xs');
      // Set the heights for the global navigation menus
      sizetheLis();
      /*
      Remove the style attribute set in the smartphone and tablet 
      conditions of this method for the Login submenu
      */
      $('#lgnwrppr ul.dropdown-menu').removeAttr('style');
    // Else if the device is a tablet...
    } else if (wWidth >= sm && wWidth < md) {
      // ...set the Dropdowns’ script viewport width indicator to ‘tablet’
      Dropdowns.setWidth('sm');
      // Set the heights for the global navigation menus
      sizetheLis();
    // Else if the device is a desktop...
    } else {
      // ...set the Dropdowns’ script viewport width indicator to ‘desktop’
      Dropdowns.setWidth('md');
      /*
      Remove the style attribute set in the smartphone and tablet 
      conditions of this method
      */
      $('#glblnv ul.topLevel, #glblnv ul.secondLevel, #glblnv ul.thirdLevel, #lgnwrppr ul.dropdown-menu').removeAttr('style');
    }
  }

  /*
  Master function that is run whenever the page is initially loaded, 
  resized or reoriented and fires off other compartmentalized 
  functions depending on the page’s class or device conditions.
  */
  var setSizes = function() {
    /*
    If the device is a tablet or a smartphone...
    */
    if ($('html').hasClass('tablet') || $('html').hasClass('mobile')) {
      // If the device is an Android...
      if ($('html').hasClass('android')) {
        // If the window’s width is longer than its height...
        if ($(window).width() > $(window).height())
          // ...the device’s orientation is landscape
          orientation = 'landscape';
        // Else if window’s width is shorter than its height...
        else
          // ...the device’s orientation is portrait
          orientation = 'portrait';
      // Else if the device is an iPhone or an iPad...
      } else {
        // If the window’s orientation value is -90 or 90...
        if (window.orientation == -90 || window.orientation == 90)
          // ...the device’s orientation is landscape
          orientation = 'landscape';
        // Else if the window’s orientation value is 0 or 180...
        else
          // ...the device’s orientation is portrait
          orientation = 'portrait';
      }
    }
    // Set the width of the browser window
    wWidth = $(window).width();
    // Set the height of the browser window
    wHeight = $(window).height();
    // Set the height of the document
    dHeight = $(document).height();
    // Set the current scale percentage for NiceNewStyle()
    // NiceNewStyle.setPercentage();
    // Update the styles for the header
    header();
    /*
    if ($('#sect').hasClass('home')) {
      setTileLineHeights();
      floatHeightAdj('div.newsInsightsComponent div.leftSide div.linksList ul.row li a', 'div.newsInsightsComponent div.leftSide div.linksList ul.row li');
    }
    if ($('div.articleSummaryListComponent').length > 0) {
      if (wWidth >= sm)
        floatHeightAdj('div.articleSummaryListComponent div.colWrap div.gutter ul', 'div.articleSummaryListComponent div.colWrap div.gutter');
      else
        $('div.articleSummaryListComponent div.colWrap div.gutter').removeAttr('style');
    }
    if ($('div.paragraphComponent').length > 0)
      floatHeightAdj('div.paragraphComponent div.container-fluid ul.row li a', 'div.paragraphComponent div.container-fluid ul.row li');
    if (($('div.tabbedParagraphComponent').length > 0) && (($('#cllpsswrppr').css('display') == 'none') || ($('#tbswrppr').css('display') == 'none'))) {
      showHideCollapsesTabs();
      sizeTabWidths();
    }
    if (($('aside div.searchResultsFilter').length > 0) && ($('#fltrmble').length > 0))
      showHideSearchFilter();
    if ($('div.categoryListingComponent').length > 0)
      setCatListHeights();
    if ($('#vdobx').length > 0)
      sizeWatchTheVideo();
    else
      sizeViddler();
    if ($('html').hasClass('mobile') && $('html').hasClass('android'))
      $('div.searchResultsResults ul.results li h3').dotdotdot();
    */
  };
  
  var init = function() {
    /*
    This script only works in conjunction with Modernizr, 
    Detectizr and NiceNewStyle.

    Run the function that sets the responsive styles for the pages’ 
    elements
    */
    setSizes();
    // If the device is a desktop device or an Android mobile device...
    if ($('html').hasClass('desktop') || $('html').hasClass('android')) {
      // ...if the window is resized or its orientation changes...
      $(window).resize(function() {
        /*
        Run the function that sets the responsive styles 
        for the pages’ elements
        */
        if ($('html').hasClass('android')) {
          setTimeout(function() {
            setSizes();
          }, 50);
        } else
          setSizes();
      });
    // Else if the device is an iPhone or an iPad...
    } else if ($('html').hasClass('iphone') || $('html').hasClass('ipad')) {
      // ...if the iPad’s orientation changes...
      $(window).bind('orientationchange', function() {
        /*
        Run the function that sets the responsive styles 
        for the pages’ elements
        */
        setTimeout(function() {
          setSizes();
        }, 50);
      });
    }
  };

  return {
    getSize: getSize,
    getWinHeight: getWinHeight,
    getDocHeight: getDocHeight,
    getOrientation: getOrientation,
    floatHeightAdj: floatHeightAdj,
    sizeTabWidths: sizeTabWidths,
    showHideSearchFilter: showHideSearchFilter,
    showHideCollapsesTabs: showHideCollapsesTabs,
    setSizes: setSizes,
    init: init
  };
  
})(jQuery);
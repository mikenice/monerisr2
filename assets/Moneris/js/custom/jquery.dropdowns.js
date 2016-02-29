var Dropdowns = (function($) {

  // Current width of the browser window (xs, sm, md, lg)
  var currWidth,
  // Previous width of the browser window (xs, sm, md, lg)
    lastWidth,
  // Saved list of classes applied to the .globalNav <nav> element
    lastGnClass;

  var reset = function() {
    //console.log('Current width: ' + currWidth);
    // If the browser window sizes down to the smartphone or tablet width...
    if (currWidth == 'xs' || currWidth == 'sm') {
      // console.log('Current width: ' + currWidth);
      // ...if .globalNav is currently closed...
      if (!$('#glblnv').hasClass('topLevel')) {
        // ...and if the screen size is currently smartphone...
        if (currWidth == 'xs')
          // ...hide the Language dropdown menu.
          $('#lnggwrppr').css('display', 'none');
        // Else if the screen size is currently tablet...
        else
          // ...show the Language dropdown menu.
          $('#lnggwrppr').css('display', 'block');
      // Else if .globalNav is currently open...
      } else {
        // ...show the headerBackground.
        $('#hdrbckgrnd').show();
      }
      // If the Login dropdown is currently open...
      if ($('#lgnwrppr').hasClass('open')) {
        /*
        ...open the top level dropdown and display the Login 
        dropdown options.
        */
        $('#glblnv').attr('class', 'globalNav topLevel login');
        // Show the headerBackground
        $('#hdrbckgrnd').show();
        // Show the Language dropdown menu.
        $('#lnggwrppr').css('display', 'inline-block');
      }
      // If the Language dropdown is currently open...
      if ($('#lnggwrppr').hasClass('open')) {
        if (currWidth == 'xs') {
          // ...open the top level dropdown.
          $('#glblnv').attr('class', 'globalNav topLevel li-0');
          // ...show the Language dropdown menu.
          $('#lnggwrppr').css('display', 'inline-block');
          // Show the headerBackground
          $('#hdrbckgrnd').show();
        } else {
          // ...close the .globalNav.
          $('#glblnv').attr('class', 'globalNav');
          // Hide the headerBackground.
          $('#hdrbckgrnd').hide();
        }
      }
    // Else if the browser window sizes up to the desktop width...
    } else {
      // console.log('Current width: ' + currWidth);
      // ...show the Language dropdown menu.
      $('#lnggwrppr').css('display', 'inline-block');
      // if the Login wrapper is currently open...
      if ($('#lgnwrppr').hasClass('open'))
        // ...close the .globalNav.
        $('#glblnv').attr('class', 'globalNav');
      // If the Language dropdown is currently open...
      if ($('#lnggwrppr').hasClass('open'))
        // ...close the .globalNav.
        $('#glblnv').attr('class', 'globalNav');
      // Hide the headerBackground.
      $('#hdrbckgrnd').hide();
    }
  };

  function checkWidth() {
    /*
    If the width of the browser window transitions from either 
    smartphone to tablet, tablet to smartphone, tablet to desktop 
    or desktop to tablet...
    */
    if ((currWidth !== lastWidth) && ((lastWidth == 'xs' && currWidth == 'sm') || (lastWidth == 'sm' && currWidth == 'xs') || (lastWidth == 'sm' && currWidth == 'md') || (lastWidth == 'md' && currWidth == 'sm')))
      // ...run the reset function.
      reset();
    // Update the last width setting
    lastWidth = currWidth;
  }

  var setWidth = function(cd) {
    // Set the current width setting
    currWidth = cd;
    // If this is the first time this function has run...
    if (lastWidth === undefined)
      // ...set the last width setting.
      lastWidth = cd;
    // Run checkWidth function
    checkWidth();
  };
  
  function headerDropdowns() {
    /*
    When the toggle menu button in the smartphone or tablet header is 
    clicked...
    */
    $('#tgglmn').click(function() {
      // ...if the globalNav’s top level isn’t open...
      if (!$('#glblnv').hasClass('topLevel')) {
        // ...open the globalNav.
        $('#glblnv').attr('class', 'globalNav topLevel li-0');
        // Display the Language dropdown
        $('#lnggwrppr').css('display', 'inline-block');
        // If the device is a tablet and the Language dropdown is currently open...
         if (currWidth == 'sm' && $('#lnggwrppr').hasClass('open'))
          // ...close the Language dropdown.
          $('#dd-language').dropdown('toggle');
        // Close the Search dropdown
        $('#srchwrppr').removeClass('open');
        // Show the headerBackground
        $('#hdrbckgrnd').show();
      // Else if the globalNav’s top level is open...
      } else {
        // ...close the globalNav.
        $('#glblnv').attr('class', 'globalNav');
        // If the device is a smartphone...
         if (currWidth == 'xs')
          // Hide the Language dropdown.
          $('#lnggwrppr').css('display', 'none');
        // Hide the headerBackground
        $('#hdrbckgrnd').hide();
      }
      return false;
    });
    /*
    When either of the two top level buttons in the globalNav 
    are clicked...
    */
    $('#glblnv ul.topLevel li.li-0 > a, #glblnv ul.topLevel li.li-1 > a, #glblnv ul.topLevel li.li-4 > a').click(function() {
      // ...record the class of the button that was clicked.
      var liParent = $(this).parent().attr('class');
      // console.log('Parent: ' + liParent);
      // If the button clicked isn’t the currently active button...
      if (!$('#glblnv').hasClass(liParent)) {
        // ...open the current button’s menu.
        $('#glblnv').attr('class', 'globalNav topLevel ' + liParent);
        // If the Login dropdown is currently open...
        if ($('#lgnwrppr').hasClass('open')/* && currWidth == 'xs'*/)
          // ...close the Login dropdown.
          $('#dd-login').dropdown('toggle');
        /*
        If the Language dropdown is currently open and the browser 
        width is not smartphone...
        */
        if ($('#lnggwrppr').hasClass('open') && currWidth !== 'xs')
          // ...close the Language dropdown.
          $('#dd-language').dropdown('toggle');
        /*
        If the Search dropdown is currently open and the browser 
        width is not smartphone...
        */
        if ($('#srchwrppr').hasClass('open') && currWidth !== 'xs')
          // ...close the Search dropdown.
          $('#dd-search').dropdown('toggle');
      // Else if the button clicked is the currently active button...
      } else {
        // If the browser width is not smartphone or tablet...
        if (currWidth !== 'xs' && currWidth !== 'sm')
          // ...close the globalNav.
          $('#glblnv').attr('class', 'globalNav');
      }
      return false;
    });
    /*
    // For any of the second level or third level <a href>s...
    $('#glblnv ul.topLevel li.li-0 ul.secondLevel > li > a, #glblnv ul.topLevel li.li-1 ul.secondLevel > li > a, #glblnv ul.topLevel li.li-0 ul.thirdLevel > li > a, #glblnv ul.topLevel li.li-1 ul.thirdLevel > li > a').each(function() {
      // ...if this second level button’s <li> doesn’t contain a third level <ul>...
      if ($(this).parent().children('ul.thirdLevel').length === 0)
        // ...remove their chevron.
        $(this).children('span.text').html($(this).children('span.text').html().split('&')[0])
    });
    */
    /*
    When any of the second level buttons in the globalNav are 
    clicked...
    */
    $('#glblnv ul.topLevel li.li-0 ul.secondLevel > li > a, #glblnv ul.topLevel li.li-1 ul.secondLevel > li > a, #glblnv ul.topLevel li.li-4 ul.secondLevel > li > a').click(function() {
      // If this second level button’s <li> contains a third level <ul>...
      if ($(this).parent().children('ul.thirdLevel').length > 0) {
        // ...record the class of the button that was clicked.
        var liParent = $(this).parent().attr('class');
        /*
        Record the class of the parent list item of the button that was 
        clicked.
        */
        var liGrandParent = $(this).parent().parent().parent().attr('class');
        // console.log('GrandParent: ' + liGrandParent + ', Parent: ' + liParent);
        // If the button clicked isn’t the currently active button...
        if (!$('#glblnv').hasClass(liParent)) {
          // ...open the current button’s menu.
          $('#glblnv').attr('class', 'globalNav topLevel ' + liGrandParent + ' ' + liParent);
          /*
          If the Language dropdown is currently open and the browser 
          width is smartphone...
          */
          if ($('#lnggwrppr').hasClass('open') && currWidth == 'xs')
            // ...close the Language dropdown.
            $('#dd-language').dropdown('toggle');
        }
        return false;
      }
    });
    // When the back button in the smartphone view is clicked...
    $('#bckbttn').click(function() {
      // ...if the li-0 second level menu is currently open...
      if ($('#glblnv').hasClass('li-0'))
        // ...close the li-0 second level menu.
        $('#glblnv').attr('class', 'globalNav topLevel li-0');
      // Else if the li-1 second level menu is currently open...
      else if ($('#glblnv').hasClass('li-1'))
        // ...close the li-1 second level menu.
        $('#glblnv').attr('class', 'globalNav topLevel li-1');
      // Else if the li-4 second level menu is currently open...
      else
        // ...close the li-4 second level menu.
        $('#glblnv').attr('class', 'globalNav topLevel li-4');
      return false;
    });
    // Initialize the Bootstrap dropdowns in the <header>
    $('header .dropdown-menu').dropdown();
    /*
    If one of the sub-links in the language or login dropdown is 
    clicked...
    */
    $('#lgnwrppr ul.dropdown-menu > li > a, #lnggwrppr ul.dropdown-menu > li > a').click(function() {
      // If the link has a target attribute with a value of “_blank”...
      if ($(this).attr('target') == '_blank')
        // ...launch the selected link’s href attribute in a new browser window.
        window.open($(this).attr('href'), '_blank');
      // Else if the link doesn’t have a target attribute with a value of “_blank”...
      else
        // ...launch the selected link’s href attribute in the location field.
        window.location = $(this).attr('href');
    });
    // If the login or language dropdowns are opened...
    $('#lgnwrppr, #lnggwrppr').on('show.bs.dropdown', function() {
      // ...close the search box (if it’s currently open).
      $('#srchwrppr').removeClass('open');
      // If the device is a touch device...
      if ($('html').hasClass('touchevents'))
        // ...disable and remove Bootstrap’s .dropdown-backdrop <div>s
        $('div.dropdown-backdrop').off().remove();
    });
    // If the language dropdown is opened...
    $('#lnggwrppr').on('show.bs.dropdown', function() {
      // If the browser’s current width is not a smartphone...
      if (currWidth !== 'xs')
        // ...close the globalNav.
        $('#glblnv').attr('class', 'globalNav');
    });
    // If the login dropdown is opened...
    $('#lgnwrppr').on('show.bs.dropdown', function() {
      // If the browser’s current width is not a smartphone or a tablet...
      if (currWidth !== 'xs' && currWidth !== 'sm')
        // ...close the globalNav.
        $('#glblnv').attr('class', 'globalNav');
      // Else if the browser’s current width is smartphone or tablet...
      else if (currWidth == 'xs' || currWidth == 'sm') {
        // ...record the globalNav’s current classes.
        lastGnClass = $('#glblnv').attr('class');
        // Display the Login dropdown’s open smartphone styles
        $('#glblnv').attr('class', 'globalNav topLevel login');
      }
    });
    // If the login dropdown is closed...
    $('#lgnwrppr').on('hide.bs.dropdown', function() {
      // If the browser’s current width is smartphone or tablet...
      if (currWidth == 'xs' || currWidth == 'sm')
        // ...apply the previous globalNav classes.
        $('#glblnv').attr('class', lastGnClass);
    });
    // When the search button is clicked...
    $('#dd-search').click(function() {
      // ...If the search box isn’t currently open...
      if (!$(this).parent().hasClass('open')) {
        // ...show the search box.
        $(this).parent().addClass('open');
        // Switch the title to “Close”
        $(this).attr('title', 'Close');
        // If the login dropdown is currently open...
        if ($('#lgnwrppr').hasClass('open'))
          // ...close the login dropdown.
          $('#dd-login').dropdown('toggle');
        // If the language dropdown is currently open...
        if ($('#lnggwrppr').hasClass('open'))
          // ...close the language dropdown.
          $('#dd-language').dropdown('toggle');
        // If the browser’s current width is smartphone...
        if (currWidth == 'xs') {
          // ...close the globalNav.
          $('#glblnv').attr('class', 'globalNav');
          // Hide the Language dropdown
          $('#lnggwrppr').css('display', 'none');
        // If the browser’s current width is not smartphone...
        } else {
          // ...close the globalNav.
          $('#glblnv').attr('class', 'globalNav');
        }
      // Else if the search box is currently open...
      } else {
        // ...close the search box.
        $(this).parent().removeClass('open');
        // Switch the title to “Search”
        $(this).attr('title', 'Search');
      }
      return false;
    });
    // If the device is a desktop device...
    if ($('html').hasClass('no-touch')) {
      // If anywhere within the document is clicked on...
      $(document).on('click', function(event) {
        /*
        ...if the event target is not ul.topLevel or does not have 
        ul.topLevel as a parent...
        */
        if (!$(event.target).closest('ul.topLevel').length)
          // ...close the global navigation.
          $('#glblnv').attr('class', 'globalNav');
        /*
        If the event target is not the search overlay or does not have 
        the search overlay as a parent...
        */
        if (!$(event.target).closest('#srchwrppr div.searchOverlay').length)
          // ...close the search overlay.
          $('#srchwrppr').removeClass('open');
      });
    // ...else if the device is a smartphone or a tablet...
    } else {
      // If anywhere within the document is clicked on...
      $('main, #ch-footer, footer').bind('touchend', function(event) {
        /*
        ...if the event target is not ul.topLevel or does not have 
        ul.topLevel as a parent...
        */
        if (!$(event.target).closest('ul.topLevel').length) {
          // ...close the global navigation.
          $('#glblnv').attr('class', 'globalNav');
          // If the login dropdown is currently open...
          if ($('#lgnwrppr').hasClass('open'))
            // ...close the login dropdown.
            $('#dd-login').dropdown('toggle');
          // If the language dropdown is currently open...
          if ($('#lnggwrppr').hasClass('open'))
            // ...close the language dropdown.
            $('#dd-language').dropdown('toggle');
          // Hide the headerBackground.
          $('#hdrbckgrnd').css('display', 'none');
          // If the device is a smartphone...
          if (currWidth == 'xs')
            // ...hide the Language dropdown.
            $('#lnggwrppr').css('display', 'none');
        }
        /*
        If the event target is not the search overlay or does not have 
        the search overlay as a parent...
        */
        if (!$(event.target).closest('#srchwrppr div.searchOverlay').length)
          // ...close the search overlay.
          $('#srchwrppr').removeClass('open');
      });
    }
  }

  var init = function() {
    headerDropdowns();
  };

  return {
    setWidth: setWidth,
    reset: reset,
    init: init
  };
  
})(jQuery);
var Dropdowns = (function($) {

  // Current width of the browser window (xs, sm, md, lg)
  var currWidth,
  // Previous width of the browser window (xs, sm, md, lg)
    lastWidth,
  // Saved list of classes applied to the .globalNav <nav> element
    lastGnClass;

  var reset = function() {
    //console.log('Current width: ' + currWidth);
    // If the browser window sizes down to the smartphone width...
    if (currWidth == 'xs') {
      // ...if .globalNav is currently closed...
      if (!$('#glblnv').hasClass('topLevel'))
        // ...hide the Language dropdown menu.
        $('#lnggwrppr').css('display', 'none');
      // Else if .globalNav is currently open...
      else
        // ...show the headerBackground.
        $('#hdrbckgrnd').show();
      // If the Login dropdown is currently open...
      if ($('#lgnwrppr').hasClass('open')) {
        /*
        ...open the top level dropdown and display the Login 
        dropdown options.
        */
        $('#glblnv').attr('class', 'globalNav topLevel login');
        // Show the headerBackground
        $('#hdrbckgrnd').show();
      }
      // If the Language dropdown is currently open...
      if ($('#lnggwrppr').hasClass('open')) {
        // ...open the top level dropdown.
        $('#glblnv').attr('class', 'globalNav topLevel prodServ');
        // ...show the Language dropdown menu.
        $('#lnggwrppr').css('display', 'inline-block');
        // Show the headerBackground
        $('#hdrbckgrnd').show();
      }
    // Else if the browser window sizes up to the tablet width...
    } else {
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
    smartphone to tablet or tablet to smartphone...
    */
    if ((currWidth !== lastWidth) && ((lastWidth == 'xs' && currWidth == 'sm') || (lastWidth == 'sm' && currWidth == 'xs')))
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
    When the toggle menu button in the smartphone header is 
    clicked...
    */
    $('#tgglmn').click(function() {
      // ...if the globalNav’s top level isn’t open...
      if (!$('#glblnv').hasClass('topLevel')) {
        // ...open the globalNav.
        $('#glblnv').attr('class', 'globalNav topLevel prodServ');
        // if (currWidth == 'xs') {
        // Display the Language dropdown
        $('#lnggwrppr').css('display', 'inline-block');
        // Close the Search dropdown
        $('#srchwrppr').removeClass('open');
        // Show the headerBackground
        $('#hdrbckgrnd').show();
        // }
      // Else if the globalNav’s top level is open...
      } else {
        // ...close the globalNav.
        $('#glblnv').attr('class', 'globalNav');
        // if (currWidth == 'xs')
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
    $('#glblnv ul.topLevel li.prodServ > a, #glblnv ul.topLevel li.partDev > a').click(function() {
      // ...record the class of the button that was clicked.
      var liParent = $(this).parent().attr('class').split(' ')[1];
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
        width is smartphone...
        */
        if ($('#lnggwrppr').hasClass('open') && currWidth !== 'xs')
          // ...close the Language dropdown.
          $('#dd-language').dropdown('toggle');
        /*
        If the Search dropdown is currently open and the browser 
        width is smartphone...
        */
        if ($('#srchwrppr').hasClass('open') && currWidth !== 'xs')
          // ...close the Search dropdown.
          $('#srchwrppr').removeClass('open');
      // Else if the button clicked is the currently active button...
      } else {
        // If the browser width is smartphone...
        if (currWidth !== 'xs')
          // ...close the globalNav.
          $('#glblnv').attr('class', 'globalNav');
      }
      return false;
    });
    /*
    When any of the second level buttons in the globalNav are 
    clicked...
    */
    $('#glblnv ul.topLevel li.prodServ ul.secondLevel li.sl > a, #glblnv ul.topLevel li.partDev ul.secondLevel li.sl > a').click(function() {
      // ...record the class of the button that was clicked.
      var liParent = $(this).parent().attr('class').split(' ')[1];
      /*
      Record the class of the parent list item of the button that was 
      clicked.
      */
      var liGrandParent = $(this).parents('li.tl').attr('class').split(' ')[1];
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
    });
    // When the back button in the smartphone view is clicked...
    $('#bckbttn').click(function() {
      // ...if the prodServ second level menu is currently open...
      if ($('#glblnv').hasClass('prodServ'))
        // ...close the prodServ second level menu.
        $('#glblnv').attr('class', 'globalNav topLevel prodServ');
      // Else if the partDev second level menu is currently open...
      else
        // ...close the partDev second level menu.
        $('#glblnv').attr('class', 'globalNav topLevel partDev');
      return false;
    });
    // Initialize the Bootstrap dropdowns in the <header>
    $('header .dropdown-menu').dropdown();
    /*
    If one of the sub-links in the language or login dropdown is 
    clicked...
    */
    $('#lgnwrppr ul.dropdown-menu > li > a, #lnggwrppr ul.dropdown-menu > li > a').click(function() {
      // ...launch the selected link’s href attribute in the location field.
      window.location = $(this).attr('href');
    });
    // If the login or language dropdowns are opened...
    $('#lgnwrppr, #lnggwrppr').on('show.bs.dropdown', function() {
      // ...close the search box (if it’s currently open).
      $('#srchwrppr').removeClass('open');
      // If the browser’s current width is smartphone...
      if (currWidth !== 'xs')
        // ...close the globalNav.
        $('#glblnv').attr('class', 'globalNav');
    });
    // If the login dropdown is opened...
    $('#lgnwrppr').on('show.bs.dropdown', function() {
      // If the browser’s current width is smartphone...
      if (currWidth == 'xs') {
        // ...record the globalNav’s current classes.
        lastGnClass = $('#glblnv').attr('class');
        // Display the Login dropdown’s open smartphone styles
        $('#glblnv').attr('class', 'globalNav topLevel login');
      }
    });
    // If the login dropdown is closed...
    $('#lgnwrppr').on('hide.bs.dropdown', function() {
      // If the browser’s current width is smartphone...
      if (currWidth == 'xs')
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
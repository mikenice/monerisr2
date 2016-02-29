var CreateCarousel = (function($) {
  
  /* jshint multistr: true */

  function buildCarousel(id) {
    // Determine the number of slides in the carousel
    var slidesTotal = $('#' + id + '-items div.item').length;
    // console.log('Number of slides: ' + slidesTotal);
    // Create variable to hold the code for the carousel’s slide indicator
    var indicators = '';
    // For each slide in the carousel...
    for (var i = 0; i < slidesTotal; i++) {
      // ...if it’s the first slide...
      if (i === 0)
        // ...mark its indicator as active.
        indicators += '<li data-target="#carousel-' + id + '" data-slide-to="' + i + '" class="active">\
          <svg class="indicator"><use xlink:href="#icon-carousel_indicator" /></svg>\
          <svg class="indicatorActive"><use xlink:href="#icon-carousel_indicator_active" /></svg></li>';
      // Else if it’s not the first slide...
      else
        // ...don’t mark its indicator as active.
        indicators += '<li data-target="#carousel-' + id + '" data-slide-to="' + i + '">\
          <svg class="indicator"><use xlink:href="#icon-carousel_indicator" /></svg>\
          <svg class="indicatorActive"><use xlink:href="#icon-carousel_indicator_active" /></svg></li>';
    }
    // console.log('Indicators code: ' + indicators);
    // Copy the HTML markup for the carousel’s slides
    var slides = $('#' + id + '-items').html();
    // Remove the carousel’s slides’ HTML from the page
    $('#' + id + '-items').remove();
    /*
    Build the carousel using the indicators and slides markup that was 
    generated and captured above.
    */
    $('#' + id + '-carousel').html('<div id="carousel-' + id + '" class="carousel slide" data-ride="carousel">\
      <ol class="carousel-indicators">' + indicators+ '</ol>\
      <div class="carousel-inner" role="listbox">' + slides + '</div>\
      <a class="left carousel-control" href="#carousel-' + id + '" role="button" data-slide="prev">\
        <svg class="chevronLeft" aria-hidden="true"><use xlink:href="#icon-arrow_circle_carousel_left" /></svg>\
        <span class="sr-only">Previous</span>\
      </a>\
      <a class="right carousel-control" href="#carousel-' + id + '" role="button" data-slide="next">\
        <svg class="chevronRight" aria-hidden="true"><use xlink:href="#icon-arrow_circle_carousel_right" /></svg>\
        <span class="sr-only">Next</span>\
      </a>\
    </div>');
    // Initialize the carousel
    $('#carousel-' + id).carousel({
      // interval: 1000000
    });
  }

  var init = function(id) {
    buildCarousel(id);
  };

  return {
    init: init
  };
  
})(jQuery);
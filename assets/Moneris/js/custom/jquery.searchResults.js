var SearchResults = (function($) {
  
  /* jshint multistr: true */
  
  function rearrange() {
    if ($('aside div.searchResultsFilter').length > 0) {
      $('#srchrsltsfltr').append('<div class="filterMobile" id="fltrmble"></div>');
      var h2 = $('aside div.searchResultsFilter h2').html();
      var list = $('aside div.searchResultsFilter ul').html();
      $('#fltrmble').append('<a class="btnFilterToggle" role="button" data-toggle="collapse" href="#filterOptions" aria-expanded="false" aria-controls="filterOptions">\
          <span class="text">' + h2 + '\
            <svg class="chevronDown"><use xlink:href="#icon-chevron_down_normal_dark_blue"></use></svg>\
            <svg class="chevronUp"><use xlink:href="#icon-chevron_up_normal_dark_blue"></use></svg>\
          </span>\
        </a>\
        <div class="collapse" id="filterOptions">\
          <ul>' + list + '</ul>\
        </div>');
      NiceResponsive.showHideSearchFilter();
      var filter = '<aside class="col-xs-12 col-md-4 show">' + $('aside').html() + '</aside>';
      $('aside').remove();
      $('div.leftSidebar div.row').addClass('js');
      $('article').before(filter);
    }
  }

  var init = function() {
    rearrange();
  };

  return {
    init: init
  };
  
})(jQuery);
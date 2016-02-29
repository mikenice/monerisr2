var NiceDetect = (function($) {
  
  var addClasses = function() {
    var $html = $('html');
    /*
    if ($html.hasClass('mobile'))
      $html.addClass('smartphone');
    */
    if ($html.hasClass('ie')) {
      if ($html.hasClass('ie12'))
        $html.addClass('lt-ie13');
      else if ($html.hasClass('ie11'))
        $html.addClass('lt-ie12');
      else if ($html.hasClass('ie10'))
        $html.addClass('lt-ie11');
      else if ($html.hasClass('ie9'))
        $html.addClass('lt-ie10');
      else if ($html.hasClass('ie8'))
        $html.addClass('lt-ie9');
    }
  };

  var init = function() {
    addClasses();
  };

  return {
    addClasses: addClasses,
    init: init
  };
  
})(jQuery);
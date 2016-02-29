var WatchTheStory = (function($) {
  
  /* jshint multistr: true */

  var lightbox = '<div id="vdobx" class="videoBox" style="display: none;">\
    <iframe id="viddler-63098acf" src="//www.viddler.com/embed/63098acf/?f=1&amp;autoplay=0&amp;player=full&amp;secret=77772444&amp;disablebackwardseek=false&amp;disableseek=false&amp;disableforwardseek=false&amp;make_responsive=false&amp;loop=false&amp;nologo=false&amp;hd=false" frameborder="0" scrolling="no" allowfullscreen></iframe><a href="#" title="Close viddler" id="clsvddlr" class="closeViddler", onclick="WatchTheStory.closeLightbox(); return false;">\
      <svg class="off">\
        <title>Close icon</title>\
        <desc>Close (x) icon</desc>\
        <use xlink:href="#icon-close_x"></use>\
      </svg>\
      <svg class="hover">\
        <title>Close viddler</title>\
        <desc>Close (x) icon</desc>\
        <use xlink:href="#icon-close_x_hover_teal"></use>\
      </svg></a>\
  </div>';

  var closeLightbox = function() {
    $('#vdobx').remove();
    // return false;
  };

  function setup() {
    $('#viddler').click(function() {
      console.log('test');
      $('#mswtsc').append(lightbox);
      var size = NiceResponsive.getSize();
      var width,
        height;
      if (size == 'xs') {
        width = '260px';
        height = '171px';
      } else if (size == 'sm') {
        width = '648px';
        height = '426px';
      } else {
        width = '819px';
        height = '538px';
      }
      $('#viddler-63098acf').attr({
        'width': width,
        'height': height
      });
      $('#vdobx').show();
      return false;
    });
  }
  
  var init = function() {
    setup();
  };

  return {
    closeLightbox: closeLightbox,
    init: init
  };
  
})(jQuery);
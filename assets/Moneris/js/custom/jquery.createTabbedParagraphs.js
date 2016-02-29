var CreateTabbedParagraphs = (function($) {

  /* jshint multistr: true */

  var paragraphs = [],
    currentlyOpen;

  var getCurrentlyOpen = function() {
    return currentlyOpen;
  };

  function build() {
    /* ALERT: Going to need to put a script in here that references the .active class on the opening .paragraph <div> */
    $('#prgrphwrppr div.paragraph').each(function(i) {
      if ($(this).hasClass('active'))
        currentlyOpen = i;
      paragraphs.push({
        h2: $(this).children('h2').html(),
        p: $(this).children('div.paragraphContent').html()
      });
    });
    $('#prgrphwrppr').remove();
    $('#cllpsswrppr').append('<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>');
    $('#tbswrppr').append('<ul class="nav nav-tabs" id="tpTabs" role="tablist"></ul><div class="tab-content" id="tbcntnt"></div>');
    for (var i = 0; i < paragraphs.length; i++) {
      if (i === currentlyOpen) {
        $('#accordion').append('<div class="panel panel-default paragraph">\
            <div class="panel-heading" role="tab" id="heading-' + i + '">\
              <h2 class="panel-title">\
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-' + i + '" aria-expanded="true" aria-controls="collapse-' + i + '">' + paragraphs[i].h2 + '</a>\
              </h2>\
            </div>\
            <div id="collapse-' + i + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading-' + i + '">\
              <div class="panel-body">\
                <div class="paragraphContent">' + paragraphs[i].p + '</div>\
              </div>\
            </div>\
          </div>');
        $('#tpTabs').append('<li role="presentation" class="active"><a href="#tab-' + i + '" aria-controls="tab-' + i + '" role="tab" data-toggle="tab"><span>' + paragraphs[i].h2 + '</span></a></li>');
        $('#tbcntnt').append('<div role="tabpanel" class="tab-pane fade in active" id="tab-' + i + '">\
            <div class="paragraph">\
              <div class="paragraphContent">' + paragraphs[i].p + '</div>\
            </div>\
          </div>');
      } else {
        $('#accordion').append('<div class="panel panel-default paragraph">\
            <div class="panel-heading" role="tab" id="heading-' + i + '">\
              <h2 class="panel-title">\
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-' + i + '" aria-expanded="false" aria-controls="collapse-' + i + '">' + paragraphs[i].h2 + '</a>\
              </h2>\
            </div>\
            <div id="collapse-' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-' + i + '">\
              <div class="panel-body">\
                <div class="paragraphContent">' + paragraphs[i].p + '</div>\
              </div>\
            </div>\
          </div>');
        $('#tpTabs').append('<li role="presentation"><a href="#tab-' + i + '" aria-controls="tab-' + i + '" role="tab" data-toggle="tab"><span>' + paragraphs[i].h2 + '</span></a></li>');
        $('#tbcntnt').append('<div role="tabpanel" class="tab-pane fade" id="tab-' + i + '">\
            <div class="paragraph">\
              <div class="paragraphContent">' + paragraphs[i].p + '</div>\
            </div>\
          </div>');
      }
    }
    $('#cllpsswrppr a[id^=superscript-], #cllpsswrppr a[id^=legal-]').each(function() {
      var href = $(this).attr('href');
      var id = $(this).attr('id');
      $(this).attr({
        'href': href + '-collapse',
        'id': id + '-collapse'
      });
    });
    $('#tbcntnt a[id^=superscript-], #tbcntnt a[id^=legal-]').each(function() {
      var href = $(this).attr('href');
      var id = $(this).attr('id');
      $(this).attr({
        'href': href + '-tab',
        'id': id + '-tab'
      });
    });
    $('#cllpsswrppr div.paragraph h2 a, #tpTabs li a').click(function() {
      currentlyOpen = parseInt($(this).attr('href').split('-')[1]);
    });
    NiceResponsive.showHideCollapsesTabs();
    NiceResponsive.sizeTabWidths();
  }
  
  var init = function() {
    build();
  };

  return {
    getCurrentlyOpen: getCurrentlyOpen,
    init: init
  };
  
})(jQuery);
$(function () {
  if ($('.js-tab').length) {
    $('.js-tab').each(function () {
      var _this = $(this);
      var $tab = _this.find('.tab-pn').slick({
        dots: false,
        autoplay: false,
        arrows: false
      });
      _this.find('.tab li:eq(0)').addClass('current');
      _this.find('.tab li').click(function (event) {
        var i = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $tab.slickGoTo(i);
      });
      $('.hao-welfare .slick-slide').show();
    });
  };

  if ($('.js-rank').length) {
    $('.js-rank').each(function () {
      var currentObj, _this = $(this);
      for (var i = 0; i < $('li', _this).length; i++) {
        currentObj = $('li:eq(' + i + ')', _this);
        currentObj.mouseenter(function () {
          $(this).addClass('active').siblings().removeClass('active');
        }).find('.c1 em').html(i + 1);
      };
      $('li:eq(0)', _this).addClass('active');
    })
  }
  //new ue.Slide('.focus-in');

  var $backToTopEle = $('.btn-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 120);
  }),
    $backToTopFun = function () {
      var st = $(document).scrollTop(),
        winh = $(window).height();
      if (st > 0) {
        $backToTopEle.css('display', 'block');
      } else {
        $backToTopEle.css('display', 'none');
      };
    };
  $(window).bind("scroll", $backToTopFun);
  new ue.Slide('.focus-in');

});

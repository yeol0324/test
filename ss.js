window.DisplayUtils = {
  /**
   * 화면 해상도에 따른 비율값 구하기
   * @param min:int 최소 사이즈(px)
   * @param max:int 최대 사이즈(px)
   * @return int
   */
  getRatioValue: function (min, max, maxResolution) {
    var resolution = maxResolution || 2560;
    var W = $(window).width();
    var r = 0;

    r = (max * W) / resolution;

    if (Math.abs(r) < Math.abs(min)) {
      r = min;
    } else if (Math.abs(r) > Math.abs(max)) {
      r = max;
    }

    return Math.round(r);
  },
};

(function ($) {
  // 기본 폰트 사이즈(px)
  window.FONT_SIZE = 16;

  // 최소 폰트 사이즈(px)
  window.MIN_FONT_SIZE = 8;

  /**
   * UI Resize
   * @param prop:String css 속성명
   * @param min:int 최소 사이즈(px)
   * @param max:int 최대 사이즈(px)
   * @usage $({target}).resizeUI('width', 100, 200);
   */
  $.fn.resizeUI = function (prop, min, max, maxResolution) {
    var r = DisplayUtils.getRatioValue(min, max, maxResolution);
    $(this).css(prop, r);

    return this;
  };
})(jQuery);

$(function () {
  function onResize() {
    $("body").resizeUI("font-size", window.MIN_FONT_SIZE, window.FONT_SIZE);
  }

  $(window).on("resize", onResize).resize();
});

'use strict';

$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner .item').each(function (i,item) {
            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $(item).data('image-lg');
            $item.css('backgroundImage','url("'+imgSrc+'")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');
});

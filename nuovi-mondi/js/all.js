$(window).load(function() {
    $("body").removeClass("preload");
    var $animation_elements = $('section, footer, .bg-home, .bg-alt, .creative-portfolio');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    $("#menu-link").click(function() {
        $("#menu").fadeIn("fast").css('display', 'flex');
        $('html').css('overflow', 'hidden');
        $('body').bind('touchmove', function(e) {
            e.preventDefault()
        });
    });
    $(".navi-close").click(function() {
        $("#menu").fadeOut("fast");
        $('html').css('overflow', 'scroll');
        $('body').unbind('touchmove');
    });
});
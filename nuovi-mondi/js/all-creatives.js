$(document).ready(function() {
    $('.cp-thumb').hover(function() {
        $(this).find('.cp-child').css('transform', 'scale(1.05)');
    }, function() {
        $(this).find('.cp-child').css('transform', 'scale(1)');
    });
    $('.creatives .filters').scrollToFixed({
        marginTop: 20,
        limit: function() {
            var limit = $('.newsletter').offset().top - $('.creatives .filters').outerHeight(true) - 100;
            return limit;
        }
    });
    $(".filter-bar .button, .filters-close").on("click", function() {
        $("#mobile-filters, .filter-bar").slideToggle();
        $("html, body").animate({
            scrollTop: "0px"
        });
    });
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $("body").stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
    });
    var $grid = $('#filter-creatives').isotope({
        itemSelector: '.item',
        layoutMode: 'vertical'
    });
    $('.filters').on('click', 'div', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $('div.active').not(this).removeClass('active');
        $(this).toggleClass('active');
        $("html, body").animate({
            scrollTop: "170px"
        });
    });
    $('#mobile-filters').on('click', '.filters-close', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $('div.active').not(this).removeClass('active');
        $(this).toggleClass('active');
    });
    $('.filters').on('click', 'div.active', function() {
        $(this).addClass('active');
    });
});
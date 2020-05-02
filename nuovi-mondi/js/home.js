$(document).ready(function() {
    $('.creative.art h2').hover(function() {
        $('.creative.art .cp-child').css('transform', 'scale(1.03)');
        $('.creative.art .cp-child').css('box-shadow', 'inset 0 0 0 20px #fff');
    }, function() {
        $('.creative.art .cp-child').css('transform', 'scale(1)');
        $('.creative.art .cp-child').css('box-shadow', 'inset 0 0 0 0 #fff');
    });
    $('.creative.photo h2').hover(function() {
        $('.creative.photo .cp-child').css('transform', 'scale(1.03)');
        $('.creative.photo .cp-child').css('box-shadow', 'inset 0 0 0 20px #fff');
    }, function() {
        $('.creative.photo .cp-child').css('transform', 'scale(1)');
        $('.creative.photo .cp-child').css('box-shadow', 'inset 0 0 0 0 #fff');
    });
    $('.creative.film h2').hover(function() {
        $('.creative.film .gif-container img').css('width', '48%');
        $('.creative.film .gif-container img').css('padding', '1%');
    }, function() {
        $('.creative.film .gif-container img').css('width', '50%');
        $('.creative.film .gif-container img').css('padding', '0%');
    });
    $(".more-creatives").click(function() {
        $("#creative-menu").addClass('menu-in-view');
        $("#creative-menu").css('pointer-events', 'auto');
        $("html").css('overflow-y', 'hidden');
        $("body").bind("touchmove", function(e) {
            e.preventDefault();
        });
    });
    $(".menu-close").click(function() {
        $("#creative-menu").removeClass('menu-in-view');
        $("#creative-menu").css('pointer-events', 'none');
        $("html").css('overflow-y', 'auto');
        $('body').unbind('touchmove');
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
    });
    $('.filters').on('click', 'div.active', function() {
        $(this).addClass('active');
    });
});
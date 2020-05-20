$(document).ready(function() {
    $(".more-filters span").on("click", function() {
        $(this).text($(this).text() == 'Less filters' ? 'More filters' : 'Less filters');
        $("#filters ul").toggleClass("less-filters");
    });
    $(".filter-bar .button, .filters-close").on("click", function() {
        $("#mobile-filters, .filter-bar").slideToggle();
        $("html, body").animate({
            scrollTop: "250px"
        });
    });
});
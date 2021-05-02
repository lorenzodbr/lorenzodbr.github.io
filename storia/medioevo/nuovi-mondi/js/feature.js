$(document).ready(function() {
    $('#feature .aside-col').scrollToFixed({
        marginTop: 20,
        limit: function() {
            var limit = $('#related').offset().top - $('#feature .aside-col').outerHeight(true) - 100;
            return limit;
        }
    });
});
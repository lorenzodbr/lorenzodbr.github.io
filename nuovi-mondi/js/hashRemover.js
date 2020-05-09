var Webflow = Webflow || [];
Webflow.push(function() {
    $('a').click(function() {
        setTimeout(function() {
            history.replaceState(null, null, ' ');
        }, 0);
    });
});
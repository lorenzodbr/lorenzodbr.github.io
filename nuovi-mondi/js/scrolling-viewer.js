var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
	   $(".bottom-bar").slideUp(250, "linear", function(){});
   } else {
       $(".bottom-bar").slideDown(250, "linear", function(){});
   }
   lastScrollTop = st;
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
	   $(".bottom-bar").addClass("bar-down").removeClass("bar-up");
   } else {
       $(".bottom-bar").addClass("bar-up").removeClass("bar-down");
   }
   lastScrollTop = st;
});
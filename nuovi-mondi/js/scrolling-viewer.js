var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       document.getElementByClassName("bottom-bar").style.bottom = "-100%";
   } else {
      document.getElementByClassName("bottom-bar").style.bottom = "0";
   }
   lastScrollTop = st;
}, false);

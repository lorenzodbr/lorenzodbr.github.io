function translate(event) {
	let testoTradotto = $(event.target).siblings(".testo-tradotto");
	let testoOriginale = $(event.target).siblings(".testo-originale");
	
	let linkOriginale;
	let linkTradotto;
	
	if($(event.target).prop("id") == "originale"){
		linkOriginale = $(event.target);
		linkTradotto = $(event.target).siblings(".tradotto");
		
		testoTradotto.addClass("text-non-active").removeClass("text-active");
		
		testoOriginale.removeClass("text-non-active").addClass("text-active");
		
		linkOriginale.removeClass("translate-link-non-active").addClass("translate-link-active");
		
		linkTradotto.removeClass("translate-link-active").addClass("translate-link-non-active");
	}
	else{
		linkOriginale = $(event.target).siblings(".originale");
		linkTradotto = $(event.target);
		
		testoOriginale.addClass("text-non-active").removeClass("text-active");
		
		testoTradotto.removeClass("text-non-active").addClass("text-active");
		
		linkTradotto.removeClass("translate-link-non-active").addClass("translate-link-active");
		
		linkOriginale.removeClass("translate-link-active").addClass("translate-link-non-active");
	}
}

$(".originale").click(translate);
$(".tradotto").click(translate);
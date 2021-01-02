
function translate(event) {
	let testoTradotto = $(event.target).siblings(".testo-tradotto");
	let testoOriginale = $(event.target).siblings(".testo-originale");
	
	var linkOriginale;
	var linkTradotto;
	
	if($(event.target).prop("id") == "originale"){
		linkOriginale = $(event.target);
		linkTradotto = $(event.target).siblings(".tradotto");
		
		testoTradotto.addClass("text-non-active");
		testoTradotto.removeClass("text-active");
		
		testoOriginale.removeClass("text-non-active");
		testoOriginale.addClass("text-active");
		
		linkOriginale.removeClass("translate-link-non-active");
		linkOriginale.addClass("translate-link-active");
		
		linkTradotto.removeClass("translate-link-active");
		linkTradotto.addClass("translate-link-non-active");
	}
	else{
		linkOriginale = $(event.target).siblings(".originale");
		linkTradotto = $(event.target);
		
		testoOriginale.addClass("text-non-active");
		testoOriginale.removeClass("text-active");
		
		testoTradotto.removeClass("text-non-active");
		testoTradotto.addClass("text-active");
		
		linkTradotto.removeClass("translate-link-non-active");
		linkTradotto.addClass("translate-link-active");
		
		linkOriginale.removeClass("translate-link-active");
		linkOriginale.addClass("translate-link-non-active");
	}
}

$(".originale").click(translate);
$(".tradotto").click(translate);
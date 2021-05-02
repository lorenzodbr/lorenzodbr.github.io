/*
    throttle helper

*/

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

/*
    Intersection observer for lazyloading and animations
*/

setTimeout(() => {
    // animation observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.intersectionRatio > 0) {
            entry.target.classList.add('did-appear');
            observer.unobserve(entry.target);
         } 
       });
   }, { threshold: [0] });
   
   document.querySelectorAll('.will-appear').forEach(elem => {
      observer.observe(elem);
   });

   // image observer
   const observerImage = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {

                entry.target.querySelectorAll('[data-srcset]').forEach(elem => {
                    elem.setAttribute('srcset', elem.getAttribute('data-srcset'))
                    elem.removeAttribute('data-srcset')
                })

                entry.target.querySelectorAll('[data-src]').forEach(elem => {
                    elem.setAttribute('src', elem.getAttribute('data-src'))
                    elem.removeAttribute('data-src')

                    elem.classList.add('did-appear')
                })

                observer.unobserve(entry.target);
            } 
        });
    }, { threshold: [0] });
    
    document.querySelectorAll('.responsive-image').forEach(elem => {
        observerImage.observe(elem);
    }); 
}, 200);

/*
    page fade
*/

function getSoundAndFadeAudio(audiosnippetId) {

    var sound = document.getElementById(audiosnippetId);

    var fadePoint = sound.currentTime; 

    var fadeAudio = setInterval(function () {

        // Only fade if past the fade out point or not at zero already
        if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
            sound.volume -= 0.0125;
        }
        // When volume at zero stop all the intervalling
        if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 10);
}

document.querySelectorAll('.js-page-transition').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        pageTransition(e.currentTarget.getAttribute('href'));
		getSoundAndFadeAudio('bg-audio');
    })
})

window.onpopstate = e => {
    e.preventDefault();
    pageTransition(document.location)
};

setTimeout(() => {
    document.querySelector('body').classList.remove('transition-out');

    setTimeout(() => {
        document.querySelector('body').classList.remove('transition-in');
    }, 100)
},20)

// to force a state refresh on the site in firefox
window.onunload = function(){}; 

function unloadingWebsite() {
    document.querySelector('body').classList.remove('transition-out')

}
window.addEventListener("pagehide", function() {
    unloadingWebsite();
});
window.addEventListener("pageshow", function() {
    unloadingWebsite();
});

function pageTransition(target) {
    document.querySelector('body').classList.add('transition-out')

    setTimeout(() => {
        window.location.href = target;
    }, 1000)
}

/*
    cursor
*/

function isTouch() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

if (!isTouch()) {
    document.querySelector('body').classList.remove('state--cursor-hidden')
    document.querySelector('body').classList.add('no-touch')
}

const root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
})
let hiddenCursor = false;
document.querySelectorAll('a').forEach(elem => {
    elem.addEventListener('mouseenter', e => {
        document.querySelector('.cursor').classList.add('state--hover')
    })
    elem.addEventListener('mouseleave', e => {
        document.querySelector('.cursor').classList.remove('state--hover')
    })
})

document.querySelectorAll('.js-hide-cursor').forEach(elem => {
    elem.addEventListener('mouseenter', e => {
        document.querySelector('.cursor').classList.add('state--hidden');
    })
    elem.addEventListener('mouseleave', e => {
        document.querySelector('.cursor').classList.remove('state--hidden');
    });
})

/*
    text-image trigger
*/

document.querySelectorAll('.js-text-image__trigger').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        if (e.currentTarget.parentElement.classList.contains('state--open')) {

            // e.currentTarget.parentElement.querySelector('.js-text-image__text-inner').style.height = `${e.currentTarget.parentElement.querySelector('.js-text-image__text-wrapper').clientHeight}px`;

            e.currentTarget.parentElement.classList.remove('state--open')
            e.currentTarget.parentElement.querySelector('.js-text-image__text-inner').style.height = 0;
        } else {
            e.currentTarget.parentElement.classList.add('state--open')
            e.currentTarget.parentElement.querySelector('.js-text-image__text-inner').style.height = `${e.currentTarget.parentElement.querySelector('.js-text-image__text-wrapper').clientHeight}px`;
        }
    })
});

/*
    transition hover
*/

document.querySelectorAll('.js-transition-hover').forEach(elem => {
    elem.addEventListener('mousemove', e => {
        getPosition(e)
    });

    elem.addEventListener('mouseenter', e => {
        const current = e.currentTarget.parentElement;
        current.classList.add('state--hover')
    });

    elem.addEventListener('mouseleave', e => {
        const current = e.currentTarget.parentElement;
        current.classList.remove('state--hover')
    });
})

function getPosition(e) {
    var rect = e.currentTarget.getBoundingClientRect();
    var x = (e.clientX - rect.left) / e.currentTarget.offsetWidth - 0.5;
    var y = e.clientY - rect.top;
    
    root.style.setProperty("--project-hover-x", x.toFixed(3));
    root.style.setProperty("--project-hover-y", y.toFixed(1));
  }

  /*
    Home
  */

if(document.querySelector('.swiper-container')) {

    setTimeout(() => {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,
            mousewheelControl: true,
            speed: 800,
            effect: 'fade'
        });

        document.querySelectorAll('.js-home__hover').forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                document.querySelector('.js-home__slider').classList.add('state--hover')
            })
            elem.addEventListener('mouseleave', () => {
                document.querySelector('.js-home__slider').classList.remove('state--hover')
            })
        })
        
        swiper.on('init', swiper =>  {
            switchTheme()
        })

        let lastIndex = 0;
        
        swiper.on('slideChangeStart', swiper =>  {
            const elements = document.querySelectorAll('.js-home__count-inner');
            const currentElem = elements[swiper.activeIndex];
            const prevElem = elements[lastIndex];
            let direction;

            elements.forEach(elem => {
                elem.classList.remove('state--active')
            })
        
            if (lastIndex < swiper.activeIndex) {
                // swipe down
                prevElem.classList.add('state--top')
                direction = 'down';

                // put current it down 
                currentElem.classList.add('state--reset');
                currentElem.classList.remove('state--top');
                currentElem.classList.remove('state--reset');

                // put prev back down
                setTimeout(() => {
                    prevElem.classList.add('state--reset')
                    prevElem.classList.remove('state--top');

                    setTimeout(() => {
                        prevElem.classList.remove('state--reset');
                    },100)
                }, 1000)
            } else {

                // put current up
                currentElem.classList.add('state--reset');
                currentElem.classList.add('state--top');
                    
                setTimeout(() => {
                    currentElem.classList.remove('state--reset');
                    // swipe up
                    currentElem.classList.remove('state--top')
                },100)

                direction = 'up';
            }

            // set pagination status
            document.querySelector('.js-home__pagination-bullet').style.top = `${swiper.activeIndex * 30}px`;
        
            // check color
            switchTheme(direction)
        
            currentElem.classList.add('state--active');
            
            lastIndex = swiper.activeIndex;
        });
    }, 300)
}

function switchTheme(direction) {
    const elem = document.querySelector('.swiper-slide-active');

    if (direction === 'up') {
        elem.classList.add('state--top')
    } else {
        elem.classList.remove('state--top')
    }

    document.querySelector('body').classList.remove('state--color-black')
    document.querySelector('body').classList.remove('state--color-gray')

    if(elem.dataset.slideColor && elem.dataset.slideColor !== 'white') {
        document.querySelector('body').classList.add(`state--color-${elem.dataset.slideColor}`)
    } 
}

if (document.querySelector('.swiper-container-ticker')) {

    document.querySelectorAll('.swiper-container-ticker').forEach(elem => {
        const randomClass = `swiper-${Math.ceil(Math.random() * 10000)}`;

        elem.classList.add(randomClass)

        const swiper = new Swiper(`.${randomClass}`, {
            wrapperClass: 'swiper-wrapper-ticker',
            slideClass: 'swiper-slide-ticker',
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
        });
    })
}

/**
 * Dismiss Page
 *
 */

var audio = document.getElementById('bg-audio');
var layer = document.getElementById('dismiss-page');
var text = document.getElementById('text');
var instructions = document.getElementById('instructions');
var instrp = document.getElementById('instrp');
var instr1 = document.getElementById('instr1');
var instr2 = document.getElementById('instr2');
var instr3 = document.getElementById('instr3');

var chrome_panel = document.getElementById('chrome');
var safari_panel = document.getElementById('safari');
var generic_panel = document.getElementById('generic');

audio.volume = 0.5;

var prevTrack = localStorage.getItem('track') ? localStorage.getItem('track') : null;

var currentTrack;

if(prevTrack){
	currentTrack = getNewTrack(prevTrack);
	localStorage.setItem('track', currentTrack);
	audio.src = '/medioevo/viaggi/sounds/bg-music-' + currentTrack + '.mp3';
}
else{
	currentTrack = getNewTrack(0);
	localStorage.setItem('track', currentTrack);
	audio.src = '/medioevo/viaggi/sounds/bg-music-' + currentTrack +'.mp3';
}

audio.onended = function() {
	currentTrack = getNewTrack(localStorage.getItem('track'));
	localStorage.setItem('track', currentTrack);
	audio.src = '/medioevo/viaggi/sounds/bg-music-' + currentTrack + '.mp3';
	audio.play();
};

if(localStorage.getItem('confirmation') === 'true'){
	layer.style.zIndex = '-10';
	layer.style.opacity = '0';
	
	if(localStorage.getItem('answer') === 'yes'){
		audio.play();
	}
}

document.getElementById('button-dismiss').onclick = function() {
	audio.play();
	
	layer.style.opacity = '0';
	setTimeout(function(){
		layer.style.zIndex = '-10';
	}, 500);
}

document.getElementById('button-yes').onclick = function() {
		localStorage.setItem('answer', 'yes');
		
		if(document.getElementById('confirmation').checked){
			
			localStorage.setItem('confirmation', 'true');
			
			text.style.opacity = '0';
			setTimeout(function(){
				text.style.zIndex = '-10';
			}, 500);
			text.style.display = 'none';
			
			instructions.style.opacity = '1';
			
			if(checkBrowser() === 'chrome'){
				instrp.innerHTML = 'Per poter proseguire, per favore, completa questi passaggi (Chrome):';
				instr1.innerHTML = '1) Premere sull&apos;icona a forma di lucchetto nella barra degli indirizzi';
				instr2.innerHTML = '2) Premere su &quot;Impostazioni sito&quot;';
				instr3.innerHTML = '3) Nella pagina che si apre cercare e modificare l&apos;opzione &quot;Audio&quot; da &quot;Automatica&quot; a &quot;Consenti&quot;';
			}
			else if(checkBrowser() === 'safari'){
				instrp.innerHTML = 'Per poter proseguire, per favore, completa questi passaggi (Safari):';
				instr1.innerHTML = '1) Premere su &quot;Safari&quot; nella barra in alto';
				instr2.innerHTML = '2) Premere &quot;Impostazioni per il sito web...&quot;';
				instr3.innerHTML = '3) Modificare il campo relativo a &quot;Riproduzione automatica&quot; su&quot;Sempre&quot;';
			}
		}
		else{
			layer.style.opacity = '0';
			setTimeout(function(){
				layer.style.zIndex = '-10';
			}, 500);
			audio.play();
		}
}

document.getElementById('button-no').onclick = function() {
		getSoundAndFadeAudio('bg-audio');
		audio.pause();
		
		layer.style.opacity = '0';
		setTimeout(function(){
			layer.style.zIndex = '-10';
		}, 500);
		
		localStorage.setItem('answer', 'no');
		
		if(document.getElementById('confirmation').checked){
			localStorage.setItem('confirmation', 'true');
		}
}


function checkBrowser() {     
	// Get the user-agent string 
	let userAgentString =  
		navigator.userAgent; 
  
	// Detect Chrome 
	let chromeAgent =  
		userAgentString.indexOf("Chrome") > -1; 
  
	// Detect Internet Explorer 
	let IExplorerAgent =  
		userAgentString.indexOf("MSIE") > -1 ||  
		userAgentString.indexOf("rv:") > -1; 
    
	let edgeAgent =  
		userAgentString.indexOf("Edg") > -1 &&
		userAgentString.indexOf("Chrome") > -1; 
  
	// Detect Firefox 
	let firefoxAgent =  
		userAgentString.indexOf("Firefox") > -1; 
  
	// Detect Safari 
	let safariAgent =  
		userAgentString.indexOf("Safari") > -1; 
		  
	// Discard Safari since it also matches Chrome 
	if ((chromeAgent) && (safariAgent))  
		safariAgent = false; 
  
	// Detect Opera 
	let operaAgent =  
		userAgentString.indexOf("OP") > -1; 
		  
	// Discard Chrome since it also matches Opera      
	if ((chromeAgent) && (operaAgent))  
		chromeAgent = false; 
	
	if ((chromeAgent) && (edgeAgent))  
		chromeAgent = false; 
	
	
	if(chromeAgent){
		return 'chrome';
	}
	else if(safariAgent){
		return 'safari';
	}
	else{
		return 'generic';
	}
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

function getNewTrack(c) {
	do{
		n = random(1,5);
	}while(n == c);
		
	return n;
}
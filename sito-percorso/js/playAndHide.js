var audio = document.getElementById('bg-audio');
var layer = document.getElementById('dismiss-page');

audio.volume = 0.3;

document.getElementById('button').onclick = function() {
		audio.play();
		layer.style.opacity = '0';
		setTimeout(function(){
			layer.style.zIndex = '-10'
		}, 500);
		localStorage.setItem('state', '0');
}

const currentState = localStorage.getItem('state') ? localStorage.getItem('state') : null;

if (currentState) {
	
	if(currentState === '0'){
		layer.style.opacity = '0';
	}
}
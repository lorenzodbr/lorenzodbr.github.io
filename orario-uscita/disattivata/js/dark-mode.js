const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
		
		document.getElementById("settings").classList.remove('btn-outline-secondary');
		document.getElementById("settings").classList.add('btn-outline-light');
		
		document.getElementById("credits").classList.remove('btn-outline-secondary');
		document.getElementById("credits").classList.add('btn-outline-light');
		
		document.getElementById("logo").src="img/logo-dark.png";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
		
		document.getElementById("settings").classList.remove('btn-outline-light');
		document.getElementById("settings").classList.add('btn-outline-secondary');
		
		document.getElementById("credits").classList.remove('btn-outline-light');
		document.getElementById("credits").classList.add('btn-outline-secondary');
		
		document.getElementById("logo").src="img/logo-light.png";
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
	
	if (currentTheme === 'dark') {
        document.getElementById("settings").classList.remove('btn-outline-secondary');
		document.getElementById("settings").classList.add('btn-outline-light');
		
		document.getElementById("credits").classList.remove('btn-outline-secondary');
		document.getElementById("credits").classList.add('btn-outline-light');
		
		document.getElementById("logo").src="img/logo-dark.png";
    }
}
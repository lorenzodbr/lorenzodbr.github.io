const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
	
	if (currentTheme === 'dark') {
        document.getElementById("settings").classList.remove('btn-outline-secondary');
		document.getElementById("settings").classList.add('btn-outline-light');
		
		document.getElementById("back").classList.remove('btn-outline-secondary');
		document.getElementById("back").classList.add('btn-outline-light');
    }
	else{
		document.getElementById("settings").classList.remove('btn-outline-light');
		document.getElementById("settings").classList.add('btn-outline-secondary');
		
		document.getElementById("back").classList.remove('btn-outline-light');
		document.getElementById("back").classList.add('btn-outline-secondary');
	}
}
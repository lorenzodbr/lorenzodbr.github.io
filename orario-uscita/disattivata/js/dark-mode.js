const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
	
	if (currentTheme === 'dark') {
		document.getElementById("logo").src="../img/logo-dark.png";
    }
	else{
		document.getElementById("logo").src="../img/logo-light.png";
	}
}
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
		
		document.getElementById("logo").src="../img/logo-dark.png";
    }
    else {
        
		document.getElementById("logo").src="../img/logo-light.png";
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
	
	if (currentTheme === 'dark') {
		document.getElementById("logo").src="../img/logo-dark.png";
    }
}
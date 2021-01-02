const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
		document.querySelector('.atail-text-logo').querySelector('img').src = "/prima-rivoluzione-industriale/img/logo-navbar-dark.png";
		localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
		document.querySelector('.atail-text-logo').querySelector('img').src = "/prima-rivoluzione-industriale/img/logo-navbar.png";
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
		document.querySelector('.atail-text-logo').querySelector('img').src = "/prima-rivoluzione-industriale/img/logo-navbar-dark.png";
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);
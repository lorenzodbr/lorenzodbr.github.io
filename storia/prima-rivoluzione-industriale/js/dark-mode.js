const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const pathDark = "/storia/prima-rivoluzione-industriale/img/logo-navbar-dark.png";
const pathLight = "/storia/prima-rivoluzione-industriale/img/logo-navbar.png";

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
		document.querySelector('.atail-text-logo').querySelector('img').src = pathDark;
		localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
		document.querySelector('.atail-text-logo').querySelector('img').src = pathLight;
        localStorage.setItem('theme', 'light');
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
		document.querySelector('.atail-text-logo').querySelector('img').src = pathDark;
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);
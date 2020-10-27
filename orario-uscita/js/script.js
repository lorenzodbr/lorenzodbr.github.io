var request = new XMLHttpRequest();
var date = new Date();
var giornoSettimana;
var giornoNumerico;
var mese;
var anno;
var piano = 0;
var sestaOra = false;
var active;

updateVar();

request.open("GET", "https://api.npoint.io/4898d48c75ad218992d4");
request.send();
request.onload = redirect;


if(localStorage.getItem("piano")){
	document.querySelector("select").value = localStorage.getItem("piano");
	piano = document.querySelector("select").value;
}
else{
	document.querySelector("select").value = "0";
}

function redirect(){
	var response = JSON.parse(this.responseText);
	active = response.active;	
	
	if(active === "false"){
		document.location.href = "disattivata/";
	}
}

function updateVar(){
	var weekday = new Array(7);
	
	weekday[0] = "Domenica";
	weekday[1] = "Lunedì";
	weekday[2] = "Martedì";
	weekday[3] = "Mercoledì";
	weekday[4] = "Giovedì";
	weekday[5] = "Venerdì";
	weekday[6] = "Sabato";
	
	giornoNumerico = date.getDate();
	giornoSettimana = date.getDay();
	mese = date.getMonth() + 1;
	anno = date.getFullYear();
	document.getElementById("data").innerHTML = weekday[giornoSettimana] + ", " + giornoNumerico + "/" + mese + "/" + anno;
}

function setOra(){
	if(giornoSettimana == 0){
		document.getElementById("ora").innerHTML = "Oggi non c'è scuola";
	}
	else if(giornoSettimana == 6){
		if(piano == 2){
			document.getElementById("ora").innerHTML = "11:55";
		}
		else if(piano == 1){
			if(mese % 2 == 1){
				document.getElementById("ora").innerHTML = "11:50";
			}
			else if (mese % 2 == 0){
				document.getElementById("ora").innerHTML = "12:00";
			}
			else{
				document.getElementById("ora").innerHTML = "Errore";
			}
		}
		else{
			if(mese % 2 == 0){
				document.getElementById("ora").innerHTML = "11:50";
			}
			else if (mese % 2 == 1){
				document.getElementById("ora").innerHTML = "12:00";
			}
			else {
				document.getElementById("ora").innerHTML = "Errore";
			}
		}
	}
	else{
		if(sestaOra == true){
			if(giornoNumerico % 2 == 0){
				if(piano == 0 || piano == 2){
					document.getElementById("ora").innerHTML = "13:45";
				}
				else if(piano == 1 || piano == 3){
					document.getElementById("ora").innerHTML = "13:50";
				}
				else{
					document.getElementById("ora").innerHTML = "Errore";
				}
			}
			else if(giornoNumerico % 2 == 1){
				if(piano == 1 || piano == 3){
					document.getElementById("ora").innerHTML = "13:45";
				}
				else if(piano == 0 || piano == 2){
					document.getElementById("ora").innerHTML = "13:50";
				}
				else{
					document.getElementById("ora").innerHTML = "Errore";
				}
			}
			else{
				document.getElementById("ora").innerHTML = "Errore";
			}
		}
		else{
			if(giornoNumerico % 2 == 0){
				if(piano == 0 || piano == 2){
					document.getElementById("ora").innerHTML = "12:50";
				}
				else if(piano == 1 || piano == 3){
					document.getElementById("ora").innerHTML = "12:55";
				}
				else{
					document.getElementById("ora").innerHTML = "Errore";
				}
			}
			else if(giornoNumerico % 2 == 1){
				if(piano == 1 || piano == 3){
					document.getElementById("ora").innerHTML = "12:50";
				}
				else if(piano == 0 || piano == 2){
					document.getElementById("ora").innerHTML = "12:55";
				}
				else{
					document.getElementById("ora").innerHTML = "Errore";
				}
			}
			else{
				document.getElementById("ora").innerHTML = "Errore";
			}
		}
	}
}

function openWin() {
    document.location.href = "credits/";
}

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var select = document.querySelector('select');
  
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      sestaOra = true
    } else {
      sestaOra = false;
    }
  });
  
  select.addEventListener('change', function () {
    piano = document.querySelector("select").selectedIndex;
	localStorage.setItem("piano", document.querySelector("select").value);
  });
});

document.getElementById("result").addEventListener("click", setOra);
document.getElementById("credits").addEventListener("click", function() {
		document.location.href = "credits/";
});
document.getElementById("settings").addEventListener("click", function() {
		document.location.href = "settings/";
});
var request = new XMLHttpRequest();
var giornoSettimana;
var giornoNumerico;
var mese;
var anno;
var response;
var piano = 0;
var sestaOra = false;

function updateVar(){
	response = JSON.parse(this.responseText);
	giornoNumerico = response.datetime.substring(8,10);
	giornoSettimana = response.day_of_week;
	mese = response.datetime.substring(5,7);
	anno = response.datetime.substring(0,4);
	document.getElementById("data").innerHTML = giornoNumerico + "-" + mese + "-" + anno;
}

function setOra(){
	if(giornoSettimana == 7){
		document.getElementById("ora").innerHTML = "Non c'è scuola oggi";
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
  });
});

request.open("GET", "https://worldtimeapi.org/api/timezone/Europe/Rome");
request.send();
request.onload = updateVar;

document.getElementById("result").addEventListener("click", setOra);
document.getElementById("credits").addEventListener("click", openWin);
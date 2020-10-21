var request = new XMLHttpRequest();
var version;

function updateVar(){
	response = JSON.parse(this.responseText);
	version = response.latestVersion;
	document.getElementById("version").innerHTML = "v" + version;
}


function openWin() {
    document.location.href = "https://github.com/lorenzodbr/OrariDiUscita-MarconiVR/releases/download/v" + version + "/Orari_di_Uscita_v" + version + ".apk";
}



request.open("GET", "https://api.npoint.io/d0f66327be1bdaa66793");
request.send();
request.onload = updateVar;

document.getElementById("button").addEventListener("click", openWin);
var request = new XMLHttpRequest();
var reason;

request.open("GET", "https://api.npoint.io/4898d48c75ad218992d4");
request.send();
request.onload = updateVar;

function updateVar(){
	response = JSON.parse(this.responseText);
	reason = response.reason;	
	document.getElementById("reason").innerHTML = reason;
}
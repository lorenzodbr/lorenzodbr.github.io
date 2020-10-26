var request = new XMLHttpRequest();
var active;
var reason;

request.open("GET", "https://api.npoint.io/4898d48c75ad218992d4");
request.send();
request.onload = updateVar;

function updateVar(){
	var response = JSON.parse(this.responseText);
	active = response.active;
	
	if(active === "false"){
		reason = response.reason;	
		document.getElementById("reason").innerHTML = reason;
	}
	else{
		document.location.href = "../";
	}
}
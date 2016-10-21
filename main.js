function setUserGameInfoFromPageThingFunction() {
	
	var x = document.getElementById("frm1");
	var tokenFromPage = x.elements[0].value;
	var gameFromPage = x.elements[1].value;
	addText("Attempting to log in to discord with given token...");
	var client = new Discord.Client({
		token: tokenFromPage,
		autorun: true
	});
	var presence = {
		idle_since: null,
		game: {
			name: gameFromPage,
			type: 0,
			url: null
		}
	};
	client.on("ready", function(event) {
		addText("Connected!");
		addText("Logged in as: ");
		addText(client.username + " - (" + client.id + ")");
		addText("Setting game name...");
		client.setPresence(presence); addText("Game set to \"" + presence.game.name + "\"");
		addText("All done! You can close the page now.<br />");
		alert("All done! You can close the page now.");
	});
	
	client.on("disconnect", function() {
		addtext("Client disconnected. Did you enter a correct token?");
	});
}
function addText(add) {
	document.getElementById("alltext").innerHTML += add + "<br />";	
	console.log(add);
}
/* Set the width of the box to 40% and show it*/
function dispMsg() {
	document.getElementById("msgBox").style.transition = "opacity 0.5s ease-in-out, top 0.5s ease-in-out, z-index 0.5s ease-out";
	document.getElementById("fadeblack").style.transition = "opacity 0.5s ease-in-out, top 0.5s ease-in-out, z-index 0.5s ease-out";
	document.getElementById("fadeblack").style.opacity = "1";
	document.getElementById("msgBox").style.zIndex = "2";
	document.getElementById("fadeblack").style.zIndex = "1";
	document.getElementById("msgBox").style.top = "30%";
	document.getElementById("msgBox").style.opacity = "1";
}
/* Set the width of the box to 0 and hide it*/
function closeMsg() {
	document.getElementById("msgBox").style.transition = "opacity 0.5s ease-in-out, top 0.5s ease-in-out, z-index 0.5s ease-in";
	document.getElementById("fadeblack").style.transition = "opacity 0.5s ease-in-out, top 0.5s ease-in-out, z-index 0.6s ease-in";
	document.getElementById("msgBox").style.opacity = "0";
	document.getElementById("fadeblack").style.opacity = "0";
	document.getElementById("msgBox").style.top = "25%";
	document.getElementById("msgBox").style.zIndex = "-1";
	document.getElementById("fadeblack").style.zIndex = "-1";
}
function showLog() {
	document.getElementById("alltext").style.display = "block";
	document.getElementById("clicktoshow").innerHTML = "Click to hide log";
	document.getElementById("divvy").onclick = function(){ hideLog(); };	
}
function hideLog() {
	document.getElementById("alltext").style.display = "none";
	document.getElementById("clicktoshow").innerHTML = "Click to show log";
	document.getElementById("divvy").onclick = function(){ showLog(); } ;	
	
}

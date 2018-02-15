//works with endVerbs and endPreps
var bNouns = [
	"My ass ",
	"A cat ",
	"Melted snow ",
	"Horny bagpipers "
	
]
//works with endPreps
var bVerbs = [
	"Drinking chocolate milk ",
	"Sucking a lollipop ",
	"Making out ",
	"Pinging some pong "
]
//works with endNouns
var bAdjs = [
	"Horny ",
	"Drunk "
]
//works with endVerbs
var bPreps =[
	"Getting made fun of for "
]

var endPreps = [
	"in my ass",
	"in a wine glass",
	"in my long-johns",
	"with the pope",
	"with 'former' president Barack H. Obama",
	"in the rain"
]
var endNouns = [
	"clowns",
	"websites",
	"gnomes"
]
var endVerbs = [
	"dunking on trump",
	"fucking in a snow bank",
	"playing piano"
] 
function bigMood() {
	var coinFlip = Math.floor((Math.random()*4)+1);
	if (coinFlip == 1) {
		coinFlip = Math.floor((Math.random()*2)+1);
		if (coinFlip == 1) 
		{
			document.getElementById("moodGen").innerHTML = bNouns[Math.floor(Math.random()*bNouns.length)] + endVerbs[Math.floor(Math.random()*endVerbs.length)];
		}
		else
		{
			document.getElementById("moodGen").innerHTML = bNouns[Math.floor(Math.random()*bNouns.length)] + endPreps[Math.floor(Math.random()*endPreps.length)];
		}
	}
	
	else if (coinFlip == 2){
		document.getElementById("moodGen").innerHTML = bVerbs[Math.floor(Math.random()*bVerbs.length)] + endPreps[Math.floor(Math.random()*endPreps.length)];
	}
	else if (coinFlip == 3){
		document.getElementById("moodGen").innerHTML = bAdjs[Math.floor(Math.random()*bAdjs.length)] + endNouns[Math.floor(Math.random()*endNouns.length)];
	}
	
	else if (coinFlip == 4){
		document.getElementById("moodGen").innerHTML = bPreps[Math.floor(Math.random()*bPreps.length)] + endVerbs[Math.floor(Math.random()*endVerbs.length)];
	}
}


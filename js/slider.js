var bgImageArray = ["background-one", "background-two", "background-three", 
	"background-four", "background-five", "background-six", "background-seven", 
	"background-eight", "background-nine", "background-ten"],

base = "hero is-light is-fullheight ",

secs = 6;

var bgLinksArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", 
	"06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],

link = "../img/";

bgLinksArray.forEach(function(img){
    new Image().src = link + img; 
    // caches images, avoiding white flash between background replacements
});


function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 

			document.getElementById('background').className = base + bgImageArray[k];

		if ((k + 1) === bgImageArray.length) { 
			setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();

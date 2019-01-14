var bgImageArray = ["background-one", "background-two", "background-three", 
	"background-four", "background-five", "background-six", "background-seven", 
	"background-eight", "background-nine", "background-ten"],

base = "hero is-light is-fullheight ",

secs = 6;

var bgLinksArray = ["01.JPG", "02.JPG", "03.JPG", "04.JPG", "05.JPG", 
	"06.JPG", "07.JPG", "08.JPG", "09.JPG", "10.JPG"],

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

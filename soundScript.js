//VOLUME SLIDER
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var start_value = slider.getAttribute("value");

var x = start_value;
var color = 'linear-gradient(90deg, rgb(3, 158, 29)' + (x / 2) + '% , rgb(78, 78, 78)' + x + '%)';
slider.style.background = color;

slider.addEventListener("input", function() {
	x = slider.value;
	
    color = 'linear-gradient(90deg, rgb(3, 158, 29)' + x + '% , rgb(78, 78, 78)' + x + '%)';
	slider.style.background = color;

// ASSIGN VOLUME OBJECTS
	var loop1volume = document.getElementById("volControl1");
	var loop2volume = document.getElementById("volControl2");
	var loop3volume = document.getElementById("volControl3");
	var loop4volume = document.getElementById("volControl4");
	var loop5volume = document.getElementById("volControl5");
	var loop6volume = document.getElementById("volControl6");

// SETTING THE VOLUME
	loop1volume.volume=slider.value / 100;
	loop2volume.volume=slider.value / 100;
	loop3volume.volume=slider.value / 100;
	loop4volume.volume=slider.value / 100;
	loop5volume.volume=slider.value / 100;
	loop6volume.volume=slider.value / 100;	

});


// PITCH RANGE AND SPEED SLIDER
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
  	output2.innerHTML = this.value;
}

var start_value2 = slider2.getAttribute("value");

var x2 = 0	;
var color2 = 'linear-gradient(90deg, rgb(248, 224, 5) ' + (x2 / 2) + '% , rgb(33, 1, 109)' + (x2 / 2) + '%)';
slider2.style.background = color2;

slider2.addEventListener("input", function() {
	x2 = slider2.value / 2;	
	
    color2 = 'linear-gradient(90deg, rgb(248, 224, 5) ' + (x2 / 2) + '% , rgb(33, 1, 109)' + x2 + '%)';
	slider2.style.background = color2;

// ASSIGN PITCH AND SPEED OBJECT
	var loop1Pitch = document.getElementById("volControl1");
	var loop2Pitch = document.getElementById("volControl2");
	var loop3Pitch = document.getElementById("volControl3");
	var loop4Pitch = document.getElementById("volControl4");
	var loop5Pitch= document.getElementById("volControl5");
	var loop6Pitch= document.getElementById("volControl6");

// SET PITCH AND SPEED
	loop1Pitch.playbackRate = slider2.value / 100;
	loop1Pitch.mozPreservesPitch = false;

	loop2Pitch.playbackRate = slider2.value / 100;
	loop2Pitch.mozPreservesPitch = false;

	loop3Pitch.playbackRate =slider2.value / 100;
	loop3Pitch.mozPreservesPitch = false;

	loop4Pitch.playbackRate =slider2.value / 100;
	loop4Pitch.mozPreservesPitch = false;

	loop5Pitch.playbackRate =slider2.value / 100;
	loop5Pitch.mozPreservesPitch = false;

	loop6Pitch.playbackRate =slider2.value / 100;
	loop6Pitch.mozPreservesPitch = false;
	
});
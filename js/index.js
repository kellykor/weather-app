var celsius;
var fahrenheit;

document.getElementById("submit").onclick = function() {
	celsius = parseInt(document.getElementById("celsius").value);
		fahrenheit = celsius*1.8+32;
		document.getElementById("fahrenheit").innerHTML = fahrenheit;
		compare()
	}

function compare () {
	
	if( (celsius > 8) && (celsius < 17) ) {
		document.body.style.backgroundImage = "url('fall.jpg')";
	} 

	else if( celsius < 9) {
		document.body.style.backgroundImage = "url('winter.jpg')";
	} 

	else if( (celsius > 16) && (celsius < 25) ) {
		document.body.style.backgroundImage = "url('spring.jpg')";
	} 

	else if( celsius > 24){
		document.body.style.backgroundImage = "url('summer.jpg')";
	} 

}
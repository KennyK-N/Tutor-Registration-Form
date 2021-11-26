let counter = 1;

text="Create account";

setInterval(type,250);

function type() {
	document.getElementById("animation").innerHTML=text.slice(0,counter);
	counter++;
	if(counter>text.length){
		counter=1;
	}
}
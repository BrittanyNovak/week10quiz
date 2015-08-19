function myFunction(){
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var output = document.getElementById("output");
	
	for(var j = 1; j <= two.value; j++){
		output.innerHTML += "<div>";
	
		for(var i = 1; i <= one.value; i++){
			output.innerHTML += i + " ";
		}
		output.innerHTML += "</div>";
	}
}
function addNums(){
	var num1 = document.getElementById('input_one').value;
	var num2 = document.getElementById('input_two').value;
	document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2));
}

function addStrings(){
	var string1 = document.getElementById('input_three').value;
	var string2 = document.getElementById('input_four').value;
	document.getElementById('result-strings').innerHTML = (string1 + " " + string2);
}
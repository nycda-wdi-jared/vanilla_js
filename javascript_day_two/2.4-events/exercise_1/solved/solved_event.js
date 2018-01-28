//change the h2 element by click on the h1 element
//add the results of the input to the respective divs

document.getElementsByTagName('h1')[0].onclick = function(){
	document.getElementsByTagName('h2')[0].innerText = "I changed you hahahahaha";
}

document.getElementById('form-tag').onsubmit = function(e){
	e.preventDefault();
	document.getElementById('input-one-result').innerText = document.getElementsByName('input_one')[0].value;
	document.getElementById('input-two-result').innerText = document.getElementById('second_input').value;
}
document.getElementById("h1-click-tag").onclick = function(){
	alert('you clicked me')
}
document.getElementById("h2-click-tag").onclick = function(){
	document.getElementsByTagName('h2')[0].innerText = "Look at me, i was changed";
}

document.getElementById("formId").onsubmit = function(e){
	e.preventDefault();
	var divRef = document.getElementById('result-after-submit');
	var userNameVal = document.getElementsByName('username')[0].value;
	var passwordVal = document.getElementsByName('password')[0].value;

	divRef.innerText = "Username: " + userNameVal + " Password: " + passwordVal;
}
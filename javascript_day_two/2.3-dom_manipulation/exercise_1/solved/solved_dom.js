/*
• Create a page with multiple elements, some nested inside of each other, 
  or use a page you've already built
• Practice selecting items and changing their contents from the JavaScript Console
• Once you have the hang of it, write a script to change the content in at least 5 elements
*/

function changeFiveElements(){
	//changing p tag
	var pTag = document.getElementsByTagName('p');
	pTag[1].innerText = "Changed P Tag";

	//changing span tag
	document.getElementsByTagName('span')[0].innerText = "Changed Span Tag";


	var divTag = document.getElementById('div-tag');
	//changing img src within div
	var divImage = divTag.getElementsByTagName('img')[0];
	divImage.src = "AngryDog.jpg";

	//changing a text and href within div, also adding target="_blank"
	var divATag = divTag.getElementsByTagName('a')[0];
	divATag.innerText = "Yahoo";
	divATag.href = "https://www.yahoo.com";
	divATag.target = "_blank"

	//changing section tag
	document.getElementsByTagName('section')[0].innerText = "Changed Section Tag"
}

setTimeout(changeFiveElements, 5000);
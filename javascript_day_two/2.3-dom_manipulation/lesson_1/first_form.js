// document.getElementById('formId').submit();

console.log(document.getElementById('username'));

var heading = document.getElementById('title');
var form = document.getElementById('formId');

//difference between innerHTML & innerText
//innerHTML: Sets or gets the HTML syntax describing the element's descendants
//innerText: Sets or gets the text between the start and end tags of the object
console.log(heading.innerText);
console.log(heading.innerHTML);

console.log(form.innerText);
console.log(form.innerHTML);

var name = "joey";

heading.innerText = "Enter " + name + "'s Information";
console.log(heading.innerText)

//comment in to see what happens
//document.getElementById('main-section').innerHTML = "<h3>Hello World Smaller</h3>"

console.log(document.getElementsByTagName('input'))

var pTags = document.getElementsByTagName('p');
console.log(pTags[0])
console.log(pTags[1].innerText);

var thirdP = document.getElementsByTagName('p')[2]

//comment in to see what happens
//thirdP.innerText = "New Whatever";

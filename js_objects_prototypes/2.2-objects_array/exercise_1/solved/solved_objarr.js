/*

1. create an array of objects.
2. loop through the array of objects
3. console.log one of the properties for each of the objects
4. This is the hard part: append it all to the table

//you are creating your whole table in javascript and adding it to the div tage in the html
*/

var movies = 
[{
	title: "Goodfellas",
	actors: "Robert Deniro, Joe Pesci"
	},
	{
	title: "Casino",
	actors: "Robert Deniro, Joe Pesci"

}]

var str = "<table><tr><th>Title</th><th>Actors</th></tr>";
var tdTag = document.getElementById("table-to-add-to");
for(var i = 0; i < movies.length; i++){
	str += "<tr><td>" + movies[i].title + "</td><td>" + movies[i].actors + "</td>"
}
tdTag.innerHTML = str + "</tr></tr></table>";

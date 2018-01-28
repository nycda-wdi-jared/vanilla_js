/*

Through the object here: 
	1. find the pokemon with attack less than 20 and level equal to 1
		-- use the 'num' variable to add up how many matches fit the statement
	2. find the pokemon with type as gremlin or level greater than 1
		-- use the 'num' variable to add up how many matches fit the statement
	3. Append the total number of matches to the dom
	4. Bonus: find the pokemon with the last letter of its name being "u" and make an array
		      out of those items
*/

var num = 0;

var pokemon = [
	{
		name: 'pikachu',
		type: 'gremlin',
		attack: 10,
		level: 1
	},
	{
		name: 'raichu',
		type: 'gremlin',
		attack: 20,
		level: 2		
	},
	{
		name: 'toros',
		type: 'bull',
		attack: 40,
		level: 3
	},
	{
		name: 'squirtle',
		type: 'turtle',
		attack: 10,
		level: 1
	},
	{
		name: 'bulbasaur',
		type: 'vegetarian',
		attack: 10,
		level: 1
	},
]

for(var i = 0; i < pokemon.length; i++){
	if(pokemon[i].attack < 20 && pokemon[i].level === 1){
		console.log(pokemon[i])
		num++;
	}
}
console.log(num)

for(var i = 0; i < pokemon.length; i++){
	if(pokemon[i].type === "gremlin" || pokemon[i].level > 1){
		console.log(pokemon[i]);
		num++;
	}
}
console.log(num)

document.getElementById('number').innerText = num;

var pokeWithU = pokemon.filter((poke) => {
	return poke.name.slice(poke.name.length - 1) === 'u'
});

pokemon.forEach(function(poke){
	console.log(poke.name.charAt(2))
})

console.log(pokeWithU)
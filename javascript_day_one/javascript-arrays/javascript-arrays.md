autoscale: true
slidenumbers: true

# JavaScript: Arrays

---

# Anatomy of an array

- create arrays like so: var array = [];

```js
var fruit = ["apple", "orange", "grapefruit"];
```

- access elements with 'array[index]'. Note that arrays are "0-indexed"

```js
fruit[0]; // "apple"
fruit[1]; // "orange"
```

- get length of arrays with array.length

```js
fruit.length // 3
```

---

# Exercise
- What does the following print out?

```js
var glaive = ["jack", "sprat", "lean"];
var wurm = [1, 2, 3];

console.log(glaive[0]);
console.log(wurm[1]);
console.log(glaive.length);
console.log(wurm.length - wurm[1]);
```

---

# Looping through arrays
- What does the following print out?

```js
var buildings = ['office', 'institution', 'prefab', 'duplex'];

for (var i = 0; i < buildings.length; i++) {
	console.log("i work at the " + buildings[i]);
}
```

---

# Looping through arrays (continued)
- What does the following print out?

```js
var friends = ['seagull', 'bagel', 'beagle'];

for (var i = 0; i < friends.length; i++) {
  var pluralized = friends[i] + 's';

  friends[i] = pluralized;
}

console.log(friends);

```

---

# Looping in reverse
- What does the following print out?

```js
var planets = ['mars', 'venus', 'saturn', 'jupiter'];

var string = '';
for (var i = planets.length - 1; i >= 0; i--) {
  string += planets[i] + ', ';
}

console.log(string);
```

---

# Exercise
- What does the following print out?

```js
var boop = [5, 3, 1, 2];
var beep = 0;
for (var i = 0; i < boop.length; i++) {
  beep += boop[i];
}

console.log(beep);
```

---

# Exercise
- What does the following print out?

```js
var boop = [4, 5, 3, 10, 2];
var beep = 0;
for (var i = 0; i < boop.length; i++) {
	if (beep < boop[i]) {
		beep = boop[i];
	}
}

console.log(beep);
```

---

# Exercise
- Given an array of strings, find the longest string and print out that string.
- hint: strings also have the .length property
	- i.e `"starburst".length` is 9

---

# Nested Arrays

```js
var container = [ [1, 2, 3], ["ring", "rang", "rung"], [1, 7, 8] ];

for (var i = 0; i < container.length; i++) {
	for (var j = 0; j < container[i].length; j++) {
		console.log(container[i][j]);
	}
}
```

---

# Example

```js
var topographyGrid  = [
  [1, 0, 0, 0, 0, 0],
	[1, 1, 0, 1, 0, 0],
	[1, 1, 3, 3, 1, 0],
	[1, 1, 2, 2, 2, 0],
	[1, 1, 1, 1, 1, 0],
	[0, 0, 1, 1, 1, 1]
];
```

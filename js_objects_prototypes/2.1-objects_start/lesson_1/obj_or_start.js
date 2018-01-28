var dog = {
	name: 'Shayna',
	breed: 'Shih Tzu',
	gender: 'female',
	neutered: true,
	friendly: false
}

console.log(dog)
console.log(dog.name);
console.log(dog.gender);

document.getElementsByTagName('td')[0].innerText = dog.name;
document.getElementsByTagName('td')[1].innerText = dog.breed;
document.getElementsByTagName('td')[2].innerText = dog.gender;
document.getElementsByTagName('td')[3].innerText = dog.neutered;
document.getElementsByTagName('td')[4].innerText = dog.friendly;
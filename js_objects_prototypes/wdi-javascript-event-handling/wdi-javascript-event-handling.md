autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

# JS Event Handling

---

# What is an event?

WOO!

![fit inline](resources/rave.png)


...now how about in the context of JavaScript?

---

# What is an event?

- A JavaScript event is a callback that gets fired when something happens related to the Document Object Model on your website

- For instance, when an element is clicked, or perhaps hovered over

- An event handler can be attached to an element so that when a specific event happens, a specific "callback" function gets fired

---

# Listening for events - native JS

```js
document.
getElementById("someId").addEventListener("click", function(event){
  alert('you clicked me')
})
```

---

# Listening for events - native JS

```js
//reference the document (page we're //currently on)
document.


//lookup an element by ID
getElementById("someId").


//attach an event handler - an anonymous 
// function to execute - when the elem is //clicked
addEventListener("click", function(event) {
  alert('you clicked me')
})
```

---

# Exercise

Create an event that listens for the click on an ```<h1>``` element

Have it send an alert message of whatever text is inside the the ```<h1>```

---

# Resources

### Codecademy

[Make an Interactive Website - Events](https://www.codecademy.com/en/skills/make-an-interactive-website)

### TeamTreeHouse

[Interactive Web Pages with JavaScript - Selecting Elements and Adding Events with JavaScript](https://teamtreehouse.com/library/interactive-web-pages-with-javascript)

### Other Resources

[Exercises: Events](http://www.teaching-materials.org/jsweb/exercises/events.html)

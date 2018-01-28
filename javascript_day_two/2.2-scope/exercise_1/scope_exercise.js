// -------------------------------------------

//exercise 1

//what scope is this?
var bird = "canary";

function sayBird(){
    //what scope is this?
    var bird = "parrot";
    
    //what will bird equal here?
}

sayBird();
//what will bird equal here?
// console.log(bird)

// -------------------------------------------

//exercise 2

var whatever = false;
var c = 10

var outerFunction = function(){
    if (true) {
        var a = 5;
    }

    var nestedFunction = function() {
        whatever = true;
        if (!whatever) {
            var b = 7;
            // what will x equal?
            // console.log("a: " + a);
        }
        if (whatever) {
            //what will b equal
            // console.log("b: " + y);
        }
        var c = 9;
        console.log("c (inside): " + c);
    }
    return nestedFunction;
}

//what will outer function equal?
outerFunction();

//what will whatever equal?
console.log(whatever);

//what will c (outside) equal
console.log("C (outside): " + c); // throws 


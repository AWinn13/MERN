// console.log(hello);
// var hello = 'world';
// !Predicted 
// undefined
// !Actual
// undefined

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// !Predicted
// undefined
// magnet
// !Actual
// magnet

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// !Predicted
// super cool
// !Actual
// super cool

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// !Predicted
// chicken undefined
// !Actual
// chicken
// half-chicken

mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// !Predicted
// error 
// !Actual
// TypeError: mean is not a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// !Predicted
// undefined 
// rock
// r&b 
// disco
// !Actual
// undefined
// rock
// r&b
// disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// !Predicted
// undefined
// san jose
// seattle 
// burbank
// sanjose
// !Actual
// san jose
// seattle
// burbank
// san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// output  { name: 'Chicago', students: 65, hiring: true } TypeError: Assignment to constant variable.






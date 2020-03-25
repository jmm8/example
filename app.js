
var array = [10,9,"eight", 7];

for (var i=10; i>=1; i--){
    console.log(i);
}

console.log("BOOM!");


function print() {
    console.log("Hello Wolrd");
}

function HelloWorld(){
    return 'Hello World';
}




function MyName(){
    var name = prompt("Give me your name!");
    return name;
}

console.log(MyName());



function movieDetails(title,release){
   return (" this is a great movie! " + title + " was released in " + release);
}
var movie1 = prompt("which if your fav movie?")

var movie2 = prompt("when was it released?");

console.log(movieDetails(movie1,movie2));

function shoppingCart(items,cost,balance) {
    if (cost > balance){
        return 'you cannot afford this ${item}';
    }else{
        return "you can afford this ${item}" ;
    }
}

var sentence = shoppingCart("jumper", 50, 70);
console.log(sentence);

var sentence2 = shoppingCart("top", 504, 540);
console.log(sentence2);

var sentence3 = shoppingCart("trousers", 23, 40);
console.log(sentence3);

var sentence4 = shoppingCart("life", 1000000, 1);
console.log(sentence4);

function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

console.log(x + y); // undefined as it can see i the { } brackets, the brackets can see outside whats happenign but outside cant see in



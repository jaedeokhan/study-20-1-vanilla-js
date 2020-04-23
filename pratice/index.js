const nicoInfo = {
    name : "nico",
    age : 25,
    gender : "Male",
    isHandsome : false,
    favMovies : ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        {
            name :  "Kimchi",
            fatty : false,
            name : "Cheese burger"
        },
        {
            name : "Banana"
        }
    ]
 };

//  console.log(nicoInfo.gender); // Male
//  nicoInfo.gender = "Female" // Object 는 수정 가능

// console.log(nicoInfo); // all
// console.log(nicoInfo.name);  // nico
// console.log(nicoInfo.gender); // Female
// console.log(nicoInfo.favMovies) // (3) ["Along the gods", "LOTR", "Oldboy"]
// console.log(nicoInfo.favFood[0].name) // Cheese burger
//  console.log(nicoInfo, console)

 //first function 
// function sayHello(name, age) {
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// function sayHello(name, age) {
//     return `Hello ${name} you are ${age} years old`
// }

// const test = sayHello('du', 21);
// console.log(test);
// sayHello('deok',25);
// console.log(sayHello('dcuk', 25))

// const greetNicolas = sayHello("Nicolas", 35);

// console.log(greetNicolas)

const calculator = {
    plus : function(a, b){
        return ` a + b의 합 : ${a + b}`;
    },
    minus : function(a, b){
        return `${a - b}`;
    },
    pow : function(a, b){
        return `${a ** b}`;
    },
    mutiple : function(a, b){
        return `${a *  b}`;
    }
}

const plus = calculator.plus(5, 10);
console.log(plus);

const minus = calculator.minus(10, 5);
console.log(minus);

const pow = calculator.pow(2, 3);
console.log(pow);

const multiple = calculator.mutiple(3, 5);
console.log(multiple);




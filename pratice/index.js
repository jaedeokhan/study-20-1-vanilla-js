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

 console.log(nicoInfo.gender);

 nicoInfo.gender = "Female"

console.log(nicoInfo); // all
console.log(nicoInfo.name); 
console.log(nicoInfo.gender);
console.log(nicoInfo.favMovies)
console.log(nicoInfo.favFood[0].name)
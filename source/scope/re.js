var firstName; // undefined
firstName = "John"; // 'John'
console.log(firstName); // 'John'

var lastName = "Doe"; // 'Doe' --> Declare and assign
lastName = "Smith"; // 'Smith'  --> ReAssign
console.log(lastName); // 'Smith'

var secondName = "Jane"; // 'Jane' --> Declare and assign
var secondName = "Doe"; // 'Doe'  --> ReAssign
console.log(secondName); // 'Doe'

// LET Y CONST
let fruit = "apple"; // 'apple' --> Declare and assign
fruit = "orange"; // 'orange'  --> ReAssign
console.log(fruit); // 'orange'

//let fruit = "banana"; // error --> error

// CONST
const animal = "cat"; // 'cat' --> Declare and assign
animal = "dog"; // error --> error
console.log(animal); // TypeError: Assignment to constant variable.

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles); // ['🚗']

vehicles.pop();
console.log(vehicles); // []

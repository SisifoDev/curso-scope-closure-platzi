// Variables

var a; // declarando
var b = "b"; // declarando y asignando
b = "b2"; // re-asignando
var a = "aa"; // re-declaración de la variable

// Global Scope
var fruit = "apple"; // global
console.log(`desde el scope global: ${fruit}`); // apple

function bestFruit() {
  var fruit = "banana"; // local
  console.log(`desde el scope local: ${fruit}`); // banana
}

bestFruit();

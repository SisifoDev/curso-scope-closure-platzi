console.log(nameOfDog); //undefined
var nameOfDog = "Bella";
console.log(nameOfDog); //Bella

// Functon hoisting

petName();
function petName() {
  console.log(`El nombre de mi mascota es ${myDog}`); // El nombre de mi mascota es undefined
}

var myDog = "Bella";

/**
 * Variables
 * 
 * Three forms of define variables
 * 
 * -var
 * -let
 * -const
 * 
 */


// variables with var
// var are global in all the code
var name = 'Jose';
console.log(name);

var age = 24;
console.log(age);

var person = {
    name:'Antonio',
    last_name: 'Simmonds',
    address: {
        street:'Via Espana',
        tower_or_house:'Plaza Espana',
        number_of_house:'2A',
    },
    visite_cities: [
        'Panama City',
        'Colon City',
        'Chilibre'
    ]
}

var citie;
citie = 'Panama';
citie = 'Colon';
citie = 13;
console.log(citie);

// Second form of define variables
// let only runn in a block of code you type
let name = 'Jose';
console.log(name);

{
    let waved = 'Hi Im Jose';
    console.log(waved);
}
console.log(waved);

// Third form of define variables 
// const they are constants in time, cannot change the value in time 
// example
const pi = 3.1416;
console.log(pi);
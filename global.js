var newFunct = function (item1){
    console.log(`I am inside new Funct ${item1}`)
 }
 
var patient = function (name){
    console.log(`Patient name is ${name}`)
}

var address = function(address) {
    console.log(`Patient address is ${address}`)
} 

var phone = function(phnumber){
    console.log(`Patient phone number is ${phnumber}`)
}

function addition(a,b){
    return a + b;
}
module.exports = {newFunct,patient,address,phone,addition};












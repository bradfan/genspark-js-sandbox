let number = 0;
const form = document.querySelector("#form");

function metersToFeet() {
  return  number * 3.28;
}
function feetToMeters() {
  return   number * .304;
} 
function litresToGals() {
  return  number * .264
}  
function galsToLitres(){
  return  number * 3.78;
} 
function kgToPounds(){
   return number * 2.2;
} 
function poundsToKg() {
   return number * .4535;
}
 
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");



form.addEventListener("submit", function(e) {
    e.preventDefault();
    number = document.querySelector("#input").value;
    length.textContent = number + " metres = " +  metersToFeet() + " feet" + " || " + number + " feet = " + feetToMeters() + " metres.";
    volume.textContent = number + " litres = " +  litresToGals() + " gallons" +  " || " + number + " gallons = " + galsToLitres() + " litres.";
    mass.textContent = number + " kilos = " +  kgToPounds() + " pounds" + " || " + number + " pounds = " + poundsToKg() + " kilos.";
})
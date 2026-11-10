let cmimi1 = "19.90";
let cmimi2 = "8.50";

cmimi1 = Number(cmimi1);
cmimi2 = Number(cmimi2);

let sasia1 = 2;
let sasia2 = 3;

let totali1 = cmimi1 * sasia1;
let totali2 = cmimi2 * sasia2;

let shuma = totali1 + totali2;

let tarifa = shuma * 0.10;

let finalja = shuma + tarifa;

let rezultati = finalja;

console.log("Artikulli 1: " + totali1 + " €");
console.log("Artikulli 2: " + totali2 + " €");
console.log("Shuma e porosisë: " + shuma + " €");
console.log("Tarifa e shërbimit 10%: " + tarifa + " €");
console.log("Shuma finale: " + rezultati + " €");
console.log("Tipi i vlerës së formatizuar: " + typeof rezultati);
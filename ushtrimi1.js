let cmimiLibrit = 12.50;
let cmimiFletoreve = 1.80;

let sasiaLibrave = 3;
let sasiaFletoreve = 4;

let kostoLibrave = cmimiLibrit * sasiaLibrave;
let kostoFletoreve = cmimiFletoreve * sasiaFletoreve;

let totali = kostoLibrave + kostoFletoreve;

totali =totali+ 2.50;

console.log("FATURA E LIBRARISE");
console.log("Librat: " + sasiaLibrave + " x " + cmimiLibrit + " € = " + kostoLibrave + " €");
console.log("Fletoret: " + sasiaFletoreve + " x " + cmimiFletoreve + " € = " + kostoFletoreve + " €");
console.log("Transporti: 2.50 €");
console.log("TOTALI: " + totali.toFixed(2) + " €");
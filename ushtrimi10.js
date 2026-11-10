let pjesemarres = 45;
let pagesa = 12;

let teArdhurat = pjesemarres * pagesa;

let salla = 180;
let materialet = 95;
let reklama = 60;

let shpenzimet = salla + materialet + reklama;

let diferenca = teArdhurat - shpenzimet;

console.log("RAPORTI FINANCIAR");
console.log("Numri i pjesëmarrësve: " + pjesemarres);
console.log("Pagesa për person: " + pagesa + " €");
console.log("Të ardhurat totale: " + teArdhurat + " €");
console.log("Shpenzimet totale: " + shpenzimet + " €");
console.log("Diferenca fillestare: " + diferenca + " €");
shpenzimet += 25;
diferenca = teArdhurat - shpenzimet;

console.log("RAPORTI PAS SHPENZIMEVE SHTESË");
console.log("Shpenzime të paparashikuara: 25 €");
console.log("Shpenzimet e reja totale: " + shpenzimet + " €");
console.log("Diferenca e re: " + diferenca + " €");
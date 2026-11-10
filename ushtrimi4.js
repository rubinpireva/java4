
let cmimiProduktit1 = 35;
let sasiaProduktit1 = 2;
let cmimiProduktit2 = 24;
let sasiaProduktit2 = 1;
let totali = (cmimiProduktit1 * sasiaProduktit1) +
             (cmimiProduktit2 * sasiaProduktit2);

let zbritja = totali * 0.15;
let pasZbritjes = totali - zbritja;
let transporti = 4;
let perfundimtare = pasZbritjes + transporti;

console.log("Çmimi para zbritjes: " + totali + " €");
console.log("Zbritja 15%: " + zbritja + " €");
console.log("Çmimi pas zbritjes: " + pasZbritjes + " €");
console.log("Transporti: " + transporti + " €");
console.log("Çmimi përfundimtar: " + perfundimtare + " €");
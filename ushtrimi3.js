let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;

let personat = 3;

let buxheti = 80;

let totali = akomodimi + transporti + ushqimi;

let pjesaPerPerson = totali / personat;

let mbetja = buxheti - pjesaPerPerson;

console.log("Kostoja totale e udhëtimit është " + totali + " €.");
console.log("Secili person duhet të paguajë " + pjesaPerPerson + " €.");
console.log("Secilit person i mbeten " + mbetja + " € nga buxheti prej " + buxheti + " €.");
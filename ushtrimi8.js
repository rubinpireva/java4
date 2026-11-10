let flete = 157;
let fletePerStudent = 6;
let grupet = parseInt(flete / fletePerStudent);
let mbetja = flete % fletePerStudent;
let kontrolli = (grupet * fletePerStudent) + mbetja;

console.log("Fletët gjithsej: " + flete);
console.log("Fletët për student: " + fletePerStudent);
console.log("Grupet e plota: " + grupet);
console.log("Fletët e mbetura: " + mbetja);
console.log("Kontrollimi: " + kontrolli);
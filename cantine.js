let client = "Awa";
let codePlat = 1;
let quantite = Number("3");
let montantVerse = 5000;
let prixUnitaire = 0;
let nomPlat = "";

switch (codePlat) {
  case 1:
    nomPlat = "Attiéké-poisson";
    prixUnitaire = 1500;
    break;
  case 2:
    nomPlat = "Riz-poulet";
    prixUnitaire = 2000;
    break;
  case 3:
    nomPlat = "Alloco-œuf";
    prixUnitaire = 1000;
    break;
}

function calculerTotal(prixUnitaire, quantite) {
  return prixUnitaire * quantite;
}

let total = calculerTotal(prixUnitaire, quantite);

console.log(`Client : ${client}`);
console.log(`Commande :`);

for (let i = 1; i <= quantite; i++) {
  console.log(`Plat ${i} : ${nomPlat}`);
}
console.log(`Total à payer : ${total} FCFA`);

if (montantVerse >= total) {
  let monnaie = montantVerse - total;
  console.log(`Monnaie à rendre : ${monnaie} FCFA`);
} else {
  let montantManquant = total - montantVerse;
  console.log(`Montant manquant : ${montantManquant} FCFA`);
}
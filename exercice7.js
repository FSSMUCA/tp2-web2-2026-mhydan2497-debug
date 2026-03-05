let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

console.log("1. Sous-total : " + (prix * quantite) + " MAD");

let reduction = 0;
if (codePromo !== null && estMembre === true) {
    reduction = (prix * quantite) * (reductionPourcentage / 100);
}
console.log("2. Réduction appliquée : " + reduction + " MAD");

let totalFinal = (prix * quantite) - reduction;
console.log("3. Total final : " + totalFinal + " MAD");

console.log("4. Vérification solde...");
if (soldeCompte >= totalFinal) {
    console.log("Paiement accepté");
    let nouveauSolde = soldeCompte - totalFinal;
    console.log("5. Nouveau solde après achat : " + nouveauSolde + " MAD");
} else {
    console.log("Solde insuffisant");
}

console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit     : " + nomProduit);
console.log("Quantité    : " + quantite);
console.log("Prix unit.  : " + prix + " MAD");
console.log("Sous-total  : " + (prix * quantite).toFixed(2) + " MAD");
console.log("Réduction   : " + reduction.toFixed(3) + " MAD");
console.log("Total       : " + totalFinal.toFixed(3) + " MAD");
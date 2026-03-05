let nom = " Fatima ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("Rapport de nettoyage des données utilisateur :\n");

let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}
console.log(`nom → "${nomCorrige}"`);

let ageCorrige = parseInt(age, 10);
if (Number.isNaN(ageCorrige) || ageCorrige <= 0) {
    ageCorrige = "valeur invalide";
}
console.log(`age → ${ageCorrige}`);

let emailValide = email.includes("@") && email.split("@")[1]?.includes(".");
console.log(`email → ${emailValide ? "valide" : "invalide"}`);

let scoreCorrige = parseInt(scoreJeu, 10);
if (Number.isNaN(scoreCorrige)) {
    scoreCorrige = 0;
}
console.log(`scoreJeu → ${scoreCorrige}`);

let estAdminCorrige;
if (estAdmin === "true") {
    estAdminCorrige = true;
} else if (estAdmin === "false") {
    estAdminCorrige = false;
} else {
    estAdminCorrige = Boolean(estAdmin); 
}
console.log(`estAdmin → ${estAdminCorrige}`);

let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté";
console.log(`derniereConnexion → "${derniereConnexionCorrige}"`);
let nbConnexions = Number(nombreConnexions);
let affichageConnexions = (nbConnexions === 0) ? "Aucune connexion" : nbConnexions;
console.log(`nombreConnexions → ${affichageConnexions}`);
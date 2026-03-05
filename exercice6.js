let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("Partie A — opérateur ?? (nullish coalescing)");
console.log(`nom    ?? "valeur par défaut" -> ${nom ?? "valeur par défaut"}`);
console.log(`age    ?? "valeur par défaut" -> ${age ?? "valeur par défaut"}`);
console.log(`ville  ?? "valeur par défaut" -> ${ville ?? "valeur par défaut"}`);
console.log(`score  ?? "valeur par défaut" -> ${score ?? "valeur par défaut"}`);
console.log(`actif  ?? "valeur par défaut" -> ${actif ?? "valeur par défaut"}`);

console.log("\nPartie B — opérateur || (logical OR)");
console.log(`nom    || "valeur par défaut" -> ${nom || "valeur par défaut"}`);
console.log(`age    || "valeur par défaut" -> ${age || "valeur par défaut"}`);
console.log(`ville  || "valeur par défaut" -> ${ville || "valeur par défaut"}`);
console.log(`score  || "valeur par défaut" -> ${score || "valeur par défaut"}`);
console.log(`actif  || "valeur par défaut" -> ${actif || "valeur par défaut"}`);

console.log("\nPartie C — comparaison ?? vs ||");
console.log(`nom    : ?? et || -> même résultat`);
console.log(`age    : ?? et || -> résultat différent`);
console.log(`ville  : ?? et || -> résultat différent`);
console.log(`score  : ?? et || -> même résultat`);
console.log(`actif  : ?? et || -> résultat différent`);
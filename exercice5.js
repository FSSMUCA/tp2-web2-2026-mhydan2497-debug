let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

for (let i = 0; i < nombres.length; i++) {
    let val = nombres[i];
    let affichage = val;
    let categorie = "";

    if (Number.isNaN(val)) {
        categorie = "INVALIDE";
    }
    else if (val === Infinity || val === -Infinity) {
        categorie = "INFINI";
    }
    else if (val === -0) {
        categorie = "ZERO NEGATIF";
    }
    else if (Number.isInteger(val)) {
        if (val >= Number.MIN_SAFE_INTEGER && val <= Number.MAX_SAFE_INTEGER) {
            categorie = "ENTIER SUR";
        } else {
            categorie = "ENTIER HORS LIMITES";
        }
    }
    else {
        categorie = "DECIMAL";
    }

    console.log(`${affichage} -> ${categorie}`);
}
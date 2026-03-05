const valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    const elem = valeurs[i];
    const str = String(elem);
    const truthyFalsy = elem ? "truthy" : "falsy";
    
    let affichage = str;
    
    if (elem === "")          affichage = '(chaîne vide)';
    else if (elem === null)    affichage = 'null';
    else if (elem === undefined) affichage = 'undefined';
    else if (Number.isNaN(elem)) affichage = 'NaN';
    else if (str === 'false')  affichage = 'false';
    else if (str === '[object Object]') affichage = '[object Object]';
    else if (str === '0')      affichage = '0';
    
    console.log(`${affichage} -> ${truthyFalsy}`);
}
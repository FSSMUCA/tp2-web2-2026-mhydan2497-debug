let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    ["\t\n ", 0]
];

let countDiff = 0;

for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];
    
    let egalLarge = a == b;
    let egalStrict = a === b;
    
    if (egalLarge !== egalStrict) {
        countDiff++;
    }
    
    console.log(`${String(a)} == ${String(b)}   -> ${egalLarge} | ${String(a)} === ${String(b)}   -> ${egalStrict}`);
}

console.log("---");
console.log(`${countDiff} paire(s) où == et === donnent des résultats différents`);
let minimum = function(getal1,getal2) {
    let kleinste;
    if (getal1 < getal2) {
        kleinste = getal1;
    } else {
        kleinste = getal2;
    }
    return kleinste;
};

    console.log("Het kleinste getal is " + minimum(8,9));

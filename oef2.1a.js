let minimum = function(){
    let getal1 = Math.random();
    let getal2 = Math.random();
    let kleinste;
    if (getal1 < getal2) {
        kleinste = getal1;
    } else {
        kleinste = getal2;
    }
    console.log("Het kleinste getal is " + kleinste);
};
minimum();
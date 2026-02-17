const prompt = require('prompt-sync')();

function isEenGetal(number) {
    return !isNaN(parseInt(number));
}

let aantalLijnen = prompt('Geef het aantal lijnen (0-9)');
while(!isEenGetal(aantalLijnen) || aantalLijnen < 0 || aantalLijnen >= 10   ){
    console.log("Foute ingave!")
    aantalLijnen = prompt('Geef het aantal lijnen (0-9)');
}
aantal = parseInt(aantalLijnen);
for (let i = 1; i <= aantalLijnen; i++) {

    let line = "";

    // Spaties toevoegen
    for (let s = 0; s < aantalLijnen - i; s++) {
        line += " ";
    }

    // Symbolen toevoegen
    let aantalSymbolen = 2 * i - 1;

    for (let h = 1; h <= aantalSymbolen; h++) {

        let interval=5;
        if (h % interval === 0) {
            line += "@";
        } else {
            line += "#";
        }

    }

    console.log(line);
}
const prompt = require('prompt-sync')();

function isEenGetal(number) {
    return !isNaN(parseInt(number));
}

let aantalLijnen = prompt('Geef het aantal sterren (0-9)');
while(!isEenGetal(aantalLijnen) || aantalLijnen < 0 || aantalLijnen >= 10   ){
    console.log("Foute ingave!")
    aantalLijnen = prompt('Geef het aantal sterren (0-9)');
}
aantal = parseInt(aantalLijnen);
for (let i = 1; i <= aantalLijnen; i++) {

    let line = "";

    // spaties toevoegen
    for (let s = 0; s < aantalLijnen - i; s++) {
        line += " ";
    }

    // # toevoegen
    for (let h = 0; h < i; h++) {
        line += "#";
    }

    console.log(line);
}
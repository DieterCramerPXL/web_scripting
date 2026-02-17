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
for (let line = "#"; line.length <= aantalLijnen; line += "#")
    console.log(line);
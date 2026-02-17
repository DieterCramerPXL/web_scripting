
let output;
for (let number = 0; number <= 100; number++) {
    output = ""


    if (number % 3 === 0) output += "Fizz";
    if (number % 5 === 0) output += "Buzz";

    console.log(output || number);       // geef output terug indien truthy, anders number. falsy = lege string, 0, null, undefined, NaN, false
}

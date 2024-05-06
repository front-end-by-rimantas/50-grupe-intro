/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

const age = 99;
const ageLimit = 18;

// 1 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...');
}

// 2 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...');
} else {
    console.log('Ok, uzeik ir pasismagink ;)');
}

if (4 == 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}

console.clear();

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> Nezinau tokios spalvos...

function colorTranslation(color) {
    let translation = '';

    if (color === 'red') {
        translation = 'Raudona';
    } else if (color === 'blue') {
        translation = 'Melyna';
    } else if (color === 'green') {
        translation = 'Zalia';
    } else if (color === 'white') {
        translation = 'Balta';
    } else {
        translation = '...';
    }

    return color + ' -> ' + translation;
}

console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('yellow'));
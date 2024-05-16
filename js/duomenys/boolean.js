/*
BOOLEAN - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)

Kaip interpertuojami kiti duomenu tipai 
ir ju reiksmes, jei jos yra naudojamos 
lyg boolean'ai?

String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei NaN - false
- jei nulis - false
- jei ne nulis - true
- jei Infinity - true
- jei -Infinity - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefined - false
null - false

*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', (true + true) * (true + true + true));
console.log('KAIP NENAUDOTI:', true * false);

console.log('------------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = true;
const isYoung = true;
let isRich = false;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log('>>>', willIGoTo);

isRich = true;

const willIGoTo2 = isBeautiful && isYoung && isRich;
console.log('>>>', willIGoTo2);

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

console.clear();
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.clear();
console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false || true);
console.log(false && false || false);

console.log('-----------------------');

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

console.log('-----------------------');

// ND - visos 128 kombinacijos
console.log(true && true && true && true);
console.log(true && true && true && false);

console.log(true && true && true || true);
console.log(true && true && true || false);

console.clear();

console.log(!true);
console.log(!false);
console.log(!!false);
// daugiau nei 2 sauktukai - nerasyti, please... 👀
console.log(!!!false);
console.log(!!!!false);
console.log(!!!!!false);
console.log(!!!!!!false);

console.clear();

const bbb = 4 + 2;

if (bbb) {
    console.log(true);
} else {
    console.log(false);
}


console.clear();

const n1 = 4;
const n2 = '4';

if (n1 === n2) {
    console.log('Taip', n1 + n2);
} else {
    console.log('Ne');
}
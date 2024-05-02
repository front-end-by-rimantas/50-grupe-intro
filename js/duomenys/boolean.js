/*
BOOLEAN - logines reiksmes

- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)
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
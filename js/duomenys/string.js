/*
STRING - tekstas, tekstiniu simboliu grandinele

iniciavimas: ' (vienguba), " (dvyguba)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

// Dvyguba (") kabute.
const kabutes2 = 'Dvyguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);

// Vienguba (') ir dvyguba (") kabutes.
const kabutes12 = "Vienguba (') ir" + ' dvyguba (") kabutes.';
console.log(kabutes12);

// Vienguba (') ir dvyguba (") kabutes.
const kabutes12_1 = 'Vienguba (\') ir dvyguba (") kabutes.';
const kabutes12_2 = "Vienguba (') ir dvyguba (\") kabutes.";
const kabutes12_3 = 'Vienguba (\') ir dvyguba (\") kabutes';
const kabutes12_4 = "Vienguba (\') ir dvyguba (\") kabutes.";

// escaping
console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/
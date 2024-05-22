/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

const stud2 = {
    isMarried: false,
    name: 'Maryte',
    age: 88,
};
console.log(stud2);
console.log(stud2.name);
console.log(stud2.age);
console.log(stud2.isMarried);

console.clear();

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

// Sveiki, as VARDAS, man XX metu ir esu/nesu vedes.

function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${stud.name}, man ${stud.age} metu ir ${status} vedes.`;
}

for (let i = 0; i < students.length; i++) {
    console.log(introduction(students[i]));
}

console.clear();
// Standartine objekto sintakse
// vs.
// Supaprastinta objekto sintakse

const stud3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
    eargthyjudsgrfeargtsrytu: 'nesamone',
};

// Supaprastinta objekto sintakse
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.isMarried);

// Standartine objekto sintakse
console.log(stud3['name']);
console.log(stud3['age']);
console.log(stud3['isMarried']);

const key = 'age';
console.log(stud3.key);
console.log(stud3.eargthyjudsgrfeargtsrytu);
console.log(stud3['age']);
console.log(stud3[key]);

console.clear();
function giveMe(data, key) {
    return data[key];
}

console.log(giveMe({ name: 'Jonas', age: 99 }, 'name'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'age'));
console.log(giveMe({ name: 'Jonas', age: 99 }, 'isMarried'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'title'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'page'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'size'));
console.log(giveMe({ title: 'Svente', page: 1, size: 3 }, 'xxx'));
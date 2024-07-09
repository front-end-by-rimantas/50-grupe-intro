const x = [][(![] + [])[+!![]] + (!![] + [])[+[]]];

const x1 = [][(false + [])[+true] + (true + [])[+[]]];
const x2 = [][('false')[1] + ('true')[0]];
const x3 = []['false'[1] + 'true'[0]];
const x4 = []['a' + 't'];
const x5 = []['at'];

const x6 = []['at']();
// const x7 = at(????);


const str = '123';
console.log(typeof str); // string

const plusStr = +str;
console.log(typeof plusStr, plusStr); // number, 123

parseInt('123')
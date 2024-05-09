function numberSize(n) {
    const nAsText = '' + n;     // '' + 2 = '2'
    return nAsText.length;
}

console.log(numberSize(2), '-->', 1);
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);

// const a = 1452;
// console.log(a);
// console.log('' + a);
// console.log(a.toString());

// console.log(typeof a);
// console.log(typeof ('Labas' + a));
// console.log(typeof a.toString());

// console.log('' + 'Labas');
// console.log('' + true);
// console.log('' + false);
// console.log('' + []);
// console.log('' + [1, 2, 3]);
// console.log('' + numberSize);
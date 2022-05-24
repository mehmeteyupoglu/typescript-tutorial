"use strict";
let username = 'Mehmet';
let numbers = [];
let arrayOfNumbers = [1, 2, 3];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
let mySize = Size.Medium;
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(mySize);
let employee = {
    id: 1,
    name: 'Mehmet',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
//# sourceMappingURL=index.js.map
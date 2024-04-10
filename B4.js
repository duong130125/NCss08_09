"use strict";
function square(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (Array.isArray(input)) {
        return input.map(num => num * num);
    }
}
console.log(square(5));
console.log(square([5, 4, 3, 2, 1]));

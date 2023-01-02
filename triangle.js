// 1) Version 1:
// const isRectangularTriangle = (a, b, c)=> {
//     if((a*a)+(b*b) === (c*c)) {
//         console.log(true);
//     }
//     console.log(false);
// }

// 2) Version with ternary operator:
const isRectangularTriangle = (a, b, c) => (a < c && b < c ? true : false);

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 = true

const cond3 = isRectangularTriangle(4, 3, 2);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 = false

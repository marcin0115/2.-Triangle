
//1) wersja 1:
// const isRectangularTriangle = (a, b, c)=> {
//     if((a*a)+(b*b) === (c*c)) {
//         console.log(true);
//     }
//     console.log(false);
// }


//ternary operator (operator warunkowy):
// Wersja 2:
const isRectangularTriangle = (a, b, c)=> {
  const example = (a<c && b<c ? true : false)
  console.log(example);
}

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
//   // cond1 i cond2 to true
  
const cond3 = isRectangularTriangle(4, 3, 2);
const cond4 = isRectangularTriangle(4, 4, 4);
  // cond3 i cond4 to false

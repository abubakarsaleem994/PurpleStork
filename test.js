// let a = ['abubakar', 'lalaabu', 'momin', 'haseeb', 'abubakar', 'wow'];
// let b = ['abc', 'def', 'gba'];
// let c = a.filter(value => {
//   if (value.includes('a')) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(c);

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors[1]);

// function greet() {
//   console.log('Hello world');
// }
// greet();

// function square(number) {
//   return number * number;
// }

// console.log(square(2));

// Factory Function

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }

// const circle = createCircle(1);

// // Constructor Function
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw');
//   }
// }
// const another = new Circle(1);

//Primitives are copied by there value

// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number);

//Objects are copied by there reference
// let ab = {value: 10};
// function increase(ab) {
//   ab.value++;
// }
// increase(ab);
// console.log(ab);

// let hour = 21;
// if (hour >= 6 && hour < 12) console.log('Good morning');
// else if (hour >= 12 && hour < 18) console.log('Good afternoon');
// else console.log('Good Evening');

for (let i = 1; i < 11; i++) {
  if (i % 2) console.log(i);
}

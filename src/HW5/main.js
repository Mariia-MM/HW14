// // function #1

// export const getRandomArray = (length, getNumber) => {
//   let number = 0;
//   let newArr = [];

//   for (let i = 0; i < length; i++) {
//     number = getNumber(1, 50);
//     newArr.push(number);
//   }
//   return newArr;
// };

// const getNumber = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   number = Math.floor(Math.random() * (max + 1 - min) + min);

//   return number;
// };

// console.log(`Function#1,random array:`, getRandomArray(20, getNumber));

//function#3

function getHW5() {
  const getAvarage = (...numbers) => {
    let arr = [];
    let count = 0;
    let sum = 0;
    arr = numbers;

    arr.forEach(function (el) {
      if (Number.isInteger(el)) {
        sum = sum + el;
        count = count + 1;
      }
    });

    return sum / count;
  };
  document.getElementById("hw5").innerHTML = `
    Task#3: Avarage of array "1, -1, 9, 4.3, 8, 3, -2, 4" is: </br>${getAvarage(
      1,
      -1,
      9,
      4.3,
      8,
      3,
      -2,
      4
    )} 
    
`;
}

export default { getHW5 };

// //function#4

// const getMedian = (...numbers) => {
//   let arr = [];
//   let arrInt = [];
//   let median = 0;

//   arr = numbers;
//   arr = arr.sort(function (a, b) {
//     return a - b;
//   });

//   arr.forEach(function (el) {
//     if (Number.isInteger(el)) {
//       arrInt.push(el);
//     }
//   });

//   if (arrInt.length % 2 === 0) {
//     median =
//       (arrInt[(arrInt.length - 2) / 2] + arrInt[(arrInt.length - 2) / 2 + 1]) /
//       2;
//   } else {
//     median = arrInt[(arrInt.length - 1) / 2];
//   }
//   return median;
// };
// console.log(
//   `Function #4.Median of numbers is:`,
//   getMedian(3, 5, 9, 3, 4, 2.6, 6, 6.4, 2, 1)
// );

// // function#5
// const isNotEven = (num) => {
//   if (num % 2 !== 0) return num;
// };
// const filterEvenNumbers = (...numbers) => {
//   let arr = [];
//   let withoutEvenArr = [];

//   arr = numbers;
//   withoutEvenArr = arr.filter(isNotEven);

//   return withoutEvenArr;
// };
// console.log(
//   `Function #5. Filtered even numbers:`,
//   filterEvenNumbers(6, 5, 2, 6, 3, 1, 4, 9, 8, 2, 1, 3, 9, 4)
// );

// // function#6
// const countPositiveNumbers = (...numbers) => {
//   let arr = [];
//   let count = 0;
//   let arrPos = [];

//   arr = numbers;

//   arr.forEach(function (num) {
//     if (num > 0) count = arrPos.push(num);
//   });
//   return count;
// };
// console.log(
//   `Function #6. Count of positive numbers:`,
//   countPositiveNumbers(3, -6, 9, 1, 6, -7, 6, 2, -6, -3, 4, 2, 1)
// );

// // function#7
// const divByFiveFunc = (num) => {
//   if (num % 5 === 0) return num;
// };
// const getDividedByFive = (...numbers) => {
//   let arr = [];
//   let divByFiveArr = [];

//   arr = numbers;
//   divByFiveArr = arr.filter(divByFiveFunc);
//   return divByFiveArr;
// };
// console.log(
//   `Function #7. The numbers can be divided by 5:`,
//   getDividedByFive(3, 9, 10, 5, 8, 16, 15, 50, 55, 2)
// );

// //function#8

// const replaceBadWords = (string) => {
//   let arrStr = [];
//   arrNew = [];
//   let arrBadWords = [`shit`, `fuck`];
//   let i = 0;

//   arrStr = string.split(` `);

//   arrStr.forEach((el) => {
//     if (el.includes(arrBadWords[i])) {
//       let re = new RegExp(arrBadWords[i]);
//       newWord = el.replace(re, `****`);
//       arrNew.push(newWord);
//     } else if (el.includes(arrBadWords[i + 1])) {
//       let re = new RegExp(arrBadWords[i + 1]);
//       newWord = el.replace(re, `****`);
//       arrNew.push(newWord);
//     } else {
//       arrNew.push(el);
//     }
//   });

//   return arrNew.join(` `);
// };
// console.log(
//   `Function #8. Replace bad word:`,
//   replaceBadWords("It's bullshit!")
// );

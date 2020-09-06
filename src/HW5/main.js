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

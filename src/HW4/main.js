function getHW4() {
  const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
  const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних",
  ];
  const marks = [4, 5, 5, 3, 4, 5];
  let count = 0;

  const getPairs = () => {
    let newArr = students.slice();
    let studGirl = [];
    let studBoy = [];
    for (let i = 0; i < newArr.length; i++) {
      if (
        newArr[i].toString(newArr[i]).endsWith(`а`) ||
        newArr[i].endsWith(`я`)
      ) {
        studGirl.push(newArr[i]);
      } else {
        studBoy.push(newArr[i]);
      }
    }
    let studNew = [];
    while (studBoy.length > 0) {
      let newStudB = studBoy.pop();
      let newStudG = studGirl.pop();

      count = studNew.push(newStudB.split(`,`).concat(newStudG));
    }
    return studNew;
  };
  document.getElementById("hw4").innerHTML = `
    Task#1: ${getPairs(students)} 
    
`;
  return getPairs();
}
export default { getHW4 };

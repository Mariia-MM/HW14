function getHW6() {
  const students = [
    {
      name: "Tanya",
      course: 3,
      subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4],
      },
    },
    {
      name: "Victor",
      course: 4,
      subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5],
      },
    },
    {
      name: "Anton",
      course: 2,
      subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5],
      },
    },
  ];

  // function#1
  const getSubjects = (stud) => {
    let subjects = [];
    let studSubjects = Object.keys(stud.subjects);
    studSubjects.forEach((subj) => {
      subj = subj.toLowerCase(subj);
      let subjFirstLetter = subj.slice(0, 1).toUpperCase();
      subj = subj.slice(1, subj.length);

      const re = new RegExp(`_`, `g`);
      subj = subj.replace(re, ` `);
      const subjectName = subjFirstLetter + subj;
      subjects.push(subjectName);
    });

    return subjects;
  };
  //return getSubjects(students[0]);
  document.getElementById("hw6").innerHTML = `
    Task#1: Student"s subjects are: ${getSubjects(students[0])} 
    
`;
}
export default { getHW6 };

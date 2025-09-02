const employees = [
  { name: "Employee 1", dob: "1985-01-15" },
  { name: "Employee 2", dob: "1990-02-20" },
  { name: "Employee 3", dob: "1978-03-12" },
  { name: "Employee 4", dob: "1982-04-25" },
  { name: "Employee 5", dob: "1995-05-30" },
  { name: "Employee 6", dob: "1988-06-18" },
  { name: "Employee 7", dob: "1975-07-09" },
  { name: "Employee 8", dob: "1992-08-14" },
  { name: "Employee 9", dob: "1983-09-22" },
  { name: "Employee 10", dob: "1991-10-05" },
  { name: "Employee 11", dob: "1986-11-11" },
  { name: "Employee 12", dob: "1979-12-28" },
  { name: "Employee 13", dob: "1987-01-08" },
  { name: "Employee 14", dob: "1993-02-19" },
  { name: "Employee 15", dob: "1981-03-25" },
  { name: "Employee 16", dob: "1977-04-17" },
  { name: "Employee 17", dob: "1994-05-23" },
  { name: "Employee 18", dob: "1989-06-29" },
  { name: "Employee 19", dob: "1984-07-04" },
  { name: "Employee 20", dob: "1996-08-16" },
  { name: "Employee 21", dob: "1976-09-10" },
  { name: "Employee 22", dob: "1982-10-27" },
  { name: "Employee 23", dob: "1990-11-06" },
  { name: "Employee 24", dob: "1973-12-15" },
  { name: "Employee 25", dob: "1988-01-21" },
  { name: "Employee 26", dob: "1974-02-12" },
  { name: "Employee 27", dob: "1995-03-07" },
  { name: "Employee 28", dob: "1983-04-03" },
  { name: "Employee 29", dob: "1992-05-11" },
  { name: "Employee 30", dob: "1979-06-20" },
  { name: "Employee 31", dob: "1986-07-25" },
  { name: "Employee 32", dob: "1991-08-08" },
  { name: "Employee 33", dob: "1978-09-14" },
  { name: "Employee 34", dob: "1985-10-19" },
  { name: "Employee 35", dob: "1993-11-23" },
  { name: "Employee 36", dob: "1980-12-30" },
  { name: "Employee 37", dob: "1977-01-13" },
  { name: "Employee 38", dob: "1996-02-28" },
  { name: "Employee 39", dob: "1981-03-09" },
  { name: "Employee 40", dob: "1989-04-14" },
  { name: "Employee 41", dob: "1975-05-29" },
  { name: "Employee 42", dob: "1994-06-05" },
  { name: "Employee 43", dob: "1982-07-17" },
  { name: "Employee 44", dob: "1990-08-26" },
  { name: "Employee 45", dob: "1987-09-03" },
  { name: "Employee 46", dob: "1976-10-22" },
  { name: "Employee 47", dob: "1992-11-15" },
  { name: "Employee 48", dob: "1984-12-09" },
  { name: "Employee 49", dob: "1973-01-27" },
  { name: "Employee 50", dob: "1995-02-18" }
];

function sortEmployeesByDOB(employees) {
  let n = employees.length;

  // Bubble Sort
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // convert dob string to date
      let dobA = new Date(employees[j].dob);
      console.log(dobA);
      let dobB = new Date(employees[j + 1].dob);
      console.log(dobB);

      // compare and swap if needed
      if (dobA > dobB) {
        let temp = employees[j];
        employees[j] = employees[j + 1];
        employees[j + 1] = temp;
      }
    }
  }

  return employees;
}

const sortedEmployees = sortEmployeesByDOB(employees);
console.log(sortedEmployees);

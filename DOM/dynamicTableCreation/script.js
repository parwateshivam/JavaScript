let table = document.querySelector(".empTable");
let btn = document.querySelector(".btn");

let employees = [
  {
    name: "Rahul Sharma",
    phone: "9876543210",
    salary: 45000,
    city: "Delhi"
  },
  {
    name: "Priya Singh",
    phone: "9123456780",
    salary: 55000,
    city: "Mumbai"
  },
  {
    name: "Amit Verma",
    phone: "9988776655",
    salary: 60000,
    city: "Bangalore"
  },
  {
    name: "Neha Gupta",
    phone: "9765432109",
    salary: 48000,
    city: "Kolkata"
  }
];

let count = 0;
let i = 0;

btn.addEventListener("click", () => {
  if (count < employees.length) {
    table.innerHTML += `
    <tr>
    <td>${employees[i].name}</td>
    <td>${employees[i].phone}</td>
    <td>${employees[i].salary}</td>
    <td>${employees[i].city}</td>
    </tr>`
    i++;
    count++;
  } else {
    window.alert("all data added successfully");
  }
});
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Define both students
const firstStudent: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const secondStudent: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 60,
  location: "London",
};

// Store them in an array
const studentsList: Array<Student> = [firstStudent, secondStudent];

// Access the body
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create table elements
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create table header
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "First Name";
cell2Head.innerHTML = "Location";

table.append(thead);

// Add student rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);

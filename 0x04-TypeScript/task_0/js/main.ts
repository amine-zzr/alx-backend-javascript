// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// 3. Create an array containing the student objects
const studentsList: Student[] = [student1, student2];

// 4. Use Vanilla JS to create a table and append it to the DOM
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// 5. Iterate over the studentsList array and create rows for each student
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    // Create a cell for firstName
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    // Create a cell for location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the tbody
    tbody.appendChild(row);
});

// 6. Append the tbody to the table and the table to the document body
table.appendChild(tbody);
document.body.appendChild(table);

// Question 1 — Variables and Output
let name = "Sadaf";
let age = 21;
console.log(`Hello ${name}, you are ${age} years old.`);


// Question 2 — Functions: Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


// Question 3 — Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkEvenOdd(3);
checkEvenOdd(10);
checkEvenOdd(7);


// Question 4 — Loops
console.log("Numbers 1 to 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("Even numbers 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Multiplication table of 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Question 5 — Arrays
let students = ["Aisha", "Rahul", "Kiran", "Neha", "Arjun"];

students.push("Fatima"); // Add
students.pop();          // Remove last

console.log("Student List:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// Question 6 — Objects
let user = {
    name: "Sadaf",
    email: "sadaf@gmail.com",
    password: "12345",
    age: 21
};

console.log("User Name:", user.name);

user.email = "newsadaf@gmail.com";
user.isAdmin = false;

console.log("Updated User:", user);


// Question 7 — To-Do List (CRUD)
let todoList = [];

function addTask(task) {
    todoList.push(task);
}

function viewTasks() {
    console.log("Tasks:", todoList);
}

function updateTask(index, newTask) {
    todoList[index] = newTask;
}

function deleteTask(index) {
    todoList.splice(index, 1);
}

// Testing
addTask("Study JS");
addTask("Complete Assignment");
viewTasks();

updateTask(0, "Study Advanced JS");
viewTasks();

deleteTask(1);
viewTasks();


// Question 8 — JSON
let userObj = {
    name: "Sadaf",
    age: 21
};

let jsonString = JSON.stringify(userObj);
console.log("JSON String:", jsonString);

let parsedObj = JSON.parse(jsonString);
console.log("Parsed Name:", parsedObj.name);


// Question 9 — Asynchronous Programming
console.log("Start");

setTimeout(() => {
    console.log("Data Loaded");
}, 2000);

console.log("End");


// Question 10 — Async/Await and Promises
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Sadaf", age: 21 });
        }, 2000);
    });
}

async function getUser() {
    let data = await fetchUser();
    console.log("Fetched User:", data);
}

getUser();

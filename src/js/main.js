import { Todo } from "./models/todo";

// Selectors 
let todoInput = document.getElementById("todoinput");
let addBtn = document.getElementById("addbtn");
let listContainer = document.getElementById("myList");

addBtn.addEventListener("click", addTask);

let firstTodo = new Todo("Promenad");
let secondTodo = new Todo("Plugga");
let thirdTodo = new Todo("Träna");
let fourthTodo = new Todo("Handla mat");
let fifthTodo = new Todo("Göra matlådor");

let tasks = [firstTodo, secondTodo, thirdTodo, fourthTodo, fifthTodo];

function createHTML() {

    listContainer.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let item = document.createElement("li");
    let todoDiv = document.createElement("div");
    let checkButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    if(tasks[i].done === true) {
        item.classList.toggle("complited");
    }

    item.classList.add("list__item");
    listContainer.appendChild(item);
    item.innerHTML = tasks[i].todoItem;

    todoDiv.classList.add("list__btncontainer");
    item.appendChild(todoDiv);

    checkButton.innerHTML = '<i class="bi bi-check-circle"></i>';
    checkButton.classList.add("list__checkbtn");
    todoDiv.appendChild(checkButton);

    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteButton.classList.add("list__deletebtn");
    todoDiv.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
       removeButton(i);  
    });

    checkButton.addEventListener("click", () => {
      checkItem(i);
    });

    function checkItem() {
        console.log(tasks);
        tasks[i].done = !tasks[i].done;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        createHTML();
        
    }
  }
}

function removeButton(deleteButton) {
  tasks.splice(deleteButton, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  createHTML();
}

createHTML();

function addTask(e) {
  e.preventDefault();
  let newItem = new Todo(todoInput.value);
  if(todoInput.value === ""){
    alert("OBS! Du måste fylla i rutan med text");
  }else{
  tasks.push(newItem);
  createHTML();
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoInput.value = "";
  }
}

let getTodoFromLs = () => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  createHTML();
}

window.addEventListener("DOMContentLoaded", getTodoFromLs);
  














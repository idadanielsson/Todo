class Todo {
  constructor(todoItem) {
    this.todoItem = todoItem;
  }
}

let firstTodo = new Todo("Promenad");
let secondTodo = new Todo("Plugga");
let thirdTodo = new Todo("Träna");
let fourthTodo = new Todo("Handla mat");
let fifthTodo = new Todo("Göra matlådor");




let tasks = [firstTodo, secondTodo, thirdTodo, fourthTodo, fifthTodo];


let listContainer = document.getElementById("myList");

function createHTML() {

  for (let i = 0; i < tasks.length; i++) {
    let item = document.createElement("li");
    let todoDiv = document.createElement("div");
    let checkButton = document.createElement("button");
    let deleteButton = document.createElement("button");

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
      removeItem(tasks[i]);
    });
    checkButton.addEventListener("click", () => {
      checkItem(tasks[i]);
    });

    function removeItem() {
      item.remove();
      console.log(tasks);

      
    }

    function checkItem(tasks) {
      item.classList.toggle("complited");
    }
  }
}

createHTML();

let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", addTask);

function addTask() {
  listContainer.innerHTML = "";
  let todoInput = document.getElementById("todoinput");
  let newItem = new Todo(todoInput.value);
  todoInput.value = "";
  tasks.push(newItem);
  localStorage.setItem('tasks', JSON.stringify(tasks)); 
  
  createHTML();
}




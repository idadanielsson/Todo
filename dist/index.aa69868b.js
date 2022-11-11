let todoInput = document.getElementById("todoinput");
let addBtn = document.getElementById("addbtn");
class Todo {
    constructor(todoItem){
        this.todoItem = todoItem;
        this.done = false;
    }
}
localStorage.setItem("todo-info", JSON.stringify(Todo));
let firstTodo = new Todo("Promenad");
let secondTodo = new Todo("Plugga");
let thirdTodo = new Todo("Tr\xe4na");
let fourthTodo = new Todo("Handla mat");
let fifthTodo = new Todo("G\xf6ra matl\xe5dor");
let saveTask = JSON.stringify(Todo);
let tasks = [
    firstTodo,
    secondTodo,
    thirdTodo,
    fourthTodo,
    fifthTodo
];
let listContainer = document.getElementById("myList");
function createHTML() {
    listContainer.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        let item = document.createElement("li");
        let todoDiv = document.createElement("div");
        let checkButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        if (tasks[i].done === true) item.classList.toggle("complited");
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
        deleteButton.addEventListener("click", (e)=>{
            let index = e.target.getAttribute("value");
            tasks.splice(index, 1);
            console.log(tasks);
            item.remove();
        });
        checkButton.addEventListener("click", ()=>{
            checkItem(i);
        });
        function checkItem() {
            console.log(tasks);
            tasks[i].done = !tasks[i].done;
            createHTML();
        }
    }
}
createHTML();
addBtn.addEventListener("click", addTask);
function addTask() {
    listContainer.innerHTML = "";
    let todoInput = document.getElementById("todoinput");
    let newItem = new Todo(todoInput.value);
    todoInput.value = "";
    tasks.push(newItem);
    createHTML();
}

//# sourceMappingURL=index.aa69868b.js.map

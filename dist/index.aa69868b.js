class Todo {
    constructor(todoItem){
        this.todoItem = todoItem;
    }
}
let firstTodo = new Todo("Promenad");
let secondTodo = new Todo("Plugga");
let thirdTodo = new Todo("Tr\xe4na");
let fourthTodo = new Todo("Handla mat");
let fifthTodo = new Todo("G\xf6ra matl\xe5dor");
let todoList = [
    firstTodo,
    secondTodo,
    thirdTodo,
    fourthTodo,
    fifthTodo
];
let cart = [];
let listContainer = document.getElementById("myList");
let i = 0;
for(let i1 = 0; i1 < todoList.length; i1++){
    let item = document.createElement("li");
    let span = document.createElement("span");
    let checkButton = document.createElement("button");
    item.classList.add("list__item");
    listContainer.appendChild(item);
    span.innerHTML = todoList[i1].todoItem;
    span.className = "list__item__close";
    item.appendChild(span);
    checkButton.innerHTML = '<i class="bi bi-check-circle"></i>';
    checkButton.classList.add("list__checkbtn");
    item.appendChild(checkButton);
    checkButton.addEventListener("click", ()=>{
        handleClick(todoList[i1]);
    });
}
function handleClick(Todo) {
    console.log("Du klickade p\xe5", Todo);
    cart.push(Todo);
}

//# sourceMappingURL=index.aa69868b.js.map

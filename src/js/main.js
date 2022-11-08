
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

let todoList = [firstTodo, secondTodo, thirdTodo, fourthTodo, fifthTodo];

let cart = [];

let listContainer = document.getElementById("myList");
let i = 0;

for (let i = 0; i < todoList.length; i++) {
    
    let item = document.createElement("li");
    let span = document.createElement("span");
    let checkButton = document.createElement("button");
    
      
    item.classList.add("list__item");
    listContainer.appendChild(item);
    
    span.innerHTML= todoList[i].todoItem;
    span.className= "list__item__close";
    item.appendChild(span);
    

    checkButton.innerHTML = '<i class="bi bi-check-circle"></i>';
    checkButton.classList.add("list__checkbtn");
    item.appendChild(checkButton);

    checkButton.addEventListener("click", () => {
        handleClick(todoList[i]);

});
}

function handleClick(Todo) {
    console.log("Du klickade på", Todo);

    cart.push(Todo);
}
















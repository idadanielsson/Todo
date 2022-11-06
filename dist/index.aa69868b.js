let todos = [
    "Promenad",
    "Plugga",
    "handla",
    "Laga middag",
    "Gymma",
    "Tv\xe4tta", 
];
let listContainer = document.createElement("ul");
for(let i = 0; i < todos.length; i++){
    let listItem = document.createElement("li");
    let close = document.createElement("span");
    listContainer.className = "list";
    listItem.className = "list__item";
    listItem.innerHTML = todos[i];
    close.className = "list__close";
    close.addEventListener("click", ()=>{
        handleClick(todos[i]);
    });
    listContainer.appendChild(listItem);
    listContainer.appendChild(close);
    document.body.appendChild(listContainer);
}

//# sourceMappingURL=index.aa69868b.js.map

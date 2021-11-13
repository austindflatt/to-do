const form = document.querySelector("#todoForm")
const todo = document.querySelector("#todo-input");
const add = document.querySelector("#add");
const deleteAll = document.querySelector("#destroy");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    if (todo.value.length >= 4) {
        li.appendChild(document.createTextNode(`❗️${todo.value}`));
        ul.appendChild(li);
    } else {
        alert("❌ Error! You must enter at least 4 or more characters.")
    }
    todo.value = '';
    console.log(todo.value);
});

deleteAll.addEventListener('click', function (event){
    const todos = document.querySelectorAll("#items");
    for (let i = 0; i < todos.length; i++) {
        const added = todos[i];
        added.remove();
    }
    location.reload();
});
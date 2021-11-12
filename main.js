const form = document.querySelector("#todoForm")
const todo = document.querySelector("#todo-input");
const deleteAll = document.querySelectorAll("#destroy")

form.addEventListener('click', function (event) {
    event.preventDefault();
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    if (todo.value.length >= 4) {
        li.appendChild(document.createTextNode(todo.value));
        ul.appendChild(li);
    } else {
        alert("Error! You must enter a valid input")
    }
    todo.value = '';
    console.log(todo.value);
})

deleteAll.addEventListener('click', function (event){
})
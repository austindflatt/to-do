const form = document.querySelector("#todoForm")
const todo = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const li = document.querySelectorAll("li");
const add = document.querySelector("#add");
const deleteAll = document.querySelector("#destroy");
const deleteCompleted = document.querySelector("#delete-completed");

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
    strikeThrough(li);
    todo.value = '';
    console.log(todo.value);
});

function strikeThrough(event) {
    event.addEventListener('click', function() {
        event.classList.toggle('finished');
    });
};

li.forEach((e) => {strikeThrough(e); });

deleteAll.addEventListener('click', function (event){
    const todos = document.querySelectorAll("#list");
    for (let i = 0; i < todos.length; i++) {
        const added = todos[i];
        added.remove();
    };
    location.reload();
});

deleteCompleted.addEventListener('click' ,function (event) {
    const added = document.querySelector('li');
    if (added.className === 'finished') {
        added.remove();
        alert("✅ That to do was deleted!");
    } else {
        alert("❌ Error! You must complete your tasks in the order that you made them.");
    };
});
const form = document.querySelector("form");

form.addEventListener("submit",function(e) {
    e.preventDefault();

    // 1. ambil id input text
    const input = document.getElementById("new_text").value;
    addNewToDo (input);
})

// 2. bikin function

function addNewToDo (input) {
   
    // 3. membuat element li
    const li = document.createElement("li");
    li.textContent = input;
    li.style.fontSize = "22px";
    const ul = document.getElementById("todo");
    ul.appendChild(li);

    // 4. membuat element button
    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "X";
    li.appendChild(buttonDelete);
    buttonDelete.addEventListener("click", function(){
        buttonDeleteTodo (this);
    });    
}

function buttonDeleteTodo (del) {
    const li = del.parentNode
    console.log(li);
    li.remove();
}

document.getElementById('addBtn').addEventListener('click', addTodo);
const todoList = document.getElementById('todoList');

function addTodo() {
    const todoText = document.getElementById('todoInput').value;
    console.log("hello brothr")

    if (todoText == '') {
        alert('Please enter a task');
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textNode = document.createTextNode(todoText);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(textNode);
    todoItem.appendChild(deleteBtn);
    
    todoList.appendChild(todoItem);

    document.getElementById('todoInput').value = '';
}

function deleteTodo() {
    this.parentElement.remove();
}



const inputBox = document.querySelector('#input-box');
const addTask = document.querySelector('#btn');
const taskList = document.querySelector('#tasklist');

function AddNewTask() {
    taskList.innerHTML += `<li>${inputBox.value}</li>`;
}

addTask.addEventListener("click", AddNewTask);
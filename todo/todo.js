// console.log(document.getElementById('input-box'))

function AddNewTask() {
    let inputBox = document.getElementById('input-box');
    let newlyCreatedElement = document.createElement('li');


    newlyCreatedElement.textContent = inputBox.value;
    document.getElementById('tasklist').appendChild(newlyCreatedElement);


}

// function SendNewMessage() {
//     let userInput = document.getElementById('text-message')
//     let newChat = document.createElement('p');

//     newChat.textContent = userInput.value;
//     document.getElementById('chat-app').appendChild(newChat)
// }
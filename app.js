//selectors
const toDoList = document.querySelector('.todo-list');
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');

//event listener
toDoButton.addEventListener('click', addItem);

//functions
function addItem(event) {
    //prevent default form submitting
    event.preventDefault();
    console.log('he');
    //to do div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo-div')
    //to do item
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-item');
    toDoItem.innerText = toDoInput.value;
    toDoDiv.appendChild(toDoItem);
    //check mark
    const checkMark = document.createElement('button');
    checkMark.innerHTML = '<i class="fas fa-clipboard-check"></i>';
    checkMark.classList.add('checkmark')
    toDoDiv.appendChild(checkMark)
    //trash icon
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trash.classList.add('trash')   
    toDoDiv.appendChild(trash); 
    toDoList.appendChild(toDoDiv);
    toDoInput.value = '';
}
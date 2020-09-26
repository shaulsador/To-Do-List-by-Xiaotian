//selectors
const toDoList = document.querySelector('.todo-list');
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoFilter = document.querySelector('select');

//event listener
toDoButton.addEventListener('click', addItem);
toDoList.addEventListener('click', deleteItem);
toDoFilter.addEventListener('click', filterItem);

//functions
function addItem(event) {
    //prevent default form submitting
    event.preventDefault();
    //test: console.log('he');
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
    //alternative way to delete
    // trash.addEventListener('click', deleteItem);
    // function deleteItem(event) {
    //     toDoDiv.innerHTML = null;
    // }
    //append to list
    toDoList.appendChild(toDoDiv);
    //clear input value
    toDoInput.value = '';
}

function deleteItem(e) {
    let onClick = e.target;
    if(onClick.classList[0] === 'trash') {
        let trashDiv = onClick.parentElement;
        //transition
        trashDiv.classList.add('erased');
        //alternative way to temove item after transition
        // p = new Promise(function(resolve, reject) {
        //     window.setTimeout(function(){
        //         resolve();
        //     }, 500
        //     );
        // });
        // p.then(function(){
        //     trashDiv.remove();
        // })
        trashDiv.addEventListener('transitionend', function(){
            trashDiv.remove();
        })
    } else if(onClick.classList[0] === 'checkmark') {
        onClick.parentElement.classList.toggle('completed');
    }
}

function filterItem(e) {
    let items = toDoList.childNodes;
    switch(e.target.value) {
        case 'all': 
            items.forEach(function(item) {
                item.style.display = 'flex';
            });
            break;
        case 'done':
            items.forEach(function(item) {
                if(item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
            break;
        case 'to do':
            items.forEach(function(item) {
                if(!item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            })
            break;

    }
}
const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('container');
body.appendChild(wrapper);

const wrapTrello = document.createElement('div');
wrapTrello.classList.add('wrap-trello');
wrapper.appendChild(wrapTrello);

const text = document.createElement('p');
text.innerText = "Trello";
text.classList.add('text');
wrapTrello.appendChild(text);

const timer = document.createElement('time');
timer.classList.add('timer');
wrapTrello.appendChild(timer);

function updateTime() {
    const now = new Date();
    timer.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

let intervalId;
intervalId = setInterval(updateTime, 1000);





const wrapforCards = document.createElement('div');
wrapforCards.classList.add('wrap-for-cards');
wrapper.appendChild(wrapforCards);

const cardTodo = document.createElement('div');
cardTodo.classList.add('todo-card');
wrapforCards.appendChild(cardTodo);

const headerTodo = document.createElement('div');
headerTodo.classList.add('todo-header');
cardTodo.appendChild(headerTodo);

const headerTextTodo = document.createElement('p');
headerTextTodo.innerText = `Todo:`;
headerTextTodo.classList.add('header-todo-text');
headerTodo.appendChild(headerTextTodo);

let todoCounter = 0;
const todoCards = [];

const counterTodo = document.createElement('div');
counterTodo.classList.add('header-counter');
counterTodo.innerText = `${todoCounter}`;
headerTodo.appendChild(counterTodo);

function updateCounter() {
    counterTodo.textContent = `${todoCounter}`;
}

function innercard(userName = 'Default User', time = '00:00') {
    const innerCard = document.createElement('div');
    innerCard.classList.add('inner-card');
    cardTodo.appendChild(innerCard);

    const sectionTitle = document.createElement('div');
    sectionTitle.classList.add('title-section');
    innerCard.appendChild(sectionTitle);

    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.innerText = 'Title';
    sectionTitle.appendChild(titleElement);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    sectionTitle.appendChild(buttons);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    buttons.appendChild(editButton);

    editButton.addEventListener("click", () => {
        modalTitle.value = titleElement.innerText;
        modalDescription.value = descriptionElement.innerText;
        modalUser.value = user.innerText.replace("User: ", "");
        modal.style.display = "block";
    });





    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    buttons.appendChild(deleteButton);
    deleteButton.addEventListener("click", (event) => {
        const cardToRemove = event.target.closest('.inner-card');
        if (cardToRemove) {
            const index = todoCards.indexOf(cardToRemove);
            if (index > -1) {
                todoCards.splice(index, 1);
            }

            todoCounter--;
            updateCounter();
            cardToRemove.remove();
        }
    });


    const sectionDescription = document.createElement('div');
    sectionDescription.classList.add('description-section');
    innerCard.appendChild(sectionDescription);

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = 'Description';
    sectionDescription.appendChild(descriptionElement);

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-button');
    nextButton.textContent = '>';
    sectionDescription.appendChild(nextButton);

    const sectionUser = document.createElement('div');
    sectionUser.classList.add('user-section');
    innerCard.appendChild(sectionUser);

    const user = document.createElement('p');
    user.classList.add('user');
    user.innerText = `User`;
    sectionUser.appendChild(user);

    const userTime = document.createElement('div');
    userTime.classList.add('user-time');
    userTime.textContent = `Time: ${time}`;
    sectionUser.appendChild(userTime);

    todoCards.push(innerCard);
    todoCounter++;
    updateCounter();
    makeDraggable(innerCard);
    return innerCard;


}

innercard();
innercard();

const addButton = document.createElement('button');
addButton.classList.add('add-todo');
addButton.textContent = 'Add Todo';
cardTodo.appendChild(addButton);
addButton.addEventListener('click', () => {
    const newCard = innercard('New User', new Date().toLocaleTimeString());
    cardTodo.insertBefore(newCard, addButton);
});

const cardInProgress = document.createElement('div');
cardInProgress.classList.add('in-progress-card');
wrapforCards.appendChild(cardInProgress);

const headerInProgress = document.createElement('div');
headerInProgress.classList.add('in-progress-header');
cardInProgress.appendChild(headerInProgress);

const headerTextinProgress = document.createElement('p');
headerTextinProgress.innerText = 'In Progress:';
headerTextinProgress.classList.add('in-progress-text');
headerInProgress.appendChild(headerTextinProgress);

const counterInProgress = document.createElement('div');
counterInProgress.classList.add('in-progress-counter');
counterInProgress.innerText = `${counterInProgress}`;
counterInProgress.textContent = '0';
headerInProgress.appendChild(counterInProgress);

let inProgressCounter = 0;


const cardDone = document.createElement('div');
cardDone.classList.add('done-card');
wrapforCards.appendChild(cardDone);

const headerCardDone = document.createElement('div');
headerCardDone.classList.add('card-done-header');
cardDone.appendChild(headerCardDone);

const headerTextDone = document.createElement('p');
headerTextDone.innerText = 'Done:';
headerTextDone.classList.add('done-text');
headerCardDone.appendChild(headerTextDone);

const counterDone = document.createElement('div');
counterDone.classList.add('done-counter');
counterDone.innerText = `${counterDone}`;
counterDone.textContent = '0';
headerCardDone.appendChild(counterDone);

let doneCounter = 0;



const deleteAllButton = document.createElement('button');
deleteAllButton.classList.add('delete-all-button');
deleteAllButton.textContent = 'Delete All';
cardDone.appendChild(deleteAllButton);
deleteAllButton.addEventListener('click', () => {
    const confirmation = confirm("Warning! Are you sure you want to delete all done cards?");
    if (confirmation) {
        const doneCards = cardDone.querySelectorAll('.inner-card');
        doneCards.forEach(card => {
            card.remove();
        });
        doneCounter = 0;
        counterDone.textContent = '0';
    }
});

function makeDraggable(card) {
    card.setAttribute('draggable', 'true');

    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.innerHTML);
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
}

function initDragAndDrop() {
    const dropTargets = [cardTodo, cardInProgress, cardDone];

    dropTargets.forEach(target => {
        target.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedCard = document.querySelector('.dragging');
            if (draggedCard) {
                const originalSection = draggedCard.parentNode;

                if (target === cardInProgress) {
                    if (originalSection === cardTodo) {
                        todoCounter--;
                        updateCounter();
                    }
                    inProgressCounter++;
                    counterInProgress.textContent = `${inProgressCounter}`;
                } else if (target === cardDone) {
                    if (originalSection === cardInProgress) {
                        inProgressCounter--;
                        counterInProgress.textContent = `${inProgressCounter}`;
                    } else if (originalSection === cardTodo) {
                        todoCounter--;
                        updateCounter();
                    }
                    doneCounter++;
                    counterDone.textContent = `${doneCounter}`;
                } else if (target === cardTodo) {

                    if (originalSection === cardInProgress) {
                        inProgressCounter--;
                        counterInProgress.textContent = `${inProgressCounter}`;
                    } else if (originalSection === cardDone) {
                        doneCounter--;
                        counterDone.textContent = `${doneCounter}`;
                    }
                    todoCounter++;
                    updateCounter();
                }

                const targetButton = target.querySelector('.delete-all-button, .add-todo');
                if (targetButton) {
                    target.insertBefore(draggedCard, targetButton);
                } else {
                    target.appendChild(draggedCard);
                }
            }
        });
    });
}

initDragAndDrop();






const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <label for="modalTitle">Title:</label>
        <input type="text" id="modalTitle" />
        <label for="modalDescription">Description:</label>
        <input type="text" id="modalDescription" />
         <div class="user-choice">
         <div class="user-selection">
            <label for="modalUser">Select user:</label>
            <select id="modalUser">
                <option value="Andrey">Andrey</option>
                <option value="Olga">Olga</option>
                <option value="Vasilisa">Vasilisa</option>
                <option value="Petr">Petr</option>
            </select>
        </div>
        <div class="button-group">
            <button id="confirmChanges">Confirm</button>
            <button id="cancelChanges">Cancel</button>
        </div>
    </div>
    </div>
`;
document.body.appendChild(modal);

const confirmButton = modal.querySelector('#confirmChanges');
const cancelButton = modal.querySelector('#cancelChanges');
const modalTitle = modal.querySelector('#modalTitle');
const modalDescription = modal.querySelector('#modalDescription');
const modalUser = modal.querySelector('#modalUser');


confirmButton.addEventListener("click", () => {
    titleElement.innerText = modalTitle.value.trim();
    descriptionElement.innerText = modalDescription.value.trim();
    user.innerText = `User: ${modalUser.value.trim()}`;
    modal.style.display = "none";
});

cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие модального окна при нажатии вне его
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
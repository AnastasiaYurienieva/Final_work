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

const headerText = document.createElement('p');
headerText.innerText = 'Todo:';
headerText.classList.add('header-text');
headerTodo.appendChild(headerText);

const counterTodo = document.createElement('div');
counterTodo.classList.add('header-counter');
counterTodo.innerText = `${counterTodo}`;
counterTodo.textContent = '0';
headerTodo.appendChild(counterTodo);

function innercard(userName, time) {
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

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    buttons.appendChild(deleteButton);


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
    user.innerText = `User: ${user}`;
    sectionUser.appendChild(user);

    const userTime = document.createElement('div');
    userTime.classList.add('user-time');
    userTime.textContent = `Time: ${time}`;
    sectionUser.appendChild(userTime);
}

const addButton = document.createElement('button');
addButton.classList.add('add-todo');
addButton.textContent = 'Add Todo';
cardTodo.appendChild(addButton);
addButton.addEventListener('click', () => {
    innercard('Jane Smith', '11:00 AM');
});
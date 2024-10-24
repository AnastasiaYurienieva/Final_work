const wrapforCards = document.createElement('div');
wrapforCards.classList.add('wrap-for-cards');
wrapper.appendChild(wrapforCards);


function createTodoCard(title, description, user, time) {
    const card = document.createElement('div');
    card.classList.add('todo-card');

    const header = document.createElement('div');
    header.textContent = 'Todo:';
    header.classList.add('todo-header');
    card.appendChild(header);

    const counter = document.createElement('div');
    counter.classList.add('counter');
    counter.innerText = `${counter}`;
    counter.textContent = '0';
    header.appendChild(counter);



    const innerCard = document.createElement('div');
    innerCard.classList.add('inner-card');
    card.appendChild(innerCard);

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
    descriptionElement.textContent = 'description';
    sectionDescription.appendChild(descriptionElement);

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-button');
    nextButton.textContent = '>';
    sectionDescription.appendChild(nextButton);

    const sectionUser = document.createElement('div');
    sectionUser.classList.add('user-section');
    innerCard.appendChild(sectionUser);

    const user = document.createElement('span');
    user.classList.add('user');
    user.innerText = `User: ${user}`;
    sectionUser.appendChild(user);

    const userTime = document.createElement('div');
    userTime.classList.add('user-time');
    userTime.textContent = `Time: ${time}`;
    sectionUser.appendChild(userTime);


    const addButton = document.createElement('button');
    addButton.classList.add('add-todo');
    addButton.textContent = 'Add Todo';
    card.appendChild(addButton);


    return card;
}
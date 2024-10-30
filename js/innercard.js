export function innercard(userName = 'Default User', time = '00:00') {
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
        openModal(innerCard);
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

    nextButton.addEventListener("click", () => {
        if (inProgressCounter >= 6) {
            alert("Warning! You cannot add a card until you complete the current ones!");
            return;
        } else
            cardTodo.removeChild(innerCard);
        cardInProgress.appendChild(innerCard);
        updateButtonsForInProgress(innerCard, true);
        todoCounter--;
        updateCounter();
        inProgressCounter++;
        counterInProgress.textContent = `${inProgressCounter}`;
    });


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
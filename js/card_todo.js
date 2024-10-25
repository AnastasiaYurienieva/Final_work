function innercardInProgress(userName, time) {
    const innerCard = document.createElement('div');
    innerCard.classList.add('inner-card');
    cardInProgress.appendChild(innerCard);

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

    const backButton = document.createElement('button');
    backButtonButton.classList.add('back');
    backButtonButton.textContent = 'Back';
    buttons.appendChild(backButtonButton);

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.textContent = 'Complete';
    buttons.appendChild(completeButton);


    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = 'Description';
    innerCard.appendChild(descriptionElement);

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

innercardInProgress();
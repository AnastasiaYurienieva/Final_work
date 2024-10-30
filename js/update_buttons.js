export function updateButtonsForInProgress(card, isInProgress) {
    const buttonsContainer = card.querySelector('.buttons');
    buttonsContainer.innerHTML = '';

    if (isInProgress) {
        const nextButton = card.querySelector('.next-button');
        if (nextButton) {
            nextButton.style.display = 'none';
        }

        const backButton = document.createElement('button');
        backButton.classList.add('back');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            card.parentNode.removeChild(card);
            cardTodo.insertBefore(card, addButton);
            updateButtonsForInProgress(card, false);
            todoCounter++;
            updateCounter();
            inProgressCounter--;
            counterInProgress.textContent = `${inProgressCounter}`;

        });
        buttonsContainer.appendChild(backButton);

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            card.parentNode.removeChild(card);
            cardDone.insertBefore(card, deleteAllButton);
            updateButtonsCardDone(card, true);
            inProgressCounter--;
            counterInProgress.textContent = `${inProgressCounter}`;
            doneCounter++;
            counterDone.textContent = `${doneCounter}`;
        });
        buttonsContainer.appendChild(completeButton);
    } else {
        const nextButton = card.querySelector('.next-button');
        if (nextButton) {
            nextButton.style.display = 'block';
        }

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        buttonsContainer.appendChild(editButton);
        editButton.addEventListener("click", () => {
            openModal(card);
        });
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        buttonsContainer.appendChild(deleteButton);
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
    }
}



export function updateButtonsCardDone(card, isCardDone) {
    const buttonsContainer = card.querySelector('.buttons');
    buttonsContainer.innerHTML = '';



    if (isCardDone) {
        const nextButton = card.querySelector('.next-button');
        if (nextButton) {
            nextButton.style.display = 'none';
        }

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        buttonsContainer.appendChild(deleteButton);
        deleteButton.addEventListener("click", (event) => {
            const cardToRemove = event.target.closest('.inner-card');
            if (cardToRemove) {
                const index = todoCards.indexOf(cardToRemove);
                if (index > -1) {
                    todoCards.splice(index, 1);
                }
                doneCounter--;
                counterDone.textContent = `${doneCounter}`;
                cardToRemove.remove();
            }
        });
    }
}
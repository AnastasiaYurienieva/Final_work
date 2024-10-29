const originalSection = draggedCard.parentNode;
if (target === cardInProgress) {
    inProgressCounter++;
    counterInProgress.textContent = `${inProgressCounter}`;
} else if (target === cardDone) {
    doneCounter++;
    counterDone.textContent = `${doneCounter}`;
} else {
    // Decrease counters if returning to Todo
    if (originalSection === cardInProgress) inProgressCounter--;
    counterInProgress.textContent = `${inProgressCounter}`;
    if (originalSection === cardDone) doneCounter--;
    counterDone.textContent = `${doneCounter}`;

}



function initDragAndDrop() {
    const todoCards = document.querySelectorAll('.inner-card');
    const dropTargets = document.querySelectorAll('.in-progress-card, .done-card, .todo-card');

    todoCards.forEach(makeDraggable);

    dropTargets.forEach(target => {
        target.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedCard = document.querySelector('.dragging');
            if (draggedCard) {
                const targetButton = target.querySelector('.delete-all-button, .add-todo');
                if (targetButton) {
                    target.insertBefore(draggedCard, targetButton);
                } else {
                    target.appendChild(draggedCard);
                }
            }

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
            } else {
                // Если карточка возвращается в "Todo"
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
        });
    });


}


initDragAndDrop();


function updateButtonsForCard(card, isInProgress, isCardDone) {
    const buttonsContainer = card.querySelector('.buttons');
    buttonsContainer.innerHTML = ''; // Очищаем контейнер кнопок

    if (isCardDone) {
        // Добавляем кнопку "Delete" для карточек в состоянии "Done"
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
    } else if (isInProgress) {
        // Добавляем кнопки "Back" и "Complete" для карточек в состоянии "In Progress"
        const backButton = document.createElement('button');
        backButton.classList.add('back');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => {
            // Логика для возврата карточки в Todo
            card.parentNode.removeChild(card);
            cardTodo.appendChild(card);
            updateButtonsForCard(card, false, false); // Обновляем кнопки
        });
        buttonsContainer.appendChild(backButton);

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            // Логика для завершения карточки
            card.parentNode.removeChild(card);
            cardDone.appendChild(card);
            updateButtonsForCard(card, false, true); // Обновляем кнопки
        });
        buttonsContainer.appendChild(completeButton);
    } else {
        // Для состояния "Todo" добавляем кнопки "Edit" и "Delete"
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
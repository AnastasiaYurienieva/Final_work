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


addButton.addEventListener('click', () => {
    const newCard = innercard('New User', new Date().toLocaleTimeString());
    cardTodo.insertBefore(newCard, addButton);
});
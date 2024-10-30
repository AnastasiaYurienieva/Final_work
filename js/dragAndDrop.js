export function makeDraggable(card) {
    card.setAttribute('draggable', 'true');

    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.innerHTML);
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
}

export function initDragAndDrop() {
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
                    updateButtonsForInProgress(draggedCard, true);
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
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
    const todoCards = document.querySelectorAll('.inner-card');
    const dropTargets = document.querySelectorAll('.in-progress-card, .done-card, .todo-card');

    todoCards.forEach(makeDraggable);

    // Обработка перетаскивания для целевых областей
    dropTargets.forEach(target => {
        target.addEventListener('dragover', (e) => {
            e.preventDefault(); // Разрешить перетаскивание
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedCard = document.querySelector('.dragging');
            if (draggedCard) {
                const targetButton = target.querySelector('.delete-all-button, .add-todo');
                if (targetButton) {
                    target.insertBefore(draggedCard, targetButton); // Insert before the button
                } else {
                    target.appendChild(draggedCard); // Default to appending
                }
                // Update counters based on card position if needed
            }
        });
    });


}


initDragAndDrop();
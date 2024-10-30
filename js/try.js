function updateButtonsCardDone(card, isCardDone) {
    const buttonsContainer = card.querySelector('.buttons');
    buttonsContainer.innerHTML = '';



    if (isCardDone) {
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
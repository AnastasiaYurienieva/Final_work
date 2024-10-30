////??????????
function saveToLocalStorage() {
    const todos = todoCards.map(card => ({
        title: card.querySelector('.title').innerText,
        description: card.querySelector('.description').innerText,
        user: card.querySelector('.user').innerText.replace("User: ", ""),
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadFromLocalStorage() {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(todo => {
        const newCard = innercard(todo.user, todo.description);
        newCard.querySelector('.title').innerText = todo.title;
        cardTodo.appendChild(newCard);
    });
}


window.onload = loadFromLocalStorage;


addButton.addEventListener('click', () => {
    openModalAdd();
    saveToLocalStorage();
});
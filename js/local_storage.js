///???????????

function saveToLocalStorage() {
    const saved = todoCards.map(card => ({
        title: card.querySelector('.title').innerText,
        description: card.querySelector('.description').innerText,
        user: card.querySelector('.user').innerText.replace("User: ", ""),
        status: card.parentNode.classList.contains('in-progress-card') ? 'in-progress' : card.parentNode.classList.contains('done-card') ? 'done' : 'todo'
    }));
    localStorage.setItem('savedCards', JSON.stringify(saved));
};

function loadFromLocalStorage() {
    const loaded = localStorage.getItem('savedCards');
}

window.onload = loadFromLocalStorage;
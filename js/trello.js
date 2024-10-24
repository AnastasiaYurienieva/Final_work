const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('container');
body.appendChild(wrapper);

const wrapTrello = document.createElement('div');
wrapTrello.classList.add('wrap-trello');
wrapper.appendChild(wrapTrello);

const text = document.createElement('p');
text.innerText = "Trello";
text.classList.add('text');
wrapTrello.appendChild(text);

const timer = document.createElement('time');
timer.classList.add('timer');
wrapTrello.appendChild(timer);

function updateTime() {
    const now = new Date();
    timer.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

let intervalId;
intervalId = setInterval(updateTime, 1000);

const wrapforCards = document.createElement('div');
wrapforCards.classList.add('wrap-for-cards');
wrapper.appendChild(wrapforCards);

const wrapCard = document.createElement('div');
wrapCard.classList.add('wrap-card');
wrapforCards.appendChild(wrapCard);
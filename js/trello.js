const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('container');
body.appendChild(wrapper);




const wrapforCards = document.createElement('div');
wrapforCards.classList.add('wrap-for-cards');
wrapper.appendChild(wrapforCards);

const wrapCard = document.createElement('div');
wrapCard.classList.add('wrap-card');
wrapforCards.appendChild(wrapCard);
export function trello() {

    const wrapTrello = document.createElement('div');
    wrapTrello.classList.add('wrap-trello');
    wrapper.appendChild(wrapTrello);

    const text = document.createElement('p');
    text.innerText = "Trello";
    text.classList.add('text');
    wrapTrello.appendChild(text);

    const timer = document.createElement('time');
    timer.classList.add('timer');
    body.appendChild(timer);

    function updateTime() {
        const now = new Date();
        timer.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    };

    let intervalId;
    intervalId = setInterval(updateTime, 1000);
}
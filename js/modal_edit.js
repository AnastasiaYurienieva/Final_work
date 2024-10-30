const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <label for="modalTitle">Title:</label>
        <input type="text" id="modalTitle" />
        <label for="modalDescription">Description:</label>
        <input type="text" id="modalDescription" />
         <div class="user-choice">
         <div class="user-selection">
            <label for="modalUser">Select user:</label>
            <select id="modalUser">Select user:
                <option value="Andrey">Andrey</option>
                <option value="Olga">Olga</option>
                <option value="Vasilisa">Vasilisa</option>
                <option value="Petr">Petr</option>
            </select>
        </div>
        <div class="button-group">
            <button id="confirmChanges">Confirm</button>
            <button id="cancelChanges">Cancel</button>
        </div>
    </div>
    </div>
`;
document.body.appendChild(modal);

const confirmButton = modal.querySelector('#confirmChanges');
const cancelButton = modal.querySelector('#cancelChanges');
const modalTitle = modal.querySelector('#modalTitle');
const modalDescription = modal.querySelector('#modalDescription');
const modalUser = modal.querySelector('#modalUser');

function openModal(card) {
    modalTitle.value = card.querySelector('.title').innerText;
    modalDescription.value = card.querySelector('.description').innerText;
    modalUser.value = card.querySelector('.user').innerText.replace("User: ", "");
    modal.style.display = "block";

    confirmButton.onclick = () => {
        card.querySelector('.title').innerText = modalTitle.value.trim();
        card.querySelector('.description').innerText = modalDescription.value.trim();
        card.querySelector('.user').innerText = `User: ${modalUser.value.trim()}`;
        modal.style.display = "none";
    };
}

cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
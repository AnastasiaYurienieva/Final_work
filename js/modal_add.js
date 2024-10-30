const modalAdd = document.createElement('div');
modalAdd.classList.add('modalAdd');
modalAdd.innerHTML = `
    <div class="modal-content2">
        <label for="modalTitle2">Title:</label>
        <input type="text2" id="modalTitle2" />
        <label for="modalDescription2">Description:</label>
        <input type="text" id="modalDescription2" />
         <div class="user-choice2">
         <div class="user-selection2">
            <label for="modalUser2">Select user:</label>
            <select id="modalUser2">Select user:
                <option value="Andrey">Andrey</option>
                <option value="Olga">Olga</option>
                <option value="Vasilisa">Vasilisa</option>
                <option value="Petr">Petr</option>
            </select>
        </div>
        <div class="button-group2">
            <button id="confirmChanges2">Confirm</button>
            <button id="cancelChanges2">Cancel</button>
        </div>
    </div>
    </div>
`;
document.body.appendChild(modalAdd);

const confirmButtonAdd = modalAdd.querySelector('#confirmChanges2');
const cancelButtonAdd = modalAdd.querySelector('#cancelChanges2');
const modalTitleAdd = modalAdd.querySelector('#modalTitle2');
const modalDescriptionAdd = modalAdd.querySelector('#modalDescription2');
const modalUserAdd = modalAdd.querySelector('#modalUser2');

function openModalAdd() {
    modalTitleAdd.value = '';
    modalDescriptionAdd.value = '';
    modalUserAdd.value = '';
    modalAdd.style.display = "block";

    confirmButtonAdd.onclick = () => {
        if (!modalTitleAdd.value.trim() || !modalDescriptionAdd.value.trim()) {
            alert("Please fill in both title and description.");
            return;
        }

        const newCard = innercard(modalUserAdd.value, modalDescriptionAdd.value);
        newCard.querySelector('.title').innerText = modalTitleAdd.value.trim();
        newCard.querySelector('.description').innerText = modalDescriptionAdd.value.trim();
        newCard.querySelector('.user').innerText = `User: ${modalUserAdd.value.trim()}`;

        cardTodo.insertBefore(newCard, addButton);
        modalAdd.style.display = "none";
    };
}


cancelButtonAdd.addEventListener("click", () => {
    modalAdd.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modalAdd) {
        modalAdd.style.display = "none";
    }
});
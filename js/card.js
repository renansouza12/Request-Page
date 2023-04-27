const numberCard = document.querySelector('.number_card');
const cardContainer = document.querySelector('.card_zone');
const Allcards = document.querySelectorAll('.cards');
const dropzone = document.querySelectorAll('.card_zone');
const AllnumberCards = document.querySelectorAll('.number_card');

let cardCurrent;

const btnAdd = document.querySelector('.icon_add');
btnAdd.addEventListener('click', addCard);


function addCard() {
    numberCard.innerHTML = cardContainer.children.length;

    cardContainer.innerHTML += `
    <div class="card" draggable='true' >
        <div class="card_header">
            <input type="text" class="title_card" placeholder="Title" readonly>
            <div class="icon_remove" title="remove Card">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    <textarea id="card_area" cols="30" rows="10" placeholder="Write here" readonly></textarea>
    <div class="edit_card">
    <div class="edit">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
</svg>      
<span id="text_btnEdit">Edit</span></div>
      
    </div>
  </div> 
        `

    document.querySelectorAll('.icon_remove').forEach(btn_delet => btn_delet.addEventListener('click', removeCard));
    document.querySelectorAll('.edit_card').forEach(btnEdit => btnEdit.addEventListener('click', editCard));



    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('dragstart', dragstart);
        card.addEventListener('dragend', dragend);
    })

    indexZone();
}

function dragstart(e) {
    dropzone.forEach(dropzone => dropzone.classList.add('active'));
    cardCurrent = e.target;
}

function dragend() {
    dropzone.forEach(dropzone => dropzone.classList.remove('active'));

}

dropzone.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
})

function dragover() {
    this.classList.add('over');
    const zones = document.querySelectorAll('.cards');
    this.appendChild(cardCurrent);

    indexZone();
}
function dragleave() {
    this.classList.remove('over');
}

function editCard(e) {
    const clickedCard = e.target.closest('.card');
    const inputTitle = clickedCard.querySelector('.title_card');
    const textarea = clickedCard.querySelector('textarea');
    const btnTextEdit = clickedCard.querySelector('#text_btnEdit');

    function setAttribute() {
        inputTitle.setAttribute('readonly', true);
        textarea.setAttribute('readonly', true);
    }
    function removeAttribute() {
        inputTitle.removeAttribute('readonly');
        textarea.removeAttribute('readonly');
    }
    function addClassList() {
        inputTitle.classList.add('active');
        textarea.classList.add('active');
    }
    function removeClassList() {
        inputTitle.classList.remove('active');
        textarea.classList.remove('active');
    }

    if (inputTitle.readOnly === true) {
        removeAttribute();
        addClassList();
        btnTextEdit.innerHTML = 'Save';

    } else {
        setAttribute();
        removeClassList();
        btnTextEdit.innerHTML = 'Edit';
    }

}


function removeCard() {
    this.parentNode.parentNode.remove();
    indexZone();
}

function indexZone() {
    dropzone.forEach((zone, index) => {
        AllnumberCards[index].innerHTML = zone.children.length;
    })

}


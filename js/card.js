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

    const cards = document.querySelectorAll('.card');
    const iconRemove =  document.querySelectorAll('.icon_remove');
    const iconEditCard = document.querySelectorAll('.edit_card')
    
    cards.forEach(card => {
        card.addEventListener('dragstart', dragstart);
        card.addEventListener('dragend', dragend);

    })

    iconRemove.forEach(btn_delet => btn_delet.addEventListener('click', removeCard));
    iconEditCard.forEach(btnEdit => btnEdit.addEventListener('click', editCard));

    indexZone();
}

function dragstart(e) {
    const savedCards = JSON.parse(localStorage.getItem('myCards'));
    dropzone.forEach(dropzone => addClassList(dropzone,'active'));
    cardCurrent = e.target;
    
}

function dragend() {
    dropzone.forEach(dropzone => removeClassList(dropzone,'active'));
}

dropzone.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    
})

function dragover() {
    this.appendChild(cardCurrent)
    addClassList(this, 'over');
    indexZone();
}
function dragleave() {
    removeClassList(this,'over')
}

function editCard(e) {
    const clickedCard = e.target.closest('.card');
    const inputTitle = clickedCard.querySelector('.title_card');
    const textarea = clickedCard.querySelector('textarea');
    const btnTextEdit = clickedCard.querySelector('#text_btnEdit');

    function removeAttribute(){
        inputTitle.removeAttribute('readonly',);
        textarea.removeAttribute('readonly',);
    }
    function setAttribute(){
        inputTitle.setAttribute('readonly',true);
        textarea.setAttribute('readonly',true);
    }

    if (inputTitle.readOnly === true) {
        removeAttribute();
        addClassList(inputTitle,'active');
        addClassList(textarea, 'active');
        btnTextEdit.innerHTML = 'Save';

    } else {
        setAttribute();
        removeClassList(inputTitle, 'active');
        removeClassList(textarea, 'active');
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

function addClassList(element, className){
    element.classList.add(className);
}
function removeClassList(element, className){
    element.classList.remove(className);
}

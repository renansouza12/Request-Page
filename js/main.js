const btn_edit =  document.querySelector('.icon_edit');
const formTitle = document.querySelector('.new_title');
const currentTitle = document.querySelector('#title');
// click event added to icon and run changeTitle function
btn_edit.addEventListener('click',changeTitle);

//  click event added to body and run removeChangeTitle function
document.addEventListener('click', removeChangeTitle)

//submit event added to class="new_title" and run formNewTitle function
formTitle.addEventListener('submit',formNewTitle);


//function to add and remove class "active" to the class "new_title" 
function changeTitle(e){

    formTitle.classList.toggle('active');
    currentTitle.classList.toggle('active');
}

//function to remove class active to the class "new_title"  when clicked outside
function removeChangeTitle(e){

    // validation in case the  click event  was clicked outside
    if(!btn_edit.contains(e.target) && !formTitle.contains(e.target)){
        formTitle.classList.remove('active');
        currentTitle.classList.remove('active');
    }
    
}

// function to add the input value to the current title and clean the input 
function formNewTitle(e){  
    
    const inputTitle = document.querySelector('.input_title');

    // validation in case  input is empty 
    inputTitle.value < 1 ? alert('Name Invalid 🚨‼️🟠') : currentTitle.innerHTML = inputTitle.value;
    

    //clean the input 
    inputTitle.value = '';

    e.preventDefault();
}


const btnAdd = document.querySelector('.icon_add');
btnAdd.addEventListener('click', addCard);
 
const numberCard = document.querySelector('.number_card'); 
const cardContainer =  document.querySelector('.card_zone');
const Allcards = document.querySelectorAll('.cards');
const dropzone = document.querySelectorAll('.card_zone');
const AllnumberCards = document.querySelectorAll('.number_card');

let cardCurrent ; 

function addCard(){
      numberCard.innerHTML = cardContainer.children.length;
    
    cardContainer.innerHTML += `
    <div class="card" draggable='true' >
        <div class="card_header">
            <input type="text" class="title_card" placeholder="Title">
            <div class="icon_remove" title="remove Card">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    <textarea id="card_area" cols="30" rows="10" placeholder="Write here"></textarea>
  </div> 
        `   
        dropzone.forEach((zone, index)=>{
            AllnumberCards[index].innerHTML = zone.children.length;
        })

    const btn_delets = document.querySelectorAll('.icon_remove');
    btn_delets.forEach(btn_delet => btn_delet.addEventListener('click', removeCard));

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('dragstart',dragstart);
        card.addEventListener('dragend', dragend);
    })

}   
function dragstart(e){
    dropzone.forEach(dropzone => dropzone.classList.add('active'));
    cardCurrent = e.target;

}

function dragend(){
     dropzone.forEach(dropzone => dropzone.classList.remove('active'));
    
}

dropzone.forEach(dropzone =>{
    dropzone.addEventListener('dragover',dragover);
    dropzone.addEventListener('dragleave',dragleave);
})

function dragover(){
    this.classList.add('over');
    const zones = document.querySelectorAll('.cards');
    this.appendChild(cardCurrent);
    
    dropzone.forEach((zone, index)=>{
        AllnumberCards[index].innerHTML = zone.children.length;
    })
}
function dragleave(){
    this.classList.remove('over');
}

function removeCard(){
    this.parentNode.parentNode.remove();
    
    dropzone.forEach((zone, index)=>{
        AllnumberCards[index].innerHTML = zone.children.length;
    })

}



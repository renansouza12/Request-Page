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
const toggle = document.querySelector('.toggle');
const bodyElement = document.querySelector('body');
const indicator = document.querySelector('.indicator');

function toggleMode (){
    toggle.classList.toggle('active');
    indicator.classList.toggle('active');
    bodyElement.classList.toggle('dark'); 
}

function laodTheme(){
    const darkMode = localStorage.getItem('theme');

    if(darkMode){
        toggleMode();
    }
}
laodTheme();

toggle.addEventListener('click', ()=>{
    toggleMode();

    localStorage.removeItem('theme')

    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }
});


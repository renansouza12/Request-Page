const toggle = document.querySelector('.toggle');
toggle.addEventListener('click',switchMode);

function switchMode(){
    const indicator = document.querySelector('.indicator');
    toggle.classList.toggle('active');
    indicator.classList.toggle('active');
}
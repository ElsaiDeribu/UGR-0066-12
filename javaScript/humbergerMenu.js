const mainMenu = document.querySelector('.Header__nav-bar__mainMenu');
const openMenu = document.querySelector('.Header__nav-bar__openMenu');
const closeMenu = document.querySelector('.Header__nav-bar__mainMenu__closeMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    openMenu.style.display = 'none';
}
function close(){
    mainMenu.style.display = 'none';
    openMenu.style.display = 'flex';
}
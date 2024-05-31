// this code could be written as a script inside the html file,
// but it's better to keep it separate for better organization
// and reusability.

const menuButton = document.querySelector('#user-menu-button');

const userMenu = document.querySelector('#dropdown-user-menu');

menuButton.addEventListener('click', ()=>{
    userMenu.classList.toggle('hidden');
})
const toggleBtn = document.querySelector('#togle-btn');
const nav = document.querySelector('.nav-header nav');
console.log(nav);
const showMenu = () => {
    console.log('click is working');
    nav.classList.toggle('show')
}
toggleBtn.addEventListener('click', showMenu);

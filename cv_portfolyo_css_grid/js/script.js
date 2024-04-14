const navBtn = document.querySelector('.navBtn');
const sideBar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#closeBtn');
const sideBarLinks = document.querySelector('.sidebarLinks');

navBtn.addEventListener('click', () => {
    sideBar.classList.add('showsidebar')
});

closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('showsidebar')
});

sideBarLinks.addEventListener('click', () => {
    sideBar.classList.remove('showsidebar')
});
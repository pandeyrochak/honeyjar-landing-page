const nav=document.querySelector('nav');
const navCloseBtn=document.querySelector('#nav-close-btn');
const navOpenBtn=document.querySelector('#nav-open-btn');

navCloseBtn.addEventListener('click',(event)=>{
    nav.classList.remove('nav-toggler');
})
navOpenBtn.addEventListener('click',(event)=>{
    nav.classList.add('nav-toggler');
})

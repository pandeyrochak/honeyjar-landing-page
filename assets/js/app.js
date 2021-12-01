const nav=document.querySelector('nav');
const navCloseBtn=document.querySelector('#nav-close-btn');
const navOpenBtn=document.querySelector('#nav-open-btn');

navCloseBtn.addEventListener('click',(event)=>{
    nav.classList.remove('nav-toggler');
})
navOpenBtn.addEventListener('click',(event)=>{
    nav.classList.add('nav-toggler');
})

window.onload=setWidth;
window.onresize=setWidth;
function setWidth(){
    const buyNowWrapper=document.querySelector('.buy-now-wrapper')
    const tabNavWrapper= document.querySelector('#tab-nav-wrapper')
    let styles=window.getComputedStyle(buyNowWrapper);
    let wide=styles.getPropertyValue('width');
    tabNavWrapper.style.width=wide;
}

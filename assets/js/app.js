const nav=document.querySelector('nav');
const navCloseBtn=document.querySelector('#nav-close-btn');
const navOpenBtn=document.querySelector('#nav-open-btn');

const buyNowOptions=document.querySelectorAll('.buy-now-options');
const buyNowOptionsList=document.querySelectorAll('.buy-now-options li')

const howToTabs=document.querySelector('.how-to-tabs')
const howToTabsList=document.querySelectorAll('.how-to-tabs li');

const buyNowAmount=document.querySelector('.buy-now-amount-suggestions')
const buyNowAmountList=document.querySelectorAll('.buy-now-amount-suggestions li')
navCloseBtn.addEventListener('click',(event)=>{
    nav.classList.remove('nav-toggler');
})
navOpenBtn.addEventListener('click',(event)=>{
    nav.classList.add('nav-toggler');
})

for(let item of buyNowOptions){
    item.addEventListener('click',(event)=>{
        for(let listItem of buyNowOptionsList){
            if(event.target==listItem){
                event.target.classList.add('active-option')
            }
            else{
                listItem.classList.remove('active-option')
            }
        }
    })
}


howToTabs.addEventListener('click',(event)=>{
    for(let listItem of howToTabsList){
        if(event.target==listItem){
            event.target.classList.add('active-option')
        }
        else{
            listItem.classList.remove('active-option')
        }
    }
})

buyNowAmount.addEventListener('click',(event)=>{
    for(let listItem of buyNowAmountList){
        if(event.target==listItem){
            event.target.classList.add('active-option')
        }
        else{
            listItem.classList.remove('active-option')
        }
    }
})



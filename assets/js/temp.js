let buyContent = `<div class="container buy-now-wrapper d-flex"> <div class="buy-now"> <div class="d-flex flex-column mx-3 mt-3 "> <ul class="buy-now-options row p-2 gap-2 d-lg-none list-unstyled"> <li class="col p-2 text-center">BUY</li> <li class="col p-2 text-center">SELL</li> <li class="col p-2 text-center">GIFT</li> <li class="col p-2 text-center">SIP</li> </ul> <div class="buy-now-mode d-flex justify-content-startm mt-3"> <div class="form-check"> <input type="radio" name="buy-mode" id="buy-mode-rupee" class="form-check-input"> <label for="buy-mode-rupee" class="form-check-label">Buy in Rupee</label> </div> <div class="form-check mx-3"> <input type="radio" name="buy-mode" id="buy-mode-grams" class="form-check-input"> <label for="buy-mode-grams" class="form-check-label">Buy in grams</label> </div> </div> <div class="buy-now-amount mt-3"> <div> <input type="text" name="amount" id="buy-amount" class="form-control border-0 border-bottom" placeholder="2000"> <label for="amount" class="d-inline opacity-75">0.3234g</label> </div> </div> <ul class="buy-now-amount-suggestions row gap-2 mt-3 list-unstyled"> <li class="col p-1 text-center rounded-pill border">Rs.1000</li> <li class="col p-1 text-center rounded-pill border">Rs.2000</li> <li class="col p-1 text-center rounded-pill border">Rs.3000</li> <li class="col p-1 text-center rounded-pill border">Rs.4000</li> </ul> <div class="slide-to-see my-2"> <span class="opacity-75">Slide to see graph <img src="./assets/images/Arrow 1.png" alt=""></span> </div> <button id="buy-now-btn" class="btn text-center">Buy Now</button> </div> </div> <div class="chart d-none d-lg-block"> <div class="container chart-wrapper d-flex flex-column justify-content-between"> <div class="chart-prices d-flex justify-content-between"> <div class="chart-prices-min"> <span>Rs. 63,342</span><br><span class="opacity-75">MIN</span> </div> <div class="chart-prices-max"> <span>Rs. 63,342</span><br><span class="opacity-75">MAX</span> </div> </div> <div class="chart-image text-center"> <img src="./assets/images/chart-curve.png" alt=""> </div> <div class="chart-timeline d-flex justify-content-between" style="font-size:.8em;"> <div>This month</div> <div class="opacity-75">3 months</div> <div class="opacity-75">6 months</div> <div class="opacity-75">1 year</div> </div> </div> </div> </div>`;
let sellContent=`<div class="container sell-now-wrapper d-flex"> <div class="sell-now"> <div class="d-flex flex-column mx-3 mt-3 "> <ul class="buy-now-options row p-2 gap-2 d-lg-none list-unstyled"> <li class="col p-2 text-center">BUY</li> <li class="col p-2 text-center">SELL</li> <li class="col p-2 text-center">GIFT</li> <li class="col p-2 text-center">SIP</li> </ul> <div class="sell-now-mode d-flex justify-content-startm mt-3"> <div class="form-check"> <input type="radio" name="sell-mode" id="sell-mode-rupee" class="form-check-input"> <label for="sell-mode-rupee" class="form-check-label">Sell in Rupee</label> </div> <div class="form-check mx-3"> <input type="radio" name="sell-mode" id="sell-mode-grams" class="form-check-input"> <label for="sell-mode-grams" class="form-check-label">Sell in grams</label> </div> </div> <div class="sell-now-amount mt-3"> <div> <input type="text" name="amount" id="sell-amount" class="form-control border-0 border-bottom" placeholder="2000"> <label for="amount" class="d-inline opacity-75">0.3234g</label> </div> </div> <ul class="sell-now-amount-suggestions row gap-2 mt-3 list-unstyled"> <li class="col p-1 text-center rounded-pill border">Rs.1000</li> <li class="col p-1 text-center rounded-pill border">Rs.2000</li> <li class="col p-1 text-center rounded-pill border">Rs.3000</li> <li class="col p-1 text-center rounded-pill border">Rs.4000</li> </ul> <div class="slide-to-see my-2"> <span class="opacity-75">Slide to see graph <img src="./assets/images/Arrow 1.png" alt=""></span> </div> <button id="sell-now-btn" class="btn text-center">Sell Now</button> </div> </div> <div class="chart d-none d-lg-block"> <div class="container chart-wrapper d-flex flex-column justify-content-between"> <div class="chart-prices d-flex justify-content-between"> <div class="chart-prices-min"> <span>Rs. 63,342</span><br><span class="opacity-75">MIN</span> </div> <div class="chart-prices-max"> <span>Rs. 63,342</span><br><span class="opacity-75">MAX</span> </div> </div> <div class="chart-image text-center"> <img src="./assets/images/sell-now-chart.png" alt=""> </div> <div class="chart-timeline d-flex justify-content-between" style="font-size:.8em;"> <div>This month</div> <div class="opacity-75">3 months</div> <div class="opacity-75">6 months</div> <div class="opacity-75">1 year</div> </div> </div> </div></div>`;
let giftContent= `<div class="container gift-now-wrapper d-flex"> <div class="gift-now"> <div class="d-flex flex-column mx-3 mt-3 "> <ul class="buy-now-options row p-2 gap-2 d-lg-none list-unstyled"> <li class="col p-2 text-center ">BUY</li> <li class="col p-2 text-center">SELL</li> <li class="col p-2 text-center">GIFT</li> <li class="col p-2 text-center">SIP</li> </ul> <div class="gift-now-mode d-flex justify-content-startm mt-3"> <div class="form-check"> <input type="radio" name="gift-mode" id="gift-mode-rupee" class="form-check-input"> <label for="gift-mode-rupee" class="form-check-label">Gift in Rupee</label> </div> <div class="form-check mx-3"> <input type="radio" name="gift-mode" id="gift-mode-grams" class="form-check-input"> <label for="gift-mode-grams" class="form-check-label">Gift in grams</label> </div> </div> <div class="gift-now-amount mt-3"> <div> <input type="text" name="amount" id="gift-amount" class="form-control border-0 border-bottom" placeholder="2000"> <label for="amount" class="d-inline opacity-75">0.3234g</label> </div> </div> <ul class="gift-now-amount-suggestions row gap-2 mt-3 list-unstyled"> <li class="col p-1 text-center rounded-pill border">Rs.1000</li> <li class="col p-1 text-center rounded-pill border">Rs.2000</li> <li class="col p-1 text-center rounded-pill border">Rs.3000</li> <li class="col p-1 text-center rounded-pill border">Rs.4000</li> </ul> <div class="slide-to-see my-2"> <span class="opacity-75">Slide to see graph <img src="./assets/images/Arrow 1.png" alt=""></span> </div> <button id="gift-now-btn" class="btn text-center">Gift Now</button> </div> </div> <div class="chart d-none d-lg-block"> <div class="container chart-wrapper d-flex flex-column justify-content-between"> <div class="chart-prices d-flex justify-content-between"> <div class="chart-prices-min"> <span>Rs. 63,342</span><br><span class="opacity-75">MIN</span> </div> <div class="chart-prices-max"> <span>Rs. 63,342</span><br><span class="opacity-75">MAX</span> </div> </div> <div class="chart-image text-center"> <img src="./assets/images/chart-curve.png" alt=""> </div> <div class="chart-timeline d-flex justify-content-between" style="font-size:.8em;"> <div>This month</div> <div class="opacity-75">3 months</div> <div class="opacity-75">6 months</div> <div class="opacity-75">1 year</div> </div> </div> </div> </div>`;
let sipContent= `<div class="container sip-now-wrapper d-flex"> <div class="sip-now"> <div class="d-flex flex-column mx-3 mt-3 "> <ul class="buy-now-options row p-2 gap-2 d-lg-none list-unstyled"> <li class="col p-2 text-center">BUY</li> <li class="col p-2 text-center">SELL</li> <li class="col p-2 text-center">GIFT</li> <li class="col p-2 text-center">SIP</li> </ul> <div class="sip-now-mode d-flex justify-content-startm mt-3"> <div class="form-check"> <input type="radio" name="sip-mode" id="sip-mode-rupee" class="form-check-input"> <label for="sip-mode-rupee" class="form-check-label">Pay Monthly</label> </div> <div class="form-check mx-3"> <input type="radio" name="sip-mode" id="sip-mode-grams" class="form-check-input"> <label for="sip-mode-grams" class="form-check-label">Pay Weekly</label> </div> </div> <div class="sip-now-amount mt-3"> <div> <input type="text" name="amount" id="sip-amount" class="form-control border-0 border-bottom" placeholder="Installment Amount"> </div> <ul class="sip-now-amount-suggestions row gap-2 mt-3 list-unstyled"> <li class="col p-1 text-center rounded-pill border">Rs.1000</li> <li class="col p-1 text-center rounded-pill border">Rs.2000</li> <li class="col p-1 text-center rounded-pill border">Rs.3000</li> <li class="col p-1 text-center rounded-pill border">Rs.4000</li> </ul> </div> <div class="sip-now-amount my-3"> <div> <input type="text" name="amount" id="sip-amount" class="form-control border-0 border-bottom" placeholder="Duration"> </div> <ul class="sip-now-amount-suggestions row gap-2 mt-3 list-unstyled"> <li class="col p-1 text-center rounded-pill border">1 Years</li> <li class="col p-1 text-center rounded-pill border">2 Years</li> <li class="col p-1 text-center rounded-pill border">3 Years</li> <li class="col p-1 text-center rounded-pill border">5 Years</li> </ul> </div> <button id="sip-now-btn" class="btn text-center">Start an SIP</button> </div> </div> <div class="chart d-none d-lg-block"> <div class="container chart-wrapper d-flex flex-column justify-content-between"> <div class="chart-image text-center"> <img src="./assets/images/sip-chart.png" alt=""> </div> <div class="chart-timeline d-flex justify-content-between" style="font-size:.8em;"> <div>3 lacs <br> <span class="opacity-75">Your Investment</span> </div> <div>5 lacs <br> <span class="opacity-75">Value in 3 years*</span></div> </div> <div class="opacity-75">*Estimated value</div> </div> </div> </div>`;
let jewelleryContent= `<div class="container jewellery-now-wrapper d-flex"> <div class="jewellery-now"> <div class="d-flex flex-column mx-3 mt-3 "> <ul class="buy-now-options row p-2 gap-2 d-lg-none list-unstyled"> <li class="col p-2 text-center">BUY</li> <li class="col p-2 text-center">SELL</li> <li class="col p-2 text-center">GIFT</li> <li class="col p-2 text-center">SIP</li> </ul> <div class="d-flex justify-content-evenly my-4 "> <div><img src="./assets/images/Ellipse 84.png" alt=""><br><span>PENDANTS</span></div> <div><img src="./assets/images/Ellipse 85.png" alt=""><br><span>PENDANTS</span></div> <div><img src="./assets/images/Ellipse 86.png" alt=""><br><span>PENDANTS</span></div> <div><img src="./assets/images/Ellipse 87.png" alt=""><br><span>PENDANTS</span></div> </div> <p class="text-center">Choose from over <strong>1000</strong> items in over <strong>40</strong> categories!</p> <button id="sip-now-btn" class="btn text-center">Get Jewellery Delievered Now</button> </div> </div> </div>`;

const nav=document.querySelector('nav');
const navCloseBtn=document.querySelector('#nav-close-btn');
const navOpenBtn=document.querySelector('#nav-open-btn');

let buyNowOptions=document.querySelectorAll('.buy-now-options');
let buyNowOptionsList=document.querySelectorAll('.buy-now-options li')

const howToTabs=document.querySelector('.how-to-tabs')
const howToTabsList=document.querySelectorAll('.how-to-tabs li');

let buyNowAmount=document.querySelector('.buy-now-amount-suggestions')
let buyNowAmountList=document.querySelectorAll('.buy-now-amount-suggestions li')
navCloseBtn.addEventListener('click',(event)=>{
    nav.classList.remove('nav-toggler');
})
navOpenBtn.addEventListener('click',(event)=>{
    nav.classList.add('nav-toggler');
})



function addListeners(){

    // Listener for tabs
    for(let item of buyNowOptions){
        item.addEventListener('click',switchTab);
    }

    // listener for amounts
    buyNowAmount.addEventListener('click',switchAmount);

    // listener for howToTabs
    howToTabs.addEventListener('click',switchHowToTabs)

}

function switchTab(){

    for(let listItem of buyNowOptionsList){
        if(event.target==listItem){
            event.target.classList.add('active-option');
            changeContainer(event.target.textContent);
            fetchList();
            addListeners();
        }
        else{
            listItem.classList.remove('active-option');
        }
    }
}

function switchAmount(){
    for(let listItem of buyNowAmountList){
        if(event.target==listItem){
            event.target.classList.add('active-option')
        }
        else{
            listItem.classList.remove('active-option')
        }
    }
}

function switchHowToTabs(){
    for(let listItem of howToTabsList){
        if(event.target==listItem){
            event.target.classList.add('active-option')
        }
        else{
            listItem.classList.remove('active-option')
        }
    }
}



function changeContainer(tabTitle){
    let container= document.querySelector('#cards-content-wrapper');
    switch(tabTitle){
        case 'SELL': container.innerHTML= sellContent;
                    break;
        case 'GIFT': container.innerHTML = giftContent;
                    break;
        case 'SIP': container.innerHTML = sipContent;
                    break;
        case 'BUY': container.innerHTML = buyContent;
                    break
        case 'JEWELLERY': container.innerHTML = jewelleryContent;
        default: return;
    }
    return;
}

function fetchList(){
    buyNowOptions=document.querySelectorAll('.buy-now-options');
    buyNowOptionsList=document.querySelectorAll('.buy-now-options li')
    buyNowAmount=document.querySelector('.buy-now-amount-suggestions')
    buyNowAmountList=document.querySelectorAll('.buy-now-amount-suggestions li')
    return;
}
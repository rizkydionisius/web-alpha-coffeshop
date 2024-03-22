//Toggle class active untuk Hamburger Menu
const navbarNav=document.querySelector('.navbar-nav');

//Ketika hamburger menu di klik 
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
}

// Toggle Class Active untuk Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector  ('#search-button').onclick = ()=>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle Class Active untuk Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick=()=>{
    shoppingCart.classList.toggle('active');
    e.preventDefault
};

// Click di luar elemen
const hm= document.querySelector('#hamburger-menu');
const sb= document.querySelector('#search-button');
const sc= document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
})


//Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail.button');

itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display ='flex';
    e.preventDefault();
};
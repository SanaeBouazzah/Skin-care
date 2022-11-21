// sticky header with scrolll ***********************************************************************************************************************
window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
});
// reponsive bar************************************************************************************************************************************
var menu = document.querySelector("nav");
var openbtn = document.querySelector(".toggle-open");
var closebtn = document.querySelector(".toggle-close");

openbtn.onclick = () => {
    menu.classList.add("active");
};
closebtn.onclick = () => {
    menu.classList.remove("active");
};
// cart shopping **************************************************************************************************************************************************
var cart = document.querySelector(".cart");
var cartshop = document.querySelector(".cart-shop");
var closeb = document.querySelector(".close");

cart.onclick = () => {
    cartshop.classList.add("click");
};
closeb.onclick = () => {
    cartshop.classList.remove("click");
}
var additemid = 0;
function addtocart(item) {
    additemid += 1;
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cartimg');
    selecteditem.setAttribute('id', additemid);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].children[1].children[0].children[0].innerText;
    var price = document.createElement('div');
    price.innerText = item.children[1].children[1].children[0].children[2].innerText;
    var delbtn = document.createElement('button');
    delbtn.classList.add('xmark');
    delbtn.innerText = 'x';
    delbtn.onclick = function () {
        selecteditem.remove();
    }
    var cartitems = document.getElementById('roni');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(price);
    selecteditem.append(delbtn);
    cartitems.append(selecteditem);
}
// slider of swiper*******************************************************************************************************************************************
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        300:{
            slidesPerView: 2,
            spaceBetween: 50,
        },
        567:{
            slidesPerView: 3,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2400,
        disableOnInteraction: false,
    },
});

// scroll bar***************************************************************************************************************************************************************

let arrowup = document.querySelector(".arrow");
window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 500) {
        arrowup.classList.add("show");

    }
    else {
        arrowup.classList.remove("show");
    }
};
arrowup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
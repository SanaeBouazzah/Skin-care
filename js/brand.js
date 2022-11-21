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
// video autoplay*************************************************************************************************************
var clip = document.querySelectorAll('.clip');;
for( let i = 0; i < clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
        clip[i].play();
    });
    clip[i].addEventListener('mouseout', function(e){
        clip[i].pause();
    })
}
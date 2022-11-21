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
// counter date ******************************************************************************************************************************************************
let countdate = new Date("Dec 31, 2022 23:59:59").getTime();
let countet = setInterval(() => {
    let datenow = new Date().getTime();
    let datediff = countdate - datenow;
    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((datediff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (datediff < 0) {
        clearInterval();
    }

}, 1000);
// responsive counter **************************************************************************************************************************************************
let countdate2 = new Date("Dec 31, 2022 23:59:59").getTime();
let countet2 = setInterval(() => {
    let datenow2 = new Date().getTime();
    let datediff2 = countdate2 - datenow2;
    let days2 = Math.floor(datediff2 / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((datediff2 % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes2 = Math.floor((datediff2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((datediff2 % (1000 * 60)) / 1000);
    document.querySelector(".days2").innerHTML = days2 < 10 ? `0${days2}` : days2;
    document.querySelector(".hours2").innerHTML = hours2 < 10 ? `0${hours2}` : hours2;
    document.querySelector(".minutes2").innerHTML = minutes2 < 10 ? `0${minutes2}` : minutes2;
    document.querySelector(".seconds2").innerHTML = seconds2 < 10 ? `0${seconds2}` : seconds2;
    if (datediff2 < 0) {
        clearInterval();
    }

}, 1000);

// colors of product **********************************************************************************************************************************************
let colors = document.querySelectorAll(".colors li");
let colorsarray = Array.from(colors);

let divs = document.querySelectorAll(".content > div");
let divsarray = Array.from(divs);

colorsarray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        colorsarray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsarray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});

// face tabs ********************************************************************************************************************************************************
let facepic = document.querySelectorAll(".face-pictures li");
let facepicsarray = Array.from(facepic);

let facecontent = document.querySelectorAll(".face-content > div");
let facecontentarray = Array.from(facecontent);

facepicsarray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        facepicsarray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        facecontentarray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
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

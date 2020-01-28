// DOM VARIABLES 
let form = document.getElementById("form");
let business = document.getElementById("selectBusiness");
let waste = document.getElementById("selectWasteType");
let address = document.getElementById("address");
let date = document.getElementById("visitDate");
let button = document.getElementById("btnSubmit");
let answer = document.getElementById("answer");
let aboutUs = document.getElementById("about-us");
let solutions = document.getElementById("solutions");
let products = document.getElementById("products");

// TOGGLE MOBILE HEADER

let header = document.getElementById('invisible-header');
let btn = document.getElementById('bttn-mobile');

function trial() {
    if (header.style.display === 'none') {
        header.style.display = 'flex';
        header.style.flexDirection = 'column';
        header.style.alignContent = 'center';
        header.style.textAlign = 'center';
        header.style.padding = '0.5rem';
        header.style.fontFamily = 'reross-rectangular';
        btn.innerHTML = 'close menu';
    } else {
        header.style.display = 'none';
        btn.innerHTML = 'Menu';
    }
}

btn.addEventListener("click", trial, false);

// SMOOTH SCROLLING FROM HEADER TO TOPICS
function aboutUsScroll() {
    aboutUs.scrollIntoView({
        behavior: 'smooth'
    })
}
aboutUs.addEventListener("click",  aboutUsScroll, false);

function solutionScroll() {
    solutions.scrollIntoView({
        behavior: 'smooth'
    })
}
solutions.addEventListener("click", solutionScroll, false);

function productScroll() {
    products.scrollIntoView({
        behavior: 'smooth'
    })
}
products.addEventListener("click", productScroll, false);

function formScroll() {
    form.scrollIntoView({
        behavior: 'smooth'
    })
}
form.addEventListener("click", formScroll, false);

// To Top Button 
let toTopBtn = document.getElementById("toTopBtn");
let mainHeader = document.querySelector(".menu-header");

function toTop() {
    mainHeader.scrollIntoView({
        behavior: 'smooth'
    });
}

toTopBtn.addEventListener("click", toTop, false);

// FORM HANDLING 
function formHandle() {
    let businessVal = business.value;
    let wasteVal = waste.value;
    let addressVal = address.value;
    let dateVal = date.value;
    let dateVisit = new Date(date.value).toLocaleDateString();
    let regex = /[A-Za-z_0-9]/;
    if (regex.test(addressVal) === true && dateVal !== "") {
        answer.innerHTML = `<h1>The order has been sent. We are creating ${businessVal} solution for You. We will take away your ${wasteVal} waste from ${addressVal} on ${dateVisit}.</h1>`;
        form.classList.remove("alert");
    } else {
        answer.innerHTML = `<h1 style="color: red">Please, fill the form</h1>`;
        form.classList.add("alert");
        address.focus();
    }
}

button.addEventListener("click", formHandle, false);
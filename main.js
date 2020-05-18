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
let addressErr = document.getElementById("addressErr");
let dateErr = document.getElementById("dateErr");

// TOGGLE MOBILE HEADER

let headerLinks = document.querySelector(".links");
let btn = document.getElementById('bttn-mobile');

function trial() {
    if (headerLinks.style.display === 'flex') {
        headerLinks.style.display = 'none'
    } else {
        headerLinks.style.display = 'flex';
        headerLinks.style.flexDirection = 'column';
        headerLinks.style.alignContent = 'center';
        headerLinks.style.textAlign = 'center';
        headerLinks.style.padding = '0.5rem';
        headerLinks.style.fontFamily = 'reross-rectangular';
        headerLinks.style.fontSize = '1rem';
    }
}

btn.addEventListener("click", trial, false);

// To Top Button 
let toTopBtn = document.getElementById("toTopBtn");
let mainHeader = document.querySelector(".menu-header");

function toTop() {
    mainHeader.scrollIntoView({
        behavior: 'smooth'
    });
}

toTopBtn.addEventListener("click", toTop, false);

let scrollButtonsArr = [aboutUs, solutions, products, form];

for (let i = 0; i < scrollButtonsArr.length; i++) {
    scrollButtonsArr[i].onclick = () => {
        scrollButtonsArr[i].scrollItnoView({
            behavior: 'smooth'
        })
    }
}

// FORM HANDLING 
function formHandle() {
    let businessVal = business.value;
    let wasteVal = waste.value;
    let addressVal = address.value;
    let dateVal = date.value;
    let dateVisit = new Date(date.value).toDateString();
    let regex = /[A-Za-z_0-9]/;
    if (regex.test(addressVal) === false || dateVal === "") {
        answer.innerHTML = `<h1 style="color: red">Please, fill the form</h1>`;
        form.classList.add("alert");
        if (regex.test(address.value) === false) {
            addressErr.innerHTML = `<h3 style="color: white">Please, print the address</h3>`;
        }
        if (date.value === "") {
            dateErr.innerHTML = `<h3 style="color: white">Please, select the date</h3>`;
        }
    }  else {
        answer.innerHTML = `<h1>The order has been sent. We are creating ${businessVal} 
        solution for You. We will take away your ${wasteVal} 
        waste from ${addressVal} on ${dateVisit}.</h1>`;
        form.classList.remove("alert");
        addressErr.innerHTML = "";
        dateErr.innerHTML = "";
    }
}

button.addEventListener("click", formHandle, false);
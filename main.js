// DOM VARIABLES 
let form = document.getElementById("form");
let business = document.getElementById("selectBusiness");
let waste = document.getElementById("selectWasteType");
let address = document.getElementById("address");
let date = document.getElementById("visitDate");
let button = document.getElementById("btnSubmit");
let answer = document.getElementById("answer");

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

document.querySelector('#about-us').scrollIntoView({
    behavior: 'smooth'
});

document.querySelector('#solutions').scrollIntoView({
    behavior: 'smooth'
});

document.querySelector('#foot').scrollIntoView({
    behavior: 'smooth'
});

document.querySelector('#products').scrollIntoView({
    behavior: 'smooth'
});

// FORM HANDLING 
function formHandle() {
    let businessVal = business.value;
    let wasteVal = waste.value;
    let addressVal = address.value;
    let dateVal = new Date(date.value).toLocaleDateString();
    if (addressVal != "" && dateVal != "") {
        answer.innerHTML = `<h1>The order has been sent. We are creating ${businessVal} solution for You. We will take away your ${wasteVal} waste from ${addressVal} on ${dateVal}.</h1>`;
        form.classList.remove("alert");
    } else {
        answer.innerHTML = `<h1 style="color: red">Please, fill the form</h1>`;
        form.classList.add("alert");
    }
}

button.addEventListener("click", formHandle, false);
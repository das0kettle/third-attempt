// TOGGLE MOBILE HEADER

let header = document.getElementById('invisible-header');

function trial() {
    if (header.style.display === 'none') {
        header.style.display = 'flex';
        header.style.flexDirection = 'column';
        header.style.alignContent = 'center';
        header.style.textAlign = 'center';
        header.style.padding = '0.5rem';
        header.style.fontFamily = 'reross-rectangular';
        header.style.transition = 'all 0.3s';
        document.getElementById('bttn-mobile').innerHTML = 'close menu';
    } else {
        header.style.display = 'none';
        document.getElementById('bttn-mobile').innerHTML = 'Menu';
    }
}

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

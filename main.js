let button = document.getElementById('invisible-header');

function trial() {
    if (button.style.display === 'none') {
        button.style.display = 'flex';
        button.style.flexDirection = 'column';
        button.style.alignContent = 'center';
        button.style.textAlign = 'center';
        button.style.padding = '0.5rem';
        button.style.fontFamily = 'reross-rectangular';
    } else {
        button.style.display = 'none';
    }
}
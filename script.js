

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

var isOriginal = true;

function toggle() {
    var img = document.getElementById('myImage');

    if (isOriginal) {
        img.src = 'images/1.png';
        isOriginal = false;
    } else if (img.src.includes('images/1.png')) {
        img.src = 'images/2.png';
        isOriginal = false;
    } else if (img.src.includes('images/2.png')) {
        img.src = 'images/3.png';
        isOriginal = false;
    } else {
        img.src = 'images/4.png';
        isOriginal = true; // Optional, depending on the desired toggle logic
    }
}

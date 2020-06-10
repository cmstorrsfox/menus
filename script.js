const navbar = document.getElementById('navbar');
const header = document.getElementById('heading');
const sticky = navbar.offsetTop;

window.onscroll = function() {
    myFunction();

};

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");

    }

};
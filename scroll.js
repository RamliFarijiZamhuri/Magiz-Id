window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("myNavbar").style.opacity = "1";
    } else {
        document.getElementById("myNavbar").style.opacity = "0";
    }

    if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570) {
        document.getElementById("myNavbar").style.display = "block";
    } else {
        document.getElementById("myNavbar").style.display = "none";
    }
}
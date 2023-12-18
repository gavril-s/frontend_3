document.addEventListener("DOMContentLoaded", function() {
    var parallaxImage = document.querySelector(".parallax-container img");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        parallaxImage.style.marginLeft = -scrollPosition/2 + "px";
    });
});

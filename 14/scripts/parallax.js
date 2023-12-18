document.addEventListener("DOMContentLoaded", function() {
    var parallaxImage = document.querySelector(".parallax-container img");

    window.addEventListener("scroll", () => {
        var scrollPosition = window.scrollY;
        parallaxImage.style.marginLeft = 2300 - scrollPosition / 2 + "px";
    });
});

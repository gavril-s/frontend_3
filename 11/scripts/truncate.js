document.addEventListener("DOMContentLoaded", function () {
    truncateTextAutomatically();
});

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    }
    return str;
}

function truncateTextAutomatically() {
    var originalTextElements = document.querySelectorAll(".truncate");

    originalTextElements.forEach(function (element) {
        var maxLength = 120;
        var truncatedText = truncate(element.textContent, maxLength);
        element.textContent = truncatedText;
    });
}


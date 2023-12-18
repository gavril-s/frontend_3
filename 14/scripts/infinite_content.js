var counter = 0;

function generateContent() {
    const newContent = document.createElement('div');
    newContent.innerHTML = `<p>бесконечный контент - #${++counter}</p>`;
    document.querySelector('.infinite-content').appendChild(newContent);
}

function isScrolledToBottom() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    return (documentHeight - windowHeight - scrollPosition) < 10; 
}

window.addEventListener('scroll', function () {
    if (isScrolledToBottom()) {
        generateContent();
    }
});

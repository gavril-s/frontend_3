function loadMoreContent() {
    const newContent = document.createElement('p');
    newContent.textContent = 'Новый контент на странице';
    document.getElementById('content').appendChild(newContent);
}

function isScrolledToBottom() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    return (documentHeight - windowHeight - scrollPosition) < 10; 
}


window.addEventListener('scroll', function () {
    if (isScrolledToBottom()) {
        loadMoreContent();
    }
});

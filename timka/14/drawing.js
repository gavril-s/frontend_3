const likeButton = document.getElementById('like-btn');
const container = document.getElementById('container');
let isDrawing = false;

likeButton.addEventListener('click', () => {
    isDrawing = !isDrawing;
    if (isDrawing) {
        likeButton.style.backgroundColor = '#e74c3c';
        likeButton.style.boxShadow = '0 0 40px #e74c3c';
        likeButton.style.transition = '.5s ease';
        container.style.pointerEvents = 'auto';
        container.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = e.clientX - 355 + 'px';
                heart.style.top = e.clientY - 150 + 'px';
                container.appendChild(heart);
            }
        });
    } 
    else {
        likeButton.style.backgroundColor = '#5c5f66';
        likeButton.style.boxShadow = '0 0 40px #5c5f66';
        likeButton.style.transition = '.7s ease';
        container.style.pointerEvents = 'none';
    }
});



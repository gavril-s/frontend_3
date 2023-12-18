const drawButton = document.getElementById('draw-button');
const canvas = document.getElementById('canvas');
let isDrawing = false;

drawButton.addEventListener('click', () => {
    isDrawing = !isDrawing;
    if (isDrawing) {
        drawButton.style.backgroundColor = '#e74c3c';
        drawButton.style.boxShadow = '0 0 40px #e74c3c';
        drawButton.style.transition = '.5s ease';
        canvas.style.pointerEvents = 'auto';
        canvas.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                const point = document.createElement('div');
                point.className = 'point';
                point.style.left = e.clientX + window.scrollX + 'px';
                point.style.top = e.clientY + window.scrollY + 'px';
                canvas.appendChild(point);
            }
        });
    } 
    else {
        drawButton.style.backgroundColor = '#5c5f66';
        drawButton.style.boxShadow = '0 0 40px #5c5f66';
        drawButton.style.transition = '.7s ease';
        canvas.style.pointerEvents = 'none';
    }
});



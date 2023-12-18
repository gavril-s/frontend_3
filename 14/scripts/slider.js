const sliderHandle = document.getElementById('slider-handle');
const sliderBar = document.getElementById('slider-bar');
let isDragging = false;

sliderHandle.addEventListener('mousedown', (event) => {
    isDragging = true;
    sliderHandle.style.cursor = 'grabbing';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        isDragging = false;
        sliderHandle.style.cursor = 'grab';
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

function handleMouseMove(event) {
    if (isDragging) {
        const sliderRect = sliderBar.getBoundingClientRect();
        let newPosition = event.clientX - sliderRect.left;
        newPosition = Math.max(0, Math.min(newPosition, sliderRect.width));
        sliderHandle.style.left = `${newPosition}px`;
    }
}
const sliderHandle = document.getElementById('sliderHandle');
const sliderBar = document.getElementById('sliderBar');
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

    // Ensure the handle stays within the slider bounds
    newPosition = Math.max(0, Math.min(newPosition, sliderRect.width));

    // Update handle position
    sliderHandle.style.left = `${newPosition}px`;
  }
}
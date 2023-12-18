function animateElement(element, property, start, end, duration) {
    let startTime = 0;
    function animationStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = start - 4 * (end - start) * progress * (progress - 1);
        element.style[property] = `${value}px`;
        if (progress < 1) {
            requestAnimationFrame(animationStep);
        } else {
            startTime = null;
            animateElement(element, property, start, end, duration);
        }
    }
    requestAnimationFrame(animationStep);
}
  
const element1 = document.getElementById('animated-1');
const element2 = document.getElementById('animated-2');

animateElement(element1, 'left', 50, 250, 2000);
animateElement(element2, 'top', 350, 150, 3000);
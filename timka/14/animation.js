function animateElement(element, property, start, end, duration) {
    let startTime;
    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + progress * (end - start);
      element.style[property] = `${value}px`;
      if (progress < 1) {
        requestAnimationFrame(animationStep);
      } else {
        // Restart animation when it completes
        startTime = null;
        animateElement(element, property, start, end, duration);
      }
    }
    requestAnimationFrame(animationStep);
  }
  
  const element1 = document.getElementById('animation1');
  const element2 = document.getElementById('animation2');
  
  animateElement(element1, 'left', 50, 250, 2000); // 2 seconds duration
  animateElement(element2, 'top', 150, 350, 3000); // 3 seconds duration
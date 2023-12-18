
var centerContainer = document.querySelector('.center-container');
var centeredImage = document.getElementById('centered-image');


function centerImage() {
    var containerWidth = centerContainer.offsetWidth;
    var containerHeight = centerContainer.offsetHeight;
    var imageWidth = centeredImage.clientWidth;
    var imageHeight = centeredImage.clientHeight;

    var leftPosition = (containerWidth - imageWidth) / 2;
    var topPosition = (containerHeight - imageHeight) / 2;

    centerContainer.style.position = 'relative'; 
    centeredImage.style.marginLeft = leftPosition + 'px';
    centeredImage.style.marginTop = topPosition + 'px';
}

function handleMouseClick(event) {
    var x = event.clientX;
    var y = event.clientY;

    alert('Координаты клика: X=' + x + ', Y=' + y);
}

window.addEventListener('load', centerImage);
window.addEventListener('resize', centerImage);
centerContainer.addEventListener('click', handleMouseClick);



var centerImageContainer = document.querySelector('.center-image-container');
var centerImage = document.querySelector('.center-image');

function center() {
    var containerWidth = centerImageContainer.offsetWidth;
    var containerHeight = centerImageContainer.offsetHeight;
    var imageWidth = centerImage.clientWidth;
    var imageHeight = centerImage.clientHeight;

    var leftPosition = (containerWidth - imageWidth) / 2;
    var topPosition = (containerHeight - imageHeight) / 2;

    centerImageContainer.style.position = 'relative'; 
    centerImage.style.marginLeft = leftPosition + 'px';
    centerImage.style.marginTop = topPosition + 'px';
}

function onClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    alert('Координаты клика: X=' + x + ', Y=' + y);
}

window.addEventListener('load', center);
window.addEventListener('resize', center);
centerImageContainer.addEventListener('click', onClick);

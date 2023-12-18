document.querySelector('.contents').addEventListener('click', function (event) {
    var isLinkClicked = event.target.tagName === 'A';
    if (isLinkClicked) {
        if (!confirm('Вы точно хотите уйти?')) {
            event.preventDefault();
        }
    }
  });
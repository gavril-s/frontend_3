document.getElementById('contents').addEventListener('click', function (event) {
    // Check if the clicked element or its ancestor is a link
    var isLinkClicked = event.target.tagName === 'A';
  
    if (isLinkClicked) {
      // Ask for confirmation only once
      if (!confirm('Вы точно хотите уйти?')) {
        event.preventDefault();
      }
    }
  });
document.getElementById('selectableList').addEventListener('click', function(event) {
  // Prevent text selection on the page
  event.preventDefault();

  // Check if Ctrl (Cmd for Mac) key is pressed
  const isCtrlPressed = event.ctrlKey || event.metaKey;

  // Get the clicked list item
  const listItem = event.target;

  // Remove 'selected' class from all list items
  document.querySelectorAll('#selectableList li').forEach(item => {
    item.classList.remove('selected');
  });

  // Add 'selected' class to the clicked list item
  listItem.classList.add('selected');

  // Toggle 'selected' class if Ctrl (Cmd for Mac) is pressed
  if (isCtrlPressed) {
    listItem.classList.toggle('selected');
  }
});
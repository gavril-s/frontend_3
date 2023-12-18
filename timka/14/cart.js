let total = 0;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.price);
}

function drop(event) {
  event.preventDefault();
  const price = parseFloat(event.dataTransfer.getData('text/plain'));
  total += price;

  // Update total in the cart
  document.getElementById('total').textContent = total.toFixed(2);
}
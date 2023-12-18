/*document.addEventListener("DOMContentLoaded", function () {
    displayCart();
});

let cartItems = [];

function getItemName(itemId){
    switch(itemId) {
        case 1:  return "Зонтик";
        case 2:  return "Очки";
        case 3:  return "Дождевик";
        case 4:  return "Шапка";
        default:  return "Неизвестный товар";
    }
}

function getItemPrice(itemId){
    switch(itemId) {
        case 1:  return 250;
        case 2:  return 100;
        case 3:  return 700;
        case 4:  return 300;
        default:  return 0;
    }
}

function addItem(itemId){
    var item = {id: itemId, name: getItemName(itemId), price: getItemPrice(itemId), quantity: 1};
    let isInCart = cartItems.find(items => items.id == itemId);
    if (isInCart){
        isInCart.quantity++;
    }
    else{
        cartItems.push(item);
    }
    displayCart();
}

function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - Количество: ${item.quantity} - Цена: ${item.price * item.quantity}₽
            <button onclick="increaseQuantity(${item.id})"><img src="images/plus.png"></button>
            <button onclick="removeItem(${item.id})"><img src="images/bin.png"></button>`;
        cartElement.appendChild(itemDiv);
    });

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const summaryDiv = document.createElement('div');
    summaryDiv.textContent = `Всего товаров: ${totalItems} - Цена всего: ₽${totalPrice}`;
    cartElement.appendChild(summaryDiv);
}

function clearCart(){
    cartItems = [];
    displayCart();
}

function removeItem(itemId){
    cartItems = cartItems.filter(item => item.id !== itemId);
    displayCart();
}

function increaseQuantity(itemId){
    let isInCart = cartItems.find(items => items.id == itemId);
    if (isInCart){
        isInCart.quantity++;
    }
    displayCart();
}

function compareIncreasing(a, b){
    if (a.price*a.quantity > b.price*b.quantity) return 1;
    if (a.price*a.quantity === b.price*b.quantity) return 0;
    if (a.price*a.quantity < b.price*b.quantity) return -1;
}

function sortItems(ascending){
    cartItems.sort(compareIncreasing);
    if (!ascending){
        cartItems.reverse();
    }
    displayCart();
}

function filterItems(){
    var priceFrom = parseFloat(document.getElementById("cart-filter-price-from").value);
    var priceTo = parseFloat(document.getElementById("cart-filter-price-to").value) ;
    let filteredItems = cartItems.filter(item => item.price * item.quantity >= priceFrom && item.price*item.quantity <= priceTo);
    if (filteredItems.length === 0) {
        alert("Нет товаров, удовлетворяющих критериям.");
    } else {
        const itemsInfo = filteredItems.map(item => `${item.name} - Цена: ₽${item.price} - Количество: ${item.quantity}`).join('\n');
        alert(itemsInfo);
    }
}*/

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

    document.getElementById('total').textContent = total.toFixed(2);
}
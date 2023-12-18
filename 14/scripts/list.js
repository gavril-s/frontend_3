/*document.addEventListener("DOMContentLoaded", function () {
    function addItem() {
        const itemContent = prompt("Введите содержимое пункта:");
  
        if (itemContent === null || itemContent.trim() === "") {
            return false;
        }

        const list = document.getElementById("list");
        const listItem = document.createElement("li");
        listItem.textContent = itemContent;
        list.appendChild(listItem);
  
        updateList();
    
        return true;
    }
  
    function updateList() {
        const list = document.getElementById("list");
        list.innerHTML = list.innerHTML;
    }
  
    document.getElementById("append-to-list-button").addEventListener("click", function () {
        while (addItem()) {}
    });
});*/

document.querySelector('.selectable-list').addEventListener('click', function(event) {
    event.preventDefault();
    const isCtrlPressed = event.ctrlKey || event.metaKey;
    const listItem = event.target;
    document.querySelectorAll('.selectable-list li').forEach(item => {
        item.classList.remove('selected');
    });
    listItem.classList.add('selected');
    if (isCtrlPressed) {
        listItem.classList.toggle('selected');
    }
});
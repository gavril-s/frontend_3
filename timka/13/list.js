document.addEventListener("DOMContentLoaded", function () {
  function addItem() {
    const itemContent = prompt("Введите содержимое пункта:");

    if (itemContent === null || itemContent.trim() === "") {
      return false;
    }

    const list = document.getElementById("myList");
    const listItem = document.createElement("li");
    listItem.textContent = itemContent;
    list.appendChild(listItem);

    return true;
  }

  document.getElementById("startButton").addEventListener("click", function () {
    while (addItem()) {}
  });
});
  
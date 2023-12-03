document.addEventListener("DOMContentLoaded", function () {
    // Функция для добавления нового элемента в список
    function addItem() {
      // Запрашиваем содержимое пункта у пользователя
      const itemContent = prompt("Введите содержимое пункта:");
  
      // Если пользователь не ввел ничего, нажал "Отмена" или ввел пустую строку, прекращаем выполнение функции
      if (itemContent === null || itemContent.trim() === "") {
        return false;
      }
  
      // Создаем элемент <li> и добавляем его к <ul>
      const list = document.getElementById("myList");
      const listItem = document.createElement("li");
      listItem.textContent = itemContent;
      list.appendChild(listItem);
  
      // Обновляем HTML-содержимое <ul> после каждого ввода
      updateList();
  
      return true;
    }
  
    // Функция для обновления списка
    function updateList() {
      const list = document.getElementById("myList");
      list.innerHTML = list.innerHTML;
    }
  
    // Добавляем обработчик события для вызова функции addItem при нажатии на кнопку
    document.getElementById("startButton").addEventListener("click", function () {
      // Запускаем ввод элементов при нажатии на кнопку
      while (addItem()) {}
    });
  });
  
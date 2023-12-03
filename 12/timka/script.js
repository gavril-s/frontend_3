// Ваш JavaScript код здесь
function showNotification(options) {
    const notificationContainer = document.getElementById('notification-container');

    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'not';
    notification.textContent = options.content;

    // Добавляем уведомление в контейнер
    notificationContainer.appendChild(notification);

    // Показываем уведомление
    notification.style.display = 'block';

    // Автоматически скрываем уведомление через 1.5 секунды
    setTimeout(() => {
        notification.style.display = 'none';
        // Удаляем уведомление из DOM
        notificationContainer.removeChild(notification);
    }, 1500);
}

// Пример использования
showNotification({ content: 'Уведомление!' });

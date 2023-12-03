// notification.js

// Функция для создания нового уведомления
function createNotification() {
    const notificationSign = document.querySelector('.notification-sign');
    
    // Создаем новое уведомление
    const newNotification = document.createElement('a');
    newNotification.textContent = 'Новое уведомление!';
    
    // Добавляем новое уведомление к существующим
    notificationSign.appendChild(newNotification);
    
    // Обновляем счетчик уведомлений
    updateNotificationCounter();
}

// Функция для обновления счетчика уведомлений
function updateNotificationCounter() {
    const notificationCounter = document.querySelector('#notificationCounter');
    
    // Получаем текущее количество уведомлений
    let currentCount = parseInt(notificationCounter.textContent) || 0;
    
    // Увеличиваем счетчик на 1
    currentCount++;
    
    // Обновляем текст счетчика
    notificationCounter.textContent = currentCount;
    notificationCounter.textContent += ' - количество уведомлений: ';
    notificationCounter.style.color = 'red';

}

// Функция для обработки нажатия на кнопку уведомлений
function handleNotificationButtonClick() {
    // Останавливаем счетчик на 10 секунд с использованием задерживающего декоратора
    stopNotificationsCounter(10);
    
    // Создаем новое уведомление
    createNotification();
}

// Функция для остановки счетчика уведомлений на заданное количество секунд
function stopNotificationsCounter(seconds) {
    const notificationCounter = document.querySelector('#notificationCounter');
    
    // Замораживаем счетчик на указанное количество секунд
    notificationCounter.dataset.frozen = true;
    
    // Ждем указанное количество секунд и снимаем заморозку
    setTimeout(() => {
        notificationCounter.removeAttribute('data-frozen');
    }, seconds * 1000);
}

// Функция для запуска счетчика уведомлений каждые 3 секунды
function startNotificationsInterval() {
    setInterval(() => {
        const notificationCounter = document.querySelector('#notificationCounter');
        
        // Проверяем, не заморожен ли счетчик
        if (!notificationCounter.dataset.frozen) {
            // Создаем новое уведомление
            createNotification();
        }
    }, 3000);
}

// Добавляем обработчик события для кнопки уведомлений
document.querySelector('#stopNotificationsBtn').addEventListener('click', handleNotificationButtonClick);

// Запускаем счетчик уведомлений
startNotificationsInterval();

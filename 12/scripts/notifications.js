function showNotification(options) {
    const notificationContainer = document.getElementById('notification-container');

    const notification = document.createElement('div');
    notification.className = 'not';
    notification.textContent = options.content;
    notificationContainer.appendChild(notification);
    notification.style.display = 'block';

    setTimeout(
        () => {
            notification.style.display = 'none';
            notificationContainer.removeChild(notification);
        },
        1500
    );
}

function createNotification() {
    const notificationSign = document.querySelector('.notification-sign');
    const newNotification = document.createElement('a');

    newNotification.textContent = 'Новое уведомление!';
    notificationSign.appendChild(newNotification);
    
    updateNotificationCounter();
}

function updateNotificationCounter() {
    const notificationCounter = document.querySelector('#notificationCounter');
    
    let currentCount = parseInt(notificationCounter.textContent) || 0;
    currentCount++;
    
    notificationCounter.textContent = currentCount;
    notificationCounter.textContent += ' - количество уведомлений: ';
    notificationCounter.style.color = 'red';
}

function handleNotificationButtonClick() {
    stopNotificationsCounter(10);
    createNotification();
}

function stopNotificationsCounter(seconds) {
    const notificationCounter = document.querySelector('#notificationCounter');
    notificationCounter.dataset.frozen = true;
    
    setTimeout(
        () => {
            notificationCounter.removeAttribute('data-frozen');
        },
        seconds * 1000
    );
}

function startNotificationsInterval() {
    setInterval(
        () => {
            const notificationCounter = document.querySelector('#notificationCounter');
            if (!notificationCounter.dataset.frozen) {
                createNotification();
            }
        },
        3000
    );
}

showNotification({ content: 'Уведомление!' });
document.querySelector('#stopNotificationsBtn').addEventListener('click', handleNotificationButtonClick);
startNotificationsInterval();
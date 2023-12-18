function createNotification() {
    const notificationSign = document.querySelector('.notification-sign');

    const newNotification = document.createElement('div');
    newNotification.classList.add('notification-item');

    const content = document.createElement('a');
    content.textContent = 'Новое уведомление!';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.classList.add('close-btn');
    closeBtn.addEventListener('click', () => {
        closeNotification(newNotification);
    });

    content.appendChild(closeBtn); 
    newNotification.appendChild(content);

    notificationSign.appendChild(newNotification);

    updateNotificationCounter();
}


function closeNotification(notification) {
    const notificationSign = document.querySelector('.notification-sign');
    notificationSign.removeChild(notification);
    const notificationCounter = document.querySelector('#notificationCounter');
    
    let currentCount = parseInt(notificationCounter.textContent) || 0;
    
    currentCount--;
    
    notificationCounter.textContent = currentCount;
    notificationCounter.textContent += ' - количество уведомлений';
    notificationCounter.style.color = 'red';
}


function updateNotificationCounter() {
    const notificationCounter = document.querySelector('#notificationCounter');
    
    let currentCount = parseInt(notificationCounter.textContent) || 0;
    
    currentCount++;
    
    notificationCounter.textContent = currentCount;
    notificationCounter.textContent += ' - количество уведомлений';
    notificationCounter.style.color = 'red';

}

function handleNotificationButtonClick() {
    stopNotificationsCounter();
    
}

function stopNotificationsCounter() {
    const notificationCounter = document.querySelector('#notificationCounter');
    
    notificationCounter.dataset.frozen = true;
    
    setTimeout(() => {
        notificationCounter.removeAttribute('data-frozen');
    },  10000);
}

function startNotificationsInterval() {
    setInterval(() => {
        const notificationCounter = document.querySelector('#notificationCounter');
            if (!notificationCounter.dataset.frozen) {
                createNotification();
            }
    }, 3000);
}

document.querySelector('#stopNotificationsBtn').addEventListener('click', handleNotificationButtonClick);

startNotificationsInterval();

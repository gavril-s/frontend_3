var registrationAnswer = prompt('Желаете пройти регистрацию на сайте? ');

if (registrationAnswer === 'Да') {
    alert('Круто!');
    var login = prompt('Введите логин:');
    if (login === 'Админ') {
        var password = prompt('Введите пароль:');
        if (password === 'Я главный') {
            alert('Здравствуйте!');
        } 
        else if (password === null ) {
            alert('Отменено');
        } 
        else {
            alert('Неверный пароль');
        }
    } 
    else if (login === null || login === "") {
        alert('Отменено');
    } 
    else {
        alert('Я вас не знаю');
    }
} 
else {
    alert('Попробуй ещё раз');
}
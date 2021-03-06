let currentDate = new Date();
while (true) {
    alert(new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(currentDate));
    let question = confirm('День недели. Хотите увидеть следующий день ?')
    if (!question) {
        break;
    }
    currentDate.setDate(currentDate.getDate() + 1);
}

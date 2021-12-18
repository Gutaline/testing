function SayPrice(price, event) {
    if (event.target.classList.contains('active')) {
        console.log('Есть класс');
        event.target.classList.remove('active');
    } else {
        console.log('Нет класса');
        event.target.classList.add('active');
    }
}

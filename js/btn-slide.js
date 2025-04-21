/*
// 1. Получаем кнопку из HTML
const button = document.getElementById('btn-slide-1');

// 2. Добавляем обработчик события 'click'
button.addEventListener('click', () => {
		// 3. При клике выводим сообщение
		alert('Вы выбрали: Новый взгляд на привычные вещи! 🎉');
});


const button = document.getElementById('btn-slide-2');

button.addEventListener('click', () => {
		alert('Вы выбрали: Желтый цвет всегда в моде! 🎉');
});


const button = document.getElementById('btn-slide-3');

button.addEventListener('click', () => {
		alert('Вы выбрали: Скидки 25% на летнюю коллекцию! 🎉');
});*/



document.getElementById('btn-slide-1').addEventListener('click', function() {
		alert('Вы выбрали: Новый взгляд на привычные вещи');
});

document.getElementById('btn-slide-2').addEventListener('click', function() {
		alert('Вы выбрали: Желтый цвет всегда в моде');
});

document.getElementById('btn-slide-3').addEventListener('click', function() {
		alert('Вы выбрали: Скидки 25% на летнюю коллекцию');
});
// Запит користувача на введення кількості годин
var hours = parseFloat(prompt("Введіть кількість годин:"));

// Обчислення кількості секунд у годинах
var seconds = hours * 60 * 60;

// Виведення кількості секунд користувачеві через alert
alert(hours + " годин(и) = " + seconds + " секунд");
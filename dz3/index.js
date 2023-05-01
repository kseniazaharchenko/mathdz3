// Запит користувача на введення першого числа
var num1 = parseFloat(prompt("Введіть перше число:"));

// Запит користувача на введення другого числа
var num2 = parseFloat(prompt("Введіть друге число:"));

// Обчислення результатів операцій
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

// Виведення результатів користувачеві через alert
alert("Результати:\n" +
  num1 + " + " + num2 + " = " + sum + "\n" +
  num1 + " - " + num2 + " = " + difference + "\n" +
  num1 + " * " + num2 + " = " + product + "\n" +
  num1 + " / " + num2 + " = " + quotient);
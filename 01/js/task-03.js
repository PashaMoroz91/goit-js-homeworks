"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const password = prompt("Введите пароль");
if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  password !== ADMIN_PASSWORD;
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

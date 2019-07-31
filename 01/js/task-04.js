const credits = 23500;
const pricePerDroid = 3000;
let message;
const totalDroid = prompt(
  "Введите количество дроидов которое вы хотите купить"
);
let totalPrice = pricePerDroid * totalDroid;
let wallet = credits - totalPrice;
if (totalDroid === null) {
  message = "Отменено пользователем!";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${totalDroid} дроидов, на счету осталось ${wallet}.`;
}

console.log(message);

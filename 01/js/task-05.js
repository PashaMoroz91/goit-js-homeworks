"use strict";
const countryInput = prompt("Введите страну доставки!");
const chine = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

if (countryInput === null) {
  console.log("Отменено пользователем");
} else {
  switch (countryInput.toLowerCase()) {
    case "китай":
      console.log(`Доставка в Китай будет стоить ${chine} кредитов!`);
      break;

    case "чили":
      console.log(`Доставка в Чили будет стоить ${chili} кредитов!`);
      break;

    case "австралия":
      console.log(`Доставка в Автсралию будет стоить ${australia} кредитов!`);
      break;

    case "индия":
      console.log(`Доставка в Индию будет стоить ${india} кредитов!`);
      break;

    case "ямайка":
      console.log(`Доставка в Ямайку будет стоить ${jamaica} кредитов!`);
      break;

    default:
      alert("В вашей стране доставка не доступна!");
  }
}

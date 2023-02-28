let country = prompt("Введіть країну для доставки:");
let cost;

switch (country) {
  case "китай":
    cost = 100;
    break;
  case "чилі":
    cost = 250;
    break;
  case "австралія":
    cost = 170;
    break;
  case "індія":
    cost = 80;
    break;
  case "ямайка":
    cost = 120;
    break;
  default:
    alert("В вашу країну немає доставки.");
}

if (cost) {
  alert(`Доставка в ${country} буде коштувати ${cost} кредитів.`);
}

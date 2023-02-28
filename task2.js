var mood = prompt("Який ваш настрій?");


switch (mood) {
  case "щасливий":
    console.log("😊");
    break;
  case "сумний":
    console.log("😢");
    break;
  case "злий":
    console.log("😠");
    break;
  default:
    console.log("😐");
}

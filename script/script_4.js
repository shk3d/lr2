var button = document.getElementById("button");

function betGame() {
  const numberInput = document.getElementById("numberInput");
  if (numberInput.value >= 1) {
    var сoefficient = Math.floor(Math.random() * 11) - 5;
    console.log(сoefficient);
    if (сoefficient <= 0) {
      alert("Ваша ставка не зіграла, ви програли");
    } else if (сoefficient <= 5 || сoefficient > 0) {
      alert(
        "Ваша ставка зіграла, ви виграли " + numberInput.value * сoefficient + " гривень.\n"+"Коефіцієнт: "+сoefficient
      );
    }
    button.disabled = false;
  }else{
    alert("Некоректна сума ставки")
    button.disabled = false;
  }
}
button.addEventListener("click", function () {
  button.disabled = true;
  setTimeout(betGame, 2000);
});
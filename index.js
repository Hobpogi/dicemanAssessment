function random() {

  var firstrandomNum = Math.floor(Math.random() * 6) + 1;
  var secrandomNum = Math.floor(Math.random() * 6) + 1;
  var imagerandom = 'images/dice' + firstrandomNum + '.png';
  var imagerandomTwo = 'images/dice' + secrandomNum + '.png';

  var diceOne = document.querySelectorAll('img')[0];
  var diceTwo = document.querySelectorAll('img')[1];
  diceOne.setAttribute('src', imagerandom);
  diceTwo.setAttribute('src', imagerandomTwo);

  if (firstrandomNum > secrandomNum) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (firstrandomNum < secrandomNum) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector('body').addEventListener('click', function(event) {
  random(this.innerHTML);
});

window.addEventListener('load', function(event) {
  random(this.innerHTML);
});

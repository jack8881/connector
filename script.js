var x = document.getElementById("connect");
if (x.addEventListener) {
  x.addEventListener("click", connect);
}
else if (x.attachEvent) {
  x.attachEvent("onclick", connect);
}

var x = document.getElementById("disconnect");
if (x.addEventListener) {
  x.addEventListener("click", disconnect);
}
else if (x.attachEvent) {
  x.attachEvent("onclick", disconnect);
}

function connect() {
  document.getElementById('cable-left').style.transform = 'translate(60px,-50%)';document.getElementById('cable-right').style.transform = 'translate(-75px,-50%)';
  document.getElementById('led-stripe-60s').style.opacity = '1';
  document.getElementById('background-pattern').style.backgroundImage = "url('background-pattern-overlay.png')";
  document.getElementById('background-pattern').style.backgroundImage = "url('background-pattern.png')";
}
function disconnect() {
  document.getElementById('cable-left').style.transform = 'translate(-60px,-50%)';document.getElementById('cable-right').style.transform = 'translate(10px,-50%)';
  document.getElementById('led-stripe-60s').style.opacity = '0';
  document.getElementById('background-pattern').style.backgroundImage = "url('background-pattern-overlay.png')";
}
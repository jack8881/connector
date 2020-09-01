function check(checked = true) {
  const cbs = document.querySelectorAll('input[name="check"]');
  cbs.forEach((cb) => {
      cb.checked = checked;
  });
}

const btn = document.querySelector('.toggle-state');
btn.onclick = checkAll;

function checkAll() {
  check();
  connect();
  // reassign click event handler
  this.onclick = uncheckAll;
}

function uncheckAll() {
  check(false);
  disconnect();
  // reassign click event handler
  this.onclick = checkAll;
}

function connect() {
document.getElementById('cable-left').style.transform = 'translate(60px,-50%)';document.getElementById('cable-right').style.transform = 'translate(-75px,-50%)';
document.getElementById('led-stripe-60s').style.opacity = '1';
document.getElementById('background-pattern').style.backgroundImage = "url('background-pattern.png')";
}
function disconnect() {
document.getElementById('cable-left').style.transform = 'translate(-60px,-50%)';document.getElementById('cable-right').style.transform = 'translate(10px,-50%)';
document.getElementById('led-stripe-60s').style.opacity = '0';
document.getElementById('background-pattern').style.backgroundImage = "url('background-pattern-overlay.png')";
}
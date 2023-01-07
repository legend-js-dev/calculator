let typed = document.getElementById("calc-typed");
let operation = document.getElementById("calc-operation");

function enter(str) {
  if (typed.innerHTML === "0") typed.innerHTML = str; else typed.innerHTML += str;
  if (operation.innerHTML) operation.innerHTML = "";
}

function clearAll() {
  typed.innerHTML = "0";
  operation.innerHTML = "";
}

function back() {
  typed.innerHTML = typed.innerHTML.substring(0, typed.innerHTML.length - 1);
  if (!typed.innerHTML) typed.innerHTML = "0";
}

function negate() {
  let matches = typed.innerHTML.match(/[0-9]*\.?[0-9]+$/);
  typed.innerHTML = typed.innerHTML.split(matches[0]).join("(-" + matches[0] + ")");
}

function equals() {
  let answer = math.evaluate(typed.innerHTML);
  operation.innerHTML = typed.innerHTML + " =";
  typed.innerHTML = answer;
}

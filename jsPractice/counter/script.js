const counter = document.getElementById("counter");
const decrease = document.getElementById("dec");
const reset = document.getElementById("res");
const increase = document.getElementById("inc");

let val = 0;

decrease.onclick = () => {
val--;
counter.innerHTML = val;
}
reset.onclick = () => {
val = 0;
counter.innerHTML = val;
}
increase.onclick = () => {
val++;
counter.innerHTML = val;
}
const label = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

count = 0

increase.onclick = function(){
    count++;
    label.textContent = count;
}
decrease.onclick = function(){
    if (Number(count) > 0) {
        count--;
        label.textContent = count;
    }
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;
}

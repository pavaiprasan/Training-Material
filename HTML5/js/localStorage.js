var Counter = 0
function incrementCount() {
    var counterContainer = document.getElementById("counterContainer");
    Counter = localStorage.getItem("Counter");
    Counter++;
    localStorage.setItem("Counter", Counter);
    counterContainer.innerHTML = localStorage.Counter;
}
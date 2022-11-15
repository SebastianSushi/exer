function tearDrop () {
    var tearRed = document.getElementById("drop")
    tearRed.classList.toggle("tearred")
}
let timerWH = setTimeout(function tick() {
    var windowOuterWidth = window.outerWidth
    var windowOuterHeight = window.outerHeight;
    var wh =document.getElementById("footWH")
    wh.innerText = ("Width: " + windowOuterWidth + ", " + "Height: " + windowOuterHeight)
    timerId = setTimeout(tick, 200);
  }, 20);
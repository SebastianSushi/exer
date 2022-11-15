function tearDrop () {
    var tearRed = document.getElementById("drop")
    var invisButton = document.getElementById("buttontear")
    invisButton.classList.toggle("buttonimginvis")
    tearRed.classList.toggle("tearred")
}

let timerWH = setTimeout(function tick() {
    var windowOuterWidth = window.outerWidth
    var windowOuterHeight = window.outerHeight;
    var wh = document.getElementById("footWH")
    wh.innerText = ("Width: " + windowOuterWidth + "px, " + "Height: " + windowOuterHeight + "px")
    timerWH = setTimeout(tick, 200);
  }, 20);

function tearDrop () {
    var tearRed = document.getElementById("drop");
    var invisButton = document.getElementById("buttontear");
    setTimeout(() => invisButton.classList.toggle("buttonimginvis"), 2000);
    tearRed.classList.toggle("tearred");
}

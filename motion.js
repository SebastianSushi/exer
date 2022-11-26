function tearDrop () {
    var tearRed = document.getElementById("drop");
    var invisButton = document.getElementById("buttontear");
    invisButton.onanimationend = (event)=>{
        //debugger;
        event.target.style.display = "none";
    };
    setTimeout(() => invisButton.classList.toggle("buttonimginvis"), 3000);
    tearRed.classList.toggle("tearred");
}

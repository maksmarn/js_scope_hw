let blueButton = document.getElementById("blueButton");

blueButton.addEventListener("click", function() { // Anonymous function tied to an event
    let mainHeadingId = document.getElementById("hello");
    mainHeadingId.classList.add("blue-text");

    this.style.display = "none";
});
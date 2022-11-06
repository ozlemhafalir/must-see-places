// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let score = sessionStorage.getItem("score");
    if (score) {
        document.getElementById("chart").innerHTML = score;
    }
});
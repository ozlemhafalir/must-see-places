// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", function () {
        let username = document.getElementById("username").value;
        sessionStorage.setItem("username", username);
        window.location.pathname = "quiz.html";
    });
});

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("start");
    if (startButton) {
        startButton.addEventListener("click", function () {
            let username = document.getElementById("username").value;
            sessionStorage.setItem("username", username);
            window.location.pathname = "quiz.html";
        });
    }
    let username = sessionStorage.getItem("username");
    if (username) {
        let welcomeUsernameDiv = document.getElementById("welcome-username");
        if (welcomeUsernameDiv) {
            welcomeUsernameDiv.innerHTML = "Welcome " + username;
        }
    }
});

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", function () {
        let username = document.getElementById("username").value;
        if (!username) {
            alert('Username is missing');
        } else {
            sessionStorage.setItem("username", username);
            let path = window.location.pathname.split('/');
            path.pop();
            path.push("quiz.html");
            window.location.pathname = path.join("/");
        }
    });
});

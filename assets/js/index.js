// Wait for the DOM to finish loading before adding event listeners to button.
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to start button.
    document.getElementById("start").addEventListener("click", function () {
        let username = document.getElementById("username").value;
        // If the username is not provided, alert user.
        if (!username) {
            alert("Username is missing");
        } else {
            // Store the username in sessionStorage so that it is usable in other pages.
            sessionStorage.setItem("username", username);
            // In Github Pages, the website runs under https://ozlemhafalir.github.io/must-see-places/index.html
            // window.location.pathname = "quiz.html" didn't work.
            // This way, I could get the item after last slash and replace it with "quiz.html"
            let path = window.location.pathname.split("/");
            path[path.length - 1] = "quiz.html";
            window.location.pathname = path.join("/");
        }
    });
});

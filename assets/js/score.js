// Wait for the DOM to finish loading before displaying the score message.
document.addEventListener("DOMContentLoaded", function () {
    let username = sessionStorage.getItem("username");
    if (username) {
        document.getElementById("username").innerHTML = username;
    }
    var correctAnswerCount = sessionStorage.getItem("correctAnswerCount");
    var wrongAnswerCount = sessionStorage.getItem("wrongAnswerCount");
    if (correctAnswerCount > wrongAnswerCount) {
        document.getElementById("score-message").innerHTML = "Congrats!";
    } else {
        document.getElementById("score-message").innerHTML = "Nice try!";
    }
});

// This is used as reference for displaying pie chart:
// https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery/piechart.html
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var correctAnswerCount = sessionStorage.getItem("correctAnswerCount");
    var wrongAnswerCount = sessionStorage.getItem("wrongAnswerCount");
    var data = google.visualization.arrayToDataTable([
        ["Answer", "Count"],
        ["Correct Count", Number(correctAnswerCount)],
        ["Wrong Count", Number(wrongAnswerCount)],
    ]);

    var options = {
        title: "Score",
        is3D: true,
        backgroundColor: "transparent",
        colors: ["#e6693e", "#ec8f6e"],
    };

    var chart = new google.visualization.PieChart(document.getElementById("chart"));
    chart.draw(data, options);
}

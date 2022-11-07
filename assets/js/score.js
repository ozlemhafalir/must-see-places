google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var correctAnswerCount = sessionStorage.getItem("correctAnswerCount");
    var wrongAnswerCount = sessionStorage.getItem("wrongAnswerCount");
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Count'],
        ['Correct Count', Number(correctAnswerCount)],
        ['Wrong Count', Number(wrongAnswerCount)],
    ]);

    var options = {
        title: 'Score',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById("chart"));
    chart.draw(data, options);
}

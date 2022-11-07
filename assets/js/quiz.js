// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
let i;
let correctAnswerCount;
let wrongAnswerCount;
document.addEventListener("DOMContentLoaded", function () {
    let username = sessionStorage.getItem("username");
    if (username) {
        document.getElementById("welcome-username").innerHTML = "Welcome " + username;
    }
    document.getElementById("next-button").addEventListener("click", function () {
        checkAnswer();
        i++;
        setPlace();
    });
    runGame();
});
const places = [
    { "place": "Angkor Wat", "images": ["/assets/img/angkor wat/pexels-ann-zzz-8128721.jpg", "/assets/img/angkor wat/pexels-james-wheeler-1534057.jpg"] },
    { "place": "Istanbul", "images": ["/assets/img/istanbul/anna-berdnik-0n0AHB1fgTQ-unsplash.jpg", "/assets/img/istanbul/pexels-caner-cankisi-3999943.jpg"] },
    { "place": "Macchu Pichu", "images": ["/assets/img/macchu pichu/federico-scarionati-BKWXBGl3zis-unsplash.jpg", "/assets/img/macchu pichu/wells-baum-ZAzzCYlLPo4-unsplash.jpg"] },
    { "place": "Masai Mara", "images": ["/assets/img/masai mara/henrik-hansen-nayS2zjJpGw-unsplash.jpg", "/assets/img/masai mara/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"] },
]
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption.value == i) {
        correctAnswerCount++;
    } else {
        wrongAnswerCount++;
    }
    selectedOption.checked = false;
}
function setPlace() {
    if (i < places.length) {
        let imgSrc = places[i]["images"][0];
        document.getElementById("image").setAttribute("src", imgSrc);
        let options = getRandomOptions(i);
        document.getElementById("option1").value = options[0];
        document.getElementById("option2").value = options[1];
        document.getElementById("option3").value = options[2];
        document.getElementById("option4").value = options[3];
        document.getElementById("option1-label").innerHTML = places[options[0]]["place"];
        document.getElementById("option2-label").innerHTML = places[options[1]]["place"];
        document.getElementById("option3-label").innerHTML = places[options[2]]["place"];
        document.getElementById("option4-label").innerHTML = places[options[3]]["place"];
    } else {
        sessionStorage.setItem("correctAnswerCount", correctAnswerCount);
        sessionStorage.setItem("wrongAnswerCount", wrongAnswerCount);
        document.location.pathname = "score.html";
    }
}
function getRandomOptions(correctOptionIndex) {
    var result = [correctOptionIndex];
    while (result.length < 4) {
        var rand = Math.floor(Math.random() * places.length);
        if (result.indexOf(rand) === -1) {
            result.push(rand);
        }
    }
    result.shift();
    var randomIndex = Math.floor(Math.random() * 4);
    result.splice(randomIndex, 0, correctOptionIndex);
    return result;
}
function runGame() {
    i = 0;
    correctAnswerCount = 0;
    wrongAnswerCount = 0;
    setPlace();
}


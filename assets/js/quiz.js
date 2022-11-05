// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
let i;
document.addEventListener("DOMContentLoaded", function () {
    let username = sessionStorage.getItem("username");
    if (username) {
        document.getElementById("welcome-username").innerHTML = "Welcome " + username;
    }
    document.getElementById("next-button").addEventListener("click", function () {
        i++;
        setPlace();
    });
    runGame();
});
const places = [
    {"place": "Angkor Wat", "images" : ["/assets/img/angkor wat/pexels-ann-zzz-8128721.jpg","/assets/img/angkor wat/pexels-james-wheeler-1534057.jpg"]},
    {"place": "Istanbul", "images" : ["/assets/img/istanbul/anna-berdnik-0n0AHB1fgTQ-unsplash.jpg","/assets/img/istanbul/pexels-caner-cankisi-3999943.jpg"]},
    {"place": "Macchu Pichu", "images" : ["/assets/img/macchu pichu/federico-scarionati-BKWXBGl3zis-unsplash.jpg","/assets/img/macchu pichu/wells-baum-ZAzzCYlLPo4-unsplash.jpg"]},
    {"place": "Masai Mara", "images" : ["/assets/img/masai mara/henrik-hansen-nayS2zjJpGw-unsplash.jpg","/assets/img/masai mara/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"]},
]
function setPlace() {
    if (i < places.length) {
        let imgSrc = places[i]["images"][0];
        document.getElementById("image").setAttribute("src", imgSrc); 
    } else {
        document.location.pathname = "score.html";
    }
}
function runGame() {
    i = 0; 
    setPlace();
}

// This is the index that stores which question are we in.
let i;
// This is generated when quiz starts, it is list of numbers between 0-number of places
let quizRandomIndexes;
let correctAnswerCount;
let wrongAnswerCount;
const places = [
    { "place": "Angkor Wat", "images": ["assets/img/angkor wat/pexels-ann-zzz-8128721.jpg", "assets/img/angkor wat/pexels-james-wheeler-1534057.jpg"] },
    { "place": "Istanbul", "images": ["assets/img/istanbul/anna-berdnik-0n0AHB1fgTQ-unsplash.jpg", "assets/img/istanbul/pexels-caner-cankisi-3999943.jpg"] },
    { "place": "Macchu Pichu", "images": ["assets/img/macchu pichu/federico-scarionati-BKWXBGl3zis-unsplash.jpg", "assets/img/macchu pichu/wells-baum-ZAzzCYlLPo4-unsplash.jpg"] },
    { "place": "Masai Mara", "images": ["assets/img/masai mara/henrik-hansen-nayS2zjJpGw-unsplash.jpg", "assets/img/masai mara/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"] },
    { "place": "Amsterdam", "images": ["assets/img/amsterdam/pexels-dewi-madden-967292.jpg", "assets/img/amsterdam/pexels-jean-carlo-emer-2901480.jpg", "assets/img/amsterdam/pexels-shane-aldendorff-851039.jpg"] },
    { "place": "Angkor Wat", "images": ["assets/img/angkor wat/pexels-ann-zzz-8128721.jpg", "assets/img/angkor wat/pexels-james-wheeler-1534057.jpg", "assets/img/angkor wat/pexels-julia-volk-5769409.jpg"] },
    { "place": "Antarctica", "images": ["assets/img/antarctica/pexels-claudio-mota-9638303.jpg", "assets/img/antarctica/pexels-pixabay-46235.jpg", "assets/img/antarctica/pexels-pixabay-48178.jpg", "assets/img/antarctica/pexels-pixabay-53389.jpg"] },
    { "place": "Auckland", "images": ["assets/img/auckland/pexels-christopher-solly-6345035.jpg", "assets/img/auckland/pexels-liam-spicer-5342974.jpg"] },
    { "place": "Bali", "images": ["assets/img/bali/pexels-aron-visuals-1643130.jpg", "assets/img/bali/pexels-max-ravier-3348363.jpg"] },
    { "place": "Beijing", "images": ["assets/img/beijing/pexels-magda-ehlers-2846076.jpg", "assets/img/beijing/pexels-zhang-kaiyv-3603453.jpg"] },
    { "place": "Budapest", "images": ["assets/img/budapest hungary/pexels-nextvoyage-3962765.jpg", "assets/img/budapest hungary/pexels-timi-keszthelyi-2350351.jpg"] },
    { "place": "Buenos Aires", "images": ["assets/img/buenos aires/pexels-fabrizio-velez-13340705.jpg", "assets/img/buenos aires/pexels-sabrina-ibarra-13543306.jpg"] },
    { "place": "Cairo", "images": ["assets/img/cairo/pexels-alex-azabache-3214972.jpg", "assets/img/cairo/pexels-alex-azabache-3243027.jpg", "assets/img/cairo/pexels-mouad-mabrouk-3689863.jpg", "assets/img/cairo/pexels-murat-şahin-3522880.jpg"] },
    { "place": "Cape Town", "images": ["assets/img/cape town/pexels-taryn-elliott-3889695.jpg", "assets/img/cape town/pexels-taryn-elliott-4873264.jpg"] },
    { "place": "Cartagena", "images": ["assets/img/cartagena/pexels-nick-wehrli-12470921.jpg", "assets/img/cartagena/pexels-promadik-travel-11642163.jpg"] },
    { "place": "Cinque Terre", "images": ["assets/img/cinque terre/pexels-henry-bauer-4987272.jpg", "assets/img/cinque terre/pexels-pixabay-164407.jpg"] },
    { "place": "Copenhagen", "images": ["assets/img/copenhagen/pexels-daniel-jurin-3117216.jpg", "assets/img/copenhagen/pexels-maria-orlova-4947124.jpg"] },
    { "place": "Dubrovnik", "images": ["assets/img/dubrovnik/pexels-rachel-claire-4846608.jpg", "assets/img/dubrovnik/pexels-veeterzy-580897.jpg"] },
    { "place": "Edinburgh", "images": ["assets/img/edinburgh/pexels-david-rico-2682675.jpg", "assets/img/edinburgh/pexels-mohamed-ishaq-villan-12121851.jpg"] },
    { "place": "Hanoi", "images": ["assets/img/hanoi vietnam/pexels-huy-phan-1422386.jpg", "assets/img/hanoi vietnam/pexels-huy-phan-1422391.jpg", "assets/img/hanoi vietnam/pexels-huy-phan-1437610.jpg", "assets/img/hanoi vietnam/pexels-huy-phan-1437618.jpg"] },
    { "place": "Havana", "images": ["assets/img/havana/pexels-ingo-joseph-12180258.jpg", "assets/img/havana/pexels-mehmet-turgut-kirkgoz-11362555.jpg", "assets/img/havana/pexels-mehmet-turgut-kirkgoz-11609177.jpg"] },
    { "place": "Hong Kong", "images": ["assets/img/hong kong/pexels-brayden-law-1738994.jpg", "assets/img/hong kong/pexels-harry-shum-6568250.jpg"] },
    { "place": "Jaipur", "images": ["assets/img/jaipur/pexels-parv-choudhary-2870167.jpg", "assets/img/jaipur/pexels-rj-singh-5355767.jpg"] },
    { "place": "Kruger National Park", "images": ["assets/img/kruger national park/pexels-frans-van-heerden-631317.jpg", "assets/img/kruger national park/pexels-ruben-verla-11153531.jpg"] },
    { "place": "Las Vegas", "images": ["assets/img/las vegas/pexels-david-guerrero-2945692.jpg", "assets/img/las vegas/pexels-enric-cruz-lópez-6039247.jpg"] },
    { "place": "Lisbon", "images": ["assets/img/lisbon/pexels-lisa-fotios-1534560.jpg", "assets/img/lisbon/pexels-lisa-fotios-1545510.jpg", "assets/img/lisbon/pexels-lisa-fotios-1559908.jpg"] },
    { "place": "London", "images": ["assets/img/london/pexels-chait-goli-1796715.jpg", "assets/img/london/pexels-dominika-gregušová-672532.jpg", "assets/img/london/pexels-marianna-89432.jpg", "assets/img/london/pexels-pixabay-460672.jpg"] },
    { "place": "Manhattan", "images": ["assets/img/manhattan/pexels-arthur-brognoli-2260786.jpg", "assets/img/manhattan/pexels-life-of-pix-8218.jpg"] },
    { "place": "Marrakesh", "images": ["assets/img/marrakesh/pexels-manon-6376611.jpg", "assets/img/marrakesh/pexels-moussa-idrissi-9143655.jpg", "assets/img/marrakesh/pexels-taryn-elliott-4502965.jpg"] },
    { "place": "Matterhorn", "images": ["assets/img/matterhorn switzerland/pexels-dajana-reçi-14182933.jpg", "assets/img/matterhorn switzerland/pexels-george-koutsougeras-11095235.jpg"] },
    { "place": "Maui", "images": ["assets/img/maui/pexels-james-wheeler-3936144.jpg", "assets/img/maui/pexels-roberto-nickson-2559941.jpg"] },
    { "place": "Moscow", "images": ["assets/img/moscow/pexels-pixabay-161276.jpg", "assets/img/moscow/pexels-pixabay-372297.jpg", "assets/img/moscow/pexels-vierro-3629813.jpg"] },
    { "place": "Paris", "images": ["assets/img/paris/pexels-pixabay-460740.jpg", "assets/img/paris/pexels-timea-kadar-2130610.jpg"] },
    { "place": "Paro Valley", "images": ["assets/img/paro valley bhutan/pexels-ming-zimik-4525420.jpg", "assets/img/paro valley bhutan/pexels-rabea-brok-9982525.jpg"] },
    { "place": "Petra", "images": ["assets/img/petra/pexels-valdemaras-d-1998165.jpg", "assets/img/petra/pexels-vincent-ma-janssen-3258239.jpg", "assets/img/petra/pexels-vincent-pelletier-720254.jpg"] },
    { "place": "Rio De Janeiro", "images": ["assets/img/rio de janeiro/pexels-athena-1804177.jpg", "assets/img/rio de janeiro/pexels-florencia-potter-351283.jpg", "assets/img/rio de janeiro/pexels-monica-silvestre-1118877.jpg"] },
    { "place": "Rome", "images": ["assets/img/rome/cristina-gottardi-I1Lv2yX67GI-unsplash.jpg", "assets/img/rome/mathew-schwartz-s87bBFZviAU-unsplash.jpg"] },
    { "place": "San Francisco", "images": ["assets/img/san francisco/pexels-belle-co-672916.jpg", "assets/img/san francisco/pexels-quintin-gellar-612949.jpg", "assets/img/san francisco/pexels-tae-fuller-1141853.jpg"] },
    { "place": "Santorini", "images": ["assets/img/santorini/pexels-pixabay-161275.jpg", "assets/img/santorini/pexels-pixabay-221532.jpg", "assets/img/santorini/pexels-pixabay-259585.jpg"] },
    { "place": "Singapore", "images": ["assets/img/singapore/pexels-adhitya-andanu-1561863.jpg", "assets/img/singapore/pexels-ingo-joseph-1682794.jpg", "assets/img/singapore/pexels-palu-malerba-2426546.jpg"] },
    { "place": "Sydney", "images": ["assets/img/sydney/pexels-brett-stone-2845013.jpg", "assets/img/sydney/pexels-mudassir-ali-1536436.jpg"] },
    { "place": "The Grand Canyon", "images": ["assets/img/the grand canyon /jad-limcaco-JEq_2UJoTtg-unsplash.jpg", "assets/img/the grand canyon /jad-limcaco-JEq_2UJoTtg-unsplash.jpg"] },
    { "place": "The Maldives", "images": ["assets/img/the maldives/pexels-asad-photo-maldives-1287460.jpg", "assets/img/the maldives/pexels-asad-photo-maldives-1483053.jpg"] },
    { "place": "Tokyo", "images": ["assets/img/tokyo/pexels-pixabay-248195.jpg", "assets/img/tokyo/pexels-pixabay-161251.jpg", "assets/img/tokyo/pexels-janko-ferlic-590478.jpg", "assets/img/tokyo/pexels-aleksandar-pasaric-1510610.jpg"] },
    { "place": "Vancouver", "images": ["assets/img/vancouver/pexels-brayden-law-2096700.jpg", "assets/img/vancouver/pexels-jeremy-lee-11424500.jpg", "assets/img/vancouver/pexels-stephen-tam-11972153.jpg"] }
]
// Wait for the DOM to finish loading before adding event listener to button.
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to next-button.
    document.getElementById("next-button").addEventListener("click", function () {
        // When user click next button, first check the answer, then, increment the index and set the next place.
        checkAnswer();
        i++;
        setPlace();
    });
    runGame();
});
// Function for checking the answer.
function checkAnswer() {
    let selectedOption = document.querySelector('input[name="options"]:checked');
    // Compare the user selected option with the index of place we are in.
    if (selectedOption.value == quizRandomIndexes[i]) {
        correctAnswerCount++;
    } else {
        wrongAnswerCount++;
    }
    selectedOption.checked = false;
}
// When the index is incremented, we set values for image and options using this function.
function setPlace() {
    if (i < quizRandomIndexes.length) {
        let placeIndex = quizRandomIndexes[i];
        let placeImages = places[placeIndex]["images"];
        let randomImageIndex = Math.floor(Math.random() * placeImages.length);
        let imgSrc = placeImages[randomImageIndex];
        document.getElementById("image").setAttribute("src", imgSrc);
        let options = getRandomOptions(placeIndex);
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
        let path = window.location.pathname.split("/");
        path.pop();
        path.push("score.html");
        window.location.pathname = path.join("/");
    }
}
// For each question, 3 randomly selected and 1 correct place is generated.
function getRandomOptions(correctOptionIndex) {
    // This is used for random unique number generation: https://stackoverflow.com/a/2380113
    var result = [correctOptionIndex];
    while (result.length < 4) {
        var rand = Math.floor(Math.random() * places.length);
        if (result.indexOf(rand) === -1) {
            result.push(rand);
        }
    }
    // When numbers are generated, the correct answer is shuffled before returning.
    result.shift();
    var randomIndex = Math.floor(Math.random() * 4);
    result.splice(randomIndex, 0, correctOptionIndex);
    return result;
}
// When the quiz starts, 10 random places are selected for the session.
function getRandomPlaces() {
    // This is used for random unique number generation: https://stackoverflow.com/a/2380113
    var result = [];
    while (result.length < 10) {
        var rand = Math.floor(Math.random() * places.length);
        if (result.indexOf(rand) === -1) {
            result.push(rand);
        }
    }
    return result;
}
// This function is run with setting initial values.
function runGame() {
    quizRandomIndexes = getRandomPlaces();
    i = 0;
    correctAnswerCount = 0;
    wrongAnswerCount = 0;
    setPlace();
}

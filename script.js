const noButtonPhrases = [
    "Mnnnnn", 
    "Ereeee", 
    "Tey gn teyy", 
    "Pleaseeeeee", 
    "Tncheleeee", 
    "ENE LANCHI GIZE ENDI NEGNN??", 
    "Ice creammmm gezalshalew", 
    "Abebam gezalshalew",
    "Tntyeyeye",
    "Endalkonetetsh wa!",
    "Time to say yesss",
];

// keeps track of the number of times the user has clicked the no button
let numberOfTimesClicked = 0; 
// this gives us access to the no button and the yes button
const yesButton = document.getElementById("yes-button"); 
const noButton = document.getElementById("no-button");
// we also need to get the DOM element for the gif
const gif = document.getElementById("gif-container");
// we need to access the DOM element for the main text
const mainText = document.getElementById("main-text");

noButton.addEventListener("click", () => {
    numberOfTimesClicked++;
    if (numberOfTimesClicked >= noButtonPhrases.length) {
        numberOfTimesClicked = 0;
    }; 
    noButton.textContent
 
 = noButtonPhrases[numberOfTimesClicked];
    yesButton.style.fontSize = `${numberOfTimesClicked * 10 + 20}px`;
 
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute'; // set position to absolute
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    yesButton.style.display = "none";
    noButton.style.display = "none";
    gif.src = "https://media1.tenor.com/m/rnRu6f0ZR34AAAAC/kisses-soulmate.gif";
    mainText.textContent = "yay! Bu ena Bo forever :)";
});
import encode from "./encode.js";
import decode from "./decode.js";

const messageWriting = document.getElementById("message");
const messageDisplay = document.getElementById("translation");
messageWriting.addEventListener("input", () => {
    // on récupère ce qui s'écrit et
    // on le traduit au fur et à mesure
    messageDisplay.textContent = encode(messageWriting.value);
});

const morseMessage = document.getElementById("morse");
const decypherDisplay = document.getElementById("decyphering");
morseMessage.addEventListener("input", () => {
    // on récupère ce qui s'écrit et
    // on le traduit au fur et à mesure
    decypherDisplay.textContent = decode(morseMessage.value);
});
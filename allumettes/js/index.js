let gamerRound      = 1;
let gamersNumber    = 2;
let matchesNumber   = 1;
let matchesLeft     = 50;
document.querySelector("#game").style.visibility = "hidden";
document.querySelector("footer").style.display = "none";
let gamersChoice    = document.querySelector("#gamers_choice");

// affichage des allumettes
function createMatches() {
    let matchBox = document.querySelector("#matches_display");
    // on efface les allumettes s'il en reste
    while(matchBox.firstElementChild) {
        matchBox.firstElementChild.remove();
    }
    // on crée les allumettes
    for (let i = 0; i < 50; i++) {
        let matchImg        = (i < matchesNumber) ? "_lit" : "";
        matchImg            = (i >= matchesLeft) ? "_burnt" : matchImg;
        let matchAlt        = (matchImg == "_lit") ? "allumée" : "éteinte";
        matchAlt            = (matchImg == "_burnt") ? "brûlée" : matchAlt;
        let newMatch	    = document.createElement("img");
        newMatch.className  = "match_display";
        newMatch.src        = "assets/images/match" + matchImg + ".png";
        newMatch.alt        = "allumette " + matchAlt;
        matchBox.appendChild(newMatch);
    }
}

// réinitialisation
function relaunchGame(gamersNb) {
    gamerRound      = 1;
    gamersNumber    = gamersNb;
    matchesNumber   = 1;
    matchesLeft     = 50;
    createMatches(matchesLeft);
    gamersChoice.value = gamersNumber;
    document.querySelector("#gamers_nb").textContent        = gamersNumber;
    document.querySelector("#gamer_round").textContent      = gamerRound;
    document.querySelector("#matches_choice").textContent   = matchesNumber;
    document.querySelector("#matches_left").textContent     = matchesLeft;
    document.querySelector("main").style.display = "inherit";
    document.querySelector("footer").style.display = "none";
}
relaunchGame(gamersNumber);


// sélecteur du nombre de joueurs
gamersChoice.addEventListener("change", () => {
    document.querySelector("#gamers_nb").textContent = gamersChoice.value;
});

// nouvelle partie
document.querySelector("#game_start").addEventListener("click", () => {
    // on récupère le nombre de joueurs choisis
    gamersNumber = gamersChoice.value;
    // on réinitialise la partie
    relaunchGame(gamersNumber);
    document.querySelector("#game").style.visibility = "visible";
});

// sélecteur du nombre d'allumettes
document.querySelector("#matches_decrement").addEventListener("click", () => {
    matchesNumber = (matchesNumber > 1) ? --matchesNumber : matchesNumber;
    document.querySelector("#matches_choice").textContent = matchesNumber;
    createMatches();
});
document.querySelector("#matches_increment").addEventListener("click", () => {
    matchesNumber = ((matchesNumber < 6) && (matchesNumber < matchesLeft)) ? ++matchesNumber : matchesNumber;
    document.querySelector("#matches_choice").textContent = matchesNumber;
    createMatches();
});
document.querySelector("#matches_remove").addEventListener("click", () => {
    matchesLeft     -= matchesNumber;
    matchesNumber   = 1;
    document.querySelector("#matches_choice").textContent   = 1;
    document.querySelector("#matches_left").textContent     = matchesLeft;
    // partie gagnée
    if (matchesLeft == 0) {
        document.querySelector("#game_winner").textContent = ("Le joueur n°" + gamerRound + " a gagné la partie");
        document.querySelector("main").style.display = "none";
        document.querySelector("footer").style.display = "inherit";
    } else {
        gamerRound = (gamerRound < gamersNumber) ? ++gamerRound : 1;
        document.querySelector("#gamer_round").textContent     = gamerRound;
        createMatches();
    }
});

// fin de partie
document.querySelector("#game_result").addEventListener("click", () => {
    relaunchGame(2);
    document.querySelector("#game").style.visibility = "hidden";
});
console.log("test");
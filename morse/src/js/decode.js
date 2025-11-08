const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

// on sépare les caractères du message envoyé en un tableau de caractères
function getMorseCharacterList(message) {
	// on utilise l'espace pour séparer les chaines de morses repérensant 1 caractère
    const CharactersList = message.split(" ");
    return CharactersList;
}
// on traduit le caractère envoyé
// ou on le laisse à l'identique s'il n'a pas de traduction prévue
function translateMorseCharacter(character) {
    // on traduit les caractères disponibles dans la base de données
    let translatedCharacter = (morseToLatin[character] !== undefined) ? morseToLatin[character] : character;
	// un slash est utilisé pour spécifier un espace entre les mots
    translatedCharacter = (translatedCharacter === "/") ? " " : translatedCharacter;
    return translatedCharacter;
}
// on traduit et ré-écrit le message
function decode(text) {
    const CharactersList = getMorseCharacterList(text);
    let translatedMessage = "";
    for (let i = 0; i < CharactersList.length; i++) {
        translatedMessage += translateMorseCharacter(CharactersList[i]);
    }
    return translatedMessage;
}
export default decode;
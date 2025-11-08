const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

// on sépare les caractères du message envoyé en un tableau de caractères
function getLatinCharacterList(message) {
    const CharactersList = message.split("");
    return CharactersList;
}
// on traduit le caractère envoyé
// ou on le laisse à l'identique s'il n'a pas de traduction prévue
function translateLatinCharacter(character) {
    // la base de données n'est qu'en majuscule
    // on évite de lui envoyer des clefs en minuscule
    character = character.toUpperCase();
    // on traduit les caractères disponibles dans la base de données
    const translatedCharacter = (latinToMorse[character] !== undefined) ? latinToMorse[character] : character;
    return translatedCharacter;
}
// on traduit et ré-écrit le message
function encode(text) {
    const CharactersList = getLatinCharacterList(text);
    let translatedMessage = "";
    for (let i = 0; i < CharactersList.length; i++) {
        translatedMessage += translateLatinCharacter(CharactersList[i]);
    }
    return translatedMessage;
}
export default encode;
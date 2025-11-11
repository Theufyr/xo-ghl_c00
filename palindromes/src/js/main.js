// Étape 1
function isValidDate(date) {
    const dateInfos = date.split("/");
    return !isNaN(new Date(`${dateInfos[2]}/${dateInfos[1]}/${dateInfos[0]}`));
}
console.log("Étape 1");
console.log("03/04/2001", isValidDate("03/04/2001"));
console.log("03/14/2001", isValidDate("03/14/2001"));
// Étape 2
function isPalindrome(text, date) {
    let checkReturn = false;
    if (date) {
        const dateInfos = text.split("/");
        text = `${dateInfos[0]}${dateInfos[1]}${dateInfos[2]}`;
    }
    const textSplit = text.split("");
    const midText = (textSplit.length / 2);
    if (Math.floor(midText) !== midText) {
        textSplit.splice(midText, 1);
    }
    const firstPart    = textSplit.splice(0, midText).reverse().join("");
    const secondPart   = textSplit.join("");
    checkReturn = (firstPart == secondPart) ? true : false;
    return checkReturn;
}
console.log("Étape 2");
console.log("11/02/2011", isPalindrome("11/02/2011", true));
console.log("03/04/2001", isPalindrome("03/04/2001", true));
// Étape 3
function getNextPalindromes(nb) {
    const today = new Date();
    let year  = today.getFullYear();
    for (let i = 0; i < nb; i++) {
        let checkDate = true;
        while (checkDate) {
            year++;
            if (year > 9999) {
                checkDate = false;
            }
            const daymonth = `${year}`.split("").reverse();
            const compare = daymonth.join("");
            const newDate = `${daymonth[0]}${daymonth[1]}/${daymonth[2]}${daymonth[3]}/${year}`;
            if (isValidDate(newDate)) {
                checkDate = false;
                console.log(newDate);
            }
        }
    }
}
console.log("Étape 3");
getNextPalindromes(8);
// Étape 4
console.log("Étape 4");
console.log("kayak", isPalindrome("kayak", false));
console.log("hannah", isPalindrome("hannah", false));
console.log("canard", isPalindrome("canard", false));
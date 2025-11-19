// Étape 1
function isValidDate(date) {
    const dateInfos = date.split("/");
    return !isNaN(new Date(`${dateInfos[2]}/${dateInfos[1]}/${dateInfos[0]}`));
//    // alternative :
//    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
//    const match = date.match(regex);
//    if (!match) {
//        return false;
//    }
//    // si date = "03/04/2001"; alors match[0] = "03/04/2001";
//    const day = match[1];
//    const month = match[2];
//    const year = match[3];
//    if (year < 1000 || year > 9999) {
//        return false;
//    }
//    if (month < 1 || month > 12) {
//        return false;
//    }
//    if (!maxDaysInMonth(day, month)) {
//        return false;
//    }
//    return true;
}
// // alternative :
// function maxDaysInMonth(day, month) {
//    const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//    const dayInCheckMonth = dayInMonth[month - 1];
//    return day <= dayInCheckMonth;
// }
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
//    // alternative
//    const onlyDigits = (date) ? text.replace("/", "") : text;
//    const reversed = onlyDigits.split("").reverse().join("");
//    return onlyDigits === reversed;
//    return checkReturn;
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
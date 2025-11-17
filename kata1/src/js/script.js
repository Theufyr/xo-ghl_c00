quoteCount = 0;
addNewQuote = false;
const citation = {
    author: "Simone de Beauvoir",
    text: "On ne naît pas femme, on le devient."
    };
let allQuotes = [citation];

function storageUse(action) {
        if (action == "set") {
            localStorage.setItem("allQuotes", JSON.stringify(allQuotes));
        }
        if (action == "get") {
            if (localStorage.getItem("allQuotes") !== null) {
                return JSON.parse(localStorage.getItem("allQuotes"));
            } else {
                return null;
            }
        }
        if (action == "clear") {
            localStorage.clear();
            quoteCount = 0;
            allQuotes = [citation];
            quotesDisplay();
        }
}

function quotesDisplay() {
    const getQuotes = storageUse("get", "");
    allQuotes = (getQuotes !== null) ? getQuotes : allQuotes;
    let oldElements = document.getElementById("quote-list");
    while (oldElements.firstChild) {
        oldElements.removeChild(oldElements.firstChild);
    }
    allQuotes.forEach(savedQuote => {
        addQuote(savedQuote.text, savedQuote.author);
    });
};

function addQuote(quote, author) {
    const quoteDisplay = document.createElement("div");
    quoteDisplay.className = "quote";

    const pQuote = document.createElement("p");
    pQuote.className = "text";
    pQuote.textContent = `"${quote}"`;
    quoteDisplay.appendChild(pQuote);

    const pAuthor = document.createElement("p");
    pAuthor.className = "author";
    pAuthor.textContent = author;
    quoteDisplay.appendChild(pAuthor);

    document.getElementById("quote-list").appendChild(quoteDisplay);

    quoteCount += 1;
    pluralQuote = (quoteCount > 1) ? "s" : "";
    document.getElementById("count").innerText = quoteCount + " citation" + pluralQuote;

    saveQuote = {
            author: author,
            text: quote
        };
    if (addNewQuote) {
        allQuotes.push(saveQuote);
        storageUse("set", "");
    }

    document.getElementById("input_quote").value = "";
    document.getElementById("input_author").value = "";
}

const errorMessage = document.getElementById("error");
errorMessage.style.visibility = "hidden";

quotesDisplay();

document.getElementById("form_button").addEventListener('click', (event) => {
        event.preventDefault();
        const quoteInput = document.getElementById("input_quote").value;
        const authorInput = document.getElementById("input_author").value;
        errorMessage.style.visibility = "hidden";
        if ((quoteInput == "") || (authorInput == "")) {
            errorMessage.style.visibility = "visible";
        } else {
            addNewQuote = true;
            addQuote(quoteInput, authorInput);
            addNewQuote = false;
        }
    });

document.getElementById("clear_button").addEventListener('click', (event) => {
        event.preventDefault();
        storageUse("clear", "");
    });
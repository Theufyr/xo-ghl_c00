function addQuote(quote, author) {
    const quoteDisplay = document.createElement("div");
    quoteDisplay.className = "quote";
    const pQuote = document.createElement("p");
    pQuote.className = "text";
    pQuote.textContent = `"${quote}"`;
    quoteDisplay.appendChild(pQuote);
    const pAuthor = document.createElement("p");
    pAuthor.className = "text";
    pAuthor.textContent = author;
    quoteDisplay.appendChild(pAuthor);
    document.getElementById("quote-list").appendChild(quoteDisplay);
}

document.getElementById("form_button").addEventListener('click', (event) => {
        event.preventDefault();
        const quoteInput = document.getElementById("input_quote").value;
        const authorInput = document.getElementById("input_author").value;
        addQuote(quoteInput, authorInput);
    });
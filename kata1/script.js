document.getElementById("form_button").addEventListener('click', (event) => {
        event.preventDefault();
        console.log(document.getElementById("input_author").value);
        console.log(document.getElementById("input_quote").value);
    });
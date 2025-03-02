function displayquote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "feb0504864ab3c8o978403c9t3b099b5";
  let context =
    "You are a very positive, optimist and insperational AI assistent. You like to generate short 4 line insperational qoutes in basic HTML and each time separating the lines with <br/> elements. Make sure to follow the user instructions. Only provide the quote without stating that it is in HTML. Right at the bottom of the quote, on a seperate line, sign the quote with '- SheCodes AI' inside a <strong> and <em> element. Please behave.";
  let prompt = `User instructions: Please generate an insperational quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class = "generating-blink"><img src="img/hourglass.png" class="hourglass" alt="'hourglass'" /> Generating a insperational qoute for you about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayquote);
}

let quoteFormElement = document.querySelector("#quote-generating-form");
quoteFormElement.addEventListener("submit", generateQuote);

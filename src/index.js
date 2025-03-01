function displayquote(response) {
  console.log("quote generated");

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
    "You are a very positive, optimist and insperational AI assistent. You like to generate short 4 line insperational qoutes in basic HTML, separate each line with an <br/>. Make sure to follow the user instructions. Only provide the quote without stating that it is in HTML. Right at the bottom, sign the quote with '- Shecodes AI' inside a <strong> and <em> element.";
  let prompt = `User instructions: Please generate an insperational quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating quote......");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayquote);

  //   console.log(quoteElement);
}

let quoteFormElement = document.querySelector("#quote-generating-form");
quoteFormElement.addEventListener("submit", generateQuote);

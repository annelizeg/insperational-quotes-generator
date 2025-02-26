function generateQuote(event) {
  event.preventDefault();

  let quoteElement =
    " It is often the small steps, not the giant leaps, that bring about the most lasting change.";

  new Typewriter("#quote", {
    strings: quoteElement,
    autoStart: true,
    delay: 30,
  });

  //   console.log(quoteElement);
}

let quoteFormElement = document.querySelector("#quote-generating-form");
quoteFormElement.addEventListener("submit", generateQuote);

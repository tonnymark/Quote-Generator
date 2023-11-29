const quote_Api = 'https://api.quotable.io/random';

const generateQuote = document.getElementById('generate_quote');
generateQuote.addEventListener('click', fetchQuote);

const autor_name = document.querySelector('.author_name');

const quoteArea = document.getElementById('quote-holder');

async function fetchQuote() {
  try {
    const response = await fetch(quote_Api);
    const data = await response.json();
    quoteArea.innerHTML = data.content;
    autor_name.innerText = '... ' + data.author;
  } catch (error) {
    console.log(error);
  }
}

fetchQuote();

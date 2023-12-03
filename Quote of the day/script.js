const quote_Api = 'https://api.quotable.io/random';

const generateQuote = document.getElementById('generate_quote');
generateQuote.addEventListener('click', fetchQuote);
const autor_name = document.querySelector('.author_name');
const quoteArea = document.getElementById('quote-holder');

async function fetchQuote() {
  try {
    quoteArea.innerText = 'Loading...';
    generateQuote.innerText = 'Loading...';
    const response = await fetch(quote_Api);
    const data = await response.json();
    quoteArea.innerText = data.content;
    autor_name.innerText = '~  ' + data.author;
    generateQuote.innerText = 'Get new quote';
  } catch (error) {
    quoteArea.innerText = 'Something goes wrong. Try again !';
    autor_name.innerText = '~ not available ';
    console.log(error);
  }
}

fetchQuote();

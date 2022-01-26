let apiQuotes = [];

// show new quote
function newQuote() {
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.trunc(Math.random() * apiQuotes.length)];
  console.log(quote);

  // pick a random quote from localQuotes array
  // const quote = localQuotes[Math.trunc(Math.random() * localQuotes.length)];
  // console.log(quote);
}

// get quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch error here
  }
}

// on load
getQuotes();
// newQuote();

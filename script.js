const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');

// Get Quotes From an API

let apiQuotes =[];

// Show new Quotes
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quotes);
    // Check if author field is none  and replace it with 'Unknown'
    if (!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }

    // Check if the quote text is really long than apply the long-quote css
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

}

async function get_quotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        //console.log(apiQuotes);
        newQuote() ;
    }catch(err) {
        /*
        const quotes = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        console.log(quotes);
         */
    }
}
// On load
get_quotes();

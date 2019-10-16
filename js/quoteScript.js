/* Get DOM elements */
const firstQuoteBtn = document.getElementById('firstQuoteBtn');
const howManyQuoteOne = document.getElementById('howManyQuoteOne');
const popularQuotesField = document.getElementById('popularQuotesField');


/* Popular Quote */
const popuparQuoteArray = [
  {
    quote: 'Don’t cry because it’s over, smile because it happened.',
    name: 'Dr. Seuss'
  },
  {
    quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
    name: 'Dr. Seuss'
  },
  {
    quote: 'The fear of death follows from the fear of life. A man who loves fully is prepared to die at any time.',
    name: 'Mark Twain'
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines, Sail away from the safe harbor, Catch the trade winds in your sails. Explore. Dream. Discover.',
    name: 'Mark Twain'
  },
  {
    quote: 'Remember, happiness doesn’t depend upon who you are or what you have, it depends solely upon what you think.',
    name: 'Dale Carnegie'
  },
  {
    quote: 'We are all in the gutter, but some of us are looking at the stars.',
    name: 'Oscar Wilde'
  },
  {
    quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.',
    name: 'Thomas A. Edison'
  },
  {
    quote: 'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.',
    name: 'Dr. Seuss'
  },
  {
    quote: 'The only man who never makes mistakes is the man who never does anything.',
    name: 'Theodore Roosevelt'
  },
  {
    quote: 'The secret of getting ahead is getting started.',
    name: 'Mark Twain'
  },
  {
    quote: 'We’re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness – and call it love – true love.',
    name: 'Robert Fulghum'
  },
  {
    quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
    name: 'Lao Tzu'
  }
];

/* Get array of unique idexes */
// Array of unique index for quote
let indexArrays = [];

// Generate array of unique index numbers
// (selectInput, selectQuoteArray)
const getIndexes = (quantity, quote) => {
  indexArrays = [];
  let uniqueIndexes = [];

  while(indexArrays.length < quantity.value) {
    // Add number to array
    const selectIndexes = () => {
      let number = Math.floor(Math.random() * quote.length);
      indexArrays.push(number);
    };
    selectIndexes();
    uniqueIndexes = Array.from(new Set(indexArrays));
    indexArrays = uniqueIndexes;
  } 
};

/* Generate quote */
const setQuote = (whereTo, quateArray, quantity) => {
  // Clear all the previous quotes
  if(whereTo.childElementCount > 0) {
    whereTo.innerHTML = '';
  }

  // Generate ul element
  const quoteLists = document.createElement('ul');
  quoteLists.setAttribute('class','quoteLists');
  whereTo.append(quoteLists);

  // Generate quote to DOM
  const generateQuote = (x) => {
    const quoteItem = document.createElement('li');
    const quoteName = document.createElement('strong');
    quoteLists.append(quoteItem);
    quoteLists.append(quoteName);
    quoteItem.textContent = quateArray[x].quote;
    quoteName.textContent = '- ' + quateArray[x].name;
  };

  // Generate unique indexes
  getIndexes(quantity, quateArray);

  // Generate DOM element for each quote
  for(let index of indexArrays) {
    generateQuote(index);
  }

  console.log(indexArrays);
};

/* Event Listeners */
firstQuoteBtn.onclick = function(e) {
  e.preventDefault();
  setQuote(popularQuotesField, popuparQuoteArray, howManyQuoteOne);
}

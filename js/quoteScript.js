/* Get DOM elements */
const firstQuoteBtn = document.getElementById('firstQuoteBtn');
const howManyQuoteOne = document.getElementById('howManyQuoteOne');
const popularQuotesField = document.getElementById('popularQuotesField');

const secondQuoteBtn = document.getElementById('secondQuoteBtn');
const howManyQUoteTwo = document.getElementById('howManyQuoteTwo');
const programQuotesField = document.getElementById('programQuotesField');
 

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

/* Programming Quote */
const programmingQuoteArray = [
  {
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    name: 'Anonymous'
  },
  {
    quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    name: 'Louis Srygley'
  },
  {
    quote: 'Before software can be reusable it first has to be usable.',
    name: 'Ralph Johnson'
  },
  {
    quote: 'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    name: 'Anonymous'
  },
  {
    quote: 'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
    name: 'Oktal'
  },
  {
    quote: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
    name: 'Gerald Weinberg'
  },
  {
    quote: 'There are two ways to write error-free programs; only the third one works.',
    name: 'Alan J. Perlis'
  },
  {
    quote: 'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.',
    name: 'Anonymous'
  },
  {
    quote: 'It’s not a bug – it’s an undocumented feature.',
    name: 'Anonymous'
  },
  {
    quote: 'One man’s crappy software is another man’s full-time job.',
    name: 'Jessica Gaston'
  },
  {
    quote: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    name: 'Doug Linder'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    name: 'Martin Golding'
  },
  {
    quote: 'Programming is like sex. One mistake and you have to support it for the rest of your life.',
    name: 'Michael Sinz'
  },
  {
    quote: 'Deted code is debugged code.',
    name: 'Jeff Sickel'
  },
  {
    quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
    name: 'Edward V Berard'
  },
  {
    quote: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    name: 'Edsger Dijkstra'
  },
  {
    quote: 'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work."',
    name: 'Anonymous'
  },
  {
    quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.',
    name: 'Rick Cook'
  },
  {
    quote: 'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes.',
    name: 'Keith Braithwaite'
  },
  {
    quote: 'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
    name: 'Bjarne Stroustrup'
  },
  {
    quote: 'In order to understand recursion, one must first understand recursion.',
    name: 'Anonymous'
  },
  {
    quote: 'The cheapest, fastest, and most reliable components are those that aren’t there.',
    name: 'Gordon Bell'
  },
  {
    quote: 'The best performance improvement is the transition from the nonworking state to the working state.',
    name: 'J. Osterhout'
  },
  {
    quote: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    name: 'Seymour Cray'
  },
  {
    quote: 'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
    name: 'Mosher’s Law of Software Engineering'
  },
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

  // console.log(indexArrays);
};

/* Event Listeners */
firstQuoteBtn.onclick = function(e) {
  e.preventDefault();
  setQuote(popularQuotesField, popuparQuoteArray, howManyQuoteOne);
}

secondQuoteBtn.onclick = e => {
  e.preventDefault();
  setQuote(programQuotesField, programmingQuoteArray, howManyQUoteTwo);
};
/* Get DOM elements */
const firstGeneratorBtn = document.querySelector('.firstGeneratorBtn');
const firstGenerator = document.querySelector('.firstGenerator');


/* First Generator */
const verbArray = [
  "sleeping",
  "rolling",
  "eating Pho",
  "playing Mario",
  "watching Netflix",
  "doodling"
];

const placeArray = [
  "on the top of Mt.Fuji",
  "on the top of Eiffel Tower",
  "on the beach",
  "on the Moon",
  "inside Space Shuttle"
];

const withWhoArray = [
  "thirty kittens",
  "twenty puppies",
  "fifty rabbits",
  "moose",
  "bear",
  "flock of sheep",
  "pack of wolves"
];

const setGenerator = () => {
  firstGenerator.textContent = generateQuote();
};

const generateQuote = () => {
  let x = Math.floor(Math.random() * verbArray.length);
  let y = Math.floor(Math.random() * placeArray.length);
  let z = Math.floor(Math.random() * withWhoArray.length);

  return "Kaoru is " + verbArray[x] + " " + placeArray[y] + " with " + withWhoArray[z] + ".";
};

firstGeneratorBtn.addEventListener('click', setGenerator);

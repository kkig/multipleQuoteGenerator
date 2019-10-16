/* Get DOM elements */
const firstGeneratorBtn = document.querySelector('.firstGeneratorBtn');
const firstGenerator = document.querySelector('.firstGenerator');


/* First Generator */
const verbArray = [
  "sleeping",
  "rolling",
  "eating Pho",
  "playing Mario",
  "watching Netflix"
];

const placeArray = [
  "on the top of Mt.Fuji",
  "on the top of Eiffel Tower",
  "on the beach",
  "on the Moon",
  "inside Space Shuttle"
];

const withWhoArray = [
  "Thirty Kittens",
  "Twenty Puppies",
  "Fifty of Rabbits",
  "Moose",
  "Bear"
];

const setGenerator = () => {
  let x = Math.floor(Math.random() * verbArray.length);
  let y = Math.floor(Math.random() * placeArray.length);
  let z = Math.floor(Math.random() * withWhoArray.length);

  firstGenerator.textContent = "Kaoru is " + verbArray[x] + " " + placeArray[y] + " with " + withWhoArray[z] + ".";
};

firstGeneratorBtn.addEventListener('click', setGenerator);

//Variables
const button = document.querySelector("#btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".person");

//array for quote
const allQuote = [
  {
    quote:
      '"The best way to find yourself is to lose yourself in the service of others."',
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "'To live is the rarest thing in the world. Most people exist, that is all.'",
    author: "Oscar Wilde",
  },
  {
    quote: "'It is never too late to be what you might have been.'",
    author: "George Eliot",
  },
  {
    quote:
      "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "'Pain is inevitable. Suffering is optional.'",
    author: "Haruki Murakami",
  },
  {
    quote:
      "'All the world's a stage, and all the men and women merely players.'",
    author: "William Shakespeare",
  },
  {
    quote: "'Be kind, for everyone you meet is fighting a hard battle.'",
    author: "Plato",
  },
  {
    quote: "'Don't let your happiness depend on something you may lose.'",
    author: "C.S. Lewis",
  },
  {
    quote:
      "'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.'",
    author: "Voltaire",
  },
  {
    quote: "'Life is tough my darling, but so are you.'",
    author: "Stephanie Bennett Henry",
  },
];

button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * allQuote.length);

  quote.innerText = allQuote[random].quote;
  author.innerText = "-" + allQuote[random].author;
});

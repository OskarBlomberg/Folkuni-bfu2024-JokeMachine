const programmingJokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "How do you comfort a JavaScript developer? You console them.",
  "Why did the CSS developer leave the restaurant? Because it had no class.",
  "Why did the JavaScript developer go missing? Because he didn't know when to return.",
  "Why did the HTML tag go to the party? Because it wanted to break the line.",
  "Why do JavaScript developers wear glasses? Because they don't C#.",
  "Why don't programmers like to use inline styles? Because they want to be classy.",
  "Why did the CSS selector break up with the HTML element? It found someone more specific.",
  "Why did the CSS developer apply for a job? They wanted to get a position.",
];

let jokes = [];
let activeJokes = programmingJokes.map((content, index) => {
  //Mappa över skämten till en annan array för att kunna behålla originalnumreringen.

  let [question, answer] = content.split(/(?<=\?)\s+/);
  /* regex-förklaring: (<?= ... ) är en "positive lookbehind asserteion" som säger att innan splitten så ska det finnas ett "\?", alltså "break-out" till riktigt frågetecken. Sedan ska splitten ske på ett mellanslag, "\s", och slutligen inkluderas flera mellanslag i det som ska splittas bort med plustecknet. */

  return {
    nr: index + 1,
    question,
    answer,
  };
});

function getJoke() {
  if (activeJokes.length === 0) {
    console.log("No more jokes available!");
    return null;
  }

  let jokeIndex = Math.floor(Math.random() * activeJokes.length);
  let joke = activeJokes[jokeIndex];

  activeJokes.splice(jokeIndex, 1); //Från index där skämet finns tas 1 skämt bort.
  jokes.push(joke);
  return joke;
}

function tellJoke(amount) {
  for (let i = 0; i < amount; i++) {
    let joke = getJoke();
    if (joke) {
      console.log(
        `Joke #${joke.nr}
    Question: ${joke.question}
    Answer: ${joke.answer}
    `
      );
    } else {
      break; // Avbryt om det tar slut på skämt.
    }
  }
}

console.log(`
############################
Welcome to the joke factory!
Let me tell you something about programming:

`);
tellJoke(2);

console.log("Thank you, come again!");

// Create an array that contains the words in the sentence
let sentence = [
  "The ",
  "walrus ",
  "danced ",
  "through ",
  "the ",
  "trees ",
  "in ",
  "the ",
  "light ",
  "of ",
  "the ",
  "moon "
];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(sentence, punc) {
  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = " ";
  //   console.log('i',i,'i+1',i+1,'i % 3',i%3,'i+1%3',(i + 1) %3);
  for (let i = 0; i < sentence.length; i++) {
    // Concatenate the new word onto buildMeUp
    // buildMeUp += sentence[i];
    // let buildSentence = buildMeUp[i];
    // buildMeUp[sentence];

    //
    //     If the current value of `i` divided by 3 has no
    //     remainder, add an exclamation point to the end of
    //     the word and then concatenate it to `buildMeUp`.
    if ([i + 1] % 3 === 0) {
      buildMeUp += sentence[i] + punc;
      //   console.log('i',i,'i+1',i+1,'i % 3',i%3,'i+1%3',(i + 1) %3);
    } else {
      buildMeUp += sentence[i];
    }
    console.log(buildMeUp);
    //     Otherwise, just concatenate the word itself.
    //

    // Print buildMeUp to the console
  }
}

// Invoke the function and pass in the array

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

// I want to use a 4 asterisks
// addExcitement(sentence, "*", 4)
addExcitement(sentence, "*");

// Get elements from the HTML document
const storyPrompt = document.getElementById("storyPrompt");
const readingLevel = document.getElementById("readingLevel");
const generateButton = document.getElementById("generateButton");
const storyDisplay = document.getElementById("storyDisplay");

// Define a function to generate the story
function generateStory() {
    // Get the text input and age level from the input fields
    const inputText = storyPrompt.value;
    const ageLevel = readingLevel.value;
  
    // Check if the input fields are empty
    if (!inputText || !ageLevel) {
      storyField.innerHTML = "Please fill in all fields";
      return;
    }
  
    // Use rita.js to generate a random sentence based on the input text
    const markov = RiTa.markov(2);
    markov.loadText(inputText);
    const randomSentence = markov.generateSentences(1)[0];
  
    // Generate the story based on the age level
    let story;
    if (ageLevel === "1") {
      story = "Once upon a time, " + randomSentence + " The end.";
    } else if (ageLevel === "2") {
      story = "In a land far, far away, " + randomSentence + " The end.";
    } else if (ageLevel === "3") {
      story = "It was a dark and stormy night. " + randomSentence + " The end.";
    } else {
      story = "Invalid age level selected";
    }
  
    // Display the generated story
    storyField.innerHTML = story;
  }
  

// Attach an event listener to the generate button
generateButton.addEventListener("click", generateStory);

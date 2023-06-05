document.getElementById("answer").textContent = "Ask a question and press the magic 8-ball for an answer!";

var questionInput = document.getElementById("searchbox"); // Change the id to match the HTML
var magicBall = document.querySelector(".magic-8-ball");
var ball = document.querySelector(".magic-8-ball");

let isShaking = false;

ball.addEventListener("click", getAnswer);

function getAnswer() {
  const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again",
    "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

  if (isShaking || questionInput.value.trim() === "") {
    return;
  }

  // Play the sound effect
  const sound = document.getElementById("sound");
  sound.currentTime = 0; // Reset the audio playback time to the beginning
  sound.play();

  // Add the shaking class for animation
  isShaking = true;
  ball.classList.add("shaking");

  // Remove the shaking class after a short delay
  setTimeout(function () {
    ball.classList.remove("shaking");
    isShaking = false;
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    document.getElementById("answer").textContent = answer;
    document.getElementById("searchbox").value = ""; // Reset the prompt to empty
  }, 500); // Adjust the delay to match the duration of the animation

  //document.getElementById("answer").innerHTML = randomAnswer;
  document.getElementById("sound").play();
}

// Adds background selector
var backgroundSelector = document.getElementById("background-selector");

backgroundSelector.addEventListener("change", function () {
  var selectedValue = this.value;
  document.getElementById("intro-title").style.color = "#e0f2fe";
  if (selectedValue === "gradient") {
    document.body.classList.remove("stars", "magicball");
  } else if (selectedValue === "magicball") {
    document.body.classList.remove("stars");
    document.body.classList.add("magicball");
    document.getElementById("intro-title").style.color = "#6366f1";
  } else if (selectedValue === "stars") {
    document.body.classList.remove("magicball");
    document.body.classList.add("stars");
  }
});

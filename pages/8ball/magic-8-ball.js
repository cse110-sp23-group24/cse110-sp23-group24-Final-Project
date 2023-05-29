document.getElementById("answer").textContent = "Ask a question and press the magic 8-ball for an answer!";

var questionInput = document.getElementById("searchbox"); // Change the id to match the HTML
var magicBall = document.querySelector(".magic-8-ball");
var ball = document.querySelector(".magic-8-ball");

let isShaking = false;

ball.addEventListener("click", getAnswer);

function getAnswer() {
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

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

  // add a listener to the question input field to enable/disable the magic ball
  // questionInput.addEventListener("input", () => {
  //   if (questionInput.value.trim() === "") {
  //     magicBall.classList.add("disabled");
  //   } else {
  //     magicBall.classList.remove("disabled");
  //   }
  // });

  // disable the magic ball initially
  // magicBall.classList.add("disabled");

  // add a listener to the magic ball to prevent clicking if disabled or shaking
  // magicBall.addEventListener("click", () => {
  //   if (magicBall.classList.contains("disabled") || isShaking) {
  //     return;
  //   }
  //   getAnswer();
  // });

  document.getElementById("answer").innerHTML = randomAnswer;
  document.getElementById("sound").play();
}

// Adds background selector
var backgroundSelector = document.getElementById("background-selector");

backgroundSelector.addEventListener("change", function () {
  var selectedValue = this.value;
  if (selectedValue === "gradient") {
    document.body.classList.remove("stars", "magicball");
  } else if (selectedValue === "magicball") {
    document.body.classList.remove("stars");
    document.body.classList.add("magicball");
  } else if (selectedValue === "stars") {
    document.body.classList.remove("magicball");
    document.body.classList.add("stars");
  }
});

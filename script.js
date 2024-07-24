
const quizzes = [
  {
    question: "Which of these animals is a marsupial?",
    answers: [
      { text: "Koala", isCorrect: false },
      { text: "Kangaroo", isCorrect: true },
      { text: "Polar bear", isCorrect: false },
    ],
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: [
      { text: "Berlin", isCorrect: false },
      { text: "Brazil ", isCorrect: true },
      { text: "Paris", isCorrect: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Mississippi", isCorrect: false },
      { text: "Nile", isCorrect: true },
      { text: "Amazon", isCorrect: false },
    ],
  },
  {
    question: "Which continent is the largest by land area?",
    answers: [
      { text: "Europe", isCorrect: false },
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: true },
    ],
  },
  {
    question: "Who wrote the play Hamlet?",
    answers: [
      { text: "Jane Austen", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "Charles Dickens", isCorrect: false },
    ],
  },
  {
    question: " What is the capital city of Australia?",
    answers: [
      { text: "Canberra", isCorrect: true },
      { text: "Melbourne", isCorrect: false },
      { text: "Sydney", isCorrect: false },
    ],
  },
  {
    question: "Which of these is a mammal?",
    answers: [
      { text: "Crocodile", isCorrect: false },
      { text: "Snake", isCorrect: false },
      { text: " Dolphin", isCorrect: true },
    ],
  },
  {
    question: " Who painted the Mona Lisa?",
    answers: [
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Vincent van Gogh", isCorrect: false },
    ],
  },
  {
    question: "Who invented the World Wide Web (WWW)?",
    answers: [
      { text: "Steve Jobs", isCorrect: false },
      { text: "Tim Berners-Lee ", isCorrect: true },
      { text: "Bill Gates", isCorrect: false },
    ],
  },
  {
    question: "What is the smallest bone in the human body?",
    answers: [
      { text: " Stapes", isCorrect: true },
      { text: " Femur", isCorrect: false },
      { text: "Tibia", isCorrect: false },
    ],
  },
  {
    question: "Which sport is associated with Wimbledon?",
    answers: [
      { text: "Tennis", isCorrect: true },
      { text: "Golf", isCorrect: false },
      { text: "snowboarding", isCorrect: false },
    ],
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    answers: [
      { text: "Margaret Thatcher", isCorrect: true },
      { text: "Angela Merkel", isCorrect: false },
      { text: "Theresa May", isCorrect: false },
    ],
  },
  {
    question: "Which band released the album The Dark Side of the Moon?",
    answers: [
      { text: "The Beatles", isCorrect: false },
      { text: " Pink Floyd", isCorrect: true },
      { text: "Led Zeppelin", isCorrect: false },
    ],
  },
  {
    question: "Which disease is caused by the Epstein-Barr virus?",
    answers: [
      { text: "Infectious mononucleosis", isCorrect: true },
      { text: "Tuberculosis", isCorrect: false },
      { text: "Malaria", isCorrect: false },
    ],
  },
  {
    question: "Who wrote the novel 1984?",
    answers: [
      { text: "Aldous Huxley", isCorrect: false },
      { text: " George Orwell", isCorrect: true },
      { text: " J.R.R. Tolkien", isCorrect: false },
    ],
  },
  {
    question: "Which engineer is known for designing the Eiffel Tower?",
    answers: [
      { text: "Nikola Tesla", isCorrect: false },
      { text: "Gustave Eiffel", isCorrect: true },
      { text: " Thomas Edison", isCorrect: false },
    ],
  },
  {
    question: "In which year did the Chernobyl nuclear disaster occur?",
    answers: [
      { text: "1991", isCorrect: false },
      { text: "1986", isCorrect: true },
      { text: "1979", isCorrect: false },
    ],
  },
  {
    question: "Who discovered insulin?",
    answers: [
      { text: "Louis Pasteu", isCorrect: false },
      { text: "Alexander Fleming", isCorrect: false },
      { text: "Frederick Banting and Charles Best", isCorrect: true },
    ],
  },
  {
    question: "Which athlete has won the most Olympic gold medals in history?",
    answers: [
      { text: "Carl Lewis", isCorrect: false },
      { text: " Michael Phelps", isCorrect: true },
      { text: "Usain Bolt", isCorrect: false },
    ],
  },
  {
    question: "Who was the longest-serving President of the United States?",
    answers: [
      { text: "Ronald Reagan", isCorrect: false },
      { text: "John F. Kennedy", isCorrect: false },
      { text: " Franklin D. Roosevelt", isCorrect: true },
    ],
  },
  {
    question: "Which country has the most Grand Slam titles in women's tennis history?",
    answers: [
      { text: "Germany", isCorrect: false },
      { text: "Russia", isCorrect: false },
      { text: "United States ", isCorrect: true },
    ],
  },
  {
    question: "Which physicist formulated the theory of general relativity?",
    answers: [
      { text: "Albert Einstein", isCorrect: true },
      { text: "Isaac Newton", isCorrect: false },
      { text: "Niels Bohr", isCorrect: false },
    ],
  },
  {
    question: "Which chemical element has the highest melting point?",
    answers: [
      { text: "Platinum", isCorrect: false },
      { text: "Titanium", isCorrect: false },
      { text: "Tungsten", isCorrect: true },
    ],
  },
  {
    question: "Which ancient wonder of the world was located in present-day Iraq?",
    answers: [
      { text: "Colossus of Rhodes", isCorrect: false },
      { text: "Lighthouse of Alexandria", isCorrect: false },
      { text: "Hanging Gardens of Babylon", isCorrect: true },
    ],
  },
  {
    question: "Which chess piece can only move diagonally?",
    answers: [
      { text: "Rook", isCorrect: false },
      { text: "Bishop", isCorrect: true },
      { text: "Knight", isCorrect: false },
    ],
  },
  {
    question: "Who was the first person to reach both the North Pole and the South Pole?",
    answers: [
      { text: "Roald Amundsen", isCorrect: true },
      { text: "Robert Falcon Scott", isCorrect: false },
      { text: "Ernest Shackleton", isCorrect: false },
    ],
  },
  {
    question: "Which country has the largest proven oil reserves?",
    answers: [
      { text: "Venezuela ", isCorrect: true },
      { text: "Saudi Arabia", isCorrect: false },
      { text: "Russia", isCorrect: true },
    ],
  },
  {
    question: "What is the world's longest river that does not empty into the sea?",
    answers: [
      { text: "Nile River", isCorrect: false },
      { text: "Yangtze River", isCorrect: false },
      { text: "Amazon River", isCorrect: true },
    ],
  },
  {
    question: "What is the oldest continuously inhabited city in the world?",
    answers: [
      { text: "Athens,Greece", isCorrect: false },
      { text: "Damascus, Syria", isCorrect: true },
      { text: "Jerusalem, Israel", isCorrect: false },
    ],
  },
  {
    question: "Which planet has the highest mountain in the solar system?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Venus", isCorrect: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const home = document.querySelector(".home");
const startBtn = document.getElementById("start");
const quiz = document.querySelector(".quiz");
const quizheading = document.getElementById("question");
const quizul = document.getElementById("answers");
const nextBtn = document.getElementById("next-button");
const result = document.querySelector(".result");
const Score = document.getElementById("score");
const RetryBtn = document.getElementById("try");

startBtn.addEventListener("click", () => {
  home.classList.toggle("close");
  quiz.classList.toggle("open");
  showQuestion();
});

function showQuestion() {
  const currentQuestion = quizzes[currentQuestionIndex];
  quizheading.innerHTML = currentQuestion.question;
  quizul.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer.text;
    li.onclick = () => correctAnswer(answer.isCorrect, li);
    quizul.appendChild(li);
  });

  nextBtn.style.display = "none";
}

function correctAnswer(isCorrect, element) {
  if (isCorrect) {
    score++;
    element.style.backgroundColor = "lightgreen";
  } else {
    element.style.backgroundColor = "lightcoral";
  }

  Array.from(quizul.children).forEach((child) => {
    child.onclick = null;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizzes.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quiz.classList.remove("open");
  result.style.display = "block";
  Score.innerHTML = `${score} / ${quizzes.length}`;
}

RetryBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  result.style.display = "none";
  home.style.display = "block";
});

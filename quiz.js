const questions = [
  { q: "Someone claiming to be from your bank asks for your OTP on a call. What do you do?",
    options: ["Share it, since they are from the bank", "Hang up and never share the OTP", "Share only half of it", "Ask them to call back later and then share it"],
    answer: 1,
    why: "Banks never ask for your OTP. Anyone who does is a fraudster." },
  { q: "Which of these is the strongest password?",
    options: ["ravi1234", "Ravi@2005", "Tr#9mKp!vL2x4", "password"],
    answer: 2,
    why: "It is long and mixes upper and lower case, numbers and symbols, and has no personal details." },
  { q: "To receive money through UPI, you must enter your UPI PIN.",
    options: ["True", "False"],
    answer: 1,
    why: "A PIN is only needed to send money. If someone asks you to enter it to receive money, it is a scam." },
  { q: "A message says you won a prize but must pay a small fee to claim it. Best action?",
    options: ["Pay the fee", "Ignore it and report the message", "Forward it to friends", "Reply with your details"],
    answer: 1,
    why: "Real prizes never ask for fees. This is a classic advance-fee scam." },
  { q: "What does two-step verification do?",
    options: ["Adds a second proof, such as an OTP, on top of your password", "Makes your phone faster", "Deletes old messages", "Hides your profile"],
    answer: 0,
    why: "Even if someone learns your password, they cannot log in without the second step." },
  { q: "You are at a cafe using free public Wi-Fi. What is safest?",
    options: ["Do net banking as usual", "Avoid sensitive logins, or use mobile data instead", "Share your password with the cafe staff", "Turn off your screen lock"],
    answer: 1,
    why: "Public Wi-Fi can be monitored, so keep banking and password entry for trusted networks." },
  { q: "An SMS from your 'bank' has a link like bank-secure-login.xyz. What should you do?",
    options: ["Click it quickly before the account is blocked", "Open the bank's official app or website yourself", "Send the link to a friend to check", "Reply to the SMS"],
    answer: 1,
    why: "Fake sites copy real ones. Always go to the official app or website yourself." },
  { q: "You think you have been the victim of an online fraud in India. What should you do first?",
    options: ["Wait a few days", "Report it quickly, for example on 1930 or cybercrime.gov.in", "Delete all the messages", "Post about it and wait for replies"],
    answer: 1,
    why: "Quick reporting gives the best chance of stopping the transfer. Keep the messages as evidence." }
];

let index = 0;
let score = 0;
let answered = false;

const progress = document.getElementById("progress");
const qBox = document.getElementById("question");
const optBox = document.getElementById("options");
const expl = document.getElementById("explain");
const nextBtn = document.getElementById("nextQ");
const quizArea = document.getElementById("quizArea");
const finalBox = document.getElementById("final");

function showQuestion() {
  answered = false;
  const q = questions[index];
  progress.textContent = "Question " + (index + 1) + " of " + questions.length;
  qBox.textContent = q.q;
  optBox.innerHTML = "";
  expl.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach(function (text, i) {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = text;
    b.onclick = function () { choose(i, b); };
    optBox.appendChild(b);
  });
}

function choose(i, b) {
  if (answered) return;
  answered = true;
  const q = questions[index];

  if (i === q.answer) {
    score++;
    b.classList.add("correct");
    expl.textContent = "Correct! " + q.why;
  } else {
    b.classList.add("wrong");
    optBox.children[q.answer].classList.add("correct");
    expl.textContent = "Not quite. " + q.why;
  }

  nextBtn.textContent = (index === questions.length - 1) ? "See my score" : "Next question";
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = function () {
  index++;
  if (index < questions.length) showQuestion();
  else showResult();
};

function showResult() {
  quizArea.style.display = "none";
  finalBox.style.display = "block";
  document.getElementById("scoreText").textContent =
    "Your score: " + score + " out of " + questions.length;

  let msg;
  if (score >= 7) msg = "Excellent! You have strong cyber safety habits.";
  else if (score >= 4) msg = "Good start. Revisit the Phishing and Scams pages to fill the gaps.";
  else msg = "Please read through the pages on this site again, then retry the quiz.";
  document.getElementById("scoreMsg").textContent = msg;
}

document.getElementById("restart").onclick = function () {
  index = 0;
  score = 0;
  finalBox.style.display = "none";
  quizArea.style.display = "block";
  showQuestion();
};

showQuestion();
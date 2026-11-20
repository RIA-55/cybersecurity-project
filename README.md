# cybersecurity-project
1. index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cyber Safety Awareness</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Stay Safe Online</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="#">Passwords</a>
      <a href="#">Phishing</a>
      <a href="#">Quiz</a>
    </nav>
  </header>

  <main>
    <div class="hero">
  <h2>Think before you click.</h2>
  <p>Learn how to spot scams, protect your passwords and stay safe online.</p>
  <a class="btn" href="quiz.html">Take the Quiz</a>
</div>

<h2>What is cybersecurity?</h2>
<p>Cybersecurity means protecting your phone, accounts and
   money from people who try to misuse them online.</p>
  </main>

  <footer>Field Project, YCMOU BCA</footer>
</body>
</html>

2. style.css
   :root {
  --bg: #0b1020;
  --panel: #141b34;
  --panel-2: #1b2447;
  --text: #e6ebff;
  --muted: #9aa6d1;
  --accent: #00e5ff;
  --accent-2: #7c4dff;
  --good: #2ee59d;
  --bad: #ff5c7a;
}

* { box-sizing: border-box; }

body {
  font-family: "Segoe UI", Arial, sans-serif;
  margin: 0;
  color: var(--text);
  line-height: 1.6;
  background:
    radial-gradient(circle at 15% 0%, #1d2a6b 0%, transparent 40%),
    radial-gradient(circle at 90% 20%, #3a1d6b 0%, transparent 35%),
    var(--bg);
  min-height: 100vh;
}

header {
  background: linear-gradient(135deg, var(--accent-2), #0b6bcb 60%, var(--accent));
  padding: 22px 20px 16px;
  text-align: center;
  box-shadow: 0 4px 25px rgba(0, 229, 255, 0.25);
}
header h1 { margin: 0 0 12px; font-size: 2rem; letter-spacing: 1px; }

nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  transition: background 0.2s, transform 0.2s;
}
nav a:hover { background: rgba(255, 255, 255, 0.35); transform: translateY(-2px); }

main { padding: 28px 20px; max-width: 820px; margin: auto; }

h2 { color: var(--accent); font-size: 1.8rem; margin-top: 0; }
h3 { color: #b9c4ff; }
p, li { color: var(--text); }
ul { padding-left: 22px; }
li { margin-bottom: 6px; }

footer {
  text-align: center;
  padding: 18px;
  margin-top: 30px;
  color: var(--muted);
  border-top: 1px solid #26305c;
}

/* Inputs and buttons */
input {
  padding: 10px 12px;
  width: 100%;
  max-width: 360px;
  font-size: 16px;
  color: var(--text);
  background: var(--panel);
  border: 1px solid #34407a;
  border-radius: 8px;
}
input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 10px rgba(0, 229, 255, 0.4); }

button {
  padding: 10px 20px;
  margin-right: 8px;
  cursor: pointer;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent-2), #0b6bcb);
  transition: transform 0.15s, box-shadow 0.15s;
}
button:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(124, 77, 255, 0.45); }

#result { font-weight: bold; font-size: 1.2rem; color: var(--accent); }

/* Phishing page */
#msgbox {
  background: var(--panel);
  border-left: 4px solid var(--accent);
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 0 8px 8px 0;
}

/* Cards (Scams and Social Media pages) */
.card {
  background: var(--panel);
  border: 1px solid #2a3570;
  border-radius: 12px;
  padding: 14px 18px;
  margin-bottom: 18px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0, 229, 255, 0.18); }
.card h3 { margin-top: 0; color: var(--accent); }
.tip { color: var(--good); font-weight: bold; }

/* Quiz */
.opt {
  display: block;
  width: 100%;
  text-align: left;
  margin: 8px 0;
  padding: 12px 14px;
  background: var(--panel);
  color: var(--text);
  border: 1px solid #34407a;
  border-radius: 8px;
  font-size: 16px;
}
.opt:hover { background: var(--panel-2); border-color: var(--accent); }
.correct { background: rgba(46, 229, 157, 0.18); border-color: var(--good); }
.wrong { background: rgba(255, 92, 122, 0.18); border-color: var(--bad); }

/* Home page extras */
.hero {
  background: linear-gradient(135deg, var(--panel), var(--panel-2));
  border: 1px solid #2a3570;
  border-radius: 16px;
  padding: 30px 24px;
  text-align: center;
  margin-bottom: 22px;
}
.hero h2 { font-size: 2.1rem; margin-bottom: 8px; }
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 12px 26px;
  color: white;
  text-decoration: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  font-weight: bold;
}

3. script.js
   const box = document.getElementById("pwd");
const result = document.getElementById("result");

box.addEventListener("input", function () {
  const p = box.value;
  let score = 0;

  if (p.length >= 12) score++;
  if (/[a-z]/.test(p) && /[A-Z]/.test(p)) score++;
  if (/[0-9]/.test(p)) score++;
  if (/[^A-Za-z0-9]/.test(p)) score++;

  if (p === "") result.textContent = "";
  else if (score <= 1) result.textContent = "Weak";
  else if (score <= 3) result.textContent = "Medium";
  else result.textContent = "Strong";
});

4. password.html
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Password Safety</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Stay Safe Online</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="passwords.html">Passwords</a>
      <a href="#">Phishing</a>
      <a href="#">Quiz</a>
    </nav>
  </header>

  <main>
    <h2>Password Safety</h2>
    <h3>Tips for a strong password</h3>
    <ul>
      <li>Use at least 12 characters.</li>
      <li>Mix letters, numbers and symbols.</li>
      <li>Never use your name, birth date or "123456".</li>
      <li>Use a different password for every account.</li>
      <li>Never share your password or OTP with anyone.</li>
    </ul>

    <h3>Test your password habits</h3>
    <p>Type a sample password below. It is checked in your browser only and is never stored or sent anywhere.</p>
    <input type="text" id="pwd" placeholder="Type a sample password">
    <p id="result"></p>
  </main>

  <footer>Field Project, YCMOU BCA</footer>
  <script src="script.js"></script>
</body>
</html>

5. phishing.html
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Phishing Awareness</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Stay Safe Online</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="passwords.html">Passwords</a>
      <a href="phishing.html">Phishing</a>
      <a href="#">Quiz</a>
    </nav>
  </header>

  <main>
    <h2>Phishing Awareness</h2>
    <p>Phishing is when someone pretends to be a bank, company or
       friend to trick you into sharing passwords, OTPs or money.</p>

    <h3>Warning signs</h3>
    <ul>
      <li>Urgent threats ("your account will be blocked today").</li>
      <li>Links that don't match the real website name.</li>
      <li>Requests for OTP, PIN or password.</li>
      <li>Spelling mistakes and unknown sender numbers.</li>
    </ul>

    <h3>Real or Fake?</h3>
    <div id="msgbox"></div>
    <button onclick="answer(true)">Real</button>
    <button onclick="answer(false)">Fake</button>
    <p id="feedback"></p>
    <button id="nextBtn" onclick="nextMsg()">Next message</button>
  </main>

  <footer>Field Project, YCMOU BCA</footer>
  <script src="phishing.js"></script>
</body>
</html>

6. phishing.js
   const messages = [
  { text: "Dear customer, your KYC has expired. Update now at http://bank-kyc-update.example or your account will be blocked today.",
    real: false,
    why: "Urgent threat plus a suspicious link. Banks don't ask you to update KYC through links in SMS." },
  { text: "Your OTP for the transaction of Rs 500 is 482913. Do not share it with anyone.",
    real: true,
    why: "It's a normal OTP alert that asks for nothing from you. Just never share the number." },
  { text: "Congratulations! You won a Rs 25,000 prize. Send your UPI PIN to claim it.",
    real: false,
    why: "Nobody needs your UPI PIN to give you money. Real prizes never ask for a PIN." }
];

let current = 0;
const box = document.getElementById("msgbox");
const feedback = document.getElementById("feedback");

function showMsg() {
  box.textContent = messages[current].text;
  feedback.textContent = "";
}

function answer(userSaidReal) {
  const m = messages[current];
  if (userSaidReal === m.real) {
    feedback.textContent = "Correct! " + m.why;
  } else {
    feedback.textContent = "Not quite. " + m.why;
  }
}

function nextMsg() {
  current = (current + 1) % messages.length;
  showMsg();
}

showMsg();

7. scams.html
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Online Scams</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Stay Safe Online</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="passwords.html">Passwords</a>
      <a href="phishing.html">Phishing</a>
      <a href="scams.html">Scams</a>
      <a href="social.html">Social Media</a>
      <a href="#">Quiz</a>
    </nav>
  </header>

  <main>
    <h2>Common Online Scams</h2>

    <div class="card">
      <h3>Fake UPI payment request</h3>
      <p>You get a "collect request" and are told to enter your PIN to receive money. Entering a PIN only ever sends money out.</p>
      <p class="tip">Stay safe: never enter your PIN to receive money.</p>
    </div>

    <div class="card">
      <h3>Fake job or lottery offers</h3>
      <p>You're asked to pay a registration fee for a job or prize that doesn't exist.</p>
      <p class="tip">Stay safe: genuine employers don't ask candidates for money.</p>
    </div>

    <div class="card">
      <h3>Fake customer care numbers</h3>
      <p>A number found through a search result pretends to be your bank or delivery company and asks you to install a screen-sharing app.</p>
      <p class="tip">Stay safe: use the number printed on your card or the official app.</p>
    </div>

    <p><strong>Reported a fraud?</strong> In India, call 1930 or visit cybercrime.gov.in.</p>
  </main>

  <footer>Field Project, YCMOU BCA</footer>
</body>
</html>

8. social.html
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Social Media Safety</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Stay Safe Online</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="passwords.html">Passwords</a>
      <a href="phishing.html">Phishing</a>
      <a href="scams.html">Scams</a>
      <a href="social.html">Social Media</a>
      <a href="#">Quiz</a>
    </nav>
  </header>

  <main>
    <h2>Social Media Safety</h2>

    <div class="card">
      <h3>Protect your account</h3>
      <ul>
        <li>Turn on two-step verification.</li>
        <li>Never log in through links sent by others.</li>
        <li>Log out of shared or public devices.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Protect your privacy</h3>
      <ul>
        <li>Keep your profile private if you can.</li>
        <li>Don't post your phone number, address or travel plans.</li>
        <li>Accept friend requests only from people you know.</li>
      </ul>
    </div>

    <div class="card">
      <h3>If something goes wrong</h3>
      <ul>
        <li>Change your password right away.</li>
        <li>Report the fake or hacked profile on the platform.</li>
        <li>Tell your friends not to trust messages sent from it.</li>
      </ul>
    </div>
  </main>

  <footer>Field Project, YCMOU BCA</footer>
</body>
</html>

9. quiz.html
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cyber Safety Quiz</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Stay Safe Online</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="passwords.html">Passwords</a>
      <a href="phishing.html">Phishing</a>
      <a href="scams.html">Scams</a>
      <a href="social.html">Social Media</a>
      <a href="quiz.html">Quiz</a>
    </nav>
  </header>

  <main>
    <h2>Cyber Safety Quiz</h2>

    <div id="quizArea">
      <p id="progress"></p>
      <h3 id="question"></h3>
      <div id="options"></div>
      <p id="explain"></p>
      <button id="nextQ" style="display:none;">Next question</button>
    </div>

    <div id="final" style="display:none;">
      <h3 id="scoreText"></h3>
      <p id="scoreMsg"></p>
      <button id="restart">Try again</button>
    </div>
  </main>

  <footer>Field Project, YCMOU BCA</footer>
  <script src="quiz.js"></script>
</body>
</html>

10. quiz.js
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














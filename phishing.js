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
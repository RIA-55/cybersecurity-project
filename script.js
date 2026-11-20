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
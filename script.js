let form = document.querySelector("#batForm");
let card = document.querySelector(".card");
let screen = document.querySelector("#signalScreen");

let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let complaint = document.querySelector("#complaint");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let complaintError = document.querySelector("#complaintError");

let clearBtn = document.querySelector("#clearBtn");
let sendAnotherBtn = document.querySelector("#sendAnotherBtn");
let togglePassword = document.querySelector("#togglePassword");

let toast = document.querySelector("#toast");

togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.classList.add("is-visible");
    togglePassword.setAttribute("aria-label", "Hide password");
    togglePassword.setAttribute("aria-pressed", "true");
  } else {
    password.type = "password";
    togglePassword.classList.remove("is-visible");
    togglePassword.setAttribute("aria-label", "Show password");
    togglePassword.setAttribute("aria-pressed", "false");
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  complaintError.textContent = "";

  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  complaintError.style.display = "none";

  toast.classList.remove("show");
  toast.textContent = "";

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d).{6,}$/;

  let nameOk = nameRegex.test(nm.value.trim());
  let emailOk = emailRegex.test(email.value.trim());
  let passOk = passwordRegex.test(password.value);
  let complaintOk = complaint.value.trim().length >= 10;

  let isValid = true;

  if (!nameOk) {
    nameError.textContent = "Name must be 3+ letters (no numbers/symbols).";
    nameError.style.display = "block";
    isValid = false;
  }

  if (!emailOk) {
    emailError.textContent = "Email format is incorrect (example: name@gmail.com).";
    emailError.style.display = "block";
    isValid = false;
  }

  if (!passOk) {
    passwordError.textContent = "Password must be 6+ characters and include at least 1 number.";
    passwordError.style.display = "block";
    isValid = false;
  }

  if (!complaintOk) {
    complaintError.textContent = "Write at least 10 characters so the report is clear.";
    complaintError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    toast.textContent = "Bat-Signal sent successfully.";
    toast.classList.add("show");

    card.style.display = "none";
    screen.style.display = "grid";

    form.reset();

    password.type = "password";
    togglePassword.classList.remove("is-visible");
    togglePassword.setAttribute("aria-label", "Show password");
    togglePassword.setAttribute("aria-pressed", "false");
  } else {
    toast.textContent = "Fix the highlighted fields first.";
    toast.classList.add("show");
  }
});

clearBtn.addEventListener("click", function () {
  form.reset();

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  complaintError.textContent = "";

  nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  complaintError.style.display = "none";

  toast.classList.remove("show");
  toast.textContent = "";

  password.type = "password";
  togglePassword.classList.remove("is-visible");
  togglePassword.setAttribute("aria-label", "Show password");
  togglePassword.setAttribute("aria-pressed", "false");
});

sendAnotherBtn.addEventListener("click", function () {
  screen.style.display = "none";
  card.style.display = "block";

  form.reset();

  password.type = "password";
  togglePassword.classList.remove("is-visible");
  togglePassword.setAttribute("aria-label", "Show password");
  togglePassword.setAttribute("aria-pressed", "false");

  toast.classList.remove("show");
  toast.textContent = "";
});

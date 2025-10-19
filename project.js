// Toggle forms
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
});

// Password validation function
function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  return regex.test(password);
}

// Signup form submit
const signupMessage = document.getElementById('signupMessage');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;

  if (!validatePassword(password)) {
    signupMessage.textContent = "Password must be min 8 chars, include uppercase, lowercase, number, and special char.";
    signupMessage.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    signupMessage.textContent = "Passwords do not match!";
    signupMessage.style.color = "red";
    return;
  }

  signupMessage.textContent = `Signup successful! Welcome, ${username}`;
  signupMessage.style.color = "lime";
  signupForm.reset();
});

// Login form submit
const loginMessage = document.getElementById('loginMessage');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  if(username === "" || password === "") {
    loginMessage.textContent = "Please enter username and password";
    loginMessage.style.color = "red";
    return;
  }

  loginMessage.textContent = `Login successful! Welcome back, ${username}`;
  loginMessage.style.color = "lime";
  loginForm.reset();
});

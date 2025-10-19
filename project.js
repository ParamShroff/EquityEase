// DOM elements
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const profileName = document.getElementById('profileName');

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');

// Initially hide app interface
navbar.style.display = 'none';
sidebar.style.display = 'none';
mainContent.style.display = 'none';

// Toggle forms
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

  // Success: Show main app
  overlay.style.display = 'none';
  navbar.style.display = 'flex';
  sidebar.style.display = 'flex';
  mainContent.style.display = 'block';
  profileName.textContent = username;
});

// Login form submit
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  if(username === "" || password === "") {
    loginMessage.textContent = "Please enter username and password";
    loginMessage.style.color = "red";
    return;
  }

  // Success: Show main app
  overlay.style.display = 'none';
  navbar.style.display = 'flex';
  sidebar.style.display = 'flex';
  mainContent.style.display = 'block';
  profileName.textContent = username;
});

// script.js

function validateRegister() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
    alert("Registered successfully!");
    return true;
  }
  
  function validateLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if (email === "" || password === "") {
      alert("Please fill all fields.");
      return false;
    }
    alert("Login successful!");
    return true;
  }
  
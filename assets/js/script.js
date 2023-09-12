// Function to display the login form
function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("rules").style.display = "none";
  document.getElementById("scores").style.display = "none";
}

// Function to display the rules section
function showRules() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("rules").style.display = "block";
  document.getElementById("scores").style.display = "none";
}
function showScores() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("rules").style.display = "none";
  document.getElementById("scores").style.display = "block";

  // Retrieve the user's email from localStorage (if needed)
  const userEmail = localStorage.getItem("userEmail");

  // Retrieve the user's score from localStorage
  const userScore = localStorage.getItem("userScore");

  // Display the user's email and score on the screen
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userPoints").textContent = userScore;
}

// Event listener for the login form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Password requirements
    const minLength = 8; // Minimum length of the password
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/; // At least one uppercase, one lowercase, one digit

    // Get the password requirements span element
    const passwordRequirements = document.getElementById(
      "password-requirements"
    );

    // Validate the user input
    if (email && password) {
      // Check the password against requirements
      if (password.length < minLength) {
        passwordRequirements.textContent =
          "Password should be at least 8 characters long";
      } else if (!regex.test(password)) {
        passwordRequirements.textContent =
          "Password must contain at least one uppercase letter, lowercase letter, and one digit";
      } else {
        passwordRequirements.textContent = ""; // Clear the requirements message
        // Store the email and password in localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        // Navigate to the game screen
        window.location.href = "quiz.html";
      }
    }
  });

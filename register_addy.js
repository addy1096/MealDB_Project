// Function to check if the user is already logged in
// function checkLoggedIn() {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) {
//       window.location.href = "landingpage.html"; // Redirect to the dashboard if the user is already logged in
//     }
//   }
  
  // Function to register a new user
  function registerUser(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;
  
    // Check if the username is not already registered
    const existingUser = localStorage.getItem(regUsername);
    if (existingUser) {
      showError("Username already exists. Please choose another one.");
      return;
    }
  
    // Save the new user in localStorage
    localStorage.setItem(regUsername, JSON.stringify({ password: regPassword }));
    showSuccess("Registration successful! You can now log in.");
  }
  
  // Function to log in a user
  function loginUser(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    // Retrieve the user from localStorage
    const user = JSON.parse(localStorage.getItem(loginUsername));
  
    if (user && user.password === loginPassword) {
      // If the username and password match, log the user in and redirect to the dashboard
      localStorage.setItem("loggedInUser", loginUsername);
      window.location.href = "landingpage.html"; // Replace "dashboard.html" with the path to your dashboard page
    } else {
      showError("Invalid credentials. Please try again.");
    }
  }
  
  // Function to display success messages
  function showSuccess(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.style.color = "green";
  }
  
  // Function to display error messages
  function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
  }
  
  // Check if the user is already logged in when the page loads
  checkLoggedIn();
  
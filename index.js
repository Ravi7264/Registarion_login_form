// User Registration
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Here, you can perform validation and send the user registration data to the server for further processing
    // For simplicity, we'll just display the registered user's information in the console
    console.log("Registered User: ", { username: username, email: email, password: password });
    
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
  
  // User Login
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;
    
    // Here, you can perform validation and send the login credentials to the server for authentication
    // For simplicity, we'll just display the login username and password in the console
    console.log("Login Credentials: ", { username: loginUsername, password: loginPassword });
    
    // Clear the form fields
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
  });
  
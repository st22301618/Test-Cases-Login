
// Selected elements from DOM
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Mock Database
const VALID_USER = {
    email: "test@mail.com",
    password: "pass12345"
};

// Validation Logic
loginForm.addEventListener('submit', (e) => {
    // Prevent the page from refreshing automatically
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Clear previous error message
    errorMessage.textContent = "";

    // CASE: Check Empty Fields
    if (!email || !password) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // CASE: Valid Login
    if (email === VALID_USER.email && password === VALID_USER.password) {
        alert("Success! Redirecting...");
        window.location.href = "dashboard.html";
    }

    // CASE: Invalid Login / SQL Injection
    else {
        showError("Invalid email or password.");
    }
});

// Show Error func
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "#dc2626";
}
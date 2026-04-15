
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

    // 1. CASE: Check Empty Fields
    if (!email || !password) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // 2. CASE: Password Length Validation
    if (password.length < 8) {
        showError("Password must be at least 8 characters.");
        return;
    }
    if (password.length > 12) {
        showError("Password cannot exceed 12 characters.");
        return;
    }

    // 3. CASE: Valid Login
    if (email === VALID_USER.email && password === VALID_USER.password) {
        alert("Success! Redirecting...");
        window.location.href = "dashboard.html";
    }

    // 4. CASE: Invalid Login / SQL Injection
    else {
        showError("Invalid email or password.");
    }
});

// Show Error func
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "#dc2626";
}
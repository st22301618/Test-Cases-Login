
// Selected elements from DOM
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Validation Logic
loginForm.addEventListener('submit', (e) => {
    // Prevent the page from refreshing automatically
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Clear previous error message
    errorMessage.textContent = "";

    // Check Empty Fields
    if (!email || !password) {
        errorMessage.textContent = "All fields are required.";
        return;
    }
});
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Clear previous errors
    errorMessage.textContent = "";

    // 1. Check Empty Fields
    if (!email || !password) {
        errorMessage.textContent = "All fields are required.";
        return;
    }
});
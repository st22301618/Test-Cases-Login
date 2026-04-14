/* Automated Testing */

function runTestScenario(name, email, pass) {
    console.group(`Test: ${name}`);
    
    // Fill the inputs
    document.getElementById('email').value = email;
    document.getElementById('password').value = pass;
    
    // Trigger the submit event
    const form = document.getElementById('loginForm');
    form.dispatchEvent(new Event('submit'));
    
    // Log the result
    const errorDisplay = document.getElementById('errorMessage').textContent;
    console.log("Resulting Error Message:", errorDisplay || "None (Success)");
    console.groupEnd();
}

function runAllTests() {
    console.log("Starting Automated Tests...");

    // 1. Empty Fields
    runTestScenario("Empty Fields", "", "");

    // 2. Invalid Login
    runTestScenario("Invalid Login", "wrong@user.com", "wrongpass");

    // 3. SQL Injection Attempt
    // Note: Since we use strict string comparison (===), 
    // the injection characters are just treated as a wrong password.
    runTestScenario("SQL Injection", "admin' --", "' OR 1=1 --");

    // 4. Valid Login
    console.log("To test Valid Login, use: test@mail.com / pass12345");
}

// Run tests with page loads
// runAllTests();
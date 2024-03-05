document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let email = document.getElementById('email').value;

    let usernamePattern = /^[a-zA-Z][a-zA-Z0-9-_]{2,19}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]{8,}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let message = '';
    if (!usernamePattern.test(username) || username.includes(' ')) {
        message += 'Invalid username. ';
    }
    if (!passwordPattern.test(password) || password.includes(' ')) {
        message += 'Invalid password. ';
    }
    if (password !== confirmPassword) {
        message += 'Passwords do not match. ';
    }
    if (!emailPattern.test(email)) {
        message += 'Invalid email. ';
    }

    displayMessage(message.length > 0 ? message : 'Signup successful!', message.length === 0);
});

function displayMessage(message, isSuccess) {
    let messageBox = document.querySelector('.message-box');
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.classList.add('message-box');
        document.querySelector('.login-form').after(messageBox);
    }

    messageBox.innerHTML = `<p>${message}</p>`;
}
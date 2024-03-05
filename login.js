document.querySelector('.login-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(user => user.name === username && user.email === password);
            displayMessage(user ? 'Login successful' : 'Invalid username or password', user);
        })
        .catch(() => alert('Failed to fetch user data'));
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
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated login validation
    if (username === 'admin' && password === 'password') {
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password');
    }
});

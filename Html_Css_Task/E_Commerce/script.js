document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;

    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

    // Login form functionality
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Invalid username or password';
            loginMessage.style.color = 'red';
        }
    });
});

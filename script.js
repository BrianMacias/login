document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Realizar la autenticación con los valores ingresados
    console.log('Email:', email);
    console.log('Password:', password);
});
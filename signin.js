document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ndalon rifreskimin e faqes

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const successMsg = document.getElementById('success-msg');

    // Pastro mesazhet e vjetra
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    // Rregullat e validimit
    if (email === "" || password === "") {
        errorMsg.innerText = "Ju lutem plotësoni të gjitha fushat!";
        errorMsg.style.display = 'block';
    } 
    else if (!email.includes('@')) {
        errorMsg.innerText = "Email-i nuk është i saktë!";
        errorMsg.style.display = 'block';
    } 
    else if (password.length < 6) {
        errorMsg.innerText = "Fjalëkalimi duhet të ketë së paku 6 karaktere!";
        errorMsg.style.display = 'block';
    } 
    else {
        // Nëse gjithçka është në rregull
        successMsg.innerText = "U kyçët me sukses! Po ridrejtoheni...";
        successMsg.style.display = 'block';
        
        // Pas 2 sekondave e dërgon te ballina
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
});

 function validateForm() {
    var isValid = true;

        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';

        const name = document.getElementById('name').value;
        if (name === '') {
                document.getElementById('nameError').innerText = 'Name is required';
                isValid = false;
            }

            const email = document.getElementById('email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                document.getElementById('emailError').innerText = "Email is required";
                isValid = false;
            }
            else if (!emailPattern.test(email)) {
                document.getElementById('emailError').innerText = 'Invalid email format';
                isValid = false;
        }

    return isValid;
}

 
    
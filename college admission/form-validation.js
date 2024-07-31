document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting immediately

        // Clear previous errors
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');

        let isValid = true;

        // Validate name
        const name = document.getElementById('name').value;
        if (!name.trim()) {
            document.getElementById('nameError').textContent = 'Full Name is required';
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email address';
            isValid = false;
        }

        // Validate age
        const age = document.getElementById('age').value;
        if (age <= 0) {
            document.getElementById('ageError').textContent = 'Age must be a positive number';
            isValid = false;
        }

        // Validate program
        const program = document.getElementById('program').value;
        if (program === '') {
            document.getElementById('programError').textContent = 'Please select a program';
            isValid = false;
        }

        // If all fields are valid, you can submit the form or perform other actions
        if (isValid) {
            alert('Form submitted successfully!');
            // You can use form.submit() if you want to submit the form programmatically
            // form.submit();
        }
    });
});

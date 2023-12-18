// Wait for the document to be ready
$(document).ready(function() {
    // Set up an event listener for the submit button click
    $('#submitBtn').on('click', function() {
        // Retrieve form input values
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var body = $('#body').val();

        // Check if any field is empty
        if (name === '' || email === '' || subject === '' || body === '') {
            alert('Please fill in all fields');
            return;
        }

        // Create a data object with form values
        var formData = {
            name: name,
            email: email,
            subject: subject,
            body: body
        };

        // Make an AJAX request to submit the form data to the server
        $.ajax({
            url: 'http://localhost:3000/submit-form', // Update with your server URL
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                alert('Form submitted successfully');
                $('#myForm')[0].reset(); // Reset the form after successful submission
            },
            error: function(error) {
                alert('Error submitting form');
            }
        });
    });
});

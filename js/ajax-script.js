// Wait for the document to be ready
$(document).ready(function() {
    // Set up an event listener for the submit button click
    $('#submitBtn').on('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário

        // Retrieve form input values
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var body = $('#body').val();

        // Check if any field is empty
        if (name === '' || email === '' || subject === '' || body === '') {
            alert('Preencha todos os campos');
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
            url: 'https://starlit-gift-403714.rj.r.appspot.com/submit-form',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                alert('Formulário enviado com sucesso!');
                $('#myForm')[0].reset(); // Resetar o formulário após o envio bem-sucedido
            },
            error: function(xhr, status, error) {
                console.error('Erro na requisição AJAX:', xhr.status, xhr.statusText);
                if (xhr.status === 500) {
                    alert('Erro interno do servidor. Consulte o console para obter mais detalhes.');
                } else {
                    alert('Erro ao enviar o formulário. Consulte o console para obter mais detalhes.');
                }
            }
        });

    });
});

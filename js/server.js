require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Set up email transport outside the route
const transporter = nodemailer.createTransport({
    // Your email service configuration
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use the environment variable for email user
        pass: process.env.EMAIL_PASS // Use the environment variable for email password
    }
}); // For Gmail, create an "app password" instead of using the regular password

app.post('/submit-form', async (req, res) => {
    const formData = req.body;

    try {
        // Send an email with form data to yourself
        await transporter.sendMail({
            from: formData.email, // Use the user's email as the sender
            to: 'micheleregina.dev@gmail.com', // Replace with your email address
            subject: 'New Form Submission',
            text: JSON.stringify(formData)
        });

        console.log('Email enviado com sucesso');
    } catch (error) {
        console.error('Erro no envio do email:', error);
        res.status(500).send('Erro ao processar o formulário');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/submit-form`);
});

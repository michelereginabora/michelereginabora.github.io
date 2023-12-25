// Importando módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); 

// Inicializando o aplicativo Express
const app = express();

// Definindo a porta do servidor com base na variável de ambiente ou padrão 3000
const port = process.env.PORT || 3000;

// Configuração das opções do CORS
const corsOptions = {
  origin: 'https://michelereginadev.site', // URL do frontend no GitHub Pages
  methods: 'GET, POST',
  credentials: true,
  optionsSuccessStatus: 204,
};

// Aplicando as opções do CORS ao aplicativo
app.use(cors(corsOptions));

// Utilizando o middleware para análise de corpo de requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando o transporte do Nodemailer para enviar emails usando o serviço Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Obtendo o usuário do ambiente
        pass: process.env.EMAIL_PASS // Obtendo a senha do ambiente
    }
});

// Manipulador de rota para a rota raiz - apenas para visualização de funcionamento
app.all('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

// Manipulador de rota para o envio de formulário - html com form no front
app.post('/submit-form', async (req, res) => {
    // Obtendo os dados do corpo da requisição
    const formData = req.body;
    console.log('Dados do formulário recebidos:', formData);

    try {
        // Enviando um email com os dados do formulário
        await transporter.sendMail({
            from: formData.email,
            to: 'micheleregina.dev@gmail.com',
            subject: 'New Form Submission',
            text: JSON.stringify(formData)
        });

        console.log('Email enviado com sucesso');

        // Enviar uma resposta HTML personalizada para sucesso
        const successMessage = `
            <html>
                <head>
                    <title>Formulário Enviado com Sucesso</title>
                    <style>
                        body {
                            background-color: #AB6873; 
                            text-align: center;
                            padding: 50px;
                        }
                        h1 {
                            color: #fff; /* Branco */
                        }
                    </style>
                </head>
                <body>
                    <h1>Formulário Enviado com Sucesso!</h1>
                    <p>Obrigado por enviar o formulário, responderei em breve.</p>
                </body>
            </html>
        `;

        // Enviando uma resposta de sucesso com o código de status 200
        res.status(200).send(successMessage);
    } catch (error) {
        // Lidando com erros no envio de email

        console.error('Erro no envio do email:', error);

        // Enviar uma resposta HTML personalizada para o erro
        const errorMessage = `
            <html>
                <head>
                    <title>Erro ao Processar o Formulário</title>
                    <style>
                        body {
                            background-color: #AB6873; /* Rosa */
                            text-align: center;
                            padding: 50px;
                        }
                        h1 {
                            color: #fff; /* Branco */
                        }
                    </style>
                </head>
                <body>
                    <h1>Erro ao Processar o Formulário</h1>
                    <p>Ocorreu um erro ao processar o formulário. Por favor, envie um email para micheleregina.dev@gmail.com</p>
                </body>
            </html>
        `;

        // Enviando uma resposta de erro com o código de status 500
        res.status(500).send(errorMessage);
    }
});

// Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/submit-form`);
});

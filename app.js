const firebaseConfig = {
    apiKey: "AIzaSyDmqtIz8Y0Uws1uNRvB1aV4Ni6FXjmkyI4",
    authDomain: "at--ong.firebaseapp.com",
    projectId: "at--ong",
    storageBucket: "at--ong.appspot.com",
    messagingSenderId: "27022439477",
    appId: "1:27022439477:web:999ad88bd875dd3ea3ed7c"
  };
  
firebase.initializeApp(firebaseConfig);
 
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cadastro', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir o modelo do usuário
const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    celular: String,
    endereco: String,
    complemento: String,
    numero: String,
    bairro: String,
    cidade: String,
    uf: String,
    cep: String
});

app.use(bodyParser.urlencoded({ extended: true }));

// Rota para salvar o usuário
app.post('/salvar-usuario', (req, res) => {
    const usuarioData = req.body;

    const usuario = new Usuario(usuarioData);

    usuario.save()
        .then(() => {
            res.json({ success: true });
        })
        .catch(error => {
            console.error('Erro ao salvar usuário:', error);
            res.json({ success: false });
        });
});

app.listen(3000, () => {
    console.log('Servidor está ouvindo na porta 3000');
});

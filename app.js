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
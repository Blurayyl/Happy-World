<head>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
<script src="firebase.js"></script>
</head>
<head>
<script type="module">
  // Importando funções do Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyClmaMZfYyhuXEw9EbcfARX73Dt81GRdzs",
    authDomain: "happy-wordl-2a610.firebaseapp.com",
    projectId: "happy-wordl-2a610",
    storageBucket: "happy-wordl-2a610.appspot.com",
    messagingSenderId: "440080091846",
    appId: "1:440080091846:web:3e5ee401ff4172012565c7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Exportando auth e db para uso em script.js
  window.auth = auth;
  window.db = db;
</script>
</head>

// firebase.js

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyClmaMZfYyhuXEw9EbcfARX73Dt81GRdzs",
    authDomain: "happy-wordl-2a610.firebaseapp.com",
    projectId: "happy-wordl-2a610",
    storageBucket: "happy-wordl-2a610.appspot.com",
    messagingSenderId: "440080091846",
    appId: "1:440080091846:web:3e5ee401ff4172012565c7"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Criar variáveis globais para usar em outros arquivos
  const auth = firebase.auth();
  const db = firebase.firestore();
  
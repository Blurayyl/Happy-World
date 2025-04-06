const auth = firebase.auth();
const db = firebase.firestore();

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => window.location.href = "profile.html")
    .catch(error => alert(error.message));
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "profile.html")
    .catch(error => alert(error.message));
}

auth.onAuthStateChanged(user => {
  if (user && document.getElementById("userEmail")) {
    document.getElementById("userEmail").innerText = "Logado como: " + user.email;

    // Carregar perfil
    db.collection("perfis").doc(user.uid).get().then(doc => {
      if (doc.exists) {
        document.getElementById("displayName").value = doc.data().nome;
        document.getElementById("bio").value = doc.data().bio;
      }
    });
  }
});

function saveProfile() {
  const user = auth.currentUser;
  const nome = document.getElementById("displayName").value;
  const bio = document.getElementById("bio").value;

  db.collection("perfis").doc(user.uid).set({
    nome,
    bio
  }).then(() => alert("Perfil salvo!"));
}

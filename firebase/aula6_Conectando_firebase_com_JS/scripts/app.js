// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyDjTd2MkiCg19yD4Q3D4yMEdeCufcU8RNY",
  authDomain: "colegio-d22b8.firebaseapp.com",
  projectId: "colegio-d22b8",
  storageBucket: "colegio-d22b8.appspot.com",
  messagingSenderId: "167299372482",
  appId: "1:167299372482:web:2f64a0196c3869306e725b",
  measurementId: "G-H8P59L3CLB"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

const TURMA = "turmaA";

let db = firebase.firestore();

let auth = firebase.auth();

//                Lê todos os dados de uma coleção



/* db.collection("turmaA").get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        let id = doc.id;
        console.log(id)
        db.collection(TURMA).doc(id).delete()

    })
}) */



//              Lê apenas de uma pessoa



/*   let docRef = db.collection("turmaA").doc("M58c5oD0dobkaUDxIW7o");

  docRef.get().then((doc)=>{
    console.log(doc.data().notas);
  }) */


//              Busca os dados pelo campo nome

/* db.collection("turmaA").where("nome", "==", "bruno").get()
  .then(snapshot => {
    snapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log(aluno)
    })
  }) */



//            Adicionando dados na tabela com id aleatório




/*   db.collection(TURMA).add({
    nome: "Vitoria",
    notas: {
      nota1: 9.6,
      nota2: 8
    },
  }).then((doc) => {
    console.log("Documento inserido com sucesso", doc);
  }).catch(err => {
    console.log(err);
  }) */




//             Adicionando dado na tabela com id definido por mim (ID é AlunoNovo)



// Para alterar dados eu posso simplesmente alterar os dados no código abaixo
// Se eu colocar esse codigo e os dados com o ID definido existir ele vai modificar os dados e se não existir ele vai criar eles

// O {merge: true} faz com que quando eu coloque os dados ele altere apenas o que eu escrevi e n apague o restante que eu n especifiquei


/* db.collection(TURMA).doc("AlunoNovo").set({
  nome: "Ana Vitoria",
  sobrenome: "Vargas",
  notas: {
    nota1: 9,
    nota2: 8}, 
},{ merge: true })
.then(() => {
  console.log("Documento inserido com sucesso");
}).catch(err => {
  console.log(err);
}) */









//                  Atualizando os dados

// Dessa forma eu posso por apena uma informação e ele não vai apagar todo o restante dos dados da pessoa que to atualizando sempre precisar usar o {merge: true}



/* db.collection(TURMA).doc("AlunoNovo").update({
  notas: {
    nota1: 6,
    nota2: 5
  },
})
  .then(() => {
    console.log("Documento atualizado com sucesso");
  }).catch(err => {
    console.log(err);
  }) */









//                Adicionar um dados a um array sem apagar o restante e nem precisar escrever ele todo usando firebase.firestore.FieldValue.arrayUnion()



/* db.collection(TURMA).doc("AlunoNovo").update({
  cidades: firebase.firestore.FieldValue.arrayUnion("MG" )
})
.then(() => {
  console.log("Documento atualizado com sucesso");
}).catch(err => {
  console.log(err);
}) */








//                  Adicionar um dados a um array sem apagar o restante e nem precisar escrever ele todo usando firebase.firestore.FieldValue.arrayRemove()


/* db.collection(TURMA).doc("AlunoNovo").update({
  cidades: firebase.firestore.FieldValue.arrayRemove("MG" )
})
  .then(() => {
    console.log("Documento atualizado com sucesso");
  }).catch(err => {
    console.log(err);
  }) */




// Incrementa mais um valor no numero do elemento





/* db.collection(TURMA).doc("AlunoNovo").update({
  faltas: firebase.firestore.FieldValue.increment(1)
})
  .then(() => {
    console.log("Documento atualizado com sucesso");
  }).catch(err => {
    console.log(err);
  }) */







// O onSnapshot serve para sempre que mudificar algum dado no banco ele atualizar imediatamente e automaticante no app

/*   db.collection(TURMA).where("notas.nota1", "<", 5). onSnapshot(snapshot =>{
    snapshot.forEach((doc) =>{
      let aluno = doc.data();
      console.log(aluno.nome);
    })
  }) */





//                    Apaga um campo do documento/tabela



/*   db.collection(TURMA).doc("AlunoNovo").update({

    
  faltas: firebase.firestore.FieldValue.delete()


})
  .then(() => {
    console.log("Documento atualizado com sucesso");
  }).catch(err => {
    console.log(err);
  }) */





//                    Apaga a tabela toda


/*   db.collection(TURMA).doc("AlunoNovo").delete()
  .then(() => {
    console.log("Documento apagado com sucesso");
  }).catch(err => {
    console.log(err);
  }) */





//                      Cria um novo usuario


/* 


auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
  .then(user => {
    console.log(user);
  }).catch(error => {
    console.log(error);
  }) */






//              Loga com um usuario



function login() {
  let UserEmail = "teste@teste.com";
  let UserPassword = "123abc";


  // A linha de código abaixo define se o usuario vai permancer logado em outra aba do navegador, em outra janela do navegador ou se vai deslogar quando atualizar a pagina
  //LOCAL = Vai estar logado em todas as abas ou janela do mesmo navegador(padrão)
  //SESSION = Só vai estar logado naquela janela e naquela aba. Se for para outra aba ou janela n vai estar logado
  //NONE = Se atualizar a pagina vai deslogar

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{


    auth.signInWithEmailAndPassword(UserEmail, UserPassword)
      .then(loggerdUser => {
        let user = auth.currentUser;
        console.log(user);
      }).catch(error => {
        console.log(error)
      })

  }).catch(error =>{
    console.log(error)
  })


}

/* setTimeout(login, 3000) */






//                  Verifica se tem algum usuario logado


auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email + " - Esta logado")
  } else {
    console.log("Deslogou")
  }
})




//                    Desloga o usuario


function logout() {
  auth.signOut().then(obj => {
    console.log(obj)
  }).catch(error => {
    console.log(error)
  })
}


/* setTimeout(logout, 4000) */
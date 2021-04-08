
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBQNC6MByQ9sEjcCB-dwJKlF-E-Rc9cwKk",
      authDomain: "qitter-fb8da.firebaseapp.com",
      databaseURL: "https://qitter-fb8da-default-rtdb.firebaseio.com",
      projectId: "qitter-fb8da",
      storageBucket: "qitter-fb8da.appspot.com",
      messagingSenderId: "1035567339574",
      appId: "1:1035567339574:web:0b9a2b47fd8073e1aba097"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAaoIJi6aEaQogQ41rbVNI-B0iu6bUMPTw",
      authDomain: "kwitter-acd42.firebaseapp.com",
      databaseURL: "https://kwitter-acd42-default-rtdb.firebaseio.com",
      projectId: "kwitter-acd42",
      storageBucket: "kwitter-acd42.appspot.com",
      messagingSenderId: "512349585802",
      appId: "1:512349585802:web:41747dd6e286a731314873"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
      
      document.getElementById("msg").value = "";
}
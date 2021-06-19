var firebaseConfig = {
    apiKey: "AIzaSyDrUM2wg4tPVhJvyTIuSnXkApihWH20OXk",
    authDomain: "lets-chat-app-3dd29.firebaseapp.com",
    databaseURL: "https://lets-chat-app-3dd29-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-3dd29",
    storageBucket: "lets-chat-app-3dd29.appspot.com",
    messagingSenderId: "881911245825",
    appId: "1:881911245825:web:4cbd7f447c6a7a15612400"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function add_room_screen(){
    window.location = "lets-chat.html"
}


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
password = localStorage.getItem("password");

function send(){

      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({

Name:user_name , 
message:msg , 
like: 0,


      });

      document.getElementById("msg").value="";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
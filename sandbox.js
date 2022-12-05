const firebaseConfig = {
    apiKey: "AIzaSyBxrP2p6PuFoc5wYjxiK_c5DPzwxEniQvA",
    authDomain: "details-c226e.firebaseapp.com",
    databaseURL: "https://details-c226e-default-rtdb.firebaseio.com",
    projectId: "details-c226e",
    storageBucket: "details-c226e.appspot.com",
    messagingSenderId: "8983905518",
    appId: "1:8983905518:web:2b47dfb7d5eb369fe99fff"
  };

//intialize
firebase.initializeApp(firebaseConfig);

// refrence to our database
var detailsDB = firebase.database().ref("UsersDetails");

document.querySelector(".form").addEventListener('submit',UserDets);

function UserDets(e){
    e.preventDefault();
    var UserName = ElementID("username");
    var Password = ElementID("password");
    saveToDatabase(Password,UserName);

    document.querySelector('.confirmation').style.display = 'block';

    setTimeout(()=>{
        document.querySelector('.confirmation').style.display = 'none';
    },3000)

    document.querySelector(".form").reset();   
}

const saveToDatabase = (Password,UserName)=>{
    var pushToDatabase = detailsDB.push();

    pushToDatabase.set({
        Name : UserName,
        Pass : Password,
    })
}

const ElementID = (id)=>{
    return document.getElementById(id).value;
}
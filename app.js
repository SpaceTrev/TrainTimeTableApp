var trains = {
    trainName: '',
    destination: "12:00pm",
    firstTrainTime: '03-18-2018T12:00:00.555',
    frequency: 120,
};

var config = {
    apiKey: "AIzaSyCkub7V9GVdtqrVHHfzJwALAXJxf242lWk",
    authDomain: "traintimetablehw.firebaseapp.com",
    databaseURL: "https://traintimetablehw.firebaseio.com",
    projectId: "traintimetablehw",
    storageBucket: "traintimetablehw.appspot.com",
    messagingSenderId: "907573510404"
};
firebase.initializeApp(config);
var database = firebase.database();
function writeUserData(trainObj) {
    console.log("write user data");
    database.ref("traintimes/").push({
        trains: trains, 
    })
}
writeUserData(trainTimes);




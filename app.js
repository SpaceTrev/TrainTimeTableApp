var trains = [
    {
        trainName: 'The Juxtapose Express',
        destination: "Prague, Czech Republic",
        firstTrainTime: '05:00',
        frequency: 45,
    },
    {
        trainName: "Mid-Day Belgium Shuffle",
        destination: "Brussels, Beligum",
        firstTrainTime: '12:00',
        frequency: 120
    },
    {
        trainName: "French Wine and Dine Montage",
        destination: "Paris, France",
        firstTrainTime: "15:00",
        frequency: 120
    }
];

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
function writeUserData(trains) {
    console.log("write user data");
    database.ref("trains/").set({
        schedule_Data_Object: trains
    })
    console.log(trains);
}
writeUserData(trains);
function displayNewTrain(name) {
    var trainName = $("#formControlInput0").val().trim();
    var trainDestination = $("#formControlInput1").val();
    var firstDepartTime = $("#formControlSelect0").val();
    var frequency = $("#formControlSelect1").val();
    var newTrainObject = {
        trainName: trainName,
        destination: trainDestination,
        firstTrainTime: firstDepartTime,
        frequency: frequency
    }
    trains.push(newTrainObject);
   database.ref()
}
$(document).on('click', '#addTrainButton', displayNewTrain);
// $(document).on(ready, function(){

// })





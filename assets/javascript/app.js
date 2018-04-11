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
    // console.log("write user data");
    database.ref("trains/").set({
        schedule_Data_Object: trains
    })
    // console.log(trains);
}
writeUserData(trains);
function displayNewTrain(name) {
    event.preventDefault();
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
    console.log(newTrainObject);
   database.ref()
//    for (var i = 0; i < trains.length; i++) {
    $("#trainScheduleDisplay").append(`
    <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Train Name</th>
        <th scope="col">Destination</th>
        <th scope="col">Time Until Arrival</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${1}</td>
        <td>${1}</td>
        <td>${1}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>${0}</td>
        <td>${0}</td>
        <td>${0}</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>${0}</td>
        <td>${0}</td>
        <td>${0}</td>
      </tr>
    </tbody>
  </table>
    `)
//    }
}

function displaySavedTrains() {
    
}
$(document).on('click', '#addTrainButton', displayNewTrain);
$(document).ready(function() {
 database.ref("trains/schedule_Data_Object").on('child-added', function(snapshot){
     displayNewTrain(snapshot.val().name);
 })
})

{/* <tr>
<th scope="row">${childSnapshot.val().name}</th>
<td>${childSnapshot.val().destination}</td>
<td>${childSnapshot.val().freq}</td>
<td>${moment(nextTrain).format("hh:mm")}</td>
<td>${tMinutesTillTrain}</td>
</tr> */}
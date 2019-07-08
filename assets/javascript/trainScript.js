let trainName = '';
let trainDest = '';
let firstTrainTime = '';
let frequency = '';

const config = {
        apiKey: "AIzaSyApbC4l-dAGbzXKDaw1FNEze9jbp2lPltg",
        authDomain: "train-madrid.firebaseapp.com",
        databaseURL: "https://train-madrid.firebaseio.com",
        projectId: "train-madrid",
        storageBucket: "",
        messagingSenderId: "559754505789",
        appId: "1:559754505789:web:62e68d4b8462c70c"
};

firebase.initializeApp(config);
let database = firebase.database();

$('#addTrainButton').on('click', function (event) {
    trainName = $('#nameId').val().trim();
    trainDest = $('#destinationId').val().trim();
    firstTrainTime = $('#departureTime').val().trim();
    frequency = $('#frequent').val().trim();

    database.ref().push({
        trainName: trainName,
        trainDestination: trainDest,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    });
    $('#nameId').val('');
    $('#destinationId').val('');
    $('#departureTime').val('');
    $('#frequent').val('');
})

database.ref().on('child_added', function(snapshot){
    let trainTimeConv = moment(snapshot.val().firstTrainTime, 'HH:mm').subtract(1, 'years');
    let currentTime = moment().format('HH:mm');
    let differentTime = moment().diff(moment(trainTimeConv), 'minutes');
    let timeRemainder = differentTime % snapshot.val().frequency;
    let tMinusTillArrival = snapshot.val().frequency - timeRemainder;
    let nextTrainAt = moment().add(tMinusTillArrival, 'minutes');
    let nextTrainForm = moment(nextTrainAt).format('HH:mm')
    let destSnap = snapshot.val().trainDestination;
    let freqSnap = snapshot.val().frequency;
    let nameSnap = snapshot.val().trainName;
    $('#trainSchedule').append(`
    <tr>
       <th scope="row"></th>
       <td>${nameSnap}</td>
       <td>${destSnap}</td>
       <td>${nextTrainForm}</td>
       <td>${tMinusTillArrival}</td>
   </tr>

`)
})

function updatingTime() {
    let update;
    (update = function () {
        let timeRN = moment().format('hh:mm:ss');
        $("#trainTimeDisplay").html(timeRN);
    })();
    setInterval(update, 1000);
}

updatingTime();
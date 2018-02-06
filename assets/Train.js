var config = {
    apiKey: "AIzaSyATSLOkPYWTUnky3vLdA_iMiejpLbUsxgY",
    authDomain: "something-new-d1aca.firebaseapp.com",
    databaseURL: "https://something-new-d1aca.firebaseio.com",
    projectId: "something-new-d1aca",
    storageBucket: "something-new-d1aca.appspot.com",
    messagingSenderId: "161457609376"
 };
  
firebase.initializeApp(config);

var database = firebase.database();

//declaring variables
var trainName = "";
var destinationName = ""; 
var frequencyValue = "";
var arrivalValue = "";
var timeUntilValue = "";

//when add button is clicked, the following things happen
$("#addTrain").on("click",function() {
  event.preventDefault();

//grabs value of user input and stores in a variable
   var trainName = $("#thisTrain").val().trim();
   var destinationName = $("#thisDestination").val().trim();
   var frequencyValue = $("#thisFrequency").val().trim();
   var arrivalValue = $("#thisArrival").val().trim();
  
 //creates object to store user input to store in database 
   var newTrain = {
  	train: trainName,
   	destination: destinationName,
   	frequency: frequencyValue,
    arrival: arrivalValue
   }; 
   
  //pushes new train info to database
  database.ref().push(newTrain);
  
  //clears input for next submission
  $("#thisTrain").val("");
  $("#thisDestination").val("");
  $("#thisFrequency").val("");
  $("#thisArrival").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
	var firstTrain = childSnapshot.val().arrival;
  var trainName = childSnapshot.val().train;
  var destinationName = childSnapshot.val().destination; 
  var frequencyValue = childSnapshot.val().frequency;
  var currentTime = moment().format("hh.mm");
  var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
  var timeDiff = moment().diff(moment(firstTrainConverted, "minutes"));
  var remainder = timeDiff % frequencyValue;
  var timeUntilValue = frequencyValue - remainder;
  var nextArrival = moment().add(timeUntilValue, "minutes");
  var nextArrival = moment(nextArrival).format("hh:mm A");
  
  //updates the DOM with new train info back from database
$("#table").append("<tr><td>" + trainName + "</td><td>" + destinationName + "</td><td>" +
  frequencyValue + "</td><td>" + nextArrival + "</td><td>" + timeUntilValue + "</td></tr>");

});






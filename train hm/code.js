	

		// Initialize Firebase
	var config = {
    apiKey: "AIzaSyC_MgndurTYGny9KiC5545oqgmCNGfzRRg",
    authDomain: "train-project-e5a79.firebaseapp.com",
    databaseURL: "https://train-project-e5a79.firebaseio.com",
    projectId: "train-project-e5a79",
    storageBucket: "train-project-e5a79.appspot.com",
    messagingSenderId: "994093557805"
  };
  
  firebase.initializeApp(config);
  		// creating empty variables that will hold our inputs.
	    var trainName = "";
	    var destination = "";	
	    var frequency = 0;
	    var firstTrain;
	    	

	    //event listener, that will execute when we click the submit button
		$("#button").on("click",function(event){
			event.preventDefault();

		// grabs user input
		trainName = $("#trainId").val().trim();
		destination = $("#destinationId").val().trim();
		frequency = $("#frequencyId").val().trim();
		firstTrain = $("#firstTrainId").val().trim();
		

		console.log(trainName);
		console.log(destination);
		console.log(firstTrain);
		console.log(frequency);

		//clears text-boxes
		$("#trainId").val("");
		$("#destinationId").val("");
		$("#frequencyId").val("");
		$("#firstTrainId").val("");
		


			//pushing information to the firebase
			firebase.database().ref().push({
				trainName: trainName,
				destination: destination,
				frequency: frequency,
				firstTrain: firstTrain,
				
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			});

		});


//$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrain + "<td></tr>");
//});
		
		//firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
			//$("#trainDisplay").html(snapshot.val().trainName);
			//$("#destinationDisplay").html(snapshot.val().destination);
			//$("#firstDisplay").html(snapshot.val().firstTrain);
			//$("#frequencyDisplay").html(snapshot.val().frequency);

			firebase.database().ref().on("child_added",function(snapshot){
			//this will update and display on the page the input train name, destination, frequency, and firstime from the firebase database.	
			$("#trainTable > tbody").append("<tr><td>" + snapshot.val().trainName + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().frequency  + "</td><td>" + snapshot.val().firstTrain + "<td></tr>");
		})

	///////////////////////////////////////////////////////////



		//Calculation 


	    /*
	    var firstTrainConverted = moment(firstime, "HH:mm").subtract(1, "years");
		
		var currentTime = moment();
		
		var diffTime = moment().diff(moment(firstTrainConverted), "minutes");

	    var tRemainder = diffTime % frequency;

	    var tMinutesTillTrain = tFrequency - tRemainder;

	    var firstTrain = moment().add(tMinutesTillTrain, "minutes");

	    var nextTrainConverted = moment(firstTrain).format("HH:mm a");
	    */


//////////////////////////////////////////////////////////










// Make sure page is loaded before running any JS
$("document").ready(function () {

    // This is the Object array for my questions and answers
    let triviaQuestionsAndAnswers = [
        {
            question: "What was the highest selling hip-hop album to be released in the 90's?",
            answerChoices: ["Doggystle", "Life After Death", "All Eyez on Me", "Wu-Tang Forever"],
            correctAnswer: 1,
            photo: "assets/images/BiggieSmokingABlunt.gif"
        },

        {
            question: "This rapper was the first artist to have an album at number one on the Billboard 200 while serving a prison sentence",
            answerChoices: ["Snoop Doggy Dogg", "Eazy-E", "Slick Rick", "Tupac Shakur"],
            correctAnswer: 4,
            photo: "assets/images/"
        },

        {
            question: "What is the name of the third track on Nas's debut album Illmatic?",
            answerChoices: ["Life's a Bitch", "Rewind", "One Time 4 Your Mind", "Street Dreams"],
            correctAnswer: 0,
            photo: "assets/images/"
        },

        {
            question: "Big Boi and Andre 3000 of Outkast made their debut in 1992 on a remix of the track 'What About Your Friends' by this already famous group:",
            answerChoices: ["UGK", "Three Six Mafia", "TLC", "Dungeon Family"],
            correctAnswer: 0,
            photo: "assets/images/"
        },

        {
            question: "Big Boi and Andre 3000 of Outkast made their debut in 1992 on a remix of the track 'What About Your Friends' by this already famous group:",
            answerChoices: ["UGK", "Three Six Mafia", "TLC", "Dungeon Family"],
            correctAnswer: 0,
            photo: "assets/images/"
        }];

    // Creating a variable to manipulate the div id="content" on the DOM
    let content = $("#content");

    // This creates and references my timer display in the HTML that I can call in other code as needed 
    let timerDisplay = $("<div class='text' id='timer-display'></div>")

    // This creates and references my question box to display the questions and answers in
    let questionBox = $("<p class='text' id='question-box'>THIS IS WHERE MY QUESTION AND ANSWERS ARE GOING TO LIVE!!</p>")

    // This creates and references my start game button
    let startButton = $("<button id='start-button'><span id='button-text'>CAN YOU KICK IT?</span></button>")

    // Create audio element and store it in the variable streetKnowledge for when start-button is clicked
    let streetKnowledge = document.createElement("audio");

    // Setting the sound file to the audio element stored in the variable streetKnowledge
    streetKnowledge.setAttribute("src", "assets/street-knowledge.m4a");

    // This variable will hold the setInterval that runs the timer 
    let intervalId;

    // This is my time variable to make countdown start at 20
    let time = 21;

    // This variable allows the timer to be toggled off and on
    let tickingDown = false;

    // This variable holds the number of correct answers
    let numberCorrect = 0;

    // This variable holds the number of wrong answers
    let numberWrong = 0;

    // This is an empty string for the user guess
    let userGuess = "";

    // This is a variable to hold a reference to the questions and answers
    let currentQuestion;

    // This function subtracts one from the time variable and updates the html to display the new value once every second
    function decrement() {

        time--;

        // Change the text content of the timer-display HTML element held within the timerDisplay variable
        timerDisplay.html(`${time}`)

        // Stop the timer if it gets to zero
        if (time === 0) {
            stopTime();
        }
    }

    // This function runs the decrement function to happen every second until the time = 0
    function decreaseTime() {

        // This checks to see if the timer is running or not before running the function
        if (!tickingDown) {

            // This prevents timer from running more than once
            clearInterval(intervalId);

            // Runs the decrement function once every second... 
            intervalId = setInterval(decrement, 1000);

            // Changes the the variable tickingDown to true
            tickingDown = true;
        }
    }

    // This function resets the timer 
    function stopTime() {

        // Sets tickingDown back to false
        tickingDown = false;

        // This prevents timer from running more than once??  Actually I don't really know what this is doing....
        clearInterval(intervalId);

    }

    // This is my start game function
    function startGameScreen() {
        content.html(startButton);
    }

    // This function grabs a question and it's answers from the triviaQuestionsAndAnswers Object 
    function displayQuestion () {

        
        console.log(displayQuestion());

    }

    // Calling the function to the start game screen
    startGameScreen();

    // When the start Button is clicked: play sound,
    startButton.on("click", function () {
        streetKnowledge.play();

        // Display timer and call the decreaseTime function to start counting down, TODO:I want to set the time to a different color than the text!!

        // Replace the html inside the content HTML element stored in the content variable with the timer display element
        content.html(timerDisplay);

        // Call the decrease time function
        decreaseTime();

        // Display current question and answers below the timer display
        content.append(questionBox);

    });

})

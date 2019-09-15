

var questions = [
    {
        query: "What main character is beheaded in season one?",
        choices: ["Catelyn Stark", "Theon Greyjoy", "Ned Stark", "King Robert"],
        answer: 2,
    },
    {
        query: "What is Hodor's real name?",
        choices: ["Bronn", "Gendry", "Jojen", "Wylis"],
        answer: 3,
    },
    {
        query: "Which of following is not one of Daenery's dragons?",
        choices: ["Flayme", "Drogon", "Rhaegal", "Viserion"],
        answer: 0,
    },
]

function runTimer(duration) {

    var minutes = Math.floor(duration / 60)
    var seconds = duration % 60
    if (seconds < 10 && seconds >= 0) {
        seconds = "0" + seconds
    }

    $("#time-left").text(minutes + ":" + seconds);


}

function init() {
    $("#main-container").empty();
    $("#main-container").append('<p>Test your Game of Thrones knowledge. Answer the questions below to test your knowledge.</p>')
    $("#main-container").append('<a id = "start" class="btn btn-primary btn-lg" href="#" role="button">Start</a>')
    $("#start").click(runQuiz)

}

function runQuiz() {
    var duration = 120

    function decrement() {
        if (duration === 0) {
            clearInterval(intervalID)
            finalScore()
        } else {
            duration--
            runTimer(duration)
        }

    }

    $("#main-container").empty();

    $("#main-container").append("<div>Time Remaining</div>")
    $("#main-container").append('<div id="time-left"></div>')

    
    
    // questions
    for (var i = 0; i < questions.length; i++) {
        $("#main-container").append('<h2>' + questions[i].query + '</h2>');
        for (var k = 0; k < questions[i].choices.length; k++) {
            $("#main-container").append('<div class="form-check"><input class="form-check-input" type="radio" name="'+ i +'" id="radio-'+ i + '-' + k +'" value="option1" checked><label class="form-check-label" for="exampleRadios1">' + questions[i].choices[k] + '</label></div>')
        }

    }
    


    //query
    //choices


    $("#main-container").append('<a id = "submit" class="btn btn-primary btn-lg" href="#" role="button">Submit</a>')
    $("#submit").click(finalScore)

    // timer starts 60 sec
    runTimer(duration)
    intervalID = setInterval(decrement, 1000);

}

function finalScore() {
    var correct = 0
    var incorrect = 0
    var unanswered = 0
    for (var i = 0; i < questions.length; i++) {
        console.log('checked:', $("#radio-" + i + "-" + questions[i].answer).is(':checked'))
        if ($("#radio-" + i + "-" + questions[i].answer).is(':checked')){
            correct++
            
        }else{
            var found = false;
            for (var k = 0; k < questions[i].choices.length; k++){
                if ($("#radio-" + i + "-" + k ).is(':checked')) {
                    incorrect++
                    found = true;
                }

            }
            if (found === false) {
                unanswered++
            }
        }

    }

//turn off default selction
//update scoreboard
//style




    $("#main-container").empty();
    $("#main-container").append("Final Score")
    $("#main-container").append(correct);
    $("#main-container").append(inforrect); 
    $("#main-container").append(unanswered);
    //scoreboard
    //correct
    //incorrect
    //unanswered

}


function main () {
    console.log("ready!");

    init();


    for (var i = 0; i < questions.length; i++) {
        // var question = questions[i];
        // var choices = question.choices
        // var answer = questions[i].answer
        // var correct = choices[answer];
        // var query = question.query;
        // console.log(query);
        // console.log(correct);

        console.log(questions[i].query)
        console.log(questions[i].choices[questions[i].answer])

    }


    //     $(".btn").css("background-color", "blue");
    // //create a start button
    // $(".btn").click(function ());



    //button on click, 10 questions to browser
    //button on click, timer to start

    //question to browser
    //4 multiple choice answer buttons
    //only allow one button selection per question

    //"finish" button at end of questions
    //create scoreboard
    //correct
    //incorrect
    //unanswered questions
    // if (timer === 0),
    //score questions answered
    //un-answered questions === incorrect
    //final scoreboard
    //add gif under score

};

$(document).ready(main)
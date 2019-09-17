

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
    {
        query: "What is the name of Arya's direwolf?",
        choices: ["Nymeria", "Ghost", "Grey Wind", "Summer"],
        answer: 1,
    },
    {   query: "What is the name of the continent on which most of action of Game of Thrones takes place?",
        choices: ["Essos", "Sothorys", "Westeros", "Beyond the Wall"],
        answer: 3
    },
    {   query: "What substance was used during the Battle of the Blackwater to destroy Stannis Baratheon's fleet?",
        choices: ["The Strangler", "Milk of Poppy", "Essence of Nightshade", "Wildfire"],
        answer: 4,
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
    $("#main-container").append('<p>Answer the questions below to test your Game of Thrones knowledge.</p>')
    $("#main-container").append('<a id = "start" class="btn btn-primary btn-lg" href="#" role="button">Start</a>')
    $("#start").click(runQuiz)

}

function runQuiz() {
    var duration = 60

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
            $("#main-container").append('<div class="form-check"><input class="form-check-input" type="radio" name="'+ i +'" id="radio-'+ i + '-' + k +'" value="option1"><label class="form-check-label" for="exampleRadios1">' + questions[i].choices[k] + '</label></div>')
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


    //scoreboard:  print to HTML
    $("#main-container").empty();
    $("#main-container").append("Scoreboard")
    $("#main-container").append("<div>" + "Correct = " + correct + "</div");
    $("#main-container").append("<div>" + "Incorrect = " + incorrect + "</div");
    $("#main-container").append("<div>" + "Unanswered = " + unanswered + "</div>");
   
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

};

$(document).ready(main)
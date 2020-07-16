function populate(){
    if(quiz.isEnded()){
        showScores()
    }
    else{
        //showquestion
        var element = document.getElementById("question")
        element.innerHTML = quiz.getQuestionIndex().text

        // show choices
        var choices = quiz.getQuestionIndex().choices
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i)
            element.innerHTML = choices[i]
            guess("btn" + i, choices[i])

        }
        showProgress()
    }
}

function guess(id, guess){
    var button = document.getElementById(id)
    button.onclick = function(){
        quiz.guess(guess)
        populate()
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1
    var element = document.getElementById("progress")
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length

}


function showScores(){
    var gameOverHtml = "<h1>Result</h1>"
        gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + "/9" 
        var element = document.getElementById("quiz")
        element.innerHTML = gameOverHtml
        varAnswers = "hi"
}

var questions = [
    new Question ("Which country spends the most money on tourism?", ["USA","China", "Russia", "Germany"], "China"),
    new Question ("Which of these is the most environmentally friendly way of reaching your destination?", ["Flying","Cruise", "Train", "Car"], "Train"),
    new Question ("Which method is the most environmentally friendly way for seeing the city?", ["Taxi","Walking or cycling", "Boat tour", "Public transport"], "Walking or cycling"),
    new Question ("How many jobs are supported by the global tourism sector?", ["1/50","1/20", "1/10", "1/100"], "1/10"),
    new Question ("Which of these is the best choice to give money to locals?", ["All inclusive resort","Local hostel or homestay", "A big hotel", "Camping on private land"], "Local hostel or homestay"),
    new Question ("Which is the most sustainable way to pack?", ["With lots of big suitcases","Light - i can buy it all there and throw it out", "I bring my whole wardrobe", "Just what i need"], "Just what i need"),
    new Question ("Which activity is the best choice for sustainability?", ["Visit an ocean park","Get drunk and party", "Volunteer", "I am not leaving the resort"], "Volunteer"),
    new Question ("What is the most sustainable way to choose accomadation?", ["The cheapest!","On their green initiatives", "A chain I recognise", "The one in the resort"], "On their green initiatives"),
    new Question ("Which of these things is NOT considerate to the locals", ["Trying out local cusine and shops","Making an effort to learn the language", "Being rowdy", "Learning about their culture"], "Being rowdy"),
]

var quiz = new Quiz(questions)

populate()

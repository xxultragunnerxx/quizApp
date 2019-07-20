const questions = [
  {
    questionText:""
    answers ["","","",""]
    correctAnswer: ""
  }
]

const store = {
// current view we are on
currentView: "intro",
//current question we are on
currentQuestion: 0,
// the number of questions answered correctly
correctAnswers: 0,
// the number of questions answered incorrectly
incorrectAnswers: 0,
//the answer selected by the user for the current question already chosen
currentAnswer: "",
}
funtion selectView (currentView){
$("section").hide
}
const selectView (currentView){
switch (currentView){

case "intro":
$("#start-view").show()
break
case "question":
$("#start-view").show()
break
case "feedback":
$("#start-view").show()
break
case "final":
$("#start-view").show()
break

}

const questions = [
{
  questionText:'What size is the rear tire?',
  answers:['160/60r17','180/55r17','190/55r17','190/50r17'],
  correctAnswer:'160/60r17',
},
{
  questionText:'What are the three color combinations available for the 2017 year?',
  answers:['white, black, orange','red, white, blue','green, black, orange','green, black, blue'],
  correctAnswer:'white, black, orange',
},
{
  questionText:'What is the oil capacity?',
  answers:['3 quarts','3 liters','2 quarts', '2 liters'],
  correctAnswer:'2 liters',
},
{
  questionText:'What is the headlight bulb size for both the low AND high beam?',
  answers:['h4, h7','just h4','just h7','they are sealed beam headlights and non removable'],
  correctAnswer:'just h7',
},
{
  questionText:'how many pounds were they able to shave off the previous 2016 model?',
  answers:['15 lbs','20 lbs','30 lbs','40 lbs'],
  correctAnswer:'40 lbs',
},

];

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
};
function selectView(currentView){
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
};

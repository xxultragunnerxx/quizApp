//quiz questions
const questions = [
  {
    question: 'What size is the rear tire?',
    answers: ['160/60r17', '180/55r17', '190/55r17', '190/50r17'],
    correctAnswer: '160/60r17'
  },
  {
    question: 'What are the three color combinations available for the 2017 year?',
    answers: ['white, black, orange', 'red, white, blue', 'green, black, orange', 'green, black, blue'],
    correctAnswer: 'white, black, orange'
  },
  {
    question: 'What is the oil capacity?',
    answers: ['3 quarts', '3 liters', '2 quarts', '2 liters'],
    correctAnswer: '2 liters'
  },
  {
    question: 'What is the headlight bulb size for both the low AND high beam?',
    answers: ['h4, h7', 'just h4', 'just h7', 'they are sealed beam headlights and non removable'],
    correctAnswer: 'just h7'
  },
  {
    question: 'how many pounds were they able to shave off the previous 2016 model?',
    answers: ['15 lbs', '20 lbs', '30 lbs', '40 lbs'],
    correctAnswer: '40 lbs'
  }
];

//storage for the score and question number data
let questionNumber = 0;
let score = 0;

//generate the question to be used
function generateQuestion() {
  if (questionNumber < questions.length) {
    return `<div class = "question-${questionNumber}">
    <h2>${questions[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${questions[questionNumber].answers[0]}" name="answer" required>
    <span>${questions[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${questions[questionNumber].answers[1]}" name="answer" required>
    <span>${questions[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${questions[questionNumber].answers[2]}" name="answer" required>
    <span>${questions[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${questions[questionNumber].answers[3]}" name="answer" required>
    <span>${questions[questionNumber].answers[3]}</span>
    </label>
    </fieldset>
    <button type="submit" class="submitButton">Submit</button>
    </form>
    </div>`;
  } else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(5)
  }
}

//thi checks the question im on and adds to the storage
function changeQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}

//this is triggered when a question is answered correctly to add to the score storage.
function changeScore() {
  score++;
}

//updates the score
function updateScore() {
  changeScore();
  $('.score').text(score);
}

//this is executed when the quiz is initiated to remove the intro 'slide', and img and bring the questions into the DOM
function startQuiz() {
  $('.quizStart').on('click', '.startButton',
    function (event) {
      $('.quizStart').remove();
      $('.firstPicture').remove();
      $('.questionAnswerForm').css('display', 'block');
      $('.questionNumber').text(1);
    });
}

//this is checking that the user is selecting an answer and then running it against the stored question to see if the answer is correct and triggering the appropriate response
function userSelectAnswer() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${questions[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect() {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong() {
  userAnswerFeedbackWrong();
}


function renderQuestion() {
  $('.questionAnswerForm').html(generateQuestion());
}

function userAnswerFeedbackCorrect() {
  let correctAnswer = `${questions[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><p><b>Great Job!</b></p><button type=button class="nextButton">Next</button></div>`);
}

function userAnswerFeedbackWrong() {
  let correctAnswer = `${questions[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><p><b>Uh-oh....Looks like you got it wrong...</b><br>The correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

function renderNextQuestion() {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//this is triggered when all the question have been gone through
function renderResults() {
  $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3><b>Congrats on your score!<b></br>You got ${score} / 5</h3><p>Would you like to play again?</p><button class="restartButton">Restart Quiz</button><img src="assets/motorcycle2.svg" alt="motorcycle" class="responsive"></div>`);
  $('.tracker').remove();
}

//this simply reloads to clear do the quiz can start over
function restartQuiz() {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//this sets the stage for the quiz
function createQuiz() {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

//calling function to start quiz
$(createQuiz);

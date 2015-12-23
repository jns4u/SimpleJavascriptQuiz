//Create questions

var questions = [new Question("Who was the first President Of India?",["Mahatma Gandhi","Dr. Rajendra Prasad"],"Dr. Rajendra Prasad"),new Question("Who is CEO of Apple",["Tim Cook","Mark Zakarberg"],"Tim Cook")];

//Create Quiz

var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();

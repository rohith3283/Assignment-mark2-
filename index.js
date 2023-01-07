var readlinesync = require("readline-sync");

var score = 0;
var username = readlinesync.question("what's your name? ");

console.log("welcome " + username);
console.log("                    ");
console.log(" ### LET'S PLAY A FRIENDLY QUIZ ON ADOLF HITLER ### ");

console.log("                        ");


console.log("Note: while answering TURN OFF Caps lock");
console.log("              ");

function play(question, answer) {
  var useranswer = readlinesync.question(question);

  if (useranswer === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!")
  }
  console.log("current score: ", score);
  console.log("........................")
}

var questions = [{

  question: `Hilter was born in the which year?
           a: April 20, 1889
           b: June 12, 1882
           c: Nov 30, 1890\n`,
  answer: "a"
}, {
  question: `which county was hitler born in?
             a: Switzerland
             b: Austria
             c: Germany\n`,
  answer: "b"
},
{
  question: `where did hitler write mein kampf? 
            a: At home
            b: In prison
            c: A hotel in munich\n`,
  answer: "b"
},
{
  question: `which country did hitler's germany invade first?
            a: Poland
            b: Austria
            c: Andaman\n`,
  answer: "b"
},
{
  question: `Hitler was died in  which year?
            a: 1945
            b: 1999
            c: 1890\n`,
  answer: "a"
}]

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer)
}
console.log("             ");
console.log("YOU SCORED: ", score);
console.log("                 ");
console.log("     ##### thank you #####    ");





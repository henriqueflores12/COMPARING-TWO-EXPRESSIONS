var score1 = 90; //Round 1 score
var score2 = 95; //Round 2 score
var highScore1 = 75; //round 3 high score
var highScore2 = 95; //round 4 high score

//Check if score are higer than current high scores
var comparison = score1 + score2 > highScore1 + highScore2;

//Write the message into the page
var el = document.getElementById("answer");
el.textContent = "new high score: " + comparison;

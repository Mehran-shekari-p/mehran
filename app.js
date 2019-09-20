var game = ["sang", "kaghaz", "ghaychi"];
var q = prompt('sang kaghaz ghaychi????');
var o = document.getElementById('game');
var answer = document.getElementById('answer');

var rand = Math.floor(Math.random(rand) * game.length);

o.innerHTML += q + " !";
console.log(rand);



repeat();

function repeat(w) {

    if (q == game[rand]) {
        answer.innerHTML += "great you are smart!";
    } else {
        answer.innerHTML += "oh shit lets try again :)";

    }

}
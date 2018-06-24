
var win = 0;
var losse = 0;
var guess = 10;
var computerChoices = "qwertyuioplkjhgfdsazxcvbnm".split(''); // Splits into chars, returning ["0", "1", "2", "3", "4", "5"] Joins each char with a comma, returning "0,1,2,3,4,5"
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    var userGuess = event.key;
    document.getElementById("urguess").textContent += userGuess + ", ";

    guess--;
    $("#guesses").text(guess);


    if (userGuess === computerGuess) {
        alert("You Won!");

        win++;
        $("#wins").text(win);

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        guess = 10;
        $("#guesses").text(guess);

        document.getElementById("urguess").textContent = " ";


    }


    if (guess === 0) {

        alert("You Lost!");

        losse++;
        $("#losses").text(losse);

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guess = 10;
        $("#guesses").text(guess);

        document.getElementById("urguess").textContent = " ";


    }
};






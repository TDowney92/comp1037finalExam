
function rollDice() {
    var face0 = new Image()
    face0.src = "dice1.png"
    var face1 = new Image()
    face1.src = "dice2.png"
    var face2 = new Image()
    face2.src = "dice3.png"
    var face3 = new Image()
    face3.src = "dice4.png"
    var face4 = new Image()
    face4.src = "dice5.png"
    var face5 = new Image()
    face5.src = "dice6.png"
    
    
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled " + diceTotal + ".";
    if (d1 == d2) {
        status.innerHTML += " You got Doubles, Wow Nice";
    }
}
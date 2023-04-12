
//player1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomimgsrc1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimgsrc1);
// player2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomimgsrc2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);

// condition to win the game
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 win!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 win!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
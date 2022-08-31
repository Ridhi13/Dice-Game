// Dice 1
var randomNumber1 = Math.floor( Math.random() * 6) + 1;
var source1= "images/dice" + randomNumber1 +".png";
var Image1 = document.querySelector(".img1");
Image1.setAttribute("src", source1);

//Dice 2
var randomNumber2 = Math.floor( Math.random() * 6) + 1;
var source2= "images/dice" + randomNumber2 +".png";
var Image2 = document.querySelector(".img2");
Image2.setAttribute("src", source2);

//result
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}



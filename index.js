var randomNumber1= Math.random();
randomNumber1=randomNumber1*6+1;
randomNumber1=Math.floor(randomNumber1);
var img1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",img1)
var randomNumber2= Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber2=Math.floor(randomNumber2);
if(randomNumber1==randomNumber2 && randomNumber1<=5){
     randomNumber2++;
}
var img2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",img2)
var winner;
if(randomNumber1<randomNumber2){
    winner="Player2 Wins🚩";
}
else if(randomNumber1>randomNumber2){
    winner="🚩Player1 wins"
}
else{
    winner="Draw!";
}
document.querySelector("h1").innerHTML= winner;
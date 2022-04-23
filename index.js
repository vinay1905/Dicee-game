var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage1="/images/dice"+randomnumber1+".png"
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);

var randomnumber2=Math.floor(Math.random()*6)+1;//generating random number
var randomimage2="/images/dice"+randomnumber2+".png"//string concatenation
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);//selecting image and assigning new value



if(randomnumber1>randomnumber2){
document.querySelector("h1").innerHTML="Player 1 Wins.";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins.";
}
else{
    document.querySelector("h1").innerHTML="Draw Match";
}
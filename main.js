document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){

let randNum = Math.random();
   
    
if (randNum <= 0.2) {
    getElementById("answer").innerHTML = "Without a Doubt.";
}
else if (randNum <= 0.2) {
    getElementById("answer").innerHTML = "As I see it, yes.";
    
} else if (randNum <= 0.2) {
    getElementById("answer").innerHTML = "Concentrate and ask again.";
} else if (randNum <= 0.2) {
    getElementById("answer").innerHTML = "Don't count on it.";
} else if (randNum <= 0.2) {
    getElementById("answer").innerHTML = "Outlook not so good.";
}
}

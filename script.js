var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
var c1 = document.getElementById("c1");
var a2 = document.getElementById("a2");
var b2 = document.getElementById("b2");
var c2 = document.getElementById("c2");
var a3 = document.getElementById("a3");
var b3 = document.getElementById("b3");
var c3 = document.getElementById("c3");

var answer_1 = document.getElementsByName("answer_1");
var answer_2 = document.getElementsByName("answer_2");
var answer_3 = document.getElementsByName("answer_3");

var btn = document.querySelector(".submit");
var my_score = document.querySelector(".score");
var container = document.querySelector(".container");
var scoreCard = document.querySelector(".score-card");
var score = 0;

for (count = 0; count<3; count++){
    answer_1[count].addEventListener("click",function(event){
        var answer_text1 = event.target.value;
        if (answer_text1 === "Russia"){
            score++;
        }
    })
}

for (count = 0; count < 3; count++) {
    answer_2[count].addEventListener("click", function (event) {
        var answer_text1 = event.target.value;
        if (answer_text1 === "Virat Kohli") {
            score++;
        }
    })
}

for (count = 0; count < 3; count++) {
    answer_3[count].addEventListener("click", function (event) {
        var answer_text1 = event.target.value;
        if (answer_text1 === "Shekel") {
            score++;
        }
    })
}

btn.addEventListener("click", function(){
    var result = score;
    var h4 = document.createElement("h4");
    h4.innerHTML = `Score: ${result}`;
    my_score.append(h4);
    container.style.display = "none";
    scoreCard.style.display = "block";

    var message = document.getElementById("appreciation");
    if(result === 3){
        message.innerHTML = "Great Work!"
    }
    else if (result === 2){
        message.innerHTML = "Good Try!"
    }
    else {
        message.innerHTML = "Better Luck Next Time!"
    }

})



QuestionLink= "//lamp.cse.fau.edu/~zinthapanya2016/WeBinary/lessons/lesson3/questions.php"
AnswerLink= "//lamp.cse.fau.edu/~zinthapanya2016/WeBinary/lessons/lesson3/answers.php"

var id = 1;
var question;
document.getElementById("test").innerHTML = Start();
var Ans;

function Start(){
    question = Question(id);
    Ans = Answer(id);
    
    return "Question " + id + "/10: " + question;
}

function Question(identity){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("GET", QuestionLink + "?id=" + identity, false);
    xmlhttp.send();
    return xmlhttp.responseText;
    
}

function Answer(identity){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("GET", AnswerLink + "?id=" + identity, false);
    xmlhttp.send();
    return xmlhttp.responseText;
    
}

document.getElementById("submit").onclick = function(){
    var Temp = document.getElementById("answer").value;
    if (Temp == Ans){
        alert('Correct!');
    }
    else{
        alert('Incorrect!');
    }
}

document.getElementById("show").onclick = function(){
    alert('The answer to this question is: ' + Ans);
}

document.getElementById("right").onclick = function(){
    if ((id + 1) > 10){
        
    }
    else{
        id = id + 1;
        Ans = Answer(id);
        question = Question(id);
        document.getElementById("test").innerHTML = "Question " + id + "/10: " + question;
    }
}

document.getElementById("left").onclick = function(){
    if ((id - 1) < 1){
        
    }
    else{
        id = id - 1;
        Ans = Answer(id);
        question = Question(id);
        document.getElementById("test").innerHTML = "Question " + id + "/10: " + question;
    }
}


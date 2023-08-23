player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
question_turn="player1"
answer_turn="player2"
document.getElementById("player1_name").innerHTML=player1_name
document.getElementById("player2_name").innerHTML=player2_name
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_questions").innerHTML="question turn:"+player1_name
document.getElementById("player_answer").innerHTML="answer turn:"+player2_name
function send() {
    w=document.getElementById("word").value
    word=w.toLowerCase()
    question=word
    c1=word.charAt(1)
    l=Math.floor(word.length/2)
    c2=word.charAt(l)
    l2=word.length-1
    c3=word.charAt(l2)
    rc1=word.replace(c1,"_")
    rc2=rc1.replace(c2,"_")
    rc3=rc2.replace(c3,"_")
    q_word="<h4 id='word_replace'>Q. "+rc3+"</h4>"
    inputbox="<br>Answer : <input type='text' id='input_check_box'>"
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>" 
    row=q_word+inputbox+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
function check() {
    getAnswer=document.getElementById(id='input_check_box').value
    answer=getAnswer.toLowerCase()
    if (answer==question) {
       if (answer_turn=="player1") {
        player1_score=player1_score+1
        document.getElementById("player1_score").innerHTML=player1_score
       } 
       else{
        player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score 
       }
    }
    if (question_turn=="player1") {
        question_turn="player2"
        document.getElementById("player_questions").innerHTML="question turn:"+player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("player_questions").innerHTML="question turn:"+player1_name
    }
    if (answer_turn=="player1") {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn:"+player2_name
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn:"+player1_name
    }
    document.getElementById("output").innerHTML=""
}
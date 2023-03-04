"use strict";

const body = document.querySelector("body")

const newBtn = document.querySelector(".new-game")
const checkBtn = document.querySelector(".btn-check")

const highScoreEl = document.querySelector(".current-high-score")
const currentScoreEl = document.querySelector("#current-score")
const attemptsLeftEl = document.querySelector("#attempts-left")

const messageEl = document.querySelector(".message")
const inputEl = document.querySelector(".input-number")
const secretNumEl = document.querySelector(".secret-number")


let currentScore = 20;
let highScore = 0;
let attemptsLeft = 10;


let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum)

checkBtn.addEventListener("click",function(){
    if (attemptsLeft > 0){
        attemptsLeft--;
        attemptsLeftEl.textContent = attemptsLeft;
        let guess = +inputEl.value;

        if (!guess){
            messageEl.textContent = "👾 No number or 0 is entered"
        } else if(guess === secretNum){
            messageEl.textContent = "🏆 You won"
            body.style.backgroundColor = "orangeRed"
            checkBtn.classList.add("disabled")
            secretNumEl.textContent = secretNum

            highScore = currentScore > highScore ? currentScore : highScore;
            highScoreEl.textContent = highScore;
        } else if ( guess !== secretNum){
            let message = guess > secretNum ? "You guessed too high 😎" : "You guessed too low 😭"
            messageEl.textContent = message
            currentScore--;
            currentScoreEl.textContent = currentScore;
            body.style.backgroundColor = "green";
            setTimeout(function(){
                body.style.backgroundColor = "black";
            }, 200);
        }
    } 
    else{
        messageEl.textContent = "You no sabi anything 😠"
    }
});

newBtn.addEventListener("click",function(){
   attemptsLeft = 10
   attemptsLeftEl.textContent = attemptsLeft
   currentScore = 20 
   currentScoreEl.textContent = currentScore
   checkBtn.classList.remove("disabled")
   body.style.backgroundColor = "black"
   
   let message = "Guess a number between 1 - 20"
   messageEl.textContent = message
   inputEl.value = ""

   secretNum =  Math.trunc(Math.random() * 20) + 1;
   secretNumEl.textContent = '?'
   console.log(secretNum)
   
  
  
})





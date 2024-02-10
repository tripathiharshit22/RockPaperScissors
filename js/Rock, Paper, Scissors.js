let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScoreTxt = document.querySelector("#user-score")
const compScoreTxt = document.querySelector("#comp-score")
let resetBtn = document.querySelector("#reset-btn")


const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]
    const Randomidx = Math.floor(Math.random() * 3)
    return options[Randomidx]
}

const drawGame = () => {
    msg.innerText = "Game Draw! Play Again"
    msg.style.backgroundColor = "#04151F"
}

const resetGame = () => {
    msg.innerText = `Play Your Move`
    msg.style.backgroundColor="#04151F"
    userScoreTxt.innerText = 0
    compScoreTxt.innerText = 0
    userScore = 0
    compScore = 0

}
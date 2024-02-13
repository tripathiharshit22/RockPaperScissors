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

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScoreTxt.innerText = userScore
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#358600"
    }
    else {
        compScore++
        compScoreTxt.innerText = compScore
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "#A4031F"
    }
}

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genCompChoice()
    if (userChoice === compChoice) {
        //Game Draw
        drawGame()
    }
    else {
        let userWin = true
        if (userChoice === "Rock") {

            //Paper, Scissors
            userWin = compChoice === "Paper" ? false : true
            //userChoice= Rock , if compChoice= Paper too false ? if compChoice= Scissors too true
        }
        else if (userChoice === "Paper") {

            //Rock, Scissors
            userWin = compChoice === "Scissors" ? false : true
        }
        else {//userChoice==="Scissors"

            //Rock ,Paper
            userWin = compChoice === "Rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}


choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id")
    choice.addEventListener("click", () => {
        playGame(userChoice)

    })

});

resetBtn.addEventListener("click", resetGame)

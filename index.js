let homeEL = document.getElementById("scoreHome")
let awayEL = document.getElementById("scoreAway")
let gameEL = document.getElementById("game-el")
let homeCount = 0
let awayCount = 0
let gameCount = 1


/* Attempted to change color of text based on which score was higher
function textColor() {
    if (homeCount < awayCount) {
        homeEL.style.color = "#14f539"
    }
    else{
        awayEL.style.color = "#f72b14"
    }
} 
*/

function HomeOne(){
    homeCount += 1
    homeEL.textContent = homeCount
    scoreLimit()
}

function HomeTwo(){
    homeCount += 2
    homeEL.textContent = homeCount
    scoreLimit()
}

function HomeThree(){
    homeCount += 3
    homeEL.textContent = homeCount
    scoreLimit()
}
function AwayOne(){
    awayCount += 1
    awayEL.textContent = awayCount
    scoreLimit()
}

function AwayTwo(){
    awayCount += 2
    awayEL.textContent = awayCount
    scoreLimit()
}

function AwayThree(){
    awayCount += 3
    awayEL.textContent = awayCount
    scoreLimit()
}

gameEL.textContent = "Game 1"
function NewGame() {
    gameCount = gameCount + 1
    gameEL.textContent = "Game " + gameCount
    homeEL.textContent = 0
    homeCount = 0
    awayEL.textContent = 0
    awayCount = 0

    if (gameCount == 10) {
        gameCount = 0
    }
}

function scoreLimit() {
    if (homeCount == 100) {
        homeCount = 0
        NewGame()
    }

    if (awayCount == 100) {
        awayCount = 0
        NewGame()
    }
}
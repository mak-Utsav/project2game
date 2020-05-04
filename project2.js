let user_score = 0
let comp_score = 0
const user_score_span = document.getElementById('user-score')
const comp_score_span = document.getElementById('comp-score')
const scoreboard_div = document.querySelector('.score-board')
const result_div = document.querySelector('.result')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const rock_scissors = document.getElementById('s')

function getcomputerChoice() {
    const choices = ['r', 'p', 's']
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice] 
}

function convertWord(letter) {
    if (letter == "r") return "Rock"
    if (letter == "p") return "Paper"
    return "Scissors"
}

function wins (user_choice, comp_choice) {
    user_score++;
    user_score_span.innerHTML = user_score;
    comp_score_span.innerHTML = comp_score;
    result_div.innerHTML = convertWord(user_choice) + " " + "beats" + " " + convertWord(comp_choice) + " " + "You win!!!"
}

function lose(user_choice, comp_choice) {
    comp_score++;
    user_score_span.innerHTML = user_score;
    comp_score_span.innerHTML = comp_score;
    result_div.innerHTML = convertWord(comp_choice) + " " + "beats" + " " + convertWord(user_choice) + " " + "You lose!!!"
}

function draw(user_choice, comp_choice) {
    result_div.innerHTML = "It's a draw!!!"
}

function game(user_choice) {
    const comp_choice = getcomputerChoice()
    switch (user_choice + comp_choice) {
        case "rs":
        case "pr":
        case 'sp':
            wins(user_choice, comp_choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(user_choice, comp_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(user_choice, comp_choice);
            break;
    }
}

function main() {
rock_div.addEventListener("click", function() {
    game('r')
})

paper_div.addEventListener("click", function() {
    game('p')
})

scissors_div.addEventListener("click", function() {
    game('s')
})
}

main()
let hole = 9;
let lastHole;
let timeUp = false;
let score = 0;
let countdown;
let gameTime = 10; 


const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}


const randomHole = (holes) => {
    const id = Math.floor(Math.random() * holes.length);
    const hole = holes[id];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

const show = () => {
    let holes = document.querySelectorAll('.hole');
    let hole = randomHole(holes);
    let time = randomTime(400, 1000);

    hole.classList.add("up")
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp){
            show();
        }
    }, time);

}

const startGame = () => {
    scoreBoard.innerText = 0;
    score = 0;
    timeUp = false;
    let timeLeft = gameTime;
    startBtn.disabled = true;

    show();
    countdown = setInterval(() => {
        timeLeft--;
        time.innerText = timeLeft;
        if(timeLeft <= 0){
            clearInterval(countdown);
            alert(`Game Over! Final Score: ${score}`);
            timeUp = true;
            startBtn.disabled = false; 
        }
    },1000);

}


const smash = () => {
    score++;
    scoreBoard.innerText = score;
}
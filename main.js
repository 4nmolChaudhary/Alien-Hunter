const cursor = document.querySelector('.cursor');
const ufos = document.querySelectorAll('.ufo');
const aliens = document.querySelectorAll('.alien');
const scoreboard = document.querySelector('.scoreboard');
const clock = document.querySelector('.time-bar');
const highscore = document.querySelector('.highscore');
let lastUfo;
let timeUp = false;
let aim = false;
let score;
let clockTime;
let high;

const hs = localStorage.getItem('AlienHunter.highScore');
if (hs) {
    highscore.textContent = `Highscore : ${hs}`;
    high = hs;
}
else {
    high = 0;
    highscore.textContent = `Highscore : ${0}`;
}
const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const randomUfo = (ufos) => {
    const ind = Math.floor(Math.random() * ufos.length);
    const ufo = ufos[ind];
    if (ufo === lastUfo) {
        return randomUfo(ufos);
    }
    lastUfo = ufo;
    return ufo;
}

const peep = () => {
    const time = randomTime(200, 1500);
    const ufo = randomUfo(ufos);
    ufo.classList.add('up');
    setTimeout(() => {
        ufo.classList.remove('up');
        if (!timeUp) peep()
    }, time)
}

startGame = () => {
    scoreboard.textContent = `Score : ${0}`;
    clock.textContent = `Time Left : ${30}s`;
    timeUp = false;
    clockTime = 30;
    score = 0;
    peep();
    let changeTime = setInterval(() => {
        clockTime--;
        clock.textContent = `Time Left : ${clockTime}s`;
    }, 1000);
    setTimeout(() => {
        timeUp = true;
        aim = false;
        clearInterval(changeTime);
        if (score > high) {
            localStorage.setItem('AlienHunter.highScore', score);
            highscore.textContent = `Highscore : ${score}`;
        }
    }, 30000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    score++;
    scoreboard.textContent = `Score : ${score}`;
    e.path[1].classList.remove('up');
}

aliens.forEach(alien => alien.addEventListener('click', e => bonk(e)));
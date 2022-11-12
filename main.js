const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const purple = document.querySelector('.purple')
const pink = document.querySelector('.pink')
const orange = document.querySelector('.orange')
const sequence = document.querySelector('.sequence')
const reset = document.querySelector('.reset')

const body = document.body

function chageColors () {
    red.addEventListener('click', () => {
        setTimeout(() => {
            body.style.backgroundColor = "red"
        },1000)
        console.log(red);
    })
    yellow.addEventListener('click', () => {
        setTimeout(() => {
            body.style.backgroundColor = "yellow"
        },1000)
        console.log(yellow);
    })
    green.addEventListener('click', () => {
        setTimeout(() => {
            body.style.backgroundColor = "green"
        },1000)
        console.log(green);
    })
    purple.addEventListener('click', ()=> {
        setTimeout(() => {
            body.style.backgroundColor = "purple"
        },1000)
        console.log(purple);
    })
    pink.addEventListener('click',()=> {
        setTimeout(() => {
            body.style.backgroundColor = "pink"
        },1000)
        console.log(pink);
    })
    orange.addEventListener('click', ()=> {
        setTimeout(() => {
            body.style.backgroundColor = "orange"
        },1000)
        console.log(orange);
    })
    blue.addEventListener('click', () => {
        setTimeout(() => {
            body.style.backgroundColor = "blue"
        },1000)
        console.log(blue);
    })
    reset.addEventListener('click', () => {
        setTimeout(() => {
            body.style.backgroundColor = "white"
        },500)
        console.log(reset);
    })
}
chageColors()
const colors = ['blue','red','yellow', 'green','purple', 'pink', 'orange'];
const refs = {
    body: document.body,
    sequence: document.querySelector('button[data-action = "sequence"]'),
    stop: document.querySelector('button[data-action = "stop"]'),

}


const INTERVAL_DELAY = 1000;

let intervalId = null;


refs.sequence.addEventListener('click', changeColor);

refs.stop.addEventListener('click', stop);


const randomIntegerFromInterval = (min, max) => {

  return Math.floor(Math.random() * (max - min + 1) + min);

};


function changeColor() {

    intervalId = setInterval(() => {

        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

    }, INTERVAL_DELAY);

    refs.sequence.disabled = true;

};


function stop() {

    clearInterval(intervalId);

    refs.sequence.disabled = false;

}
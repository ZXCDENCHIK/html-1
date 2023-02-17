const sb = document.querySelector('#start')
const sc = document.querySelectorAll('.screen')
const tl = document.querySelector('#tl')
const timeEl = document.querySelector('#time')
const ssc = document.querySelector('#ssc')
const board = document.querySelector('#board')
const colors = ['#2e09f5','#d8ab11','#8b84d5','#bb9e1f','#ea70ee','#84cc76','#acb41f','#ad98b5','#40f335','#3ea7cf']
let score = 0
let time = 0

sb.addEventListener('click', (event) => {
    event.preventDefault()
    sc[0].classList.add('up')
})

tl.addEventListener('click', (event) => {
    if (event.target.classList.contains('tb'))
    {
        time = +event.target.getAttribute('data-time')
        sc[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle'))
    {
        score++
        event.target.remove()
        cRC()
        setScore()
    }
})

function startGame()
{
    setInterval(decreaseTime, 1000)
    cRC()
    setScore()
}

function decreaseTime()
{
    if(time === 0)
    {
        gameOver()
    }
    else
    {
        let current = --time
        if(current < 10)
        {
            current = `0${current}`
        }
        setTime(current)
    }
}

function gameOver()
{
    timeEl.parentNode.classList.add('hide')
    ssc.parentNode.classList.add('hide')
    board.innerHTML = `<h1>СЧЁТ: <span class="primary">${score}</span></h1>`
}

function setTime(value)
{
    timeEl.innerHTML = `00:${value}`
}

function setScore()
{
    ssc.innerHTML = `${score}`
}

function cRC()
{
    if(time > 0)
    {
        const circle = document.createElement('div')
        const size = gRN(25, 40)
        const {width, height} = board.getBoundingClientRect()
        const x = gRN(0, width - size)
        const y = gRN(0, height - size)

        circle.classList.add('circle')
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        circle.style.background = gRC()

        board.append(circle)
    }
}

function gRN(min, max)
{
    return Math.floor(Math.random() * (max - min) + min)
}

function gRC()
{
    return colors[Math.floor(Math.random() * colors.length)]
}
const minutesEl = document.querySelector (".minutes")
const secondsEl = document.querySelector (".seconds")
const milsecondsEl = document.querySelector (".milseconds")


const startbtn = document.querySelector ("#start")
const pausebtn = document.querySelector ("#pause")
const continuebtn = document.querySelector ("#continue")
const stopbtn = document.querySelector ("#stop")

let interval;
let minutes = 0
let seconds = 0
let milseconds = 0
let isPaused = false


startbtn.addEventListener("click",()=>{
    isPaused = false
    interval = setInterval(()=>{
        if(!isPaused) {
            milseconds+=10
            if (milseconds ==1000) {
                milseconds=0
                seconds++
                if (seconds==60){
                    seconds=0;
                    minutes+=1 }}

        minutesEl.textContent= formatTime(minutes)
        secondsEl.textContent= formatTime(seconds)
        milsecondsEl.textContent = formatTime(milseconds)

}},10)})


function formatTime(t) {
    return t<10?`0${t}`: t
}

function formatMil(t) {
    return t<100?t.padStart("3",0): t
}


pausebtn.addEventListener ("click", ()=> {
    if (milseconds>=1) {
    isPaused = true

    startbtn.classList.toggle("invisible")
    pausebtn.classList.toggle("invisible")
    continuebtn.classList.toggle("invisible")
    stopbtn.classList.toggle("invisible")}

    else {
        ""
    }


})


continuebtn.addEventListener ("click",()=>{
    isPaused = false

    startbtn.classList.toggle("invisible")
    pausebtn.classList.toggle("invisible")
    continuebtn.classList.toggle("invisible")
    stopbtn.classList.toggle("invisible")
} )


stopbtn.addEventListener("click", stop)

function stop(){
    clearInterval(interval)
    seconds = 0
    milseconds = 0
    minutes = 0

    secondsEl.textContent = "00"
    milsecondsEl.textContent = "00"
    minutesEl.textContent = "00"
    isPaused=true

    startbtn.classList.toggle("invisible")
    pausebtn.classList.toggle("invisible")
    continuebtn.classList.toggle("invisible")
    stopbtn.classList.toggle("invisible")

}
    
    

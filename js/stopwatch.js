const hours = document.querySelector(".stopwatch__hours")
const minutes = document.querySelector(".stopwatch__minutes")
const seconds = document.querySelector(".stopwatch__seconds")


const go = () => {
    seconds.innerHTML++
    if(seconds.innerHTML >= 4){
        minutes.innerHTML++
        seconds.innerHTML = 0
    }
    if(minutes.innerHTML >= 4){
        hours.innerHTML++
        minutes.innerHTML = 0
    }
    setTimeout(go, 1000)
}

go()
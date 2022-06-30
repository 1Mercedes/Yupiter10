const secArr = document.querySelector(".s")
const minArr = document.querySelector(".m")
const HourArr = document.querySelector(".h")
const hourNum = document.querySelector(".hours")
const minNum = document.querySelector(".minutes")

// const addZero = (number) => (number < 10 ?)

function addZero(number) {
    if (number < 10) {
        return "0" + number
    } else {
        return number
    }
}


function clock() {
    const time = new Date();
    const second = time.getSeconds() * 6
    const minute = time.getMinutes() * 6
    const hours = time.getMinutes() * 30
    secArr.style.transform = `rotate(${second}deg)`
    minArr.style.transform = `rotate(${minute}deg)`
    HourArr.style.transform = `rotate(${hours}deg)`

    hourNum.innerHTML = addZero(time.getHours())
    minNum.innerHTML = addZero(time.getMinutes())

    setTimeout(clock, 1000)
}

clock()

const tabsItem = document.querySelectorAll(".tabsItem")
const tabsContentItem = document.querySelectorAll(".tabsContentItem")

function switcher(bosilgan) {
    for (let i = 0; i < tabsItem.length; i++) {
        tabsItem[i].classList.remove("active")
        tabsContentItem[i].classList.remove("active")
    }

    tabsItem[bosilgan].classList.add("active")
    tabsContentItem[bosilgan].classList.add("active")
}

for (let i = 0; i < tabsItem.length; i++) {
    const item = tabsItem[i]
    item.onclick = () => switcher(i)
}
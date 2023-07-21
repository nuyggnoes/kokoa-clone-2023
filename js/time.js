const clock = document.querySelector(".status-bar__column #clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}`);
}

function sayTime() {
    clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock,10000);

let clockDigital = document.querySelector(".digital");
/* let clockDigital = document.getElementsByClassName("digital"); */
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock(){
    
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    clockDigital.innerHTML = `${zero(hour)}:${zero(minute)}:${zero(second)}`

    let sDeg = (6 * second) - 90;
    let mDeg = (6 * minute) - 90;
    let hDeg = (30 * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}
updateClock()
setInterval(updateClock, 1000)



function zero(time){
    if (time < 10) {
        return `0${time}`
    }else{
        return time
    }
}
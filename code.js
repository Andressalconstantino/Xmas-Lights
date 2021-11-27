const circle = document.getElementsByClassName('circle')
const on1 = document.getElementById('on')
const off1 = document.getElementById('off')
let len = circle.length;
const on = function() {
    for (let i = 0; i < len; i++) {
        circle[i].removeAttribute("style");
        circle[i].style.animationPlayState = "running";
        circle[i].style.WebkitAnimationPlayState = "running";
    }
}

const off = function() {

    for (let i = 0; i < len; i++) {
        circle[i].style.animation = "none";
        circle[i].style.background = "#b3b3cc";
    }
}

on1.addEventListener('click', on);
off1.addEventListener('click', off)
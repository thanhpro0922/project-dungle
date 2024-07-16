var i = 0;
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
var pause = false;
const moveRight = () => {
    slides[i].className = "slide";
    i = (i + 1) % slides.length;
    slides[i].className = "slide active";
    let xValue = -150 * i;
    slider.style.transform = `translateX(${xValue}px)`;
};
const moveLeft = () => {
    slides[i].className = "slide";
    i = (i - 1 + slides.length) % slides.length;
    slides[i].className = "slide active";
    let xValue = -150 * i;
    slider.style.transform = `translateX(${xValue}px)`;
};

const buttonClickRight = document.querySelector("[button-click-right]");
const buttonClickLeft = document.querySelector("[button-click-left]");
buttonClickRight.addEventListener("click", () => {
    moveRight();
});
buttonClickLeft.addEventListener("click", () => {
    moveLeft();
});

const interval = setInterval(() => {
    if (!pause) {
        moveRight();
    }
}, 2000);

const playPause = () => {
    let button = document.querySelector("[button-click-play]");
    let state = button.getAttribute("data-state");
    let icon = button.querySelector(".icon i");
    if (state === "pause") {
        button.setAttribute("data-state", "play");
        icon.className = "fa-solid fa-play";
        pause = true;
    } else {
        button.setAttribute("data-state", "pause");
        icon.className = "fa-solid fa-pause";
        pause = false;
    }
};

const buttonClickPlay = document.querySelector("[button-click-play]");
buttonClickPlay.addEventListener("click", () => {
    playPause();
});

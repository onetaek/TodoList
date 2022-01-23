const images = ["1.mp4","2.mp4","3.mp4","4.mp4","5.mp4","6.mp4",
    "7.mp4","8.mp4"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const background = document.querySelector("video");

background.src =`./img/${chosenImage}`;
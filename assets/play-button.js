const video = document.getElementById("video");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.removeProperty("display"); // Remove the display property
    }
});

video.addEventListener("play", function () {
    playButton.style.display = "none";
});

video.addEventListener("pause", function () {
    playButton.style.removeProperty("display"); // Remove the display property
});
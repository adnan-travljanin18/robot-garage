const video = document.getElementById("video");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.display = "flex";
    }
});

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.display = "flex";
    }
});

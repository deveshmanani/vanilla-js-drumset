function playAudio(e) {
    console.log(e);
    
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

window.addEventListener("keydown", (e) => playAudio(e));
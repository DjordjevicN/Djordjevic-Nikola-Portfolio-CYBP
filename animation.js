

// // MUSIC 
let musicBtn = document.querySelector('.sound-settings');

musicBtn.addEventListener('click', () => {
    let music = document.querySelector('.player');
    let soundIcon = document.querySelector('.fa-volume-up');
    music = document.querySelector('.player');
    if (musicBtn.classList.contains('muted')) {
        music.play();
        musicBtn.classList.remove('muted');
        soundIcon.style.color = "var(--y-non-selected-text)";
    } else {
        music.pause();
        musicBtn.classList.add('muted');
        soundIcon.style.color = "red";

    }

})
// /MUSIC

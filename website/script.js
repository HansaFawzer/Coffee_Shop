let nav = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick =()=>{
    nav.classList.toggle('active');
}
window.onscroll = ()=>{
    nav.classList.remove('active');
    
}

const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const restartBtn = document.getElementById('restartBtn');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

restartBtn.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
  playPauseBtn.textContent = 'Pause';
});
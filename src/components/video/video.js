const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const progress= document.querySelector('.player__progress');
const progressFill = document.querySelector('.player__filled');
const playBtn = document.querySelector('.player__button');
const fullBtn = document.querySelector('.player__full');

function togglePlay () {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function changeButton () {
	if (video.paused) {
		playBtn.style.backgroundImage = 'url(images/play.svg)';
	} else {
		playBtn.style.backgroundImage = 'url(images/pause.svg)';
	}
}

function videoUpdate () {
	const currentTime = (video.currentTime / video.duration) * 100;
	progressFill.style.width = `${currentTime}%`;
}

function handleProgress (e) {
	const time = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = time;
}

function fullscreen () {
	player.webkitRequestFullScreen();
}

video.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);
video.addEventListener('pause', changeButton);
video.addEventListener('play', changeButton);
video.addEventListener('timeupdate', videoUpdate);

progress.addEventListener('click', handleProgress);
let isMouseDown = false;
progress.addEventListener('mousemove', e => isMouseDown && handleProgress(e));
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mouseup', () => isMouseDown = false);

fullBtn.addEventListener('click', fullscreen);
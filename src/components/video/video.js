$(document).ready(function() {
	const $videos = $('.player');

  $videos.each((index, item) => {
    new Video($(item));
  });
});

class Video {
	constructor(playerElement) {
		this.$playerElement = playerElement;
		this.$video = playerElement.find('.player__video');
		this.$progress = playerElement.find('.player__progress');
		this.$progressFill = playerElement.find('.player__filled');
		this.$playBtn = playerElement.find('.player__button');
		this.$fullBtn = playerElement.find('.player__full');
		this.$info = playerElement.find('.player__info');

		this.init();
	}

	init() {
		this.$video.on('click', this.togglePlay);
		this.$playBtn.on('click', this.togglePlay);
		this.$video.on('pause', this.changeButton);
		this.$video.on('play', this.changeButton);
		this.$video.on('timeupdate', this.videoUpdate);

		this.$progress.on('click', this.handleProgress);
		this.isMouseDown = false;
		this.$progress.on('mousemove', event => this.isMouseDown && this.handleProgress(event));
		this.$progress.on('mousedown', () => this.isMouseDown = true);
		this.$progress.on('mouseup', () => this.isMouseDown = false);

		this.$fullBtn.on('click', this.onFullscreen);
	}

	togglePlay = () => {
		if (this.$video.prop('paused')) {
			this.$video.trigger('play');
			this.$info.css('opacity', 0);
		} else {
			this.$video.trigger('pause');
			this.$info.css('opacity', 1);
		}
	}
	
	changeButton = () => {
		if (this.$video.prop('paused')) {
			this.$playBtn.css('backgroundImage', 'url(images/play.svg)');
		} else {
			this.$playBtn.css('backgroundImage', 'url(images/pause.svg)');
		}
	}
	
	videoUpdate = () => {
		const currentTime = (this.$video.prop('currentTime') / this.$video.prop('duration')) * 100;
		this.$progressFill.css('width', `${currentTime}%`);
	}
	
	handleProgress = (event) => {
		const time = (event.offsetX / this.$progress.outerWidth()) * this.$video.prop('duration');
		this.$video.prop('currentTime', time);
	}
	
	onFullscreen = () => {
		(this.$playerElement)[0].webkitRequestFullScreen();
	}
}
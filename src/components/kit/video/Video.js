import * as pauseImage from './img/pause.svg';
import * as playImage from './img/play.svg';

class Video {
  constructor(playerElement) {
    this.$playerElement = playerElement;
    this.$video = playerElement.find('.js-player__video');
    this.$progress = playerElement.find('.js-player__progress');
    this.$progressFill = playerElement.find('.js-player__progress-bar');
    this.$playBtn = playerElement.find('.js-player__button');
    this.$fullBtn = playerElement.find('.js-player__btn-fullscreen');
    this.$info = playerElement.find('.js-player__info');

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
    this.$progress.on('mousedown', () => {
      this.isMouseDown = true;
    });
    this.$progress.on('mouseup', () => {
      this.isMouseDown = false;
    });

    this.$fullBtn.on('click', this.onFullscreen);
  }

  togglePlay = () => {
    const action = this.$video.prop('paused') ? 'play' : 'pause';
    const opacity = this.$video.prop('paused') ? 0 : 1;
    this.$video.trigger(`${action}`);
    this.$info.css('opacity', `${opacity}`);
  }

  changeButton = () => {
    this.$video.prop('paused') ?
      this.$playBtn.css('backgroundImage', `url(${playImage})`)
      : this.$playBtn.css('backgroundImage', `url(${pauseImage})`)
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

export default Video;

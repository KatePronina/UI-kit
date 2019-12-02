import * as pauseImage from './img/pause.svg';
import * as playImage from './img/play.svg';

class Video {
  constructor(playerElement) {
    this.findDOMElements(playerElement);
    this.addEvents();
  }

  findDOMElements(playerElement) {
    this.$playerElement = playerElement;
    this.$video = playerElement.find('.js-player__video');
    this.$progress = playerElement.find('.js-player__progress');
    this.$progressFill = playerElement.find('.js-player__progress-bar');
    this.$playButton = playerElement.find('.js-player__button');
    this.$fullButton = playerElement.find('.js-player__button-fullscreen');
    this.$info = playerElement.find('.js-player__info');
  }

  addEvents() {
    this.$video.on('click', this.handleVideoClick);
    this.$playButton.on('click', this.handlePlayButtonClick);
    this.$video.on('pause', this.handleVideoPause);
    this.$video.on('play', this.handleVideoPlay);
    this.$video.on('timeupdate', this.handleVideoTimeUpdate);

    this.$progress.on('click', this.handleProgressClick);
    this.isMouseDown = false;
    this.$progress.on('mousemove', event => this.isMouseDown && this.handleProgressClick(event));
    this.$progress.on('mousedown', this.handleProgressMouseDown);
    this.$progress.on('mouseup', this.handleProgressMouseUp);

    this.$fullButton.on('click', this.handleFullButtonClick);
  }

  handleProgressMouseDown = () => {
    this.isMouseDown = true;
  }

  handleProgressMouseUp = () => {
    this.isMouseDown = false;
  }

  handleVideoClick = () => {
    this.togglePlay();
  }

  handlePlayButtonClick = () => {
    this.togglePlay();
  }

  handleVideoPause = () => {
    this.changeButtonImage();
  }

  handleVideoPlay = () => {
    this.changeButtonImage();
  }

  togglePlay = () => {
    const action = this.$video.prop('paused') ? 'play' : 'pause';
    const opacity = this.$video.prop('paused') ? 0 : 1;
    this.$video.trigger(`${action}`);
    this.$info.css('opacity', `${opacity}`);
  }

  changeButtonImage = () => {
    if (this.$video.prop('paused')) {
      this.$playButton.css('backgroundImage', `url(${playImage})`);
    } else {
      this.$playButton.css('backgroundImage', `url(${pauseImage})`);
    }
  }

  handleVideoTimeUpdate = () => {
    const currentTime = (this.$video.prop('currentTime') / this.$video.prop('duration')) * 100;
    this.$progressFill.css('width', `${currentTime}%`);
  }

  handleProgressClick = (event) => {
    const time = (event.offsetX / this.$progress.outerWidth()) * this.$video.prop('duration');
    this.$video.prop('currentTime', time);
  }

  handleFullButtonClick = () => {
    (this.$playerElement)[0].webkitRequestFullScreen();
  }
}

export default Video;

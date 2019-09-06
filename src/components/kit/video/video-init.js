import Video from './Video';

$(document).ready(() => {
  const $videos = $('.js-player');

  $videos.each((index, item) => {
    new Video($(item));
  });
});

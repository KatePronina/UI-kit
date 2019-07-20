import Video from './Video';

$(document).ready(() => {
  const $videos = $('.player');

  $videos.each((index, item) => {
    new Video($(item));
  });
});

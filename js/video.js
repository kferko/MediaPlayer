$(document).ready(function(){

// full screen background - youtube video
$('#video1').YTPlayer({
    fitToBackground: true,
    videoId: 'V_YlZ1JdcVk',
    playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0,
      loopPlaylists: false,
      start: 0,
    }
});
$('#video2').YTPlayer({
    fitToBackground: true,
    videoId: 'SL6d4rQJsQY',
    playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0,
      loopPlaylists: false,
      start: 10
    }
});

// image over top of bkg video fade up and down over time
var vol1 = $('#vidoverlay1');
function fadeIt1() {
       vol1.animate({opacity:'0.2'}, 2000);
       vol1.animate({opacity:'0.8'}, 6000);
       vol1.animate({opacity:'0.5'}, 9000, fadeIt1);
    }
fadeIt1();

var vol2 = $('#vidoverlay2');
function fadeIt2() {
       vol2.animate({opacity:'0.4'}, 5000);
       vol2.animate({opacity:'0.1'}, 2000);
       vol2.animate({opacity:'0.6'}, 8000, fadeIt2);
    }
fadeIt2();

});
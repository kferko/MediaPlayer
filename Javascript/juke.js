// OO JavaScript Jukebox

// Using any mp3 you can find online, create a simple web page where you can play it. After this step, research which JavaScript functions can pause, play, and stop the Jukebox.

// Encapsulate all of this functionality in a JavaScript object so that starting a song is as simple as calling:

var audio;
var playlist;
var tracks;
var current;

init();
function Jukebox(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}
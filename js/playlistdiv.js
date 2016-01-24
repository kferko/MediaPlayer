$(document).ready(function(){

$("#radams1").click(function(){
	// call the addSong function
	juke.addSongs(radams1);
	// console.log(juke.currentSong);
	// get the name of the song and add it to our playlist
	for (var i = 0; i < radams1.length; i++){
		$("#songlist").find("ul").append("<li class='item'>" + radams1[i].name + "</li>");
	}
  $("#albumart1").fadeIn("slow");
});
$("#radams2").click(function(){
	// call the addSong function
	juke.addSongs(radams2);
	// console.log(juke.currentSong);
	// get the name of the song and add it to our playlist
	for (var i = 0; i < radams2.length; i++){
		$("#songlist").find("ul").append("<li class='item'>" + radams2[i].name + "</li>");
	}
  $("#albumart1").fadeToggle();
  $("#albumart2").fadeIn("slow");
});

// click a song in the list and make it the current song
$("ul").on('click', 'li.item', function(){
	// pause the current song first
	juke.currentSong.pause();
	// find the current index of the song in the list and set it to be the current song
	juke.currentIndex = ($(this).index());
	juke.setSong(juke.playlist[juke.currentIndex]);
	juke.play();
});


// click expands a div's height to show full content. 
// going to have to use a nested set

$('#pldiv1').on({
    mouseenter: function() {
      $(this).css({border: '0 solid rgba(255,255,255, 0.4)'}).animate({borderWidth: 1});
      $(this).animate({height:$('#radams1').height(),}), 500;},
    mouseleave: function() {
      $(this).animate({height:30}), 500;
      $(this).animate({borderWidth: 0});
    }
});
$('#pldiv2').on({
    mouseenter: function() {
      $(this).css({border: '0 solid rgba(255,255,255, 0.4)'}).animate({borderWidth: 1});
      $(this).animate({height:$('#radams2').height(),}), 500;},
    mouseleave: function() {
      $(this).animate({height:30}), 500;
      $(this).animate({borderWidth: 0});
    }
});

// full screen background - youtube video
$('#video').YTPlayer({
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
function fadeIt() {
       vol1.animate({opacity:'0.4'}, 5000);
       vol1.animate({opacity:'0.1'}, 2000);
       vol1.animate({opacity:'0.6'}, 8000, fadeIt);
    }
fadeIt();





});
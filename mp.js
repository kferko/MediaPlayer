// You've had a bit of time to get familiar with object oriented JavaScript. 
// Time to use that knowledge to make the coolest juke joint in the place!
// Using any mp3 you can ﬁnd online, create a simple web page where you can play it. 
// After this step, research which JavaScript functions can pause, play, and stop the Jukebox.
// Encapsulate all of this functionality in a JavaScript object so that 
// starting a song is as simple as calling:
//  Jukebox.play()


// Your JavaScript Jukebox must: 
// 1. Display at least one song on the page when the page loads 
// 2. Give the user the ability to play that song, without using the "built-in" play button. This could be through a diﬀerent button, through clicking or mousing over an image on the page, or any other device of your choosing.
// 3. Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a diﬀerent button, through clicking or mousing over an image on the page, or any other device of your choosing.
// 4. Give the user the ability to load at least one diﬀerent song into the Jukebox besides the one that is loaded when the page initially renders
// 5. The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs. 

// Bonus features: 
// 1. Playlist of songs, allows the user to queue up the next song 
// 2. Feature to request a random song.
function Jukebox(songs){
    // this.location = location
    this.songs = songs
    // this.playlists = []
    this.tune = new Audio(songs[0].url)
		this.play = function(){
            this.tune = new Audio(songs[0].url);
			// var song = $(".playing_song_div").find('audio')[0].play();
			// var song_name = $(".playing_song_div").find('audio source').attr('src')
		};
		this.pause = function(){
			this.tune.pause();
		};
		this.stop = function(){
			$(".playing_song_div").find('audio')[0].load();
		};
	};
var my_jukebox = new Jukebox(my_songs);
// my_jukebox.albums

$(document).ready(function(){

	$(".play_button").click(function(e){
		e.preventDefault();
		my_jukebox.play();
	});

	$(".pause_button").click(function(e){
		e.preventDefault();
		my_jukebox.pause();
	});

	$(".stop_button").click(function(e){
		e.preventDefault();
		my_jukebox.stop();
	});
});
// var audio;
// var list;
// var tracks;
// var current;
// function dj(){
//     current = 0;
//     audio = $('audio');
//     list = $('.list');
//     player = list.find('li a');
//     duration = player.length - 1;
//     audio[0].volume = .10;
//     list.find('a').click(function(e){
//         e.preventDefault();
//         loc = $(this);
//         current = loc.parent().index();
//         run(loc, audio[0]);
//     });
//     audio[0].addEventListener('ended',function(e){
//         current++;
//         if(current == duration){
//             current = 0;
//             loc = list.find('a')[0];
//         }else{
//             loc = list.find('a')[current];    
//         }
//         run($(loc),audio[0]);
//     });
// }
// $(".next_button").click (function run(loc, disc){
//         disc.src = loc.attr('href');
//         par = loc.parent();
//         par.addClass('active').siblings().removeClass('active');
//         audio[0].load();
//         audio[0].play();
// });

function Playlists (){}

















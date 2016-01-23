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

function Jukebox(){
		this.play = function(){
			var song = $(".playing_song_div").find('audio')[0].play();
			var song_name = $(".playing_song_div").find('audio source').attr('src')
		};
		this.pause = function(){
			$(".playing_song_div").find('audio')[0].pause();
		};
		this.stop = function(){
			$(".playing_song_div").find('audio')[0].load();
		};
	};
var my_jukebox = new Jukebox;

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

// Dragula allows for easy drag and drop from one container to another.
dragula([document.querySelector('#left'), document.querySelector('#right')]);
});





















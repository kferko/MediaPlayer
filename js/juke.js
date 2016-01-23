function Jukebox(){
	this.playlist = [];
	this.currentIndex = 0;
	this.currentSong;
	this.addSongs = function(playlist){
		// for a single song 
		if(this.playlist.length == 0){
			this.setSong(playlist[0]);
		}
		// for a list of songs
		for(var i =0; i < playlist.length; i++){
			this.playlist.push(playlist[i]);
		}
	}
	this.setSong = function(song){
		this.currentSong = new Audio(song.url);
	}
	this.play = function(){
		if(this.currentSong){
		this.currentSong.play();
		// determine if the current song is over and play the next - call next function
		this.currentSong.addEventListener('ended', function(){
		this.next();
		});
		}
	}
	this.pause = function(){
		if(this.currentSong){
		this.currentSong.pause();
		}
	}
	this.previous = function(){
		// have to pause the current song
		this.currentSong.pause();
		// if the song is a single song, just go to the start of current song
		if (this.currentIndex == 0){
			this.currentSong.load();
		}
		// go to the previous song in the playlist
		else {
			this.currentIndex --;
			this.setSong(this.playlist[this.currentIndex]);
			this.play();
		}
	}
	this.next = function(){
		// have to pause the current song
		this.currentSong.pause();
		// if the song is a single song, go back to the start of this song
		if (this.playlist.length == 1){
			this.currentSong.load();
		}
		// if the song is the last song in the playlist, go back to the very first
		else if (this.currentIndex == this.playlist.length - 1){
			this.currentIndex = 0;
			this.setSong(this.playlist[this.currentIndex]);
			this.play();
		}
		// just go to the next song in the playlist
		else {
			this.currentIndex ++;
			this.setSong(this.playlist[this.currentIndex]);
			this.play();
		}
	}
}
var juke = new Jukebox();
// after creating a playlist in song.js add it here with juke.addSongs(playlist#)
console.log(juke.playlist);
console.log(juke.currentSong);
// juke.currentSong.addEventListener('ended', function(){
// 	juke.next();
// })


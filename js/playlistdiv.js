$(document).ready(function(){

$("#radams1").click(function(){
	// call the addSong function
	juke.addSongs(radams1);
	// console.log(juke.currentSong);
	// get the name of the song and add it to our playlist
	for (var i = 0; i < radams1.length; i++){
		$("#songlist").find("ul").append("<li class='item'>" + radams1[i].name + "</li>");
	}
});
$("#radams2").click(function(){
	// call the addSong function
	juke.addSongs(radams2);
	// console.log(juke.currentSong);
	// get the name of the song and add it to our playlist
	for (var i = 0; i < radams2.length; i++){
		$("#songlist").find("ul").append("<li class='item'>" + radams2[i].name + "</li>");
	}
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


});
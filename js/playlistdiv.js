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
$("#radams3").click(function(){
	// call the addSong function
	juke.addSongs(radams2);
	// console.log(juke.currentSong);
	// get the name of the song and add it to our playlist
	for (var i = 0; i < radams3.length; i++){
		$("#songlist").find("ul").append("<li class='item'>" + radams3[i].name + "</li>");
	}
  $("#albumart1").fadeToggle();
  $("#albumart2").fadeIn("slow");
});
$("#radams4").click(function(){
	// call the addSong function
	juke.addSongs(radams2);
	// console.log(juke.currentSong);
	// get the name of the song and add it to our playlist
	for (var i = 0; i < radams4.length; i++){
		$("#songlist").find("ul").append("<li class='item'>" + radams4[i].name + "</li>");
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
      $(this).css({outline: '1px solid rgba(255,255,255, 0.4)'}).animate();
      $(this).animate({height:$('#radams1').height(),}), 500;
      $(this).css({background: 'rgba(0,0,0, 0.7)'}),500;},
    mouseleave: function() {
   	  $(this).css({outline: '0px solid rgba(255,255,255, 0.4)'}).animate()
      $(this).animate({height:30}), 500;
      $(this).css({background: ''}), 500;},
});
$('#pldiv2').on({
    mouseenter: function() {
      $(this).css({outline: '1px solid rgba(255,255,255, 0.4)'}).animate();
      $(this).animate({height:$('#radams2').height(),}), 500;
  	  $(this).css({background: 'rgba(0,0,0, 0.7)'}),500;},
    mouseleave: function() {
      $(this).animate({height:30}), 500;
      $(this).css({outline: '0px solid rgba(255,255,255, 0.4)'}).animate()
      $(this).css({background: ''}), 500;
    }
});
$('#pldiv3').on({
    mouseenter: function() {
      $(this).css({outline: '1px solid rgba(255,255,255, 0.4)'}).animate();
      $(this).animate({height:$('#radams2').height(),}), 500;
  	  $(this).css({background: 'rgba(0,0,0, 0.7)'}),500;},
    mouseleave: function() {
      $(this).animate({height:30}), 500;
      $(this).css({outline: '0px solid rgba(255,255,255, 0.4)'}).animate()
      $(this).css({background: ''}), 500;
    }
});
$('#pldiv4').on({
    mouseenter: function() {
      $(this).css({outline: '1px solid rgba(255,255,255, 0.4)'}).animate();
      $(this).animate({height:$('#radams2').height(),}), 500;
  	  $(this).css({background: 'rgba(0,0,0, 0.7)'}),500;},
    mouseleave: function() {
      $(this).animate({height:30}), 500;
      $(this).css({outline: '0px solid rgba(255,255,255, 0.4)'}).animate()
      $(this).css({background: ''}), 500;
    }
});





});
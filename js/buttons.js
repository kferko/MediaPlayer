$(document).ready(function(){
	$("#playb").click(function(e){
		e.preventDefault();
		juke.play();
		console.log(juke.currentSong);
		// $('#playb').fadeTo(0.1);
		// $('.pause').show().css( "display", "inline-block");
	});
	$("#pauseb").click(function(e){
		e.preventDefault();
		juke.pause();
		// $('.pause').hide();
		// $('.play').show();
	});
	$("#prevb").click(function(e){
		e.preventDefault();
		juke.previous();
		console.log(juke.currentSong);
	});
	$("#nextb").click(function(e){
		e.preventDefault();
		juke.next();
		console.log(juke.currentSong);
	});
});
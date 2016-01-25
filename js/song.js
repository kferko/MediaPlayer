
// create an object of each song
function Song(name,url){
	this.name = name;
	this.url = url;
}
// create a playlist
var adams1 = new Song("She Wants To Play Hearts", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t07.mp3");
var adams2 = new Song("Damn Sam (I Love a Woman That Rains)", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d2t02.mp3");
var adams3 = new Song("Firecracker", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d2t06.mp3");
var adams4 = new Song("Harder Now That It's Over", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t10.mp3");

// name the playlist to be added and its elements - name it according to name of div
var radams1 =[adams1,adams2,adams3,adams4];
	for (var i = 0; i < radams1.length; i++){
		$("#radams1").find("ul").append("<li>" + radams1[i].name + "</li>");
	}

// create another playlist
var adams5 = new Song("Hallelujah", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t03.mp3");
var adams6 = new Song("New York, New York", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t06.mp3");
// name the playlist to be added and its elements
var radams2 =[adams5,adams6];
	for (var i = 0; i < radams2.length; i++){
		$("#radams2").find("ul").append("<li>" + radams2[i].name + "</li>");
	}

// create another playlist
var adams7 = new Song("Hallelujah", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t03.mp3");
var adams8 = new Song("New York, New York", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t06.mp3");
// name the playlist to be added and its elements
var radams3 =[adams7,adams8];
	for (var i = 0; i < radams3.length; i++){
		$("#radams3").find("ul").append("<li>" + radams3[i].name + "</li>");
	}

// create another playlist
var adams9 = new Song("Hallelujah", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t03.mp3");
var adams10 = new Song("New York, New York", "https://archive.org/download/ryanadams2006-10-17.sbd.flac16/ryanadams2006-10-17.sbd.d1t06.mp3");
// name the playlist to be added and its elements
var radams4 =[adams9,adams10];
	for (var i = 0; i < radams4.length; i++){
		$("#radams4").find("ul").append("<li>" + radams4[i].name + "</li>");
	}
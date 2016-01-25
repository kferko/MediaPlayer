
// create an object of each song
function Song(name,url){
	this.name = name;
	this.url = url;
}
// create a playlist
var adams1 = new Song("Cobwebs", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t01.mp3");
var adams2 = new Song("Crossed Out Name", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t02.mp3");
var adams3 = new Song("Everybody Knows", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t03.mp3");
var adams4 = new Song("When The Stars Go Blue", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t04.mp3");

// name the playlist to be added and its elements - name it according to name of div
var radams1 =[adams1,adams2,adams3,adams4];
	for (var i = 0; i < radams1.length; i++){
		$("#radams1").find("ul").append("<li>" + radams1[i].name + "</li>");
	}

// create another playlist
var adams5 = new Song("Fix It", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t05.mp3");
var adams6 = new Song("Let It Ride", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t06.mp3");
var adams7 = new Song("Off Broadway", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t07.mp3");
var adams8 = new Song("Go Easy", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t08.mp3");
// name the playlist to be added and its elements
var radams2 =[adams5,adams6,adams7,adams8];
	for (var i = 0; i < radams2.length; i++){
		$("#radams2").find("ul").append("<li>" + radams2[i].name + "</li>");
	}

// create another playlist
var adams9 = new Song("Sink Ships", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t09.mp3");
var adams10 = new Song("Come Pick Me Up", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t10.mp3");
var adams11 = new Song("I Taught Myself To Grow Old", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t11.mp3");
// name the playlist to be added and its elements
var radams3 =[adams9,adams10,adams11];
	for (var i = 0; i < radams3.length; i++){
		$("#radams3").find("ul").append("<li>" + radams3[i].name + "</li>");
	}

// create another playlist
var adams12 = new Song("Two", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t12.mp3");
var adams13 = new Song("Natural Ghost", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t13.mp3");
var adams14 = new Song("Magick", "https://archive.org/download/ryanadams2008-12-13.live2cd.flac16/ryanadams2008-12-13t14.mp3");
// name the playlist to be added and its elements
var radams4 =[adams12,adams13,adams14];
	for (var i = 0; i < radams4.length; i++){
		$("#radams4").find("ul").append("<li>" + radams4[i].name + "</li>");
	}

// create another playlist
// Fort Adams
var adams15 = new Song("Gimme Something Good", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/01GimmeSomethingGood.mp3");
var adams16 = new Song("Magick", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/02Magick.mp3");
var adams17 = new Song("Stay With Me", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/03StayWithMe.mp3");
var adams18 = new Song("Fix It", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/04FixIt.mp3");
var adams19 = new Song("Dirty Rain", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/06DirtyRain.mp3");
// name the playlist to be added and its elements
var radams5 =[adams15,adams16,adams17,adams18,adams19];
	for (var i = 0; i < radams5.length; i++){
		$("#radams5").find("ul").append("<li>" + radams5[i].name + "</li>");
	}


var adams20 = new Song("Let It Ride", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/07LetItRide.mp3");
var adams21 = new Song("Shadows", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/09Shadows.mp3");
var adams22 = new Song("Oh My Sweet Carolina", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/11OhMySweetCarolina.mp3");
var adams23 = new Song("Everybody Knows", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/13EverybodyKnows.mp3");
var adams24 = new Song("Catherine", "https://archive.org/download/RyanAdams2014-07-25.RyanAdams2014-07-25/15Catherine.mp3");
// name the playlist to be added and its elements
var radams6 =[adams20,adams21,adams22,adams23,adams24];
	for (var i = 0; i < radams6.length; i++){
		$("#radams6").find("ul").append("<li>" + radams6[i].name + "</li>");
	}

// Electric Factory
var adams25 = new Song("Kiss Before I Go", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t01.mp3");
var adams26 = new Song("The End", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t02.mp3");
var adams27 = new Song("What Sin", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t03.mp3");
var adams28 = new Song("September", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t04.mp3");
var adams29 = new Song("Harder Now That It Is Over", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t05.mp3");
var adams30 = new Song("To Be Young", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t06.mp3");
var adams31 = new Song("Games", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t07.mp3");
var adams32 = new Song("Rescue Blues", "https://archive.org/download/radams2005-05-20.flac/radams2005-05-20d1t08.mp3");
// name the playlist to be added and its elements
var radams7 =[adams25,adams26,adams27,adams28,adams29,adams30,adams31,adams32];
	for (var i = 0; i < radams7.length; i++){
		$("#radams7").find("ul").append("<li>" + radams7[i].name + "</li>");
	}

// The Catalyst
var adams33 = new Song("Dear Chicago", "https://archive.org/download/ra2007-07-21/ra2007-07-21d1t03.mp3");
// name the playlist to be added and its elements
var radams8 =[adams33];
	for (var i = 0; i < radams8.length; i++){
		$("#radams8").find("ul").append("<li>" + radams8[i].name + "</li>");
	}

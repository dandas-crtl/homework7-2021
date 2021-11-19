var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	//var val = document.querySelector("#slider").value; volume.innerHTML = (val + "%");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New Video Speed: " + video.playbackRate);
	video.play();
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New Video Speed: " + video.playbackRate);
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime - 15 + video.currentTime
	if(video.currentTime == video.duration) {
		video.currentTime = 0;
		console.log("Original Location");
		video.play();}
	else{
		console.log("New Location " + video.currentTime)
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var val = document.querySelector("#slider").value;
	video.volume = val/100;
	volume.innerHTML = (val + "%");
	console.log(video.volume);
});

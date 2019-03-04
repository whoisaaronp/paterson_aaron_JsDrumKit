(() => {

	// hook up the JS file
	console.log("fired! rady to jam out");

	function playDrumSound(e) {
		// e in the brakets is the event object -> 
		// ges tje generated eiwht every event and psses soem data throug
		// debugger;
		
		// When I hit the corresponding key it play THAT KEY.
		
	  	// Try selecting the matching audio element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
		// Set the press key function to immediately go back to the beginning when pressed.
		// Below stop the js code from running EXIT!! STOP THE CODE HERE
		if(!audio) { return;}
		audio.currentTime = 0;
		audio.play();
	}
	// when the user pushes a key
	window.addEventListener('keydown', playDrumSound);
})();
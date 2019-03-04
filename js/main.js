(() => {

	// hook up the JS file
	// console.log("fired! rady to jam out");

	function playDrumSound(e) {
		// e in the brakets is the event object -> 
		// ges tje generated eiwht every event and psses soem data throug
		// debugger;
		
		// When I hit the corresponding key it play THAT KEY.
		
	  	// Try selecting the matching audio element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
		
		
		// Below stop the js code from running EXIT!! STOP THE CODE HERE
		if(!audio) { return;}
		// Set the press key function to immediately go back to the beginning when pressed.
		audio.currentTime = 0;
		audio.play();


		// Select teh parent div and animate it
		// Try selecting the matching parent div element
		let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		key.classList.add('playing');

	}

	function removePlayingClass(e) {
		//listern for a CSS transition to finish and then reset the element
		//by removing the plaing class

		if (e.propertyName !== "transform") {
			return;
		} else {
			console.log('Do some STUFF!!');
			e.currentTarget.classList.remove('playing');
		}
	}
	// when the user pushes a key
	window.addEventListener('keydown', playDrumSound);

	// Create the event 
	const key = Array.from(document.querySelectorAll(`.key`));
	key.forEach(key => key.addEventListener('transitionend', removePlayingClass));
})();
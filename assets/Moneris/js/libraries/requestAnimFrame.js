var msInterval = 33;	// Originally had this set to 15

window.requestAnimFrame = (function() {
	var useRAF = true;
	if (useRAF) {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, msInterval);
		};
	} else {
		return function(callback) {
			window.setTimeout(callback, msInterval);
		};
	}
})();
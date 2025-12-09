$(document).ready(function() {
	sw.init();
})

/* App singleton */

var sw = {
	init: function() {
	},
	log: function(s) {
		if (typeof (window.console) != "undefined") {
			console.log(s);
		}
	}	
};
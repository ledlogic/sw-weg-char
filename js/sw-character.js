sw.character = {
	stats: {},
	attributes: [],
	equipment: [],
	
	init: function() {
	},
	
	render: function() {
		for (k in sw.character.stats) {
			var $c = $(".container");
			var h = "<div id=\"" + k + "\" class=\"character-stat\">" + sw.character.stats[k] + "</div>";
			$c.append(h);
		}
	}
};
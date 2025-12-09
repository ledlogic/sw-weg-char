sw.init = function() {
	sw.load.init();
};

sw.load = {
	init: function() {
		var url = purl();
		var cn = url.param('cn');
		if (cn) {
			sw.load.loadCharacter(cn);
			return;
		}
	},
	
	loadCharacter: function(cn) {
		$.getJSON('data/' + cn + '.json', function(d) {
	    	for (k in d) {
				switch (true) {
					case (k == 'attributes'):
						for (k2 in d[k]) {
							sw.character.attributes[k2] = d[k][k2];
						}
						break;
					case (k == 'equipment'):
						for (k2 in d[k]) {
							sw.character.equipment[k2] = d[k][k2];
						}
						break;
					default:
						sw.character.stats[k] = d[k];
				}
			}
			console.log(sw.character);
		});
	}
};
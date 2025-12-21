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
			for (var k in d) {
				switch (true) {
					case (k == 'attributes'):
						for (var k2 in d[k]) {
							sw.character.attributes[k2] = d[k][k2];
						}
						break;
					case (k == 'equipment'):
						for (var k2 in d[k]) {
							sw.character.equipment[k2] = d[k][k2];
						}
						break;
					case (k == 'schwartz'):
						sw.character.schwartz = d[k];
						break;
					case (k.indexOf("character-") === 0):
						sw.character.stats[k] = d[k];
						break;
					default:
						break;
				}
			}
			console.log(sw.character);

			sw.character.render();
		});
	}
};
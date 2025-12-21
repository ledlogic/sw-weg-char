sw.character = {
	stats: {},
	attributes: [],
	equipment: [],
	
	init: function() {
	},
	
	render: function() {
		var s = sw.character.stats;
		var $c = $(".container");
		for (var ks in s) {
			var h = "<div id=\"sw-" + ks + "\" class=\"sw-stat\">" + s[ks] + "</div>";
			$c.append(h);
		}
		
		var a = sw.character.attributes;
		for (var ka in a) {
			var va = a[ka]; 
			sw.logObj("va", va);
			
			var attributeName = va["attribute-name"];
			var attributeValue = va["attribute-value"];

			var h = "<div id=\"sw-attribute-cover-" + attributeName.toLowerCase() + "\" class=\"sw-attribute-cover\">";

			h += "<div class=\"sw-attribute sw-attribute-name sw-attribute-base\">" + sw.attributes[attributeName] + "</div>";
			h += "<div class=\"sw-attribute sw-attribute-value sw-attribute-base\">" + attributeValue + "</div>";
			
			var skills = va["skills"];
			sw.logObj("skills", skills);

			var mt = 16;
			for (var kaa in skills) {
				var skill = skills[kaa]; 
				
				var skillName = skill["skill-name"];
				var skillValue = skill["skill-value"];
				
				var cls = "";
				switch (true) {
					case (skillName.length > 20):
						cls += " sw-skill-name-long";
						break;
					case (skillName.length > 14):
						cls = " sw-skill-name-med";
						break;
				}

				h += "<div class=\"sw-skill-cover\" style=\"margin-top:" + mt + "px;\">";
				h += "<div class=\"sw-skill sw-skill-name" + cls + "\">" + skillName + "</div>";
				h += "<div class=\"sw-skill sw-skill-value\">" + skillValue + "</div>";
				h += "</div>";

				mt = 0;

				sw.logObj("skill", skill);
			}
			h += "</div>";
			$c.append(h);
		}
		
		var e = sw.character.equipment;
		var h = "<div id=\"sw-equipment-cover\" class=\"sw-equipment-cover\">";
		for (var ke in e) {
			h += "<div id=\"sw-" + ke + "\" class=\"sw-equipment\">" + e[ke] + "</div>";
		}
		h += "</div>";
		$c.append(h);

		var w = sw.character.schwartz;
		for (var kw in w) {
			var schwartz = w[kw]; 
			var schwartzName = schwartz["schwartz-name"];
			var schwartzValue = schwartz["schwartz-value"];
			h += "<div id=\"sw-schwartz-" + schwartzName + "\" class=\"sw-schwartz\">" + schwartzValue + "</div>";
		}
		$c.append(h);

	}
};
sw.character = {
	stats: {},
	attributes: [],
	equipment: [],
	
	init: function() {
	},
	
	render: function() {
		var s = sw.character.stats;
		for (var ks in s) {
			var $c = $(".container");
			var h = "<div id=\"sw-" + ks + "\" class=\"sw-stat\">" + s[ks] + "</div>";
			$c.append(h);
		}
		
		var a = sw.character.attributes;
		for (var ka in a) {
			var va = a[ka]; 
			sw.logObj("va", va);
			
			var attributeName = va["attribute-name"];
			var attributeValue = va["attribute-value"];

			var h = "<div id=\"sw-attribute-cover-" + attributeName.toLowerCase() + "\">";

			h += "<div class=\"sw-attribute sw-attribute-name sw-attribute-base\">" + sw.attributes[attributeName] + "</div>";
			h += "<div class=\"sw-attribute sw-attribute-value sw-attribute-base\">" + attributeValue + "</div>";
			
			var skills = va["skills"];
			sw.logObj("skills", skills);

			var mt = 16;
			for (var kaa in skills) {
				var skill = skills[kaa]; 
				
				var skillName = skill["skill-name"];
				var skillValue = skill["skill-value"];
				
				var cls = "div.sw-skill-cover";

				h += "<div class=\"sw-skill-cover\" style=\"margin-top:" + mt + "px;\">";
				h += "<div class=\"sw-skill sw-skill-name" + (skillName.length > 14 ? " sw-skill-name-long" : "") + "\">" + skillName + "</div>";
				h += "<div class=\"sw-skill sw-skill-value\">" + skillValue + "</div>";
				h += "</div>";

				mt = 0;

				sw.logObj("skill", skill);
			}
			h += "</div>";
			$c.append(h);
		}
	}
};
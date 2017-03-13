Blacklight.onLoad( function() {
	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "#work_contributor_authorities", inputField : "input.work_contributor" });
	as.initialize();
});

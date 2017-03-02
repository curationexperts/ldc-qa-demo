Blacklight.onLoad( function() {
	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "#work_contributor_authorities", inputField : "[name='work[contributor][]']" });
	as.initialize();
});

Blacklight.onLoad( function() {

	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "#work_creator_authorities", inputField : "[name='work[creator][]']" });
	as.initialize();
});

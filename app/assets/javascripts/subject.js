Blacklight.onLoad( function() {
	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "#work_subject_authorities", inputField : "[name='work[subject][]']" });
	as.initialize();
});

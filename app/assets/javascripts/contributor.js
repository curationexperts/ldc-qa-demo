Blacklight.onLoad( function() {
	var authoritySelect = require('authority_select');
<<<<<<< HEAD
	var as = new authoritySelect.AuthoritySelect({ selectBox : "#work_contributor_authorities", inputField : "[name='work[contributor][]']" });
=======
	var as = new authoritySelect.AuthoritySelect({ selectBox : "#work_contributor_authorities", inputField : "input.work_contributor" });
>>>>>>> multiple-fields-autocomplete
	as.initialize();
});

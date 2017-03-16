Blacklight.onLoad( function() {
	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "select#work_contributor", inputField : "input.work_contributor" });
	as.initialize();
});

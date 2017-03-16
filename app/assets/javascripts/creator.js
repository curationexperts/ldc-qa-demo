Blacklight.onLoad( function() {
	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "select#work_creator", inputField : "input.work_creator" });
	as.initialize();
});

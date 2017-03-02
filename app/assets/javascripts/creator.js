$("document").ready(function() {
    if ($("[name='work[authorities]").length) {
	var authoritySelect = require('authority_select');
	var as = new authoritySelect.AuthoritySelect({ selectBox : "[name='work[authorities]']", inputField : "[name='work[creator][]']" });
	as.initialize();
    }
});

$('document').ready(function() {
    if ($("[name='work[authorities]").length) {
	authoritySelect({ select : "[name='work[creator_authorities]']", input : "[name='work[creator][]']" });
    }
});

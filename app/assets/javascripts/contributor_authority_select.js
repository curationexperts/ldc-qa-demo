$('document').ready(function() {
    if ($("[name='work[contributor_authorities]").length) {
	authoritySelect({ select : "[name='work[contributor_authorities]']", input : "[name='work[contributor][]']" });
    }
});

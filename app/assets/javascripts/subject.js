$('document').ready(function() {
    if ($("[name='work[authorities]").length) {
	authoritySelect({ select : "[name='work[authorities]']", input : "[name='work[subject][]']" });
    }
});

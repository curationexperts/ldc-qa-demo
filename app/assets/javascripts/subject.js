$("document").ready(function() {
    if ($("[name='work[authorities]").length) {
	authoritySelect({ inputClass : ".work_subject", selectBox : "[name='work[authorities]']", inputField : "[name='work[subject][]']" });
    }
});

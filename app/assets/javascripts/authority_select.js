var authoritySelect = function (options) {
	$(options.selectBox).on('change', function (data) {
		var selection = $(this).val();
		$(options.inputField).each(function (data) { $(this).data('autocomplete-url', selection) });
		Hyrax.autocomplete();
	});
	
	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
		    $(options.inputField).each(function (data) { $(this).data('autocomplete-url', $(options.selectBox).val()) });
			Hyrax.autocomplete();
		});
	});

	var config = { childList: true };
	observer.observe(document.body, config);
}


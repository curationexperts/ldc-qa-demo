var authoritySelect = function(options) {
    $(options.selectBox).on('change', function(data) {
	var selection = $(this).val();
	$(options.inputField).each(function(data) { $(this).data('autocomplete-url',selection) });
	Hyrax.autocomplete();
    });
    
    $(options.inputClass).on('click', '.controls-add-text' ,function(data) {
	var selection = $(options.select).val();
	$(document).on('DOMNodeInserted', function() {
	    $(options.input).each(function(data) { $(this).data('autocomplete-url',selection) });
	    Hyrax.autocomplete();
	});
    });  
}


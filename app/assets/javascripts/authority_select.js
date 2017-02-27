var authoritySelect = function(options) {
    
    
    $(options.select).on('change', function(data) {
	var selection = $(this).val();
	$(options.input).each(function(data) { $(this).data('autocomplete-url',selection) });
	Hyrax.autocomplete();
    });
    
    $('.work_subject').on('click', '.controls-add-text' ,function(data) {
	var selection = $(options.select).val();
	$(document).on('DOMNodeInserted', function() {
	$(options.input).each(function(data) { $(this).data('autocomplete-url',selection) });
	    Hyrax.autocomplete();
	});
    });  
}


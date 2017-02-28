export class AuthoritySelect {
    constructor(options) {
	this.selectBox = options.selectBox;
	this.inputField = options.inputField;
	this.inputClass = options.inputClass;
    }

    selectBoxChange() {
	var selectBox = this.selectBox;
	var inputField = this.inputField;
	
	$(selectBox).on('change', function (data) {
	    var selectBoxValue = $(this).val();
	    $(inputField).each(function (data) { $(this).data('autocomplete-url', selectBoxValue);
				
					       });
	    Hyrax.autocomplete();
	});
    }

    observeAddedElement() {
	var selectBox = this.selectBox;
	var inputClass = this.inputClass;
	
	var observer = new MutationObserver(function (mutations) {
	    mutations.forEach(function (mutation) {
		$(inputClass).each(function (data) { $(this).data('autocomplete-url', $(selectBox).val()) });
		Hyrax.autocomplete();
	    });
	});

	var config = { childList: true };
	observer.observe(document.body, config);
    }

    initialize() {
	this.selectBoxChange();
	this.observeAddedElement();
    }
}


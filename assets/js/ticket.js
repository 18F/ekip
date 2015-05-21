$(document).ready(function() {

	recordLocator = $('.ticket__record-locator');

	recordLocator.text('');

	var ticketEndpoint = recordLocator.data("endpoint");
	$.getJSON(ticketEndpoint, {
		zip: "91381",
		n: "1"
	}).done(function(data) {
		recordLocator.text(data['record_locators'][0]);
	});
});
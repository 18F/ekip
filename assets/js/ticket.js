$(document).ready(function() {

	recordLocator = $('.ticket__record-locator');

	var ticketEndpoint = recordLocator.data("endpoint");
	$.getJSON(ticketEndpoint, {
		zip: "91381",
		n: "1"
	}).done(function(data) {
		$(recordLocator).find('.default_id').remove();
		$(recordLocator).find("img").JsBarcode(data['record_locators'][0],{format:"CODE128",displayValue:true,fontSize:20, height:40});
	});
});
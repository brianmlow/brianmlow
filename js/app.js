$(document).ready(function() {

	$('#copyright-year').text((new Date()).getFullYear());

	//
	// expand/collapse work category links
	//
	$('.category').click(function() {
		$('.category_container').slideUp();
		$(this).toggleClass('open_cat');
		if ($(this).next('.category_container').css('display') === 'none') {
			$(this).next('.category_container').slideDown();
		}
	});
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top'),
        $scroll_to_bottom = $('.cd-bottom');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0,
		 	}, scroll_duration
		);
	});

    // smooth scroll to bottom
	$scroll_to_bottom.on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $(document).height(),
		 	}, scroll_duration
		);
	});
});

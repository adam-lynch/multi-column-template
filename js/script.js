$( 'body' ).on('click', '.sidebar', function(){
	$(this).toggleClass('active');
})
	.on('click', '.post', function(){
		$('.sidebar').removeClass('active');
	})
	.find('.logo a' ).on('click', function(e){
		e.stopPropagation();
	})
	.end()
	.find('.post').mousewheel( function( e, delta ){

	   //TODO: Don't want to do this all the time, on all devices

		e.preventDefault();
		this.scrollLeft -= (delta * 30);
 	});

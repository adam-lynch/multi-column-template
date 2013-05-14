$( 'body' ).on('click', '.sidebar', function(){
	$(this).toggleClass('active');
})
	.on('click', '.post', function(){
		$('.sidebar').removeClass('active');
	})
	.find('.sidebar a').on('click', function(e){
		e.stopPropagation();
		if( '#' === this.href || '#' === this.href.substr(-1) && -1 < this.href.indexOf(window.location.href)){
			e.preventDefault();
		}
	})
	.end()
	.find('.post').mousewheel( function( e, delta ){

	   //TODO: Don't want to do this all the time, on all devices

		e.preventDefault();
		this.scrollLeft -= (delta * 30);
 	});

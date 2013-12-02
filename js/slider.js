(function( $ ){
	$.fn.imageslider = function() {
		var theImage = $(this).find('li');
		var transitionType = $(this).attr('data-transition');
		var theWidth = theImage.width();
		var totalWidth = theImage.length * theWidth;
		var margingoto;
		var scrollspeed;
		var defaultscrollspeed = $(this).attr('data-scrollspeed');
		if(!defaultscrollspeed){defaultscrollspeed = 850;}
		$(this).find('ul').css({'width' : totalWidth});
		$(this).find('img').each(
		function(intIndex){
		$(this).nextAll('a')
			.bind("click", function(e){
				scrollspeed = defaultscrollspeed;
				e.preventDefault();
				if($(this).is(".next"))	{
					margingoto = (-(intIndex + 1) * theWidth);
					if(Math.abs(margingoto)>=totalWidth){margingoto = 0; scrollspeed = 0.85*scrollspeed;}
					if(transitionType==='fade'){
						$(this).parent('li').parent('ul').fadeOut(scrollspeed);
						scrollspeed = 0;
					}
					$(this).parent('li').parent('ul').animate({
						"margin-left": margingoto
							}, scrollspeed);
					}
					if(transitionType==='fade'){
						scrollspeed = defaultscrollspeed;
						$(this).parent('li').parent('ul').fadeIn(scrollspeed);
					}
				if($(this).is(".previous")){
					margingoto = (-(intIndex - 1) * theWidth);
					if(margingoto>0){margingoto = (-(theImage.length - 1) * theWidth); scrollspeed = 0.85*scrollspeed;}
					if(transitionType==='fade'){
						$(this).parent('li').parent('ul').fadeOut(scrollspeed);
						scrollspeed = 0;
					}
					$(this).parent('li').parent('ul').animate({
						"margin-left": margingoto
					}, scrollspeed);
					if(transitionType==='fade'){
						scrollspeed = defaultscrollspeed;
						$(this).parent('li').parent('ul').fadeIn(scrollspeed);
					}
				}
			});//close .bind()
		});//close .each()
	};
})( jQuery );
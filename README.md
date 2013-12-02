Image-Slide
===========

Simple JavaScript tool for image sliding / fading carousal. 


NOTE: Requires jQuery library.   CSS and LESS files are included for custom styling.  It is recommended to use LESS for easy access to constants. 



Parameters: 

	data-transition
		can be either fade or slide

	data-scrollspeed
		allows for variable speeds on the fade or slide
	
	

BASIC HTML USAGE:

<code>

<div id="image-slider" data-transition="fade" data-scrollspeed="500">
	<ul>
		<li>
			<img src="img/winter-500.jpg" alt="Winter" />
			<a class="previous" href="#">&#9664;</a>
			<a class="next" href="#">&#9654;</a>
			<span class="caption">1. Winter and wonder</span>
		</li>
		<li>
			<img src="img/winter2-500.jpg" alt="Winter" />
			<a class="previous" href="#">&#9664;</a>
			<a class="next" href="#">&#9654;</a>
			<span class="caption">2. Snow and trees</span>	
		</li>
		<li>
			<img src="img/winter2-500.jpg" alt="Winter" />
			<a class="previous" href="#">&#9664;</a>
			<a class="next" href="#">&#9654;</a>
			<span class="caption">3. Snow and trees</span>	
		</li>
		<li>
			<img src="img/beach-bg.jpg" alt="Beach" />
			<a class="previous" href="#">&#9664;</a>
			<a class="next" href="#">&#9654;</a>
			<span class="caption">4. Beach</span>	
		</li>
	</ul>
</div>


<script src="js/slider-ck.js"></script>
<script type=“text/javascript”>
$(‘#image-slider').imageslider();
</script>

</code>

NOTE: Slider.js is non-minified, include slider-ck.js for faster loading.


Required components:
jQuery
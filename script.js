/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(function(){

    var $window = $(window);
	var scrollTime = 0.7;
	var scrollDistance = 150;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5
			});

	});
});
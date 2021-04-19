(function($) {

	if ( $(window).width() > 767) {
		$('.video-wrapper').prepend('<video src="video/ech-video2.mp4" autoplay loop playsinline muted class="background-video" id="myVideo"></video>');
		console.log('desktop');
	} else {
		$('.video-wrapper').prepend('<video src="video/ech-video2.mp4" autoplay loop playsinline muted class="background-video" id="myVideo"></video>');
		console.log('mobile');
	}

	var e = document.getElementById("myVideo");
	e.style.opacity = 0;

	var vid = document.getElementById("myVideo");
	vid.oncanplaythrough = function() {
	    setTimeout(function() {
	        var e = document.getElementById('myVideo');
	        fade(e);
	    }, 100);
	};

	function fade(element) {
	    var op = 0;
	    var timer = setInterval(function() {
	        if (op >= 1) clearInterval(timer);
	        element.style.opacity = op;
	        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op += op * 0.1 || 0.1;
	    }, 25);
	}


// SMOOTH SCROLLING
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

	// Bad Image Click function
	$(".bad-design").on("click", function(e){
		e.preventDefault();
		//$('.bad-code').removeClass('active');
		$('.code').html('').hide();
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.image-code .image').append('<img src="img/design_passion.png" alt="Design is my passion" class="animated bounceIn delay-1s" />').slideDown('fast');

			setTimeout(function(){
				$('.image-code .image').slideUp('fast');
				setTimeout(function(){
					$('.image-code img').remove();
				}, 1500);
				$('.bad-design').removeClass('active');
			}, 6500);
		}
	});

	// Poor Code Click Function
	$(".poor-code").on("click", function(e){
		e.preventDefault();
		$('.bad-design').removeClass('active');
		$('.image-code img').hide();
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			//$('.image-code').show();
			$('.code').show();
			$('.code').append('HTTP Error 400 (Bad Request)');
			setTimeout(function(){
				$('.code').append('<br/>HTTP Error 500 (Internal Server Error)');
			}, 1000);
			setTimeout(function(){
				$('.code').append('<br/>Resource not found recursive error');
			}, 2000);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3000);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3250);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3500);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3550);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3600);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3650);
			setTimeout(function(){
				$('.code').append('<br/>Stack overflow, max resources exceeded');
			}, 3700);
			setTimeout(function(){
				$('.code').append('<br/>Do not pass Go, Do not collect £200');
			}, 3750);
			setTimeout(function(){
				$('.code').html('').hide();
				$('.poor-code').removeClass('active');
				// $('.image-code').hide();
			}, 7500);

		}
	});


})(jQuery);
